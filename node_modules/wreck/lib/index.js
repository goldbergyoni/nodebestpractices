'use strict';

// Load modules

const Events = require('events');
const Url = require('url');
const Http = require('http');
const Https = require('https');
const Stream = require('stream');
const Zlib = require('zlib');
const Hoek = require('hoek');
const Boom = require('boom');
const Payload = require('./payload');
const Recorder = require('./recorder');
const Tap = require('./tap');


// Declare internals

const internals = {
    jsonRegex: /^application\/([a-z0-9.]*[+-]json|json)$/,
    shallowOptions: ['agent', 'agents', 'beforeRedirect', 'downstreamRes', 'payload', 'redirected'],
    emitSymbol: Symbol.for('wreck')
};

process[internals.emitSymbol] = process[internals.emitSymbol] || new Events.EventEmitter();


// new instance is exported as module.exports

internals.Client = function (defaults) {

    defaults = defaults || {};
    Hoek.assert(!defaults.agents || (defaults.agents.https && defaults.agents.http && defaults.agents.httpsAllowUnauthorized),
        'defaults.agents must include "http", "https", and "httpsAllowUnauthorized"');

    this._defaults = Hoek.cloneWithShallow(defaults, internals.shallowOptions);

    this.agents = this._defaults.agents || {
        https: new Https.Agent({ maxSockets: Infinity }),
        http: new Http.Agent({ maxSockets: Infinity }),
        httpsAllowUnauthorized: new Https.Agent({ maxSockets: Infinity, rejectUnauthorized: false })
    };

    Events.EventEmitter.call(this);

    // replay request/response events to process[Symbol.for('wreck')]
    const self = this;
    const selfEmit = this.emit;
    this.emit = function () {

        const processEmitter = process[internals.emitSymbol];
        selfEmit.apply(self, arguments);
        processEmitter.emit.apply(processEmitter, arguments);
    };
};

Hoek.inherits(internals.Client, Events.EventEmitter);


internals.Client.prototype.defaults = function (options) {

    Hoek.assert(options && (typeof options === 'object'), 'options must be provided to defaults');

    options = Hoek.applyToDefaultsWithShallow(this._defaults, options, internals.shallowOptions);
    return new internals.Client(options);
};


internals.resolveUrl = function (baseUrl, path) {

    if (!path) {
        return baseUrl;
    }

    const parsedPath = Url.parse(path);
    if (parsedPath.host && parsedPath.protocol) {
        return Url.format(parsedPath);
    }

    const parsedBase = Url.parse(baseUrl);
    parsedBase.pathname = parsedBase.pathname + parsedPath.pathname;
    parsedBase.pathname = parsedBase.pathname.replace(/[/]{2,}/g, '/');
    parsedBase.search = parsedPath.search;      // Always use the querystring from the path argument

    return Url.format(parsedBase);
};


internals.Client.prototype.request = function (method, url, options, callback, _trace) {

    options = Hoek.applyToDefaultsWithShallow(this._defaults, options || {}, internals.shallowOptions);

    Hoek.assert(options.payload === undefined || typeof options.payload === 'string' || typeof options.payload === 'object',
        'options.payload must be a string, a Buffer, a Stream, or an Object');

    Hoek.assert((options.agent === undefined || options.agent === null) || (typeof options.rejectUnauthorized !== 'boolean'),
        'options.agent cannot be set to an Agent at the same time as options.rejectUnauthorized is set');

    Hoek.assert(options.beforeRedirect === undefined || options.beforeRedirect === null || typeof options.beforeRedirect === 'function',
        'options.beforeRedirect must be a function');

    Hoek.assert(options.redirected === undefined || options.redirected === null || typeof options.redirected === 'function',
        'options.redirected must be a function');

    Hoek.assert(options.gunzip === undefined || typeof options.gunzip === 'boolean' || options.gunzip === 'force',
        'options.gunzip must be a boolean or "force"');

    Hoek.assert(options.onRequest === undefined || typeof options.onRequest === 'function',
        'options.onRequest must be a function');

    options.beforeRedirect = options.beforeRedirect || ((redirectMethod, statusCode, location, resHeaders, redirectOptions, next) => next());

    if (options.baseUrl) {
        url = internals.resolveUrl(options.baseUrl, url);
        delete options.baseUrl;
    }

    const uri = Url.parse(url);

    if (options.socketPath) {
        uri.socketPath = options.socketPath;
        delete options.socketPath;
    }

    uri.method = method.toUpperCase();
    uri.headers = options.headers || {};
    const hasContentLength = internals.findHeader('content-length', uri.headers) !== undefined;

    if (options.payload && typeof options.payload === 'object' && !(options.payload instanceof Stream) && !Buffer.isBuffer(options.payload)) {
        options.payload = JSON.stringify(options.payload);
        if (!internals.findHeader('content-type', uri.headers)) {
            uri.headers['content-type'] = 'application/json';
        }
    }

    if (options.gunzip && internals.findHeader('accept-encoding', uri.headers) === undefined) {
        uri.headers['accept-encoding'] = 'gzip';
    }

    const payloadSupported = (uri.method !== 'GET' && uri.method !== 'HEAD' && options.payload !== null && options.payload !== undefined);
    if (payloadSupported &&
        (typeof options.payload === 'string' || Buffer.isBuffer(options.payload)) &&
        (!hasContentLength)) {

        uri.headers = Hoek.clone(uri.headers);
        uri.headers['content-length'] = Buffer.isBuffer(options.payload) ? options.payload.length : Buffer.byteLength(options.payload);
    }

    let redirects = (options.hasOwnProperty('redirects') ? options.redirects : false);      // Needed to allow 0 as valid value when passed recursively

    _trace = (_trace || []);
    _trace.push({ method: uri.method, url });

    const client = (uri.protocol === 'https:' ? Https : Http);

    if (options.rejectUnauthorized !== undefined && uri.protocol === 'https:') {
        uri.agent = options.rejectUnauthorized ? this.agents.https : this.agents.httpsAllowUnauthorized;
    }
    else if (options.agent || options.agent === false) {
        uri.agent = options.agent;
    }
    else {
        uri.agent = uri.protocol === 'https:' ? this.agents.https : this.agents.http;
    }

    if (options.secureProtocol !== undefined) {
        uri.secureProtocol = options.secureProtocol;
    }

    if (options.ciphers !== undefined) {
        uri.ciphers = options.ciphers;
    }

    this.emit('request', uri, options);

    const start = Date.now();
    const req = client.request(uri);

    let shadow = null;                                                                      // A copy of the streamed request payload when redirects are enabled
    let timeoutId;

    const onError = (err) => {

        err.trace = _trace;
        return finishOnce(Boom.badGateway('Client request error', err));
    };
    req.once('error', onError);

    const onResponse = (res) => {

        // Pass-through response

        const statusCode = res.statusCode;
        const redirectMethod = internals.redirectMethod(statusCode, uri.method, options);

        if (redirects === false ||
            !redirectMethod) {

            return finishOnce(null, res);
        }

        // Redirection

        res.destroy();

        if (redirects === 0) {
            return finishOnce(Boom.badGateway('Maximum redirections reached', _trace));
        }

        let location = res.headers.location;
        if (!location) {
            return finishOnce(Boom.badGateway('Received redirection without location', _trace));
        }

        if (!/^https?:/i.test(location)) {
            location = Url.resolve(uri.href, location);
        }

        const redirectOptions = Hoek.cloneWithShallow(options, internals.shallowOptions);
        redirectOptions.payload = shadow || options.payload;                                    // shadow must be ready at this point if set
        redirectOptions.redirects = --redirects;

        return options.beforeRedirect(redirectMethod, statusCode, location, res.headers, redirectOptions, () => {

            const redirectReq = this.request(redirectMethod, location, redirectOptions, finishOnce, _trace);

            if (options.redirected) {
                options.redirected(statusCode, location, redirectReq);
            }
        });
    };

    // Register handlers

    const finish = (err, res) => {

        if (err) {
            req.abort();
        }

        req.removeListener('response', onResponse);
        req.removeListener('error', onError);
        req.on('error', Hoek.ignore);
        clearTimeout(timeoutId);
        this.emit('response', err, { req, res, start, uri });

        if (callback) {
            return callback(err, res);
        }
    };

    const finishOnce = Hoek.once(finish);

    req.once('response', onResponse);

    if (options.timeout) {
        timeoutId = setTimeout(() => {

            return finishOnce(Boom.gatewayTimeout('Client request timeout'));
        }, options.timeout);
        delete options.timeout;
    }

    // Custom abort method to detect early aborts

    const _abort = req.abort;
    let aborted = false;
    req.abort = () => {

        if (!aborted && !req.res && !req.socket) {
            process.nextTick(() => {

                // Fake an ECONNRESET error

                const error = new Error('socket hang up');
                error.code = 'ECONNRESET';
                finishOnce(error);
            });
        }

        aborted = true;
        return _abort.call(req);
    };

    // Write payload

    if (payloadSupported) {
        if (options.payload instanceof Stream) {
            let stream = options.payload;

            if (redirects) {
                const collector = new Tap();
                collector.once('finish', () => {

                    shadow = collector.collect();
                });

                stream = options.payload.pipe(collector);
            }

            stream.pipe(req);

            if (options.onRequest) {
                options.onRequest(req);
            }

            return req;
        }

        req.write(options.payload);
    }

    // Finalize request

    req.end();

    if (options.onRequest) {
        options.onRequest(req);
    }

    return req;
};


internals.redirectMethod = function (code, method, options) {

    switch (code) {
        case 301:
        case 302:
            return method;

        case 303:
            if (options.redirect303) {
                return 'GET';
            }
            break;

        case 307:
        case 308:
            return method;
    }

    return null;
};


// read()

internals.Client.prototype.read = function (res, options, callback) {

    options = Hoek.applyToDefaultsWithShallow(this._defaults, options || {}, internals.shallowOptions);

    // Set stream timeout

    const clientTimeout = options.timeout;
    let clientTimeoutId = null;

    // Finish once

    const finish = (err, buffer) => {

        clearTimeout(clientTimeoutId);
        reader.removeListener('error', onReaderError);
        reader.removeListener('finish', onReaderFinish);
        res.removeListener('error', onResError);
        res.removeListener('close', onResAborted);
        res.removeListener('aborted', onResAborted);
        res.on('error', Hoek.ignore);

        if (err ||
            !options.json) {

            return callback(err, buffer);
        }

        // Parse JSON

        let result;
        if (buffer.length === 0) {
            return callback(null, null);
        }

        if (options.json === 'force') {
            result = internals.tryParseBuffer(buffer);
            return callback(result.err, result.json);
        }

        // mode is "smart", "strict" or true

        const contentType = (res.headers && internals.findHeader('content-type', res.headers)) || '';
        const mime = contentType.split(';')[0].trim().toLowerCase();

        if (!internals.jsonRegex.test(mime)) {
            if (options.json === 'strict') {
                return callback(Boom.notAcceptable('The content-type is not JSON compatible'));
            }
            return callback(null, buffer);
        }

        result = internals.tryParseBuffer(buffer);
        return callback(result.err, result.json);
    };

    const finishOnce = Hoek.once(finish);

    if (clientTimeout &&
        clientTimeout > 0) {

        clientTimeoutId = setTimeout(() => {

            finishOnce(Boom.clientTimeout());
        }, clientTimeout);
    }

    // Hander errors

    const onResError = (err) => {

        return finishOnce(Boom.internal('Payload stream error', err));
    };

    const onResAborted = () => {

        return finishOnce(Boom.internal('Payload stream closed prematurely'));
    };

    res.once('error', onResError);
    res.once('close', onResAborted);
    res.once('aborted', onResAborted);

    // Read payload

    const reader = new Recorder({ maxBytes: options.maxBytes });

    const onReaderError = (err) => {

        if (res.destroy) {                          // GZip stream has no destroy() method
            res.destroy();
        }

        return finishOnce(err);
    };

    reader.once('error', onReaderError);

    const onReaderFinish = () => {

        return finishOnce(null, reader.collect());
    };

    reader.once('finish', onReaderFinish);

    if (options.gunzip) {
        const contentEncoding = options.gunzip === 'force' ?
            'gzip' :
            (res.headers && internals.findHeader('content-encoding', res.headers)) || '';

        if (/^(x-)?gzip(\s*,\s*identity)?$/.test(contentEncoding)) {
            const gunzip = Zlib.createGunzip();

            gunzip.once('error', onReaderError);

            res.pipe(gunzip).pipe(reader);
            return;
        }
    }

    res.pipe(reader);
};


// toReadableStream()

internals.Client.prototype.toReadableStream = function (payload, encoding) {

    return new Payload(payload, encoding);
};


// parseCacheControl()

internals.Client.prototype.parseCacheControl = function (field) {

    /*
        Cache-Control   = 1#cache-directive
        cache-directive = token [ "=" ( token / quoted-string ) ]
        token           = [^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+
        quoted-string   = "(?:[^"\\]|\\.)*"
    */

    //                             1: directive                                        =   2: token                                              3: quoted-string
    const regex = /(?:^|(?:\s*\,\s*))([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)(?:\=(?:([^\x00-\x20\(\)<>@\,;\:\\"\/\[\]\?\=\{\}\x7F]+)|(?:\"((?:[^"\\]|\\.)*)\")))?/g;

    const header = {};
    const error = field.replace(regex, ($0, $1, $2, $3) => {

        const value = $2 || $3;
        header[$1] = value ? value.toLowerCase() : true;
        return '';
    });

    if (header['max-age']) {
        try {
            const maxAge = parseInt(header['max-age'], 10);
            if (isNaN(maxAge)) {
                return null;
            }

            header['max-age'] = maxAge;
        }
        catch (err) { }
    }

    return (error ? null : header);
};


// Shortcuts

internals.Client.prototype.get = function (uri, options, callback) {

    return this._shortcutWrap('GET', uri, options, callback);
};


internals.Client.prototype.post = function (uri, options, callback) {

    return this._shortcutWrap('POST', uri, options, callback);
};


internals.Client.prototype.patch = function (uri, options, callback) {

    return this._shortcutWrap('PATCH', uri, options, callback);
};


internals.Client.prototype.put = function (uri, options, callback) {

    return this._shortcutWrap('PUT', uri, options, callback);
};


internals.Client.prototype.delete = function (uri, options, callback) {

    return this._shortcutWrap('DELETE', uri, options, callback);
};


// Wrapper so that shortcut can be optimized with required params

internals.Client.prototype._shortcutWrap = function (method, uri /* [options], callback */) {

    const options = (typeof arguments[2] === 'function' ? {} : arguments[2]);
    const callback = (typeof arguments[2] === 'function' ? arguments[2] : arguments[3]);

    return this._shortcut(method, uri, options, callback);
};


internals.Client.prototype._shortcut = function (method, uri, options, callback) {

    let req = null;
    let promise = null;

    if (typeof callback !== 'function') {
        promise = new Promise((resolve, reject) => {

            callback = (err, res, payload) => {

                if (err) {
                    return reject(err);
                }

                resolve({ res, req, payload });
            };
        });
    }

    req = this.request(method, uri, options, (err, res) => {

        if (err) {
            return callback(err);
        }

        this.read(res, options, (err, payload) => {

            if (!err && res.statusCode >= 400) {
                return callback(Boom.create(res.statusCode, new Error(`Response Error: ${res.statusCode} ${res.statusMessage}`), {
                    isResponseError: true,
                    headers: res.headers,
                    response: res,
                    payload
                }));
            }

            return callback(err, res, payload);
        });
    });

    return promise || req;
};


internals.tryParseBuffer = function (buffer) {

    const result = {
        json: null,
        err: null
    };
    try {
        const json = JSON.parse(buffer.toString());
        result.json = json;
    }
    catch (err) {
        result.err = err;
        result.json = buffer;
    }
    return result;
};

internals.findHeader = function (headerName, headers) {

    const foundKey = Object.keys(headers)
        .find((key) => key.toLowerCase() === headerName.toLowerCase());

    return foundKey && headers[foundKey];
};


module.exports = new internals.Client();

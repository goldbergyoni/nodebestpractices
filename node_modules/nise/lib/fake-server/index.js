"use strict";

var fakeXhr = require("../fake-xhr");
var push = [].push;
var format = require("./format");
var configureLogError = require("../configure-logger");
var pathToRegexp = require("path-to-regexp");

var supportsArrayBuffer = typeof ArrayBuffer !== "undefined";

function responseArray(handler) {
    var response = handler;

    if (Object.prototype.toString.call(handler) !== "[object Array]") {
        response = [200, {}, handler];
    }

    if (typeof response[2] !== "string") {
        if (!supportsArrayBuffer) {
            throw new TypeError("Fake server response body should be a string, but was " +
                                typeof response[2]);
        }
        else if (!(response[2] instanceof ArrayBuffer)) {
            throw new TypeError("Fake server response body should be a string or ArrayBuffer, but was " +
                                typeof response[2]);
        }
    }

    return response;
}

function getDefaultWindowLocation() {
    return { "host": "localhost", "protocol": "http" };
}

function getWindowLocation() {
    if (typeof window === "undefined") {
        // Fallback
        return getDefaultWindowLocation();
    }

    if (typeof window.location !== "undefined") {
        // Browsers place location on window
        return window.location;
    }

    if ((typeof window.window !== "undefined") && (typeof window.window.location !== "undefined")) {
        // React Native on Android places location on window.window
        return window.window.location;
    }

    return getDefaultWindowLocation();
}

function matchOne(response, reqMethod, reqUrl) {
    var rmeth = response.method;
    var matchMethod = !rmeth || rmeth.toLowerCase() === reqMethod.toLowerCase();
    var url = response.url;
    var matchUrl = !url || url === reqUrl || (typeof url.test === "function" && url.test(reqUrl));

    return matchMethod && matchUrl;
}

function match(response, request) {
    var wloc = getWindowLocation();

    var rCurrLoc = new RegExp("^" + wloc.protocol + "//" + wloc.host);

    var requestUrl = request.url;

    if (!/^https?:\/\//.test(requestUrl) || rCurrLoc.test(requestUrl)) {
        requestUrl = requestUrl.replace(rCurrLoc, "");
    }

    if (matchOne(response, this.getHTTPMethod(request), requestUrl)) {
        if (typeof response.response === "function") {
            var ru = response.url;
            var args = [request].concat(ru && typeof ru.exec === "function" ? ru.exec(requestUrl).slice(1) : []);
            return response.response.apply(response, args);
        }

        return true;
    }

    return false;
}

function incrementRequestCount() {
    var count = ++this.requestCount;

    this.requested = true;

    this.requestedOnce = count === 1;
    this.requestedTwice = count === 2;
    this.requestedThrice = count === 3;

    this.firstRequest = this.getRequest(0);
    this.secondRequest = this.getRequest(1);
    this.thirdRequest = this.getRequest(2);

    this.lastRequest = this.getRequest(count - 1);
}

var fakeServer = {
    create: function (config) {
        var server = Object.create(this);
        server.configure(config);
        this.xhr = fakeXhr.useFakeXMLHttpRequest();
        server.requests = [];
        server.requestCount = 0;
        server.queue = [];
        server.responses = [];


        this.xhr.onCreate = function (xhrObj) {
            xhrObj.unsafeHeadersEnabled = function () {
                return !(server.unsafeHeadersEnabled === false);
            };
            server.addRequest(xhrObj);
        };

        return server;
    },

    configure: function (config) {
        var self = this;
        var whitelist = {
            "autoRespond": true,
            "autoRespondAfter": true,
            "respondImmediately": true,
            "fakeHTTPMethods": true,
            "logger": true,
            "unsafeHeadersEnabled": true
        };

        config = config || {};

        Object.keys(config).forEach(function (setting) {
            if (setting in whitelist) {
                self[setting] = config[setting];
            }
        });

        self.logError = configureLogError(config);
    },

    addRequest: function addRequest(xhrObj) {
        var server = this;
        push.call(this.requests, xhrObj);

        incrementRequestCount.call(this);

        xhrObj.onSend = function () {
            server.handleRequest(this);

            if (server.respondImmediately) {
                server.respond();
            } else if (server.autoRespond && !server.responding) {
                setTimeout(function () {
                    server.responding = false;
                    server.respond();
                }, server.autoRespondAfter || 10);

                server.responding = true;
            }
        };
    },

    getHTTPMethod: function getHTTPMethod(request) {
        if (this.fakeHTTPMethods && /post/i.test(request.method)) {
            var matches = (request.requestBody || "").match(/_method=([^\b;]+)/);
            return matches ? matches[1] : request.method;
        }

        return request.method;
    },

    handleRequest: function handleRequest(xhr) {
        if (xhr.async) {
            push.call(this.queue, xhr);
        } else {
            this.processRequest(xhr);
        }
    },

    logger: function () {
        // no-op; override via configure()
    },

    logError: configureLogError({}),

    log: function log(response, request) {
        var str;

        str = "Request:\n" + format(request) + "\n\n";
        str += "Response:\n" + format(response) + "\n\n";

        if (typeof this.logger === "function") {
            this.logger(str);
        }
    },

    respondWith: function respondWith(method, url, body) {
        if (arguments.length === 1 && typeof method !== "function") {
            this.response = responseArray(method);
            return;
        }

        if (arguments.length === 1) {
            body = method;
            url = method = null;
        }

        if (arguments.length === 2) {
            body = url;
            url = method;
            method = null;
        }

        push.call(this.responses, {
            method: method,
            url: typeof url === "string" && url !== "" ? pathToRegexp(url) : url,
            response: typeof body === "function" ? body : responseArray(body)
        });
    },

    respond: function respond() {
        if (arguments.length > 0) {
            this.respondWith.apply(this, arguments);
        }

        var queue = this.queue || [];
        var requests = queue.splice(0, queue.length);
        var self = this;

        requests.forEach(function (request) {
            self.processRequest(request);
        });
    },

    processRequest: function processRequest(request) {
        try {
            if (request.aborted) {
                return;
            }

            var response = this.response || [404, {}, ""];

            if (this.responses) {
                for (var l = this.responses.length, i = l - 1; i >= 0; i--) {
                    if (match.call(this, this.responses[i], request)) {
                        response = this.responses[i].response;
                        break;
                    }
                }
            }

            if (request.readyState !== 4) {
                this.log(response, request);

                request.respond(response[0], response[1], response[2]);
            }
        } catch (e) {
            this.logError("Fake server request processing", e);
        }
    },

    restore: function restore() {
        return this.xhr.restore && this.xhr.restore.apply(this.xhr, arguments);
    },

    getRequest: function getRequest(index) {
        return this.requests[index] || null;
    },

    reset: function reset() {
        this.resetBehavior();
        this.resetHistory();
    },

    resetBehavior: function resetBehavior() {
        this.responses.length = this.queue.length = 0;
    },

    resetHistory: function resetHistory() {
        this.requests.length = this.requestCount = 0;

        this.requestedOnce = this.requestedTwice = this.requestedThrice = this.requested = false;

        this.firstRequest = this.secondRequest = this.thirdRequest = this.lastRequest = null;
    }
};

module.exports = fakeServer;

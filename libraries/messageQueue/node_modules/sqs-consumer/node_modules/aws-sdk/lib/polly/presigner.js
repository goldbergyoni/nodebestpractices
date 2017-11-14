var AWS = require('../core');
var rest = AWS.Protocol.Rest;

/**
 * A presigner object can be used to generate presigned urls for the Polly service.
 */
AWS.Polly.Presigner = AWS.util.inherit({
    /**
     * Creates a presigner object with a set of configuration options.
     *
     * @option options params [map] An optional map of parameters to bind to every
     *   request sent by this service object.
     * @option options service [AWS.Polly] An optional pre-configured instance
     *  of the AWS.Polly service object to use for requests. The object may
     *  bound parameters used by the presigner.
     * @see AWS.Polly.constructor
     */
    constructor: function Signer(options) {
        options = options || {};
        this.options = options;
        this.service = options.service;
        this.bindServiceObject(options);
        this._operations = {};
    },

    /**
     * @api private
     */
    bindServiceObject: function bindServiceObject(options) {
        options = options || {};
        if (!this.service) {
            this.service = new AWS.Polly(options);
        } else {
            var config = AWS.util.copy(this.service.config);
            this.service = new this.service.constructor.__super__(config);
            this.service.config.params = AWS.util.merge(this.service.config.params || {}, options.params);
        }
    },

    /**
     * @api private
     */
    modifyInputMembers: function modifyInputMembers(input) {
        // make copies of the input so we don't overwrite the api
        // need to be careful to copy anything we access/modify
        var modifiedInput = AWS.util.copy(input);
        modifiedInput.members = AWS.util.copy(input.members);
        AWS.util.each(input.members, function(name, member) {
            modifiedInput.members[name] = AWS.util.copy(member);
            // update location and locationName
            if (!member.location || member.location === 'body') {
                modifiedInput.members[name].location = 'querystring';
                modifiedInput.members[name].locationName = name;
            }
        });
        return modifiedInput;
    },

    /**
     * @api private
     */
    convertPostToGet: function convertPostToGet(req) {
        // convert method
        req.httpRequest.method = 'GET';

        var operation = req.service.api.operations[req.operation];
        // get cached operation input first
        var input = this._operations[req.operation];
        if (!input) {
            // modify the original input
            this._operations[req.operation] = input = this.modifyInputMembers(operation.input);
        }

        var uri = rest.generateURI(req.httpRequest.endpoint.path, operation.httpPath, input, req.params);

        req.httpRequest.path = uri;
        req.httpRequest.body = '';

        // don't need these headers on a GET request
        delete req.httpRequest.headers['Content-Length'];
        delete req.httpRequest.headers['Content-Type'];
    },

    /**
     * @overload getSynthesizeSpeechUrl(params = {}, [expires = 3600], [callback])
     *   Generate a presigned url for {AWS.Polly.synthesizeSpeech}.
     *   @note You must ensure that you have static or previously resolved
     *     credentials if you call this method synchronously (with no callback),
     *     otherwise it may not properly sign the request. If you cannot guarantee
     *     this (you are using an asynchronous credential provider, i.e., EC2
     *     IAM roles), you should always call this method with an asynchronous
     *     callback.
     *   @param params [map] parameters to pass to the operation. See the {AWS.Polly.synthesizeSpeech}
     *     operation for the expected operation parameters.
     *   @param expires [Integer] (3600) the number of seconds to expire the pre-signed URL operation in.
     *     Defaults to 1 hour.
     *   @return [string] if called synchronously (with no callback), returns the signed URL.
     *   @return [null] nothing is returned if a callback is provided.
     *   @callback callback function (err, url)
     *     If a callback is supplied, it is called when a signed URL has been generated.
     *     @param err [Error] the error object returned from the presigner.
     *     @param url [String] the signed URL.
     *   @see AWS.Polly.synthesizeSpeech
     */
    getSynthesizeSpeechUrl: function getSynthesizeSpeechUrl(params, expires, callback) {
        var self = this;
        var request = this.service.makeRequest('synthesizeSpeech', params);
        // remove existing build listeners
        request.removeAllListeners('build');
        request.on('build', function(req) {
            self.convertPostToGet(req);
        });
        return request.presign(expires, callback);
    }
});

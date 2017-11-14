var AWS = require('../core');

/**
 * @api private
 */
var service = null;

/**
 * @api private
 */
var api = {
    signatureVersion: 'v4',
    signingName: 'rds-db'
};

/**
 * @api private
 */
var requiredAuthTokenOptions = {
    region: 'string',
    hostname: 'string',
    port: 'number',
    username: 'string'
};

/**
 * A signer object can be used to generate an auth token to a database.
 */
AWS.RDS.Signer = AWS.util.inherit({
    /**
     * Creates a signer object can be used to generate an auth token.
     *
     * @option options credentials [AWS.Credentials] the AWS credentials
     *   to sign requests with. Uses the default credential provider chain
     *   if not specified.
     * @option options hostname [String] the hostname of the database to connect to.
     * @option options port [Number] the port number the database is listening on.
     * @option options region [String] the region the database is located in.
     * @option options username [String] the username to login as.
     * @example Passing in options to constructor
     *   var signer = new AWS.RDS.Signer({
     *     credentials: new AWS.SharedIniFileCredentials({profile: 'default'}),
     *     region: 'us-east-1',
     *     hostname: 'db.us-east-1.rds.amazonaws.com',
     *     port: 8000,
     *     username: 'name'
     *   });
     */
    constructor: function Signer(options) {
        this.options = options || {};
    },

    /**
     * @api private
     * Strips the protocol from a url.
     */
    convertUrlToAuthToken: function convertUrlToAuthToken(url) {
        // we are always using https as the protocol
        var protocol = 'https://';
        if (url.indexOf(protocol) === 0) {
            return url.substring(protocol.length);
        }
    },

    /**
     * @overload getAuthToken(options = {}, [callback])
     *   Generate an auth token to a database.
     *   @note You must ensure that you have static or previously resolved
     *     credentials if you call this method synchronously (with no callback),
     *     otherwise it may not properly sign the request. If you cannot guarantee
     *     this (you are using an asynchronous credential provider, i.e., EC2
     *     IAM roles), you should always call this method with an asynchronous
     *     callback.
     *
     *   @param options [map] The fields to use when generating an auth token.
     *     Any options specified here will be merged on top of any options passed
     *     to AWS.RDS.Signer:
     *
     *     * **credentials** (AWS.Credentials) &mdash; the AWS credentials
     *         to sign requests with. Uses the default credential provider chain
     *         if not specified.
     *     * **hostname** (String) &mdash; the hostname of the database to connect to.
     *     * **port** (Number) &mdash; the port number the database is listening on.
     *     * **region** (String) &mdash; the region the database is located in.
     *     * **username** (String) &mdash; the username to login as.
     *   @return [String] if called synchronously (with no callback), returns the
     *     auth token.
     *   @return [null] nothing is returned if a callback is provided.
     *   @callback callback function (err, token)
     *     If a callback is supplied, it is called when an auth token has been generated.
     *     @param err [Error] the error object returned from the signer.
     *     @param token [String] the auth token.
     *
     *   @example Generating an auth token synchronously
     *     var signer = new AWS.RDS.Signer({
     *       // configure options
     *       region: 'us-east-1',
     *       username: 'default',
     *       hostname: 'db.us-east-1.amazonaws.com',
     *       port: 8000
     *     });
     *     var token = signer.getAuthToken({
     *       // these options are merged with those defined when creating the signer, overriding in the case of a duplicate option
     *       // credentials are not specified here or when creating the signer, so default credential provider will be used
     *       username: 'test' // overriding username
     *     });
     *   @example Generating an auth token asynchronously
     *     var signer = new AWS.RDS.Signer({
     *       // configure options
     *       region: 'us-east-1',
     *       username: 'default',
     *       hostname: 'db.us-east-1.amazonaws.com',
     *       port: 8000
     *     });
     *     signer.getAuthToken({
     *       // these options are merged with those defined when creating the signer, overriding in the case of a duplicate option
     *       // credentials are not specified here or when creating the signer, so default credential provider will be used
     *       username: 'test' // overriding username
     *     }, function(err, token) {
     *       if (err) {
     *         // handle error
     *       } else {
     *         // use token
     *       }
     *     });
     *
     */
    getAuthToken: function getAuthToken(options, callback) {
        if (typeof options === 'function' && callback === undefined) {
            callback = options;
            options = {};
        }
        var self = this;
        var hasCallback = typeof callback === 'function';
        // merge options with existing options
        options = AWS.util.merge(this.options, options);
        // validate options
        var optionsValidation = this.validateAuthTokenOptions(options);
        if (optionsValidation !== true) {
            if (hasCallback) {
                return callback(optionsValidation, null);
            }
            throw optionsValidation;
        }

        // 15 minutes
        var expires = 900;
        // create service to generate a request from
        var serviceOptions = {
            region: options.region,
            endpoint: new AWS.Endpoint(options.hostname + ':' + options.port),
            paramValidation: false,
            signatureVersion: 'v4'
        };
        if (options.credentials) {
            serviceOptions.credentials = options.credentials;
        }
        service = new AWS.Service(serviceOptions);
        // ensure the SDK is using sigv4 signing (config is not enough)
        service.api = api;

        var request = service.makeRequest();
        // add listeners to request to properly build auth token
        this.modifyRequestForAuthToken(request, options);

        if (hasCallback) {
            request.presign(expires, function(err, url) {
                if (url) {
                    url = self.convertUrlToAuthToken(url);
                }
                callback(err, url);
            });
        } else {
            var url = request.presign(expires);
            return this.convertUrlToAuthToken(url);
        }
    },

    /**
     * @api private
     * Modifies a request to allow the presigner to generate an auth token.
     */
    modifyRequestForAuthToken: function modifyRequestForAuthToken(request, options) {
        request.on('build', request.buildAsGet);
        var httpRequest = request.httpRequest;
        httpRequest.body = AWS.util.queryParamsToString({
            Action: 'connect',
            DBUser: options.username
        });
    },

    /**
     * @api private
     * Validates that the options passed in contain all the keys with values of the correct type that
     *   are needed to generate an auth token.
     */
    validateAuthTokenOptions: function validateAuthTokenOptions(options) {
        // iterate over all keys in options
        var message = '';
        options = options || {};
        for (var key in requiredAuthTokenOptions) {
            if (!Object.prototype.hasOwnProperty.call(requiredAuthTokenOptions, key)) {
                continue;
            }
            if (typeof options[key] !== requiredAuthTokenOptions[key]) {
                message += 'option \'' + key + '\' should have been type \'' + requiredAuthTokenOptions[key] + '\', was \'' + typeof options[key] + '\'.\n';
            }
        }
        if (message.length) {
            return AWS.util.error(new Error(), {
                code: 'InvalidParameter',
                message: message
            });
        }
        return true;
    }
});
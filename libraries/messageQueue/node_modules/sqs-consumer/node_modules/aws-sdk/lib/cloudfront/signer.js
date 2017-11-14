var AWS = require('../core'),
    url = AWS.util.url,
    crypto = AWS.util.crypto.lib,
    base64Encode = AWS.util.base64.encode,
    inherit = AWS.util.inherit;

var queryEncode = function (string) {
    var replacements = {
        '+': '-',
        '=': '_',
        '/': '~'
    };
    return string.replace(/[\+=\/]/g, function (match) {
        return replacements[match];
    });
};

var signPolicy = function (policy, privateKey) {
    var sign = crypto.createSign('RSA-SHA1');
    sign.write(policy);
    return queryEncode(sign.sign(privateKey, 'base64'))
};

var signWithCannedPolicy = function (url, expires, keyPairId, privateKey) {
    var policy = JSON.stringify({
        Statement: [
            {
                Resource: url,
                Condition: { DateLessThan: { 'AWS:EpochTime': expires } }
            }
        ]
    });

    return {
        Expires: expires,
        'Key-Pair-Id': keyPairId,
        Signature: signPolicy(policy.toString(), privateKey)
    };
};

var signWithCustomPolicy = function (policy, keyPairId, privateKey) {
    policy = policy.replace(/\s/mg, policy);

    return {
        Policy: queryEncode(base64Encode(policy)),
        'Key-Pair-Id': keyPairId,
        Signature: signPolicy(policy, privateKey)
    }
};

var determineScheme = function (url) {
    var parts = url.split('://');
    if (parts.length < 2) {
        throw new Error('Invalid URL.');
    }

    return parts[0].replace('*', '');
};

var getRtmpUrl = function (rtmpUrl) {
    var parsed = url.parse(rtmpUrl);
    return parsed.path.replace(/^\//, '') + (parsed.hash || '');
};

var getResource = function (url) {
    switch (determineScheme(url)) {
        case 'http':
        case 'https':
            return url;
        case 'rtmp':
            return getRtmpUrl(url);
        default:
            throw new Error('Invalid URI scheme. Scheme must be one of'
                + ' http, https, or rtmp');
    }
};

var handleError = function (err, callback) {
    if (!callback || typeof callback !== 'function') {
        throw err;
    }

    callback(err);
};

var handleSuccess = function (result, callback) {
    if (!callback || typeof callback !== 'function') {
        return result;
    }

    callback(null, result);
};

AWS.CloudFront.Signer = inherit({
    /**
     * A signer object can be used to generate signed URLs and cookies for granting
     * access to content on restricted CloudFront distributions.
     *
     * @see http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html
     *
     * @param keyPairId [String]    (Required) The ID of the CloudFront key pair
     *                              being used.
     * @param privateKey [String]   (Required) A private key in RSA format.
     */
    constructor: function Signer(keyPairId, privateKey) {
        if (keyPairId === void 0 || privateKey === void 0) {
            throw new Error('A key pair ID and private key are required');
        }

        this.keyPairId = keyPairId;
        this.privateKey = privateKey;
    },

    /**
     * Create a signed Amazon CloudFront Cookie.
     *
     * @param options [Object]            The options to create a signed cookie.
     * @option options url [String]     The URL to which the signature will grant
     *                                  access. Required unless you pass in a full
     *                                  policy.
     * @option options expires [Number] A Unix UTC timestamp indicating when the
     *                                  signature should expire. Required unless you
     *                                  pass in a full policy.
     * @option options policy [String]  A CloudFront JSON policy. Required unless
     *                                  you pass in a url and an expiry time.
     *
     * @param cb [Function] if a callback is provided, this function will
     *   pass the hash as the second parameter (after the error parameter) to
     *   the callback function.
     *
     * @return [Object] if called synchronously (with no callback), returns the
     *   signed cookie parameters.
     * @return [null] nothing is returned if a callback is provided.
     */
    getSignedCookie: function (options, cb) {
        var signatureHash = 'policy' in options
            ? signWithCustomPolicy(options.policy, this.keyPairId, this.privateKey)
            : signWithCannedPolicy(options.url, options.expires, this.keyPairId, this.privateKey);

        var cookieHash = {};
        for (var key in signatureHash) {
            if (Object.prototype.hasOwnProperty.call(signatureHash, key)) {
                cookieHash['CloudFront-' + key] = signatureHash[key];
            }
        }

        return handleSuccess(cookieHash, cb);
    },

    /**
     * Create a signed Amazon CloudFront URL.
     *
     * Keep in mind that URLs meant for use in media/flash players may have
     * different requirements for URL formats (e.g. some require that the
     * extension be removed, some require the file name to be prefixed
     * - mp4:<path>, some require you to add "/cfx/st" into your URL).
     *
     * @param options [Object]          The options to create a signed URL.
     * @option options url [String]     The URL to which the signature will grant
     *                                  access. Required.
     * @option options expires [Number] A Unix UTC timestamp indicating when the
     *                                  signature should expire. Required unless you
     *                                  pass in a full policy.
     * @option options policy [String]  A CloudFront JSON policy. Required unless
     *                                  you pass in a url and an expiry time.
     *
     * @param cb [Function] if a callback is provided, this function will
     *   pass the URL as the second parameter (after the error parameter) to
     *   the callback function.
     *
     * @return [String] if called synchronously (with no callback), returns the
     *   signed URL.
     * @return [null] nothing is returned if a callback is provided.
     */
    getSignedUrl: function (options, cb) {
        try {
            var resource = getResource(options.url);
        } catch (err) {
            return handleError(err, cb);
        }

        var parsedUrl = url.parse(options.url, true),
            signatureHash = Object.prototype.hasOwnProperty.call(options, 'policy')
                ? signWithCustomPolicy(options.policy, this.keyPairId, this.privateKey)
                : signWithCannedPolicy(resource, options.expires, this.keyPairId, this.privateKey);

        parsedUrl.search = null;
        for (var key in signatureHash) {
            if (Object.prototype.hasOwnProperty.call(signatureHash, key)) {
                parsedUrl.query[key] = signatureHash[key];
            }
        }

        try {
            var signedUrl = determineScheme(options.url) === 'rtmp'
                    ? getRtmpUrl(url.format(parsedUrl))
                    : url.format(parsedUrl);
        } catch (err) {
            return handleError(err, cb);
        }

        return handleSuccess(signedUrl, cb);
    }
});

module.exports = AWS.CloudFront.Signer;

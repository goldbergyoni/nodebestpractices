var AWS = require('../core');

/**
 * @api private
 */
var blobPayloadOutputOps = [
  'deleteThingShadow',
  'getThingShadow',
  'updateThingShadow'
];

/**
 * Constructs a service interface object. Each API operation is exposed as a
 * function on service.
 *
 * ### Sending a Request Using IotData
 *
 * ```javascript
 * var iotdata = new AWS.IotData({endpoint: 'my.host.tld'});
 * iotdata.getThingShadow(params, function (err, data) {
 *   if (err) console.log(err, err.stack); // an error occurred
 *   else     console.log(data);           // successful response
 * });
 * ```
 *
 * ### Locking the API Version
 *
 * In order to ensure that the IotData object uses this specific API,
 * you can construct the object by passing the `apiVersion` option to the
 * constructor:
 *
 * ```javascript
 * var iotdata = new AWS.IotData({
 *   endpoint: 'my.host.tld',
 *   apiVersion: '2015-05-28'
 * });
 * ```
 *
 * You can also set the API version globally in `AWS.config.apiVersions` using
 * the **iotdata** service identifier:
 *
 * ```javascript
 * AWS.config.apiVersions = {
 *   iotdata: '2015-05-28',
 *   // other service API versions
 * };
 *
 * var iotdata = new AWS.IotData({endpoint: 'my.host.tld'});
 * ```
 *
 * @note You *must* provide an `endpoint` configuration parameter when
 *   constructing this service. See {constructor} for more information.
 *
 * @!method constructor(options = {})
 *   Constructs a service object. This object has one method for each
 *   API operation.
 *
 *   @example Constructing a IotData object
 *     var iotdata = new AWS.IotData({endpoint: 'my.host.tld'});
 *   @note You *must* provide an `endpoint` when constructing this service.
 *   @option (see AWS.Config.constructor)
 *
 * @service iotdata
 * @version 2015-05-28
 */
AWS.util.update(AWS.IotData.prototype, {
    /**
     * @api private
     */
    validateService: function validateService() {
        if (!this.config.endpoint || this.config.endpoint.indexOf('{') >= 0) {
            var msg = 'AWS.IotData requires an explicit ' +
                '`endpoint\' configuration option.';
            throw AWS.util.error(new Error(),
                {name: 'InvalidEndpoint', message: msg});
        }
    },

    /**
     * @api private
     */
    setupRequestListeners: function setupRequestListeners(request) {
        request.addListener('validateResponse', this.validateResponseBody);
        if (blobPayloadOutputOps.indexOf(request.operation) > -1) {
            request.addListener('extractData', AWS.util.convertPayloadToString);
        }
    },

    /**
     * @api private
     */
    validateResponseBody: function validateResponseBody(resp) {
        var body = resp.httpResponse.body.toString() || '{}';
        var bodyCheck = body.trim();
        if (!bodyCheck || bodyCheck.charAt(0) !== '{') {
            resp.httpResponse.body = '';
        }
    }

});

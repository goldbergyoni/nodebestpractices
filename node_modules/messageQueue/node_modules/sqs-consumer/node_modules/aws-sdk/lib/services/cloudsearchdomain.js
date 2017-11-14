var AWS = require('../core');

/**
 * Constructs a service interface object. Each API operation is exposed as a
 * function on service.
 *
 * ### Sending a Request Using CloudSearchDomain
 *
 * ```javascript
 * var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 * csd.search(params, function (err, data) {
 *   if (err) console.log(err, err.stack); // an error occurred
 *   else     console.log(data);           // successful response
 * });
 * ```
 *
 * ### Locking the API Version
 *
 * In order to ensure that the CloudSearchDomain object uses this specific API,
 * you can construct the object by passing the `apiVersion` option to the
 * constructor:
 *
 * ```javascript
 * var csd = new AWS.CloudSearchDomain({
 *   endpoint: 'my.host.tld',
 *   apiVersion: '2013-01-01'
 * });
 * ```
 *
 * You can also set the API version globally in `AWS.config.apiVersions` using
 * the **cloudsearchdomain** service identifier:
 *
 * ```javascript
 * AWS.config.apiVersions = {
 *   cloudsearchdomain: '2013-01-01',
 *   // other service API versions
 * };
 *
 * var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 * ```
 *
 * @note You *must* provide an `endpoint` configuration parameter when
 *   constructing this service. See {constructor} for more information.
 *
 * @!method constructor(options = {})
 *   Constructs a service object. This object has one method for each
 *   API operation.
 *
 *   @example Constructing a CloudSearchDomain object
 *     var csd = new AWS.CloudSearchDomain({endpoint: 'my.host.tld'});
 *   @note You *must* provide an `endpoint` when constructing this service.
 *   @option (see AWS.Config.constructor)
 *
 * @service cloudsearchdomain
 * @version 2013-01-01
 */
AWS.util.update(AWS.CloudSearchDomain.prototype, {
  /**
   * @api private
   */
  validateService: function validateService() {
    if (!this.config.endpoint || this.config.endpoint.indexOf('{') >= 0) {
      var msg = 'AWS.CloudSearchDomain requires an explicit ' +
                '`endpoint\' configuration option.';
      throw AWS.util.error(new Error(),
        {name: 'InvalidEndpoint', message: msg});
    }
  },

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('validate',
      AWS.EventListeners.Core.VALIDATE_CREDENTIALS
    );
    request.onAsync('validate', this.validateCredentials);
    request.addListener('validate', this.updateRegion);
    if (request.operation === 'search') {
      request.addListener('build', this.convertGetToPost);
    }
  },

  /**
   * @api private
   */
  validateCredentials: function(req, done) {
    if (!req.service.api.signatureVersion) return done(); // none
    req.service.config.getCredentials(function(err) {
      if (err) {
        req.removeListener('sign', AWS.EventListeners.Core.SIGN);
      }
      done();
    });
  },

  /**
   * @api private
   */
  convertGetToPost: function(request) {
    var httpRequest = request.httpRequest
    // convert queries to POST to avoid length restrictions
    var path = httpRequest.path.split('?')
    httpRequest.method = 'POST'
    httpRequest.path = path[0]
    httpRequest.body = path[1]
    httpRequest.headers['Content-Length'] = httpRequest.body.length
    httpRequest.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  },

  /**
   * @api private
   */
  updateRegion: function updateRegion(request) {
    var endpoint = request.httpRequest.endpoint.hostname;
    var zones = endpoint.split('.');
    request.httpRequest.region = zones[1] || request.httpRequest.region;
  }

});

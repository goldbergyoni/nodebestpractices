var AWS = require('../core');

AWS.util.update(AWS.APIGateway.prototype, {
/**
 * Sets the Accept header to application/json.
 *
 * @api private
 */
  setAcceptHeader: function setAcceptHeader(req) {
    var httpRequest = req.httpRequest;
    if (!httpRequest.headers.Accept) {
      httpRequest.headers['Accept'] = 'application/json';
    }
  },

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.setAcceptHeader);
    if (request.operation === 'getExport') {
      var params = request.params || {};
      if (params.exportType === 'swagger') {
        request.addListener('extractData', AWS.util.convertPayloadToString);
      }
    }
  }
});


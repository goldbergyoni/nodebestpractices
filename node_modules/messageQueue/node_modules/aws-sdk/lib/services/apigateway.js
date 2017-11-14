var AWS = require('../core');

AWS.util.update(AWS.APIGateway.prototype, {
/**
 * Sets the Accept header to application/json.
 *
 * @api private
 */
  setAcceptHeader: function setAcceptHeader(req) {
    var httpRequest = req.httpRequest;
    httpRequest.headers['Accept'] = 'application/json';
  },

  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('build', this.setAcceptHeader);
    if (request.operation === 'getSdk') {
      request.addListener('extractData', this.useRawPayload);
    }
  },

  useRawPayload: function useRawPayload(resp) {
    var req = resp.request;
    var operation = req.operation;
    var rules = req.service.api.operations[operation].output || {};
    if (rules.payload) {
      var body = resp.httpResponse.body;
      resp.data[rules.payload] = body;
    }
  }
});


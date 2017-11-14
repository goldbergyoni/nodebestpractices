var AWS = require('../core');

AWS.util.update(AWS.Lambda.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    if (request.operation === 'invoke') {
      request.addListener('extractData', AWS.util.convertPayloadToString);
    }
  }
});


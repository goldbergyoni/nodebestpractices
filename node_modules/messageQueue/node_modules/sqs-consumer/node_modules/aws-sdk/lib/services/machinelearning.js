var AWS = require('../core');

AWS.util.update(AWS.MachineLearning.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    if (request.operation === 'predict') {
      request.addListener('build', this.buildEndpoint);
    }
  },

  /**
   * Updates request endpoint from PredictEndpoint
   * @api private
   */
  buildEndpoint: function buildEndpoint(request) {
    var url = request.params.PredictEndpoint;
    if (url) {
      request.httpRequest.endpoint = new AWS.Endpoint(url);
    }
  }

});

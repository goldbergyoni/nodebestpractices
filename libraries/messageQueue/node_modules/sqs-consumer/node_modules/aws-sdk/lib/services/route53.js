var AWS = require('../core');

AWS.util.update(AWS.Route53.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.on('build', this.sanitizeUrl);
  },

  /**
   * @api private
   */
  sanitizeUrl: function sanitizeUrl(request) {
    var path = request.httpRequest.path;
    request.httpRequest.path = path.replace(/\/%2F\w+%2F/, '/');
  },

  /**
   * @return [Boolean] whether the error can be retried
   * @api private
   */
  retryableError: function retryableError(error) {
    if (error.code === 'PriorRequestNotComplete' &&
        error.statusCode === 400) {
      return true;
    } else {
      var _super = AWS.Service.prototype.retryableError;
      return _super.call(this, error);
    }
  }
});

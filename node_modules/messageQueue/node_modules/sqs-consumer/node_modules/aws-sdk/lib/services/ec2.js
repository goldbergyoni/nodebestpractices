var AWS = require('../core');

AWS.util.update(AWS.EC2.prototype, {
  /**
   * @api private
   */
  setupRequestListeners: function setupRequestListeners(request) {
    request.removeListener('extractError', AWS.EventListeners.Query.EXTRACT_ERROR);
    request.addListener('extractError', this.extractError);

    if (request.operation === 'copySnapshot') {
      request.onAsync('validate', this.buildCopySnapshotPresignedUrl);
    }
  },

  /**
   * @api private
   */
  buildCopySnapshotPresignedUrl: function buildCopySnapshotPresignedUrl(req, done) {
    if (req.params.PresignedUrl || req._subRequest) {
      return done();
    }

    req.params = AWS.util.copy(req.params);
    req.params.DestinationRegion = req.service.config.region;

    var config = AWS.util.copy(req.service.config);
    delete config.endpoint;
    config.region = req.params.SourceRegion;
    var svc = new req.service.constructor(config);
    var newReq = svc[req.operation](req.params);
    newReq._subRequest = true;
    newReq.presign(function(err, url) {
      if (err) done(err);
      else {
        req.params.PresignedUrl = url;
        done();
      }
    });
  },

  /**
   * @api private
   */
  extractError: function extractError(resp) {
    // EC2 nests the error code and message deeper than other AWS Query services.
    var httpResponse = resp.httpResponse;
    var data = new AWS.XML.Parser().parse(httpResponse.body.toString() || '');
    if (data.Errors) {
      resp.error = AWS.util.error(new Error(), {
        code: data.Errors.Error.Code,
        message: data.Errors.Error.Message
      });
    } else {
      resp.error = AWS.util.error(new Error(), {
        code: httpResponse.statusCode,
        message: null
      });
    }
    resp.error.requestId = data.RequestID || null;
  }
});

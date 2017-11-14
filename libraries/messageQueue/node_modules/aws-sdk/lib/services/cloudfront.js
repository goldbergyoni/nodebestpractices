var AWS = require('../core');

// pull in CloudFront signer
require('../cloudfront/signer');

AWS.util.update(AWS.CloudFront.prototype, {

  setupRequestListeners: function setupRequestListeners(request) {
    request.addListener('extractData', AWS.util.hoistPayloadMember);
  }

});

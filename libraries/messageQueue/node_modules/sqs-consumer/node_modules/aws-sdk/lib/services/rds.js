var AWS = require('../core');
require('../rds/signer');
 /**
  * @api private
  */
 var crossRegionOperations = ['copyDBSnapshot', 'createDBInstanceReadReplica', 'createDBCluster', 'copyDBClusterSnapshot'];

 AWS.util.update(AWS.RDS.prototype, {
   /**
    * @api private
    */
   setupRequestListeners: function setupRequestListeners(request) {
     if (crossRegionOperations.indexOf(request.operation) !== -1 &&
         request.params.SourceRegion) {
       request.params = AWS.util.copy(request.params);
       if (request.params.PreSignedUrl ||
           request.params.SourceRegion === this.config.region) {
         delete request.params.SourceRegion;
       } else {
         var doesParamValidation = !!this.config.paramValidation;
         // remove the validate parameters listener so we can re-add it after we build the URL
         if (doesParamValidation) {
           request.removeListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
         }
         request.onAsync('validate', this.buildCrossRegionPresignedUrl);
         if (doesParamValidation) {
           request.addListener('validate', AWS.EventListeners.Core.VALIDATE_PARAMETERS);
         }
       }
     }
   },

   /**
    * @api private
    */
   buildCrossRegionPresignedUrl: function buildCrossRegionPresignedUrl(req, done) {
     var config = AWS.util.copy(req.service.config);
     config.region = req.params.SourceRegion;
     delete req.params.SourceRegion;
     delete config.endpoint;
     // relevant params for the operation will already be in req.params
     delete config.params;
     config.signatureVersion = 'v4';
     var destinationRegion = req.service.config.region;

     var svc = new req.service.constructor(config);
     var newReq = svc[req.operation](AWS.util.copy(req.params));
     newReq.on('build', function addDestinationRegionParam(request) {
       var httpRequest = request.httpRequest;
       httpRequest.params.DestinationRegion = destinationRegion;
       httpRequest.body = AWS.util.queryParamsToString(httpRequest.params);
     });
     newReq.presign(function(err, url) {
       if (err) done(err);
       else {
         req.params.PreSignedUrl = url;
         done();
       }
     });
   }
 });
'use strict';
const Workspace = require('entityServices').Workspace;
const mq = require("messageQueue");
const secureRoutes = require('expressMiddlewares').secureRoutes;
const kpiService = require('./kpiService');
const processService = require('./processService');
const mapperService = require('./mapperService');
const integrations = require('./integrations');


module.exports.initialize = function(app, passport){
  let router = require('routerWrapper')();

  app.use('/api', router);
  secureRoutes(router, passport);
  require('./logicAPI')(router);
  require('./businessSpace/api/businessSpace.api')(router);
  require('./integrations/api/integrationsService.api')(router);
  require('./integrations/api/metadataMQSubscriber').subscribeToMQMessages();

  module.exports.api = router;
};

module.exports.kpiService = kpiService;
module.exports.processService = processService;
module.exports.mapperService = mapperService;
module.exports.integrations = integrations;

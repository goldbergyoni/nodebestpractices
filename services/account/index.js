'use strict';

const secureRoutes = require('expressMiddlewares').secureRoutes;

module.exports.service = require('./accountService');
module.exports.api = {};

module.exports.initialize = function(app, passport){
  // Secured API
  let router = require('routerWrapper')();
  app.use('/api', router);
  secureRoutes(router, passport);
  require('./securedAPI')(router);
  module.exports.api.secured = router;

  // public API
  router = require('routerWrapper')();
  app.use('/auth', router);
  require('./publicAPI')(router);
  module.exports.api.public = router;
};

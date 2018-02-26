const express = require('express'),
  API = require('./entry-points/orderAPI'),
  MQSubscriber = require('./entry-points/orderMQSubscriber'),
  configurationManager = require("configurationManager"),
  healthMonitor = require("health"),
  errorHandling = require("errorManagement"),
  middlewaresPool = require('expressMiddlewares');

process.stdout.write(`App is currently starting`);

let app = express();

if (configurationManager.endpoints.API) {
  app.use(...middlewaresPool.getCommonMiddlewares());
}
else if(configurationManager.endpoints.MQ){
  MQSubscriber.subscribe();
}

errorHandling.registerAndHandleAllErrors(app);
healthMonitor.
new healthMonitor(app, {
  livenessPath: "liveness",
  readinessPath: "readiness",
  apiPrefix: routeVersionManager.getCurrentVersionPrefix()
}).start();

module.exports = app;
const express = require('express'),
  API = require('./entry-points/orderAPI'),
  MQSubscriber = require('./entry-points/orderMQSubscriber'),
  configurationManager = require("configurationManager"),
  healthMonitor = require("health"),
  errorHandling = require("errorManagement"),
  middlewaresPool = require('expressMiddlewares');

process.stdout.write(`App is currently starting`);

if (configurationManager.endpoints.API) {
  let app = express();
  app.use(...middlewaresPool.getCommonMiddlewares());
}
else if(configurationManager.endpoints.MQ){
  MQSubscriber.subscribe();
}

errorHandling.registerAndHandleAllErrors(app);
healthMonitor.start(app);

module.exports = app;
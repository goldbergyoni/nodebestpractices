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

module.exports = app;
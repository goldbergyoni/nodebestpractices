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
  process.stdout.write("Starting API enpoint");
  app.use(...middlewaresPool.getCommonMiddlewares());
}
else if(configurationManager.endpoints.MQ){
  
}

module.exports = app;
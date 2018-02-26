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
  process.stdout.write("Starting API enpoint\n");
  app.use(...new appMiddlewares(passport));
}
else if(configurationManager.endpoints.API){

}

module.exports = app;
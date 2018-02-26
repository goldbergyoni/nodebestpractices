const express = require('express'),
  API = require('./entry-points/orderAPI'),
  MQSubscriber = require('./entry-points/orderMQSubscriber'),
  configurationManager = require("configurationManager"),
  healthMonitor = require("health"),
  errorHandling = require("errorManagement");

process.stdout.write(`App is currently starting`);

let app = express();

if (configurationManager.endpoints.API) {
  process.stdout.write("Starting API enpoint\n");
  const passport = require("passport"),
    appMiddlewares = require("expressMiddlewares").app;

  app.use(...new appMiddlewares(passport));


module.exports = app;
const express = require('express'),
  appMiddlewares = require('expressMiddlewares').app,
  ordersComponent = require('./services/order').API,
  productComponent = require('./services/product').API,
  accountComponent = require('./services/account').API,
  errorHandling = require('errorManagement').handling,
  accountService = require('./services/account'),
  configurationManager = require('configurationManager');

process.stdout.write(`App is currently starting in environment ${configurationManager.environment} and port ${configurationManager.settings.port}, further logs should appear in a log file. Current version is ${require('./package.json').version}`);

let app = express();
app.use(...(new appMiddlewares(passport)));

errorHandling.registerAndHandleAllErrors(app);

module.exports = app;
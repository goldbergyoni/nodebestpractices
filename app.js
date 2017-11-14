const express = require('express'),

  appMiddlewares = require('expressMiddlewares').app,
  errorHandling = require('errorManagement').handling,
  accountService = require('./services/account'),
  logicService = require('./services/logic'),
  logsService = require('./services/logsSrv'),
  publicService = require('./services/public'),
  passport = require('passport'),
  configurationManager = require('configurationManager'),
  swaggerConfigInit = require('./documentation/config/swagger');

process.stdout.write(`App is currently starting in environment ${configurationManager.environment} and port ${configurationManager.settings.port}, further logs should appear in a log file. Current version is ${require('./package.json').version}`);

let app = express();
app.use(...(new appMiddlewares(passport)));

swaggerConfigInit(app);

accountService.initialize(app, passport);
logicService.initialize(app, passport);
publicService.initialize(app, passport);
logsService.initialize(app, passport);

errorHandling.registerAndHandleAllErrors(app);

module.exports = app; 
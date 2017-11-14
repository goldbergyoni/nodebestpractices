'use strict';

const cookieParser = require('cookie-parser'),
	bodyParser = require('body-parser'),
	helmet = require('helmet'),
  CORSMiddleware = require('./middlewares/CORS'),
  configurationManager = require('configurationManager'),
  authenticationMiddlewares = require('./middlewares/authentication'),
  authenticatedRoutes = require('./middlewares/authenticatedRoutes');

  module.exports.app = function(passport) {
		const result = [];
    result.push(helmet());
		result.push(bodyParser.json());
		result.push(bodyParser.urlencoded({extended: true}));
		result.push(cookieParser(configurationManager.auth.app.cookiePhrase));
    result.push(CORSMiddleware);
    result.push(authenticationMiddlewares(passport));

		return result;
};

module.exports.secureRoutes = authenticatedRoutes.secureRoutes;
module.exports.renewAuthToken = authenticatedRoutes.renewAuthToken;

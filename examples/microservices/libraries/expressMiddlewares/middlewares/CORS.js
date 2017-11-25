'use strict';

const configurationManager = require('configurationManager');

const CORSMiddleware = function (req, res, next) {

	if (configurationManager.settings.allowedOrigins) {
		let allowedOrigins = configurationManager.settings.allowedOrigins.split(',');
		let origin = req.headers.origin;

		if(allowedOrigins.indexOf(origin) > -1) {
			res.header('Access-Control-Allow-Origin', origin);
		}
	}
	else {
		res.header('Access-Control-Allow-Origin', "*");
	}

	res.header('Access-Control-Allow-Methods', "POST, GET, OPTIONS, DELETE, PUT");

	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Strategy");

	if ('OPTIONS' === req.method) {
		res.sendStatus(200);
	}
	else {
		next();
	}
};

module.exports = CORSMiddleware;

'use strict';

const configurationManager = require('configurationManager');

module.exports.setCookie = function (response, name, value, expirationInMinutes) {
	let secure = true;
	let domain = configurationManager.auth.app.cookieDomain;
	if (configurationManager.environment == 'development') {
		let origin = response.req.get('origin');
		if (origin) // set secure to false if origin is http
			secure = origin.indexOf('http://') == -1;
		else if (!response.req.connection.encrypted) // if request to api wasn't secure
			secure = false;
	}
	response.cookie(name, value, { httpOnly: true, domain, secure, maxAge: expirationInMinutes * 60 * 1000 });
};

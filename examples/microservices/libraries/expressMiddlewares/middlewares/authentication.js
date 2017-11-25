/* eslint-disable no-console */
'use strict';

const BearerStrategy = require('passport-http-bearer').Strategy;
const CookieStrategy = require('passport-cookie').Strategy;
const Utils = require('utils');
const commonErrors = require('errorManagement').commonErrors;

module.exports = function (passport) {
  let middleware = passport.initialize();

  passport.use(new BearerStrategy({},  authenticateToken));
	passport.use(new CookieStrategy({cookieName: Utils.enums.Authentication.AUTH_TOKEN_COOKIE_NAME}, authenticateToken));
  return middleware;
};

function authenticateToken(token, done) {
  const decodedToken = Utils.crypto.verifyAndDecodeJwt(token);
  if (!decodedToken)
    throw commonErrors.UnauthorizedError(Utils.errors.Authentication.Unauthorized);

  decodedToken.token = token;
  return done(null, decodedToken);
}

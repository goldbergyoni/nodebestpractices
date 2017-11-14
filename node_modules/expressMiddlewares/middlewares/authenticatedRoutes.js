'use strict';

const Workspace = require('entityServices').Workspace;
const utils = require('utils');
const configurationManager = require('configurationManager');

module.exports.secureRoutes = (router, passport) => {
  router.use(function (req, res, next) {
    let authFunc = passport.authenticate(req.header('X-Strategy') || 'bearer', { session: false });
    return authFunc(req, res, next);
  });

  router.all("*", function (req, res, next) {
    const decodedToken = utils.crypto.decodeJwt(req.user.token);
    module.exports.renewAuthToken(req, res);
    req.Workspace = new Workspace(decodedToken.orgId, decodedToken.userId, decodedToken.roles);
    next();
  });
};

module.exports.renewAuthToken = (req, res, user) => {
  user = user || req.user;
  const token = generateJwt(user);
  res.header("auth_token", token);
  if (req.header("X-Strategy") == "cookie")
    utils.http.setCookie(res, utils.enums.Authentication.AUTH_TOKEN_COOKIE_NAME, token, configurationManager.auth.app.tokenExpiration);
  return token;
};

function generateJwt(user) {
  return utils.crypto.generateJwt({
    userId: user.id || user.userId,
    email: user.email,
    orgId: user.organizationId || user.orgId,
    roles: user.roles
  }, configurationManager.auth.app.tokenExpiration);
}

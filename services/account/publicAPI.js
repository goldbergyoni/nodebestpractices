const util = require('util'),
  accountService = require('./accountService'),
  logger = require('logger'),
  configurationManager = require('configurationManager'),
  commonErrors = require('errorManagement').commonErrors,
  secureRoutes = require('expressMiddlewares'),
  utils = require('utils');

module.exports = function (router) {
  router.post('/authenticate', async (req, res, next) => {
    logger.info(`Trying to login user ${util.inspect(req.body.username)}`);
    verifyClientSecret(req);

    let usersSrv = new accountService();

    let user = await usersSrv.tryLogin(req.body.username, req.body.password);
    if (user) {
      secureRoutes.renewAuthToken(req, res, user);
      return usersSrv.getUserData(user);
    }

    throw commonErrors.UnauthorizedError("Failed to login  ");
  });

  router.post('/logout', async (req, res, next) => {
    logger.info(`Logout current user`);
    utils.http.setCookie(res, utils.enums.Authentication.AUTH_TOKEN_COOKIE_NAME, '', 0);
    return true;
  });

  router.post('/signup', async (req, res, next) => {
    logger.info(`Trying to signup a new user ${util.inspect(req.body.username)}`);
    verifyClientSecret(req);

    const userData = {
      email: req.body.email,
      password: req.body.password
    };

    if (!userData.email || !userData.password)
      throw commonErrors.InvalidInputError(utils.errors.General.MissingParameters);

    const usersSrv = new accountService();
    const newUser = await usersSrv.addNewUser(userData);
    if (newUser) {
      secureRoutes.renewAuthToken(req, res, newUser);
      return usersSrv.getUserData(newUser);
    }

    throw commonErrors.UnauthorizedError("Failed to signup");
  });

  router.post('/forgotPassword', async (req, res, next) => {
    let { url, email } = req.body;

    if (url && email) {
      email = email.toLowerCase();
      const user = await new accountService().getByEmail(email);
      if (user) {
        let link = url;
        const sig = utils.crypto.generateJwt({ email: email }, configurationManager.auth.app.resetPasswordExpiration);
        link += "?sig=" + sig;
        utils.email.sendMail(email, utils.emailTemplates.getEmailSubject(utils.enums.EmailTemplateTypes.RESET_PASSWORD),
          utils.emailTemplates.getEmailBody(utils.enums.EmailTemplateTypes.RESET_PASSWORD, { link: link }));

        return link;
      }
      else {
        throw commonErrors.InvalidInputError(utils.errors.General.UnknownEmail);
      }
    }
    else
      throw commonErrors.InvalidInputError(utils.errors.General.MissingParameters);
  });

  router.post('/resetPassword', async (req, res, next) => {
    logger.info(`Trying to reset password`);

    const { sig, newPassword } = req.body;

    if (!sig || !newPassword)
      throw commonErrors.InvalidInputError(utils.errors.General.MissingParameters);

    // verify signature
    const sigData = utils.crypto.verifyAndDecodeJwt(sig);
    if (!sigData || !sigData.email)
      throw commonErrors.InvalidInputError(utils.errors.General.FailedToChangePassword);

    const result = await new accountService().updateUserPassword(sigData.email, newPassword);
    if (result)
      return utils.errors.Authentication.PasswordSuccessfulyChanged;
    else
      throw commonErrors.InvalidInputError(utils.errors.General.FailedToChangePassword);
  });

};

function verifyClientSecret(req) {
  if (req.body.clientSecret != configurationManager.auth.app.clientSecret)
    throw commonErrors.UnauthorizedError("Application is not authorized");
}

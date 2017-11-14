const util = require('util'),
  accountService = require('./accountService'),
  commonErrors = require('errorManagement').commonErrors,
  logger = require('logger'),
  secureRoutes = require('expressMiddlewares'),
  utils = require('utils');

module.exports = function (router) {

  router.get('/user/:id(\\d+)', async (req, res, next) => {
    req.Workspace.logger.info(`Users controller was called to get user by id ${util.inspect(req.params.id)}`);
    const usersSrv = new accountService(req.Workspace);
    const user = await usersSrv.getById(req.params.id);
    return usersSrv.getUserData(user);
  });

  router.get('/user', async (req, res, next) => {
    req.Workspace.logger.info(`Retrieving current user info`);
    const usersSrv = new accountService(req.Workspace);
    const user = await usersSrv.getById(req.user.userId);
    return usersSrv.getUserData(user);
  });

  router.post('/user', async (req, res, next) => {
    req.Workspace.logger.info(`Updating user profile`);
    return await new accountService(req.Workspace).updateUserProfile(req.user.userId, req.body);
  });

  router.post('/user/changePassword', async (req, res, next) => {
    req.Workspace.logger.info(`User is trying to change password`);

    const { password, newPassword } = req.body;

    if (!newPassword || !password)
      throw commonErrors.InvalidInputError(utils.errors.General.MissingParameters);

    const usersSrv = new accountService(req.Workspace),
      user = await usersSrv.getById(req.user.userId);

    if (await user.verifyPassword(password)) {
      const result = await usersSrv.updateUserPassword(req.user.email, newPassword);
      if (result)
        return utils.errors.Authentication.PasswordSuccessfulyChanged;
    }

    throw commonErrors.OperationNotAllowedError(utils.errors.Authentication.FailedToChangePassword);
  });

  router.post('/user/changeOrganization/:orgid(\\d+)', async (req, res, next) => {
    req.Workspace.logger.info(`User is trying to change organization to ${util.inspect(req.params.orgid)}`);
    const usersSrv = new accountService(req.Workspace);
    let user = await usersSrv.changeOrganization(req.user.userId, req.params.orgid);
    secureRoutes.renewAuthToken(req, res, user);
    return usersSrv.getUserData(user);
  });

  // translations
  router.get('/uesr/getTranslations/:lang', async (req, res, next) => {
    req.Workspace.logger.info(`Getting translations, language: ${req.params.lang}`);
    return utils.translationsHelper.getTranslationsData(req.params.lang);
  });

  router.get('/uesr/getTranslations', async (req, res, next) => {
    req.Workspace.logger.info(`Getting translations, language: ${req.user.language}`);
    return utils.translationsHelper.getTranslationsData(req.user.language);
  });

};

"use strict";

let DAL = require('./DB/usersDAL');
const util = require('util'),
  usersRoles = require('./enums'),
  schema = require('./user'),
  commonErrors = require('errorManagement').commonErrors,
  logger = require('logger'),
  utils = require('utils'),
  configurationManager = require('configurationManager'),
  userEntity = require('./user');

class usersService {

  constructor(workspace) {
    this.workspace = workspace;
    this.wrapDAL(workspace);
  }

  wrapDAL(workspace) {
    if (workspace)
      DAL = new Proxy(DAL, {
        get(target, property) {
          if (typeof (target[property]) === "function")
            return async function (...params) {
              let result = await target[property](...params);
              if (result && result.impersonateOrganization)
                result.impersonateOrganization(workspace.organizationId);
              return result;
            };
          return target[property];
        }
      });
  }

  async tryLogin(username, password) {
    logger.info(`About to try loggin-in the username ${username}`);

    const existingUser = await DAL.getByEmail(this.workspace, username);
    if (existingUser && await existingUser.verifyPassword(password)) {
      await DAL.updateValues(this.workspace, existingUser.email, {lastLoginDate: new Date()});
      return existingUser;
    }

    throw commonErrors.UnauthorizedError("Wrong username or password");
  }

  async addNewUser(newUserSeed) {
    logger.info(`About to add a new user with the following information ${util.inspect(newUserSeed)}`);


    const theUserToAdd = userEntity.factor(newUserSeed);

    if (!theUserToAdd.displayName && theUserToAdd.email)
      theUserToAdd.displayName = theUserToAdd.email.replace(/@.*$/, "");

    await theUserToAdd.setPassword(newUserSeed.password);
    theUserToAdd.assertIsValid();

    const user = await DAL.getByEmail(this.workspace, theUserToAdd.email);
    if (user)
      throw commonErrors.DuplicateItemError("User with this email already exists");

    theUserToAdd.organization = { name: `Organization ${utils.general.generateRandomNumber(10000, 99999999)}`, roles: utils.enums.Roles.Admin };
    theUserToAdd.organizations.push(theUserToAdd.organization);
    const theUserThatWasAdded = await DAL.addUser(this.workspace, theUserToAdd);

    logger.debug(`The user ${util.inspect(theUserThatWasAdded)} was added succesfully to DB`);

    return theUserThatWasAdded;
  }

  async getById(id) {
    logger.info(`About to get a user by ID ${util.inspect(id)}`);
    const result = await DAL.getByID(this.workspace, id);
    return result;
  }

  async getByEmail(email) {
    logger.info(`About to get a user by email ${util.inspect(email)}`);
    const result = await DAL.getByEmail(this.workspace, email);
    return result;
  }

  async changeOrganization(userId, orgId) {
    const user = await DAL.getByID(this.workspace, userId);
    if (user.impersonateOrganization(orgId))
      return user;

    throw commonErrors.UnauthorizedError(utils.errors.General.FailedToChangeOrganization);
  }

  async updateUserPassword(email, newPassword) {
    const theUser = userEntity.factor({ email: email });
    await theUser.setPassword(newPassword);

    let updateValues = {};
    updateValues[DAL.DBModel.entities.user.entitiesToColumnMapping.password] = theUser.password;
    updateValues[DAL.DBModel.entities.user.entitiesToColumnMapping.salt] = theUser.salt;

    return await DAL.updateValues(this.workspace, email, updateValues);
  }

  async updateUserProfile(userId, userData) {
    if (!userData.displayName || !userData.email)
      throw commonErrors.OperationNotAllowedError(utils.errors.General.MissingParameters);
    else {
      let user = await DAL.getByID(this.workspace, userId);
      let updateValues = {};
      if (user.organization.name != userData.organization) {
        this.workspace.verifyRolesOnUpdate(DAL.DBModel.entities.organization.tableName, user.organization);
        updateValues[DAL.DBModel.entities.organization.entitiesToColumnMapping.name] = userData.organization;
        await DAL.updateOrganization(this.workspace, user.organization.id, updateValues);
        user.organization.name = userData.organization;
      }

      const currentEmail = user.email;
      user.displayName = userData.displayName;
      user.email = userData.email;
      user.imageUrl = userData.imageUrl;

      updateValues = {
        displayName: user.displayName,
        email: user.email,
        imageUrl: user.imageUrl
      };

      if(userData.language && utils.enums.Language[userData.language])
        updateValues.language = utils.enums.Language[userData.language].value;

      const result = await DAL.updateValues(this.workspace, currentEmail, updateValues);
      return {
        message: utils.errors.General.DetailsUpdated,
        userData: this.getUserData(user)
      };
    }
  }

  getUserData(user) {
    return {
      userInfo: user.getUserInfo(),
      userSettings: this.getUserSettings(user),
      systemSettings: this.getSystemSettings(user)
    };
  }

  getUserSettings(user) {
    return {};
  }

  getSystemSettings(user) {
    let language = JSON.parse(JSON.stringify(utils.enums.Language));
    if(configurationManager.environment !== "development")
      delete language.debug;

    return {
      enums: {
        language,
        roles: utils.enums.Roles,
        integrationsTypes: utils.enums.IntegrationsTypes,
        dataTypes: utils.enums.DataTypes,
        defaultProcessMapping: utils.enums.DefaultProcessMapping,
        displayUnit: utils.enums.DisplayUnit,
        ruleType: utils.enums.RuleType,
        criteriaOutcome: utils.enums.CriteriaOutcome,
        criteria: {
          types: utils.enums.CriteriaTypes,
          operators: utils.enums.Operators
        }
      }
    };
  }

}


module.exports = usersService;

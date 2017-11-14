'use strict';

const utils = require('utils'),
      commonErrors = require('errorManagement').commonErrors,
      Roles = utils.enums.Roles;

class Workspace {

  static factorFromGist(workspaceGist)
  {
    return new Workspace(workspaceGist.organizationId , workspaceGist.userId , workspaceGist.userRoles);
  }
  constructor(organizationId, userId, userRoles) {
    this.organizationId = organizationId;
    this.userId = userId;
    this.userRoles = userRoles;
    this.isMaster = false;

    this.actions = {
      CREATE: 1,
      READ: 2,
      UPDATE: 3,
      DELETE: 4,
      VIEW: 5
    };

    // proxy the logger log methods to always pass them a metadata object
    this.proxyLogger();
  }

  toGist()
  {
    return { organizationId: this.organizationId , userId: this.userId, userRoles:this.userRoles};
  }


  proxyLogger() {
    let logger = require('logger'),
      loggerLevels = Object.assign({ "log": 9999 }, logger.levels),
      loggerMeta = { requestId: utils.general.generateRandomNumber(1111111, 9999999), organizationId: this.organizationId, userId: this.userId, userRoles: this.userRoles };

    this.logger = new Proxy(logger, {
      get(target, property) {
        if (typeof (target[property]) === "function" && loggerLevels[property] >= 0)
          return function (...params) {
            return target[property](...params, loggerMeta);
          };
        return target[property];
      }
    });
  }

  verifyAuthorization(tableName, entity, action) {
    switch (action) {
      case this.actions.CREATE:
        this.verifyOrganizationIdMatch(tableName, entity);
        this.verifyRolesOnCreate(tableName, entity);
        break;
      case this.actions.UPDATE:
        this.verifyOrganizationIdMatch(tableName, entity);
        this.verifyRolesOnUpdate(tableName, entity);
        break;
      case this.actions.DELETE:
        this.verifyOrganizationIdMatch(tableName, entity);
        this.verifyRolesOnDelete(tableName, entity);
        break;
      case this.actions.READ:
        break;
      case this.actions.VIEW:
        break;
    }
  }

  verifyOrganizationIdMatch(tableName, entity) {
    if (!this.isMaster && entity && entity.hasOwnProperty("organizationId")) {
      if (entity.organizationId && this.organizationId != entity.organizationId)
        throw commonErrors.UnauthorizedError("Multi tenancy violation");
    }
  }

  verifyRolesOnCreate(tableName, entity) {
    if(tableName == "organizations") {
      if(this.userRoles < Roles.Admin)
        throw commonErrors.UnauthorizedError("Unauthorized to create organization.");
    }
  }

  verifyRolesOnUpdate(tableName, entity) {
    if(tableName == "organizations") {
      if(this.userRoles < Roles.Admin)
        throw commonErrors.UnauthorizedError("Unauthorized to update organization.");
    }
  }

  verifyRolesOnDelete(tableName, entity) {
    if(tableName == "organizations") {
      if(this.userRoles < Roles.Admin)
        throw commonErrors.UnauthorizedError("Unauthorized to delete organization.");
    }
  }

}

module.exports = Workspace;

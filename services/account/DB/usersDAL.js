"use strict";
let util = require('util'),
  logger = require('logger'),
  BaseDAL = require('DBAccessServices').BaseDAL,
  joiner = require('join-js').default,
  user = require('../user');

  const utils = require('utils');

class UserDAL extends BaseDAL {
  constructor() {
    super();

    this.DBModel = {
      entities: {
        user: {
          tableName: "users",
          entitiesToColumnMapping: {
            displayName: 'display_name',
            email: 'email',
            password: 'password',
            id: 'user_id',
            imageUrl: 'image_url',
            state: 'state',
            salt: 'salt',
            lastLoginDate: 'last_login_date',
            loginCount: 'login_count',
            createdOn: 'created_on',
            updatedOn: "updated_on",
            createdBy: 'created_by',
            updatedBy: "updated_by",
            language: "language"
          }
        },
        organization: {
          tableName: "organizations",
          entitiesToColumnMapping: {
            id: 'id',
            name: 'name',
            createdOn: 'created_on',
            updatedOn: "updated_on",
            createdBy: 'created_by',
            updatedBy: "updated_by"
          }
        },
        userToOrganizationMap: {
          tableName: "user_org_link",
          entitiesToColumnMapping: {
            organizationId: 'org_id',
            userId: 'user_id',
            roles: 'roles',
            createdOn: 'created_on',
            updatedOn: "updated_on",
            createdBy: 'created_by',
            updatedBy: "updated_by"
          }
        }
      }
    };

    this.DBModel.joinMap = [{
        mapId: 'userMap',
        idProperty: 'user_id',
        properties: Object.keys(this.DBModel.entities.user.entitiesToColumnMapping).map(mappingKey => {
          return {
            name: mappingKey,
            column: this.DBModel.entities.user.entitiesToColumnMapping[mappingKey]
          };
        }),
        collections: [{
          name: this.DBModel.entities.organization.tableName,
          mapId: 'organizationMap',
          columnPrefix: 'organization_'
        }]
      },
      {
        mapId: 'organizationMap',
        idProperty: 'id',
        properties: ['id', 'name', 'roles']
      }
	];
}

async getByID(workspace, id) {
  logger.info(`About to get a user by id ${util.inspect(id)}`);
  const query = this.knex(this.DBModel.entities.user.tableName)
    .where(`${this.DBModel.entities.user.tableName}.${this.DBModel.entities.user.entitiesToColumnMapping.id}`, id);
  this.addRelatedTablesToMany2ManyQuery(query);
  const allItems = await this.performJoinedQuery(query, this.DBModel.joinMap, "userMap", user, this.onAfterFetch);
  return this.firstOrNull(allItems);
}


  async getByEmail(workspace, email) {
    logger.info(`Users DAL is About to get a user by email ${util.inspect(email)}`);
    const query = this.knex(this.DBModel.entities.user.tableName)
      .where(`${this.DBModel.entities.user.tableName}.${this.DBModel.entities.user.entitiesToColumnMapping.email}`, email);
    this.addRelatedTablesToMany2ManyQuery(query);
    const allItems = await this.performJoinedQuery(query, this.DBModel.joinMap, "userMap", user, this.onAfterFetch);

    return this.firstOrNull(allItems);
  }

  onAfterFetch(userToAddTo)
  {
    userToAddTo.organization = userToAddTo.organizations[0];
  }

  async addUser(workspace, newUser, columnsMap) {
    logger.info(`About to add the following new user to DB ${util.inspect(newUser)}`);
    const usersTableName = this.DBModel.entities.user.tableName,
    usersColumnsMap = this.DBModel.entities.user.entitiesToColumnMapping,
    organizationsTableName = this.DBModel.entities.organization.tableName,
    organizationsColumnsMap = this.DBModel.entities.organization.entitiesToColumnMapping;

    await this.knex.transaction(async(activeTransaction) => {
      const newUserId = await this.insert(workspace, usersTableName, newUser, usersColumnsMap, usersColumnsMap.id, activeTransaction);
      newUser.id = newUserId[0];

      let newOrganization = {
        name: newUser.organization.name
      };

      const newOrganizationId = await this.insert(workspace, organizationsTableName, newOrganization, organizationsColumnsMap, organizationsColumnsMap.id, activeTransaction);

      await activeTransaction.insert({
        org_id: newOrganizationId[0],
        user_id: newUserId[0],
        roles: newUser.organization.roles
      }).into(this.DBModel.entities.userToOrganizationMap.tableName);
    });

    return newUser;
  }

  async updateValues(workspace, email, updateValues) {
    //updateValues.last_login_date = this.knex.raw('now()::timestamp(0)');
    const tableName = this.DBModel.entities.user.tableName;
    this.onBeforeUpdate(workspace, tableName, updateValues, this.DBModel.entities.user.entitiesToColumnMapping);
    const userDBRow = this.mapEntityToRow(updateValues, this.DBModel.entities.user.entitiesToColumnMapping);
    const result = await this.knex(tableName)
      .where(this.DBModel.entities.user.entitiesToColumnMapping.email, email)
      .returning(this.DBModel.entities.user.entitiesToColumnMapping.id)
      .update(userDBRow);

    return result.length === 0 ? false : true;
  }

  async updateUser(workspace, user) {
    const tableName = this.DBModel.entities.user.tableName;
    this.onBeforeUpdate(workspace, tableName, user, this.DBModel.entities.user.entitiesToColumnMapping);
    const userDBRow = this.mapEntityToRow(user, this.DBModel.entities.user.entitiesToColumnMapping);
    const result = await this.knex(tableName)
      .where(this.DBModel.entities.user.entitiesToColumnMapping.email, user.email)
      .returning(this.DBModel.entities.user.entitiesToColumnMapping.id)
      .update(userDBRow);

    return result.length === 0 ? false : true;
  }

  async updateOrganization(workspace, id, updateValues) {
    const tableName = this.DBModel.entities.organization.tableName;
    this.onBeforeUpdate(workspace, tableName, updateValues, this.DBModel.entities.organization.entitiesToColumnMapping);
    const orgDBRow = this.mapEntityToRow(updateValues, this.DBModel.entities.organization.entitiesToColumnMapping);
    const result = await this.knex(tableName)
      .where(this.DBModel.entities.organization.entitiesToColumnMapping.id, id)
      .returning("*")
      .update(orgDBRow);

    return result.length === 0 ? false : true;
  }

  addRelatedTablesToMany2ManyQuery(query) {
    const entities = this.DBModel.entities;
    query.select(`${entities.user.tableName}.*`, `${entities.organization.tableName}.name as organization_name`, `${entities.organization.tableName}.id as organization_id`, `${entities.userToOrganizationMap.tableName}.roles as organization_roles`)
      .innerJoin(entities.userToOrganizationMap.tableName, `${entities.userToOrganizationMap.tableName}.user_id`, `${entities.user.tableName}.user_id`)
      .innerJoin(entities.organization.tableName, `${entities.userToOrganizationMap.tableName}.org_id`, `${entities.organization.tableName}.id`);
  }

}

module.exports = new UserDAL();

'use strict';

const dbAccess = require('./dbAccess'),
  joiner = require('join-js').default,
  logger = require('logger'),
  utils = require('utils'),
  configurationManager = require('configurationManager');

const _internalDBConnection = Symbol('internalDBConnection');

class BaseDAL {

  constructor() {
    this.times = {};
    this.count = 0;
    this.onQueryHandler = this.onQuery.bind(this);
    this.onQueryResponseHandler = this.onQueryResponse.bind(this);
    this.onErrorHandler = this.onError.bind(this);
  }

  getConfig() {
    return configurationManager.database;
  }

  get knex() { return dbAccess.getInstance(this.getConfig(), this.onQueryHandler, this.onQueryResponseHandler, this.onErrorHandler); }

  onQuery(query) {
    if (process.env.debugmode) {
      const uid = query.__knexQueryUid;
      this.times[uid] = {
        position: this.count,
        query,
        startTime: new Date(),
        finished: false,
      };
      this.count++;

      logger.debug(`Query: ${query.sql}`);
    }
  }

  onQueryResponse(response, obj, builder) {
    if (process.env.debugmode) {
      const uid = obj.__knexQueryUid;
      this.times[uid].endTime = new Date();
      this.times[uid].finished = true;

      const { startTime, endTime } = this.times[uid];
      const elapsedTime = endTime - startTime;

      logger.debug(`Actual Query: ${builder.toString()}  (${elapsedTime.toFixed(0)} ms)`);
    }
  }

  onError(err) {
    if (process.env.debugmode) {
      logger.error(`Query error: ${err.message}`);
    }
  }

  applyOrganizationConstraint(query, workspace, orgIdField = "org_id") {
    if (!workspace.isMaster)
      query.where(orgIdField, workspace.organizationId);
  }

  applyDeletedConstraint(query, stateField = "state") {
    query.andWhereRaw(`${stateField} & ? = 0`, [utils.enums.State.Deleted]);
  }

  applyDisabledConstraint(query, stateField = "state") {
    query.andWhereRaw(`${stateField} & ? = 0`, [utils.enums.State.Disabled]);
  }

  applyInvalidConstraint(query, stateField = "state") {
    query.andWhereRaw(`${stateField} & ? = 0`, [utils.enums.State.Invalid]);
  }

  async performJoinedQuery(queryToPerform, joinMap, mapName, resultItemConstructor, onEntityFetched) {
    const DBFlatResult = await queryToPerform;
    const nestedResult = await this.convertFlatDBResultToNested(DBFlatResult, joinMap, mapName, resultItemConstructor, onEntityFetched);
    return nestedResult;
  }

  firstOrNull(inputArray) {
    return (inputArray && inputArray.length === 1) ? inputArray[0] : null;
  }

  getAliasedFieldsNames(tableName, columns, columnPrefix) {
    let res = [], i = 0, len = columns.length, colName;
    for (; i < len; ++i) {
      colName = columns[i];
      res.push(`${tableName}.${colName} as ${columnPrefix + colName}`);
    }

    return res;
  }

  mapEntityToRow(entityToMap, mappingToColumns) {
    let result = {}, value;

    for (let key in entityToMap) {
      if (mappingToColumns[key]) {
        value = entityToMap[key];
        result[mappingToColumns[key]] = value === undefined ? null : value;
      }
    }
    return result;
  }

  mapRowsToEntities(rows, resultItemConstructor, columnsMapping, onEntityFetched) {
    return rows.map((row) => {
      let resultItem = new resultItemConstructor();
      for (let key in columnsMapping) {
        resultItem[key] = row[columnsMapping[key]];
      }

      if (onEntityFetched)
        onEntityFetched(resultItem);
      return resultItem;
    });
  }

  convertFlatDBResultToNested(flatResult, joinMap, mapName, resultItemConstructor, onEntityFetched) {
    return joiner.map(flatResult, joinMap, mapName, '').map((typelessRow) => {
      let resultItem = new resultItemConstructor();
      Object.assign(resultItem, typelessRow);
      if (onEntityFetched)
        onEntityFetched(resultItem);
      return resultItem;
    });
  }

  async getObjectById(workspace, objId, tableName, columnsMap, resultItemConstructor, idFieldName) {
    if (!idFieldName)
      idFieldName = columnsMap.id || "id";

    const query = this.knex(tableName).where(idFieldName, objId);
    this.applyOrganizationConstraint(query, workspace);
    const result = await query;
    return this.firstOrNull(this.mapRowsToEntities(result, resultItemConstructor, columnsMap));
  }

  async insert(workspace, tableName, entity, columnsMap, returning, activeTransaction) {
    this.onBeforeInsert(workspace, tableName, entity, columnsMap);
    const entityRow = this.mapEntityToRow(entity, columnsMap);
    if (activeTransaction)
      return await activeTransaction.returning(returning).insert(entityRow).into(tableName);
    else
      return await this.knex(tableName).insert(entityRow).returning(returning);
  }

  async update(workspace, tableName, columnsMap, id, entity, returning, activeTransaction) {
    this.onBeforeUpdate(workspace, tableName, entity, columnsMap);
    const entityRow = this.mapEntityToRow(entity, columnsMap);

    const query = activeTransaction ? activeTransaction.into(tableName) : this.knex(tableName);
    this.applyOrganizationConstraint(query, workspace);
    query.andWhere(columnsMap.id, id);
    query.returning(returning);
    query.update(entityRow);

    logger.debug(`Performing update: ${query.toString()}`);
    return await query;
  }

  async delete(workspace, tableName, idFieldName, id, activeTransaction) {
    this.onBeforeDelete(workspace, tableName, idFieldName, id);
    const query = activeTransaction ? activeTransaction.into(tableName) : this.knex(tableName);
    this.applyOrganizationConstraint(query, workspace);
    query.andWhere(idFieldName, id);
    query.del();
    await query;
  }

  onBeforeInsert(workspace, tableName, entity, columnsMap) {
    if (workspace)
      workspace.verifyAuthorization(tableName, entity, workspace.actions.CREATE);

    if (entity && columnsMap) {
      if (columnsMap.hasOwnProperty("createdOn"))
        entity["createdOn"] = new Date();
      if (columnsMap.hasOwnProperty("updatedOn"))
        entity["updatedOn"] = new Date();

      if (workspace) {
        if (columnsMap.hasOwnProperty("createdBy"))
          entity["createdBy"] = workspace.userId;
        if (columnsMap.hasOwnProperty("updatedBy"))
          entity["updatedBy"] = workspace.userId;
      }
    }
  }

  onBeforeUpdate(workspace, tableName, entity, columnsMap) {
    if (workspace)
      workspace.verifyAuthorization(entity, tableName, workspace.actions.UPDATE);

    if (entity && columnsMap) {
      if (columnsMap.hasOwnProperty("updatedOn"))
        entity["updatedOn"] = new Date();

      if (workspace) {
        if (columnsMap.hasOwnProperty("updatedBy"))
          entity["updatedBy"] = workspace.userId;
      }
    }
  }


  onBeforeDelete(workspace, tableName, entity) {
    if (workspace)
      workspace.verifyAuthorization(tableName, entity, workspace.actions.DELETE);
  }

  // Backward compatibility - should be removed
  async query(query, parameters) {
    return await this.knex.raw(query, parameters);
  }
  async querySingle(query, parameters) {
    let res = await this.query(query, parameters);
    return res.rows ? res.rows[0] : null;
  }

}

module.exports = BaseDAL;

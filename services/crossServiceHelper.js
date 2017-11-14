'use strict';

const accountService = require('./account').service;
const logic = require('./logic');
const logsService = require('./logsSrv').service;


module.exports.getUserById = async (workspace, id) => {
  const srv = new accountService(workspace);
  return await srv.getById(id);
};

module.exports.updateLastIntegrationConnection = async (workspace, integration, connectionError) => {
  const srv = new logic.integrations.integrationsService(workspace);
  return await srv.updateLastConnectionDetails(integration, connectionError);
};

module.exports.getIntegration = async (workspace, integrationId) => {
  const srv = new logic.integrations.integrationsService(workspace);
  return await srv.getIntegration(integrationId);
};

module.exports.getIntegrationInfo = function (workspace, integration) {
  const srv = new logic.integrations.integrationsService(workspace);
  return integration.getClientInfo(integration);
};

module.exports.getActiveIntegrations = async (workspace) => {
  const srv = new logic.integrations.integrationsService(workspace);
  return await srv.getActiveIntegrations();
};

module.exports.getValidIntegrations = async (workspace, type) => {
  const srv = new logic.integrations.integrationsService(workspace);
  return await srv.getValidIntegrations(type);
};

module.exports.getProcessMapping = async (workspace, processMappingId) => {
  const srv = new logic.mapperService(workspace);
  return await srv.getProcessMapping(processMappingId);
};

module.exports.getValidProcessMappings = async (workspace, integrationId) => {
  const srv = new logic.mapperService(workspace);
  return await srv.getValidProcessMappings(integrationId);
};

module.exports.getMetadata = async (workspace, integration) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getMetadata(integration);
};

module.exports.getEntityMetadata = async (workspace, entityId) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getEntityMetadata(entityId);
};


module.exports.getEntity = async (workspace, entityId) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getEntity(entityId);
};

module.exports.getEntityByName = async (workspace, integrationLinkId, entityName) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getEntityByName( integrationLinkId, entityName);
};

module.exports.getField = async (workspace, fieldId) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getField(fieldId);
};

module.exports.getFieldByName = async (workspace, integrationLinkId, entityId, fieldName)  => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getFieldByName(integrationLinkId, entityId, fieldName);
};

module.exports.getFieldsOfEntity = async (workspace, integrationLinkId, entityId) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.getFieldsOfEntity(integrationLinkId, entityId);
};

module.exports.getFieldValues = async (workspace, fieldId) => {
  const srv =new logic.integrations.metadataService(workspace);
  return await srv.getFieldValues(fieldId);
};

module.exports.updateObjectsLastSeedDate = async (workspace, entityId, date) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.updateObjectsLastSeedDate(entityId, date);
};

module.exports.updateHistoryLastSeedDate = async (workspace, entityId, date) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.updateHistoryLastSeedDate(entityId, date);
};

module.exports.updateEntityLastSyncDate = async (workspace, entityId, date) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.updateEntityLastSyncDate(entityId, date);
};

module.exports.updateLastEventsSyncDate = async (workspace, entityId, date) => {
  const srv = new logic.integrations.metadataService(workspace);
  return await srv.updateLastEventsSyncDate(entityId, date);
};

module.exports.ensureIntegrationIndex = async (workspace, externalOrganizationId, entitiesMetadata) => {
  const srv = new logsService(workspace);
  return await srv.ensureIntegrationIndex(externalOrganizationId, entitiesMetadata);
};

module.exports.pushRawLog = async (workspace, rawLog, integration, entityType, entityName, entityIdFieldName, logDate) => {
  const srv = new logsService(workspace);
  return await srv.pushRawLog(rawLog, integration, entityType, entityName, entityIdFieldName, logDate);
};

module.exports.bulkInsertRawLogs = async (workspace, rawLogs, integration, entityType, entityName, entityIdFieldName, logDateFieldName) => {
  const srv = new logsService(workspace);
  return await srv.bulkInsertRawLogs(rawLogs, integration, entityType, entityName, entityIdFieldName, logDateFieldName);
};

module.exports.pushEntity = async (workspace, esLog, externalOrganizationId, entityMetadata) => {
  const srv = new logsService(workspace);
  return await srv.pushEntity(esLog, externalOrganizationId, entityMetadata);
};

module.exports.bulkInsertEntities = async (workspace, esLogs, externalOrganizationId, entityMetadata) => {
  const srv = new logsService(workspace);
  return await srv.bulkInsertEntities(esLogs, externalOrganizationId, entityMetadata);
};


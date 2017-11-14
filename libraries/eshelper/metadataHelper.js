'use strict';

const config = require('configurationManager');
const logger = require('logger');

/*
module.exports.generateEntityItem = (data) => {
    return {
        kind: data.kind,
        subType: data.subType,
        itemId: data.itemId,
        orgId: data.orgId,
        extOrgId: data.externalOrganizationId,
        integrationLinkId: data.integrationLinkId,
        integrationType: data.integrationType,
        relatedItemId: data.relatedItemId,
        relatedIds: [data.relatedItemId],
        ts: module.exports.getTimestamp(data.logDate),
        meta: data.meta
    };
};
*/
/*
module.exports.generateEventItem = (log) => {
    if (module.exports.isActivityEvent(log))
        return module.exports.generateActivityEventItem(log);
    else
        return module.exports.generateProcessChangedEventItems(log);
};

module.exports.generateActivityEventItem = (data) => {
    return {
        kind: "activity",
        orgId: data.orgId,
        extOrgId: data.externalOrganizationId,
        integrationLinkId: data.integrationLinkId,
        integrationType: data.integrationType,
        itemId: data.itemId,
        relatedItemId: data.relatedItemId,
        activity: data.activity,
        activitySubType: data.activitySubType,
        meta: {},
        ts: module.exports.getTimestamp(data.logDate)
    };
};
*/
/*
module.exports.generateProcessChangedEventItems = (data) => {
    return {
        kind: "proc_change",
        orgId: data.orgId,
        extOrgId: data.externalOrganizationId,
        integrationLinkId: data.integrationLinkId,
        integrationType: data.integrationType,
        itemId: data.itemId,
        relatedItemId: data.relatedItemId,
        procFieldName: data.fieldName,
        procFieldValue: data.newValue,
        procFieldPrevValue: data.oldValue,
        meta: {},
        ts: module.exports.getTimestamp(data.logDate)
    };
};
*/
module.exports.isActivityEvent = (log) => {
    return log.relatedItemId && log.itemId != log.relatedItemId && log.subType;
};

module.exports.resolveApiNames = (obj, integrationFields) => {
    let resObj = Object.assign({}, obj), fields;

    for (let propertyName in resObj) {
        if (resObj.hasOwnProperty(propertyName)) {
            fields = integrationFields.filter(f => f.externalApiName == propertyName);
            if (fields.length)
                resObj[module.exports.getPropertyName(fields[0])] = resObj[propertyName];

            delete resObj[propertyName];
        }
    }

    return resObj;
};

module.exports.getTimestamp = (date) => {
    return Math.floor(new Date(date).getTime() / 1000);
};

module.exports.getDateFromTimestamp = (ts) => {
    return new Date(ts * 1000);
};

module.exports.getEntityIndexName = (externalOrganizationId) => {
    return ("inflowz_entity_" + externalOrganizationId).toLowerCase();
};

module.exports.getEventsIndexName = (processMappingId) => {
    return ("inflowz_event_" + processMappingId).toLowerCase();
};

module.exports.getPropertyName = (field) => {
    return field.apiName + "_" + module.exports.getElasticDataType(field.dataType);
};

module.exports.getElasticDataType = (dataType) => {
    switch (dataType) {
        case "string":
        case "reference":
        case "email":
        case "phone":
        case "id":
        case "url":
        case "combobox":
        case "picklist":
        case "multipicklist":
        case "date":
        case "datetime":
        case "base64":
        case "encryptedstring":
        case "textarea": return "keyword";
        case "currency":
        case "percent": return "double";
        case "int": return "integer";
        case "address": return "object";
        //      case "datetime": return "strict_date_optional_time";
        default: return dataType;
    }
};



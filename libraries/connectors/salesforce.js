'use strict';

const SalesForce = require('jsforce'),
      logger = require('logger');

const topicPrefix = "Inflowz";

class SalesforceHandler {
  constructor(credentials, externalOrganizationId) {
    this.credentials = credentials;
    this.externalOrganizationId = externalOrganizationId;
    this.conn = new SalesForce.Connection();
    this.isConnected = false;
    this.connError = null;
    this.metadata;

    this.onMessageRecievedHandler = this.onMessageRecieved.bind(this);
  }

  static get metadataTables() {
    return ["OpportunityStage", "LeadStatus"];
  }

  static get supportedObjectTypes() {
    return ["Account", "Campaign", "Case", "Contact", "Lead", "Opportunity", "OpportunityLineItem", "Task", "User", "UserRole", "Event", "Quote", "Contract", "Order", "Solution", "Product2", "PriceBook2", "Asset", "Group", "Profile", "Attachment"];
  }

//  static get supportedHistoryTypes() {
//    return ["Account", "Campaign", "Case", "Contact", "Lead", "Opportunity", "Contract", "Solution", "Product2", "PriceBook2", "Asset"];
//  }

  static get vitalObjects() {
    return ["Account", "Contact", "User", "Solution", "Product2", "PriceBook2", "Asset", "Group", "Profile"];
  }

  static get supportedStreamingObjects() {
    return ["Account", "Campaign", "Case", "Contact", "Lead", "Opportunity", "Task", "OpportunityLineItem"];
  }

  async connect() {
    if (this.isConnected)
      return;

    try {
      await this.conn.login(this.credentials.userName, this.credentials.password + this.credentials.securityToken);
      this.accessToken = this.conn.accessToken;
      this.isConnected = true;
    }
    catch (err) {
      logger.error(err);      this.isConnected = false;
      //this.connError = ‌‌‌‌err.message.substr(err.message.indexOf(": ") + 2);
      this.connError = err.message;
    }
  }

  async startListening() {
    try {
      const topics = await this.getPushTopics();
      for (let i = 0, len = topics.length; i < len; ++i) {
        this.subscribeToTopic(topics[i].Name);
      }
    }
    catch (err) {
      logger.error("Failed to start listening.");
    }
  }

  async stopListening() {
    try {
      const topics = await this.getPushTopics();
      for (let i = 0, len = topics.length; i < len; ++i) {
        this.unsubscribeFromTopic(topics[i].Name);
      }
    }
    catch (err) {
      logger.error("Failed to stop listening.");
    }
  }


  async getPushTopics() {
    const query =
      "SELECT Name, Query, ApiVersion, Description, ID, isActive,  NotifyForFields, NotifyForOperations,  " +
      "NotifyForOperationCreate, NotifyForOperationDelete, NotifyForOperationUndelete, NotifyForOperationUpdate " +
      "FROM PushTopic " +
      `WHERE Name like '${topicPrefix}%' AND IsDeleted = false`;

    this.topics = await this.query(query);
    return this.topics || [];
  }

  async query(query) {
    await this.connect();
    return await this.conn.query(query);
  }

  async queryMore(nextRecordsUrl) {
    return await this.conn.queryMore(nextRecordsUrl);
  }

  async queryAll(query) {
    await this.connect();

    let res = await this.conn.query(query);
    let records = res.records;
    while(!res.done) {
      res = await this.conn.queryMore(res.nextRecordsUrl);
      records = records.concat(res.records);
    }     
    
    return records;
  }

  async createPushTopic(objectName) {
    const name = topicPrefix + objectName;
    const objectQuery = await this.getObjectFieldsQuery(objectName);
    const apiVersion = 38;
    const description = '';
    const query = "INSERT INTO PushTopic (Name, Query, ApiVersion, Description, IsDeleted, IsActive, NotifyForFields, NotifyForOperations, NotifyForOperationCreate, NotifyForOperationDelete, NotifyForOperationUndelete, NotifyForOperationUpdate) " +
      `VALUES ('${name}', '${objectQuery}', ${apiVersion}, '${description}', false, true, 'all', 'all', true, true, true, true)`;

    return await this.query(query);
  }

  async deletePushTopic(objectName) {
    const name = topicPrefix + objectName;
    const query = `UPDATE PushTopic SET IsDeleted = true WHERE Name='${name}'`;
    return await this.query(query);
  }

  async deleteAllPushTopic(objectName) {
    const name = topicPrefix + objectName;
    const query = `UPDATE PushTopic SET IsDeleted = true WHERE Name like '${topicPrefix}%'`;
    return await this.query(query);
  }

  getObjectFieldsQuery(objectName) {

  }

  async subscribeToTopic(pushTopicName) {
    //   conn.streaming.topic('InflowzOpportunity').subscribe(function(message) {
    await this.conn.streaming.topic(pushTopicName).subscribe(this.onMessageRecievedHandler);
  }

  async unsubscribeFromTopic(pushTopicName) {
    //   conn.streaming.topic('InflowzOpportunity').subscribe(function(message) {
    await this.conn.streaming.topic(pushTopicName).unsubscribe();
  }

  onMessageRecieved(message) {
    logger.debug("Salesforce listener, recieved message : " + message);
  }

  async getEntityMetadata(entityName) {
    if (this.metadata && this.metadata.hasOwnProperty(entityName))
      return this.metadata[entityName];
    
    return await this.getMetadata(entityName);
  }

  async getMetadata(entityName=null) {
    if (this.metadata)
      return this.metadata;

    await this.connect();
    if (!this.isConnected)
      return null;

    logger.info('Retrieving metadata from Salesforce');
    const self = this;
    let debugStartTime = new Date();
    let tempDebugStartTime = new Date();
    const resp = await this.conn.describeGlobal();
    logger.debug("Salesforce - describeGlobal", tempDebugStartTime);

    let allDescribedObjects = resp.sobjects,
        filteredObjects;

    filteredObjects = allDescribedObjects.filter(item => SalesforceHandler.metadataTables.indexOf(item.name) >= 0);
    this.metadata = await this.createMetadata(filteredObjects, allDescribedObjects);

    if(entityName) 
      filteredObjects = allDescribedObjects.filter(item => item.name == entityName);
    else
      filteredObjects = allDescribedObjects.filter(item => item.custom || SalesforceHandler.supportedObjectTypes.indexOf(item.name) >= 0);
 
    this.metadata = Object.assign(this.metadata, await this.createMetadata(filteredObjects, allDescribedObjects));

    logger.debug("Salesforce - Metadata retreived.", debugStartTime);

    //return this.metadata;
    return this.metadata;
  }

  async createMetadata(filteredObjects, allDescribedObjects) {
    let metadata = {}, debugStartTime, fields;
    const self = this;
    await Promise.all(filteredObjects.map(async (element) => {
      logger.info(`Salesforce - describing object: ${element.name}`);
      try {
        debugStartTime = new Date();
        let obj = await self.conn.sobject(element.name).describe();
        logger.debug("Salesforce - describe", debugStartTime);
        element.sObject = obj;
        element.isSupportHistory = isHistorySupported(allDescribedObjects, element);
        element.isSupportStreaming = isStreamingSupported(element);
        metadata[element.name] = element;
        await self.addAdditionalInfo(element);

        if (element.isSupportHistory) {
          let historyName = self.getHistoryTableName(element.name);
          try {
            logger.info(`Salesforce - describing object: ${historyName}`);
            obj = await self.conn.sobject(historyName).describe();
            fields = obj.sObject ? obj.sObject.fields : obj.fields;
            element.historyFields = fields.map(f => f.name).join(",");
          } catch (err) {
            logger.info(`Salesforce - Failed to describe history object: ${element.name}`);
          }
        }
      } catch (err) {
        logger.error(`Salesforce - Failed to describe object: ${element.name}, Error: ${err}`);
      }
    }));

    return metadata;
  }

  async addAdditionalInfo(entity) {
    if(entity.name == "Opportunity") {
      const entityFields = this.metadata["OpportunityStage"].sObject.fields.map(f => f.name);
      let objTemp = await this.fetchObjects("OpportunityStage", entityFields);
      entity.additionalInfo = {stages: objTemp.records};
    }
    else if(entity.name == "Lead") {
      const entityFields = this.metadata["LeadStatus"].sObject.fields.map(f => f.name);
      let objTemp = await this.fetchObjects("LeadStatus", entityFields);
      entity.additionalInfo = {statuses: objTemp.records};
    }
}

  async getObjectTypes() {
    const self = this;
    await this.connect();
    //logger.info("Fetching objectTypes...");
    const resp = this.conn.describeGlobal();
    this.metadata = resp.sobjects.filter(item => SalesforceHandler.supportedObjectTypes.indexOf(item.name) >= 0);
    return this.metadata.map(item => item.name);
  }

  async getObjectById(entityName, selectFields, objId) {
    let query = `Select ${selectFields.join(",")} from ${entityName} where Id='${objId}'`;
    const res = await this.query(query);
    return res.records.length ? res.records[0] : null;
  }

  async fetchObjects(entityName, selectFields, filters, orderBy, sortOrder = "asc") {
    let query = `Select ${selectFields.join(",")} from ${entityName}`;
    if (filters && filters.length)
      query += " where " + filters.join(" and ");

  //    query += " and (like '%attended the 10.2016 Ask the Ama%')";
    if(orderBy) 
      query += ` order by ${orderBy} ${sortOrder}`;
    
    return await this.query(query);
  }

  async fetchHistory(entityName, queryFields, startDate, endDate) {
    if(startDate)
      startDate.setTime(startDate.getTime() - (startDate.getTimezoneOffset() * 60000));
    
    let query = `Select ${queryFields} from ${this.getHistoryTableName(entityName)} where CreatedDate>${startDate.toISOString()}`;
    if (endDate) {
      endDate.setTime(endDate.getTime() - (endDate.getTimezoneOffset() * 60000));
      query += ` and CreatedDate<='${endDate.toISOString()}'`;
    }

    if(queryFields.indexOf('SystemModstamp') != -1)
      query += "  order by SystemModstamp, CreatedDate";
    else
      query += "  order by CreatedDate";

    return await this.query(query);
  }

  getHistoryTableName(entityName) {
    if(entityName.indexOf("_c") == entityName.length - 2)
      return entityName.substring(0, entityName.length - 2) + "History";
    else
      return entityName + "History";
  }

  static getEntityIdFieldName(entityName) {
    if (entityName.indexOf("_c") == entityName.length - 2)
      return "Id";
    else if (entityName == "Activity")
      return "WhatId";
    else
      return entityName + "Id";
  }
  /*
    //TODO: at work...
    syncMetaData() {
      const self = this;
      return new Promise(function (fulfill, reject) {
  
        const onError = function (err) {
          //logger.error(err, "salesforce:getMetadata");
          return reject(err.message);
        };
  
        self.connect().then(() => {
          self.sf.sobject("SetupAuditTrail")
            .find(
            // conditions in JSON object
            { CreatedDate: { $gte: SalesForce.Date.YESTERDAY } },
            // fields in JSON object
            {
              Display: 1,
              Section: 1,
              Action: 1
            }
            )
            .execute(function (err, records) {
              let changes = [];
              //filter to get only name change records.
              records.forEach(record => {
                let displayArr = record.Display.split(" ");
                if (displayArr.length < 4)
                  return;
                // get the action, should accept Changed/Deleted/Created
                let recAction = displayArr[0];
                let recType, recOldName, recNewName;
                let recIsLabel = false;
                switch (recAction) {
                  case "Changed": {
                    //TODO: unsafe in case old/new name contain the words from, to etc..
                    recType = displayArr[1];
                    if (recType == "label") {
                      recIsLabel = true;
                      recType = displayArr[4];
                    }
                    else if (recType != "object" && recType != "field")
                      return;
                    recOldName = record.Display.substring(record.Display.indexOf(" from ") + 6, record.Display.indexOf(" to "));
                    recNewName = record.Display.substring(record.Display.indexOf(" to ") + 4);
                    changes.push({ action: recAction, type: recType, isLabel: recIsLabel, oldName: recOldName, newName: recNewName });
                    break;
                  }
                  case "Deleted": {
                    //TODO:
                    break;
                  }
                  case "Created": {
                    //TODO:
                    break;
                  }
                  default:
                    return;
                }
                return changes;
              });
              if (err) { return err; }
            });
  
        }).catch(err => {
          return onError(err);
        });
      });
    }
  */

}

module.exports = SalesforceHandler;



function extractVitalMetadata(describedObjects) {
  //  return describedObjects;

  let res = {}, objectType, objectMetadata;
  const keys = Object.keys(describedObjects);
  for (let i = 0; i < keys.length; ++i) {
    objectType = keys[i];
    objectMetadata = {
      name: objectType,
      fields: []
    };

    describedObjects[objectType].sObject.fields.forEach(function (element) {
      objectMetadata.fields.push({
        name: element.name,
        label: element.label,
        type: element.type,
        length: element.length,
        referenceTo: element.referenceTo
      });
    }, this);

    res[objectType] = objectMetadata;
  }

  return res;

}

function isHistorySupported(describedObjects, obj) {
//  if(SalesforceHandler.supportedHistoryTypes.indexOf(obj.name) != -1)
//    return true;

  let historyTableName = (obj.custom ? obj.name.substring(0, obj.name.length - 2) : obj.name) + "History";
  return describedObjects.filter(o => o.name == historyTableName).length > 0;
}

function isStreamingSupported(obj) {
  return obj.custom || SalesforceHandler.supportedStreamingObjects.indexOf(obj.name) != -1;
}



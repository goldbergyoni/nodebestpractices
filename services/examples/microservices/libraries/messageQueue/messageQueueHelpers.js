'use strict';
const configurationManager = require('configurationManager');
const logger = require('logger');
const errors = require('errorManagement');
const util = require('util');
const MessageQueueService = require('./messageQueueService');
const Workspace = require('entityServices').Workspace;

const workspaceMetaDataParamaterName = 'workspace';

//this class, unlike the service, is aware of Inflowz specific narratives like workspace and saves time for the callers
//by bridging between custom app needs and the generic service
class MessageQueueHelpers {

  async publishMessage(queueName, newMessage, workspace) {

    const serializedWorkspace = JSON.stringify(workspace.toGist());
    const messageMetaData = {};
    messageMetaData[workspaceMetaDataParamaterName] = {
      DataType: "String",
      StringValue: serializedWorkspace
    };

    return new MessageQueueService().publishMessage(queueName, newMessage, messageMetaData);
  }

  async publishToTopic(topicName, message, workspace) {

    const serializedWorkspace = JSON.stringify(workspace.toGist());
    const messageMetaData = {};
    messageMetaData[workspaceMetaDataParamaterName] = {
      DataType: "String",
      StringValue: serializedWorkspace
    };

    return new MessageQueueService().publishToTopic(topicName, message, messageMetaData);
  }

  async subscribeToNewMessages(queueName, callback) {
    return new MessageQueueService().subscribeToNewMessages(queueName, async(messageContent, messageAttributes, done) => {
      let workspaceInMessage = null;
      if (messageAttributes[workspaceMetaDataParamaterName]) {
        const workspaceGist = JSON.parse((messageAttributes[workspaceMetaDataParamaterName].StringValue));
        workspaceInMessage = Workspace.factorFromGist(workspaceGist);
      }
      await callback(messageContent, workspaceInMessage);
    }, [workspaceMetaDataParamaterName]);
  }

  //this method will allow endpoints to register all their listeneres in one shot by providing something like:
  //[{queueName , handler, formatter, onErrorStrategy}]
  async subscribeToMultipleQueues(subscriptionDefinitionArray) {

  }
}


module.exports = MessageQueueHelpers;

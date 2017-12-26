'use strict';
const configurationManager = require('configurationManager');
const logger = require('logger');
const errors = require('errorManagement');
const util = require('util');
const SQSListener = require('sqs-consumer');
const AWS = require("aws-sdk");

process.env['AWS_SECRET_ACCESS_KEY'] = configurationManager.AWSGlobal.secret;
process.env['AWS_ACCESS_KEY_ID'] = configurationManager.AWSGlobal.key;
AWS.config.update({
  region: configurationManager.AWSGlobal.region
});

class MessageQueueService {
  
  async createQueue(queueName) {
    logger.debug(`Message queue service is about to create the queue ${util.inspect(queueName)}`);
    const params = {
      QueueName: queueName
    };
    const SQSService = new AWS.SQS();
    
    // console.log('ds ' + util.inspect(SQSService.endpoint));
    // SQSService.endpoint.hostname = 'sqs.localhost:4576';
    // SQSService.endpoint.port = 4576;
    // SQSService.endpoint.protocol = 'http:';
    // console.log('ds ' + util.inspect(SQSService.endpoint));
    const response = await SQSService.createQueue(params).promise();
    logger.debug(`The following response arrived for queue creation  ${util.inspect(response)}`);

    return response;
  }

  async publishMessage(queueName, newMessage, messageAttributes) {
    logger.debug(`Message queue service is about to send the message ${util.inspect(newMessage)} to the queue ${queueName}`);
    const params = {
      MessageBody: JSON.stringify(newMessage),
      QueueUrl: this.getQueueURL(queueName)
    };
    if (messageAttributes)
      params["MessageAttributes"] = messageAttributes;
    logger.debug(this.getQueueURL(queueName));
    const messageAcknowledge = await new AWS.SQS().sendMessage(params).promise();
    logger.debug(`Message acknowledge received ${util.inspect(messageAcknowledge)} from the queue ${queueName}`);

    return messageAcknowledge;
  }

  async publishToTopic(topicName, message, messageAttributes) {
    logger.debug(`About to publish the message ${message} to the topic ${topicName}`);
    const sns = new AWS.SNS();
    const requestParams = {
      Message: JSON.stringify(message),
      TopicArn: topicName,
    };
    if (messageAttributes)
      requestParams["MessageAttributes"] = messageAttributes;

    const messageAcknowledge = await sns.publish(requestParams).promise;
    logger.debug(`Message acknowledge received ${util.inspect(messageAcknowledge)} from the topic ${topicName}`);

    return messageAcknowledge;
  }

  //TODO: promisify that
  subscribeToNewMessages(queueName, callback, additionalMetadataKeys) {
    logger.info(`SQS listener is about to listen to the queue name ${queueName}`);
    const subscriberDefinition = {
      queueUrl: this.getQueueURL(queueName),
      handleMessage: async function (messages, done) {
        logger.debug(`SQS listener just got from the queue ${queueName} a new message with the following payload ${util.inspect(messages)}`);
        try {
          let messageWholeBody = JSON.parse(messages.Body);
          //in case it's a topical message - the content is wrapped in a message property. In direct message - it's not
          let messageContent = messageWholeBody.Message ? JSON.parse(messageWholeBody.Message) : messageWholeBody;
          await callback(messageContent, messages.MessageAttributes);
          done();
        } catch (error) {
          throw new errors.appError(`Error occured while trying to process a new SQS message from the queue ${queueName}`, 500, "handleSQSMessageError", error);
        }
      }
    };
    if (additionalMetadataKeys)
      subscriberDefinition.messageAttributeNames = additionalMetadataKeys;

    let subscriber = SQSListener.create(subscriberDefinition);

    subscriber.start();
  }

  getSQSBaseURL(){
    return `${configurationManager.messageQueue.MQBaseURL}`;
  }

  getQueueURL(queueName) {
    return `${this.getSQSBaseURL()}${this.getFullQueueName(queueName)}`;
  }

  getFullQueueName(queueName) {
    return `${configurationManager.messageQueue.queueNamePrefix}-${queueName}`;
  }
}


module.exports = MessageQueueService;

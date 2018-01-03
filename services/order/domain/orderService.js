"use strict";

const DAL = require("./orderDAL"),
  errors = require("./orderErrors"),
  logger = require("logger"),
  axios = require("axios"),
  errorHelpers = require("errorManagement"),
  serviceClient = require('service-client'),
  config = require('configurationManager'),
  messageQueue = require('messageQueue');

class OrderService {
  async add(newOrder) {
    logger.info(
      `Order service is about to add new order ${JSON.stringify(newOrder)}`,
      this.context
    );

    if (!newOrder.validate())
      throw new errorHelpers.commonErrors.InvalidInputError("Invalid product");

    var existingUser = await serviceClient.get(`${config.userServiceURL}/api/users/`, 
      {id:newOrder.customer}, this.context);
    if (!existingUser) throw new errorHelpers.appError('The user doesnt exist' , 404, 'UnknownUser');
    logger.info(`User exists so moving forward to product validation`);

    //check if product exists
    var existingProduct = await serviceClient.get(`${config.productServiceURL}/api/products/`, {id:newOrder.product},
      this.context);
    if (!existingProduct) throw new Error("The product doesn't exist");

    logger.info(`About to save new order in DB`);

    const theSavedOrder = await DAL.add(newOrder);

    //publish in mq
    new messageQueue.helper().publishToTopic('orderAdded', newOrder, this.context);

    return theSavedOrder;
  }
}

module.exports = OrderService;
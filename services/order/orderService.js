"use strict";

const DAL = require("./orderDAL"),
  errors = require("./orderErrors"),
  logger = require("logger"),
  axios = require("axios"),
  errorHelpers = require("errorManagement");

class OrderService {
  async add(newOrder) {
    logger.info(
      `Order service is about to add new order ${JSON.stringify(newOrder)}`
    );

    if (!newOrder.validate())
      throw new errorHelpers.commonErrors.InvalidInputError("Invalid product");

    var existingUser = await axios.get(
      `http://localhost:8080/api/accounts/${newOrder.user}`
    );
    if (!existingUser) throw new errorHelpers.appError('The user doesnt exist' , 404, 'UnknownUser');
    logger.info(`User exists so moving forward to product validation`);

    //check if product exists
    var existingProduct = await axios.get(
      `http://localhost:8080/api/products/${newOrder.product}`
    );
    if (!existingProduct) throw new Error("The product doesn't exist");

    logger.info(`About to save new order in DB`);

    const theSavedOrder = await DAL.add(newOrder);
    throw new Error("goo4");

    //publish in mq

    return theSavedOrder;
  }
}

module.exports = OrderService;

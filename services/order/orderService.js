"use strict";

const DAL = require('./orderDAL'),
    errors = require('./orderErrors'),
    logger = require('logger'),
    axios = require('axios');

class OrderService {
    async add(newOrder) {
        logger.info(`Order service is about to add new order ${JSON.stringify(newOrder)}`);

        if (!newOrder.validate())
            throw new Error('The order is invalid');
        
        var existingUser = await axios.get(`http://localhost:8080/api/accounts/${newOrder.user}`);
        if (!existingUser)
            throw new Error('The user doesn\'t exist');
        
        logger.info(`User exists so moving forward to product validation`);

        //check if product exists
        var existingProduct = await axios.get(`http://localhost:8080/api/products/${newOrder.product}`);
        if (!existingProduct)
            throw new Error('The product doesn\'t exist');

        logger.info(`About to save new order in DB`);

        const theSavedOrder = await DAL.add(newOrder);

        //publish in mq

        return theSavedOrder;
    }
}

module.exports = OrderService;
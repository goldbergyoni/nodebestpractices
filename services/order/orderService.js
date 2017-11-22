"use strict";

const DAL = require('./orderDAL'),
    errors = require('./orderErrors'),
    logger = require('logger'),
    axios = require('axios');

class OrderService {

    async add(newOrder) {
        logger.info(`Order service is about to add new order ${newOrder}`);

        if (!newOrder.validate())
            throw new Error('The order is invalid');

        //check whether the user  exists
        existingUser = await axios.get(`/account/${newOrder.user}`);
        if (!existingUser)
            throw new Error('The user doesnt exist');

        //const theSavedOrder = await DAL.add(newOrder);

        return theSavedOrder;
    }



}

module.exports = OrderService;
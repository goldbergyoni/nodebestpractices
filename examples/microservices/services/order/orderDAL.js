"use strict";
var util = require('util'),
    configProvider = require('configurationManager'),
    logger = require('logger');

class OrderDAL {
    constructor() {
        this.orders = "orders";
    }
    
    add(newOrder){
        console.log(`About to save order in db ${newOrder}`)
        Promise.resolve(true)
    }

}

module.exports = new OrderDAL();
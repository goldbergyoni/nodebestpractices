const express = require('express'),
    util = require('util'),
    router = express.Router(),
    newOrderService = require('./orderService'),
    order = require('./order');


router.post('/', async(req, res, next) => {
    console.log(`Order controller was called to add new Order ${util.inspect(req.body)}`);
    const newOrderToAdd = Object.assign(new order(), req.body);
    const newOrderResult = await new newOrderService().add(newOrderToAdd);
    return newOrderResult;
});

module.exports = router;
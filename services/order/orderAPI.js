var express = require('express'),
    util = require('util'),
    router = express.Router(),
    newOrderService = require('./orderService'),
    logger = require('logger');

router.post('/', async (req, res, next) =>{
    logger.info(`Order controller was called to add new Order ${util.inspect(req.body)}`);
    const newOrderResult = await new newOrderService().addOrder(req.body);
    return newOrderResult;
});

module.exports = router;

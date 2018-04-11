const express = require("express"),
  util = require("util"),
  router = express.Router(),
  newOrderService = require("../domain/orderService"),
  order = require("./order");

router.post("/" , validator(Product.validate), async (req, res, next) => {
  try {
    console.log(`Order controller was called to add new Order ${util.inspect(req.body)}`);
    const newOrderToAdd = Object.assign(new order(), req.body);
    const newOrderResult = await new newOrderService(req.context).add(newOrderToAdd);
    res.json(newOrderResult);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
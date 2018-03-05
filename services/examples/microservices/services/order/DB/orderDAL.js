"use strict";
var util = require("util"),
  configProvider = require("configurationManager"),
  logger = require("logger");

class OrderDAL {
  constructor() {
    this.orders = "orders";
  }

  add(newOrder) {
    console.log(`About to save order in db ${newOrder}`);
    return knex.transaction(function(trx) {
      knex("orders")
        .transacting(trx)
        .insert(newOrder)
        })
        .then(trx.commit)
        .catch(trx.rollback);
    });
  }

  getOrders() {
    return knex
      .table("users")
      .innerJoin("accounts", "users.id", "=", "accounts.user_id");
  }
}

module.exports = new OrderDAL();

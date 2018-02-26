"use strict";
const JSONValidator = require("jsonschema").Validator;

class Order {
  constructor(id, user, product, status, createdOn) {
    this.id = id || "0";
    this.customer = user || 0;
    this.product = product || 0;
    this.status = status || "New";
    this.createdOn = createdOn || new Date();
  }

  validate() {
    var v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    return {
      id: "/Order",
      type: "object",
      properties: {
        customer: {
          type: "integer",
          minimum: 1
        },
        product: {
          type: "integer",
          minimum: 1
        },
        status: {
          type: {
            enum: ["open", "paid", "delivered"]
          }
        },
        remarks: {
          type: "string"
		},
		createdOn:{
			type:"date"
		}
      },

      required: ["status", "customer", "product", "createdOn"]
    };
  }
}

module.exports = Order;

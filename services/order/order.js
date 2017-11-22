"use strict";
const JSONValidator = require('jsonschema').Validator;
const joi = require('joi');

class Order {

	constructor(id, user, product, status, createdOn) {
		this.id = id || "0";
		this.user = user || 0;
		this.product = product || 0;
		this.status = status || 'New';
		this.createdOn = createdOn || new Date();
	}

	validate() {
		return joi.validate(this, this.constructor.schema, {allowUnknown: true}, (error, value) => {
			console.log(error)
			if (error !== null)
				return false;
			else
				return true;
		});
	}

	static get schema() {
		const schema = joi.object().keys({
			id: joi.number().required(),
			user: joi.number().required(),
			product: joi.number().required(),
			status: joi.string().allow(''),
		});

		return schema;
	}




}

module.exports = Order;
"use strict";
	
class Order {

  constructor() {
    super();
    this.id = 0;
		this.user = 0;
		this.product = 0;
		this.status = 'New';
		this.createdOn =  new Date();
	}

	validate(){
		return true;
	}

	static get schema() {
		const schema = Joi.object().keys({
			password: Joi.string().required(),
			salt: Joi.string(),
			displayName: Joi.string().required(),
			imageUrl: Joi.string().allow(''),
			email: Joi.string().required(),
			schema: Joi.any(),
			createdOn: Joi.date().required(),
			language: Joi.number().required()
		});

		return schema;
	}



  
}

module.exports = Order;

"use strict";

const { baseEntity } = require('entityServices'),
  config = require('configurationManager'),
	util = require('util'),
	Joi = require('joi'),
	utils = require('utils'),
	{ crypto } = utils;
	

class user extends baseEntity {

  constructor() {
    super();

    this.state = 1;
		this.salt = '';
		this.password = '';
		this.loginCount = 0;
		this.createdOn =  new Date();
    this.organizations =  [];
    this.organization = {};
    this.language = utils.enums.Language.en_US.value;
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

  get organizationId() { return this.organization.id; }
	get roles() { return this.organization.roles; }

  async setPassword(value) {
		if (!this.salt){
      this.salt = await crypto.generateSalt();
    }

    this.password = await crypto.hashPassword(value, this.salt);
  }

  async verifyPassword(password) {
		return await crypto.verifyPassword(password, this.password, this.salt);
  }

  getUserInfo() {
		return {
			id: this.id,
			email: this.email,
			displayName: this.displayName,
			imageUrl: this.imageUrl,
			timezoneOffset: this.timezoneOffset,
			organizations: this.organizations,
			currentOrgId: this.organizationId,
			roles: this.roles,
			language: utils.enums.getLanguageKey(this.language)
		};
	}

	impersonateOrganization(orgId) {
		if (orgId) {
			const org = this.organizations.filter(o => o.id == orgId);
			if (org && org.length) {
				this.organization = org[0];
				return true;
			}
		}
		return false;
	}

	isAuthorized(request) {
		return true;
  }

	static factor(factoryInput) {
		let factoredUser = new user();
		Object.assign(factoredUser, factoryInput);

		return factoredUser;
	}
}

module.exports = user;

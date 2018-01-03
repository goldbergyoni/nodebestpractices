const joi = require('joi'),
commonErrors = require('errorManagement').commonErrors,
	util = require('util');

class entityServices {
	validate(objectToValidate, schema) {
		let result;
		joi.validate(objectToValidate, schema, {allowUnknown: true}, (error, value) => {
			if (error !== null)
				result = {valid: false, reason: {name: error.name, message: error.message}};
			else
				result = {valid: true, reason: {}};
		});

		return result;
	}

	assertIsValid(objectToValidate, schema)
	{
		const validationResult = this.validate(objectToValidate, schema);
		if(!validationResult.valid)
			throw commonErrors.InvalidInputError(`Entity is not valid: ${util.inspect(validationResult.reason)}`, validationResult.reason);
	}
}

module.exports = entityServices;

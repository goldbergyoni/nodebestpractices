'use strict';

var util = require('./util'),
    ono = require('ono'),
    ZSchema = require('z-schema'),
    swaggerSchema = require('swagger-schema-official/schema.json');

module.exports = validateSchema;

initializeZSchema();

/**
 * Validates the given Swagger API against the Swagger 2.0 schema.
 *
 * @param {SwaggerObject} api
 */
function validateSchema (api) {
  util.debug('Validating against the Swagger 2.0 schema');

  // Validate the API against the Swagger schema
  var isValid = ZSchema.validate(api, swaggerSchema);

  if (isValid) {
    util.debug('    Validated successfully');
  }
  else {
    var err = ZSchema.getLastError();
    var message = 'Swagger schema validation failed. \n' + formatZSchemaError(err.details);
    throw ono.syntax(err, { details: err.details }, message);
  }
}

/**
 * Performs one-time initialization logic to prepare for Swagger Schema validation.
 */
function initializeZSchema () {
  ZSchema = new ZSchema({
    breakOnFirstError: true,
    noExtraKeywords: true,
    ignoreUnknownFormats: false,
    reportPathAsArray: true
  });
}

/**
 * Z-Schema validation errors are a nested tree structure.
 * This function crawls that tree and builds an error message string.
 *
 * @param {object[]}  errors     - The Z-Schema error details
 * @param {string}    [indent]   - The whitespace used to indent the error message
 * @returns {string}
 */
function formatZSchemaError (errors, indent) {
  indent = indent || '  ';
  var message = '';
  errors.forEach(function (error, index) {
    message += util.format('%s%s at #/%s\n', indent, error.message, error.path.join('/'));
    if (error.inner) {
      message += formatZSchemaError(error.inner, indent + '  ');
    }
  });
  return message;
}

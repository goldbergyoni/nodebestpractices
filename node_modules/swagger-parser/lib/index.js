/** !
 * Swagger Parser v3.4.0
 *
 * @link https://github.com/BigstickCarpet/swagger-parser
 * @license MIT
 */
'use strict';

var validateSchema = require('./validate-schema'),
    validateSpec = require('./validate-spec'),
    util = require('./util'),
    Options = require('./options'),
    Promise = require('./promise'),
    maybe = require('call-me-maybe'),
    ono = require('ono'),
    $RefParser = require('json-schema-ref-parser'),
    dereference = require('json-schema-ref-parser/lib/dereference');

module.exports = SwaggerParser;

/**
 * This class parses a Swagger 2.0 API, resolves its JSON references and their resolved values,
 * and provides methods for traversing, dereferencing, and validating the API.
 *
 * @constructor
 * @extends $RefParser
 */
function SwaggerParser () {
  $RefParser.apply(this, arguments);
}

util.inherits(SwaggerParser, $RefParser);
SwaggerParser.YAML = $RefParser.YAML;
SwaggerParser.parse = $RefParser.parse;
SwaggerParser.resolve = $RefParser.resolve;
SwaggerParser.bundle = $RefParser.bundle;
SwaggerParser.dereference = $RefParser.dereference;

/**
 * Alias {@link $RefParser#schema} as {@link SwaggerParser#api}
 */
Object.defineProperty(SwaggerParser.prototype, 'api', {
  configurable: true,
  enumerable: true,
  get: function () {
    return this.schema;
  }
});

/**
 * Parses the given Swagger API.
 * This method does not resolve any JSON references.
 * It just reads a single file in JSON or YAML format, and parse it as a JavaScript object.
 *
 * @param {string|object} api - The file path or URL of the Swagger API. Or a Swagger object.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed
 * @param {function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
SwaggerParser.prototype.parse = function (api, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  options = new Options(options);
  var apiParam = api;

  return $RefParser.prototype.parse.call(this, api, options)
    .then(function (schema) {
      var supportedSwaggerVersions = ['2.0'];

      // Verify that the parsed object is a Swagger API
      if (schema.swagger === undefined || schema.info === undefined || schema.paths === undefined) {
        throw ono.syntax('%s is not a valid Swagger API definition', apiParam);
      }
      else if (typeof schema.swagger === 'number') {
        // This is a very common mistake, so give a helpful error message
        throw ono.syntax('Swagger version number must be a string (e.g. "2.0") not a number.');
      }
      else if (typeof schema.info.version === 'number') {
        // This is a very common mistake, so give a helpful error message
        throw ono.syntax('API version number must be a string (e.g. "1.0.0") not a number.');
      }
      else if (supportedSwaggerVersions.indexOf(schema.swagger) === -1) {
        throw ono.syntax(
          'Unsupported Swagger version: %d. Swagger Parser only supports version %s',
          schema.swagger, supportedSwaggerVersions.join(', '));
      }

      // Looks good!
      return maybe(callback, Promise.resolve(schema));
    })
    .catch(function (err) {
      return maybe(callback, Promise.reject(err));
    });
};

/**
 * Parses, dereferences, and validates the given Swagger API.
 * Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.
 *
 * @param {string|object} api - The file path or URL of the Swagger API. Or a Swagger object.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed, dereferenced, and validated
 * @param {function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
SwaggerParser.validate = function (api, options, callback) {
  var Class = this; // eslint-disable-line consistent-this
  return new Class().validate(api, options, callback);
};

/**
 * Parses, dereferences, and validates the given Swagger API.
 * Depending on the options, validation can include JSON Schema validation and/or Swagger Spec validation.
 *
 * @param {string|object} api - The file path or URL of the Swagger API. Or a Swagger object.
 * @param {ParserOptions} [options] - Options that determine how the API is parsed, dereferenced, and validated
 * @param {function} [callback] - An error-first callback. The second parameter is the parsed API object.
 * @returns {Promise} - The returned promise resolves with the parsed API object.
 */
SwaggerParser.prototype.validate = function (api, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = undefined;
  }

  options = new Options(options);
  var me = this;

  // ZSchema doesn't support circular objects, so don't dereference circular $refs yet
  // (see https://github.com/zaggino/z-schema/issues/137)
  var circular$RefOption = options.$refs.circular;
  options.validate.schema && (options.$refs.circular = 'ignore');

  return this.dereference(api, options)
    .then(function () {
      // Restore the original options, now that we're done dereferencing
      options.$refs.circular = circular$RefOption;

      if (options.validate.schema) {
        // Validate the API against the Swagger schema
        // NOTE: This is safe to do, because we haven't dereferenced circular $refs yet
        validateSchema(me.api);

        if (me.$refs.circular) {
          if (circular$RefOption === true) {
            // The API has circular references,
            // so we need to do a second-pass to fully-dereference it
            dereference(me, options);
          }
          else if (circular$RefOption === false) {
            // The API has circular references, and they're not allowed, so throw an error
            throw ono.reference('The API contains circular references');
          }
        }
      }

      if (options.validate.spec) {
        // Validate the API against the Swagger spec
        validateSpec(me.api);
      }

      return maybe(callback, Promise.resolve(me.schema));
    })
    .catch(function (err) {
      return maybe(callback, Promise.reject(err));
    });
};

/**
 * The Swagger object
 * https://github.com/swagger-api/swagger-spec/blob/master/versions/2.0.md#swagger-object
 *
 * @typedef {{swagger: string, info: {}, paths: {}}} SwaggerObject
 */

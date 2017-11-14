'use strict';

var util = require('./util'),
    ono = require('ono'),
    swaggerMethods = require('swagger-methods'),
    primitiveTypes = ['array', 'boolean', 'integer', 'number', 'string'],
    schemaTypes = ['array', 'boolean', 'integer', 'number', 'string', 'object', 'null', undefined];

module.exports = validateSpec;

/**
 * Validates parts of the Swagger 2.0 spec that aren't covered by the Swagger 2.0 JSON Schema.
 *
 * @param {SwaggerObject} api
 */
function validateSpec (api) {
  util.debug('Validating against the Swagger 2.0 spec');

  var paths = Object.keys(api.paths || {});
  paths.forEach(function (pathName) {
    var path = api.paths[pathName];
    var pathId = '/paths' + pathName;

    if (path && pathName.indexOf('/') === 0) {
      validatePath(api, path, pathId);
    }
  });

  util.debug('    Validated successfully');
}

/**
 * Validates the given path.
 *
 * @param {SwaggerObject} api      - The entire Swagger API object
 * @param {object}        path     - A Path object, from the Swagger API
 * @param {string}        pathId   - A value that uniquely identifies the path
 */
function validatePath (api, path, pathId) {
  swaggerMethods.forEach(function (operationName) {
    var operation = path[operationName];
    var operationId = pathId + '/' + operationName;

    if (operation) {
      validateParameters(api, path, pathId, operation, operationId);

      var responses = Object.keys(operation.responses || {});
      responses.forEach(function (responseName) {
        var response = operation.responses[responseName];
        var responseId = operationId + '/responses/' + responseName;
        validateResponse(responseName, response, responseId);
      });
    }
  });
}

/**
 * Validates the parameters for the given operation.
 *
 * @param {SwaggerObject} api           - The entire Swagger API object
 * @param {object}        path          - A Path object, from the Swagger API
 * @param {string}        pathId        - A value that uniquely identifies the path
 * @param {object}        operation     - An Operation object, from the Swagger API
 * @param {string}        operationId   - A value that uniquely identifies the operation
 */
function validateParameters (api, path, pathId, operation, operationId) {
  var pathParams = path.parameters || [];
  var operationParams = operation.parameters || [];

  // Check for duplicate path parameters
  try {
    checkForDuplicates(pathParams);
  }
  catch (e) {
    throw ono.syntax(e, 'Validation failed. %s has duplicate parameters', pathId);
  }

  // Check for duplicate operation parameters
  try {
    checkForDuplicates(operationParams);
  }
  catch (e) {
    throw ono.syntax(e, 'Validation failed. %s has duplicate parameters', operationId);
  }

  // Combine the path and operation parameters,
  // with the operation params taking precedence over the path params
  var params = pathParams.reduce(function (combinedParams, value) {
    var duplicate = combinedParams.some(function (param) {
      return param.in === value.in && param.name === value.name;
    });
    if (!duplicate) {
      combinedParams.push(value);
    }
    return combinedParams;
  }, operationParams.slice());

  validateBodyParameters(params, operationId);
  validatePathParameters(params, pathId, operationId);
  validateParameterTypes(params, api, operation, operationId);
}

/**
 * Validates body and formData parameters for the given operation.
 *
 * @param   {object[]}  params       -  An array of Parameter objects
 * @param   {string}    operationId  -  A value that uniquely identifies the operation
 */
function validateBodyParameters (params, operationId) {
  var bodyParams = params.filter(function (param) { return param.in === 'body'; });
  var formParams = params.filter(function (param) { return param.in === 'formData'; });

  // There can only be one "body" parameter
  if (bodyParams.length > 1) {
    throw ono.syntax(
      'Validation failed. %s has %d body parameters. Only one is allowed.',
      operationId, bodyParams.length
    );
  }
  else if (bodyParams.length > 0 && formParams.length > 0) {
    // "body" params and "formData" params are mutually exclusive
    throw ono.syntax(
      'Validation failed. %s has body parameters and formData parameters. Only one or the other is allowed.',
      operationId
    );
  }
}

/**
 * Validates path parameters for the given path.
 *
 * @param   {object[]}  params        - An array of Parameter objects
 * @param   {string}    pathId        - A value that uniquely identifies the path
 * @param   {string}    operationId   - A value that uniquely identifies the operation
 */
function validatePathParameters (params, pathId, operationId) {
  // Find all {placeholders} in the path string
  var placeholders = pathId.match(util.swaggerParamRegExp) || [];

  // Check for duplicates
  for (var i = 0; i < placeholders.length; i++) {
    for (var j = i + 1; j < placeholders.length; j++) {
      if (placeholders[i] === placeholders[j]) {
        throw ono.syntax(
          'Validation failed. %s has multiple path placeholders named %s', operationId, placeholders[i]);
      }
    }
  }

  params
    .filter(function (param) { return param.in === 'path'; })
    .forEach(function (param) {
      if (param.required !== true) {
        throw ono.syntax(
          'Validation failed. Path parameters cannot be optional. Set required=true for the "%s" parameter at %s',
          param.name,
          operationId
        );
      }
      var match = placeholders.indexOf('{' + param.name + '}');
      if (match === -1) {
        throw ono.syntax(
          'Validation failed. %s has a path parameter named "%s", ' +
          'but there is no corresponding {%s} in the path string',
          operationId,
          param.name,
          param.name
        );
      }
      placeholders.splice(match, 1);
    });

  if (placeholders.length > 0) {
    throw ono.syntax('Validation failed. %s is missing path parameter(s) for %s', operationId, placeholders);
  }
}

/**
 * Validates data types of parameters for the given operation.
 *
 * @param   {object[]}  params       -  An array of Parameter objects
 * @param   {object}    api          -  The entire Swagger API object
 * @param   {object}    operation    -  An Operation object, from the Swagger API
 * @param   {string}    operationId  -  A value that uniquely identifies the operation
 */
function validateParameterTypes (params, api, operation, operationId) {
  params.forEach(function (param) {
    var parameterId = operationId + '/parameters/' + param.name;
    var schema, validTypes;

    switch (param.in) {
      case 'body':
        schema = param.schema;
        validTypes = schemaTypes;
        break;
      case 'formData':
        schema = param;
        validTypes = primitiveTypes.concat('file');
        break;
      default:
        schema = param;
        validTypes = primitiveTypes;
    }

    validateSchema(schema, parameterId, validTypes);

    if (schema.type === 'file') {
      // "file" params require specific "consumes" types
      var consumes = operation.consumes || api.consumes || [];
      if (consumes.indexOf('multipart/form-data') === -1 &&
        consumes.indexOf('application/x-www-form-urlencoded') === -1) {
        throw ono.syntax(
          'Validation failed. %s has a file parameter, so it must consume multipart/form-data ' +
          'or application/x-www-form-urlencoded',
          operationId
        );
      }
    }
  });
}

/**
 * Checks the given parameter list for duplicates, and throws an error if found.
 *
 * @param   {object[]}  params  - An array of Parameter objects
 */
function checkForDuplicates (params) {
  for (var i = 0; i < params.length - 1; i++) {
    var outer = params[i];
    for (var j = i + 1; j < params.length; j++) {
      var inner = params[j];
      if (outer.name === inner.name && outer.in === inner.in) {
        throw ono.syntax('Validation failed. Found multiple %s parameters named "%s"', outer.in, outer.name);
      }
    }
  }
}

/**
 * Validates the given response object.
 *
 * @param   {string}    code        -  The HTTP response code (or "default")
 * @param   {object}    response    -  A Response object, from the Swagger API
 * @param   {string}    responseId  -  A value that uniquely identifies the response
 */
function validateResponse (code, response, responseId) {
  if (code !== 'default' && (code < 100 || code > 599)) {
    throw ono.syntax('Validation failed. %s has an invalid response code (%s)', responseId, code);
  }

  var headers = Object.keys(response.headers || {});
  headers.forEach(function (headerName) {
    var header = response.headers[headerName];
    var headerId = responseId + '/headers/' + headerName;
    validateSchema(header, headerId, primitiveTypes);
  });

  if (response.schema) {
    var validTypes = schemaTypes.concat('file');
    if (validTypes.indexOf(response.schema.type) === -1) {
      throw ono.syntax(
        'Validation failed. %s has an invalid response schema type (%s)', responseId, response.schema.type);
    }
  }
}

/**
 * Validates the given Swagger schema object.
 *
 * @param {object}    schema      - A Schema object, from the Swagger API
 * @param {string}    schemaId    - A value that uniquely identifies the schema object
 * @param {string[]}  validTypes  - An array of the allowed schema types
 */
function validateSchema (schema, schemaId, validTypes) {
  if (validTypes.indexOf(schema.type) === -1) {
    throw ono.syntax(
      'Validation failed. %s has an invalid type (%s)', schemaId, schema.type);
  }

  if (schema.type === 'array' && !schema.items) {
    throw ono.syntax('Validation failed. %s is an array, so it must include an "items" schema', schemaId);
  }
}

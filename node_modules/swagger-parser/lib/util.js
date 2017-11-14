'use strict';

var debug = require('debug'),
    util = require('util');

exports.format = util.format;
exports.inherits = util.inherits;

/**
 * Writes messages to stdout.
 * Log messages are suppressed by default, but can be enabled by setting the DEBUG variable.
 * @type {function}
 */
exports.debug = debug('swagger:parser');

/**
 * Regular Expression that matches Swagger path params.
 */
exports.swaggerParamRegExp = /\{([^/}]+)}/g;

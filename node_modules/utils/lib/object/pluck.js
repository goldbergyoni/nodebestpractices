'use strict';

var prop = require('./prop');
var map = require('./mapValues');

/**
 * Get the value of `key` from all properties in the given
 * `object`.
 *
 * @param  {Object} `object`
 * @param  {Object} `key`
 * @return {Object}
 * @api true
 */

module.exports = function pluck(obj, key) {
  return map(obj, prop(key));
};

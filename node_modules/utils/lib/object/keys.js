'use strict';

var forOwn = require('for-own');

/**
 * Return an array of keys for the given `obj`. Uses `Object.keys`
 * when available, otherwise falls back on `forOwn`.
 *
 * @name .keys
 * @param  {Object} `obj`
 * @return {Array} Array of keys.
 * @api public
 */

module.exports = Object.keys || function (obj) {
  var keys = [];
  forOwn(obj, function (val, key) {
    keys.push(key);
  });
  return keys;
};

'use strict';

var forOwn = require('./forOwn');
var iterator = require('make-iterator');

/**
 * Returns new object where each value is the result of
 * calling the a `callback` function.
 *
 * @param  {Object} obj The object to iterate over
 * @param  {Function} `cb` Callback function
 * @param  {Object} thisArg Invocation context of `cb`
 * @return {Object}
 * @api public
 */

module.exports = function mapValues(obj, cb, thisArg) {
  var fn = iterator(cb, thisArg);
  var res = {};

  forOwn(obj, function (val, key, orig) {
    res[key] = fn(val, key, orig);
  });

  return res;
};

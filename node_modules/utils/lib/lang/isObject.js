'use strict';

var typeOf = require('./typeOf');

/**
 * Return true if the given `value` is an object with keys.
 *
 * ```js
 * isObject(['a', 'b', 'c'])
 * //=> 'false'
 *
 * isObject({a: 'b'})
 * //=> 'true'
 * ```
 *
 * @name .isObject
 * @param  {Object} `value` The value to check.
 * @return {Boolean}
 * @api public
 */

module.exports = function isObject(val) {
  return typeOf(val) === 'object';
};

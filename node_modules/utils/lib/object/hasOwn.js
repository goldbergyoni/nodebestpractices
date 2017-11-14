'use strict';

/**
 * Return true if `key` is an own, enumerable property
 * of the given `obj`.
 *
 * ```js
 * hasOwn(obj, key);
 * ```
 *
 * @name .hasOwn
 * @param  {String} `key`
 * @param  {Object} `obj` Optionally pass an object to check.
 * @return {Boolean}
 * @api public
 */

module.exports = function hasOwn(o, key) {
  return {}.hasOwnProperty.call(o, key);
};

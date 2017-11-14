'use strict';

/**
 * Returns true if the given `value` is an array.
 *
 * ```js
 * isArray(1);
 * //=> 'false'
 *
 * isArray([1]);
 * //=> 'true'
 * ```
 *
 * @name .isArray
 * @param {Array} `value` Value to test.
 * @api public
 */

module.exports = function isArray(value) {
  return Array.isArray(value);
};

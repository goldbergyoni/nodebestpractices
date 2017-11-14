'use strict';

/**
 * Cast the give `value` to an array.
 *
 * ```js
 * arrayify('abc')
 * //=> ['abc']
 *
 * arrayify(['abc'])
 * //=> ['abc']
 * ```
 *
 * @name .arrayify
 * @param {*} `val`
 * @return {Array}
 * @api public
 */

module.exports = function arrayify(val) {
  return !Array.isArray(val) ? [val] : val;
};

'use strict';

/**
 * Returns all of the items in an array up to the specified number
 * Opposite of `<%= after() %`.
 *
 * ```js
 * before(['a', 'b', 'c'], 2)
 * //=> ['a', 'b']
 * ```
 *
 * @name .before
 * @param {Array} `array`
 * @param {Number} `n`
 * @return {Array} Array excluding items after the given number.
 * @crosslink after
 * @api public
 */

module.exports = function before(arr, n) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.before() expects an array.');
  }
  return arr ? arr.slice(0, -n) : null;
};

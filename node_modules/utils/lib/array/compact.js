'use strict';

/**
 * Remove all falsey values from an array.
 *
 * ```js
 * compact([null, a, undefined, 0, false, b, c, '']);
 * //=> [a, b, c]
 * ```
 *
 * @name .compact
 * @param {Array} `arr`
 * @return {Array}
 * @api public
 */

module.exports = function compact(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.compact() expects an array.');
  }
  return arr.filter(Boolean);
};

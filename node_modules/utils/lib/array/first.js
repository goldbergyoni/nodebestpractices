'use strict';

var isNumber = require('is-number');

/**
 * Returns the first item, or first `n` items of an array.
 *
 * ```js
 * first(['a', 'b', 'c', 'd', 'e'], 2)
 * //=> ['a', 'b']
 * ```
 *
 * @name .first
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting at `0`.
 * @return {Array}
 * @api public
 */

module.exports = function first(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.first() expects an array.');
  }

  var len = arr.length;
  if (len === 0) {
    return [];
  }

  if (!fn) return arr[0];

  if (isNumber(fn)) {
    return arr.slice(0, fn);
  }

  if (typeof fn === 'function') {
    var val, i = 0;

    while (len--) {
      val = arr[i++];
      if (fn(val, i, arr)) {
        return val;
      }
    }
  }
  return [];
};

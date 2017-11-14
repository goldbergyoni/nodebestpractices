'use strict';

var isNumber = require('is-number');

/**
 * Returns the last item, or last `n` items of an array.
 *
 * ```js
 * last(['a', 'b', 'c', 'd', 'e'], 2)
 * //=> ['d', 'e']
 * ```
 *
 * @name .last
 * @param {Array} `array`
 * @param {Number} `n` Number of items to return, starting with the last item.
 * @return {Array}
 * @api public
 */

module.exports = function last_(arr, fn) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.last() expects an array.');
  }

  var len = arr.length;
  if (len === 0) {
    return [];
  }

  if (!fn) return arr[arr.length - 1];

  if (isNumber(fn)) {
    return arr.slice(-fn);
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

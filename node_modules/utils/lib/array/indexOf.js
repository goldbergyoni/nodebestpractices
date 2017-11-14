'use strict';

/**
 * Fast array `.index()`.
 *
 * ```js
 * indexOf(['a', 'b'], 'b');
 * //=> 1
 *
 * indexOf(['a', 'b', 'a', 'b'], 'b', 2);
 * //=> 3
 * ```
 *
 * @name .indexOf
 * @param  {Array} `arr` Array to iterate over
 * @param  {String} `ele` The element to find.
 * @param  {Array} `start` Starting index.
 * @return {Number} Returns the index of `ele` or `-1`
 */

module.exports = function indexOf(arr, ele, start) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.indexOf() expects an array.');
  }

  if (typeof ele === 'undefined') return -1;
  start = start || 0;

  var len = arr.length;
  var i = start < 0
    ? len + start
    : start;

  while (i < len) {
    if (arr[i] === ele) {
      return i;
    }
    i++;
  }
  return -1;
};

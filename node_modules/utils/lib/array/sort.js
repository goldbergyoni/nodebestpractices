'use strict';

/**
 * Sort the given `array`. If an array of objects is passed,
 * you may optionally pass a `key` to sort on as the second
 * argument. You may alternatively pass a sorting function as
 * the second argument.
 *
 * ```js
 * sort(['b', 'a', 'c'])
 * //=> ['a', 'b', 'c']
 *
 * sort([{a: 'c'}, {a: 'a'}], 'a')
 * //=> [{a: 'a'}, {a: 'c'}]
 * ```
 *
 * @name .sort
 * @param {Array} `array` the array to sort.
 * @param {String|Function} `key` The object key to sort by, or sorting function.
 */

module.exports = function sort(arr, key) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.sort() expects an array.');
  }
  if (arr.length === 0) {
    return [];
  }
  if (typeof key === 'function') {
    return arr.sort(key);
  }
  if (typeof key !== 'string') {
    return arr.sort();
  }
  return arr.sort(function(a, b) {
    return a[key] > b[key];
  });
};

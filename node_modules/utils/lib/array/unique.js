'use strict';

var uniq = require('array-unique');

/**
 * Return an array free of duplicate values. Fastest ES5 implementation.
 *
 * ```js
 * unique(['a', 'b', 'c', 'c']);
 * //=> ['a', 'b', 'c']
 * ```
 *
 * @name .unique
 * @param  {Array} `array` The array to uniquify
 * @return {Array} With all unique values.
 * @api public
 */

module.exports = function unique_(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.unique() expects an array.');
  }
  return uniq.apply(uniq, arguments);
};

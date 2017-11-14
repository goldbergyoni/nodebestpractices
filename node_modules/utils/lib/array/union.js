'use strict';

var union = require('arr-union');

/**
 * Return an array free of duplicate values. Fastest ES5 implementation.
 *
 * ```js
 * union(['a', 'b', 'c', 'c']);
 * //=> ['a', 'b', 'c']
 * ```
 *
 * @name .union
 * @param  {Array} `array` The array to uniquify
 * @return {Array} With all union values.
 * @api public
 */

module.exports = function union_(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('utils#array.union() expects an array.');
  }
  return union.apply(union, arguments);
};

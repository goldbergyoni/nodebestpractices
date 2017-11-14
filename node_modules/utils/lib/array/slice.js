'use strict';

/**
 * Alternative to JavaScript's native array-slice method. Slices `array`
 * from the `start` index up to but not including the `end` index.
 *
 * ```js
 * var arr = ['a', 'b', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
 *
 * slice(arr, 3, 6);
 * //=> ['e', 'f', 'g']
 * ```
 *
 * @name .slice
 * @param {Array} `array` the array to slice.
 * @param {Number} `start` Optionally define the starting index.
 * @param {Number} `end` Optionally define the ending index.
 * @api public
 */

module.exports = require('array-slice');

'use strict';

/**
 * Returns a new array with the results of calling the given function
 * on every element in the array. This is a faster, node.js focused
 * alternative to JavaScript's native array map.
 *
 * ```js
 * map(['a', 'b', 'c'], function (ele) {
 *   return ele + ele;
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * map(['a', 'b', 'c'], function (ele, i) {
 *   return i + ele;
 * });
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .map
 * @param {Array} `array`
 * @param {Function} `fn`
 * @return {Array}
 * @api public
 */

module.exports = require('arr-map');

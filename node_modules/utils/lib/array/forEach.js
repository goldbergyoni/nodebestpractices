'use strict';

/**
 * Loop over each item in an array and call the given function on every element.
 *
 * ```js
 * forEach(['a', 'b', 'c'], function (ele) {
 *   return ele + ele;
 * });
 * //=> ['aa', 'bb', 'cc']
 *
 * forEach(['a', 'b', 'c'], function (ele, i) {
 *   return i + ele;
 * });
 * //=> ['0a', '1b', '2c']
 * ```
 *
 * @name .forEach
 * @alias .each
 * @param {Array} `array`
 * @param {Function} `fn`
 * @param {Object} `thisArg` Optionally pass a `thisArg` to be used as the context in which to call the function.
 * @return {Array}
 * @api public
 */

module.exports = require('./each');

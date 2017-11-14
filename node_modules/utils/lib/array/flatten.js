'use strict';

/**
 * Recursively flatten an array or arrays. Uses the fastest
 * implementation of array flatten for node.js
 *
 * ```js
 * flatten(['a', ['b', ['c']], 'd', ['e']]);
 * //=> ['a', 'b', 'c', 'd', 'e']
 * ```
 *
 * @name .flatten
 * @param {Array} `array`
 * @return {Array} Flattened array
 * @api public
 */

module.exports = require('arr-flatten');

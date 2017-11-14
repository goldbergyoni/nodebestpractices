'use strict';

/**
 * Returns true if any value exists, false if empty. Works for booleans,
 * functions, numbers, strings, nulls, objects and arrays.
 *
 * ```js
 * hasValues('a');
 * //=> true
 *
 * hasValues('');
 * //=> false
 *
 * hasValues(1);
 * //=> true
 *
 * hasValues({a: 'a'}});
 * //=> true
 *
 * hasValues({}});
 * //=> false
 *
 * hasValues(['a']);
 * //=> true
 * ```
 *
 * @name .hasValues
 * @param  {Object} `object` The object to check for `value`
 * @param {*} `value` the value to look for
 * @return {Boolean} True if any values exists.
 * @api public
 */

module.exports = require('has-values');

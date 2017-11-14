'use strict';

var hasValues = require('has-values');

/**
 * Returns true if the given value is empty, false if any value exists. Works for booleans,
 * functions, numbers, strings, nulls, objects and arrays.
 *
 * ```js
 * isEmpty('a');
 * //=> false
 *
 * isEmpty('');
 * //=> true
 *
 * isEmpty(1);
 * //=> false
 *
 * isEmpty({a: 'a'});
 * //=> false
 *
 * isEmpty({});
 * //=> true
 *
 * isEmpty(['a']);
 * //=> false
 * ```
 *
 * @name .isEmpty
 * @crosslink hasValues
 * @param  {Object} `object` The object to check for `value`
 * @param {*} `value` the value to look for
 * @return {Boolean} False if any values exists.
 * @api public
 */

module.exports = function isEmpty(val) {
  return !hasValues(val);
};

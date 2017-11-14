'use strict';

var isString = require('./isString');
var chop = require('./chop');

/**
 * Replace spaces in a string with hyphens. This
 *
 * ```js
 * hyphenate("a b c");
 * //=> 'a-b-c'
 * ```
 *
 * @name .hyphenate
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

module.exports = function hyphenate(str) {
  if (!isString(str)) return '';
  return chop(str).split(' ').join('-');
};


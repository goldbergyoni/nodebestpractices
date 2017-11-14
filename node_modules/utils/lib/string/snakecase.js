'use strict';

var isString = require('./isString');
var chop = require('./chop');

/**
 * snake_case the characters in `string`.
 *
 * ```js
 * snakecase("a-b-c d_e");
 * //=> 'a_b_c_d_e'
 * ```
 *
 * @name .snakecase
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

module.exports = function snakecase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return chop(str).replace(re, function (_, ch) {
    return '_' + ch;
  });
};


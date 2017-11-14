'use strict';

var isString = require('./isString');
var chop = require('./chop');

/**
 * path/case the characters in `string`.
 *
 * ```js
 * pathcase("a-b-c d_e");
 * //=> 'a/b/c/d/e'
 * ```
 *
 * @name .pathcase
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

module.exports = function pathcase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[_.-\W\s]+(\w|$)/g;
  return chop(str).replace(re, function (_, ch) {
    return '/' + ch;
  });
};


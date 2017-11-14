'use strict';

var isString = require('./isString');
var camelcase = require('./camelcase');

/**
 * PascalCase the characters in `string`.
 *
 * ```js
 * pascalcase("foo bar baz");
 * //=> 'FooBarBaz'
 * ```
 *
 * @name .pascalcase
 * @param  {String} `string`
 * @return {String}
 * @api public
 */

module.exports = function pascalcase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toUpperCase(); }
  str = camelcase(str);
  return str[0].toUpperCase() + str.slice(1);
};


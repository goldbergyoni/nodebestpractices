'use strict';

var isString = require('./isString');
var chop = require('./chop');

/**
 * camelCase the characters in `string`.
 *
 * ```js
 * camelcase("foo bar baz");
 * //=> 'fooBarBaz'
 * ```
 *
 * @name .camelcase
 * @param  {String} `string` The string to camelcase.
 * @return {String}
 * @api public
 */

module.exports = function camelcase(str) {
  if (!isString(str)) return '';
  if (str.length === 1) {return str.toLowerCase(); }
  var re = /[-_.\W\s]+(\w|$)/g;
  return chop(str).replace(re, function (_, ch) {
    return ch.toUpperCase();
  });
};


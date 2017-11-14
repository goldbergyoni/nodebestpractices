'use strict';

var isPlainObject = require('../lang/isPlainObject');
var hasOwn = require('./hasOwn');

/**
 * Expose `merge`
 */

module.exports = merge;

/**
 * Recursively combine the properties of `o` with the
 * properties of other `objects`.
 *
 * @name .merge
 * @param  {Object} `o` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

function merge(o) {
  if (!isPlainObject(o)) { return {}; }
  var args = arguments;
  var len = args.length - 1;

  for (var i = 0; i < len; i++) {
    var obj = args[i + 1];

    if (isPlainObject(obj)) {
      for (var key in obj) {
        if (hasOwn(obj, key)) {
          if (isPlainObject(obj[key])) {
            o[key] = merge(o[key], obj[key]);
          } else {
            o[key] = obj[key];
          }
        }
      }
    }
  }
  return o;
}

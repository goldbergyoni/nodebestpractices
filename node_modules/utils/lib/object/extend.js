'use strict';

var hasOwn = require('./hasOwn');
var isPlainObject = require('../lang/isPlainObject');

/**
 * Extend `o` with properties of other `objects`.
 *
 * @name .extend
 * @param  {Object} `o` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

module.exports = function extend(o) {
  if (!isPlainObject(o)) { return {}; }
  var args = arguments;
  var len = args.length - 1;

  for (var i = 0; i < len; i++) {
    var obj = args[i + 1];

    if (isPlainObject(obj)) {
      for (var key in obj) {
        if (hasOwn(obj, key)) {
          o[key] = obj[key];
        }
      }
    }
  }
  return o;
};

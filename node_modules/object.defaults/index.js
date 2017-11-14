/*!
 * object.defaults <https://github.com/jonschlinkert/object.defaults>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var each = require('array-each');
var slice = require('array-slice');
var forOwn = require('for-own');
var isObject = require('isobject');

/**
 * Extend `object` with properties of other `objects`
 *
 * @name .defaults
 * @param  {Object} `object` The target object. Pass an empty object to shallow clone.
 * @param  {Object} `objects`
 * @return {Object}
 * @api public
 */

module.exports = function defaults(o, objects) {
  if (o == null) return {};

  each(slice(arguments, 1), function (obj) {
    if (isObject(obj)) {
      forOwn(obj, function (val, key) {
        if (o[key] == null) {
          o[key] = val;
        }
      });
    }
  });
  return o;
};
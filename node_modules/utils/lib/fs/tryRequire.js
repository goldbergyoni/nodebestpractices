'use strict';

var path = require('path');

/**
 * Try to require the given file, returning `null` if not successful
 * instead of throwing an error.
 *
 * @name .tryRequire
 * @param  {String} `fp` File path of the file to require
 * @return {*} Returns the module function/object, or `null` if not found.
 * @api public
 */

module.exports = function tryRequire(fp) {
  try {
    return require(path.resolve(fp));
  } catch (err) {}
  return null;
};

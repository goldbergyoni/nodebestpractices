'use strict';

var fs = require('fs');

/**
 * Try to read the given `filepath`, fail silently and return `null`
 * when a file doesn't exist. Slightly faster than using `fs.existsSync`.
 *
 * @name .tryRead
 * @param  {String} `fp` Path of the file to read.
 * @return {String|Null} the `utf8` contents string, or `null` if an error is thrown.
 * @api public
 */

module.exports = function tryRead(fp) {
  try {
    return fs.readFileSync(fp, 'utf8');
  } catch (err) {}
  return null;
};

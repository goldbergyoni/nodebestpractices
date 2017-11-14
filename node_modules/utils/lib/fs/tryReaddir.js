'use strict';

var fs = require('fs');

/**
 * Try to read the given `directory`. Wraps `fs.readdirSync()` with
 * a try/catch, so it fails silently instead of throwing when the
 * directory doesn't exist.
 *
 * @name .tryReaddir
 * @param  {String} `dir` Starting directory
 * @return {Array} Array of files.
 * @api public
 */

module.exports = function tryReaddir(dir) {
  try {
    return fs.readdirSync(dir);
  } catch (err) {}
  return [];
};

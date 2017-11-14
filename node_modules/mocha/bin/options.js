'use strict';

/**
 * Dependencies.
 */

var fs = require('fs');

/**
 * Export `getOptions`.
 */

module.exports = getOptions;

/**
 * Get options.
 */

function getOptions () {
  var optsPath = process.argv.indexOf('--opts') === -1
    ? 'test/mocha.opts'
    : process.argv[process.argv.indexOf('--opts') + 1];

  try {
    var opts = fs.readFileSync(optsPath, 'utf8')
      .replace(/\\\s/g, '%20')
      .split(/\s/)
      .filter(Boolean)
      .map(function (value) {
        return value.replace(/%20/g, ' ');
      });

    process.argv = process.argv
      .slice(0, 2)
      .concat(opts.concat(process.argv.slice(2)));
  } catch (err) {
    // ignore
  }

  process.env.LOADED_MOCHA_OPTS = true;
}

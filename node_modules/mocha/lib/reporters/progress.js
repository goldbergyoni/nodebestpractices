'use strict';

/**
 * Module dependencies.
 */

var Base = require('./base');
var inherits = require('../utils').inherits;
var color = Base.color;
var cursor = Base.cursor;

/**
 * Expose `Progress`.
 */

exports = module.exports = Progress;

/**
 * General progress bar color.
 */

Base.colors.progress = 90;

/**
 * Initialize a new `Progress` bar test reporter.
 *
 * @api public
 * @param {Runner} runner
 * @param {Object} options
 */
function Progress (runner, options) {
  Base.call(this, runner);

  var self = this;
  var width = Base.window.width * 0.50 | 0;
  var total = runner.total;
  var complete = 0;
  var lastN = -1;

  // default chars
  options = options || {};
  options.open = options.open || '[';
  options.complete = options.complete || '▬';
  options.incomplete = options.incomplete || Base.symbols.dot;
  options.close = options.close || ']';
  options.verbose = false;

  // tests started
  runner.on('start', function () {
    console.log();
    cursor.hide();
  });

  // tests complete
  runner.on('test end', function () {
    complete++;

    var percent = complete / total;
    var n = width * percent | 0;
    var i = width - n;

    if (n === lastN && !options.verbose) {
      // Don't re-render the line if it hasn't changed
      return;
    }
    lastN = n;

    cursor.CR();
    process.stdout.write('\u001b[J');
    process.stdout.write(color('progress', '  ' + options.open));
    process.stdout.write(Array(n).join(options.complete));
    process.stdout.write(Array(i).join(options.incomplete));
    process.stdout.write(color('progress', options.close));
    if (options.verbose) {
      process.stdout.write(color('progress', ' ' + complete + ' of ' + total));
    }
  });

  // tests are complete, output some stats
  // and the failures if any
  runner.on('end', function () {
    cursor.show();
    console.log();
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(Progress, Base);

'use strict';

// [Issue 16][gh]: Support for JSHint style globals
// -----------------------------------------------------------------------------
//
// This issue is resolved by upgrading to jshint version 1.1. There was a bug
// that required that there by no space in the global comment:
//
//     /*global $ */
//
// In their [1.0.0 RC1][jshint], they've patched this problem. This test should catch any
// regression to this behavior.

// [gh]: https://github.com/es-analysis/plato/issues/16
// [jshint]: http://www.jshint.com/blog/2012-12-29/1-0-0-rc1/

var fs = require('fs-extra'),
    linter = require('../../lib/reporters/jshint');

exports['issue_16'] = {
  setUp: function(done) {
    done();
  },

  'Respect global comment': function(test) {

    var file = "test/fixtures/issue_16.js",
        source = fs.readFileSync(file).toString().trim(),
        config = {},
        globals = [],
        report = linter.process(source, config, globals);

    test.equal(report.messages.length, 0, "Report returned with messages");
    test.done();
  }
};

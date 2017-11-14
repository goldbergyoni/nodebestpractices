'use strict';

var fs = require('fs');

var util = require('../lib/util');

var path = require('path');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['util'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'common prefix': function(test) {
    // Store value of current path separator (environment-specific)
    var sep = path.sep;

    test.expect(6);

    // Explicitly set path for OSX/*nix environment path prefixing
    path.sep = '/';

    var files = [
      '/lib/foo/bar/a.js',
      '/lib/foo/bar/baz/b.js',
      '/lib/foo/bar/qux/c.js',
    ];

    test.equal(util.findCommonBase(files), '/lib/foo/bar/', 'should find common prefix');

    files = [
      'single/file/foo.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should not find common prefix for one file');

    files = [
      'single/file/foo.js',
      'no/common/prefix.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should not find a prefix for files with no prefix');

    files = [
      '/lib/foo/bar.js',
      '/lib/foo/baz.js'
    ];
    test.equal(util.findCommonBase(files), '/lib/foo/', 'should only find common directory prefix');

    files = [
      'bar.js',
      'baz.js'
    ];
    test.equal(util.findCommonBase(files), '', 'should not find a prefix for files in the current directory');

    // Explicitly set path for Windows environment path prefixing
    path.sep = '\\';

    files = [
      'C:\\lib\\foo\\bar.js',
      'C:\\lib\\foo\\baz.js'
    ];
    test.equal(util.findCommonBase(files), 'C:\\lib\\foo\\', 'should only find common directory prefix with proper Windows backslash separator');

    // Explicitly set path back to original separator (environment-specific)
    path.sep = sep;

    test.done();
  },
  'strip comments': function(test) {
    test.expect(1);

    var source = fs.readFileSync('test/fixtures/.jshintrc').toString();
    test.doesNotThrow(function(){JSON.parse(util.stripComments(source));}, "Comments should be stripped and JSON parsable");

    test.done();
  },
  'escape HTML': function(test) {
      test.expect(1);

      test.equal(util.escapeHTML('<div>"test&\'</div>'), '&lt;div&gt;&quot;test&amp;&#039;&lt;/div&gt;', 'should convert HTML tags into HTML special characters');

      test.done();
  }
};

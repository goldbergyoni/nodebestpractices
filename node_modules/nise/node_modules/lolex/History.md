1.5.1 / 2016-07-26
==================

  * Fix setInterval() behavior with string times
  * Incorporate test from PR #65
  * Fix issue #59: context object required 'process'
  * fixed a case where runAll was called and there are no timers (#70)
  * Correct the clear{Interval|Timeout|Immediate} error message when calling `set*` for a different type of timer.
  * Lots of minor changes to tooling and the build process

v1.5.0 / 2016-05-18
===================

  * 1.5.0
  * Check for existence of `process` before using it
  * Run to last existing timer
  * Add runAll method to run timers until empty
  * Turn off Sauce Labs tests for pull requests
  * Add tests demonstrating that a fake Date could be created with one argument as a String since this string is in a format recognized by the Date.parse() method.
  * Run test-cloud on Travis
  * Add process.hrtime()
  * Add bithound badge to Readme.md
  * Make Travis also run tests in node 4.2
  * Update jslint, referee, sinon, browserify, mocha, mochify
  * Rename src/lolex.js to src/lolex-src.js to avoid bithound ignoring it
  * Add .bithoundrc

v1.4.0 / 2015-12-11
===================

  * 1.4.0
  * Remove BASH syntax in lint script
  * correct test descriptions to match the tests
  * correct parseTime() error message so it matches behavior
  * don't run test-cloud as part of npm test
  * doc: full API reference
  * doc: update 'Running tests' section
  * doc: update 'Faking the native timers' section
  * doc: remove requestAnimationFrame
  * Implement clock.next()
  * Run lint in CI
  * Fix jslint errors

v1.3.2 / 2015-09-22
===================

  * 1.3.2
  * Fix for breaking shimmed setImmediate

v1.3.1 / 2015-08-20
===================

  * Remove error whos reason is no longer accurate

v1.3.0 / 2015-08-19
===================

  * 1.3.0
  * Throw exception on wrong use of clearXYZ()
  * Fix for Sinon.JS issue #808  :add setSystemTime() function
  * Fix for Sinon.JS issue #766: clearTimeout() no longer clears Immediate/Interval and vice versa
  * Update Readme.md to point to LICENSE file
  * Fix error in readme about running tests
  * Fix for warning about SPDX license format on npm install

v1.2.2 / 2015-07-22
===================

  * 1.2.2
  * Fixing lint mistake
  * Update travis to use node@0.12
  * Fix complaint about missing fake setImmediate
  * Use license in package.json

v1.2.1 / 2015-01-06
===================

  * New build
  * Dodge JSLint...
  * Up version
  * Proper fix for writable globals in IE
  * Make timers writable in old IEs

v1.2.0 / 2014-12-12
===================

  * 1.2.0
  * Fix Sinon.JS issue 624
  * Lint the test files also
  * Add .jslintrc
  * Delay setImmediate if it is during tick call
  * Add test case
  * Test behaviour of hasOwnProperty beforehand
  * Compare now() with delta
  * Use undefined for defined predicate
  * Put setImmediate in toFake list
  * Capture clock instance for uninstall
  * Restore commented out tests
  * Add JSLint verification to test
  * Configure Travis to run tests in node 0.10.x
  * Add .editorconfig
  * Fail when faking Date but not setTimeout/setInterval

v1.1.10 / 2014-11-14
====================

  * 1.1.0 Fixes setImmediate problems
  * Rely on `timer` initialization to null
  * Timer assembly occurs at addTimer callsites
  * Sort immediate timers before non-immediate
  * Add createdAt to timers
  * Sort timers by multiple criteria, not just callAt
  * Refactor firstTimerInRange
  * Rename `timeouts` property to `timers`
  * addTimer is options-driven

v1.0.0 / 2014-11-12
===================

  * Add built file for browsers
  * Fix URL
  * Don't run tests that require global.__proto__ on IE 9 and IE 10
  * Add "bundle" script to create standalone UMD bundle with browserify
  * Float with new test framework versions
  * Remove redundant module prefix
  * Let Browserify set "global" for us
  * Change test framework from Buster to Mocha and Mochify
  * Make timer functions independent on `this`
  * Change APIs according to Readme
  * Change clock-creating interface
  * Change Github paths
  * Basically working extraction from Sinon.JS

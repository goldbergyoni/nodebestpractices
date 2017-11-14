
4.2.0 / 2017-11-07
==================

  * Update Lolex to include fix for #872
  * Remove deprecated methods from documentation (#1613)

4.1.1 / 2017-11-03
==================

  * Remove "engines" from package.json

4.1.0 / 2017-11-02
==================

  * Add sandbox.createStubInstance (#1598)

4.0.2 / 2017-10-25
==================

  * Update 'nise' to latest version (#1593)
  * Use supports-color module to test if system supports colors
  * Upgrade mocha to v4.0.0
  * Make samsam a development dependency
  * Make native-promise-only a development dependency

4.0.1 / 2017-10-04
==================

  * Upgrade nise and lolex versions (#1579)

4.0.0 / 2017-09-26
==================

  * Explicitly update fake xhr lib 'nise'
  * Remove accidental dependency to "build"
  * Remove support for stubbing undefined props (#1557)

3.3.0 / 2017-09-18
==================

  * Adds sinon.match.hasNested
  * fix 'callThrough with a mock expectation' (#1442)
  * Documentation updates
  * Allow custom defined instance checks if supported

3.2.1 / 2017-08-17
==================

  * resolvesThis should override previous throws
  * preserve context of functions from nise: fakeServer, fakeServerWithClock
  * Fix regression for issue #1526 regarding onFirstCall().throws()
  * Fix docs regression introduced by #1523

3.2.0 / 2017-08-10
==================

  * Fix #1521 by caching references to Array.prototype.filter (#1523)
  * Fix #1368 by adding stub#resolvesThis (#1517)

3.1.0 / 2017-08-08
==================

  * Lots of documentation updates
  * Fix regression on sandbox.stub(obj,protoMethod)
  * Add factory functions for sandbox and fake server
  * Add support for passing a function to stub.throws(...). (#1511)

3.0.0 / 2017-08-03
==================

  * Remove deprecated exports (see migration guide)
  * Fix #1432: add details around expectations.withArgs behavior to docs (#1501)
  * Fix #1487: incorrect withArgs().returnValue
  * add format.setFormatter
  * Upgrade lolex to 2.1.2
  * Extract fakeXhr, fakeServer and fakeServerWithClock into own module `nise` and re-import it to keep api the same

2.4.1 / 2017-07-26
==================

  * stub#withArgs: set promiseLibrary correctly (#1497)

2.4.0 / 2017-07-26
==================

  * Allow anonymous mock functions to be named

2.3.8 / 2017-07-13
==================

  * Fix 1474: propagates promiseLibrary to new stub behaviors (#1484)

2.3.7 / 2017-07-10
==================

  * Fix #1476: spy.withArgs(args...).firstCall is broken

2.3.6 / 2017-06-28
==================

  * Fix #1274: spy.withArgs(args...).callCount is incorrect

2.3.5 / 2017-06-20
==================

  * Check configurable on a prop before creating (fixes #1456) (#1462)

2.3.4 / 2017-06-10
==================

  * Fix #1372: make sandbox.resetHistory also reset spies (#1424)

2.3.3 / 2017-06-10
==================

  * Fix #1445: make stubbing of static function properties possible

2.3.2 / 2017-05-26
==================

  * Fix failing sandbox.resetBehavior() (#1428)
  * Fix restoring getters/setters/values for previously unexisting props (#1419)
  * Called in order takes callCount into account. Closes #1398.

2.3.1 / 2017-05-23
==================

  * Make calledAfter symetric with calledBefore (#1407)

2.3.0 / 2017-05-22
==================

  * Allow stubbing of accessors with and without sandbox (#1416)
  * add throwsArg(index) to stubs (#1319)
  * Fix: forEach() requires 'this' argument (#1356)
  * Only reset history when calling resetHistory()

2.2.0 / 2017-05-02
==================

  * Added `usingPromise` method to stub and sandbox.
  * Added support for React Native window location format Fixes sinonjs/sinon#1362
  * Fix error on call.toString() where stack has fewer than 4 lines.

2.1.0 / 2017-03-20
==================

  * Redesign the template (#1339)
  * [feature] adds spy.calledImmediatelyBefore and spy.calledImmediatelyAfter
  * Fix issue #1332: little bug correction in spy.printf "%*" formatter.

2.0.0 / 2017-03-15
==================

  * Add restore method for stubbed property descriptors
  * Allow stubbing getters and setters for function properties
  * Add getters/setters stub behaviors
  * Refactor xhr and xhr.upload to use the same EventTargetHandler
  * Remove SSL part of base url

v2.0.0-pre.6 / 2017-02-27
=========================

  * Add sinon.addBehavior, use it to add the default behaviors
  * Use Node instead of Ruby in the build script
  * Lots of documentation updates
  * Many dependency updates
  * Add a simple implementation og ANSI colors and boot out chalk
  * No circular dependencies, thank you very much
  * Replace homegrowns with ES5
  * Remove legacy IE bits from code
  * Fire onload event on non-2xx HTTP statuses in FakeXDomainRequest
  * Extract throwOnFalsyObject to own function
  * Stop polluting the test console with a "test" string
  * Complete internalization of `extend` and `typeOf`
  * Allow calling original function from stub. Closes #989 (#1234)
  * Matcher for Set type
  * Matcher for Map type
  * Fix set iterableToString test on IE11
  * add test-dev npm script to run tests in watch mode

v2.0.0-pre.5 / 2016-12-31
=========================

  * 2.0.0-pre.5
  * Update Changelog.txt and AUTHORS for new release
  * Update changelog for pre.4
  * Remove polyfill for Promise
  * Remove old, unused, ci script for BusterJS
  * Abort pre-commit script when no files are changed
  * Check for required arguments
  * Make SED in-place update switch work on BSD
  * Upgrade text-encoding to the latest version
  * Improve rendering of sandbox.create(config) example
  * Remove sinon.test from sandbox documentation
  * Use baseurl to render links correctly on github pages
  * Specify same version of github-pages as github
  * Remove release_id from front matter
  * Update Gemfile.lock to use latest supported Jekyll
  * Fix #614: Add missing documentation for sandbox methods
  * Add missing documentation for stubs
  * Fix #1026: stub watch method on object
  * Fix invalid test for "does not walk the same property twice"
  * Add test for issue #1026
  * Fix 810 - Added documentation for sinon.restore()
  * Add docs for new array matchers
  * Array contains matcher fails when actual is not an array
  * Array endsWith matcher fails when actual is not an array
  * Array startsWith matcher fails when actual is not an array
  * Array deepEquals matcher fails when actual is not an array
  * Add .resolves and .rejects to stub (#1211)
  * Accept routing DSLs on fake server
  * Convert remaining calledWith methods to use diff color formatting
  * Color diffs for sinon matchers
  * Print diffs for multiple spy calls
  * Add new spy output formatter for handling diffs
  * Add contains array matcher
  * Add endsWith array matcher
  * Add startsWith array matcher
  * Add deepEquals array matcher
  * Add more array matchers
  * Extract deprecated.printWarning
  * Move empty stub creation to avoid unnecessary stub.create
  * Fix typo on property name called 'matchingAguments'
  * Soften migration path with deprecation warning
  * Update docs and migration guide
  * Convert 3 arg stub to callsFake
  * Update format docs to refer to formatio
  * Fix being able to spy Error
  * Prepare documentation using site in GitHub Pages
  * Add link to LICENSE in README.md
  * Add documentation for accessor method support for stubs and spies
  * Previous expectation failures are checked and re-thrown again in mock.verify()
  * Expose XHR.setStatus to simplify asynchronous answers
  * Fix typo
  * Add a how-to article about using links seams for CommonJS modules
  * stub() will fail if passed an empty property descriptor
  * Rename func argument to funcOrDescriptor
  * Add documentation for sinon.assert.match
  * XHR: test for readystatechange not dispatching after .abort() in DONE state
  * XHR: fix readystatechange event after .abort() in DONE state
  * Add tests for xhr.readyState after abort()
  * Test that demonstrates that a mock can be called more times than expected without failing (if the exception is silenced).

n.n.n / 2017-02-27
==================



v2.0.0-pre.6 / 2017-02-27
=========================

  * Merge pull request #1303 from dougo/docs-fixups
    Docs fixups
  * Merge pull request #1302 from sinonjs/add-behavior
    addBehavior
  * Merge pull request #1300 from Gvozd/optimize_performance
    Optimize performance of call-stack getting
  * Merge pull request #1301 from fatso83/1299-redirect-traffic-to-releases
    Redirect /docs and /downloads to /releases
  * Merge pull request #1296 from sinonjs/remove-deal-links
    Remove dead links
  * Merge pull request #1295 from mroderick/add-bithound-config
    Add .bithoundrc
  * Merge branch 'bouk-server-aint-xhr'

  * Merge pull request #1293 from mroderick/update-v1-docs-with-bundler-warnings
    Update 1.x documentation to say that it doesn't work with
    bundlers
  * Merge pull request #1294 from sinonjs/browserify-build
    Use Node instead of Ruby in the build script
  * Merge pull request #1292 from mroderick/update-readme
    Update readme
  * Merge pull request #1291 from mroderick/update-phantomjs
    Use phantomjs-prebuilt
  * Merge pull request #1289 from mroderick/fix-invalid-release-version-in-docs
    Fix invalid release number in v1.17.7.md front matter
  * Merge pull request #1290 from sinonjs/common-eslint
    Use common Sinon.JS eslint config
  * Merge pull request #1288 from mroderick/improve-documentation
    Improve documentation
  * Merge pull request #1283 from lucasfcosta/docs-stub-callThrough
    Add docs for stub.callThrough()
  * Merge pull request #1285 from sinonjs/uncycle-server-deps
    Uncycle server deps
  * Merge pull request #1282 from sinonjs/mochify-3
    Use mocaccino 2 and mochify 3
  * Merge pull request #1281 from mroderick/add-missing-documentation
    Add missing documentation
  * Merge pull request #1277 from mroderick/remove-copyright-comments
    Remove copyright comments
  * Merge pull request #1271 from mroderick/use-es5-features
    Refactoring: use ES5.1 features
  * Merge pull request #1273 from melinath/patch-1
    Update text-encoding version
  * Merge pull request #1255 from fatso83/remove-legacy-ie
    Remove traces of legacy IE
  * Merge pull request #1266 from duclet/chalk
    Switch to using "chalk" from "colors"
  * Merge pull request #1260 from JoshuaCWebDeveloper/ajax_events
    Fire onload event on non-2xx HTTP statuses in
    FakeXDomainRequest - fixes #1259
  * Merge pull request #1257 from piamancini/patch-1
    Add backers and sponsors from Open Collective
  * Merge pull request #1256 from sprzybylski/download-page
    Create downloads page (#1218)
  * Merge pull request #1252 from mroderick/update-bundle-for-ruby-2.4.0
    Update Gemfile for ruby 2.4.0
  * Merge pull request #1254 from mroderick/refute-issue-1245-in-sinon-2
    Add test to disprove issue 1245 in Sinon 2.x
  * Merge pull request #1253 from BenBrostoff/error-equality
    Add error equality to deepEqual
  * Merge pull request #1243 from sprzybylski/changelog-page
    Update changelog page in postversion.sh
  * Merge pull request #1239 from mroderick/refactor-stub-method
    Refactor stub methods
  * Merge pull request #1242 from Floby/add-documentation-for-promise-stub
    Add documentation for .rejects() and .resolves()
  * Merge pull request #1241 from mroderick/cleanup-test-console
    Stop polluting the test console with a "test" string
  * Merge pull request #1238 from tarjei/patch-1
    Document server.requests
  * Merge pull request #1235 from jonnyreeves/feature/internalize
    Internalise `typeOf` and `extends`
  * Merge pull request #1233 from lucasfcosta/fix-deepEqual-for-matchers
    Ensures different matchers won't be called against each
    other. Closes…
  * Merge pull request #1232 from lucasfcosta/sets-matchers
    Sets matchers
  * Merge pull request #1227 from zuzusik/zuzusik-always_chain_behavior_with_stub
    Always chain behavior with stub
  * Merge pull request #1215 from lucasfcosta/maps-matchers
    Maps matchers
  * Merge pull request #1226 from lucasfcosta/improve-site-readability
    Improve site readability
  * Merge pull request #1225 from lucasfcosta/resolve-reject-promise-upon-invoke
    Resolve/reject promise only upon invoke

v2.0.0-pre.5 / 2016-12-31
=========================

  * Merge pull request #1223 from fatso83/release-script-improvements
    Minor fixes to the release scripts
  * Merge pull request #1222 from Gothdo/patch-1
    Upgrade text-encoding to the latest version
  * Merge pull request #1216 from mroderick/improve-documentation
    Improve documentation for stubs and sandboxes
  * Merge pull request #1217 from mroderick/make-docs-run-on-github-pages
    Update Gemfile.lock to use latest supported Jekyll
  * Merge pull request #1213 from tiemevanveen/docs-restore
    Added documentation for sinon.restore()
  * Merge pull request #1214 from mroderick/fix-1026-in-2.x
    Fix 1026 in 2.x
  * Merge pull request #1210 from lucasfcosta/document-new-array-matchers
    Add docs for new array matchers
  * Merge pull request #1203 from jdgreenberger/add-expectation-diff-logs
    Add expectation diff logs
  * Merge pull request #1208 from lucasfcosta/array-matchers
    Array matchers
  * Merge pull request #1209 from lucasfcosta/avoid-unnecessary-empty-stub-creation
    Avoid unnecessary empty stub creation
  * Merge pull request #1207 from hurrymaplelad/calls-fake
    Replace `stub(o, 'm', fn)` with `stub(o, 'm').callsFake(fn)`
  * Merge pull request #1162 from dottedmag/master
    XHR spec conformance: abort() should not dispatch
    readystatechange event in DONE state
  * Merge pull request #1184 from mroderick/fail-on-empty-property-descriptor
    Fail on empty property descriptor
  * Merge pull request #1206 from fatso83/sinon-format-docs
    Update format docs to refer to formatio
  * Merge pull request #1204 from estobbart/master
    Fix being able to spy Error
  * Merge pull request #1189 from mroderick/docs-in-github-pages
    Prepare documentation using site in GitHub Pages
  * Merge pull request #1180 from mroderick/add-documentation-for-assert.match
    Add documentation for sinon.assert.match
  * Merge pull request #1182 from mroderick/document-accessor-support
    Add documentation for accessor method support for stubs and
    spies
  * Merge pull request #1191 from LostArchives/master
    Add link to LICENSE in README.md
  * Merge pull request #1188 from DanReyLop/verify-silenced-exceptions
    Mock expectation errors are now re-thrown when calling
    mock.verify()
  * Merge pull request #1186 from mroderick/add-how-to-link-seam-commonjs
    Add a how-to article about using links seams for CommonJS
    modules
  * Merge pull request #1178 from dottedmag/feature-xhr-set-status
    Expose XHR.setStatus to simplify asynchronous answers

2.0.0-pre.5/ 2016-12-31
==================

  * Upgrade text-encoding to the latest version
  * Remove sinon.test from sandbox documentation
  * Fix #1026: stub watch method on object
  * Add .resolves and .rejects to stub (#1211)
  * Accept routing DSLs on fake server
  * Color diffs for sinon matchers
  * Add new spy output formatter for handling diffs
  * Add various array matchers
  * Convert 3 arg stub to callsFake
  * Fix being able to spy Error
  * Prepare documentation using site in GitHub Pages
  * Various documentation additions and fixes
  * Previous expectation failures are checked and re-thrown again in mock.verify()
  * Expose XHR.setStatus to simplify asynchronous answers
  * XHR: test for readystatechange not dispatching after .abort() in DONE state
  * XHR: fix readystatechange event after .abort() in DONE state

2.0.0-pre.4 / 2016-11-10
==================
  * Use last matching withArgs declaration when using matchers (#1183)
  * Implement XHR.overrideMimeType
  * Fire .onprogress event handler in fake XHR
  * Expose readyState constants on XHR instances
  * add configurable unsafe header checks (#1061)

2.0.0-pre.3 / 2016-09-19
==================
  * Add assertion check for too many args with calledOnce/Twice/Thrice
  * Much internal refactoring relating to CommonJS

2.0.0-pre.2 / 2016-07-07
==================

  * CJSify sinon.call tests (#1079)
  * CJSify sinon.calledInOrder tests (#1080)
  * CJSify get-config tests (#1081)
  * CJSify sinon.assert tests (#1078)
  * Resolve test failure in node 0.10.x (#1073)
  * Expose `sinon.assert` on sandbox instances. (#1076)
  * Add resetBehavior and resetHistory to sandbox API (#1072)
  * Fix incorrect inline function names
  * Fix calledOnce on tests for #283. This closes #283.
  * Add sandbox.reset() docs
  * Add a line recommending how to pronounce.
  * Improve tests based on PR feedback
  * Allow xhr.respond(0) to simulate a network failure and call onerror
  * Use event loaded instead of error event for code like 403, 500, etc.
  * Fix invalid markdown in fake-timers.ms (#1054)
  * Do not invoke getters in walk (#1059)
  * ReactNative compatibility. Allow sinon fakeServer to run in React Native (#1052)
  * added timeouts to ensure tests pass
  * Run tests on stable Node 6 instead of unstable Node 5
  * added tests to ensure only expected events are fired (#1043)
  * Fixed formatting of issue template
  * Added note on using latest version
  * Fix onerror event triggering for fake xhr requests (#1041)
  * Add missing mocaccino and phantomic to package.json (#1029)
  * Pull request and issue templates (#1012)
  * Fix capturing of stack traces in Phantom.js.
  * Allow sinon.calledInOrder to be called either with an array of spies or multiple spies as parameters.  Add explicit test cases for sinon.calledInOrder
  * Fix typos found by codespell
  * Document faking of setImmediate and clearImmediate
  * Add feature detection guard for tests containing es6 Symbols
  * Add support for es6 Symbol to wrapMethod method
  * Convert values to strings with toString instead of String()
  * Add typeOf matcher for symbol type
  * Make expectetation fail as expected when called with wrong Symbol
  * Make mock report expected TypeError when expecting number and given symbol
  * Add support for es6 Symbol to match.has method
  * Make error message when failing to stub method support es6 symbol
  * Make yieldToOn fail as expected when yielding an es6 Symbol
  * Add support for es6 Symbol to match.same method
  * Make yieldTo fail as expected when yielding an es6 Symbol
  * Add support for es6 Symbol to match method
  * Work around SauceLabs security limitations
  * Declare test specific eslint configs in test/.eslintrc
  * Add test-coverage script
  * Add eslint-plugin-mocha
  * Remove browserify-shim
  * Setup saucelabs tests and adjust travis config
  * Feature detect __proto__ to exclude a timer test in IE 10
  * Convert webworker test to mocha
  * Remove buster
  * Replace npm test script with mocha / mochify invocations
  * Fix async fake-xml-http-request tests
  * Convert issues tests to mocha
  * Convert util tests to mocha
  * Convert core tests to mocha
  * Convert stub tests to mocha
  * Convert typeof tests to mocha
  * Convert spy tests to mocha
  * Convert sandbox tests to mocha
  * Convert mock tests to mocha
  * Convert hello world test to mocha
  * Convert extend tests to mocha
  * Convert collection tests to mocha
  * Convert call tests to mocha
  * Convert assert tests to mocha
  * Convert matcher tests to mocha
  * Update docs/TODO.md to reflect plan to Jekyll
  * CJSify Spy and Stub Tests.
  * CJSify Core Util Tests.
  * Migrate Packaged Tests to use a Browserified Build.
  * fix non enumerable methods stub restore
  * Improve Blob support detection logics
  * Fix a typo in Contributing.md
  * Update Node versions on Travis
  * Use PhantomJS 2.
  * Fix #835: make err.message writable
  * Remove linting errors in switch cases
  * Add spy.notCalled to documentation
  * Remove `sinon.test()` and `sinon.testCase`.
  * Remove `sinon.log` and `sinon.logError`
  * De-fluff
  * Remove `sinon-test` module.
  * Extract `get-config` tests from `sinon-test`.
  * Extract `function-to-string` tests from `sinon-test`.
  * Extract `restore` tests from `sinon-test`.
  * Extract `createStubInstance` tests from `sinon-test`
  * Extract `deep-equal` tests from `sinon-test`.
  * Extract `wrap-method` tests from `sinon-test`.
  * Extract `extend` tests from `sinon-test` to `extend-test`
  * Move 'lib/util/core' tests into 'test/util/core'
  * Remove the use of `sinon.format` from the codebase
  * Require sinon.deepEqual in a more modular way
  * Fix 648: test for this.proxy before trying toString on it
  * use the correct sinon.deepEqual to test sinon matcher
  * add stub test to ensure sinon matcher is recognized within stub.withArgs
  * update repo link
  * Remove unused dependency util
  * Update samsam
  * Update lolex
  * Update browserify
  * Update dependency pre-commit
  * Update buster-istanbul to 0.1.15
  * ignore webstorm configs
  * fix async issues and increase buster timeout
  * test on node 5
  * Fixes typo error in docs
  * fix typo in lib/sinon.js
  * Fixes typo error in docs
  * Adding comment to warn against using eval
  * fix linting
  * Get rid of eval in sinon spy
  * Update README URLs based on HTTP redirects

2.0.0-pre / 2015-12-02
==================

  * 2.0.0 pre-release
  * Extract `sandbox` into a CommonJS module.
  * Clarify documentation on creating stubs and spies
  * Extract `util/fake_server_with_clock` into a CommonJS module
  * Extract `util/fake_server` into a CommonJS module.
  * Extract `util/fake_timers` into a CommonJS module.
  * Extract `util/fake_xml_http_request` into a CommonJS module.
  * Extract `util/fake_xdomain_request` into a CommonJS module.
  * Extract `util/event` into a CommonJS module.
  * Extract `sinon.logError` into a CommonJS module.
  * Extract (most of) sinon.collection into a CommonJS module
  * Extract `sinon.mock` into a CommonJS module.
  * Import mock's dependencies are CommonJS modules.
  * Extract `createSpyCall` into a CommonJS module.
  * Extract `sinon.assert` into a CommonJS module.
  * Remove `walk` from sinon's public API.
  * Patch up linting errors
  * Remove `sinon` import from stub
  * Extract `sinon.behavior` into a CommonJS module
  * Extract `sinon.walk` into a CommonJS module.
  * Export stub as a CommonJS module
  * Import `wrapMethod` as a CommonJS module
  * Import core dependencies as CommonJS modules
  * Delete .jscsrc
  * Ensure sinon can run in a  WebWorker
  * Updated docs to reflect that calledOn accepts a matcher
  * simplified test and added a note
  * updated to require spy in its new cjs form
  * ./commonjs
  * expose sinon.spy and sinon.spyCall
  * converted spy to commonjs format
  * moved sinon.format() to core
  * fixed spy tests
  * added missing test (pushes spy coverage to 100%)
  * added spy getter/setter tests
  * updated sinon.spy() to properly handle getters and setters
  * Remove unnecessary error variable
  * Prevent stubbed getter from being called during restore() - fixes #897
  * Allowed GET requests to have request bodies
  * Remove JSCS from devDependencies
  * Add Gitter badge
  * Allow yieldsOn, callsArgOn, callsArgOnWith, yieldsToOn to use any context
  * Add bithound badge to README.md
  * removed switch statement in favor of object lookup
  * Use immediate exceptions
  * lib/sinon/util: Remove window conditionals from IE files.
  * Add docs for sandbox and utils
  * Add documentation for matchers
  * Add docs for assertions
  * Add docs for JSON-P
  * Add docs for fake server
  * Add docs for fake timers
  * Add mock api descriptions
  * Add mocks introduction
  * Add stubs api
  * Update TODO
  * Use Object.prototype.hasOwnProperty in deepEqual to cope with cases where hasOwnProperty doesn't exist, ie. Object.create(null), or has been overridden on an object. With tests.
  * Add docs TODO to track outstanding tasks
  * Add stubs.md with introduction to stubs
  * Import docs
  * Fix #875 Proper support UTF8 payloads * introduced new dependency "text-encoding" * delegate encoding operations to TextEncoder/TextDecoder * added unit test to verify proper utf-8 encoding
  * finished eslint'ing
  * upgraded ESLint to 1.7.1 (latest and greatest)
  * Run tests in node 4.2 LTS (Argon)
  * removed unneeded path resolution
  * Let npm install handle buster again, now that we have caching of node_modules
  * Make travis cache node_modules to speed up builds
  * removed duplicate implementation of sinon.timesInWords
  * fix travis-ci build svg in README
  * reviewer comments
  * cleaning up left over blank lines
  * CommonJS-ified *some* of the things
  * updated readyStateChange to align to the w3c spec (somewhat)
  * cleaned up a few unreleated tests
  * updated tests to reflect reality
  * added some additional progress event verification
  * added a test to ensure load is not fired before abort
  * added test to ensure event ordering
  * allow progress events with loaded/total values of 0
  * Fix #867: Walk properties only once
  * Removed unnecessary module wrappers and double test run in NodeJS.
  * null-check the object passed to sinon.stub
  * implemented stub#resetHistory method - fixes #863
  * Fix #851: Do not attempt to re-stub constructors
  * Fix #847: Ensure walk invokes accessors directly on target
  * Run tests in node 4.1.x also
  * stub.reset also resets behavior

1.17.0 / 2015-09-22
==================

  * Fix #821 where Sinon.JS would leak a setImmdiate into global scope
  * Removed sinon-timers from the build. refs #811
  * Added flag that, when set to true, makes sinon.logError throw errors synchronously.
  * Fix #777: Support non-enumerable props when stubbing objects
  * Made the sinon.test() function pass on errors to the callback
  * Expand conversion from ArrayBuffer to binary string
  * Add support for ArrayBuffer, blob responseTypes

1.16.1 / 2015-08-20
===================
* Bump Lolex to stop throwing an error when faking Date but not setTimeout

1.16.0 / 2015-08-19
===================
* Capture the stack on each spy call
* fakeServer.create accepts configuration settings
* Update Lolex to 1.3.0
* Fire onreadystatechange with event argument
* Returns supersedes previous throws
* Bunch of bug fixes

1.15.0 / 2015-05-30
==================
* Fixed bug where assertions don't handle functions that have a property named proxy
* update license attribute
* Add test coverage report
* responseHeaders on abort are empty object
* Fix pre-existing style error
* Update documentation to cover testing built version
* Update CONTRIBUTING.md with section about "Making a pull request"
* Improve RELEASE.md to reduce effort when cutting a new release
* Deprecate mock
* Release.md
* Make `npm docs sinon` work.
* Run unit tests against packaged version in CI environment
* Remove unused Gruntfile
* Use Vanilla Buster.JS
* Use `files` in package.json
* Fix code style
* Don't stub getter properties
* Event listeners for `progress`, `load` and `readystatechange` in the `readyStateChange` function in  `FakeXMLHttpRequest` are dispatched in a different order in comparison to a browser. Reorder the events dispatched to reflect general browser behaviour.
* Update linting instructions in CONTRIBUTING.md
* Lint all files with new linter
* Update JSCS to 1.11.3 and make npm lint task verify all files
* Cleanup .restore()

== 1.14.1 / 2015-03-16
* Fallback for .restore() native code functions on Chrome & PhantomJS (なつき)
* Restore support for sinon in IE<9 (Harry Wolff)

== 1.14.0 / 2015-03-13
* Stub & spy getters & setters (Simon Zack)
* Fix #702 async sinon.test using mocha interface (Mohayonao)
* Add respondImmediately to fake servers (Jonathan Freeman)

== 1.13.0 / 2015-03-04
* fix @depends-require mismatches (fixes AMD issues) (Ben Hockey)
* Fix spy.calledWith(undefined) to return false if it was called without args
* yieldsRight (Alexander Schmidt)
* stubs retain function arity (Charlie Rudolph)
* (AMD) use explicit define in built version
* spy().reset() returns this (Ali Shakiba)
* Add lengthComputable and download progress (Tamas Szebeni)
* Don't setContent-type when sending FormData (AJ Ortega)
* sinon.assert with spyCall (Alex Urbano)
* fakeXHR requests in Node. (Jmeas)
* Enhancement: run builds on docker (till@php.net)
* Use FakeXDomainRequest when XHR does not support CORS. Fixes #584 (Eric Wendelin)
* More lenient check for ActiveXObject
* aligned sandbox.useFakeXMLHttpRequest API to documentation (Phred)
* Fix #643. Returns supersedes previous throws (Adam Hull)
* Safely overwrite properties in IE - no more IE files!
* Add check for setInterval/clearInterval (kdpecker)
* Add safety check for document.createElement (kdpecker)
* Fix #633. Use a try/catch when deleting a property in IE8. (Garrick Cheung)

== 1.12.1 / 2014-11-16
* Fixed lolex issue on node

== 1.12.0 / 2014-11-16
* Fake timers are now extracted as lolex: http://github.com/sinonjs/lolex
* Improved setImmediate fake
* Proper AMD solution

== 1.11.1 / 2014-10-27

* Expose match on returned sandbox (Duncan Beevers)
* Fix issue #586 (Antonio D'Ettole)
* Declare log_error dependency (Kurt Ruppel)

== 1.11.0 / 2014-10-26

* Proper AMD support
* Don't call sinon.expectation.pass if there aren't any expectations (Jeffrey Falgout)
* Throw error when reset-ing while calling fake
* Added xhr.response property (Gyandeep Singh)
* Fixed premature sandbox destruction (Andrew Gurinovich)
* Add sandbox reset method (vitalets)
* A bunch of bug fixes (git log)
* Various source organizational improvements (Morgan Roderick and others)

== 1.10.3 / 2014-07-11

* Fix loading in Web Workers (Victor Costan)
* Allow null as argument to clearTimeout and clearInterval (Lars Thorup)

== 1.10.2 / 2014-06-02

* Fix `returnValue` and `exception` regression on spy calls (Maximilian Antoni)

== 1.10.1 / 2014-05-30

* Improved mocha compatibility for async tests (Ming Liu)
* Make the fakeServer log function overloadable (Brian M Hunt)

== 1.10.0 / 2014-05-19

* Ensure that spy createCallProperties is set before function invocation (James Barwell)
* XDomainRequest support (Søren Enemærke, Jonathan Sokolowski)
* Correct AMD behavior (Tim Branyen)
* Allow explicit naming of spies and stubs (Glen Mailer)
* deepEqual test for unequal objects in calledWithExactly (Bryan Donovan)
* Fix clearTimeout() for Node.js (Xiao Ma)
* fix fakeServer.respond() in IE8 (John Bernardo)
* Fix #448 (AMD require.amd)
* Fix wrapMethod error handling (Nikita Litvin)

== 1.9.1 / 2014-04-03

* Fix an issue passing `NaN` to `calledWith` (Blake Israel)
* Explicate dependency on util package (Kris Kowal)
* Fake timers return an object with `ref` and `unref` properties on Node (Ben Fleis)

== 1.9.0 / 2014-03-05

* Add sinon.assert.match (Robin Pedersen)
* Added ProgressEvent and CustomEvent. Fixes bug with progress events on IE. (Geries Handal)
* prevent setRequestHeaders from being called twice (Phred)
* Fix onload call, 'this' should be equal to XHR object (Niklas Andreasson)
* Remove sandbox injected values on restore (Marcus Hüsgen)
* Coerce matcher.or/and arguments into matchers (Glen Mailer)
* Don't use buster.format any more
* Fix comparison for regexp deepEqual (Matt Kern)

== 1.8.2 / 2014-02-11

* Fixes an edge case with calledWithNew and spied native functions, and other
  functions that lack a .prototype
* Add feature detection for the new ProgressEvent support

== 1.8.1 / 2014-02-02

* Screwed up NPM release of 1.8.0, unable to replace it

== 1.8.0 / 2014-02-02

* Add clearImmediate mocking support to the timers API (Tim Perry)
* Mirror custom Date properties when faking time
* Improved Weinre support
* Update call properties even if exceptions are thrown (Tim Perry)
* Update call properties even if exceptions are thrown (Tim Perry)
* Reverse matching order for fake server (Gordon L. Hempton)
* Fix restoring globals on another frame fails on Firefox (Burak Yiğit Kaya)
* Handle stubbing falsey properties (Tim Perry)
* Set returnValues correctly when the spied function is called as a constructor (Tim Perry)
* When creating a sandbox, do not overwrite existing properties when inject
  properties into an object (Sergio Cinos)
* Added withCredentials property to fake xhr (Geries)
* Refine behavior withArgs error message (Tim Fischbach)
* Auto-respond to successive requests made with a single XHR object (Jan Suchý)
* Add the ability for mock to accept sinon.match matchers as expected arguments (Zcicala)
* Adding support for XMLHttpRequest.upload to FakeXMLHttpRequest (Benjamin Coe)
* Allow onCall to be combined with returns* and throwsException in stub behavior
  sequences (Tim Fischbach)
* Fixed deepEqual to detect properties on array objects
* Fixed problem with chained timers with delay=0 (Ian Lewis)
* Use formatio in place of buster-format (Devin Weaver)

== 1.7.3 / 2013-06-20

* Removed use of array forEach, breaks in older browsers (Martin Hansen)
* sinon.deepEqual(new Date(0), new Date()) returns true (G.Serebryanskyi)

== 1.7.2 / 2013-05-08

* Sinon 1.7 has split calls out to a separate file. This caused some problems,
  so 1.7.2 ships with spyCall as part of spy.js like it used to be.

== 1.7.1 / 2013-05-07

* Fake XMLHttpRequest updated to call onerror and onsuccess callbacks, fixing
  jQuery 2.0 problems (Roman Potashow)
* Implement XMLHttpRequest progress event api (Marten Lienen)
* Added sinon.restore() (Jonny Reeves)
* Fix bug where throwing a string was handled incorrectly by Sinon (Brandon Heyer)
* Web workers support (Victor Costan)

== 1.7.0

* Failed release, see 1.7.1

== 1.6.0 / 2013-02-18
* Add methods to spyCall interface: callArgOn, callArgOnWith, yieldOn,
  yieldToOn (William Sears)
* sinon.createStubInstance creates a fully stubbed instance from a constructor
  (Shawn Krisman)
* resetBehavior resets fakes created by withArgs (Martin Sander)
* The fake server now logs to sinon.log, if set (Luis Cardoso)
* Cleaner npm package that also includes pkg/sinon.js and
  pkg/sinon-ie.js for cases where npm is used to install Sinon for
  browser usage (Domenic Denicola)
* Improved spy formatter %C output (Farid Neshat)
* clock.tick returns clock.now (Michael Jackson)
* Fixed issue #248 with callOrder assertion
  Did not fail if the last given spy was never called (Maximilian Antoni)
* Fixed issue with setResponseHeader for synchronous requests (goligo)
* Remove msSetImmediate; it only existed in IE10 previews (Domenic Denicola)
* Fix #231: not always picking up the latest calls to callsArgWith, etc.
  (Domenic Denicola)
* Fix failing anonymous mock expectations

== 1.5.2 / 2012-11-28
* Revert stub.reset changes that caused existing tests to fail.

== 1.5.1 / 2012-11-27
* Ensure window.Image can be stubbed. (Adrian Phinney)
* Fix spy() in IE 8 (Scott Andrews)
* Fix sinon base in IE 8 (Scott Andrews)
* Format arguments ouput when mock excpetation is not met (kbackowski)
* Calling spy.reset directly from stub.reset (Thomas Meyer)

== 1.5.0 / 2012-10-19
* Don't force "use strict" on Sinon consumers
* Don't assume objects have hasOwnProperties. Fixes problem with e.g.
  stubbing properties on process.env
* Preserve function length for spy (Maximilian Antoni)
* Add 'invokeCallback' alias for 'yield' on calls (Maximilian Antoni)
* Added matcher support for calledOn (Maximilian Antoni)
* Retain original expectation messages, for failed mocks under sinon.test
  (Giorgos Giannoutsos)
* Allow yields* and callsArg* to create sequences of calls. (Domenic Denicola)
* sinon.js can catch itself in endless loop while filling stub prototype
  with asynch methods (Jan Kopriva)

== 1.4.2 / 2012-07-11
* sinon.match for arrays (Maximilian Antoni)

== 1.4.1 / 2012-07-11
* Strengthen a Node.JS inference to avoid quirky behavior with Mocha
  (which provides a shim process object)

== 1.4.0 / 2012-07-09
* Argument matchers (Maximillian Antoni)
  sinon.match.{any, same, typeOf, instanceOf, has, hasOwn, defined, truthy,
  falsy} as well as typeOf shortcuts for boolean, number, string, object,
  function, array, regexp and date. The result of a call can be used with
  spy.calledWith.
* spy.returned now works with matchers and compares objects deeply.
* Matcher assertions: calledWithMatch, alwaysCalledWithMatch and
  neverCalledWithMatch
* calledWithNew and alwaysCalledWithNew for assert (Maximilian Antoni)
* Easier stubbed fluent interfaces: stub.returnsThis() (Glen Mailer)
* allow yields() and family to be used along with returns()/throws() and
  family (Glen Mailer)
* Async versions `callsArg*` and `yields*` for stubs (TEHEK)
* Format args when doing `spy.printf("%*")` (Domenic Denicola)
* Add notCalled property to spies
* Fix: spy.reset did not reset fakes created by spy.withArgs (Maximilian Antoni)
* Properly restore stubs when stubbing entire objects through the sandbox
  (Konrad Holowinski)
* Restore global methods properly - delete properties that where not own
  properties (Keith Cirkel)
* setTimeout and setInterval pass arguments (Rodion Vynnychenko)
* Timer callbacks that contain a clock.tick no longer fails (Wesley Waser)
* spy(undefined, "property") now throws
* Prevent multiple restore for fake timers (Kevin Decker)
* Fix toString format under Node (Kevin Decker)
* Mock expectations emit success and failure events (Kevin Decker)
* Development improvement: Use Buster.JS to test Sinon
* Fix bug where expect.atLeast failed when minimum calls where received
* Make fake server safe to load on node.js
* Add support for no args on .withArgs and .withExactArgs (Tek Nynja)
* Avoid hasOwnProperty for host objects

== 1.3.2 / 2012-03-11
* Stronger Node inference in sandbox
* Fixed issue with sinon.useFakeTimers() and Rhino.js 1.7R3
* Formatting brush-up
* FIX Internet Explorer misreporting the type of Function objects
  originating in an external window as "object" instead of "function".
* New methods stub.callsArgOn, stub.callsArgOnWith,
  stub.yieldsOn, stub.yieldsToOn
* Implemented
* Fixing `clearTimeout` to not throw when called for nonexistent IDs.
* Spys that are created using 'withArgs' now get initialized with previous
  calls to the original spy.
* Minor bug fixes and docs cleanup.

== 1.3.1 / 2012-01-04
* Fix bug in core sinon: isNode was used for both a variable and a function,
  causing load errors and lots of bugs. Should have never left the door.

== 1.3.0 / 2012-01-01
* Support using bare functions as fake server response handlers (< 1.3.0
  required URL and/or method matcher too)
* Log some internal errors to sinon.log (defaults to noop). Set sinon.log
  to your logging utility of choice for better feedback when.
* White-list fake XHRs: Allows some fake requests and some that fall through to
  the backend server (Tim Ruffles)
* Decide Date.now support at fake-time. Makes it possible to load something that
  polyfills Date.now after Sinon loaded and still have Date.now on fake Dates.
* Mirror properties on replaced function properties
* New methods: spy.yield(), spy.yieldTo(), spy.callArg() and spy.callArgWith()
  can be used to invoke callbacks passed to spies (while avoiding the mock-like
  upfront yields() and friends). invokeCallback is available as an alias for
  yield for people working with strict mode. (Maximilian Antoni)
* New properties: spy.firstCall, spy.secondCall, spy.thirdCall and spy.lastCall.
  (Maximilian Antoni)
* New method: stub.returnsArg(), causes stub to return one of its arguments.
  (Gavin Huang)
* Stubs now work for inherited methods. This was previously prohibited to avoid
  stubbing not-yet-implemented methods. (Felix Geisendörfer)
* server.respond() can now accept the same arguments as server.respondWith() for
  quick-and-dirty respondWith+respond. (Gavin Huang)
* Format objects with buster-format in the default bundle. Default to
  util.inspect on node unless buster-format is available (not a hard dependency,
  more like a 'preference').

* Bug fix: Make sure XHRs can complete even if onreadystatechange handler fails
* Bug fix: Mirror entire Date.prototype, including toUTCString when faking
* Bug fix: Default this object to global in exposed asserts
* Bug fix: sinon.test: use try/finally instead of catch and throw - preserves
  stack traces (Kevin Turner)
* Bug fix: Fake `setTimeout` now returns ids greater than 0. (Domenic Denicola)
* Bug fix: NPM install warning (Felix Geisendörfer)
* Bug fix: Fake timers no longer swallows exceptions (Felix Geisendörfer)
* Bug fix: Properly expose all needed asserts for node
* Bug fix: wrapMethod on window property (i.e. when stubbing/spying on global
  functions)
* Bug fix: Quote "yield" (Ben Hockey)
* Bug fix: callOrder works correctly when spies have been called multiple times

== 1.2.0 / 2011-09-27
* Bug fix: abort() switches state to DONE when OPENED and sent. Fix by
  Tristan Koch.
* Bug fix: Mootools uses MSXML2.XMLHTTP as objectId, which Sinon matched with
  different casing. Fix by Olmo Maldonado.
* Bug fix: When wrapping a non-owned property, restore now removes the wrapper
  instead of replacing it. Fix by Will Butler.
* Bug fix: Make it possibly to stub Array.prototype.push by not using that
  method directly inside Sinon.
* Bug fix: Don't assume that req.requestBody is a string in the fake server.
* Added spy.printf(format) to print a nicely formatted message with details
  about a spy.
* Garbage collection: removing fakes from collections when restoring the
  original methods. Fix by Tristan Koch.
* Add spy.calledWithNew to check if a function was used as a constructor
* Add spy.notCalledWith(), spy.neverCalledWith() and
  sinon.assert.neverCalledWith. By Max Antoni
* Publicly expose sinon.expectation.fail to allow tools to integrate with mock
  expectations.
* Fake XMLHttpRequests now support a minimal portion of the events API, making
  them work seamlessly with e.g. SproutCode (which uses
  xhr.addEventListener("readystatechange"). Partially by Sven Fuchs.

== 1.1.1 / 2011-05-17
* Fix broken mock verification in CommonJS when not including the full Sinon
  package.

== 1.1.0 / 2011-05-04
* The fake server now has a autoRespond method which allows it to respond to
  requests on the fly (asynchronously), making it a good fit for mockup
  development
* Stubs and spies now has a withArgs method. Using it allows you to create
  several spies/stubs for the same method, filtered by received arguments
* Stubs now has yields and yieldsTo methods for fuzzily invoking callbacks.
  They work like callsArgAt only by inferring what callback to invoke, and
  yieldsTo can invoke callbacks in object "options" arguments.
* Allow sandboxes/collections to stub any property so long as the object
  has the property as an own property
* Significantly improve error reporting from failed mock expecations. Now prints
  all met and unmet expectations with expected and received arguments
* Allow mock expectations to be consumed in any order
* Add pretty printing of all calls when assertions fail
* Fix bug: Stub exception message ended up as "undefined" (string) if not
  specified
* Pass capture groups in URLs to fakeServer function handlers
* Pass through return value from test function in testCase
* typeof require is not enough to assume node, also use typeof module
* Don't use Object.create in sinon.create. In the off chance that someone stubs
  it, sinon will fail mysteriously (Thanks to Espen Dalløkken)
* Catch exceptions when parsing DOM elements "on a hunch"
  When responding to XHRs, Sinon acts like most browsers and try to parse the
  response into responseXML if Content-Type indicates XML or HTML. However, it
  also does this if the type is not set. Obviously, this may misfire and
  should be caught.
* Fix fakeServer.respond() to not drop requests when they are queued during the
  processing of an existing queue. (Sven Fuchs)
* Clean up module loading in CommonJS environments (Node.js still the only
  tested such environment). No longer (temporarily) modifies require.paths,
  always loads all modules.

== 1.0.2 / 2011-02-22
* Fix JSON bug in package.json
* Sandbox no longer tries to use a fake server if config says so, but
  server is not loaded

== 1.0.1 / 2010-12-20
* Make sure sinon.sandbox is exposed in node.js (fix by Gord Tanner)

== 1.0.0 / 2010-12-08
* Switched indentation from 2 to 4 spaces :)
* Node.js compatibility improvements
* Remove magic booleans from sinon.assert.expose, replace with option object
* Put QUnit adapter in its own repository
* Update build script to build standalone timers and server files
* Breaking change: thisObj -> thisValue
  Change brings consistency to the code-base, always use thisValue
* Add sinon.assert.pass callback for successful assertions
* Extract sandbox configuration from sinon.test

  Refactored sinon.test to not do all the heavy lifting in creating sandbox
  objects from sinon.config. Now sinon.sandbox.create accepts an optional
  configuration that can be retrieved through sinon.getConfig({ ... }) - or, to
  match previous behavior, through sinon.getConfig(sinon.config);

  The default configuration now lives in sinon.defaultConfig rather than the
  previous sinon.test.

  This change enables external tools, such as test framework adapters, to easily
  create configurable sandboxes without going through sinon.test
* Rewrite sinon.clock.tick to fix bug and make implementation clearer
* Test config load correct files
* Make timers and XHR truly standalone by splitting the IE work-around in two files
* Don't fail when comparing DOM elements in sinon.deepEqual (used in calledWith(...))
* Should mirror properties on Date when faking it
* Added and updated configuration for both JsLint and JavaScript lint
* [August Lilleaas] The build script can optionally build a file without the
  version name in it, by passing 'plain', i.e. './build plain'.

  Useful when using the build script to build and use sinon programatically, so
  one can 'cp path/to/sinon/pkg/sinon.js my/scripts/'
* [August Lilleaas] Checking and warning if we got a load error and rubygems
  isn't present.
* [August Lilleaas] Updating build script to be runnable from any
  directory. Current working directory doesn't have to be repo root.

== 0.8.0 / 2010-10-30
* sinon.wrapMethod no longer accepts faking already faked methods
* sinon-qunit 'plugin'
* sinon.test / sinon.config can now expose the sandbox object

== 0.7.2 / 2010-10-25
* Add sinon.sandbox.create back in
* Fix bug where clock.tick would fire timeouts in intervals when
  setInterval was also called

== 0.7.1 / 2010-10-16
* The fake server will now match paths against full URLs, meaning that
  server.respondWith("/", "OK"); will match requests for
  "http://currentHost/".
* Improved toString method for spies and stubs which leads to more
  precise error messages from sinon.assert.*

== 0.7.0 / 2010-09-19
* sinon.useFakeTimers now fakes the Date constructor by default
* sinon.testCase now fakes XHR and timers by default
* sinon.config controls the behavior of sinon.testCase
* Fixed bug in clock.tick - now fires timers in correct order
* Added the ability to tick a clock string for longer ticks.
  Passing a number causes the clock to tick the specified amount of
  milliseconds, passing a string like "12:32" ticks 12 minutes and 32
  seconds.
* calledBefore and calledAfter for individual calls
* New assertions
  sinon.assert.notCalled
  sinon.assert.calledOnce
  sinon.assert.calledTwice
  sinon.assert.calledThrice
* sinon.test now throws if passed anything other than a function
* sinon.testCase now throws if passed anything other than an object
* sinon.{spy,stub}(obj, method) now throws if the property is not an
  existing function - helps avoid perpetuating typo bugs
* Vastly improved error messages from assertions
* Spies/stubs/expectations can have their names resolved in many cases
* Removed feature where sinon.testCase allowed for nested test cases
  (does not belong in Sinon.JS)
* Organizational change: src/ becomes lib/ Helps npm compatibility
* Thanks to Cory Flanigan for help on npm compatibility

== 0.6.2 / 2010-08-12
* Fixed another bug in sinon.fakeServerWithClock where consecutive
  respond() calls did not trigger timeouts.

== 0.6.1 / 2010-08-12
* Fixed a bug in sinon.fakeServerWithClock where the clock was ticked
  before the server had responded to all requests, resulting in
  objects not having been responded to by the time the timeout ran.

== 0.6.0 / 2010-08-10
* FakeXMLHttpRequest
* sinon.useFakeXMLHttpRequest
* sinon.fakeServer
* sinon.fakeServerWithClock
* Improved fake timers implementation, made them work properly in IE 6-8
* Improved sinon.sandbox
  * Added useFakeServer
  * Added inject method
* Improved sinon.test method
  * Made configuration aware
  * Now uses sinon.sandbox in place of sinon.collection
* Changed default configuration for sinon.test, breaking compatibility
  with 0.5.0 - can be changed through sinon.config

== 0.5.0 / 2010-06-09
* Initial release
* Spies, stubs, mocks
* Assertions
* collections, test, testCase
* Fake timers (half-baked)

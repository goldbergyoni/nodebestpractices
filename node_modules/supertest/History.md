3.0.0 / 2017-01-29
===================

  * PR-373 - Allow TestAgent pass a cert and key to request (thanks @toefraz)
  * PR-392 - Update readme with promise example (thanks @ajouve)
  * PR-400 - Update to superagent 3 (thanks @alphashuro)

2.0.1 / 2016-10-19
===================

  * PR-371 - node v6 - Fix bug to support HEAD method. Add uppercase on method value (thanks @seangarner)
  * PR-348 - Handle server not running errors (thanks @santanu-biswas)

2.0.0 / 2016-07-29
===================

  * PR-347 - Update to superagent ^2.0.0 (thanks @saintedlama)
  * Proper es6 [promises support](http://visionmedia.github.io/superagent/#request-basics) was added in superagent 2.0.0, which means you can use it

1.2.0 / 2016-02-11
===================

  * PR-302 - Update to superagent ^1.7.2
  * PR-313 - Update node versions on Travis CI
  * PR-223 - Remove Makefile for running tests
  * PR-286 - Fix bug with redirects

1.1.0 / 2015-08-26
===================

  * PR-235 - Update test framework to express 4, update other deps
  * PR-239 - Core refactor to run expectations in order of definition
  * PR-273 - Documentation update related to PR-239
  * PR-268 - Bump superagent to 1.3.0

1.0.1 / 2015-05-08
===================

  * PR-224 - Better expected error support as result of super-agent 1.x

1.0.0 / 2015-05-08
===================

  * Bumping version to 1.0.0!, big changes with superagent
  * Update superagent dependency to 1.2.0

0.15.0 / 2014-11-11
===================

  * Update superagent dependency

0.14.0 / 2014-09-29
===================

  * Update superagent dependency
  * Update methods dependency

0.13.0 / 2014-05-22
===================

  * Wait for server close before invoke the callback for `end()`
  * Fix global leak in tests

0.12.1 / 2014-05-09
===================

  * update methods dependency

0.11.0 / 2014-04-14
==================

  * close internal server upon test end
  * add .delete() method (aliases .del())

0.10.0 / 2014-03-20
==================

  * assert respond body prior to the status code
  * add documentation for .agent()

0.9.2 / 2014-03-17
==================

  * fix package.json

0.9.1 / 2014-03-17
==================

  * update superagent

0.9.0 / 2014-01-17
==================

 * add expect(function(res) {}) syntax

0.8.3 / 2014-01-07
==================

 * update superagent.

0.8.2 / 2013-11-26
==================

 * update superagent. Closes #85

0.8.1 / 2013-10-28
==================

 * merge pull request #82 from jonathanong/patch-1
 * bump node-methods
 * merge pull request #79 from menzoic/patch-1
 * update Readme.md
 * Merge pull request #73 from repoify/add/repository
 * add repository field to readme

0.8.0 / 2013-08-09
==================

 * add ability for multiple assertions per header

0.7.1 / 2013-07-02
==================

 * update superagent

0.7.0 / 2013-06-04
==================

 * add error properties so test frameworks can show diffs etc. Closes #65

0.6.1 / 2013-06-02
==================

 * fix: EADDRINUSE errnos, use ephemeral ports now
 * fix: handling of socket errors

0.6.0 / 2013-04-15
==================

  * add exposing of `Test` to enable extensibility
  * add request.agent(app) support
  * add request(url) test. Closes #33

0.5.1 2012-12-07
==================

  * fix .expect(status) should assert only status

0.5.0/ 2012-11-28
==================

  * add support for multiple body assertions

0.4.2 / 2012-11-17
==================

  * add .buffer() so that responses with no content-length are testable. closes #36
  * add failing test for #36
  * update superagent

0.4.1 / 2012-11-14
==================

  * update superagent

0.4.0 / 2012-10-18
==================

  * add url support [vesln]

0.3.1 / 2012-10-01
==================

  * update superagent

0.3.0 / 2012-09-24
==================

  * add `https.Server` support [fengmk2]

0.2.0 / 2012-08-29
==================

  * update superagent. Closes #18

0.1.2 / 2012-07-15
==================

  * change bind address from 0.0.0.0 to 127.0.0.1 to prevent EADDRNOTAVAIL on windows

0.1.1 / 2012-07-03
==================

  * add `.expect(status, body, fn)` support
  * add `.expect(status, body)` support

0.1.0 / 2012-07-02
==================

  * add parsed body assertion support. Closes #1


1.0.2 / 2017-04-27
==================

  * fix(*): Fix Blob detection for iOS 8/9

1.0.1 / 2017-04-05
==================

  * chore(*): restrict files included in npm package

1.0.0 / 2017-04-05
==================

  * chore(*): update package name
  * fix(*): do not call toJSON more than once (#7)
  * fix(*): Ensure globals are functions before running `instanceof` checks against them. (#4)
  * fix(*): fix the case when toJSON() returns a Buffer  (#6)
  * chore(*): Bump dependencies, add semistandard checkstyle and travis configuration (#5)
  * perf(*): Performance improvements (#3)

0.1.7 / 2015-11-18
==================

  * fix toJSON [@jderuere]
  * fix `global.isBuffer` usage [@tonetheman]
  * fix tests on modern versions of node
  * bump mocha

0.1.6 / 2015-01-24
==================

 * fix "undefined function" bug when iterating
   an object created with Object.create(null) [gunta]

0.1.5 / 2014-09-04
==================

 * prevent browserify from bundling `Buffer`

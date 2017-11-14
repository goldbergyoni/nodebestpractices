3.9.0 / 2017-10-13
==================

- new: `csp` now supports `strict-dynamic` value
- new: `csp` now supports `require-sri-for` directive

- remove: `connect` dependency

3.8.2 / 2017-09-27
==================

- update: `connect` dependency to latest

3.8.1 / 2017-07-28
==================

- fix: `csp` does not automatically set `report-to` when setting `report-uri`

3.8.0 / 2017-07-21
==================

- update: `hsts` no longer cares whether it's HTTPS and always sets the header

3.7.0 / 2017-07-21
==================

- new: `csp` now supports `report-to` directive

- update: throw an error when used incorrectly
- update: add a few documentation files to `npmignore`

3.6.1 / 2017-05-21
==================

- update: bump `connect` version

3.6.0 / 2017-05-04
==================

- new: `expectCt` middleware for setting the `Expect-CT` header

3.5.0 / 2017-03-06
==================

- new: `csp` now supports the `worker-src` directive

3.4.1 / 2017-02-24
==================

- update: bump `connect` version

3.4.0 / 2017-01-13
==================

- new: `csp` now supports more `sandbox` directives

3.3.0 / 2016-12-31
==================

- update: `referrerPolicy` allows `strict-origin` and `strict-origin-when-cross-origin` directives
- update: bump `connect` version

3.2.0 / 2016-12-22
==================

- update: CSP now allows `manifest-src` directive

3.1.0 / 2016-11-03
==================

- update: CSP now allows `frame-src` directive

3.0.0 / 2016-10-28
==================

- update: CSP will check your directives for common mistakes and throw errors if it finds them. This can be disabled with `loose: true`.
- update: empty arrays are no longer allowed in CSP. For source lists (like `script-src` or `object-src`), use the standard `scriptSrc: ["'none'"]`. The `sandbox` directive can be `sandbox: true` to block everything.
- update: `false` can disable a CSP directive. For example, `scriptSrc: false` is the same as not specifying it.
- update: in CSP, `reportOnly: true` no longer requires a `report-uri` to be set.
- update: `hsts`'s `maxAge` now defaults to 180 days (instead of 1 day)
- update: `hsts`'s `maxAge` parameter is seconds, not milliseconds
- update: `hsts` includes subdomains by default
- update: `hpkp`'s `maxAge` parameter is seconds, not milliseconds
- update: `domain` parameter in `frameguard` cannot be empty

- remove: `noEtag` option no longer present in `noCache`
- remove: iOS Chrome `connect-src` workaround in CSP module

2.3.0 / 2016-09-30
==================

- new: `hpkp` middleware now supports the `includeSubDomains` property with a capital D

- fix: `hpkp` was setting `includeSubdomains` instead of `includeSubDomains`

2.2.0 / 2016-09-16
==================

- new: `referrerPolicy` middleware

2.1.3 / 2016-09-07
==================

- update: top-level aliases (like `helmet.xssFilter`) are no longer dynamically required

2.1.2 / 2016-07-27
==================

- update: `nocache`'s `noEtag` option is now deprecated

- fix: `csp` now better handles Firefox on mobile

2.1.1 / 2016-06-10
==================

- update: remove several dependencies from `helmet-csp`

- fix: `frameguard` had a documentation error about its default value
- fix: `frameguard` docs in main Helmet readme said `frameguard`, not `helmet.frameguard`

2.1.0 / 2016-05-18
==================

- new: `csp` lets you dynamically set `reportOnly`

2.0.0 / 2016-04-29
==================

- new: pass configuration to enable/disable default middlewares

- update: `dnsPrefetchControl` middleware is now default

- fix: make `hpkp` lowercase in documentation
- fix: update `hpkp` spec URL in readmes
- fix: update `frameguard` header name in readme

- remove: module aliases. There is now just one way to include each middleware
- remove: `frameguard` can no longer be initialized with strings; you must use an object

1.3.0 / 2016-03-01
==================

- new: `hpkp` has a `setIf` option to conditionally set the header

1.2.0 / 2016-02-29
==================

- new: `csp` now has a `browserSniff` option to disable all user-agent sniffing

- update: `frameguard` can now be initialized with options
- update: add `npmignore` file to speed up installs slightly

1.1.0 / 2016-01-12
==================

- new: code of conduct
- new: `dnsPrefetchControl` middleware

- fix: `csp` readme had syntax errors

1.0.2 / 2016-01-08
==================

- fix: `csp` wouldn't recognize `IE Mobile` browsers
- fix: `csp` had some errors in its readme
- fix: main readme had a syntax error

1.0.1 / 2015-12-19
==================

- fix: `csp` with no User Agent would cause errors

1.0.0 / 2015-12-18
==================

- new: `csp` module supports dynamically-generated values

- update: `csp` directives are now under the `directives` key
- update: `hpkp`'s `Report-Only` header is now opt-in, not opt-out
- update: tweak readmes of every sub-repo

- fix: old Firefox Content-Security-Policy behavior for `unsafe-inline` and `unsafe-eval`
- fix: dynamic `csp` policies is no longer recursive

- remove: `crossdomain` middleware
- remove: `csp` no longer throws errors when some directives aren't quoted (`'self'`, for example)
- remove: `maxage` option in the `hpkp` middleware
- remove: `safari5` option from `csp` module

0.15.0 / 2015-11-26
===================

- update: `hpkp` allows a `report-uri` without the `Report-Only` header

0.14.0 / 2015-11-01
===================

- new: `nocache` now sends the `Surrogate-Control` header

- update: `nocache` no longer contains the `private` directive in the `Cache-Control` header

0.13.0 / 2015-10-23
===================

- new: `xssFilter` now has a function name

- update: add new CSP docs to readme
- update: HSTS option renamed from `includeSubdomains` to `includeSubDomains`

0.11.0 / 2015-09-18
===================

- new: `csp` now supports Microsoft Edge
- new: CSP Level 2 support

- update: `connect` to 3.4.0
- update: `depd` to 1.1.0

- fix: add `license` key to `csp`'s `package.json`
- fix: empty `csp` directives support every directive, not just `sandbox`

0.10.0 / 2015-07-08
===================

- new: add "Handling CSP violations" to `csp` readme
- new: add license to `package.json`

- update: `hpkp` had a link to the wrong place in its readme
- update: `hpkp` requires 2 or more pins

- fix: `hpkp` might have miscalculated `maxAge` slightly wrong

0.9.0 / 2015-04-24
==================

- update: `nocache` adds `private` to its `Cache-Control` directive
- update: `package.json` description

0.8.0 / 2015-04-21
==================

- update: deprecate `crossdomain` middleware
- update: remove hefty Lodash dependency from HSTS and CSP
- update: update string detection module in Frameguard
- update: change readme slightly to better reflect project's focus

- remove: `crossdomain` is no longer a default middleware

0.7.1 / 2015-03-23
==================

- update: all outdated dependencies (insofar as possible)
- update: HSTS now uses Lodash like all the rest of the libraries

0.7.0 / 2015-03-05
==================

- new: `hpkp` middleware

- update: Travis CI should test 0.10 and 0.12
- update: minor code cleanup

0.6.2 / 2015-03-01
==================

- update: improve `xssFilter` performance
- update: Lodash versions

0.6.1 / 2015-02-13
==================

- new: "Other recommended modules" in README

- update: Lodash version

- fix: `frameguard` middleware exported a function called `xframe`

0.6.0 / 2015-01-21
==================

- new: you can disable `csp` for Android

- fix: `csp` on Chrome Mobile on Android and iOS

0.5.4 / 2014-12-21
==================

- update: `nocache` should force revalidation

0.5.3 / 2014-12-08
==================

- update: Platform version in CSP and X-XSS-Protection

- fix: bad wording in frameguard docs

0.5.2 / 2014-11-16
==================

- update: Connect version
- update: Sinon version

- fix: minor `csp` bugfixes

0.5.1 / 2014-11-09
==================

- new: Travis CI for everyone

- update: URLs in `package.json` for new URL

- fix: CSP would set all headers forever after receiving an unknown user agent

0.5.0 / 2014-10-28
==================

- new: most middlewares have some aliases now

- update: `xframe` now called `frameguard` (though `xframe` still works)
- update: `frameguard` chooses sameorigin by default
- update: `frameguard` understands "SAME-ORIGIN" in addition to "SAMEORIGIN"
- update: `nocache` removed from default middleware stack
- update: middleware split out into their own modules
- update: documentation
- update: supported Node version to at least 0.10.0
- update: Connect version

- fix: readme link was broken

- remove: deprecation warnings

0.4.2 / 2014-10-16
==================

- new: support preload in HSTS header

0.4.1 / 2014-08-24
==================

- update: use [helmet-crossdomain](https://github.com/helmetjs/crossdomain) to test the waters
- update: 2 spaces instead of 4 throughout the code

0.4.0 / 2014-07-17
==================

- new: nocache now sets the Expires and Pragma headers
- new: nocache now allows you to crush ETags

- update: improve the docs for nosniff
- update: revert HSTS behavior of requiring a specified max-age

- fix: allow HSTS to have a max-age of 0

0.3.2 / 2014-06-30
==================

- new: all middleware functions are named
- new: throw error with non-positive HSTS max-age

- update: add semicolons in README
- update: make some Errors more specific

- fix: `helmet()` was having issues
- fix: syntax errors in README

- remove: all comment headers; refer to the readme

0.3.1
=====

This file was started after the release of 0.3.1.

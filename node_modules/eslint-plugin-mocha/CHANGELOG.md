## 4.11.0 (June 19, 2017)

### Enhancements

* Added support for async functions in no-synchronous-tests (#138)

## 4.10.1 (June 12, 2017)

### Bug Fixes

* don't drop support for eslint 3.x (#137)

## 4.10.0 (June 12, 2017)

### Build-Related

* Add node 8 to build environments (#135)

### Enhancements

* Support ESLint 4.x (#134)

### Dependency Upgrades

* Update ramda to the latest version 🚀 (#130)
* Update pr-log to version 2.0.0 🚀 (#127)

## 4.9.0 (March 17, 2017)

### Dependency Upgrades

* Update ramda to version 0.23.0 🚀 (#121)

### Enhancements

* Add settings to support additional suite function names (#126)

### Documentation

* Organize alphabetically (#123)

## 4.8.0 (December 23, 2016)

### Enhancements

* Support MemberExpression for additionalTestFunctions (#114)
* Make no-mocha-arrows rule fixable (#112)

### Bug Fixes

* Fix no-mocha-arrow fixer (#118)

### Build-Related

* Add node 7 as travis build environment (#115)

### Documentation

* Fix rule name in CHANGELOG to match actual rule (#111)

## 4.7.0 (October 12, 2016)

### Features

* Add no-nested-tests rule (#109)

## 4.6.0 (October 3, 2016)

### Documentation

* Adds rule name to title for `valid-suite-description` documentation. (#107)
* Adds rule name to title for `valid-test-description` documentation. (#106)

### Features

* Add 'max-top-level-suites' rule (#103) (#105)

## 4.5.1 (August 30, 2016)

### Bug Fixes

* Fix crash in no-identical-title (fixes #98) (#99)

## 4.5.0 (August 29, 2016)

### Features

* Add `no-identical-title` rule (fixes #33) (#97)

## 4.4.0 (August 24, 2016)

### Features

* Add `no-hooks-for-single-case` rule (fixes #44) (#95)
* Add rule `no-return-and-callback` (fixes #88) (#94)
* Add `no-top-level-hooks` rule (fixes #37) (#87)

### Documentation

* Fix title in `no-sibling-hooks` documentation file (#92)

### Dependency Upgrades

* Update ramda to version 0.22.1 🚀 (#93)

### Build-Related

* Add editorconfig file (#91)

## 4.3.0 (August 1, 2016)

### Dependency Upgrades

* Update mocha to version 3.0.0 🚀 (#86)

### Features

* Add rule `no-sibling-hooks` (fixes #82) (#85)
* Add rule `no-hooks` (fixes #39)  (#84)

## 4.2.0 (July 26, 2016)

### Features

* Allow custom test functions (#81)

## 4.1.0 (July 22, 2016)

### Features

* no-mocha-arrows: New rule (#78)

## 4.0.0 (July 4, 2016)

### Features

* feat(rules): add 'valid-suite-description' rule (#74)
* feat(rules): add 'valid-test-description' rule (#68)

### Enhancements

* Add recommended config (#72)

### Dependency Upgrades

* Update eslint to version 3.0.0 🚀 (#70)

### Breaking Changes

* Drop support old node versions (#71)

### Documentation

* Remove fixable from no-exclusive on README (#73)
* [README] Use a more explicit config (#65)
* update to docs to match removed autofix (#64)

## 3.0.0 (June 2, 2016)

### Breaking Changes

* Remove autofix on no-exclusive-tests rule.  (#63)

## 2.2.0 (April 14, 2016)

### Features

* Add rule no-pending-tests (#59)

## 2.1.0 (April 11, 2016)

### Bug Fixes

* Support specify alias (#58)

### Dependency Upgrades

* Update ramda to version 0.21.0 🚀 (#56)
* Update ramda to version 0.20.0 🚀 (#53)

### Features

* Add rule no-skipped-tests (#55)

## 2.0.0 (February 13, 2016)

### Breaking Changes

* Update to eslint 2.0.0 (#49)

## 1.1.0 (November 13, 2015)

### Features

* Implement new rule no-global-tests (#46)

### Enhancements

* Replace lodash with ramda (#45)

## 1.0.0 (September 17, 2015)

### Enhancements

* Implement autofix for no-exclusive-tests (#34)
* Improve detection if done callback is handled (#23)
* Add integration tests (#30)
* Instrumment all sources for coverage (#29)

### Build-Related

* Add node 4 to travis-ci build (#42)

### Dependency Upgrades

* Update devDependencies (#43)
* Update eslint (#31)

### Documentation

* Add NPM Downloads badge (#41)
* Badges in README.md should only show master status (#40)

## 0.5.1 (August 20, 2015)

### Bug Fixes

* add new rule to index.js and change tests to keep that from happening (#28)

## 0.5.0 (August 19, 2015)

### Features

* Add no-synchronous-tests rule (#26)

### Dependency Upgrades

* ESLint 1.x compatibility (#25)
* Update dependencies (#22)


## 0.4.0 (June 26, 2015)

### Enhancements

* add context.only to no-exclusive-tests rule (#21)


## 0.3.0 (June 23, 2015)

### Features

* Add new rule handle-done-callback (#15)

### Build-Related

* Refactor package.json scripts (#17)
* Disable sudo on travis-ci (#10)
* Run travis build on node 0.12 and iojs (#11)
* Ignore log files and .idea folder (#9)
* Add changelog (#8)

### Documentation

* Fix links to mocha website (#16)
* Add install documentation to README (#14)

### Dependency Upgrades

* Update dependencies (#18)
* Update pr-log (#13)
* Update eslint (#12)
* Update dev dependencies (#7)


## 0.2.2 (October 25, 2014)

### Bug Fixes

* Allow all ESLint versions >= 0.8.0

## 0.2.1 (October 18, 2014)

### Build-Related

* Add recommended keywords to package.json

## 0.2.0 (September 20, 2014)

### Enhancements

* Support mochas tdd interface (fixes #4)

### Build-Related

* Allow minor version updates for eslint

### Documentation

* Docs: remove unnecessary backtick

### Dependency Upgrades

* Update devDependencies.


## 0.1.1 (September 6, 2014)

### Build-Related

* Add .npmignore

## 0.1.0 (September 6, 2014)

Initial release

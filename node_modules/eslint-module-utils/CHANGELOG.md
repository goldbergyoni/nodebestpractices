# Change Log
All notable changes to this module will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).
This change log adheres to standards from [Keep a CHANGELOG](http://keepachangelog.com).

## Unreleased


## v2.1.1 - 2017-06-22

Re-releasing v2.1.0 after vetting (again) and unable to reproduce issue.


## v2.1.0 - 2017-06-02 [YANKED]

Yanked due to critical issue with cache key resulting from #839.

### Added
- `parse` now additionally passes `filePath` to `parser` in `parserOptions` like `eslint` core does

## v2.0.0 - 2016-11-07
### Changed
- `unambiguous` no longer exposes fast test regex

### Fixed
- `unambiguous.test()` regex is now properly in multiline mode

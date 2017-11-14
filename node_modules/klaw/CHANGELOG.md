1.3.1 / 2016-10-25
------------------
### Added
- `graceful-fs` added as an `optionalDependencies`. Thanks [ryanzim]!

1.3.0 / 2016-06-09
------------------
### Added
- `filter` option to pre-filter and not walk directories.

1.2.0 / 2016-04-16
------------------
- added support for custom `fs` implementation. Useful for https://github.com/tschaub/mock-fs

1.1.3 / 2015-12-23
------------------
- bugfix: if `readdir` error, got hung up. See: https://github.com/jprichardson/node-klaw/issues/1

1.1.2 / 2015-11-12
------------------
- assert that param `dir` is a `string`

1.1.1 / 2015-10-25
------------------
- bug fix, options not being passed

1.1.0 / 2015-10-25
------------------
- added `queueMethod` and `pathSorter` to `options` to affect searching strategy.

1.0.0 / 2015-10-25
------------------
- removed unused `filter` param
- bugfix: always set `streamOptions` to `objectMode`
- simplified, converted from push mode (streams 1) to proper pull mode (streams 3)

0.1.0 / 2015-10-25
------------------
- initial release

<!-- contributors -->
[ryanzim]: https://github.com/ryanzim

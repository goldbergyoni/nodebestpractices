# v1.0.0

No known breaking changes, we are simply complying with semver from here on out.

Changes:

- Start using a changelog!
- Add `forEachOf` for iterating over Objects (or to iterate Arrays with indexes available) (#168 #704 #321)
- Detect deadlocks in `auto` (#663)
- Better support for require.js (#527)
- Throw if queue created with concurrency `0` (#714)
- Fix unneeded iteration in `queue.resume()` (#758)
- Guard against timer mocking overriding `setImmediate` (#609 #611)
- Miscellaneous doc fixes (#542 #596 #615 #628 #631 #690 #729)
- Use single noop function internally (#546)
- Optimize internal `_each`, `_map` and `_keys` functions.

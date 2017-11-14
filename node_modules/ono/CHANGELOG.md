# Change Log
All notable changes will be documented in this file.
`ono` adheres to [Semantic Versioning](http://semver.org/).


## [v4.0.0](https://github.com/BigstickCarpet/ono/tree/v4.0.0) (2017-07-07)

The `err` parameter (see [the API docs](https://github.com/BigstickCarpet/ono#api)) can now be any type of object, not just an `instanceof Error`. This allows for errors that don't extend from the `Error` class, such as [`DOMError`](https://developer.mozilla.org/en-US/docs/Web/API/DOMError), [`DOMException`](https://developer.mozilla.org/en-US/docs/Web/API/DOMException), and custom error types.

> **NOTE:** This should **not** be a breaking change, but I'm bumping the major version number out of an abundance of caution.

[Full Changelog](https://github.com/BigstickCarpet/ono/compare/v3.1.0...v4.0.0)


## [v3.1.0](https://github.com/BigstickCarpet/ono/tree/v3.0.0) (2017-06-01)

I removed the direct dependency on [Node's `util.format()`](https://nodejs.org/api/util.html#util_util_format_format_args), which was needlessly bloating the browser bundle. Instead, I now import [`format-util`](https://www.npmjs.com/package/format-util), which a much more [lightweight browser implementation](https://github.com/tmpfs/format-util/blob/f88c550ef10c5aaadc15a7ebab595f891bb385e1/format.js).  There's no change when running in Node.js, because `format-util` simply [exports `util.format()`](https://github.com/tmpfs/format-util/blob/392628c5d45e558589f2f19ffb9d79d4b5540010/index.js#L1).

[Full Changelog](https://github.com/BigstickCarpet/ono/compare/v3.0.0...v3.1.0)


## [v3.0.0](https://github.com/BigstickCarpet/ono/tree/v3.0.0) (2017-06-01)

- Updated all dependencies and verified support for Node 8.0
- Ono no longer appears in error stack traces, so errors look like they came directly from your code

[Full Changelog](https://github.com/BigstickCarpet/ono/compare/v2.0.0...v3.0.0)


## [v2.0.0](https://github.com/BigstickCarpet/ono/tree/v2.0.0) (2015-12-14)

- Did a major refactoring and code cleanup
- Support for various browser-specific `Error.prototype` properties (`fileName`, `lineNumber`, `sourceURL`, etc.)
- If you define a custom `toJSON()` method on an error object, Ono will no longer overwrite it
- Added support for Node's `util.inspect()`

[Full Changelog](https://github.com/BigstickCarpet/ono/compare/v1.0.22...v2.0.0)

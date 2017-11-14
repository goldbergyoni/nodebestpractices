# Path-to-RegExp

> Turn an Express-style path string such as `/user/:name` into a regular expression.

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

## Installation

```
npm install path-to-regexp --save
```

## Usage

```javascript
var pathToRegexp = require('path-to-regexp')

// pathToRegexp(path, keys, options)
// pathToRegexp.parse(path)
// pathToRegexp.compile(path)
```

- **path** An Express-style string, an array of strings, or a regular expression.
- **keys** An array to be populated with the keys found in the path.
- **options**
  - **sensitive** When `true` the route will be case sensitive. (default: `false`)
  - **strict** When `false` the trailing slash is optional. (default: `false`)
  - **end** When `false` the path will match at the beginning. (default: `true`)
  - **delimiter** Set the default delimiter for repeat parameters. (default: `'/'`)

```javascript
var keys = []
var re = pathToRegexp('/foo/:bar', keys)
// re = /^\/foo\/([^\/]+?)\/?$/i
// keys = [{ name: 'bar', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }]
```

**Please note:** The `RegExp` returned by `path-to-regexp` is intended for use with pathnames or hostnames. It can not handle the query strings or fragments of a URL.

### Parameters

The path string can be used to define parameters and populate the keys.

#### Named Parameters

Named parameters are defined by prefixing a colon to the parameter name (`:foo`). By default, the parameter will match until the following path segment.

```js
var re = pathToRegexp('/:foo/:bar', keys)
// keys = [{ name: 'foo', prefix: '/', ... }, { name: 'bar', prefix: '/', ... }]

re.exec('/test/route')
//=> ['/test/route', 'test', 'route']
```

**Please note:** Named parameters must be made up of "word characters" (`[A-Za-z0-9_]`).

```js
var re = pathToRegexp('/(apple-)?icon-:res(\\d+).png', keys)
// keys = [{ name: 0, prefix: '/', ... }, { name: 'res', prefix: '', ... }]

re.exec('/icon-76.png')
//=> ['/icon-76.png', undefined, '76']
```

#### Modified Parameters

##### Optional

Parameters can be suffixed with a question mark (`?`) to make the parameter optional. This will also make the prefix optional.

```js
var re = pathToRegexp('/:foo/:bar?', keys)
// keys = [{ name: 'foo', ... }, { name: 'bar', delimiter: '/', optional: true, repeat: false }]

re.exec('/test')
//=> ['/test', 'test', undefined]

re.exec('/test/route')
//=> ['/test', 'test', 'route']
```

##### Zero or more

Parameters can be suffixed with an asterisk (`*`) to denote a zero or more parameter matches. The prefix is taken into account for each match.

```js
var re = pathToRegexp('/:foo*', keys)
// keys = [{ name: 'foo', delimiter: '/', optional: true, repeat: true }]

re.exec('/')
//=> ['/', undefined]

re.exec('/bar/baz')
//=> ['/bar/baz', 'bar/baz']
```

##### One or more

Parameters can be suffixed with a plus sign (`+`) to denote a one or more parameter matches. The prefix is taken into account for each match.

```js
var re = pathToRegexp('/:foo+', keys)
// keys = [{ name: 'foo', delimiter: '/', optional: false, repeat: true }]

re.exec('/')
//=> null

re.exec('/bar/baz')
//=> ['/bar/baz', 'bar/baz']
```

#### Custom Match Parameters

All parameters can be provided a custom regexp, which overrides the default (`[^\/]+`).

```js
var re = pathToRegexp('/:foo(\\d+)', keys)
// keys = [{ name: 'foo', ... }]

re.exec('/123')
//=> ['/123', '123']

re.exec('/abc')
//=> null
```

**Please note:** Backslashes need to be escaped with another backslash in strings.

#### Unnamed Parameters

It is possible to write an unnamed parameter that only consists of a matching group. It works the same as a named parameter, except it will be numerically indexed.

```js
var re = pathToRegexp('/:foo/(.*)', keys)
// keys = [{ name: 'foo', ... }, { name: 0, ... }]

re.exec('/test/route')
//=> ['/test/route', 'test', 'route']
```

#### Asterisk

An asterisk can be used for matching everything. It is equivalent to an unnamed matching group of `(.*)`.

```js
var re = pathToRegexp('/foo/*', keys)
// keys = [{ name: '0', ... }]

re.exec('/foo/bar/baz')
//=> ['/foo/bar/baz', 'bar/baz']
```

### Parse

The parse function is exposed via `pathToRegexp.parse`. This will return an array of strings and keys.

```js
var tokens = pathToRegexp.parse('/route/:foo/(.*)')

console.log(tokens[0])
//=> "/route"

console.log(tokens[1])
//=> { name: 'foo', prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '[^\\/]+?' }

console.log(tokens[2])
//=> { name: 0, prefix: '/', delimiter: '/', optional: false, repeat: false, pattern: '.*' }
```

**Note:** This method only works with Express-style strings.

### Compile ("Reverse" Path-To-RegExp)

Path-To-RegExp exposes a compile function for transforming an Express-style path into a valid path.

```js
var toPath = pathToRegexp.compile('/user/:id')

toPath({ id: 123 }) //=> "/user/123"
toPath({ id: 'café' }) //=> "/user/caf%C3%A9"
toPath({ id: '/' }) //=> "/user/%2F"

toPath({ id: ':' }) //=> "/user/%3A"
toPath({ id: ':' }, { pretty: true }) //=> "/user/:"

var toPathRepeated = pathToRegexp.compile('/:segment+')

toPathRepeated({ segment: 'foo' }) //=> "/foo"
toPathRepeated({ segment: ['a', 'b', 'c'] }) //=> "/a/b/c"

var toPathRegexp = pathToRegexp.compile('/user/:id(\\d+)')

toPathRegexp({ id: 123 }) //=> "/user/123"
toPathRegexp({ id: '123' }) //=> "/user/123"
toPathRegexp({ id: 'abc' }) //=> Throws `TypeError`.
```

**Note:** The generated function will throw on invalid input. It will do all necessary checks to ensure the generated path is valid. This method only works with strings.

### Working with Tokens

Path-To-RegExp exposes the two functions used internally that accept an array of tokens.

* `pathToRegexp.tokensToRegExp(tokens, options)` Transform an array of tokens into a matching regular expression.
* `pathToRegexp.tokensToFunction(tokens)` Transform an array of tokens into a path generator function.

#### Token Information

* `name` The name of the token (`string` for named or `number` for index)
* `prefix` The prefix character for the segment (`/` or `.`)
* `delimiter` The delimiter for the segment (same as prefix or `/`)
* `optional` Indicates the token is optional (`boolean`)
* `repeat` Indicates the token is repeated (`boolean`)
* `partial` Indicates this token is a partial path segment (`boolean`)
* `pattern` The RegExp used to match this token (`string`)
* `asterisk` Indicates the token is an `*` match (`boolean`)

## Compatibility with Express <= 4.x

Path-To-RegExp breaks compatibility with Express <= `4.x`:

* No longer a direct conversion to a RegExp with sugar on top - it's a path matcher with named and unnamed matching groups
  * It's unlikely you previously abused this feature, it's rare and you could always use a RegExp instead
* All matching RegExp special characters can be used in a matching group. E.g. `/:user(.*)`
  * Other RegExp features are not support - no nested matching groups, non-capturing groups or look aheads
* Parameters have suffixes that augment meaning - `*`, `+` and `?`. E.g. `/:user*`

## TypeScript

Includes a [`.d.ts`](index.d.ts) file for TypeScript users.

## Live Demo

You can see a live demo of this library in use at [express-route-tester](http://forbeslindesay.github.com/express-route-tester/).

## License

MIT

[npm-image]: https://img.shields.io/npm/v/path-to-regexp.svg?style=flat
[npm-url]: https://npmjs.org/package/path-to-regexp
[travis-image]: https://img.shields.io/travis/pillarjs/path-to-regexp.svg?style=flat
[travis-url]: https://travis-ci.org/pillarjs/path-to-regexp
[coveralls-image]: https://img.shields.io/coveralls/pillarjs/path-to-regexp.svg?style=flat
[coveralls-url]: https://coveralls.io/r/pillarjs/path-to-regexp?branch=master
[david-image]: http://img.shields.io/david/pillarjs/path-to-regexp.svg?style=flat
[david-url]: https://david-dm.org/pillarjs/path-to-regexp
[license-image]: http://img.shields.io/npm/l/path-to-regexp.svg?style=flat
[license-url]: LICENSE.md
[downloads-image]: http://img.shields.io/npm/dm/path-to-regexp.svg?style=flat
[downloads-url]: https://npmjs.org/package/path-to-regexp

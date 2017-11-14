# ieee754 [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][npm-url]

[![saucelabs][saucelabs-image]][saucelabs-url]

[travis-image]: https://img.shields.io/travis/feross/ieee754/master.svg
[travis-url]: https://travis-ci.org/feross/ieee754
[npm-image]: https://img.shields.io/npm/v/ieee754.svg
[npm-url]: https://npmjs.org/package/ieee754
[downloads-image]: https://img.shields.io/npm/dm/ieee754.svg
[saucelabs-image]: https://saucelabs.com/browser-matrix/ieee754.svg
[saucelabs-url]: https://saucelabs.com/u/ieee754

### Read/write IEEE754 floating point numbers from/to a Buffer or array-like object.

## install

```
npm install ieee754
```

## methods

`var ieee754 = require('ieee754')`

The `ieee754` object has the following functions:

```
ieee754.read = function (buffer, offset, isLE, mLen, nBytes)
ieee754.write = function (buffer, value, offset, isLE, mLen, nBytes)
```

The arguments mean the following:

- buffer = the buffer
- offset = offset into the buffer
- value = value to set (only for `write`)
- isLe = is little endian?
- mLen = mantissa length
- nBytes = number of bytes

## what is ieee754?

The IEEE Standard for Floating-Point Arithmetic (IEEE 754) is a technical standard for floating-point computation. [Read more](http://en.wikipedia.org/wiki/IEEE_floating_point).

## license

BSD 3 Clause. Copyright (c) 2008, Fair Oaks Labs, Inc.

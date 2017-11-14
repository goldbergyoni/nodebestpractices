# cookie-parser

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Parse `Cookie` header and populate `req.cookies` with an object keyed by the cookie
names. Optionally you may enable signed cookie support by passing a `secret` string,
which assigns `req.secret` so it may be used by other middleware.

## Installation

```sh
$ npm install cookie-parser
```

## API

```js
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())
```

### cookieParser(secret, options)

- `secret` a string or array used for signing cookies. This is optional and if not specified, will not parse signed cookies. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.
- `options` an object that is passed to `cookie.parse` as the second option. See [cookie](https://www.npmjs.org/package/cookie) for more information.
  - `decode` a function to decode the value of the cookie

### cookieParser.JSONCookie(str)

Parse a cookie value as a JSON cookie. This will return the parsed JSON value if it was a JSON cookie, otherwise it will return the passed value.

### cookieParser.JSONCookies(cookies)

Given an object, this will iterate over the keys and call `JSONCookie` on each value. This will return the same object passed in.

### cookieParser.signedCookie(str, secret)

Parse a cookie value as a signed cookie. This will return the parsed unsigned value if it was a signed cookie and the signature was valid, otherwise it will return the passed value.

The `secret` argument can be an array or string. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.

### cookieParser.signedCookies(cookies, secret)

Given an object, this will iterate over the keys and check if any value is a signed cookie. If it is a signed cookie and the signature is valid, the key will be deleted from the object and added to the new object that is returned.

The `secret` argument can be an array or string. If a string is provided, this is used as the secret. If an array is provided, an attempt will be made to unsign the cookie with each secret in order.

## Example

```js
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
app.use(cookieParser())

app.get('/', function(req, res) {
  console.log('Cookies: ', req.cookies)
})

app.listen(8080)

// curl command that sends an HTTP request with two cookies
// curl http://127.0.0.1:8080 --cookie "Cho=Kim;Greet=Hello"
```

### [MIT Licensed](LICENSE)

[npm-image]: https://img.shields.io/npm/v/cookie-parser.svg
[npm-url]: https://npmjs.org/package/cookie-parser
[node-version-image]: https://img.shields.io/node/v/cookie-parser.svg
[node-version-url]: https://nodejs.org/en/download
[travis-image]: https://img.shields.io/travis/expressjs/cookie-parser/master.svg
[travis-url]: https://travis-ci.org/expressjs/cookie-parser
[coveralls-image]: https://img.shields.io/coveralls/expressjs/cookie-parser/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/cookie-parser?branch=master
[downloads-image]: https://img.shields.io/npm/dm/cookie-parser.svg
[downloads-url]: https://npmjs.org/package/cookie-parser

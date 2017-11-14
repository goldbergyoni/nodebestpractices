Content Security Policy builder
===============================
[![Build Status](https://travis-ci.org/helmetjs/content-security-policy-builder.svg?branch=master)](https://travis-ci.org/helmetjs/content-security-policy-builder)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Take an object and turn it into a Content Security Policy string. Useful for building Content Security Policy libraries.

It can handle a lot of things you can you throw at it; `camelCased` or `dash-separated` directives, arrays or strings, et cetera.

Usage:

```javascript
var builder = require("content-security-policy-builder")

// default-src 'self' default.com; script-src scripts.com; whatever-src something; object-src
builder({
  directives: {
    defaultSrc: ["'self'", "default.com"],
    scriptSrc: "scripts.com",
    "whatever-src": "something",
    objectSrc: true
  }
})
```

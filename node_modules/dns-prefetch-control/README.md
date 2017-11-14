DNS prefetch control header for Express
=======================================
[![Build Status](https://travis-ci.org/helmetjs/dns-prefetch-control.svg?branch=master)](https://travis-ci.org/helmetjs/dns-prefetch-control)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[_Looking for a changelog?_](https://github.com/helmetjs/helmet/blob/master/HISTORY.md)

This middleware lets you set the `X-DNS-Prefetch-Control` to control browsers' DNS prefetching. Read more about it [on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Controlling_DNS_prefetching) and [on Chromium's docs](https://dev.chromium.org/developers/design-documents/dns-prefetching).

Usage:

```js
var dnsPrefetchControl = require('dns-prefetch-control')

// Set X-DNS-Prefetch-Control: off
app.use(dnsPrefetchControl())

// Set X-DNS-Prefetch-Control: off
app.use(dnsPrefetchControl({ allow: false }))

// Set X-DNS-Prefetch-Control: on
app.use(dnsPrefetchControl({ allow: true }))
```

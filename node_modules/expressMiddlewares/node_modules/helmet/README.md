Helmet
======
[![npm version](https://badge.fury.io/js/helmet.svg)](http://badge.fury.io/js/helmet)
[![npm dependency status](https://david-dm.org/helmetjs/helmet.svg)](https://david-dm.org/helmetjs/helmet)
[![Build Status](https://travis-ci.org/helmetjs/helmet.svg?branch=master)](https://travis-ci.org/helmetjs/helmet)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhelmetjs%2Fhelmet.svg?type=shield)](https://app.fossa.io/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Fhelmetjs%2Fhelmet?ref=badge_shield)

Helmet helps you secure your Express apps by setting various HTTP headers. *It's not a silver bullet*, but it can help!

[Looking for a version of Helmet that supports the Koa framework?](https://github.com/venables/koa-helmet)

Quick start
-----------

First, run `npm install helmet --save` for your app. Then, in an Express (or Connect) app:

```js
var express = require('express')
var helmet = require('helmet')

var app = express()

app.use(helmet())

// ...
```

It's best to `use` Helmet early in your middleware stack so that its headers are sure to be set.

You can also use its pieces individually:

```js
app.use(helmet.noCache())
app.use(helmet.frameguard())
```

You can disable a middleware that's normally enabled by default. This will disable `frameguard` but include the other defaults.

```js
app.use(helmet({
  frameguard: false
}))
```

You can also set options for a middleware. Setting options like this will *always* include the middleware, whether or not it's a default.

```js
app.use(helmet({
  frameguard: {
    action: 'deny'
  }
}))
```

*If you're using Express 3, make sure these middlewares are listed before `app.router`.*

How it works
------------

Helmet is a collection of 12 smaller middleware functions that set HTTP headers. Running `app.use(helmet())` will not include all of these middleware functions by default.

| Module | Default? |
|---|---|
| [contentSecurityPolicy](https://helmetjs.github.io/docs/csp/) for setting Content Security Policy |  |
| [expectCt](https://helmetjs.github.io/docs/expect-ct/) for handling Certificate Transparency |  |
| [dnsPrefetchControl](https://helmetjs.github.io/docs/dns-prefetch-control) controls browser DNS prefetching | ✓ |
| [frameguard](https://helmetjs.github.io/docs/frameguard/) to prevent clickjacking | ✓ |
| [hidePoweredBy](https://helmetjs.github.io/docs/hide-powered-by) to remove the X-Powered-By header | ✓ |
| [hpkp](https://helmetjs.github.io/docs/hpkp/) for HTTP Public Key Pinning |  |
| [hsts](https://helmetjs.github.io/docs/hsts/) for HTTP Strict Transport Security | ✓ |
| [ieNoOpen](https://helmetjs.github.io/docs/ienoopen) sets X-Download-Options for IE8+ | ✓ |
| [noCache](https://helmetjs.github.io/docs/nocache/) to disable client-side caching |  |
| [noSniff](https://helmetjs.github.io/docs/dont-sniff-mimetype) to keep clients from sniffing the MIME type | ✓ |
| [referrerPolicy](https://helmetjs.github.io/docs/referrer-policy) to hide the Referer header |  |
| [xssFilter](https://helmetjs.github.io/docs/xss-filter) adds some small XSS protections | ✓ |

You can see more in [the documentation](https://helmetjs.github.io/docs/).

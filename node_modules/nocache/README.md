Middleware to turn off caching
==============================
[![Build Status](https://travis-ci.org/helmetjs/nocache.svg?branch=master)](https://travis-ci.org/helmetjs/nocache)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[_Looking for a changelog?_](https://github.com/helmetjs/helmet/blob/master/HISTORY.md)

It's possible that you've got bugs in an old HTML or JavaScript file, and with a cache, some users will be stuck with those old versions. This will (try to) abolish all client-side caching.

```javascript
var nocache = require('nocache')
app.use(nocache())
```

This sets four headers, disabling a lot of browser caching:

- `Cache-Control: no-store, no-cache, must-revalidate, proxy-revalidate`
- `Pragma: no-cache`
- `Expires: 0`
- `Surrogate-Control: no-store`

Caching has performance benefits, and you lose them here. It's also possible that you'll introduce *new* bugs and you'll wish people had old resources cached, but that's less likely.

Hide X-Powered-By
=================
[![Build Status](https://travis-ci.org/helmetjs/hide-powered-by.svg?branch=master)](https://travis-ci.org/helmetjs/hide-powered-by)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Simple middleware to remove the `X-Powered-By` HTTP header if it's set.

Hackers can exploit known vulnerabilities in Express/Node if they see that your site is powered by Express (or whichever framework you use). For example, `X-Powered-By: Express` is sent in every HTTP request coming from Express, by default. This won't provide much security benefit ([as discussed here](https://github.com/strongloop/express/pull/2813#issuecomment-159270428)), but might help a tiny bit. It will also improve performance by reducing the number of bytes sent.

```javascript
var hidePoweredBy = require('hide-powered-by')
app.use(hidePoweredBy())
```

You can also explicitly set the header to something else, if you want. This could throw people off:

```javascript
app.use(hidePoweredBy({ setTo: 'PHP 4.2.0' }))
```

Note: if you're using Express, you don't need this middleware and can just do this:

```javascript
app.disable('x-powered-by')
```

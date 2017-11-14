Content Security Policy middleware
==================================
[![Build Status](https://travis-ci.org/helmetjs/csp.svg?branch=master)](https://travis-ci.org/helmetjs/csp)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[_Looking for a changelog?_](https://github.com/helmetjs/helmet/blob/master/HISTORY.md)

Content Security Policy helps prevent unwanted content being injected into your webpages; this can mitigate cross-site scripting (XSS) vulnerabilities, malicious frames, unwanted trackers, and more. If you want to learn how CSP works, check out the fantastic [HTML5 Rocks guide](http://www.html5rocks.com/en/tutorials/security/content-security-policy/), the [Content Security Policy Reference](http://content-security-policy.com/), and the [Content Security Policy specification](http://www.w3.org/TR/CSP/). This module helps set Content Security Policies.

Usage:

```javascript
var csp = require('helmet-csp')

app.use(csp({
  // Specify directives as normal.
  directives: {
    defaultSrc: ["'self'", 'default.com'],
    scriptSrc: ["'self'", "'unsafe-inline'"],
    styleSrc: ['style.com'],
    fontSrc: ["'self'", 'fonts.com'],
    imgSrc: ['img.com', 'data:'],
    sandbox: ['allow-forms', 'allow-scripts'],
    reportUri: '/report-violation',
    objectSrc: ["'none'"],
    upgradeInsecureRequests: true
  },

  // This module will detect common mistakes in your directives and throw errors
  // if it finds any. To disable this, enable "loose mode".
  loose: false,

  // Set to true if you only want browsers to report errors, not block them.
  // You may also set this to a function(req, res) in order to decide dynamically
  // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
  reportOnly: false,

  // Set to true if you want to blindly set all headers: Content-Security-Policy,
  // X-WebKit-CSP, and X-Content-Security-Policy.
  setAllHeaders: false,

  // Set to true if you want to disable CSP on Android where it can be buggy.
  disableAndroid: false,

  // Set to false if you want to completely disable any user-agent sniffing.
  // This may make the headers less compatible but it will be much faster.
  // This defaults to `true`.
  browserSniff: true
}))
```

There are a lot of inconsistencies in how browsers implement CSP. Helmet looks at the user-agent of the browser and sets the appropriate header and value for that browser. If no user-agent is matched, it will set _all_ the headers with the 2.0 spec.

Handling CSP violations
-----------------------

If you've specified a `reportUri`, browsers will POST any CSP violations to your server. Here's a simple example of a route that handles those reports:

```js
// You need a JSON parser first.
app.use(bodyParser.json({
  type: ['json', 'application/csp-report']
}))

app.post('/report-violation', function (req, res) {
  if (req.body) {
    console.log('CSP Violation: ', req.body)
  } else {
    console.log('CSP Violation: No data received!')
  }
  res.status(204).end()
})
```

Not all browsers send CSP violations in the same way, so this might require a little work.

*Note*: If you're using a CSRF module like [csurf](https://github.com/expressjs/csurf), you might have problems handling these violations without a valid CSRF token. The fix is to put your CSP report route *above* csurf middleware.

Generating nonces
-----------------

You can dynamically generate nonces to allow inline `<script>` tags to be safely evaluated. Here's a simple example:

```js
var uuid = require('node-uuid')

app.use(function (req, res, next) {
  res.locals.nonce = uuid.v4()
  next()
})

app.use(csp({
  directives: {
    scriptSrc: [
      "'self'",
      function (req, res) {
        return "'nonce-" + res.locals.nonce + "'"  // 'nonce-614d9122-d5b0-4760-aecf-3a5d17cf0ac9'
      }
    ]
  }
}))

app.use(function (req, res) {
  res.end('<script nonce="' + res.locals.nonce + '">alert(1 + 1);</script>')
})
```

Using CSP with a CDN
--------------------

The default behavior of CSP is generate headers tailored for the browser that's requesting your page. If you have a CDN in front of your application, the CDN may cache the wrong headers, rendering your CSP useless. Make sure to eschew a CDN when using this module or set the `browserSniff` option to `false`.

See also
--------

* [GitHub's CSP journey](http://githubengineering.com/githubs-csp-journey/)
* [Content Security Policy for Single Page Web Apps](https://corner.squareup.com/2016/05/content-security-policy-single-page-app.html)

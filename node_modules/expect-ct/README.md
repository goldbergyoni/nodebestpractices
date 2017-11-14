Expect-CT
=========
[![Build Status](https://travis-ci.org/helmetjs/expect-ct.svg?branch=master)](https://travis-ci.org/helmetjs/expect-ct)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

[_Looking for a changelog?_](https://github.com/helmetjs/helmet/blob/master/HISTORY.md)

The `Expect-CT` HTTP header tells browsers to expect Certificate Transparency. For more, see [this blog post](https://scotthelme.co.uk/a-new-security-header-expect-ct/) and the [in-progress spec](https://datatracker.ietf.org/doc/draft-stark-expect-ct).

Usage:

```javascript
var expectCt = require('expect-ct')

// Sets Expect-CT: max-age=123
app.use(expectCt({ maxAge: 123 }))

// Sets Expect-CT: enforce; max-age=123
app.use(expectCt({
  enforce: true,
  maxAge: 123
}))

// Sets Expect-CT: enforce; max-age=30; report-uri="http://example.com/report"
app.use(expectCt({
  enforce: true,
  maxAge: 30,
  reportUri: 'http://example.com/report'
}))
```

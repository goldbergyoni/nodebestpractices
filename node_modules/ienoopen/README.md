Internet Explorer, restrict untrusted HTML
==========================================
[![Build Status](https://travis-ci.org/helmetjs/ienoopen.svg?branch=master)](https://travis-ci.org/helmetjs/ienoopen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This middleware sets the `X-Download-Options` header to `noopen` to prevent Internet Explorer users from executing downloads in your site's context.

```javascript
var ienoopen = require('ienoopen');
app.use(ienoopen());
```

Some web applications will serve untrusted HTML for download. By default, some versions of IE will allow you to open those HTML files *in the context of your site*, which means that an untrusted HTML page could start doing bad things in the context of your pages. For more, see [this MSDN blog post](http://blogs.msdn.com/b/ie/archive/2008/07/02/ie8-security-part-v-comprehensive-protection.aspx).

This is pretty obscure, fixing a small bug on IE only. No real drawbacks other than performance/bandwidth of setting the headers, though.

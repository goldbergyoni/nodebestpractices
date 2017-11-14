"Don't infer the MIME type" middleware
======================================
[![Build Status](https://travis-ci.org/helmetjs/dont-sniff-mimetype.svg?branch=master)](https://travis-ci.org/helmetjs/dont-sniff-mimetype)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Some browsers will try to "sniff" mimetypes. For example, if my server serves *file.txt* with a *text/plain* content-type, some browsers can still run that file with `<script src="file.txt"></script>`. Many browsers will allow *file.js* to be run even if the content-type isn't for JavaScript. There are [some other vulnerabilities](http://miki.it/blog/2014/7/8/abusing-jsonp-with-rosetta-flash/), too.

This middleware to keep Chrome, Opera, and IE from doing this sniffing ([and Firefox soon](https://bugzilla.mozilla.org/show_bug.cgi?id=471020)). The following example sets the `X-Content-Type-Options` header to its only option, `nosniff`:

```javascript
var nosniff = require('dont-sniff-mimetype')
app.use(nosniff())
```

[MSDN has a good description](http://msdn.microsoft.com/en-us/library/gg622941%28v=vs.85%29.aspx) of how browsers behave when this header is sent.

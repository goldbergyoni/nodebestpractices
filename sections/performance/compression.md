# Use compression on your responses

<br/><br/>

## One Paragraph Explainer

Express.js and applications like Nginx support gzip compression for HTTP requests. This is a well used standard that can compress all response from your server. Adding this option to your API is easy to use and will give you a nice boost in performance depending on your normal response size.

<br/><br/>

## Example: Express.js

If you are using the Express library, you can compresses your requests via the [Compression](https://github.com/expressjs/compression) middleware library. Here is an example from the [Express docs](https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression):

```
const compression = require('compression')
const express = require('express')

const app = express()
app.use(compression())
```
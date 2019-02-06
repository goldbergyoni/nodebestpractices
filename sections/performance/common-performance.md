[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js security best practices

The common performance guidelines section contains best practices that are standardized in many frameworks and conventions, running an application with compression for example should be a common guideline and convention followed in every setup to achieve great performance benefits.

## ![✔] Use compression on your responses

Express.js and applications like Nginx support gzip compression for HTTP requests. This is a well used standard that can compress all response from your server. Adding this option to your API is easy to use and will give you a nice boost in performance depending on your normal response size.

## Example: Express.js

If you are using the Express library, you can compresses your requests via the [Compression](https://github.com/expressjs/compression) middleware library. Here is an example from the [Express docs](https://expressjs.com/en/advanced/best-practice-performance.html#use-gzip-compression):

```
const compression = require('compression')
const express = require('express')

const app = express()
app.use(compression())
```

<br/><br/>


## ![✔] Deal with database and external APIs in batches

When working with externnal APIs, favor the batch operations. For example, Mailchimp overs a [batch operation API](https://developer.mailchimp.com/documentation/mailchimp/reference/batches/). Using features like this can reduce the number of operations you have to send, thus speeding up response and executation time for your app.

<br/><br/>


## ![✔] Benchmark slow db calls

Monitoring your database for common and slow db calls. When viewing these queries, check the docs for how to optimize these queries or cache them. Here are links to some commong way to monitor your database queres: [postgres](https://wiki.postgresql.org/wiki/Monitoring), [mysql](https://www.digitalocean.com/community/tutorials/how-to-use-mysql-query-profiling), [mongodb](https://stackoverflow.com/questions/15204341/mongodb-logging-all-queries)

<br/><br/>

## ![✔] Analyze repeated API Calls

Using the tools above, find the most used API requests and cache the requests. One option to cache and gain a great performance is to use [Redis with NodeJS](https://community.risingstack.com/redis-node-js-introduction-to-caching/). Using an in-memory store like Redis will have faster access than disk-access DBs which leads to lower reponse time for your APIs.

<br/><br/>

## ![✔] Serve static assets from a CDN

Use services suchs as Netlify, S3, Cloudfront or similar to cache static assets like images and videos. These services are well suited and have high performance for serving these kind of assets. This will also reduce the load on your server.

<br/><br/>


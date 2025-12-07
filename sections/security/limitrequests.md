#  Limit concurrent requests using a balancer or a middleware

### One Paragraph Explainer

Rate limiting should be implemented in your application to protect a Node.js application from being overwhelmed by too many requests at the same time. Rate limiting is a task best performed with a service designed for this task, such as nginx, however it is also possible with [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package or middleware such as [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) for Express.js applications.
 
  ### Code example: pure Node.js app with [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
  ```javascript
 const http = require('http');
 const IoRedis = require('ioredis');
 const { RateLimiterRedis } = require('rate-limiter-flexible');
 
 const redisClient = new IoRedis({ enableOfflineQueue: false });

 // Maximum 20 requests per second
 const rateLimiter = new RateLimiterRedis({
   storeClient: redisClient,
   points: 20,
   duration: 1,
   blockDuration: 2, // block for 2 seconds if consumed more than 20 points per second
 });

 http.createServer(async (req, res) => {
    try {
    const rateLimiterRes = await rateLimiter.consume(req.socket.remoteAddress);
    // Some app logic here

    res.writeHead(200);
    res.end();
    } catch {
    res.writeHead(429);
    res.end('Too Many Requests');
    }
 })
   .listen(3000);
 ```

You can find [more examples in the documentation](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Code example: Express rate limiting middleware for certain routes

Using [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) npm package

```javascript
const RateLimit = require('express-rate-limit');
// important if behind a proxy to ensure client IP is passed to req.ip
app.enable('trust proxy'); 
 
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});
 
// only apply to requests that begin with /user/
app.use('/user/', apiLimiter);
```

### What Other Bloggers Say

From the [NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/):
> Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.


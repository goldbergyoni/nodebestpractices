#  Limit concurrent requests using a balancer or a middleware

### One Paragraph Explainer

Rate limiting should be implemented in your application to protect a Node.js application from being overwhelmed by too many requests at the same time. Rate limiting is a task best performed with a service designed for this task, such as nginx, however it is also possible with [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package or  middleware such as [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) for Express.js applications.
 
  ### Code example: pure NodeJS app with [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
  ```javascript
 const http = require('http');
 const redis = require('redis');
 
 const { RateLimiterRedis } = require('rate-limiter-flexible');
 
 const redisClient = redis.createClient({
   enable_offline_queue: false,
 });
 
 // Maximum 50 requests per second
 const rateLimiter = new RateLimiterRedis({
   storeClient: redisClient,
   points: 50,
   duration: 1,
   inmemoryBlockOnConsumed: 51, // If user consumes >=51 points per second
   inmemoryBlockDuration: 60, // Block it for a minute in memory, so no requests go to Redis
 });
 
 http.createServer((req, res) => {
   rateLimiter.consume(req.socket.remoteAddress)
     .then((rateLimiterRes) => {
        // Some app logic here
 
        res.writeHead(200);
        res.end()
      })
      .catch(() => {
        res.writeHead(429);
        res.end('Too Many Requests')
      });
   }
 }).listen(3000);
 ```

### Code example: Express rate limiting middleware for certain routes

Using [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) npm package

``` javascript
var RateLimit = require('express-rate-limit');
// important if behind a proxy to ensure client IP is passed to req.ip
app.enable('trust proxy'); 
 
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});
 
// only apply to requests that begin with /user/
app.use('/user/', apiLimiter);
```

### What Other Bloggers Say

From the [NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/):
> Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.


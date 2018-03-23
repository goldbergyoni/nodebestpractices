#  Limit concurrent requests using a balancer or a middleware

### One Paragraph Explainer
Rate limiting should be implemented in your application to protect a Node.js application from being overwhelmed by too many requests at the same time. Rate limiting is a task best performed with a service designed for this task, such as nginx, however it is also possible with application middleware such as [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit).

### Code example: Express rate limiting middleware for certain routes
Using [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) npm package
``` javascript
var RateLimit = require('express-rate-limit');
// important if behind a proxy to ensure client IP is passed to req.ip
app.enable('trust proxy'); 
 
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
  delayMs: 0 // disabled
});
 
// only apply to requests that begin with /user/
app.use('/user/', apiLimiter);
```
### What Other Bloggers Say
From the [NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/):
> Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.


# Ogranicz równoczesne żądania za pomocą modułu równoważącego lub oprogramowania pośredniego

### Wyjaśnienie jednym akapitem

W aplikacji należy wprowadzić ograniczenie szybkości, aby chronić aplikację Node.js przed przytłoczeniem zbyt dużą liczbą żądań jednocześnie. Ograniczanie prędkości jest zadaniem najlepiej wykonywanym za pomocą usługi zaprojektowanej do tego zadania, takiej jak nginx, jednak jest to również możliwe przy użyciu opcji [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) pakietu lub oprogramowania pośredniego, takiego jak [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) dla aplikacji Express.js.
 
  ### Przykład kodu: czysta aplikacja Node.js z [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
  ```javascript
 const http = require('http');
 const redis = require('redis');
 const { RateLimiterRedis } = require('rate-limiter-flexible');
 
 const redisClient = redis.createClient({
   enable_offline_queue: false,
 });

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

Możesz znaleźć [więcej przykładów w dokumentacji](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Przykład kodu: Expressa ograniczenie oprogramowania pośredniego dla niektórych tras

Używanie pakietu [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) npm

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

### Co mówią inni blogerzy

Z [bloga NGINX](https://www.nginx.com/blog/rate-limiting-nginx/):
> Rate limiting can be used for security purposes, for example to slow down brute‑force password‑guessing attacks. It can help protect against DDoS attacks by limiting the incoming request rate to a value typical for real users, and (with logging) identify the targeted URLs. More generally, it is used to protect upstream application servers from being overwhelmed by too many user requests at the same time.


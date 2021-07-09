# Ограничивайте одновременные запросы с использованием балансировщика или промежуточного программного обеспечения

### Объяснение в один абзац

В вашем приложении должно быть реализовано ограничение скорости, чтобы защитить приложение Node.js от чрезмерного количества одновременных запросов. Ограничение скорости - это задача, лучше всего выполняемая с помощью сервиса, предназначенного для этой задачи, такого как nginx, однако это также пакета [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) или промежуточное программное обеспечение, такое как [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) для приложений Express.js.
 
### Пример кода: чистое приложение Node.js с [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
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

Вы можете найти [больше примеров в документации](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Пример кода: промежуточное программное обеспечение для ограничения скорости для определенных маршрутов

Использование [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) пакета npm

``` javascript
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

### Что говорят другие блоггеры

Из [NGINX блога](https://www.nginx.com/blog/rate-limiting-nginx/):
> Ограничение скорости можно использовать в целях безопасности, например, для замедления атак с использованием паролей. Он может помочь защитить от DDoS-атак, ограничив частоту входящих запросов значением, типичным для реальных пользователей, и (с ведением журнала) идентифицировать целевые URL-адреса. В более общем смысле он используется для защиты вышестоящих серверов приложений от чрезмерного количества одновременных запросов пользователей.


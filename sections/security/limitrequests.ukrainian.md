# Обмежуйте одночасні запити за допомогою балансувальника або middleware

### Пояснення за один абзац

Обмеження швидкості має бути реалізовано у вашому додатку для захисту Node.js додатку від перевантаження занадто великою кількістю запитів одночасно. Обмеження швидкості — це завдання, яке найкраще виконується сервісом, призначеним для цього завдання, таким як nginx, однак це також можливо з пакетом [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) або middleware, таким як [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) для додатків Express.js.

 ### Приклад коду: чистий Node.js додаток з [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)

 ```javascript
const http = require('http');
const redis = require('redis');
const { RateLimiterRedis } = require('rate-limiter-flexible');

const redisClient = redis.createClient({
  enable_offline_queue: false,
});

// Максимум 20 запитів на секунду
const rateLimiter = new RateLimiterRedis({
  storeClient: redisClient,
  points: 20,
  duration: 1,
  blockDuration: 2, // блокувати на 2 секунди, якщо спожито більше 20 очок на секунду
});

http.createServer(async (req, res) => {
   try {
   const rateLimiterRes = await rateLimiter.consume(req.socket.remoteAddress);
   // Тут якась логіка додатку

   res.writeHead(200);
   res.end();
   } catch {
   res.writeHead(429);
   res.end('Too Many Requests');
   }
})
  .listen(3000);
```

Ви можете знайти [більше прикладів у документації](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Приклад коду: Express middleware обмеження швидкості для певних маршрутів

Використання npm пакету [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit)

```javascript
const RateLimit = require('express-rate-limit');
// важливо, якщо за проксі, щоб переконатися, що IP клієнта передається до req.ip
app.enable('trust proxy'); 
 
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 хвилин
  max: 100,
});
 
// застосовується лише до запитів, що починаються з /user/
app.use('/user/', apiLimiter);
```

### Що кажуть інші блогери

З [блогу NGINX](https://www.nginx.com/blog/rate-limiting-nginx/):
> Обмеження швидкості може використовуватися для цілей безпеки, наприклад, для уповільнення атак підбору паролів методом грубої сили. Воно може допомогти захиститися від DDoS атак, обмежуючи швидкість вхідних запитів до значення, типового для реальних користувачів, і (з логуванням) ідентифікувати цільові URL. Більш загально, воно використовується для захисту upstream серверів додатків від перевантаження занадто великою кількістю користувацьких запитів одночасно.


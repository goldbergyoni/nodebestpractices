
# 미들웨어로 병행연산 (concurrent) 요청들을 제한하라.

### 한 문단 요약

Node.js 애플리케이션이 동시에 너무 많은 요청을 받아 감당하지 못하게 되는 경우를 방지하기 위해서는 속도 제한이 반드시 구현되야만 한다. 속도 제한은 nginx와 같이 해당 작업을 위해서 디자인 된 서비스와 가장 훌륭하게 수행되는 작업이지만, 그것은 또한 [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) 패키지 또는 Express.js 어플리케이션을 위한 [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) 같은 미들웨어와도 함께 수행이 가능하다.
 
  ### 코드 예제: [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)을 사용하는 순수 Node.js 어플리케이션

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

[문서의 또 다른 예제들](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example)은 링크에서 찾을 수 있다.

### 코드 예제: 특정한 경로에 대한 Express 속도 제한 미들웨어 

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

### 다른 블로거들의 이야기

[NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/)에서 발췌
> 속도 제한은 무차별적인 암호 대입 공격을 늦추는 것과 같이 보안 목적으로 사용이 가능하다. 이는 들어오는 요청 속도를 실제 사용자에게 일반적인 값으로 제한하고, 로깅을 통해서 대상 URL을 식별해 DDoS 공격으로부터 보호하도록 돕는다. 일반적으로, 업스트림 어플리케이션 서버에 너무 많은 유저 요청이 동시에 몰려 감당하지 못하는 경우가 발생하지 않도록 방지하기 위해 사용된다.
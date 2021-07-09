# ミドルウェアを使用して同時リクエストを制限する

### 一段落説明

同時に発生する多くのリクエストから Node.js アプリケーションを守るために、レートリミットを実装する必要があります。レート制限は、nginx のような、このタスクを実装するために最も適したサービスを使うべきですが、[rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) パッケージや、[express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) のようなExpress.js アプリケーション向けのミドルウェアを使用することでも実現可能です。
 
### コード例: [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) を使用したシンプルな Node.js アプリケーション
 
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
   blockDuration: 2, // 1 秒に 20 より多いポイントが消費された場合に、2 秒間ブロックします
 });

 http.createServer(async (req, res) => {
    try {
    const rateLimiterRes = await rateLimiter.consume(req.socket.remoteAddress);
    // アプリケーションのロジックがここに入ります

    res.writeHead(200);
    res.end();
    } catch {
    res.writeHead(429);
    res.end('Too Many Requests');
    }
 })
   .listen(3000);
 ```

[ドキュメントにより多くの例](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example)があります。

### コード例: 特定のルーティングに対する Express レートリミットミドルウェア

npm パッケージ [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) を使用します。

```javascript
const RateLimit = require('express-rate-limit');
// Express アプリケーションをプロキシの背後で実行している場合、クライアントの IP アドレスが req.ip に渡されていることを保証するために重要です
app.enable('trust proxy'); 
 
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 分
  max: 100,
});
 
// /user/ で始まるリクエストにのみ適用します
app.use('/user/', apiLimiter);
```

### 他のブロガーが言っていること

[NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/) より:
> レートリミットは、ブルートフォースパスワード推測攻撃を遅らせるなど、セキュリティを目的として使用することができます。受信リクエストのレートを実際のユーザーの現実的な値に制限することで DDoS 攻撃を対策するのに役立ち、（ロギングを行うことで）狙われている URL を特定することができます。より一般的には、一度に過剰なユーザーリクエストを受けた場合に、上流のアプリケーションサーバーを保護するために使用されます。


#  Mugatu aldibereko eskaerak orekatzaile edo middlewareak erabiliz

### Azalpena

Abiadura muga ezarri beharko litzateke zure aplikazioan Node.jsren aplikazio batek gainezka egin ez dezan aldi berean eskaera gehiegi dituelako, eta hori hobeto egiten da hartarako diseinatutako zerbitzua batekin, hala nola nginx. Baina, abiadura mugatzeko pakete malgu batekin ([rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)) edo Express.js aplikazioetako abiadura-mugatzaile-malgua ([rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)) bezalako middlewareekin ere egin daiteke.

  ### Kode adibidea: Node.js aplikazio hutsa, abiadura-mugatzaile-malgua(https://www.npmjs.com/package/rate-limiter-flexible)

  ```javascript
 const http = require('http');
 const redis = require('redis');
 const { RateLimiterRedis } = require('rate-limiter-flexible');

 const redisClient = redis.createClient({
   enable_offline_queue: false,
 });

 // Gehienez 20 eskaera segunduko
 const rateLimiter = new RateLimiterRedis({
   storeClient: redisClient,
   points: 20,
   duration: 1,
   blockDuration: 2, // blokeatu 2 segunduan zehar, 20 puntu baino gehiago erabili badira segunduko
 });

 http.createServer(async (req, res) => {
    try {
    const rateLimiterRes = await rateLimiter.consume(req.socket.remoteAddress);
    // Aplikazioaren logika hemen

    res.writeHead(200);
    res.end();
    } catch {
    res.writeHead(429);
    res.end('Eskaera gehiegi');
    }
 })
   .listen(3000);
 ```
[Dokumentazioan adibide gehiago](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example) aurki dezakezu.

### Kode adibidea: abiadura mugatzeko expressa bide jakin zenbaitetarako

[Express adiadura mugatzailea](https://www.npmjs.com/package/express-rate-limit) npm paketearen erabilera

```javascript
const RateLimit = require('express-rate-limit');
// Garrantzitsua proxya badago bezeroaren IP-a req.ip-an pasa dela egiaztatzeko
app.enable('trust proxy');

const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutu
  max: 100,
});

// soilik /user/-ekin hasten diren eskaeretan ezarri
app.use('/user/', apiLimiter);
```

### Beste blogari batzuek diotena

[NGINX bloga](https://www.nginx.com/blog/rate-limiting-nginx/):
> Abiadura mugatzea segurtasun helburuak lortzeko erabil daiteke, adibidez, bortxa erabiliz pasahitzak asmatzeko erasoak moteltze aldera. DDoS erasoen aurka babesten lagun dezake sarrerako eskaera tasa benetako erabiltzaileentzako ohiko balio batera mugatuz eta (erregistroarekin batera) bideratutako URLak identifikatuz. Oro har, abiadura mugatzen da hasierako (upstream) aplikazioen zerbitzariak babesteko erabiltzaileek aldi berean eskaera gehiegi bidaltzen dutenean.


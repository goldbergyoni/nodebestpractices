# Limitez les requêtes simultanées en utilisant un équilibreur ou un middleware

### Un paragraphe d'explication

La limitation des débits doit être mise en œuvre dans votre application pour éviter qu'une application Node.js ne soit submergée par un trop grand nombre de requêtes en même temps. La limitation de débit est une tâche qui s'effectue mieux avec un service conçu pour cette tâche, comme nginx, mais elle est également possible avec le paquet [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) ou un middleware comme [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) pour les applications Express.js.
 
  ### Exemple de code : application pure Node.js avec [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
  ```javascript
 const http = require('http');
 const redis = require('redis');
 const { RateLimiterRedis } = require('rate-limiter-flexible');
 
 const redisClient = redis.createClient({
   enable_offline_queue: false,
 });

 // 20 requêtes maximum par seconde
 const rateLimiter = new RateLimiterRedis({
   storeClient: redisClient,
   points: 20,
   duration: 1,
   blockDuration: 2, // bloque pendant 2 secondes s'il est utilisé plus de 20 fois par seconde
 });

 http.createServer(async (req, res) => {
    try {
    const rateLimiterRes = await rateLimiter.consume(req.socket.remoteAddress);
    // Un peu de logique applicative ici

    res.writeHead(200);
    res.end();
    } catch {
    res.writeHead(429);
    res.end('Trop de requêtes');
    }
 })
   .listen(3000);
 ```

Vous pouvez trouver [plus d'exemples dans la documentation](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Exemple de code : middleware limitant les débits express pour certaines routes

Utilisation du paquet npm [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit)

```javascript
const RateLimit = require('express-rate-limit');
// important si placé derrière un proxy pour s'assurer que l'IP du client soit passée à req.ip
app.enable('trust proxy'); 
 
const apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});
 
// ne s'appliquent qu'aux requêtes qui commencent par /user/
app.use('/user/', apiLimiter);
```

### Ce que disent les autres blogueurs

Extrait du [blog NGINX](https://www.nginx.com/blog/rate-limiting-nginx/) :
> La limitation des débits peut être utilisée à des fins de sécurité, par exemple pour ralentir les attaques brute-force visant à deviner des mots de passe. Elle peut contribuer à la protection contre les attaques DDoS en limitant le taux de requêtes entrantes à une valeur donnée pour les utilisateurs réels, et (avec journalisation) identifier les URL ciblées. Plus généralement, il est utilisé pour protéger les serveurs d'application en amont contre les requêtes simultanées d'un trop grand nombre d'utilisateurs.


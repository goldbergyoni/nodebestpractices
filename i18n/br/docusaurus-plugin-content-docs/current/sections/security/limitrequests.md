#  Limite requests simultâneos usando um middleware

### Explicação em um Parágrafo

A limitação de taxa deve ser implementada em seu aplicativo para proteger um aplicativo Node.js de ser sobrecarregado por muitas solicitações ao mesmo tempo. A limitação de taxa é uma tarefa que é melhor executada com um serviço projetado para essa tarefa, como o nginx, mas também é possível com o pacote [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) ou com um middleware de aplicação, como [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit) para aplicações Express.js.

### Exemplo de código: aplicativo Node.js puro com [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible)
 
  ```javascript
 const http = require('http');
 const redis = require('redis');
 
 const { RateLimiterRedis } = require('rate-limiter-flexible');
 
 const redisClient = redis.createClient({
   enable_offline_queue: false,
 });
 
 // Máximo de 20 requisições por segundo
 const rateLimiter = new RateLimiterRedis({
   storeClient: redisClient,
   points: 20,
   duration: 1,
   blockDuration: 2, // bloqueia por 2 segundos se consumir mais de 20 pontos por segundo
 });
 
 http.createServer((req, res) => {
   rateLimiter.consume(req.socket.remoteAddress)
     .then((rateLimiterRes) => {
        // Alguma lógica de aplicação aqui
 
        res.writeHead(200);
        res.end();
      })
      .catch(() => {
        res.writeHead(429);
        res.end('Too Many Requests');
      });
   }
 }).listen(3000);
 ```

Você pode encontrar [mais exemplos na documentação](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example).

### Exemplo de código: Express middleware de limitação de taxa para determinadas rotas

Usando o pacote do npm [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit)

``` javascript
var RateLimit = require('express-rate-limit');
// importante se por trás de um proxy para garantir que o IP do cliente seja passado para req.ip
app.enable('trust proxy'); 
 
var apiLimiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 100,
});
 
// aplicam-se apenas a requests iniciados por /user/
app.use('/user/', apiLimiter);
```

### O que Outros Blogueiros Dizem

De [NGINX blog](https://www.nginx.com/blog/rate-limiting-nginx/):
> A limitação de taxa pode ser usada para fins de segurança, por exemplo, para retardar ataques de adivinhação de senha de força bruta. Ele pode ajudar a proteger contra ataques DDoS, limitando a taxa de solicitação de entrada a um valor típico para usuários reais e (com logs) identificar os URLs segmentados. Mais geralmente, ele é usado para proteger servidores de aplicativos upstream de serem sobrecarregados por muitas solicitações do usuário ao mesmo tempo.


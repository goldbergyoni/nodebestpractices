#  Limite requests simultâneos usando um middleware

### Explicação em um Parágrafo

A limitação de taxa deve ser implementada em seu aplicativo para proteger um aplicativo Node.js de ser sobrecarregado por muitas solicitações ao mesmo tempo. A limitação de taxa é uma tarefa que é melhor executada com um serviço projetado para essa tarefa, como o nginx, mas também é possível com um middleware de aplicação, como [express-rate-limiter](https://www.npmjs.com/package/express-rate-limit).

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


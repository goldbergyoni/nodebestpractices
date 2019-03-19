# Implemente limite de taxas para rotas de login no express

### Explicaçãao em um Parágrafo

Deixar rotas mais privilegiadas como `/ login` ou `/ admin` expostas sem limitação de taxa deixa uma aplicação em risco de ataques de dicionário de senha de força bruta. O uso de uma estratégia para limitar as solicitações para essas rotas pode impedir o sucesso disso, limitando o número de tentativas de permissão com base em uma propriedade de solicitação, como ip, ou um parâmetro de corpo, como nome de usuário/endereço de email.

Um armazenamento na memória, como Redis ou MongoDB, deve ser usado na produção para impor o limite compartilhado entre os clusters de aplicativos.

### Exemplo de código: Usando express-brute

```javascript
const ExpressBrute = require('express-brute');
const RedisStore = require('express-brute-redis');

const redisStore = new RedisStore({
  host: '127.0.0.1',
  port: 6379
});

// Comece a diminuir as solicitações após 5 tentativas mal-sucedidas de fazer login para o mesmo usuário
const loginBruteforce = new ExpressBrute(redisStore, {
  freeRetries: 5,
  minWait: 5 * 60 * 1000, // 5 minutos
  maxWait: 60 * 60 * 1000, // 1 hora
  failCallback: failCallback,
  handleStoreError: handleStoreErrorCallback
});

app.post('/login',
  loginBruteforce.getMiddleware({
    key: function (req, res, next) {
      // evitar muitas tentativas para o mesmo nome de usuário
      next(req.body.username);
    }
  }), // erro 403 se solicitamos essa rota com muita frequência
  function (req, res, next) {
    if (User.isValidLogin(req.body.username, req.body.password)) {
      // resetar o contador de falhas para um login válido
      req.brute.reset(function () {
        res.redirect('/'); // logado
      });
    } else {
      // lidar com usuário inválido
    }
  }
);
```

### O que Outros Blogueiros Dizem

Do livro Essential Node.js Security de [Liran Tal](https://leanpub.com/nodejssecurity):
> Ataques de força bruta podem ser empregados por um invasor para enviar uma série de pares de nome de usuário/senha para seus pontos de extremidade REST sobre POST ou outra API RESTful que você tenha aberto para implementá-los. Esse ataque de dicionário é muito direto e fácil de executar e pode ser executado em qualquer outra parte da sua API ou roteamento de página, sem relação com logins.

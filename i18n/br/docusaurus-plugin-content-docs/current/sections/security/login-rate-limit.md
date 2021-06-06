# Evite ataques de força bruta contra autorização

### Explicaçãao em um Parágrafo

Deixar rotas mais privilegiadas como `/ login` ou `/ admin` expostas sem limitação de taxa deixa uma aplicação em risco de ataques de dicionário de senha de força bruta. O uso de uma estratégia para limitar as solicitações para essas rotas pode impedir o sucesso disso, limitando o número de tentativas de permissão com base em uma propriedade de solicitação, como ip, ou um parâmetro de corpo, como nome de usuário/endereço de email.

### Exemplo de código: conta tentativas consecutivas de autorização com falha por um par nome de usuário e IP, e o total de falhas por endereço IP.

Usando o pacote npm: [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible).

Crie dois limitadores:
1. A primeira conta número de tentativas consecutivas com falha e permite no máximo 10 por par nome de usuário e IP.
2. O segundo bloqueia o endereço IP por um dia caso 100 tentativas malsucedidas ocorram em um dia.

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Bloqueia por 1 dia, se 100 tentativas erradas ocorrem em 1 dia
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // Guarda o número por 90 dias desde a primeira falha
  blockDuration: 60 * 60, // Bloqueia por 1 hora
});
```

Veja o exemplo completo na [Wiki do pacote rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### O que Outros Blogueiros Dizem

Do livro Essential Node.js Security de [Liran Tal](https://leanpub.com/nodejssecurity):
> Ataques de força bruta podem ser empregados por um invasor para enviar uma série de pares de nome de usuário/senha para seus pontos de extremidade REST sobre POST ou outra API RESTful que você tenha aberto para implementá-los. Esse ataque de dicionário é muito direto e fácil de executar e pode ser executado em qualquer outra parte da sua API ou roteamento de página, sem relação com logins.

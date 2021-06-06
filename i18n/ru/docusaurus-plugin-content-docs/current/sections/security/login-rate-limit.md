# Предотвращайте атаки методом грубой силы против авторизации

### Объяснение в один абзац

Если предоставить доступ к более привилегированным маршрутам, таким как `/login` или `/admin`, без ограничения скорости, то приложение подвергается риску атак с использованием словаря паролей. Использование стратегии для ограничения запросов такими маршрутами может предотвратить успех этого путем ограничения количества попыток разрешения на основе свойства запроса, такого как ip, или параметра body, такого как имя пользователя/адрес электронной почты.

### Пример кода: подсчет последовательных неудачных попыток авторизации по имени пользователя и паре IP и общее количество неудачных попыток по IP-адресу.

Использование [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) npm пакета.

Создайте два ограничителя:
1. Первый подсчитывает количество последовательных неудачных попыток и допускает максимум 10 по имени пользователя и паре IP.
2. Второй блокирует IP-адрес на день при 100 неудачных попытках в день.

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Block for 1 day, if 100 wrong attempts per day
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // Store number for 90 days since first fail
  blockDuration: 60 * 60, // Block for 1 hour
});
```

См. полный пример [rate-limiter-flexible package's Wiki](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### Что говорят другие блогеры

Из книги Essential Node.js Security [Liran Tal](https://leanpub.com/nodejssecurity):
> Атакующий может использовать атаки методом грубой силы, чтобы отправить серию пар имя пользователя/пароль вашим конечным точкам REST через POST или другой RESTful API, который вы открыли для их реализации. Такая атака по словарю очень проста и проста в исполнении и может выполняться на любых других частях вашего API или маршрутизации страниц, не связанных с логинами.

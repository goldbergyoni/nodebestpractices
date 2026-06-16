# Запобігайте brute-force атакам проти авторизації

### Пояснення за один абзац

Залишення маршрутів з вищими привілеями, таких як `/login` або `/admin`, без обмеження швидкості піддає додаток ризику атак підбору паролів за словником методом грубої сили. Використання стратегії обмеження запитів до таких маршрутів може запобігти успіху цих атак, обмежуючи кількість дозволених спроб на основі властивості запиту, такої як ip, або параметра тіла, такого як ім'я користувача/email адреса.

### Приклад коду: підрахунок послідовних невдалих спроб авторизації за парою ім'я користувача та IP і загальних невдач за IP адресою.

Використання npm пакету [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible).

Створіть два обмежувачі:
1. Перший рахує кількість послідовних невдалих спроб і дозволяє максимум 10 за парою ім'я користувача та IP.
2. Другий блокує IP адресу на добу при 100 невдалих спробах на день.

```javascript
const maxWrongAttemptsByIPperDay = 100;
const maxConsecutiveFailsByUsernameAndIP = 10;

const limiterSlowBruteByIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_ip_per_day',
  points: maxWrongAttemptsByIPperDay,
  duration: 60 * 60 * 24,
  blockDuration: 60 * 60 * 24, // Блокувати на 1 день, якщо 100 невдалих спроб на день
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'login_fail_consecutive_username_and_ip',
  points: maxConsecutiveFailsByUsernameAndIP,
  duration: 60 * 60 * 24 * 90, // Зберігати число протягом 90 днів з першої невдачі
  blockDuration: 60 * 60, // Блокувати на 1 годину
});
```

Дивіться повний приклад на [Wiki пакету rate-limiter-flexible](https://github.com/animir/node-rate-limiter-flexible/wiki/Overall-example#login-endpoint-protection).

### Що кажуть інші блогери

З книги Essential Node.js Security від [Liran Tal](https://leanpub.com/nodejssecurity):
> Brute-force атаки можуть використовуватися зловмисником для надсилання серії пар ім'я користувача/пароль до ваших REST кінцевих точок через POST або інший RESTful API, який ви відкрили для їх реалізації. Така словникова атака дуже проста і легка у виконанні і може бути виконана на будь-яких інших частинах вашого API або маршрутизації сторінок, не пов'язаних з входом.


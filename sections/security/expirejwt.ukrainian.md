# Підтримка блокування JWT

### Пояснення за один абзац

За дизайном, JWT (JSON Web Tokens) є повністю stateless, тому після підписання дійсного токена емітентом, токен може бути перевірений додатком як автентичний. Проблема, яку це спричиняє, полягає в тому, що витік токена все ще може бути використаний і не може бути відкликаний, оскільки підпис залишається дійсним, доки підпис, наданий емітентом, відповідає тому, що очікує додаток.
Через це, при використанні JWT аутентифікації, додаток повинен керувати чорним списком прострочених або відкликаних токенів для збереження безпеки користувача у випадку, коли токен потрібно відкликати.

### Приклад `express-jwt-blacklist`

Приклад запуску `express-jwt-blacklist` на проекті Node.js з використанням `express-jwt`. Зверніть увагу, що важливо не використовувати налаштування сховища за замовчуванням (in-memory) кешу `express-jwt-blacklist`, а використовувати зовнішнє сховище, таке як Redis, для відкликання токенів між багатьма процесами Node.js.

```javascript
const jwt = require('express-jwt');
const blacklist = require('express-jwt-blacklist');

blacklist.configure({
  tokenId: 'jti',
  strict: true,
  store: {
    type: 'memcached',
    host: '127.0.0.1',
    port: 11211,
    keyPrefix: 'mywebapp:',
    options: {
      timeout: 1000
    }
  }
});

app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));

app.get('/logout', (req, res) => {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### Що кажуть інші блогери

З блогу [Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):
> ...додайте рівень відкликання поверх JWT, навіть якщо це означає втрату його stateless природи.


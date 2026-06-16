# Використання HTTPS для шифрування з'єднання клієнт-сервер

<br/><br/>


### Пояснення за один абзац

Використання сервісів, таких як [Let'sEncrypt](https://letsencrypt.org/), центр сертифікації, що надає __безкоштовні__ SSL/TLS сертифікати, може допомогти зашифрувати комунікацію ваших додатків. Фреймворки Node.js, такі як [Express](http://expressjs.com/) (на основі базового модуля `https`), підтримують SSL/TLS, який можна реалізувати в кілька рядків коду.

Ви також можете налаштувати SSL/TLS на зворотному проксі, такому як [NGINX](http://nginx.org/en/docs/http/configuring_https_servers.html) або HAProxy.

<br/><br/>

### Приклад коду – Увімкнення SSL/TLS за допомогою фреймворку Express

```javascript
const express = require('express');
const https = require('https');
const app = express();
const options = {
    // Шлях слід змінити відповідно до вашого налаштування
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};
https.createServer(options, app).listen(443);
```

<br/><br/>


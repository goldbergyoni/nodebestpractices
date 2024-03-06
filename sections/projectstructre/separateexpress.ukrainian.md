# Розділіть "додаток" і "сервер" Express

<br/><br/>

### Пояснення за один абзац

Останній експрес-генератор (Express generator) має чудову практику, яку варто зберегти – декларація API відокремлена від мережевої конфігурації (порт, протокол тощо). Це дозволяє тестувати API у процесі роботи, без виконання мережевих викликів, з усіма перевагами, які це приносить: швидке виконання тестування та отримання показників покриття коду. Це також дозволяє розгортати той самий API у гнучких і різних умовах мережі. Бонус: краще відокремлення завдань і чистіший код
<br/><br/>

### Приклад коду: декларація API має міститися в app.js/app.ts

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### Приклад коду: декларація мережі сервера має знаходитися в /bin/www

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const app = require('../app');
const http = require('http');

// Отримати порт із середовища та зберегти в Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Створення HTTP-сервера.
const server = http.createServer(app);
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
import app from '../app';
import http from 'http';

// Отримати порт із середовища та зберегти в Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Створення HTTP-сервера.
const server = http.createServer(app);
```
</details>

### Приклад: протестуйте свій API у процесі роботи за допомогою [supertest](https://www.npmjs.com/package/supertest) (популярний пакет тестування)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const request = require('supertest');
const app = express();

app.get('/user', (req, res) => {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end((err, res) => {
    if (err) throw err;
  });
```
</details>


<details>
<summary><strong>Typescript</strong></summary>

```typescript
import * as request from "supertest";
const app = express();

app.get('/user', (req: Request, res: Response) => {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end((err: Error) => {
    if (err) throw err;
  });

```
</details>

# Разделяйте Express "приложение" и "сервер"

<br/><br/>

### Объяснение в один абзац

Последний генератор Express поставляется с отличной практикой, которую стоит придерживаться - объявление API отделено от конфигурации, связанной с сетью (порт, протокол и т.д.). Это позволяет тестировать API в процессе, не выполняя сетевых вызовов, со всеми преимуществами, которые он приносит в таблицу: быстрое выполнение тестирования и получение метрик покрытия кода. Это также позволяет развертывать один и тот же API в гибких и различных сетевых условиях. Бонус: лучшее разделение проблем и более чистый код

<br/><br/>

### Пример кода: объявление API, должно находиться в app.js/app.ts

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms)
```

### Пример кода: сетевое объявление сервера должно находиться в /bin/www

<details>
<summary><strong>Javascript</strong></summary>

```javascript
const app = require('../app');
const http = require('http');

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
import app from '../app';
import http from 'http';

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);
```
</details>

### Пример: протестируйте свой API в процессе, используя supertest (популярный пакет тестирования)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
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
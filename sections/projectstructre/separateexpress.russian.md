# Разделяйте Express "приложение" и "сервер"

<br/><br/>

### Объяснение в один абзац

Последний генератор Express поставляется с отличной практикой, которую стоит придерживаться - объявление API отделено от конфигурации, связанной с сетью (порт, протокол и т.д.). Это позволяет тестировать API в процессе, не выполняя сетевых вызовов, со всеми преимуществами, которые он приносит в таблицу: быстрое выполнение тестирования и получение метрик покрытия кода. Это также позволяет развертывать один и тот же API в гибких и различных сетевых условиях. Бонус: лучшее разделение проблем и более чистый код

<br/><br/>

### Пример кода: объявление API, должно находиться в app.js

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Пример кода: сетевое объявление сервера должно находиться в /bin/www

```javascript
var app = require('../app');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);
```

### Пример: протестируйте свой API в процессе, используя supertest (популярный пакет тестирования)

```javascript
const app = express();

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'tobi' });
});

request(app)
  .get('/user')
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });
````

# Oddzielna „aplikacja” i „serwer” Express

<br/><br/>

### Wyjaśnienie jednym akapitem

Najnowszy generator Express ma świetną praktykę, którą warto zachować - deklaracja API jest oddzielona od konfiguracji związanej z siecią (port, protokół itp.). Umożliwia to testowanie interfejsu API w trakcie procesu, bez wykonywania połączeń sieciowych, ze wszystkimi korzyściami, które przynosi do tabeli: szybkie wykonywanie testów i uzyskiwanie wskaźników zasięgu kodu. Pozwala także na wdrożenie tego samego interfejsu API w elastycznych i różnych warunkach sieciowych. Bonus: lepsze rozdzielenie problemów i czystszy kod

<br/><br/>

### Przykład kodu: deklaracja API, powinna znajdować się w app.js/app.ts

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### Przykład kodu: Deklaracja sieci serwera powinna znajdować się w /bin/www

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

### Przykład: przetestuj swój interfejs API za pomocą supertestu (popularny pakiet testowy)

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

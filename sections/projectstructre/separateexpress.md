# Separate Express 'app' and 'server'

<br/><br/>

### One Paragraph Explainer

The latest Express generator comes with a great practice that is worth to keep - the API declaration is separated from the network related configuration (port, protocol, etc). This allows testing the API in-process, without performing network calls, with all the benefits that it brings to the table: fast testing execution and getting coverage metrics of the code. It also allows deploying the same API under flexible and different network conditions. Bonus: better separation of concerns and cleaner code

<br/><br/>

### Code example: API declaration, should reside in app.js/app.ts

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### Code example: Server network declaration, should reside in /bin/www

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

### Example: test your API in-process using supertest (popular testing package)

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

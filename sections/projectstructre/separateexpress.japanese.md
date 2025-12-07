# Express の「アプリ」と「サーバー」を分離する

<br/><br/>

### 一段落説明

最新の Express ジェネレーターは、維持する価値がある素晴らしいプラクティスが付属しています。- API 宣言はネットワーク関連の設定 (ポート、プロトコルなど) から分離されています。これにより、ネットワークコールを実行せずに API をインプロセスでテストすることができ、高速なテスト実行やコードのカバレッジメトリクスの取得などのメリットが得られます。 また、柔軟で異なるネットワーク条件の下で同じ API をデプロイすることができます。ボーナス：懸念事項のより良い分離とよりクリーンなコード

<br/><br/>

### コード例: API 宣言は app.js/app.ts にあるべき

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### コード例: サーバーネットワーク定義は /bin/www にあるべき

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

### 例: supertest (一般的なテストパッケージ) を使用して API をインプロセスでテストする

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

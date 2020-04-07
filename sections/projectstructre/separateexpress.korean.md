# Express의 '앱'과 '서버'를 분리해라

<br/><br/>

### 한문단설명

최신 Express 생성기는 보존할만한 가치가 있는 좋은 관례가 장착되어 있다 - 네트워크 관련 설정(포트, 프로토콜 등)과 분리된 API 선언이다. 이것은 API를 제조 과정에서 네트워크 호출을 수행하지 않고도 테스트할 수 있게 하고, 빠른 테스트 실행과 코드 커버리지 측정과 같은 그 외 혜택도 고스란히 볼 수 있다. 또한 같은 API 코드를 유연하고 다른 네트워크 상태에서 배치할 수 있게 해준다. 보너스: 관심사들끼리 분리되며 코드가 깨끗해진다

<br/><br/>

### 코드 예제: API 선언, app.js/app.ts에 거주

```javascript
const app = express();
app.use(bodyParser.json());
app.use('/api/events', events.API);
app.use('/api/forms', forms);
```

### 코드 예제: 서버 네트워크 선언, /bin/www에 거주

<details>
<summary><strong>Javascript</strong></summary>


```javascript
const app = require('../app');
const http = require('http');

// 환경에서 포트를 가져와 Express에 저장.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// HTTP 서버 만듦.
const server = http.createServer(app);
```

</details>

<details>
<summary><strong>Typescript</strong></summary>


```typescript
import app from '../app';
import http from 'http';

// 환경에서 포트를 가져와 Express에 저장.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// HTTP 서버 만듦.
const server = http.createServer(app);
```

</details>

### 예: (인지도 있는 테스트 패키지) supertest를 사용해서 API를 제조 과정에서 테스트하라

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
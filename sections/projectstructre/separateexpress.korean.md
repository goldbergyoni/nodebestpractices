# Express의 app과 server를 분리하라

<br/><br/>

### 한문단 설명

최신 Express generator에서 API 선언부는 네트워크 관련 구성(포트, 프로토콜 등)과 분리되어 있는데, 이는 따를만한 훌륭한 사례입니다. 이것은 네트워크 호출을 수행하지 않고도 진행 중인 API의 빠른 실행 테스트 및 코드 커버리지를 측정 할 수 있다는 이점을 제공합니다. 또한 변경사항이 많은 여러 네트워크 조건에서 동일한 API를 배포할 수 있게 해줍니다. 더 나은 관심사의 분리 및 더 깔끔한 코드는 보너스입니다.

<br/><br/>

### Code example: API 선언은 app.js에 있어야 합니다.

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### Code example: 서버 네트워크 선언은 /bin/www에 있어야 합니다.

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

### Example: 슈퍼테스트(인기 있는 테스트 패키지)를 사용하여 진행 중인 API 테스트

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

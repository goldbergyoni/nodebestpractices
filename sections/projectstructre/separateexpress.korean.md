# Express의 `app`과 `sever`를 분리하라.

<br/><br/>

### 한 문단 설명(One Paragraph Explainer)

최신 Express generator는 API 선언과 네트워크 관련 구성(포트, 프로토콜 등)을 분리되어 있는데, 이는 따를만한 훌륭한 사례이다. 이를 통해 네트워크 호출 없이 프로세스 내에서 API를 테스트할 수 있으며, 이로 인해 빠른 테스트 실행과 코드 커버리지를 측정할 수 있다는 이점을 가질 수 있다. 또한 동일한 API를 다양한 네트워크 환경에서도 유연하게 배포할 수 있습니다. 추가 혜택: 관심사 분리 강화 및 더 깔끔한 코드

<br/><br/>

### 코드 예시: API 선언 (app.js에 위치해야 함)

```javascript
var app = express();
app.use(bodyParser.json());
app.use("/api/events", events.API);
app.use("/api/forms", forms);
```

<br/><br/>

### 코드 예시: 서버 네트워크 선언 (/bin/www에 위치해야 함)

```javascript
var app = require("../app");
var http = require("http");

/**
 * 환경변수에서 포트를 읽어와 Express에 설정
 */

var port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/**
 * HTTP 서버 생성
 */

var server = http.createServer(app);
```

### 예시: supertest(인기있는 테스트 패키지)를 사용하여 프로세스 내에서 테스트하기

```javascript
const app = express();

app.get("/user", function (req, res) {
  res.status(200).json({ name: "tobi" });
});

request(app)
  .get("/user")
  .expect("Content-Type", /json/)
  .expect("Content-Length", "15")
  .expect(200)
  .end(function (err, res) {
    if (err) throw err;
  });
```

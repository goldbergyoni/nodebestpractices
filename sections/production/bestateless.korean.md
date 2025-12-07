# 무상태(stateless)로 운영하고, 거의 매일 서버를 재부팅하라

<br/><br/>

### 한문단 요약

서버에서 일부 데이터가 누락되어 서버의 심각한 문제가 발생한 적이 있는가? 이것은 배포가 아니라 일부 로컬 자산에 대해 불필요한 종속성 때문에 발생했을 수 있다.
많은 성공적인 제품은 서버를 불사조처럼 취급한다. 이것은 손상없이 주기적으로 죽고 다시 태어난다.
즉, 서버는 일정 시간 동안 코드를 실행하고, 교체되는 하드웨어의 일부분과 같다. 이러한 접근은
- 부작용 없이 동적으로 서버를 추가 및 제거하여 확장할 수 있다.
- 각 서버의 상태를 확인하지 않아도 되므로 유지 관리가 간단해진다.

<br/><br/>

### 예시 코드: anti-patterns

```javascript
// 실수 1 : 업로드 된 파일 서버에 로컬로 저장
var multer = require('multer'); // 멀티파트 업로드 처리를 위한 express 미들웨어
var upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {});

// 실수 2: 로컬 파일 또는 메모리에 인증 정보 저장
var FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// 실수 3: 전역 객체에 정보 저장
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### 블로그 인용

[Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html)의 블로그:
> ...나는 운영을 위한 인증 서비스를 시작하는 상상을 했다.
인증 평가는 동료로 구성되며 나는 기업의 데이터 센터에 나타나 야구방망이, 전기톱, 물총을 들고 중요한 서버에 대한 설정을 한다.
평가는 운영팀이 모든 애플리케이션을 다시 가동하고 살행하는데 걸리는 시간을 기반으로 한다
This may be a daft fantasy, but there’s a nugget of wisdom here. 
이것은 어리석은 상상일 수 있지만 여기에서 작은 지혜를 옅볼 수 있다.
야구방망이는 포기해야 하지만 정기적으로 서버를 사실상 소진시키는 것이 좋다.
서버는 불사조와 같아야 하며, 정기적으로 잿더미에서 일어나야 한다...
<br/><br/>

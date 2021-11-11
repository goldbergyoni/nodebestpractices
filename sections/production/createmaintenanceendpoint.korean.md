# 유지보수 endpoint를 만들어라

<br/><br/>

### 한 문단 설명

유지관리의 endpoint는 앱코드의 한 부분인 고도로 보안된 HTTP API이며 그것의 목적은 유지보수를 기능적으로 모니터링하고 드러내기 위해 ops/production 팀으로 부터 사용되는 것이다.
예를들어, 프로세스의 힙덤프(메모리 스냅샷)를 반환할 수 있으며, 메모리 누수가 있는지에 대해 보고할 수 있으며 심지어는 REPL커맨드를 직접적으로로 실행할 수 있도록 허용한다. 이러한 endpoint는 전통적인 데브옵스 툴들(monitoring products, logs, 등등)이 특정 타입의 정보를 취합하지 못하거나 너가 그런 툴들을 사고/설치하지 않기로 선택했을 때 필요하다. 황금룰은 제품을 모니터링하고 유지보수할 수 있는 전문적인 외부 툴들을 사용하는 것이며, 이것은 보통 더욱 견고하고 정확하다. 말했다 싶이, 일반적인 툴들이 노드나 너의 앱에 있어 특정한 정보를 추출하는 데 실패하는 경우가 있다 - 예를 들어, GC가 사이클을 완료했을 때 메모리 스냅샷을 생성하길 희망한다면 - 너를위해 이를 수행할 수 있는 라이브러리는 거의 없으며, 오히려 유명한 모니터링 툴들은 이것을 기능적으로 놓칠 것이다. 이러한 endpoint를 프라이빗하고 관리자만 접근 가능하도록 유지하는 것은 중요한데, DDOS 공격의 대상이 될 수 있기 때문이다.

<br/><br/>

### 코드 예시: 코드를 통해 힙덤프 생성하기.

```javascript
const heapdump = require("heapdump");

// 요청이 인가된 것인지 확인하기
function isAuthorized(req) {
  // ...
}

router.get("/ops/heapdump", (req, res, next) => {
  if (!isAuthorized(req)) {
    return res.status(403).send("You are not authorized!");
  }

  logger.info("About to generate heapdump");

  heapdump.writeSnapshot((err, filename) => {
    console.log("heapdump file is ready to be sent to the caller", filename);
    fs.readFile(filename, "utf-8", (err, data) => {
      res.end(data);
    });
  });
});
```

<br/><br/>

### 추천 자료들

[Getting your Node.js app production ready (Slides)](http://naugtur.pl/pres3/node2prod)

▶ [Getting your Node.js app production ready (Video)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Getting your Node.js app production ready](/assets/images/createmaintenanceendpoint1.png "Getting your Node.js app production ready")

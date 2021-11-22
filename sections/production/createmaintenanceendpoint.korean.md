# ‘유지 관리용 엔드 포인트’를 따로 만들어라

<br/><br/>

### 한문단 설명

유지관리용 엔드포인트는 앱 코드의 일부분이며 매우 안전한 HTTP API이며, 이것의 목적은 운영/프로적션 팀에서 유지 관리 기능을 모니터링하고 노출하는데 있다.
예를 들어 프로세스의 heap dump (memory snapshot)를 반환하고 메모리 누수가 있는지 보고하며, REPL 명령을 직접 실행할 수 있다.
이러한 엔드포인트는 기존 DevOps tools(모니터링 제품, 로드 등)이 특정 유형의 정보를 수집하지 못하거나 당신이 이러한 도구를 사용하지 않는 것으로 결정한 경우에 필요하다.
황금률은 모니터링과 제품유지에 전문적이고 외부적인 도구를 사용하는 것이며, 이것은 일반적으로 정확하고 강력하다.
즉, 일반적인 도구가 노드 또는 앱의 특정한 정보를 추촐하지 못하는 경우가 있을 수 있다. 예를들어 당신이 GC(가비지 컬렉션) 사이클을 완료하는 순간 메모리 스냅샷을 생성하기를 원한다면, 소수의 npm 라이브러리는 이러한 작업을 수행하지만 인기있는 모니터링 도구는 이 기능을 놓칠 가능성이 높다.
유지관리용 엔드포인트가 DDOS 공격의 대상이 될 수 있으므로 관리자만 접근할 수 있도록 유지하는것이 중요하다.

<br/><br/>

### 코드 예시: 코드를 통한 heap dump 생성

```javascript
const heapdump = require('heapdump');

// 인가된 사용자 확인/
function isAuthorized(req) {
    // ...
}

router.get('/ops/heapdump', (req, res, next) => {
    if (!isAuthorized(req)) {
        return res.status(403).send('You are not authorized!');
    }

    logger.info('About to generate heapdump');

    heapdump.writeSnapshot((err, filename) => {
        console.log('heapdump file is ready to be sent to the caller', filename);
        fs.readFile(filename, "utf-8", (err, data) => {
            res.end(data);
        });
    });
});
```

<br/><br/>

### 권장 리소스

[Node.js 앱 프로덕션 준비하기 (슬라이드)](http://naugtur.pl/pres3/node2prod)

▶ [Node.js 앱 프로덕션 준비하기 (비디오)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Node.js 앱 프로덕션 준비하기](../../assets/images/createmaintenanceendpoint1.png "Node.js 앱 프로덕션 준비하기")

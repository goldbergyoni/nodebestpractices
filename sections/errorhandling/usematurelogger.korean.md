# 에러 가시성을 높이기 위해 안정된 로거를 사용하라.

### 한 문단 요약


우리는 주로 console.log를 사용힌다. 그러나, 제대로 프로젝트를 진행하기 위해서는 유명하고 오랜 시간 사랑받아온 [Winston][winston]같은 로그 모듈이나, 뛰어난 성능으로 최근 주목받고 있는 [Pino][pino]같은 로그 모듈이 필수적이다. 이런 도구들은 에러를 더 빠르게 추론할 수 있도록 한다. - (1) (debug, info, error 등) 다양한 단계에서 사용되는 로그, (2) (아래 예시 코드같이) 로그를 기록할 때에는, json객체같은 문맥적인 정보를 제공, (3) 대부분 로그 모듈에 내장된 로그 정렬 api를 사용하거나, 로그 뷰어 프로그램으로 로그를 필터링하고 점검한다. (4) Splunk같은 운영 도구를 사용하는 운영팀을 위해 로그를 적절하게 노출한다.

[pino]: https://www.npmjs.com/package/pino

우리 회사의 경우 winston 로그 모듈로 사용한다.

### Code Example – 실제 Winston logger 사용 예


```javascript
// your centralized logger object
var logger = new winston.Logger({
  // (1)에서 말한 단계적인 로그, 여기서는 info수준과 같거나 낮은 로그를 원하고 있다.
  // 즉 info보다 높은 단계인 logger.debug의 경우 로그가 기록되지 않음.
  level: 'info',
  transports: [
    // 로깅 타겟을 설정
    // 로그를 콘솔에 출력
    new winston.transports.Console(),
    // 로그를 test.log파일로 저장
    new winston.transports.File({filename:"test.log"})
  ],
  // winston내의 함수를 추가하면 다음과 같은 양식으로 출력이 가능(2)
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), json()),
});

// 위에서 선언한 Logger를 원하는 곳에서 사용
logger.info("cashwalk format logger");
// 다음과 같이 출력 됨.
{"level":"info","message":"cashwalk format logger","timestamp":"2022-01-05 16:54:37"}

```

### Code Example – Querying the log folder (searching for entries)

```javascript
var options = {
  from: new Date - 24 * 60 * 60 * 1000,
  until: new Date,
  limit: 3,
  start: 0,
  order: 'desc',
  fields: ['message'] // 메세지만 출력
};


// 앞서 선언한 logger를 활용하여 기록된 로그를 쿼리할 수 있다.
logger.query(options, function (err, results) {
  console.log(results);
});
// 다음과 같이 출력됨.
{ file: 
   [ { message: 'cashwalk format logger' },
     { message: 'cashwalk format logger' },
     { message: 'cashwalk format logger' } ] }
```

### 블로그 인용: "로거 권장사항"

블로그 Strong Loop 로부터 발췌


> 로그에 대한 다음과 같은 요구사항이 존재한다:
1. 각 로그에 대한 타임스탬프를 찍어라. 각 로그가 언제 발생했는지 알 수 있어야 한다.
2. 로깅 포멧은 기계뿐만 아니라 사람이 봐도 이해할 수 있어야 한다.
3. 설명 방식에 여러 커스텀화가 가능하도록 해라. 예를 들어, (일상적인)흔적 로그의 경우 단순히 파일에 저장하지만, 에러가 발생했을 경우 파일에 저장과 함께 이메일로 전송되는 방식을 할 수 있다.


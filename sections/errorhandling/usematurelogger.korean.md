# 에러 가시성을 높이기 위해 안정된 로거를 사용하라.

### 한 문단 요약

우리 모두는 console.log를 매우 좋아하지만, 심각한 프로젝트에는 [Pino][pino](성능에 집중하는 새로운 옵션)같은 평판이 좋고 지속적인 로거가 필수적이다. 높은 성능의 로깅 도구는 에러와 가능한 문제들을 식별하는 데 도움을 준다. 로깅에 대한 권장사항은 다음과 같다.

[pino]: https://www.npmjs.com/package/pino

1. 다양한 수준(debug, info, error 등)으로 자주 로그하라.
2. 로깅할 때, 컨텍스트에 대한 정보를 JSON 객체로 제공하라.
3. (대부분의 로거들에 내장이 되어있는) 로그 조회 API 또는 로그 뷰어 소프트웨어로 로그를 모니터하고 필터링하라.
4. Splunk와 같은 운영 인텔리전스 도구들로 로그 내용에 대해 노출시키고 관리하라.

### Code Example – Winston Logger in action

```javascript
// your centralized logger object
var logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

// custom code somewhere using the logger
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });

```

### Code Example – Querying the log folder (searching for entries)

```javascript
var options = {
  from: new Date - 24 * 60 * 60 * 1000,
  until: new Date,
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};


// Find items logged between today and yesterday.
winston.query(options, function (err, results) {
  // execute callback with results
});
```

### 블로그 인용: "로거 권장사항"

블로그 Strong Loop 로부터 발췌

> (로거를 위한) 몇 가지 권장사항을 확실히 하자.
1. 각 로그 라인마다 타임스탬프를 남겨라. 이것은 하나의 자명한 일이다. — 당신은 각 로그 입력이 언제 발생했는지를 알 수 있어야만 한다.
2. 로깅 형식은 기계만이 아니라 사람 역시 쉽게 이해가 가능하도록 해야한다.
3. 여러 구상 가능한 대상 스트림들을 허용하라. 예를 들어, 당신은 하나의 파일에 대해서 추적 로그들을 작성할 수 있다. 하지만 오류가 발생하면, 같은 파일에 입력한 뒤 에러 파일로 보내고, 동시에 이메일도 보내라.

# 이벤트 루프를 차단하지 마라.

<br/><br/>
Node는 여러 개의 queue를 통해 회전하는 싱글 스레드에서 대부분의 이벤트 루프를 처리한다. 높은 복잡도의 작업들, 대규모의 json 파싱, 거대한 배열들에 대한 로직 적용, 안전하지 않은 정규식 쿼리들, 그리고 대규모의 IO 작업 등은 이벤트 루프를 중단시켜버릴 수 있는 작업들의 일부이다. 이런 CPU 집약적인 작업을 특정한 목적이 있는 전용 서비스(예: 작업 서버)로 오프로드하거나, 또는 긴 작업들을 작은 단계로 나누고 Worker Pool을 사용하는 것은 이벤트 루프 차단을 피할 수 있는 일부 예시에 해당한다.

### 예제: 이벤트 루프 차단
[Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem)으로부터 가져온 예제를 살펴보자.
```javascript
function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

server.get('/', (req, res, next) => {
  sleep(30)
  res.send({})
  next()
})
```
우리가 해당 앱을 벤치마크했을 때, 긴 while 루프로 인한 시간 지연을 보기 시작할 것이다.
 
### 벤치마크 실행
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`


### 결과
```
─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬───────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max       │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼───────────┤
│ Latency │ 270 ms │ 300 ms │ 328 ms │ 331 ms │ 300.56 ms │ 38.55 ms │ 577.05 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬───────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Req/Sec   │ 31      │ 31      │ 33      │ 34     │ 32.71   │ 1.01  │ 31      │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
```

## 이벤트 루프의 이미지
![Event Loop](/assets/images/event-loop.png "Event Loop")

>여기 당신의 노트 서버를 빠르게 유지하기 위한 경험에 기반한 법칙이 존재한다: 노드는 주어진 시간에 대해서 각 클라이언트와 관련된 작업이 "작을" 경우에 빠르다.
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> 많은 사람들은 이벤트 루프, 에러 처리, 비동기화 등과 같은 개념의 이해 부족으로 인하여 초기 몇 개의 Node.js 앱에 실패한다.
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)

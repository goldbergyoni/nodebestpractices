# 不要堵塞事件循环（event loop）

<br/><br/>

node主要处理在单个线程上轮转多个队列的事件循环。高复杂性的操作，解析大型json，大型数组上的逻辑，不安全的正则表达式查询和大型IO操作，都是可能导致事件循环停滞的一系列操作。通过专用服务（比如，job server）避免CPU密集型任务，或者拆分大任务，然后使用worker pool是如何避免阻塞事件循环的一些示例。

### 示例：堵塞事件循环（event loop）
让我们看一下来自[Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem)的示例。
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

And when we benchmark this app, we start to see the latency caused by the long
while loop.

### Run the benchmark 
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### 结果

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

## Image of the Event Loop
![Event Loop](/assets/images/event-loop.png "Event Loop")

>Here's a good rule of thumb for keeping your Node server speedy: Node is fast when the work associated with each client at any given time is "small".
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Most people fail their first few NodeJS apps merely due to the lack of understanding of the concepts such as the Event Loop, Error handling and asynchrony 
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)

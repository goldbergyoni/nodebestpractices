Node handles the Event Loop on a single thread rotating through multiple queues. Operations with high complexity, large json parsing, unsafe regex querieies, and long awaited promises are some of the operations that can cause the event loop to stall. Preventing this is as easy as setting up monitoring for the the Event Loop and resolving the blocker.

## Example
Let's take a look at an example from [Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem).
```
const restify = require('restify')
const server = restify.createServer()

function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

server.get('/', function (req, res, next) {
  sleep(30)
  res.send({})
  next()
})

server.listen(3000)

process.on('SIGINT', function () {
  console.error('Caught SIGINT, shutting down.')
  server.close()
})
```

And when we benchmark this app, we start to see the latency caused by the long
while loop.

### Run the benchmark 
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### The results

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
│ Bytes/Sec │ 4.65 kB │ 4.65 kB │ 4.95 kB │ 5.1 kB │ 4.91 kB │ 151 B │ 4.65 kB │
```

## Image of the Event Loop
![1*aU5dr98pxTsZ4AMfnA6lNA.png](https://cdn-images-1.medium.com/max/1600/1*aU5dr98pxTsZ4AMfnA6lNA.png)

>Here's a good rule of thumb for keeping your Node server speedy: Node is fast when the work associated with each client at any given time is "small".
>[Don't Block the Event Loop (or the Worker Pool) \| Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Most people fail their first few NodeJS apps merely due to the lack of understanding of the concepts such as the Event Loop, Error handling and asynchrony 
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)
# Nie blokuj pętli zdarzeń

<br/><br/>

Node obsługuje pętlę zdarzeń głównie w jednym wątku obracającym się przez wiele kolejek. Operacje o wysokim stopniu złożoności, dużym parsowaniu jsonów, stosowaniu logiki na wielkich tablicach, niebezpiecznych zapytaniach regularnych i dużych operacjach We / Wy to niektóre z operacji, które mogą powodować zawieszanie się pętli zdarzeń. Unikaj odciążania zadań intensywnie wykorzystujących procesor do dedykowanej usługi (np. serwera zadań) lub dzielenia długich zadań na małe kroki, a następnie używanie puli pracowników to kilka przykładów tego, jak uniknąć blokowania pętli zdarzeń.

### Przykład: blokowanie pętli zdarzeń
Spójrzmy na przykład z [Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem).
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

Kiedy porównujemy tę aplikację, zaczynamy dostrzegać opóźnienia spowodowane długą
pętlą while.

### Uruchom benchmark
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### Wyniki

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

## Obraz pętli zdarzeń
![Event Loop](../../assets/images/event-loop.png "Event Loop")

>Here's a good rule of thumb for keeping your Node server speedy: Node is fast when the work associated with each client at any given time is "small".
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Most people fail their first few NodeJS apps merely due to the lack of understanding of the concepts such as the Event Loop, Error handling and asynchrony 
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)

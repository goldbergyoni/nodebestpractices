# No bloquees el event loop

<br/><br/>

Node maneja el Event Loop mayormente en un único hilo rotando a través de múltiples colas. Operaciones con alta complejidad, conversión de JSON largos, aplicar lógica sobre grandes arreglos, consultas inseguras de regex, y largas operaciones de IO son algunas de las operaciones que pueden causar que el Event Loop se sobrecargue. Evitar esta descarga de tareas intensas de la CPU a un servicio dedicado (por ejemplo, un job server), o separar largas tareas en pequeños pasos y luego usar el Worker Pool son algunos ejemplos de cómo evitar bloquear el Event Loop.

### Ejemplo: bloqueando el event loop
Observemos un ejemplo de [Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem).
```javascript
function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

server.get('/', function (req, res, next) {
  sleep(30)
  res.send({})
  next()
})
```

Y cuando corremos un benchmark de la aplicación, vemos la latencia causada por el largo
while loop.

### Corremos el benchmark
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### Los resultados

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

## Imagen del Event Loop
![Event Loop](/assets/images/event-loop.png "Event Loop")

>Here's a good rule of thumb for keeping your Node server speedy: Node is fast when the work associated with each client at any given time is "small".
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Esta es una manera práctica de mantener tu servidor de Node rápido: Node es rápido cuando el trabajo asociado con cada cliente en cualquier momento dado es "pequeño".
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Most people fail their first few NodeJS apps merely due to the lack of understanding of the concepts such as the Event Loop, Error handling and asynchrony 
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://blog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)

> La mayoría de las personas fracasan en sus primeras aplicaciones de NodeJS principalmente debido a la falta de entendimiento de los conceptos como el Event Loop, manejo de errores y asíncronismo.
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)

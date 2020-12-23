# No bloquees el event loop

<br/><br/>

Node maneja el Event Loop mayormente en un único hilo rotando a través de múltiples colas. Operaciones con alta complejidad, parseo de largos json, aplicar lógica sobre grandes arrays, consultas inseguras de regex, y largas operaciones de IO son algunas de las operaciones que pueden causar que el Event Loop se sobrecargue. Evitar esta descarga de tareas intensas de la CPU a un servicio dedicado (por ejemplo, un job server), o separar largas tareas en pequeños pasos y luego usar el Worker Pool son algunos ejemplos de como evitar bloquear el Event Loop.

### Ejemplo: bloqueando el event loop
Observemos un ejemplo de [Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem).
```
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

>Esta es una buena regla del pulgar para mantener tu servidor de Node rápido: Node es rápido cuando el trabajo asociado con cada cliente en cualquier momento dado es "pequeño".
>[Don't Block the Event Loop (or the Worker Pool) | Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> La mayoría de las personas fallan en sus primeras aplicaciones de NodeJS principalmente debido a la falta de entendimiento de los conceptos como el del Event Loop, manejo de errores y asincronismo.
[Event Loop Best Practices — NodeJS Event Loop Part 5](https://jsblog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)
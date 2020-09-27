# Capturar promises denegadas sin controlar

<br/><br/>

### Párrafo de explicación

Normalmente, la mayor parte de código en aplicaciones Node.js/Express modernas funciona encerrado en "promises", ya sea en el interior de un .then, como en una función callback o en un bloque catch. Sorprendentemente, a menos que el desarrollador no olvide añadir una cláusula .catch, los errores que lanzados en estos sitios no son controlados por uncaughtException y desaparecen. Las últimas versiones de Node incorporan un mensaje de warning ante estas situaciones y, a pesar de la ayuda que esto supone cuando las cosas van mal, resulta evidente que no es el método adecuado para dar por resuelto el tema. La solución más sencilla es nunca olvidar cláusulas .catch en cada cadena de promises y redirigir el error al gestor de errores centralizado. Sin embargo, centrar tu estrategia de gestión de errores puramente en la disciplina del desarrollador es ciertamente frágil. Por lo tanto, se recomienda muchísimo utilizar una alternativa elegante: suscribirse a `process.on('unhandledRejection', callback)` – esto asegurará que cualquier error provinente de una promise, de no gestionarse localmente, siempre reciba su correcta gestión.

<br/><br/>

### Código de ejemplo: estos errores no serán capturados por ningún manejador de errores (excepto unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### Código de ejemplo: Capturando promesas no resueltas y rechazadas

```javascript
process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection, since we already have fallback handler for unhandled errors (see below), let throw and let him handle that
  throw reason;
});
process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### Cita de blog: "Si puedes cometer un error, en algún punto lo harás"

Del blog James Nelson

> Vamos a probar tu entendimiento. Cuál de los siguientes esperarías que imprima un error en la consola?

```javascript
Promise.resolve('promised value').then(() => {
  throw new Error('error');
});

Promise.reject('error value').catch(() => {
  throw new Error('error');
});

new Promise((resolve, reject) => {
  throw new Error('error');
});
```

> I don’t know about you, but my answer is that I’d expect all of them to print an error. However, the reality is that a number of modern JavaScript environments won’t print errors for any of them.The problem with being human is that if you can make a mistake, at some point you will. Keeping this in mind, it seems obvious that we should design things in such a way that mistakes hurt as little as possible, and that means handling errors by default, not discarding them.

> No sé tú, pero mi respuesta is que esperaría que todos impriman un error. Sin embargo, la realidad es que algunos ambientes modernos de JavaScript no imprimirán errores para ninguno de ellos. El problema de ser humano es que puedes cometer errores, en algún punto lo harás. Teniendo esto en cuenta, parece obvio que deberíamos diseñas las cosas de una forma tal que los errores lastimen lo menos posible, y eso significa manejar los errores por default, no descartarlos.

# Retornando promesas

<br>

### Párrafo de explicación

Cuando ocurre un error, ya sea en un flujo síncrono o asíncrono. Es imperativo tener un stacktrace completo del flujo del error. Sorprendentemente, si una función asíncrona retorna una promesa (Llama a otra función asíncrona sin esperar), si llegase a ocurrir un error entonces la función llamada no aparecerá en el stacktrace. Esto dejará a la persona que diagnostica el error con información parcial. Para empeorar la situación, el error causa efectos secundarios en la función que llama. Existe una función v8 llamada "zero-cost async stacktraces" que permiten a los stacktraces no ser cortados en el `await` mas reciente. Pero debido a los detalles de implementación no triviales, no funcionará si el valor retornado de una función (síncrona o asíncrona) es una promesa. Entonces, para evitar huecos en el stacktrace al retornar promesas que serán rechazadas, siempre debemos resolver promesas con `await` antes de retornarlas de las funciones.

<br>

### Código de ejemplo anti-patrón: Llamando función asíncrona sin esperar

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  throw Error(msg)
}

async function returnWithoutAwait () {
  return throwAsync('missing returnWithoutAwait in the stacktrace')
}

// 👎 will NOT have returnWithoutAwait in the stacktrace
// 👎 NO tendrá returnWithoutAwait en el stacktrace
returnWithoutAwait().catch(console.log)
```

Tendría de salida

```
Error: missing returnWithoutAwait in the stacktrace
    at throwAsync ([...])
```
</p>
</details>

<br>

### Código de ejemplo: Llamando y esperando apropiadamente

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync(msg) {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  throw Error(msg)
}

async function returnWithAwait() {
  return await throwAsync('with all frames present')
}

// 👍 tendrá returnWithAwait en el stacktrace
returnWithAwait().catch(console.log)
```

Tendría de salida

```
Error: with all frames present
    at throwAsync ([...])
    at async returnWithAwait ([...])
```

</p>
</details>

<br>

### Código de ejemplo anti-patrón: Retornar una promesa sin marcar la función como asíncrona

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  throw Error('missing syncFn in the stacktrace')
}

function syncFn () {
  return throwAsync()
}

async function asyncFn () {
  return await syncFn()
}

// 👎 syncFn no estaría en el stacktrace porque retorna una promesa siendo síncrona
asyncFn().catch(console.log)
```

Tendría de salida

```
Error: missing syncFn in the stacktrace
    at throwAsync ([...])
    at async asyncFn ([...])
```

</p>
</details>

<br>

### Código de ejemplo: Marcando una función que retorna una promesa como asíncrona

<details><summary>Javascript</summary>
<p>

```javascript
async function throwAsync () {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  throw Error('with all frames present')
}

async function changedFromSyncToAsyncFn () {
  return await throwAsync()
}

async function asyncFn () {
  return await changedFromSyncToAsyncFn()
}

// 👍 ahora changedFromSyncToAsyncFn estará en el stacktrace
asyncFn().catch(console.log)
```

Tendría de salida

```
Error: with all frames present
    at throwAsync ([...])
    at changedFromSyncToAsyncFn ([...])
    at async asyncFn ([...])
```

</p>
</details>

<br/>

### Código de ejemplo anti-patrón: Uso directo de un callback asíncrono cuando se espera callback síncrono

<details><summary>Javascript</summary>
<p>

```javascript
async function getUser (id) {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  if (!id) throw Error('stacktrace is missing the place where getUser has been called')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👎 the stacktrace would include getUser function but would give no clue on where it has been called
// 👎 El stacktrace incluirá la función getUser pero tendría idea de donde fue llamada
Promise.all(userIds.map(getUser)).catch(console.log)
```

Tendría de salida

```
Error: stacktrace is missing the place where getUser has been called
    at getUser ([...])
    at async Promise.all (index 2)
```

*Nota*: Puede parecer que `Promise.all (index 2)` puede ayudar a entender donde fue llamada la función `getUser`, pero debido a [Un bug completamente distinto en v8] (https://bugs.chromium.org/p/v8/issues/detail?id=9023), `(index 2)` es una línea de los internos de v8

</p>
</details>

<br>

### Ejemplo de código: envolviendo un callback asíncrono en una función asíncrona dummy antes de pasarla como un callback síncrono

<details><summary>Javascript</summary>
<p>

*Nota 1* Si puedes modificar el código que va a invocar al callback, solo convierte la función a síncrona y agrega `await` antes del callback. Abajo asumo que no puede cambiar el código que la está invocando al callback (o el cambio es inaceptable por problemas de compatibilidad).

*Nota 2*: Es muy probable que el uso de un callback asíncrono cuando se espera uno síncrono, no funcione en absoluto. Esto no es acerca de como arreglar el código que no está funcionando. Es acerca de como arreglar el stacktrace en caso de que el código esté funcionando como esperado


```javascript
async function getUser (id) {
  await null // necesita esperar algo para ser realmente asíncrona (ver nota #2)
  if (!id) throw Error('with all frames present')
  return {id}
}

const userIds = [1, 2, 0, 3]

// 👍 Ahora la línea de abajo está en el stacktrace
Promise.all(userIds.map(async id => await getUser(id))).catch(console.log)
```

Tendría de salida

```
Error: with all frames present
    at getUser ([...])
    at async ([...])
    at async Promise.all (index 2)
```

Donde, gracias al `await` explícito en `map`, el final de la línea `at async([...])` apuntará al lugar exacto donde `getUser()` fue invocado

*Nota*: Si una función asíncrona que envuelve `getUser` olvidará el `await` antes de retornar (anti-patrón #1 + #3), entonces solo quedaría en el stacktrace:

```javascript
[...]

// 👎 anti-patrón 1 + anti-patrón 3 - Solo un cuadro dentro del stacktrace
Promise.all(userIds.map(async id => getUser(id))).catch(console.log)
```

Tendría de salida

```
Error: [...]
    at getUser ([...])
```

</p>
</details>

<br/>

## Explicación avanzada

El mecanismo detrás de los stacktraces de funciones síncronas y asíncronas en la implementación v8 son bastante diferentes: Stacktraces síncronos están basados en la **Pila** que provee el sistema operativo en el que se está ejecutando Node.js (Como en la mayoría de los lenguajes de programación). Cuando una función asíncrona se está ejecutando la **Pila** del sistema operativo, saca la función tan pronto esta llegue al primer `await`. Entonces la stacktrace asíncrona es una mezcla de la **pila** del sistema operativo y una **cadena de promesas resueltas** fallida. la implementación sin costo de stacktraces asíncrono extiende la **cadena de promesas resueltas** solo cuando la promesa esta siendo 'esperada' (`await`) <span>[¹](#1)</span>. debido a que sólo las funciones asíncronas `async` pueden esperar `await`, las funciones síncronas siempre se perderán en un stacktrace asíncrono si una operación asíncrona está siendo ejecutada después de que la función fue invocada<span>[²](#2)</span>.

### La compensación

Cada `await` crea una micro tarea en el ciclo de eventos (event loop), así que agregar mas `await`s al código introducirá una penalización al rendimiento del código. De todas formas, la penalización al rendimiento introducida por la red o la Base de datos es [Tremendamente mayor](https://colin-scott.github.io/personal_website/research/interactive_latency.html). Por lo que la penalización extra de `await` no es algo que debe ser considerada durante el desarrollo de servidores web o CLI, excepto en un código muy usado por petición o comando. removiendo `await`s en `return await`s debería ser uno de los últimos lugares para buscar mejoras evidentes en el servidor.

### ¿Porqué `return await` era considerado como anti-patrón en el pasado?

Hay un número de [excelentes artículos](https://jakearchibald.com/2017/await-vs-return-vs-return-await/) que explican por que `return await` nunca debería de usarse afuera de un bloque `try`, e incluso una [regla de ESLint](https://eslint.org/docs/rules/no-return-await) lo deshabilita. Esto es debido a que desde que `async`/`await` se hizó posible con transpiladores en Node.js 0.10 (Y recibió soporte nativo en Node.js 7.6) y hasta que "stacktraces asíncronos sin costo" fueron introducidos a Node.js 10 y desmarcados en Node.js 12, `return await` era completamente equivalente a `return` para cualquier código afuera de un bloque `try`. Puede seguir siendo igual para algunos motores ES. Debido a esto resolver promesas antes de retornarlas es la mejor práctica para Node.js y no para EcmaScript en general.

### Notas:
1. Otra razón por la que los stacktrace asíncronos tiene un implementación tan curiosa, es la limitación del stacktrace que siempre debe ser construido de manera síncrona, en el mismo tick del ciclo de eventos <span id="a1">[¹](#1)</span>.
2. Sin `await` en `throwAsync` el código sería ejecutado en la misma fase del ciclo de eventos. Este es un caso degenerado donde la **pila** del sistema operativo no se vacía y el stacktrace va a estar lleno, incluso sin esperar (`await`) el resultado de la función de manera explícita. Usualmente el uso de promesas incluye unas operaciones asíncronas y partes del stacktrace serán perdidas.
3. stacktraces asíncronos sin costo tampoco funcionarían para usos de promesas complicados (Por ejemplo, una misma promesa siendo esperada en diferentes lugares)

### Referencias
<span id="1">1. </span>[Blog post on zero-cost async stacktraces in v8](https://v8.dev/blog/fast-async)
  <br>

  <span id="2">2. </span>[Document on zero-cost async stacktraces with mentioned here implementation details](
    https://docs.google.com/document/d/13Sy_kBIJGP0XT34V1CV3nkWya4TwYx9L3Yv45LdGB6Q/edit
  )
  <br>
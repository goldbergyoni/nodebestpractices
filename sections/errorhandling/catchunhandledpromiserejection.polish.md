# Złap nieobsłużone odrzucenia promises

<br/><br/>

### Wyjaśnienie jednym akapitem

Zazwyczaj większość współczesnego kodu aplikacji Node.js / Express działa w ramach obietnic - czy to w .then handler, wywołaniu zwrotnym funkcji, czy w bloku catch. Zaskakujące jest to, że jeśli programista nie pamięta o dodaniu klauzuli .catch, błędy zgłaszane w tych miejscach nie są obsługiwane przez moduł obsługi zdarzeń uncaughtException i znikają. Najnowsze wersje Node dodały komunikat ostrzegawczy, gdy pojawia się nieobsługiwane odrzucenie, chociaż może to pomóc w zauważeniu, że coś pójdzie nie tak, ale oczywiście nie jest to właściwa metoda obsługi błędów. Prostym rozwiązaniem jest, aby nigdy nie zapomnieć o dodaniu klauzul .catch w każdym wywołaniu łańcucha obietnicy i przekierowaniu do scentralizowanej procedury obsługi błędów. Jednak budowanie strategii radzenia sobie z błędami wyłącznie w oparciu o dyscyplinę programisty jest dość kruche. W związku z tym zaleca się stosowanie płynnego wycofywania się i zapisanie się na `process.on ('unhandledRejection', callback)` - zapewni to, że każdy błąd obietnicy, jeśli nie zostanie złapany lokalnie, zostanie obsłużony.

<br/><br/>

### Przykład kodu: błędy te nie zostaną złapane przez żadną procedurę obsługi błędów (z wyjątkiem unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive === false)
      throw new Error('ahhhh');
});
```

<br/><br/>

### Przykład kodu: Łapanie nierozwiązanych i odrzuconych promises

<details>
<summary><strong>Javascript</strong></summary>

```javascript
process.on('unhandledRejection', (reason, p) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason;
});

process.on('uncaughtException', (error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
process.on('unhandledRejection', (reason: string, p: Promise<any>) => {
  // I just caught an unhandled promise rejection,
  // since we already have fallback handler for unhandled errors (see below),
  // let throw and let him handle that
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<br/><br/>

### Cytat z Bloga: "If you can make a mistake, at some point you will"

 Z bloga James Nelson

 > Let’s test your understanding. Which of the following would you expect to print an error to the console?

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

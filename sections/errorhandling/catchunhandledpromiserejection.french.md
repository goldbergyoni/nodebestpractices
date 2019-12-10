# Catch unhandled promise rejections

<br/><br/>

### One Paragraph Explainer

Typically, most of modern Node.js/Express application code runs within promises – whether within the .then handler, a function callback or in a catch block. Surprisingly, unless a developer remembered to add a .catch clause, errors thrown at these places are not handled by the uncaughtException event-handler and disappear.  Recent versions of Node added a warning message when an unhandled rejection pops, though this might help to notice when things go wrong but it's obviously not a proper error handling method. The straightforward solution is to never forget adding .catch clauses within each promise chain call and redirect to a centralized error handler. However, building your error handling strategy only on developer’s discipline is somewhat fragile. Consequently, it’s highly recommended using a graceful fallback and subscribe to `process.on('unhandledRejection', callback)` – this will ensure that any promise error, if not handled locally, will get its treatment.

<br/><br/>

### Code example: these errors will not get caught by any error handler (except unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive === false)
      throw new Error('ahhhh');
});
```

<br/><br/>

### Code example: Catching unresolved and rejected promises

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

### Blog Quote: "If you can make a mistake, at some point you will"

 From the blog James Nelson

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

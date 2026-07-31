# Catch unhandled promise rejections

<br/><br/>

### One Paragraph Explainer

Typically, most of modern Node.js/Express application code runs within promises – whether within the `.then` handler, an async function, or a catch block. In Node.js < 15, unhandled promise rejections printed a deprecation warning but did not terminate the process, making unhandled errors easy to miss. Since Node.js 15, unhandled rejections crash the process by default (exit code 1) with `--unhandled-rejections=throw`. 

While process termination prevents silent failures, relying solely on unhandled crashes is not a complete error handling strategy. Subscribing to `process.on('unhandledRejection', callback)` is highly recommended as a global safety net: it ensures all unhandled promise errors are caught, properly logged to monitoring tools, and passed to a centralized error handler for graceful shutdown.

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

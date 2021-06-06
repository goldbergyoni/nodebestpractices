# Перехватывайте необработанные отказы от обещаний

<br/><br/>

### Объяснение в один абзац

Как правило, большая часть современного кода приложения Node.js/Express выполняется в обещаниях - будь то в обработчике .then, обратном вызове функции или в блоке catch. Удивительно, но если разработчик не вспомнил о добавлении предложения .catch, ошибки, возникающие в этих местах, не обрабатываются обработчиком событий uncaughtException и исчезают. Недавние версии Node добавляли предупреждающее сообщение, когда появляется необработанный отказ, хотя это могло помочь заметить, когда что-то пойдет не так, но это явно не правильный метод обработки ошибок. Простое решение состоит в том, чтобы никогда не забывать добавлять предложения .catch в каждый вызов цепочки обещаний и перенаправлять их в централизованный обработчик ошибок. Однако построение вашей стратегии обработки ошибок только на основе дисциплины разработчика несколько хрупко. Следовательно, настоятельно рекомендуется использовать изящный запасной вариант и подписаться на `process.on('unhandledRejection', callback)` - это гарантирует, что любая ошибка обещания, если она не обрабатывается локально, будет обработана.

<br/><br/>

### Пример кода: эти ошибки не будут обнаружены никаким обработчиком ошибок (кроме unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // this error will just vanish
  if(johnSnow.isAlive === false)
      throw new Error('ahhhh');
});
```

<br/><br/>

### Пример кода: отлов нерешенных и отклоненных обещаний

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

### Цитата в блоге: "Если вы можете сделать ошибку, в какой-то момент вы это сделаете"

Из блога Джеймса Нельсона

> Давайте проверим ваше понимание. Что из следующего вы ожидаете увидеть как ошибку в консоли?

```javascript
Promise.resolve('promised value').then(() => {
  throw new Error('error');
})

Promise.reject('error value').catch(() => {
  throw new Error('error')
});

new Promise((resolve, reject) => {
  throw new Error('error');
});
```

> Я не знаю о вас, но я отвечу, что я ожидаю, что все они напечатают ошибку. Однако реальность такова, что ряд современных сред JavaScript не будет печатать ошибки ни для одной из них. Проблема с тем, чтобы быть человеком, состоит в том, что если вы можете ошибиться, в какой-то момент вы это сделаете. Имея это в виду, кажется очевидным, что мы должны проектировать вещи таким образом, чтобы ошибки причиняли как можно меньше вреда, а это означает, что по умолчанию ошибки обрабатывают, а не отбрасывают их.

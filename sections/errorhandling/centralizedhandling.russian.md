# Обрабатывайте ошибки централизованно. Не в промежуточных слоях

### Объяснение в один абзац

Без специального выделенного объекта для обработки ошибок больше шансов на то, что важные ошибки скрываются под радаром из-за неправильного обращения. Объект обработчика ошибок отвечает за отображение ошибки, например, путем записи в хорошо отформатированный регистратор, отправки событий в некоторые продукты мониторинга, такие как [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/) или [Raygun](https://raygun.com/). Большинство веб-фреймворков, таких как [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), предоставляют механизм промежуточного программного обеспечения для обработки ошибок. Типичный поток обработки ошибок может быть следующим: какой-то модуль выдает ошибку -> маршрутизатор API перехватывает ошибку -> он передает ошибку промежуточному программному обеспечению (например, Express, KOA), которое отвечает за перехват ошибок -> вызывается централизованный обработчик ошибок -> промежуточному программному обеспечению сообщается, является ли эта ошибка ненадежной (не работающей), чтобы она могла корректно перезапустить приложение. Обратите внимание, что обычная, но неправильная практика - обрабатывать ошибки в промежуточном программном обеспечении Express - это не распространяется на ошибки, возникающие в не-веб-интерфейсах.

### Пример кода - типичный поток ошибок

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// DAL layer, we don't handle errors here
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// API route code, we catch both sync and async errors and forward to the middleware
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// DAL layer, we don't handle errors here
DB.addDocument(newCustomer, (error: Error, result: Result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// API route code, we catch both sync and async errors and forward to the middleware
try {
  customerService.addNew(req.body).then((result: Result) => {
    res.status(200).json(result);
  }).catch((error: Error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Error handling middleware, we delegate the handling to the centralized error handler
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>


### Пример кода - обработка ошибок в выделенном объекте

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async (err) {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };
}

export const handler = new ErrorHandler();
```
</details>


### Пример кода - антипаттерн: обработка ошибок в промежуточном программном обеспечении

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// middleware handling the error directly, who will handle Cron jobs and testing errors?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>


<details>
<summary><strong>Typescript</strong></summary>

```typescript
// middleware handling the error directly, who will handle Cron jobs and testing errors?
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>

### Цитата из блога: "Иногда нижние уровни не могут сделать ничего полезного, кроме как сообщить об ошибке вызывающей стороне"

Из блога Joyent, занимающий 1 место по ключевым словам "Обработка ошибок Node.js"

> … Вы можете обработать одну и ту же ошибку на нескольких уровнях стека. Это происходит, когда нижние уровни не могут сделать ничего полезного, кроме как передать ошибку вызывающей стороне, которая передает ошибку своей вызывающей стороне, и так далее. Зачастую только вызывающий пользователь верхнего уровня знает, что является подходящим ответом: попытка повторить операцию, сообщить пользователю об ошибке или что-то еще. Но это не значит, что вы должны пытаться сообщать обо всех ошибках в один обратный вызов верхнего уровня, потому что сам этот обратный вызов не может знать, в каком контексте произошла ошибка …

### Цитата из блога: "Обработка каждой ошибки по отдельности приведет к огромному дублированию"

Из блога JS Recipes, занимающий 17 место по ключевым словам "Обработка ошибок Node.js"

> … Только в контроллере api.js Hackathon Starter имеется более 79 случаев появления объектов ошибок. Обработка каждой ошибки в отдельности привела бы к огромному количеству дублирования кода. Следующее, что вы можете сделать, это делегировать всю логику обработки ошибок в промежуточное ПО Express …

### Цитата из блога: "В коде вашей базы данных нет места ошибкам HTTP"

Из блога Daily JS, занимающем 14 место по ключевым словам "Обработка ошибок Node.js"

> … Вы должны установить полезные свойства в объектах ошибок, но использовать их последовательно. И не пересекайте потоки: в коде вашей базы данных нет места ошибкам HTTP. Или для разработчиков браузеров, ошибки Ajax имеют место в коде, который общается с сервером, но не в коде, который обрабатывает шаблоны усов …

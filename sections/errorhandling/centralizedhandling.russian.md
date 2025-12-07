# Обрабатывайте ошибки централизованно. Не в промежуточных слоях

### Объяснение в один абзац

Без выделенного объекта для обработки ошибок есть больше шансов на то, что ошибки потеряются с радара из-за их неправильной обработки. Объект обработчика ошибок отвечает за отображение ошибки, например, путем записи в логгер, отправки событий в сервисы мониторинга, такие как [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/) или [Raygun](https://raygun.com/). Большинство веб-фреймворков, таких как [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), предоставляют механизм обработки ошибок с помощью функций промежуточной обработки (**middlewares**). Типичный поток обработки ошибок может выглядеть следующим образом: какой-то модуль выдает ошибку -> API-маршрутизатор перехватывает ошибку -> он передает ошибку функции промежуточной обработки (Express, KOA), которая отвечает за перехват ошибок -> вызывается централизованный обработчик ошибок -> функции промежуточной обработки передается информация о том, что является ли эта ошибка ненадежной (необрабатываемой), чтобы она могла корректно перезапустить приложение. Обратите внимание, что обычная, но неправильная практика - обрабатывать ошибки в функции промежуточной обработки Express - это не распространяется на ошибки, возникающие в не-веб-интерфейсах.

### Пример кода - типичный поток ошибок

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// DAL-слой, мы не обрабатываем ошибки тут
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// код API-маршрутизатора, мы обрабатываем как sync
// так и async ошибки и переходим к middleware
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

// Обработка ошибок в middleware, мы делегируем обработку централизованному обработчику ошибок
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
// DAL-слой, мы не обрабатываем ошибки тут
DB.addDocument(newCustomer, (error: Error, result: Result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// код API-маршрутизатора, мы обрабатываем как sync
// так и async ошибки и переходим к middleware
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

// Обработка ошибок в middleware, мы делегируем обработку централизованному обработчику ошибок
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
    await sendMailToAdminIfCritical(err);
    await saveInOpsQueueIfCritical(err);
    await determineIfOperationalError(err);
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
    await sendMailToAdminIfCritical(err);
    await saveInOpsQueueIfCritical(err);
    await determineIfOperationalError(err);
  };
}

export const handler = new ErrorHandler();
```
</details>


### Пример кода - антипаттерн: обработка ошибок в middleware

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// middleware, обрабатывающий ошибки напрямую.
// А кто будет обрабатывать ошибки возникшие в Cron или при юнит-тестировании?
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
// middleware, обрабатывающий ошибки напрямую.
// А кто будет обрабатывать ошибки возникшие в Cron или при юнит-тестировании?
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

### Цитата из блога: "Иногда нижние слои не могут сделать ничего полезного, кроме как сообщить об ошибке вызывающему слою"

Из блога Joyent, занимающего 1 место по ключевым словам "Обработка ошибок Node.js"

> … Вы можете обработать одну и ту же ошибку на нескольких слоях. Это происходит, когда нижние слои не могут сделать ничего полезного, кроме как передать ошибку вызывающему слою, который передаст ошибку своему вызывающему слою, и так далее. Зачастую только самый верхний слой знает, что является подходящим действием на ошибку: попытка повторить операцию, сообщить пользователю об ошибке или что-то еще. Но это не значит, что вы должны пытаться сообщать обо всех ошибках в один верхний callback, потому что этот callback не может знать, в каком контексте произошла ошибка …

### Цитата из блога: "Обработка каждой ошибки по отдельности приведет к ужасному дублированию"

Из блога JS Recipes, занимающего 17 место по ключевым словам "Обработка ошибок Node.js"

> … Только в контроллере api.js Hackathon Starter имеется более 79 объектов ошибок. Обработка каждой ошибки в отдельности привела бы к ужасному дублированию кода. Следующее, что вы можете сделать, это делегировать всю логику обработки ошибок в middleware Express …

### Цитата из блога: "В коде вашей базы данных нет места ошибкам HTTP"

Из блога Daily JS, занимающем 14 место по ключевым словам "Обработка ошибок Node.js"

> … Вы должны добавлять полезные свойства в объекты ошибок, но использовать их согласовано. И не пересекайте логику: в коде вашей базы данных нет места ошибкам HTTP. Или, например, для frontend-разработчиков, ошибки Ajax имеют место в коде, который общается с сервером, но не в коде, который работает с шаблонами Mustache …

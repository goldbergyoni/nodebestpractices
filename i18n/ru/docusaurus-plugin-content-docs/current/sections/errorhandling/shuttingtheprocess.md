# Изящно выходите из процесса, когда неизвестное случается

### Объяснение в один абзац

Где-то в вашем коде объект-обработчик ошибок отвечает за принятие решения о том, как действовать при возникновении ошибки - если ошибка является доверенной (т.е. операционная ошибка, см. дальнейшее объяснение в этих практиках № 3), тогда записи в файл журнала может быть достаточно. Ситуация становится неясной, если ошибка незнакома - это означает, что какой-то компонент может быть в неисправном состоянии, и все будущие запросы могут быть сбойными. Например, если предположить, что единственная служба выдачи токенов с состоянием, которая вызвала исключение и потеряла свое состояние, отныне может вести себя неожиданно и вызывать сбой всех запросов. В этом сценарии завершите процесс и используйте "инструмент перезапуска" (например, Forever, PM2 и т.д.), Чтобы начать заново с чистым состоянием.

### Пример кода: решение о сбое

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Assuming developers mark known operational errors with error.isOperational=true, read best practice #3
process.on('uncaughtException', (error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// centralized error handler encapsulates error-handling related logic
function errorHandler() {
  this.handleError = (error) => {
    return logger.logError(error)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = (error) => {
    return error.isOperational;
  }
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Assuming developers mark known operational errors with error.isOperational=true, read best practice #3
process.on('uncaughtException', (error: Error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// centralized error object that derives from Node’s Error
export class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

// centralized error handler encapsulates error-handling related logic
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}

export const handler = new ErrorHandler();
```
</details>

### Цитата из блога: "Лучший способ - это рухнуть"

Из блога Джойент

> … Лучший способ исправить ошибки программиста - это сразу же аварийно завершить работу. Вы должны запустить свои программы, используя перезапуск, который автоматически перезапустит программу в случае сбоя. С перезапуском на месте сбой является самым быстрым способом восстановления надежного сервиса перед лицом временной ошибки программиста …

### Цитата блога: "Есть три школы мысли об обработке ошибок"

Из блога: JS Recipes

> … Существует три основных направления работы с ошибками:
1. Дайте приложению упасть и перезапустите его.
2. Обрабатывайте все возможные ошибоки и никогда не роняйте.
3. Сбалансированный подход между двумя предыдущими.

### Цитата из блога: "Нет безопасного способа уйти, не создав неопределенного хрупкого состояния"

Из официальной документации Node.js

> … По самой природе того, как throw работает в JavaScript, почти никогда не существует способа безопасно "выбрать то, на чем остановился", без утечки ссылок или создания какого-либо другого неопределенного хрупкого состояния. Самый безопасный способ отреагировать на возникшую ошибку - завершить процесс. Конечно, на обычном веб-сервере у вас может быть открыто много подключений, и нет смысла внезапно закрывать их, потому что кто-то еще вызвал ошибку. Лучший подход - отправить ответ об ошибке на запрос, который вызвал ошибку, позволяя остальным завершить работу в обычное время, и прекратить прослушивание новых запросов этого работника.

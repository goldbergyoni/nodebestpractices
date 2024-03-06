# Граційне закриття процесу, коли з'являється незнайомець

### Пояснення за один абзац

Десь у вашому коді обробник помилок відповідальний за вирішення, як продовжувати, коли виникає помилка - якщо помилка є довіреною (тобто операційна помилка, дивіться подальше пояснення в кращих практиках №3), тоді достатньо записати її в файл журналу. Ситуація стає складною, якщо помилка не знайома - це означає, що деякий компонент може бути в неправильному стані, і всі подальші запити підлягають невдачі. Наприклад, припустимо, що служба видачі токенів singleton, яка в критичному стані, викликає виняток і втрачає свій стан - з цього моменту вона може поводитися непередбачувано і спричинити невдачу всіх запитів. В цьому сценарії, знищте процес та використайте "інструмент перезапуску" (як Forever, PM2 тощо) для початку роботи з очищеним станом.

### Приклад коду: вирішення, чи слід всередині

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Припускається, що розробники маркують відомі операційні помилки з error.isOperational=true, дивіться кращу практику №3
process.on('uncaughtException', (error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// централізований обробник помилок інкапсулює пов'язану з обробкою помилок логіку
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
// Припускається, що розробники маркують відомі операційні помилки з error.isOperational=true, читайте кращі практики №3
process.on('uncaughtException', (error: Error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// централізований об'єкт помилки, який походить від помилки Node
export class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // відновлення ланцюга прототипів
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

// централізований обробник помилок концентрує пов'язану з обробкою помилок логіку
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

### Цитата з блогу: "Найкращий спосіб - це збій"

З блогу Joyent

> ...Найкращий спосіб відновитися після помилок програміста - це негайно збоїти. Ви повинні запускати свої програми за допомогою перезапускача, який автоматично перезапустить програму у разі збою. З перезапускачем, збій - це найшвидший спосіб відновити надійне обслуговування при тимчасовій помилці програміста...

### Цитата з блогу: "Існують три школи думок щодо обробки помилок"

З блогу: JS Recipes

> ...Переважно є три школи думок щодо обробки помилок:
>1. Дозвольте додатку збоїти та перезапустіть його.
>2. Обробляйте всі можливі помилки і ніколи не збивайтеся.
>3. Збалансований підхід між двома

### Цитата з блогу: "Немає безпечного способу вийти, не створюючи якийсь невизначений крихкий стан"

З офіційної документації Node.js

> ...Через власну природу того, як працює виключення в JavaScript, майже ніколи немає способу безпечно "продовжити з місця, де ви залишилися", без витоку посилань або створення якогось іншого виду невизначеного крихкого стану. Найбезпечнішим способом реагувати на виняток є закриття процесу. Звичайно, в звичайному веб-сервері, у вас може бути відкрито багато з'єднань, і не розумно раптово закривати їх, тому що помилка була викликана кимось іншим. Кращим підходом є надсилання відповіді про помилку на запит, який викликав помилку, дозволяючи іншим закінчувати в їхній нормальний час, і припиняти прослуховування нових запитів на цьому працівнику.
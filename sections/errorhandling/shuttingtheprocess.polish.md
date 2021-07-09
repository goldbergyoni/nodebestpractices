# Opuść ten proces z wdziękiem, gdy do miasta przybywa nieznajomy

### Wyjaśnienie jednym akapitem

Gdzieś w twoim kodzie obiekt procedury obsługi błędów jest odpowiedzialny za podjęcie decyzji, jak postępować, gdy błąd zostanie zgłoszony - jeśli błąd jest zaufany (tj. błąd operacyjny, zobacz dalsze wyjaśnienie w najlepszych praktykach #3), zapisywanie w pliku dziennika może być wystarczające. Sprawa staje się pokręcona, jeśli błąd nie jest znany - oznacza to, że niektóre komponenty mogą być wadliwe, a wszystkie przyszłe żądania mogą ulec awarii. Na przykład, zakładając singletonowy serwis stateful token issuer, który zgłosił wyjątek i utracił swój stan - od teraz może zachowywać się niespodziewanie i powodować niepowodzenie wszystkich żądań. W tym scenariuszu zabij proces i użyj „narzędzia Restarter” (takiego jak Forever, PM2 itp.), Aby zacząć od nowa z czystym stanem.

### Przykład kodu: decydowanie o awarii

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

### Cytat z bloga: "The best way is to crash"

Z bloga Joyent

> …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

### Cytat z bloga: "There are three schools of thoughts on error handling"

Z bloga: JS Recipes

> …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. A balanced approach between the two

### Cytat z bloga: "No safe way to leave without creating some undefined brittle state"

Z oficjalnej dokumentacji Node.js

> …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

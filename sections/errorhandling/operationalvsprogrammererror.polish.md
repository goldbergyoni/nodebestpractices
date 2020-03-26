# Rozróżnij błędy operacyjne i programistyczne

### Wyjaśnienie jednym akapitem

Rozróżnienie następujących dwóch typów błędów zminimalizuje przestoje aplikacji i pomoże uniknąć szalonych błędów: Błędy operacyjne odnoszą się do sytuacji, w których rozumiesz, co się stało i ich wpływ - na przykład zapytanie do jakiejś usługi HTTP nie powiodło się z powodu problemu z połączeniem. Z drugiej strony błędy programisty odnoszą się do przypadków, w których nie masz pojęcia, dlaczego, a czasem skąd pochodzi błąd - może to być jakiś kod, który próbował odczytać niezdefiniowaną wartość lub pula połączeń BD, z której wycieka pamięć. Błędy operacyjne są stosunkowo łatwe w obsłudze - zwykle wystarczy zarejestrować błąd. Gdy pojawia się błąd programisty, rzeczy stają się zagmatwane, aplikacja może być niespójna i nie ma nic lepszego niż ją po prostu zrestartować.

### Przykład kodu - oznaczenie błędu jako działającego (zaufanego)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// marking an error object as operational 
const myError = new Error('How can I add new product when no value provided?');
myError.isOperational = true;

// or if you're using some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
class AppError {
  constructor (commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
};

throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
export class AppError extends Error {
  public readonly commonType: string;
  public readonly isOperational: boolean;

  constructor(commonType: string, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.commonType = commonType;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// marking an error object as operational (true)
throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

### Cytat z Bloga: "Programmer errors are bugs in the program"

Z bloga, Joyent ranked 1 for the keywords “Node.js error handling”

 > …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

### Cytat z Bloga: "No safe way to leave without creating some undefined brittle state"

Z oficjalnej dokumentacji Node.js

 > …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

### Cytat z Bloga: "Otherwise you risk the state of your application"

Z bloga, debugable.com ranked 3 for the keywords “Node.js uncaught exception”

 > …So, unless you really know what you are doing, you should perform a graceful restart of your service after receiving an “uncaughtException” exception event. Otherwise, you risk the state of your application, or that of 3rd party libraries to become inconsistent, leading to all kinds of crazy bugs…

### Cytat z Bloga: "There are three schools of thoughts on error handling"

Z bloga: JS Recipes

> …There are primarily three schools of thoughts on error handling:
> 1. Let the application crash and restart it.
> 2. Handle all possible errors and never crash.
> 3. A balanced approach between the two

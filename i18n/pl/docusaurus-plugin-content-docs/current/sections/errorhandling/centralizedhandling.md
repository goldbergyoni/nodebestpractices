# Obsługuj błędy centralnie. Nie w ramach oprogramowania pośredniego

### Wyjaśnienie jednym akapitem

Bez jednego obiektu dedykowanego do obsługi błędów większe są szanse na poważne błędy ukryte pod radarem z powodu niewłaściwej obsługi. Obiekt obsługi błędów jest odpowiedzialny za uwidocznienie błędu, na przykład poprzez napisanie do dobrze sformatowanego programu rejestrującego, wysyłanie zdarzeń do jakiegoś produktu monitorującego, takiego jak [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/) lub [Raygun](https://raygun.com/). Większość frameworków internetowych, takich jak [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), udostępnia mechanizm pośredniej obsługi błędów. Typowy przepływ obsługi błędów może być następujący: Niektóre moduły zgłaszają błąd -> router API łapie błąd -> propaguje błąd do oprogramowania pośredniego (np. Express, KOA), który jest odpowiedzialny za wychwytywanie błędów -> scentralizowany moduł obsługi błędów -> oprogramowanie pośredniczące jest informowane, czy ten błąd jest niezaufanym błędem (nie działa), aby mógł z wdziękiem ponownie uruchomić aplikację. Pamiętaj, że częstą, ale niepoprawną praktyką jest obsługa błędów w oprogramowaniu pośrednim Express - takie postępowanie nie obejmie błędów zgłaszanych w interfejsach innych niż internetowe.

### Przykład kodu - typowy przepływ błędów

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


### Przykład kodu - obsługa błędów w obiekcie dedykowanym

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async (err) => {
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


### Przykład kodu - Antywzorzec: obsługa błędów w oprogramowaniu pośrednim

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

### Cytat z Bloga: "Sometimes lower levels can’t do anything useful except propagate the error to their caller"

Z bloga Joyent, w rankingu 1 dla słów kluczowych “Node.js error handling”

> …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

### Cytat z Bloga: "Handling each err individually would result in tremendous duplication"

Z bloga JS Recipes w rankingu 17 dla słów kluczowych “Node.js error handling”

> ……In Hackathon Starter api.js controller alone, there are over 79 occurrences of error objects. Handling each err individually would result in a tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…

### Cytat z Bloga: "HTTP errors have no place in your database code"

Z bloga Daily JS w rankingu 14 dla słów kluczowych “Node.js error handling”

> ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in the code that talks to the server, but not code that processes Mustache templates…

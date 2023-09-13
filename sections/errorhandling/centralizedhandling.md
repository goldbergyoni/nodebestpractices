# Handle errors centrally. Not within middlewares

### One Paragraph Explainer

Without one dedicated object for error handling, greater are the chances for inconsistent errors handling: Errors thrown within web requests might get handled differently from those raised during the startup phase and those raised by scheduled jobs. This might lead to some types of errors that are being mismanaged. This single error handler object is responsible for making the error visible, for example, by writing to a well-formatted logger, firing metrics using some monitoring product (like [Prometheus](https://prometheus.io/), [CloudWatch](https://aws.amazon.com/cloudwatch/), [DataDog](https://www.datadoghq.com/), and [Sentry](https://sentry.io/)) and to decide whether the process should crash. Most web frameworks provide an error catching middleware mechanism - A typical mistake is to place the error handling code within this middleware. By doing so, you won't be able to reuse the same handler for errors that are caught in different scenarios like scheduled jobs, message queue subscribers, and uncaught exceptions. Consequently, the error middleware should only catch errors and forward them to the handler. A typical error handling flow might be: Some module throws an error -> API router catches the error -> it propagates the error to the middleware (e.g. or to other mechanism for catching request-level error) who is responsible for catching errors -> a centralized error handler is called.

### Code Example – a typical error flow

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
  await errorHandler.handleError(err, res);//The error handler will send a response
});

process.on("uncaughtException", error => {
  errorHandler.handleError(error);
});

process.on("unhandledRejection", (reason) => {
  errorHandler.handleError(reason);
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
  await errorHandler.handleError(err, res);
});

process.on("uncaughtException", (error:Error) => {
  errorHandler.handleError(error);
});

process.on("unhandledRejection", (reason) => {
  errorHandler.handleError(reason);
});
```
</details>


### Code example – handling errors within a dedicated object

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async (error, responseStream) => {
    await logger.logError(error);
    await fireMonitoringMetric(error);
    await crashIfUntrustedErrorOrSendResponse(error, responseStream);
  };
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
class ErrorHandler {
  public async handleError(error: Error, responseStream: Response): Promise<void> {
    await logger.logError(error);
    await fireMonitoringMetric(error);
    await crashIfUntrustedErrorOrSendResponse(error, responseStream);
  };
}

export const handler = new ErrorHandler();
```
</details>


### Code Example – Anti Pattern: handling errors within the middleware

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

 ### Illustration: The error handling actors and flow
![alt text](../../assets/images/error-handling-flow.png "Error handling flow")


### Blog Quote: "Sometimes lower levels can’t do anything useful except propagate the error to their caller"

From the blog Joyent, ranked 1 for the keywords “Node.js error handling”

> …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

### Blog Quote: "Handling each err individually would result in tremendous duplication"

From the blog JS Recipes ranked 17 for the keywords “Node.js error handling”

> ……In Hackathon Starter api.js controller alone, there are over 79 occurrences of error objects. Handling each err individually would result in a tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…

### Blog Quote: "HTTP errors have no place in your database code"

From the blog Daily JS ranked 14 for the keywords “Node.js error handling”

> ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in the code that talks to the server, but not code that processes Mustache templates…

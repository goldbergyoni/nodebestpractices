# Exit the process gracefully when a stranger comes to town

### One Paragraph Explainer

Somewhere within your code, an error handler object is responsible for deciding how to proceed when an error is thrown – if the error is trusted (i.e. operational error, see further explanation within best practice #3) then writing to log file might be enough. Things get hairy if the error is not familiar – this means that some component might be in a faulty state and all future requests are subject to failure. For example, assuming a singleton, stateful token issuer service that threw an exception and lost its state – from now it might behave unexpectedly and cause all requests to fail. Under this scenario, kill the process and use a ‘Restarter tool’ (like Forever, PM2, etc) to start over with a clean state.

### Code example: deciding whether to crash

```javascript
// Assuming developers mark known operational errors with error.isOperational=true, read best practice #3
process.on('uncaughtException', function(error) {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
  process.exit(1)
});

// centralized error handler encapsulates error-handling related logic
function errorHandler() {
  this.handleError = function (error) {
    return logger.logError(err)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = function (error) {
    return error.isOperational;
  }
}
```

### Blog Quote: "The best way is to crash"

From the blog Joyent

> …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

### Blog Quote: "There are three schools of thoughts on error handling"

From the blog: JS Recipes

> …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. A balanced approach between the two

### Blog Quote: "No safe way to leave without creating some undefined brittle state"

From Node.js official documentation

> …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

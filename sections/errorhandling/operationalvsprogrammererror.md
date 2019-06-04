# Distinguish operational vs programmer errors

### One Paragraph Explainer

Distinguishing the following two error types will minimize your app downtime and helps avoid crazy bugs: Operational errors refer to situations where you understand what happened and the impact of it – for example, a query to some HTTP service failed due to connection problem. On the other hand, programmer errors refer to cases where you have no idea why and sometimes where an error came from – it might be some code that tried to read an undefined value or DB connection pool that leaks memory. Operational errors are relatively easy to handle – usually logging the error is enough. Things become hairy when a programmer error pops up, the application might be in an inconsistent state and there’s nothing better you can do than to restart gracefully

### Code Example – marking an error as operational (trusted)

```javascript
// marking an error object as operational 
const myError = new Error("How can I add new product when no value provided?");
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

throw new AppError(errorManagement.commonErrors.InvalidInput, "Describe here what happened", true);

```

### Blog Quote: "Programmer errors are bugs in the program"

From the blog, Joyent ranked 1 for the keywords “Node.js error handling”

 > …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

### Blog Quote: "No safe way to leave without creating some undefined brittle state"

From Node.js official documentation

 > …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

### Blog Quote: "Otherwise you risk the state of your application"

From the blog, debugable.com ranked 3 for the keywords “Node.js uncaught exception”

 > …So, unless you really know what you are doing, you should perform a graceful restart of your service after receiving an “uncaughtException” exception event. Otherwise, you risk the state of your application, or that of 3rd party libraries to become inconsistent, leading to all kinds of crazy bugs…

### Blog Quote: "There are three schools of thoughts on error handling"

From the blog: JS Recipes

> …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. A balanced approach between the two

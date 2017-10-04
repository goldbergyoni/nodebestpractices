# Catch unhandled promise rejections
<br/><br/>


### One Paragraph Explainer

Typically, most of modern Node.JS/Express application code runs within promises – whether within the .then handler, a function callback or in a catch block. Suprisingly, unless a developer remembered to add a .catch clause, errors thrown at these places disappear without leaving any trace(!). They will not get caught even by app.uncaughtException. The straighforward solution is to never forget adding .catch clause within each promise chain call and redirect to a centralized error handler. However building your error handling strategy only on developer’s discpline is somewhat fragile. Consequently, it’s highly recommended using a graceful fallback and subscribe to process.on(‘unhandledRejection’, callback) – this will ensure that any promise error, if not handled locally, will get its treatment.

<br/><br/>

### Code example: Shockingly, these errors will leave no trace

```javascript
DAL.getUserById(1).then((johnSnow) =>
{
        //this error will just vanish
	if(johnSnow.isAlive == false)
	    throw new Error('ahhhh');
});

```
<br/><br/>
### Code example: Catching unresolved and rejected promises

```javascript
process.on('unhandledRejection', function (reason, p) {
  //I just caught an unhandled promise rejection, since we already have fallback handler for unhandled errors (see below), let throw and let him handle that
  throw reason;
});
process.on('uncaughtException', function (error) {
  //I just received an error that was never handled, time to handle it and then decide whether a restart is needed
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```
<br/><br/>
### Blog Quote: "If you can make a mistake, at some point you will"
 From the blog James Nelson
 
 > Let’s test your understanding. Which of the following would you expect to print an error to the console?
Promise.resolve(‘promised value’).then(function() {
throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(function() {
throw new Error(‘error’);
});

new Promise(function(resolve, reject) {
throw new Error(‘error’);
});

I don’t know about you, but my answer is that I’d expect all of them to print an error. However, the reality is that a number of modern JavaScript environments won’t print errors for any of them.The problem with being human is that if you can make a mistake, at some point you will. Keeping this in mind, it seems obvious that we should design things in such a way that mistakes hurt as little as possible, and that means handling errors by default, not discarding them
Close GIST window Skip to toolbar
About WordPress


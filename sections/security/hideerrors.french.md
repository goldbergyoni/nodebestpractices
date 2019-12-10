# Hide error details from client

### One Paragraph Explainer

Exposing application error details to the client in production should be avoided due to the risk of exposing sensitive application details such as server file paths, third-party modules in use, and other internal workflows of the application which could be exploited by an attacker.
Express comes with a built-in error handler, which takes care of any errors that might be encountered in the app. This default error-handling middleware function is added at the end of the middleware function stack.
If you pass an error to `next()` and you do not handle it in a custom error handler, it will be handled by the built-in Express error handler; the error will be written to the client with the stack trace. This behaviour will be true when `NODE_ENV` is set to `development`, however when `NODE_ENV` is set to `production`, the stack trace is not written, only the HTTP response code.

### Code example: Express error handler

```javascript
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
```

### Additional resources

🔗 [Express.js error handling documentation](https://expressjs.com/en/guide/error-handling.html)

# Gestiona los errores de manera central, "a través de" pero no "en" un middleware

### Párrafo de explicación

Sin un objeto dedicado a la gestión de errores, son más las posibilidades de que errores importantes se oculten bajo el radar debido a una gestión inapropiada de los mismos. El objeto que gestiona el error es responsable de hacerlo visible, por ejemplo, mediante un logger bien formateado, enviando eventos hacia algún producto de monitorización o directamente a un administrador vía email. Un flujo típico de gestión de errores puede ser: Algún módulo tira un error –> el router de la API captura el error -> se propaga al middleware (ej. Express, KOA) responsable de atrapar errores -> se llama al objeto gestor de errores central -> se le indica al middleware si el error no es de fiar (no operacional) para que pueda reiniciar la aplicación de forma controlada. Nota que es una práctica común y, aun así mala práctica, el gestionar los errores directamente en el middleware de Express, pues de esa manera los errores lanzados en interfaces "no web" no quedan cubiertos.

### Code Example – a typical error flow

```javascript
// DAL layer, we don't handle errors here
DB.addDocument(newCustomer, (error, result) => {
    if (error)
        throw new Error("Great error explanation comes here", other useful parameters)
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
app.use((err, req, res, next) => {
    errorHandler.handleError(err).then((isOperationalError) => {
        if (!isOperationalError)
            next(err);
    });
});

```

### Code example – handling errors within a dedicated object

```javascript
module.exports.handler = new errorHandler();
 
function errorHandler(){
    this.handleError = function (error) {
        return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
    }
}
```

### Code Example – Anti Pattern: handling errors within the middleware

```javascript
// middleware handling the error directly, who will handle Cron jobs and testing errors?
app.use((err, req, res, next) => {
    logger.logError(err);
    if(err.severity == errors.high)
        mailer.sendMail(configuration.adminMail, "Critical error occured", err);
    if(!err.isOperational)
        next(err);
});

```

### Blog Quote: "Sometimes lower levels can’t do anything useful except propagate the error to their caller"

 From the blog Joyent, ranked 1 for the keywords “Node.js error handling”

 > …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

### Blog Quote: "Handling each err individually would result in tremendous duplication"

 From the blog JS Recipes ranked 17 for the keywords “Node.js error handling”

 > ……In Hackathon Starter api.js controller alone, there are over 79 occurrences of error objects. Handling each err individually would result in a tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…

### Blog Quote: "HTTP errors have no place in your database code"

 From the blog Daily JS ranked 14 for the keywords “Node.js error handling”

 > ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in the code that talks to the server, but not code that processes Mustache templates…

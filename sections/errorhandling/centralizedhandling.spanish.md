# Gestiona los errores de manera central, "a través de" pero no "en" un middleware

### Párrafo de explicación

Sin un objeto dedicado a la gestión de errores, son más las posibilidades de que errores importantes se oculten bajo el radar debido a una gestión inapropiada de los mismos. El objeto que gestiona el error es responsable de hacerlo visible, por ejemplo, mediante un logger bien formateado, enviando eventos hacia algún producto de monitorización o directamente a un administrador vía email. Un flujo típico de gestión de errores puede ser: Algún módulo tira un error –> el router de la API captura el error -> se propaga al middleware (ej. Express, KOA) responsable de atrapar errores -> se llama al objeto gestor de errores central -> se le indica al middleware si el error no es de fiar (no operacional) para que pueda reiniciar la aplicación de forma controlada. Nota que es una práctica común y, aun así mala práctica, el gestionar los errores directamente en el middleware de Express, pues de esa manera los errores lanzados en interfaces "no web" no quedan cubiertos.

### Código de ejemplo – Un flujo de error típico

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

### Código de ejemplo – Manejo de errores a través de un objeto dedicado

```javascript
module.exports.handler = new errorHandler();

function errorHandler(){
    this.handleError = function (error) {
        return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
    }
}
```

### Código de ejemplo – Anti Patrón: manejando errores en un middleware

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

### Cita de blog: "A veces los niveles más bajos no pueden hacer nada útil excepto propagar el error a quien los llamó"

 Del blog Joyent, clasificado 1ro para las palabras clave “Node.js error handling”

 > …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

 > …Podrías terminar manejando el mismo error en varios niveles del stack. Esto sucede cuando los niveles más bajos no pueden hacer nada útil excepto propagar el error a quien los llamó, quien propaga el error a quién lo llamó y así. A veces, solo el nivel más alto sabe cuál es la respuesta apropiada, ya sea reintentar la operación, reportar un error al usuario o alguna otra cosa. Pero eso no significa que deberías intentar reportar todos los errores a un solo callback del más alto nivel, porque ese callback no puede saber en qué contexto ocurrió el error…

### Cita de blog: "Manejar cada error individualmente resultaría en una cantidad tremenda de duplicación de código"

 Del blog JS Recipes clasificado 17mo para las palabras clave “Node.js error handling”

 > ……In Hackathon Starter api.js controller alone, there are over 79 occurrences of error objects. Handling each err individually would result in a tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…

 > ……En el controlador api.js de Hackathon Starter solo, hay más de 79 ocurrencias de objetos de errores. Manejar cada error individualmente resultaría en una cantidad tremenda de duplicación de código. Lo mejor que puedes hacer es delegar toda la lógica de manejo de errores a un middleware de Express…

### Cita de blog: "Los errores de HTTP no deberían existir en el código de tu base de datos"

 Del blog Daily JS clasificado 3to para las palabras clave “Node.js error handling”

 > ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in the code that talks to the server, but not code that processes Mustache templates…

 > ……Deberías setear propiedades útiles en los objetos de error, y usar esas propiedades consistentemente. Y no mezcles los flujos: los errores de HTTP no deberían existir en el código de tu base de datos. O para quienes desarrollan para navegadores, los errores de Ajax pertenecen al código que habla con el servidor, pero no al código que procesa los templates de Mustace…

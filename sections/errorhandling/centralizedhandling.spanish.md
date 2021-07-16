# Gestiona los errores de manera central, "a través de" pero no "en" un middleware

### Párrafo de explicación

Sin un objeto dedicado a la gestión de errores, son más las posibilidades de ocurran inconsistencias en el manejo de errores: Errores lanzados en peticiones web pueden llegar a ser tratados de manera diferente que aquellos que ocurren en la fase de inicio o los que ocurren en trabajos programados. Esto puede hacer que algunos errores no se traten apropiadamente. Este único objeto manejador de errores es responsable de hacer el error visible, por ejemplo, al escribir un logger bien formateado, mostrando métricas de un producto de monitoreo (como [Prometheus](https://prometheus.io/), [CloudWatch](https://aws.amazon.com/cloudwatch/), [DataDog](https://www.datadoghq.com/), y [Sentry](https://sentry.io/)) y decidir si el proceso debería terminar. La mayoría de los frameworks web ofrecen un middleware para atrapar errores. Un error común es poner el código que maneja errores adentro de este middleware. Al hacer esto, no seras capaz de reutilizar el manejador para errores que son capturados en otros escenarios como trabajos programados, suscriptores a colas de mensajes y excepciones sin capturar. Por ello, el middleware de error solo debe atrapar los errores y pasarlos al manejador de errores. Un flujo común de manejo de errores sería: Un módulo tira un error -> el enrutador API captura el error -> lo propaga al middleware de manejo de errores (u otro mecanismo para capturar errores al nivel de petición) responsable de atrapar errores -> Llama al manejador de errores centralizado

### Código de ejemplo – Un flujo de error típico

<details>
<summary><strong>JavaScript</strong></summary>

```javascript
// DAL layer, no manejamos errores aquí
DB.addDocument(newCustomer, (error, result) => {
    if (error)
        throw new Error("Great error explanation comes here", other useful parameters)
});

// API route code, capturamos tanto errores síncronos como asíncronos y los pasamos al middleware
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

// Error handling middleware, delegamos el manejo al manejador errores centralizado
app.use((err, req, res, next) => {
    errorHandler.handleError(err).then((isOperationalError) => {
        if (!isOperationalError)
            next(err);
    });
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
// DAL layer, no manejamos errores aquí
DB.addDocument(newCustomer, (error: Error, result: Result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// API route code, capturamos tanto errores síncronos como asíncronos y los pasamos al middleware
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

// Error handling middleware, delegamos el manejo al manejador errores centralizado
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

### Código de ejemplo – Manejo de errores a través de un objeto dedicado

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

### Código de ejemplo – Anti Patrón: manejando errores en un middleware

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Middleware manejando el error directamente, ¿Quién manejara errores en CRON job y pruebas?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occurred', err);
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
// Middleware manejando el error directamente, ¿Quién manejara errores en CRON job y pruebas?
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occurred', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>

### Illustration: The error handling actors and flow
![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/error-handling-flow.png "Error handling flow")

### Cita de blog: "A veces los niveles más bajos no pueden hacer nada útil excepto propagar el error a quien los llamó"

 Del blog Joyent, clasificado 1ro para las palabras clave “Node.js error handling”

 > …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

 > …Podrías terminar manejando el mismo error en varios niveles del stack. Esto sucede cuando los niveles más bajos no pueden hacer nada útil excepto propagar el error a quien los llamó, quien propaga el error a quién lo llamó y así. A veces, solo el nivel más alto sabe cuál es la respuesta apropiada, ya sea reintentar la operación, reportar un error al usuario o alguna otra cosa. Pero eso no significa que deberías intentar reportar todos los errores a un solo callback del más alto nivel, porque ese callback no puede saber en qué contexto ocurrió el error…

### Cita de blog: "Manejar cada error individualmente resultaría en una cantidad tremenda de duplicación de código"

 Del blog JS Recipes clasificado 17mo para las palabras clave “Node.js error handling”

 > ……In Hackathon Starter api.js controller alone, there are over 79 occurrences of error objects. Handling each err individually would result in a tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…

 > ……En el controlador api.js de Hackathon Starter solo, hay más de 79 ocurrencias de objetos de errores. Manejar cada error individualmente resultaría en una cantidad tremenda de duplicación de código. Lo mejor que puedes hacer es delegar toda la lógica de manejo de errores a un middleware de Express…

### Cita de blog: "Los errores de HTTP no deberían existir en el código de tu base de datos"

 Del blog Daily JS clasificado 14vo para las palabras clave “Node.js error handling”

 > ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in the code that talks to the server, but not code that processes Mustache templates…

 > ……Deberías asignar propiedades útiles en los objetos de error, y usar esas propiedades consistentemente. Y no mezcles los flujos: los errores de HTTP no deberían existir en el código de tu base de datos. O para quienes desarrollan para navegadores, los errores de Ajax pertenecen al código que habla con el servidor, pero no al código que procesa los templates de Mustache…

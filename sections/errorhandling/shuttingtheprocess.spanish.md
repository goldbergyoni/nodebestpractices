# Termina el proceso si llega un desconocido al pueblo

### Párrafo de explicación

En algún lugar del código, un objeto gestor de errores es responsable de decidir cómo se procede ante un error. Si ese error es confiable (ej. un error operacional, ver más información en mejores prácticas #3) con registrarlo en un log puede ser suficiente. Lo complicado viene cuando el error no es conocido, lo que implica que algún componente puede estar fallando y toda petición subsiguiente quedaría expuesta a fallar también. Por ejemplo, asumiendo una arquitectura singleton, un servicio proveedor de token con estado propio que lanza una excepción y pierde su estado podría, a partir de ese momento, comportarse de manera inesperada y provocar que todas las peticiones empiecen a fallar. Ante este escenario, termina el proceso y utiliza una "herramienta de reinicio" (como Forever, PM2, etc.) para empezar de cero limpiamente.

### Código de ejemplo: Decidiendo si terminar el proceso

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

### Cita de blog: "La mejor manera es terminar el proceso"

Del blog Joyent

> …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

 > …La mejor manera de recuperarse de errores de programadores es detener la aplicación inmediatamente. Deberías ejecutar tus programas usando un software que automáticamente reinicie el programa en caso de que se detenga. Con un software de reinicio implementado, detener la aplicación es la forma más rápida de recuperar el servicio confiable al enfrentar un error transitorio de un programador…

### Cita de blog: "Hay tres escuelas de pensamiento sobre el manejo de errores"

Del blog: JS Recipes

> …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. A balanced approach between the two

> …Hay principalmente tres escuelas de pensamiento sobre el manejo de errores:
1. Deja que la aplicación falle y reiníciala.
2. Maneja todos los errores y nunca falles.
3. Un enfoque balanceado entre las dos anteriores

### Cita de blog: "No hay una forma segura de irse sin crear un estado frágil indefinido"

From Node.js official documentation

> …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

 > …Por la misma naturaleza de cómo throw funciona en JavaScript, casi nunca hay una forma segura de "seguir donde lo dejaste", sin generar fugas de referencias, o sin crear algún otro tipo de estado frágil indefinido. La forma más segura de responder a un error lanzado es apagar el proceso. Claro, en un web server normal, podrías tener muchas conexiones abiertas, y no es razonable cerrarlas abruptamente porque un error haya sido disparado por alguna otra persona. El mejor enfoque es enviar una respuesta de error a la petición que disparó el error mientras dejas las otras terminar en su tiempo normal, y parar de escuchar nuevas peticiones en ese worker.

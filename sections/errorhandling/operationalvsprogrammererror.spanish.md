# Distinguir errores operacionales vs errores del programador

### Párrafo de explicación

Distinguir entre los siguientes dos tipos de error minimizará el downtime de la aplicación y ayudará a evitar comportamientos extraños: Los errores operacionales se refieren a situaciones en las que entendemos lo que ha pasado y su impacto, por ejemplo, una petición HTTP fallida por un problema de conexión. Por otro lado, los errores del programador se refieren a casos en los que no tienes ni idea de por qué ocurren (a veces ni de dónde vienen), puede tratarse de algún código que intenta leer un valor no definido o de una pool de conexión a base de datos que pierde memoria. Los errores operacionales son relativamente fáciles de gestionar –generalmente, con registrar el error es suficiente– pero las cosas se complican cuando salta un error del programador, ya que la aplicación puede quedar en un estado inconsistente y no hay nada mejor que puedas hacer que reiniciarla de forma controlada.

### Código de ejemplo – marcando un error como operacional (trusted)

```javascript
// marking an error object as operational
var myError = new Error("How can I add new product when no value provided?");
myError.isOperational = true;

// or if you're using some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
function appError(commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
};

throw new appError(errorManagement.commonErrors.InvalidInput, "Describe here what happened", true);

```

### Cita de blog: "Los errores del programador son bugs en el programa"

Del blog, Joyent clasificado 1ro para las palabras clave “Node.js error handling”

 > …The best way to recover from programmer errors is to crash immediately. You should run your programs using a restarter that will automatically restart the program in the event of a crash. With a restarter in place, crashing is the fastest way to restore reliable service in the face of a transient programmer error…

 > …La mejor manera de recuperarse de errores de programadores es detener la aplicación inmediatamente. Deberías ejecutar tus programas usando un software que automáticamente reinicie el programa en caso de que se detenga. Con un software de reinicio implementado, detener la aplicación es la forma más rápida de recuperar el servicio confiable al enfrentar un error transitorio de un programador…

### Cita de blog: "No hay una forma segura de irse sin crear un estado frágil indefinido"

De la documentación oficial de Node.js

 > …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

 > …Por la misma naturaleza de cómo throw funciona in JavaScript, casi nunca hay una forma segura de "seguir dónde lo dejaste", sin generar fugas de referencias, o sin crear algún otro tipo de estado frágil indefinido. La forma más segura de responder a un error lanzado is apagar el proceso. Claro, en un web server normal, podrías tener muchas conexiones abiertas, y no es rasonable cerrarlas abruptamente porque un error fue disparado por alguna otra persona. El mejor enfoque is enviar una respuesta de error a la petición que disparó el error mientras dejas las otras terminar en su tiempo normal, y parar de escuchar nuevas peticiones en ese worker.

### Cita de blog: "De otra manera, pones en riesgo el estado de tu aplicación"

Del blog, debugable.com clasificado 3ro para las palabras clave “Node.js uncaught exception””

 > …So, unless you really know what you are doing, you should perform a graceful restart of your service after receiving an “uncaughtException” exception event. Otherwise, you risk the state of your application, or that of 3rd party libraries to become inconsistent, leading to all kinds of crazy bugs…

 > …Entonces, a manos que ralmente sepas lo que estás haciendo, deberías ejecutar un reinicio controlado de tu servicio luego de recibir un evento de excepción "uncaughtException". De otra manera, pones en riesgo el estado de tu aplicación, o que una biblioteca de terceros se vuelvan inconsistentes, llevando a todo tipo de errores locos…

### Cita de blog: "Hay tres escuelas de pensamiento sobre el manejo de errores"

Del blog: JS Recipes

> …Hay principalmente tres escuelas de pensamiento sobre el manejo de errores:
1. Deja que la aplicación falle y reiníciala.
2. Maneja todos los errores y nunca falles.
3. Un enfoque balanceado entre las dos anteriores

# Usar Async-Await o promises para capturar errores asíncronos

### Párrafo de explicación

Los callbacks no escalan bien ya que muchos programadores no están familiarizados con ellos. Te obligan a estar pendiente de errores por todos lados y a lidiar con un anidamiento de código excesivo, lo cual dificulta la comprensión del flujo de código. Librerías prometedoras como BlueBird, async y Q empaquetan un estilo de código estándar utilizando RETURN y THROW para controlar el flujo del programa. Específicamente, soportan el estilo favorito de gestión de errores try-catch, liberando a la ruta principal de código de tratar con errores en cada función.

### Código de ejemplo – Uando promesas para capturar errores

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Código de ejemplo de anti patrón – Manejo de errores con callbacks

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // do something like calling the given callback function and pass the error
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // do something like calling the given callback function and pass the error
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // you get the idea? 
                        }
                    })
                });
            }
        });
    }
});
```

### Cita de blog: "Tenemos un problema con las promesas"

 Del blog pouchdb.com

 > ……And in fact, callbacks do something even more sinister: they deprive us of the stack, which is something we usually take for granted in programming languages. Writing code without a stack is a lot like driving a car without a brake pedal: you don’t realize how badly you need it until you reach for it and it’s not there. The whole point of promises is to give us back the language fundamentals we lost when we went async: return, throw, and the stack. But you have to know how to use promises correctly in order to take advantage of them.

 > ……Y de hecho, los callbacks hacen algo aún más siniestro: nos privan del stack, algo que generalmente damos por hecho en los lenguajes de programación. Escribir código sin un stack es muy parecido a manejar un auto sin el pedal de freno: no te das cuenta cuánto lo necesitas hasta que lo buscas y no está ahí. El punto principal de las promesas es devolvernos los fundamentos del lenguaje que perdimos cuando elegimos la asincronía: return, throw y el stack. Pero tienes que saber usar las promesas correctamente para poder aprovecharlas.

### Cita de blog: "El método de las promesas es mucho más compacto"

 Del blog gosquared.com

 > ………The promises method is much more compact, clearer and quicker to write. If an error or exception occurs within any of the ops it is handled by the single .catch() handler. Having this single place to handle all errors means you don’t need to write error checking for each stage of the work.

 > ………El método de las promesas es mucho más compacto, más clato y más rápido de escribir. Si ocurre un error o una excepción en cualquiera de las operaciones, es manejado por un solo manejador .catch(). Tener este único lugar para manejar todos los errores significa que no tienes que escribir validaciones de error para cada etapa del trabajo.

### Cita de blog: "Las promesas son nativas en ES6 y pueden ser utilizadas con generadores"

 Del blog StrongLoop

 > ….Callbacks have a lousy error-handling story. Promises are better. Marry the built-in error handling in Express with promises and significantly lower the chances of an uncaught exception. Promises are native ES6, can be used with generators, and ES7 proposals like async/await through compilers like Babel

 > ….Los callbacks tienen un mal historial de manejo de errores. Las promesas son mejores. Cásate con el manejo de error incorporado en Express con promesas y reduce significativamente las posibilidades de una excepción no capturada. Las promesas son nativas en ES6 y pueden ser utilizadas con generadores y propuestas de ES7 como async/await usando compiladores como Babel

### Cita de blog: "Todas esas construcciones de control de flujo a las que estás acostumbrado están completamente rotas"

 Del blog Benno’s

 > ……One of the best things about asynchronous, callback-based programming is that basically all those regular flow control constructs you are used to are completely broken. However, the one I find most broken is the handling of exceptions. Javascript provides a fairly familiar try…catch construct for dealing with exceptions. The problem with exceptions is that they provide a great way of short-cutting errors up a call stack, but end up being completely useless of the error happens on a different stack…


 > ……Una de las mejores cosas sobre la programación asíncrona, basada en callbacks es que basicamente todas esas construcciones de control de flujo a las que estás acostumbrado están completamente rotas. Sin embargo, la que encuentro más rota es el manejo de excepciones. Javascript provee una construcción bastante familiar de try…catch para manejar excepciones. El problema con las excepciones es que proveen una excelente forma de enviar errores hacia arriba en el stack de llamadas, pero termina siendo completamente inútil si el error ocurre en un stack diferente...

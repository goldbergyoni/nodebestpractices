# Utilizar un logger maduro para incrementar la visibilidad de errores

### Párrafo de explicación

A todos nos encanta console.log, pero evidentemente un logger persistente y con buena reputación como [Winston][winston], [Bunyan][bunyan] (tremendamente popular) o [Pino][pino] (la última novedad, centrado en el performance) es algo obligatorio para proyectos serios. Un conjunto de prácticas y herramientas nos ayudarán a tratar con errores mucho más rápido: (1) Utilizar diferentes niveles de log (debug, info, error). (2) Cuando creamos logs, proporcionar información contextual mediante objetos JSON, ver el ejemplo de abajo. (3) Mirar y filtrar logs a través de una API de consulta de logs (incorporado en la mayoría de loggers) o de un software visor de logs. (4) Exponer y curar las entradas de log para el equipo de operaciones utilizando herramientas de inteligencia operacional como Splunk.

[winston]: https://www.npmjs.com/package/winston
[bunyan]: https://www.npmjs.com/package/bunyan
[pino]: https://www.npmjs.com/package/pino

### Código de ejemplo – Winston Logger en acción

```javascript
// your centralized logger object
var logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'somefile.log' })
  ]
});

// custom code somewhere using the logger
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });

```

### Código de ejemplo – Haciendo consultas a la carpeta de logs

```javascript
var options = {
  from: new Date - 24 * 60 * 60 * 1000,
  until: new Date,
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};


// Find items logged between today and yesterday.
winston.query(options, function (err, results) {
  // execute callback with results
});
```

### Cita de blog: "Requerimientos del logger"

Del blog Strong Loop

> Lets identify a few requirements (for a logger):
1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
2. Logging format should be easily digestible by humans as well as machines.
3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…

> Vamos a identificar algunos requerimientos (para un logger):
1. Marca de tiempo en cada linea de log. Este es bastente auto-explicativo – deberías poder decir cuándo ocurrió cada entrada de log.
2. El formato de logs debería ser fácilmente interpretado por humanos así como por máquinas
3. Permite múltiples destinos configurables. Por ejemplo, podrías estar escribiendo logs de seguimiento en un archivo, pero cuando ocurre un error, escribir en el mismo archivo, luego en un archivo de errores y enviar un email al mismo tiempo…

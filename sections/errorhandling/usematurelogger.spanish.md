# Utilizar un logger maduro para incrementar la visibilidad de errores

### Párrafo de explicación

A todos nos encanta console.log, pero evidentemente un logger persistente y con buena reputación como [Pino][pino] (la última novedad, centrado en el rendimiento) es algo obligatorio para proyectos serios.
herramientas de logueo de alto rendimiento nos ayudan a identificar errores y posibles problemas. Recomendaciones de logueo incluyen:

1. Loguear frecuentemente utilizando diferentes niveles (debug, info, error).
2. Cuando creamos logs, proporcionar información contextual mediante objetos JSON.
3. Monitorear y filtrar logs a través de una API de consulta de logs (incorporado en la mayoría de loggers) o de un software visor de logs.
4. Exponer y curar las entradas de log para el equipo de operaciones utilizando herramientas de inteligencia operacional como [Splunk](splunk).

[pino]: https://www.npmjs.com/package/pino
[splunk]: https://www.splunk.com

### Code Example

```JavaScript
const pino = require('pino');

// tu objeto logger centralizado
const logger = pino();

// código personalizado usando el logger
logger.info({ anything: 'This is metadata' }, 'Test Log Message with some parameter %s', 'some parameter');
```

### Cita de blog: "Requerimientos del logger"

Del blog Strong Loop ("Comparando logueo en Node.js de Winston y Bunyan" por Alex Corbatchev, Jun 24, 2014):

> Lets identify a few requirements (for a logger):
1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
2. Logging format should be easily digestible by humans as well as machines.
3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…

> Vamos a identificar algunos requerimientos (para un logger):
1. Marca de tiempo en cada linea de logueo. Este es bastante auto-explicativo – deberías poder decir cuándo ocurrió cada entrada de log.
2. El formato de logs debería ser fácilmente interpretado por humanos así como por máquinas
3. Permite múltiples destinos configurables. Por ejemplo, podrías estar escribiendo logs de seguimiento en un archivo, pero cuando ocurre un error, escribir en el mismo archivo, luego en un archivo de errores y enviar un email al mismo tiempo…


### ¿Dónde está Winston?

Para mas información en porqué algunos de los favoritos (Como Winston) no están incluidos en la lista actual de mejores prácticas recomendadas consulte [#684][#684]

[#684]: https://github.com/goldbergyoni/nodebestpractices/issues/684

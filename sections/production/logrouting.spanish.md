# Su código de aplicación no debería manejar ruteo de log

<br><br>

### Párrafo de explicación

El código de aplicación no debería manejar ruteo de logs, en su lugar debería utilizar una utilidad de logger para escribir a `stdout/stderr` (`salida estándar / error estándar`). "Ruteo de logs" significa elegir y pasar logs a otra ubicación que su aplicación o proceso de aplicación, por ejemplo, escribir los logs a un archivo, base de datos, etc. La razón para esto es se divide en dos: 1) Separación de problemas y 2) [12 factores de mejores prácticas en aplicaciones modernas](https://12factor.net/logs).

Normalmente pensamos en "separación de problemas" en términos de piezas de código entre servicios y también entre servicios en si, pero esto aplica a componentes más "infaestructurales" también. Tu código de aplicación no debería manejar algo que debería ser manejado por infraestructura/ el entorno de ejecución (mas común en estos días, contenedores). ¿Qué pasa si defines las ubicaciones de los dos en tu aplicación, pero después necesitas cambiar la ubicación? Esto resulta en un cambio en el código y despliegue. Cuando trabajas con plataformas basadas en contenedores/la nube, los contenedores pueden dar vueltas y apagarse cuando escalas a rendimiento lo piden, asi que no podemos esta seguros donde terminara un archivo de logs. El entorno de ejecución (contenedor) debería decidir donde deberías ser enviados los archivos de logs. La aplicación sólo debería loguear lo que necesita a `stdout/stderr`, y el entorno de ejecución debería ser configurado para tomar el flujo de logs de ahí y rutearlo a donde necesita ir. También, aquellos en el equipo que necesiten especificar y/o cambiar los destinos de los log, no suelen ser los desarrolladores de la aplicación pero son parte del equipo de DevOps, y pueden no tener familiaridad con el código de la aplicación. Esto evita que ellos hagan cambios fácilmente.

<br><br>

### Código de ejemplo anti-patrón: Ruteo de logs acoplado fuertemente a la aplicación

```javascript
const { createLogger, transports, winston } = require('winston');
/**
   * Requiriendo `winston-mongodb` va a exponer
   * `winston.transports.MongoDB`
   */
require('winston-mongodb');
 
// Loguear a 2 archivos diferentes, que ahora la aplicación se debe de preocupar de ellos
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});

// Loguear a MongoDB, que ahora la aplicación se tiene que preocupar de
winston.add(winston.transports.MongoDB, options);
```

Haciéndolo de esta manera, la aplicación ahora maneja tanto la lógica de aplicación como la de negocios ¡Y la lógica de ruteo de logs!

<br><br>

### Código de ejemplo: Mejor manejo de logs + ejemplo de Docker en la aplicación

```javascript
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });
```
Then, in the docker container `daemon.json`:
```json5
{
  "log-driver": "splunk", // Solo usando Splunk como ejemplo, puede ser otro tipo de almacenamiento
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    //...
  }
}
```
Entonces este ejemplo termina viéndose `log -> stdout -> Docker container -> Splunk`

<br/><br/>

### Cita de Blog: "O'Reilly"

From the [O'Reilly blog](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs),
 > When you have a fixed number of instances on a fixed number of servers, storing logs on disk seems to make sense. However, when your application can dynamically go from 1 running instance to 100, and you have no idea where those instances are running, you need your cloud provider to deal with aggregating those logs on your behalf.

 > Cuando tienes un número fijo de instancias en un número fijo de servidores, almacenar logs en un disco tiene sentido. Pero, cuando tu aplicación puede dinámicamente ir de una instancia corriendo a 100, y no tienes idea de donde se están ejecutando esas instancias, necesitas un proveedor en la nube para manejar la agregación de los logs a tu nombre.

<br/><br/>

### Cita de Blog: "12-Factor"

From the [12-Factor best practices for logging](https://12factor.net/logs),
 > A twelve-factor app never concerns itself with routing or storage of its output stream. It should not attempt to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to stdout.
 
 > In staging or production deploys, each process’ stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations for viewing and long-term archival. These archival destinations are not visible to or configurable by the app, and instead are completely managed by the execution environment.

> Una aplicación de 12-factores, nunca se preocupa a si misma con ruteo o almacenamiento de flujos de salida. No debería de intentar escribir o manejar archivos de logs. En su lugar cada proceso en ejecución escribe su flujo de eventos, sin buffer, a la salida estándar (stdout).

> En despliegues en ensamblaje o producción, cada flujo de proceso es capturado por el entorno de ejecución, recopilado junto a los otros de la aplicación, y ruteados a uno o más destinos finales para ver y guardado a largo plazo. Estos destinos de guardado no son visibles ni configurados en la aplicación, en su lugar son completamente manejados por el entorno de ejecución

<br/><br/>

 ### Ejemplo: Vista general de la arquitectura utilizando Docker y Splunk como ejemplo

![alt text](/assets/images/logging-overview.png "vista general de ruteo de logs")

<br/><br/>
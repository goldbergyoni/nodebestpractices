# Haz transparente tu app mediante logs inteligentes

<br/><br/>

### Párrafo de explicación

Ya que vas a imprimir logs igual y obviamente necesitas una interfaz que resuma información de producción donde puedas rastrear errores y métricas centrales (por ejemplo, cuántos errores ocurren cada hora y cuál es el endpoint más lento de la API), ¿por qué no invertir un esfuerzo moderado en un framework de logging robusto que lo haga todo? Conseguir esto requiere una decisión reflexiva en tres pasos:

**1. Logging inteligente** – como mínimo, deberías utilizar una biblioteca de logging conocida, como [Winston](https://github.com/winstonjs/winston) o [Bunyan](https://github.com/trentm/node-bunyan), y guardar información significativa en cada inicio y fin de transacción. Considera también guardar logs en formato JSON y añadir información contextual mediante propiedades (por ejemplo, la id de usuario, el tipo de operación, etc.) para que el equipo de operaciones pueda actuar en esos aspectos. Incluye también una ID de transacción única en cada línea de log (para más información consulta el punto "Escribir ID de transacción en el log"). Un último punto a considerar también incluye un agente que registre el uso de recursos del sistema, como la memoria y la CPU, como Elastic Beat.

**2. Agregación inteligente** – una vez tengas información exhaustiva en el sistema de archivos del servidor, es hora de enviarla periódicamente a un sistema que agregue, configure y visualice estos datos. El Elastick stack, por ejemplo, es una opción popular y gratuita que ofrece todos los componentes para agregar y visualizar datos. Muchos productos comerciales ofrecen una funcionalidad similar reduciendo enormemente el tiempo de configuración y evitando el requisito de hosting.

**3. Visualización inteligente** – ahora que la información se ha agregado y se puede buscar, uno puede quedar satisfecho solo con poder buscar fácilmente entre los logs, pero esto puede ir mucho más allá sin necesidad de codificar ni invertir mucho esfuerzo. Ahora podemos mostrar importantes métricas operacionales como la tasa de error, uso promedio de la CPU durante el día, cuántos usuarios nuevos se unieron en la última hora y cualquier otra métrica que ayude a regular y mejorar nuestra app.

<br/><br/>

### Ejemplo de visualización: Kibana (parte del stack de Elastic) facilita la búsqueda avanzada en el contenido de logs.

![Kibana facilitates advanced searching on log content](/assets/images/smartlogging1.png "Kibana facilitates advanced searching on log content")

<br/><br/>

### Ejemplo de visualización: Kibana (parte del stack de Elastic) Visualiza datos basados en logs

![Kibana visualizes data based on logs](/assets/images/smartlogging2.jpg "Kibana visualizes data based on logs")

<br/><br/>

### Blog Quote: Logger Requirements

From the blog [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):

> Lets identify a few requirements (for a logger):
> 1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
> 2. Logging format should be easily digestible by humans as well as machines.
> 3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…

>Vamos a identificar unos cuantos requerimientos (para un logger):
> 1. Haz una marca de tiempo de cada línea de log. Este es auto explicativo - debes ser capaz de saber cuando ocurrió cada entrada del log.
> 2. El formato de logueo debe ser digerible por humanos y por máquinas.
> 3. Permite flujos configurables múltiples. Por ejemplo, puedes estar escribiendo el trazo de logs en un archivo, pero cuando sucede un error, escribir al mismo archivo, luego en un archivo de error y enviar un correo al mismo tiempo...

<br/><br/>

<br/><br/>

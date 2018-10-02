# Haz transparente tu app mediante logs inteligentes

<br/><br/>

### Párrafo de explicación

Ya que vas a printar logs igual y obviamente necesitas una interfaz que resuma información de producción donde puedas rastrear errores y métricas core (por ejemplo, cuántos errores ocurren cada hora y cuál es el endpoint más lento de la API), ¿por qué no invertir un esfuerzo moderado en un framework de logging robusto que lo haga todo? Conseguir esto requiere una decisión reflexiva en tres pasos:

**1. Logging inteligente** – como mínimo, deberías utilizar una librería de logging conocida, como [Winston](https://github.com/winstonjs/winston) o [Bunyan](https://github.com/trentm/node-bunyan), y guardar información significativa en cada inicio y fin de transacción. Considera también guardar logs en formato JSON y añadir información contextual mediante propiedades (por ejemplo, la id de usuario, el tipo de operación, etc.) para que el equipo de operaciones pueda actuar en esos aspectos. Incluye también una ID de transacción única en cada línea de log (para más información consulta el punto "Escribir ID de transacción en el log"). Un último punto a considerar también incluye un agente que registre el uso de recursos del sistema, como la memoria y la CPU, como Elastic Beat.

**2. Agregación inteligente** – una vez tengas información exhaustiva en el sistema de archivos del server, es hora de enviarla periódicamente a un sistema que agregue, configure y visualice estos datos. Elastick stack, por ejemplo, es una opción popular y gratuita que ofrece todos los componentes para agregar y visualizar datos. Muchos productos comerciales ofrecen una funcionalidad similar reduciendo enormemente el tiempo de configuración y evitando el requisito de hosting.

**3. Visualización inteligente** – ahora que la información se ha agregado y se puede buscar, uno puede quedar satisfecho solo con poder buscar fácilmente entre los logs, pero esto puede ir mucho más allá sin necesidad de codificar ni invertir mucho esfuerzo. Ahora podemos mostrar importantes métricas operacionales como la tasa de error, uso promedio de la CPU durante el día, cuántos usuarios nuevos se unieron en la última hora y cualquier otra métrica que ayude a regular y mejorar nuestra app.

<br/><br/>

### Visualization Example: Kibana (part of the Elastic stack) facilitates advanced searching on log content

![Kibana facilitates advanced searching on log content](/assets/images/smartlogging1.png "Kibana facilitates advanced searching on log content")

<br/><br/>

### Visualization Example: Kibana (part of the Elastic stack) visualizes data based on logs

![Kibana visualizes data based on logs](/assets/images/smartlogging2.jpg "Kibana visualizes data based on logs")

<br/><br/>

### Blog Quote: Logger Requirements

From the blog [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):

> Lets identify a few requirements (for a logger):
> 1. Timestamp each log line. This one is pretty self-explanatory – you should be able to tell when each log entry occurred.
> 2. Logging format should be easily digestible by humans as well as machines.
> 3. Allows for multiple configurable destination streams. For example, you might be writing trace logs to one file but when an error is encountered, write to the same file, then into error file and send an email at the same time…

<br/><br/>

<br/><br/>

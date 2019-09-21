# ¡Monitorizar!

<br/><br/>

### Párrafo de explicación

En el nivel más básico, monitorizar significa que puedes identificar *fácilmente* cuándo ocurren cosas malas en producción. Por ejemplo, recibiendo notificaciones por email o por Slack. El desafío es elegir el conjunto adecuado de herramientas que satisfaga tus requisitos sin dejarte en quiebra. Puedo sugerir, comenzar con la definición del conjunto básico de métricas que se deben vigilar para garantizar un estado saludable: CPU, RAM del servidor, RAM del proceso de Node (menos de 1.4 GB), número de errores durante el último minuto, número de reinicios del proceso y tiempo medio de respuesta. Y a continuación, revisar otras métricas más avanzadas para añadirlas a tu lista de deseos. Algunos ejemplos de monitorización de lujo son: DB profiling, medición de servicios cruzados (es decir, medición de transacciones de negocio), integración front-end, exposición de datos sin procesar a clientes de BI personalizados, notificaciones Slack y muchas otras.

Implementar tales funciones avanzadas requiere de una instalación más bien larga, o bien comprar un producto comercial como Datadog, NewRelic y similares. Desafortunadamente, incluso implementar lo básico no es una caminata por el parque, ya que algunas métricas están relacionadas con el hardware (CPU) y otras residen en el interior del proceso de Node (errores internos). Por lo tanto, todas las herramientas "simples" requieren configuración adicional. Por ejemplo, las soluciones de monitorización de proveedores cloud (ej. [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/)) te informarán de inmediato sobre las métricas del hardware, pero no sobre el comportamiento de la aplicación interna. Por otro lado, las soluciones basadas en logging como ElasticSearch carecen de la vista hardware por defecto. La solución es aumentar tu elección con las métricas ausentes. Por ejemplo, una opción popular es enviar logs de la aplicación a [Elastic stack](https://www.elastic.co/products) y configurar algún agente adicional (por ejemplo, [Beat](https://www.elastic.co/products)) para compartir información relacionada con el hardware y así obtener el cuadro completo.

<br/><br/>

### Monitoring example: AWS cloudwatch default dashboard. Hard to extract in-app metrics

![AWS cloudwatch default dashboard. Hard to extract in-app metrics](/assets/images/monitoring1.png)

<br/><br/>

### Monitoring example: StackDriver default dashboard. Hard to extract in-app metrics

![StackDriver default dashboard. Hard to extract in-app metrics](/assets/images/monitoring2.jpg)

<br/><br/>

### Monitoring example: Grafana as the UI layer that visualizes raw data

![Grafana as the UI layer that visualizes raw data](/assets/images/monitoring3.png)

<br/><br/>

### What Other Bloggers Say

From the blog [Rising Stack](http://mubaloo.com/best-practices-deploying-node-js-applications/):

> …We recommend you to watch these signals for all of your services:
> Error Rate: Because errors are user facing and immediately affect your customers.
> Response time: Because the latency directly affects your customers and business.
> Throughput: The traffic helps you to understand the context of increased error rates and the latency too.
> Saturation: It tells how “full” your service is. If the CPU usage is 90%, can your system handle more traffic? …

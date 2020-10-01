# Detectar errores y tiempos de inactividad a través de productos APM

### Párrafo de explicación

Exception != Error. La gestión tradicional de errores asume la existencia de Exception, pero los errores de la aplicación pueden manifestarse en forma de rutas de ejecución lentas, tiempos de inactividad de la API, falta de recursos computacionales y más. Es ahí donde los productos APM se tornan realmente útiles ya que permiten detectar una amplia variedad de problemas "enterrados", proactivamente y con una configuración mínima. Entre las características más comunes de productos APM están, por ejemplo, el alertar cuando se presentan errores HTTP API, detectar cuando el tiempo de respuesta de la API cae por debajo del umbral establecido, localizar ["code smells"](https://es.wikipedia.org/wiki/Hediondez_del_c%C3%B3digo), monitorizar recursos del servidor, proporcionar inteligencia operacional mediante paneles con métricas de IT y muchas otras funciones útiles. La mayoría de proveedores de este tipo de productos ofrecen algún plan gratuito.

### Wikipedia sobre APM

En los campos de tecnología de la información y sistemas de administración, Administración de Performance de la Aplicación (APM, por sus siglas en inglés) es el monitoreo y administración de la performance y disponibilidad de aplicaciones de software. APM se encarga de detectar y diagnosticar problemas de performance de aplicaciones complejas para mantener el nivel de servicio esperado. APM es "la traducción de métricas de TI a significado de negocio."

### Entendiendo el mercado de APM

Los productos APM constituyen 3 segmentos principales:

1. Monitoreo de Webs o APIs – servicios externos que constantemente monitorean el tiempo de actividad y performance mediante peticiones HTTP. Pueden ser configurados en unos pocos minutos. Algunos ejemplos son: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)

2. Instrumentación de código – familia de productos que requiere embeber un agente en la aplicación para usar características como detección de código lento, estadística de excepciones, monitoreo de performance y mucho más. Algunos ejemplos son New Relic, App Dynamics

3. Tableros de inteligencia operativa – esta línea de productos está enfocada en facilitar métricas y contenido curado al equipo de operaciones que ayude a tener visibilidad de la performance de la aplicación con facilidad. Esto, en general, involucra agregar múltiples fuentes de información (logs de aplicación, logs de BD, logs de servidores, etc) y trabajo previo de diseño de tableros. Algunos ejemplos son [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)

### Ejemplo: UpTimeRobot.Com – Dashboard de monitoreo de Sitio web
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "Dashboard de monitoreo de Sitio web")

### Ejemplo: AppDynamics.Com – Monitoreo end to end combinado con instrumentación de código
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "Monitoreo end to end combinado con instrumentación de código")

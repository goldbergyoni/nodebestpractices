# Detectar errores y tiempos de inactividad a través de productos APM

### Párrafo de explicación

Exception != Error. La gestión tradicional de errores asume la existencia de Exception, pero los errores de la aplicación pueden manifestarse en forma de rutas de ejecución lentas, tiempos de inactividad de la API, falta de recursos computacionales y más. Es ahí donde los productos APM se tornan realmente útiles ya que permiten detectar una amplia variedad de problemas "enterrados", proactivamente y con una configuración mínima. Entre las características más comunes de productos APM están, por ejemplo, el alertar cuando se presentan errores HTTP API, detectar cuando el tiempo de respuesta de la API cae por debajo del umbral establecido, localizar ["code smells"](https://es.wikipedia.org/wiki/Hediondez_del_c%C3%B3digo), monitorizar recursos del servidor, proporcionar inteligencia operacional mediante paneles con métricas de IT y muchas otras funciones útiles. La mayoría de proveedores de este tipo de productos ofrecen algún plan gratuito.

### Wikipedia about APM

In the fields of information technology and systems management, Application Performance Management (APM) is the monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain an expected level of service. APM is “the translation of IT metrics into business meaning ([i.e.] value)
Major products and segments

### Understanding the APM marketplace

APM products constitute 3 major segments:

1. Website or API monitoring – external services that constantly monitor uptime and performance via HTTP requests. Can be set up in few minutes. Following are few selected contenders: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)

2. Code instrumentation – product family which requires embedding an agent within the application to use features like slow code detection, exception statistics, performance monitoring and many more. Following are few selected contenders: New Relic, App Dynamics

3. Operational intelligence dashboard – this line of products is focused on facilitating the ops team with metrics and curated content that helps to easily stay on top of application performance. This usually involves aggregating multiple sources of information (application logs, DB logs, servers log, etc) and upfront dashboard design work. Following are few selected contenders: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)



 ### Example: UpTimeRobot.Com – Website monitoring dashboard
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "Website monitoring dashboard")

 ### Example: AppDynamics.Com – end to end monitoring combined with code instrumentation
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "end to end monitoring combined with code instrumentation")

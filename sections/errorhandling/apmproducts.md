# Discover errors and downtime using APM products


### One Paragraph Explainer

Exception != Error. Traditional error handling assumes the existence of Exception but application errors might come in the form of slow code paths, API downtime, lack of computational resources and more. This is where APM products come in handy as they allow to detect a wide variety of ‘burried’ issues proactively with a minimal setup. Among the common features of APM products are for example alerting when the HTTP API returns errors, detect when the API response time drops below some threshold, detection of ‘code smells’, features to monitor server resources, operational intelligence dashboard with IT metrics and many other useful features. Most vendors offer a free plan.

### Wikipedia about APM

In the fields of information technology and systems management, Application Performance Management (APM) is the monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain an expected level of service. APM is “the translation of IT metrics into business meaning ([i.e.] value)". Major products and segments.

### Understanding the APM marketplace

APM products constitute 3 major segments:

1. Website or API monitoring – external services that constantly monitor uptime and performance via HTTP requests. Can be set up in few minutes. Following are few selected contenders: [Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)

2. Code instrumentation – product family which requires embedding an agent within the application to use features like slow code detection, exception statistics, performance monitoring and many more. Following are few selected contenders: New Relic, App Dynamics

3. Operational intelligence dashboard – this line of products is focused on facilitating the ops team with metrics and curated content that helps to easily stay on top of application performance. This usually involves aggregating multiple sources of information (application logs, DB logs, servers log, etc) and upfront dashboard design work. Following are few selected contenders: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)



 ### Example: UpTimeRobot.Com – Website monitoring dashboard
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "Website monitoring dashboard")

 ### Example: AppDynamics.Com – end to end monitoring combined with code instrumentation
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "end to end monitoring combined with code instrumentation")

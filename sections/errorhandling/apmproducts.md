# Discover errors and downtime using APM products


### One Paragraph Explainer

Exception != Error. Traditional error handling assumes the existence of Exception but application errors might come in the form of slow code paths, API downtime, lack of computational resources and more. This is where APM products come handy as they allow with minimal setup to detect a wide variety of ‘burried’ issues proactively. Among the common features of APM products are – alerting when HTTP API returns errors, detect when API response time drops below some threshold, detection of ‘code smells’, monitor server resources, operational intelligence dashboard with IT metrics and many other useful features. Most vendors offer a free plan.

### Wikipedia about APM

In the fields of information technology and systems management, Application Performance Management (APM) is the monitoring and management of performance and availability of software applications. APM strives to detect and diagnose complex application performance problems to maintain an expected level of service. APM is “the translation of IT metrics into business meaning ([i.e.] value)
Major products and segments

### Understanding the APM marketplace

APM products constitues 3 major segments:

1. Website or API monitoring – external services that constantly monitor uptime and performance via HTTP requests. Can be setup in few minutes. Following are few selected contenders: Pingdom, Uptime Robot, and New Relic

2. Code instrumentation – products family which require to embed an agent within the application to benefit feature slow code detection, exceptions statistics, performance monitoring and many more. Following are few selected contenders: New Relic, App Dynamics

3. Operational intelligence dashboard – these line of products are focused on facilitating the ops team with metrics and curated content that helps to easily stay on top of application peroformance. This usually involves aggregating multiple sources of information (application logs, DB logs, servers log, etc) and upfront dashboard design work. Following are few selected contenders: Datadog, Splunk    



 ### Example: UpTimeRobot.Com – Website monitoring dashboard
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/uptimerobot.jpg "Website monitoring dashboard")

### Example: [Keymetrics.io](https://keymetrics.io) – Complete monitoring and code instrumentation
![alt text](https://github.com/Unitech/nodebestpractices/blob/master/assets/images/apm-keymetrics.png "Website monitoring dashboard")

 ### Example: AppDynamics.Com – end to end monitoring combined with code instrumentation
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/app-dynamics-dashboard.png "end to end monitoring combined with code instrumentation")

# Monitoring!

<br/><br/>


### One Paragraph Explainer

At the very basic level, monitoring means you can *easily identify when bad things happen at production. For example, by getting notified by email or Slack. The challenge is to choose the right set of tools that will satisfy your requirements without breaking your bank. May I suggest, start with defining the core set of metrics that must be watched to ensure a healthy state – CPU, server RAM,  Node process RAM (less than 1.4GB), the amount of errors in the last minute, number of process restarts, average response time. Then go over some advanced features you might fancy and add to your wish list. Some examples of luxury monitoring feature: DB profiling, cross-service measuring (i.e. measure business transaction), frontend integration, expose raw data to custom BI clients, Slack notifications and many others.

Achieving the advanced features demands lengthy setup or buying a commercial product such as Datadog, newrelic and a like. Unfortunately, achieving also the basics is not a walk in the park as some metrics are hardware-related (CPU) and others live within the node process (internal errors) thus All the straightforward tools require some additional setup. For example, cloud vendor monitoring solutions (e.g. [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/)) will tell you immediately about the hardware metric but nothing about the internal app behavior. On the other end, Log-based solutions such as ElaticSeatch lack by default the hardware view. The solution is to augment your choice with missing metrics, for example, a popular choice is sending application logs to [Elastic stack](https://www.elastic.co/products) and configure some additional agent (e.g. [Beat](https://www.elastic.co/products)) to share with it hardware-related information to get the full picture.


<br/><br/>


### Monitoring example: AWS cloudwatch default dashboard. Hard to extract in-app metrics

![Monitoring example: AWS cloudwatch default dashboard. Hard to extract in-app metrics](/assets/images/monitoring1.png "Monitoring example: AWS cloudwatch default dashboard. Hard to extract in-app metrics")

<br/><br/>

### Monitoring example: StackDriver default dashboard. Hard to extract in-app metrics

```javascript
code here
```

<br/><br/>

### Monitoring example: Grafana as the UI layer that visualizes raw data

```javascript
code here
```

<br/><br/>
### Blog Quote: "Title"
 From the blog pouchdb.com, ranked 11 for the keywords “Node Promises”
 
 > …text here

 <br/><br/>
 
 ### Image title
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")

 
<br/><br/>

# Correlation ID: help your logs tell you a story

### One Paragraph Explainer

Correlation ID is one of the best problem-solving patterns. It lets you linking log records, even if they belong to different services. If your system consumes other services and is itself a producer service, adding a correlaction ID is a must. By this pattern, your transaction logs can become into a story that tells itself by filtering your logs with a specific correlation ID, instead of try linking the cross-server transaction logs to each other by yourself. Can save your day when a process including 20 microservices throw an exception in one of them, and you have no idea where did the problem started in the flow.

### Blog Quote: "We have a problem with promises"

 From the blog, pouchdb.com ranked 11 for the keywords “Node Promises”

 > … We recommend you to watch these signals for all of your services: Error Rate: Because errors are user facing and immediately affect your customers.
Response time: Because the latency directly affects your customers and business.
Throughput: The traffic helps you to understand the context of increased error rates and the latency too.
Saturation: It tells how “full” your service is. If the CPU usage is 90%, can your system handle more traffic?
…

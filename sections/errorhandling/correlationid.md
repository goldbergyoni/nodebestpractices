# Correlation ID: help your logs tell you a story

### One Paragraph Explainer

Correlation ID is one of the best problem-solving patterns. It lets you linking log records, even if they belong to different services. If your system consumes other services and is itself a producer service, adding a correlaction ID is a must. By this pattern, your transaction logs can become into a story that tells itself by filtering your logs with a specific correlation ID, instead of try linking the cross-server transaction logs to each other by yourself. Can save your day when a process including 20 microservices throw an exception in one of them, and you have no idea where did the problem started in the flow.

<br/><br/>

### Code Example: passing the correlation ID between services on the requets http context
Here is an example of using [express-http-context](https://www.npmjs.com/package/express-http-context) library to set the forwarded correlation ID on the http context:

```javascript
const httpContext = require('express-http-context');

app.use((req, res, next) => {
  // Extract the correlation ID from the previous request, or creating it if this is the first request in the transaction
  const correlationId = req.get('X-Correlation-ID') || uuid.v4();
  
  // Set the correaltion ID on the http context
  httpContext.set('correlationId', correlationId);
  
  // Set the correaltion ID on the response
  res.set('X-Correlation-ID', correlationId);

  next();
});
```

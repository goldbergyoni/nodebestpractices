# Correlation ID: help your logs tell you a story and give your error a context

### One Paragraph Explainer

Correlation ID is one of the best problem-solving patterns. It lets you link log records, even if they belong to different services. If your system consumes other services and is itself a producer service, adding a correlaction ID is a must. By this pattern, your transaction logs can become into a story that tells itself by filtering your logs with a specific correlation ID, instead of try linking the cross-services transaction logs to each other by yourself. It can save your day when a process including 20 different microservices throws an exception in one of them, and you have no idea where did the problem started across the flow.

<br/>

### Code Example: passing the correlation ID between services on the requet http context
Here is an example of using [express-http-context](https://www.npmjs.com/package/express-http-context) library as part of a middleware to set the forwarded correlation ID on the http context after it was extracted from the request. 
If the correlation ID doesn't exist on the request, since this may be the first request in the requests chain, it's being generated.

```javascript
const httpContext = require('express-http-context');

app.use((req, res, next) => {
  // Extract the correlation ID from the previous request, or generate it if this is the first request in the transaction
  const correlationId = req.get('X-Correlation-ID') || uuid.v4();
  
  // Set the correaltion ID on the http context
  httpContext.set('correlationId', correlationId);
  
  // Set the correaltion ID on the response
  res.set('X-Correlation-ID', correlationId);

  next();
});
```
<br/>

### Blog Quote: "The notion of a Correlation ID is simple. It’s a value that is common to all requests, messages and responses in a given transaction. With this simplicity you get a lot of power."

From [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> When you can group a transaction’s events under a unifying value, the Correlation ID, you can spend your time fixing the problem rather than finding the problem. Without a Correlation ID, well… there is a saying, “if you put a chimpanzee in front of typewriter for eternity, eventually the animal will type out Hamlet.” The same could be said for logging without a Correlation ID, except none of us will be here for eternity. Use a Correlation ID. You will be glad you did.

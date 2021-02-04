# Assign ‘TransactionId’ to each log statement

<br/><br/>

### One Paragraph Explainer

A typical log is a warehouse of entries from all components and requests. Upon detection of some suspicious line or error, it becomes hairy to match other lines that belong to the same specific flow (e.g. the user “John” tried to buy something). This becomes even more critical and challenging in a microservice environment when a request/transaction might span across multiple computers. Address this by assigning a unique transaction identifier value to all the entries from the same request so when detecting one line one can copy the id and search for every line that has similar transaction id. However, achieving this In Node is not straightforward as a single thread is used to serve all requests –consider using a library that that can group data on the request level – see code example on the next slide. When calling other microservices, pass the transaction id using an HTTP header like “x-transaction-id” to keep the same context.

<br/><br/>

### Code example: sharing TransactionId among current request functions 
using [cls-rtracer](https://www.npmjs.com/package/cls-rtracer) (a library based on [async-local-storage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage), implemented for Express & Koa middlewares and Fastify & Hapi plugins)

```javascript
const express = require('express');
const rTracer = require('cls-rtracer');

const app = express();

app.use(rTracer.expressMiddleware());

app.get('/getUserData/{id}', async (req, res, next) => {
    try {
        const user = async usersRepo.find(req.params.id);

        // At any point in the app after cls-rtracer middleware was initialized, even when 'req' object doesn't exist, the TransactionId is reachable
        const transactionId = rTracer.id();

        logger.info(`user ${user.id} data was fetched successfully`, { transactionId });

        res.json(user);
    } catch (err) {

        // As next step I'd recommand using rTracer.id() from inside the logger component, to prevent from using it all over the code
        logger.error(`error while fetching user id ${req.params.id} data`, { transactionId: rTracer.id(), error: err });

        next(err);
    }
})
```
<br/>
### Code example: sharing TransactionId among microservices 

```javascript
// cls-tracer has the ability to store the TransactionId on your service outgoing requests headers, and extract the TransactionId from incoming requests headers, just by overriding the default middleware config
app.use(rTracer.expressMiddleware({
    // Add TransactionId to the header
    echoHeader: true,
    // Respect TransactionId from header
    useHeader: true,
    // Request and respone header name
    headerName: 'x-transaction-id'
}));

```
<br/>

### Good: assign 'TransactionId' to your logs
image TBD
### Bad: logs without any flow correaltion 
image TBD

<br/>

### Blog Quote: "The notion of a Correlation ID is simple. It’s a value that is common to all requests, messages and responses in a given transaction. With this simplicity you get a lot of power."

From [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> In the old days when transactional behavior happened in a single domain, in step-by-step procedures, keeping track of request/response behavior was a simple undertaking. However, today one request to a particular domain can involve a myriad of subsequent asynchronous requests from the starting domain to others. For example, you send a request to Expedia, but behind the scenes Expedia is forwarding your request as a message to a message broker. Then that message is consumed by a hotel, airline and car rental agency that responds asynchronously too. So the question comes up, with your one request being passed about to a multitude of processing consumers, how do we keep track of the transaction? The answer is: use a Correlation ID.
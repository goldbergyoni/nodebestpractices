# Assign ‘TransactionId’ to each log statement

<br/><br/>

### One Paragraph Explainer

A typical log is a warehouse of entries from all components and requests. Upon detection of some suspicious line or error, it becomes hairy to match other lines that belong to the same specific flow (e.g. the user “John” tried to buy something). This becomes even more critical and challenging in a microservice environment when a request/transaction might span across multiple computers. Address this by assigning a unique transaction identifier value to all the entries from the same request so when detecting one line one can copy the id and search for every line that has similar transaction id. However, achieving this In Node is not straightforward as a single thread is used to serve all requests –consider using a library that that can group data on the request level – see code example on the next slide. When calling other microservices, pass the transaction id using an HTTP header like “x-transaction-id” to keep the same context.

<br/><br/>

### Code example: sharing TransactionId among current request functions using [async-local-storage](https://nodejs.org/api/async_hooks.html#async_hooks_class_asynclocalstorage):

 You can think of async-local-storage as the node.js alternative to thread local storage. 
 It is basically a storage for asynchronous flows in Node (more details [here](https://www.freecodecamp.org/news/async-local-storage-nodejs/)).

```javascript
code here
```
<br/>

<details>
<summary><strong>Code example: Using helper library to simplify the syntax</strong></summary>

Sharing TransactionId among current request functions using [cls-rtracer](https://www.npmjs.com/package/cls-rtracer) (a library based on async-local-storage, implemented for Express & Koa middlewares and Fastify & Hapi plugins)

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
        // The error is being passed to the middleware, and there's no need to pass over the TransactionId
        next(err);
    }
})

// Error handling middleware has access to the TransactionId
app.use(async (err, req, res, next) => {
    err.transactionId = rTracer.id();

    await errorHandler.handleError(err, res);
});
```
<br/>

Sharing TransactionId among microservices

```javascript
// cls-tracer has the ability to store the TransactionId on your service outgoing requests headers, and extract the TransactionId from incoming requests headers, just by overriding the default middleware config
app.use(rTracer.expressMiddleware({
    // Add TransactionId to the header
    echoHeader: true,
    // Respect TransactionId from header
    useHeader: true,
    // TransactionId header name
    headerName: 'x-transaction-id'
}));

const axios = require("axios");

// Now, the external service will automaticlly get the current TransactionId as header
const response = await axios.get('https://externalService.com/api/getAllUsers');
```
</details>
<br/>

NOTICE: there are two restrictions on using async-local-storage:
1. It requires Node v.14. 
2. It is based on a lower level construct in Node called async_hooks which is still experimental, so you may have the fear of performance problems. Even if they do exist, they are very negligible, but you should make your own considerations.

<br/>

<details>
<summary><strong>Code example - typical Express configuration without async-local-storage dependence</strong></summary>

```javascript
// when receiving a new request, start a new isolated context and set a transaction id. The following example is using the npm library continuation-local-storage to isolate requests

const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info('Starting to get something by id');
        // other logic comes here
    }
}

// The logger can now append the transaction id to each entry so that entries from the same request will have the same value
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```
</details>

<br/><br/>

### Good: Logs with an assigned TransactionId - can be used as filter to see only a single flow
![alt text](https://i.ibb.co/YjJwgbN/logs-with-transaction-id.jpg "Logs with transaction id")
<br/><br/>

### Bad: logs without a TransactionId - no option to use a filter and see only a single flow, you need to understand by yourself which logs are relevant between all the "noise" around
![alt text](https://i.ibb.co/PFgVNfn/logs-withtout-transaction-id.jpg "Logs with transaction id")

<br/><br/>

### Blog Quote: "The notion of a Correlation ID is simple. It’s a value that is common to all requests, messages and responses in a given transaction. With this simplicity you get a lot of power."

From [rapid7](https://blog.rapid7.com/2016/12/23/the-value-of-correlation-ids/)

> In the old days when transactional behavior happened in a single domain, in step-by-step procedures, keeping track of request/response behavior was a simple undertaking. However, today one request to a particular domain can involve a myriad of subsequent asynchronous requests from the starting domain to others. For example, you send a request to Expedia, but behind the scenes Expedia is forwarding your request as a message to a message broker. Then that message is consumed by a hotel, airline and car rental agency that responds asynchronously too. So the question comes up, with your one request being passed about to a multitude of processing consumers, how do we keep track of the transaction? The answer is: use a Correlation ID.
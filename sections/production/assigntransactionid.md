# Assign ‘TransactionId’ to each log statement

<br/><br/>

### One Paragraph Explainer

A typical log is a warehouse of entries from all components and requests. Upon detection of some suspicious line or error, it becomes hairy to match other lines that belong to the same specific flow (e.g. the user “John” tried to buy something). This becomes even more critical and challenging in a microservice environment when a request/transaction might span across multiple computers. Address this by assigning a unique transaction identifier value to all the entries from the same request so when detecting one line one can copy the id and search for every line that has similar transaction Id. However, achieving this In Node is not straightforward as a single thread is used to serve all requests –consider using a library that that can group data on the request level – see code example on the next slide. When calling other microservice, pass the transaction Id using an HTTP header like “x-transaction-id” to keep the same context.

<br/><br/>

### Code example: typical Express configuration

```javascript
// when receiving a new request, start a new isolated context and set a transaction Id. The following example is using the npm library continuation-local-storage to isolate requests

const { createNamespace } = require('continuation-local-storage');
var session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by Id');
});

// Now any other service or components can have access to the contextual, per-request, data
class someService {
    getById(id) {
        logger.info(“Starting to get something by Id”);
        // other logic comes here
    }
}

// The logger can now append the transaction-id to each entry so that entries from the same request will have the same value
class logger {
    info (message)
    {console.log(`${message} ${session.get('transactionId')}`);}
}
```

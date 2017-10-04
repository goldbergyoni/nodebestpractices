# Create a maintenance endpoint

<br/><br/>


### One Paragraph Explainer

A maintenance endpoint is a plain secured HTTP API that is part of the app code and it’s purpose if for the ops/production team to view and invoke multiple useful functionality. For example, it can return a head dump (memory snapshot) of the process, report whether there are some memory leaks and even allow to execute REPL command directly. This endpoint is needed where the conventional devops tools (monitoring products, logs, etc) fails to gather some specific type of information or you choose not to buy/install such tools. The golden rule is using professional and external tools for monitoring and maintaining the production, these are usually more robust and accurate. That said, there are likely to be cases where the generic tools will fail to extract information that is specific to Node or to your app – for example, should you wish to generate a memory snapshot at the moment GC completed a cycle – few NPM libraries will be glad to perform this for you but popular monitoring tools will likely to miss this functionality

<br/><br/>


### Code example: generating a head dump via code

```javascript
var heapdump = require('heapdump');
 
router.get('/ops/headump', (req, res, next) => {
    logger.info(`About to generate headump`);
    heapdump.writeSnapshot(function (err, filename) {
        console.log('headump file is ready to be sent to the caller', filename);
        fs.readFile(filename, "utf-8", function (err, data) {
            res.end(data);
        });
    });
});
```

<br/><br/>

### Recommended Watch

📺 [Getting your Node.js app production ready](http://mubaloo.com/best-practices-deploying-node-js-applications)
![Getting your Node.js app production ready](/assets/images/createmaintenanceendpoint1.png "Getting your Node.js app production ready")

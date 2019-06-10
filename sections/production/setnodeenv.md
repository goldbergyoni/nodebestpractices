# Set NODE_ENV = production

<br/><br/>

### One Paragraph Explainer

Process environment variables is a set of key-value pairs made available to any running program, usually for configuration purposes. Though any variables can be used, Node encourages the convention of using a variable called NODE_ENV to flag whether we’re in production right now. This determination allows components to provide better diagnostics during development, for example by disabling caching or emitting verbose log statements. Any modern deployment tool – Chef, Puppet, CloudFormation, others – support setting environment variables during deployment

<br/><br/>

### Code example: Setting and reading the NODE_ENV environment variable

```javascript
// Setting environment variables in bash before starting the node process
$ NODE_ENV=development
$ node

// Reading the environment variable using code
if (process.env.NODE_ENV === “production”)
    useCaching = true;
```

<br/><br/>

### What Other Bloggers Say

From the blog [dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/):
> ...In Node.js there is a convention to use a variable called NODE_ENV to set the current mode. We see that it, in fact, reads NODE_ENV and defaults to ‘development’ if it isn’t set. We clearly see that by setting NODE_ENV to production the number of requests Node.js can handle jumps by around two-thirds while the CPU usage even drops slightly. *Let me emphasize this: Setting NODE_ENV to production makes your application 3 times faster!*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>

# Run unsafe code in a sandbox

### One Paragraph Explainer

As a rule of thumb, one should run his own JavaScript files only. Theories aside, real-world scenarios demand to execute JavaScript files that are being passed dynamically at run-time. For example, consider a dynamic framework like webpack that accepts custom loaders and execute those dynamically during build time. In the existence of some malicious plugin we wish to minimize the damage and maybe even let the flow terminate successfully - this requires to run the plugins in a sandbox environment that is fully isolated in terms of resources, crashes and the information we share with it. Three main options can help in achieving this isolation: 

- a dedicated child process - this provides a quick information isolation but demand to tame the child process, limit its execution time and recover from errors
- a cloud serverless framework ticks all the sandbox requirements but deployment and invoking a FaaS function dynamically is not a walk in the park
- some npm libraries, like [sandbox](https://www.npmjs.com/package/sandbox) and [vm2](https://www.npmjs.com/package/vm2) allow execution of isolated code in 1 single line of code. Though this latter option wins in simplicity it provides a limited protection

### Code example - Using Sandbox library to run code in isolation

```javascript
const Sandbox = require('sandbox');
const s = new Sandbox();

s.run('lol)hai', (output) => {
  console.log(output);
  //output='Syntax error'
});

// Example 4 - Restricted code
s.run('process.platform', (output) => {
  console.log(output);
  //output=Null
});

// Example 5 - Infinite loop
s.run('while (true) {}', (output) => {
  console.log(output);
  //output='Timeout'
});
```

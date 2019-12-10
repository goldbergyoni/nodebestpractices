# Avoid JS eval statements

### One Paragraph Explainer

`eval()`, `setTimeout()`, `setInterval()`, and `new Function()` are global functions, often used in Node.js, which accept a string parameter representing a JavaScript expression, statement, or sequence of statements. The security concern of using these functions is the possibility that untrusted user input might find its way into code execution leading to server compromise, as evaluating user code essentially allows an attacker to perform any actions that you can. It is suggested to refactor code to not rely on the usage of these functions where user input could be passed to the function and executed.

### Code example

```javascript
// example of malicious code which an attacker was able to input
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// malicious code executed
eval(userInput);
```

### What other bloggers say

From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> The eval() function is perhaps of the most frowned upon JavaScript pieces from a security
perspective. It parses a JavaScript string as text, and executes it as if it were a JavaScript code.
Mixing that with untrusted user input that might find it’s way to eval() is a recipe for disaster that
can end up with server compromise.

# Prevent malicious RegEx from overloading your single thread execution

<br/><br/>

### One Paragraph Explainer

The risk that is inherent with the use of Regular Expressions is the computational resources that require to parse text and match a given pattern.  For the Node.js platform, where a single-thread event-loop is dominant, a CPU-bound operation like resolving a regular expression pattern will render the application unresponsive.
Avoid regex when possible or defer the task to a dedicated library like [validator.js](https://github.com/chriso/validator.js), or [safe-regex](https://github.com/substack/safe-regex) to check if the regex pattern is safe.

Some [OWASP examples](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) for vulnerable regex patterns:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### Code Example – Enabling SSL/TLS using the Express framework

```javascript
var saferegex = require('safe-regex');
var emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
var validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

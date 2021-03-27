# Prevent malicious RegEx from overloading your single thread execution

### One Paragraph Explainer

The risk that is inherent with the use of Regular Expressions is the computational resources that require to parse text and match a given pattern. For the Node.js platform, where a single-thread event-loop is dominant, a CPU-bound operation like resolving a regular expression pattern will render the application unresponsive.
Avoid RegEx when possible or defer the task to a dedicated library like [validator.js](https://github.com/chriso/validator.js), or [safe-regex](https://github.com/substack/safe-regex) to check if the RegEx pattern is safe.

Some [OWASP examples](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) for vulnerable RegEx patterns:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### Code Example – Validating exponential time RegEx and using validators instead of RegEx

```javascript
const saferegex = require('safe-regex');
const emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
const validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### Book Quote: "A vulnerable Regular Expression is known as one which applies repetition"

From the book [Essential Node.js Security](https://leanpub.com/nodejssecurity) by Liran Tal
> Often, programmers will use RegEx to validate that an input received from a user conforms to an expected condition. A vulnerable Regular Expression is known as one which applies repetition to a repeating capturing group, and where the string to match is composed of a suffix of a valid matching pattern plus characters that aren't matching the capturing group.


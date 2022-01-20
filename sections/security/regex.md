# Prevent malicious RegEx from overloading your single thread execution

### One Paragraph Explainer

정규표현식을 사용함에 있어서 내재된 위험성은 주어진 패턴에 대입하는 동안 발생하는 리소스를 사용하는 데에 있다. 노드 플랫폼에 있어서는, 정규표현식을 사용하는 cpu-bound 작업은 싱글 스레드 작업에 매우 취약한다. 다른 서드파티 벨리데이터를 사용한 벨리데이션 작업을 사용해야 한다.

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
> 개발자들은 종종 사용자들이 입력하는 값이 유효한지 정규표현식을 사용해서 검증한다. 취약한 정규표현식은 반복을 적용하는 정규식으로 알려져 있으며, 일치시킬 문자열이 유요한 패턴의 점미사와 일치하지 안흔 문자로 구성되어 있다.
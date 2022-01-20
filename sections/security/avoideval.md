# Avoid JS eval statements

### One Paragraph Explainer

`eval()`, `setTimeout()`, `setInterval()`, 그리고 `new Function()`는 노드에서 자주 쓰이는 글로벌 함수다. 여기에는 자바 스크립트의 표현, 선언의 연속 등을 string인자로 받는다. 이러한 함수를 사용하는 것은, 신원 불상의 유저가 서버 다운을 발생시킬 수 있는 코드 실행을 시도할 수 있는 가능성을 열어 놓는다. 유저의 코드를 평가하는 것도 공격자들이 활동할 수 있는 여지가 있다. 코드를 리펙토링 할 때에는 사용자가 함수를 실핼시킬 수 있는 이와같은 함수에 의존하지 않아야 한다.

### Code example

```javascript
// example of malicious code which an attacker was able to input
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// malicious code executed
eval(userInput);
```

### What other bloggers say

From the Essential Node.js Security book by [Liran Tal](https://leanpub.com/nodejssecurity):
> evak()함수는 보안적 측면에서 자바 스크립트 내에 가장 위험한 부분이라고 할 수 있다. 이 함수는 자바 스크립트 string을 문자로 파싱하고, 그 문자가 마치 자바스크립트 코드인것 처럼 실행한다. 악의적인 사용자가 eval()함수에 다다갈 수 있는 길을 알게된다면 서버는 곧 무너지게 될 것이다.
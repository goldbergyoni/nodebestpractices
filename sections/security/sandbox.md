# Run unsafe code in a sandbox

### One Paragraph Explainer

경험상, 자바스크립트는 별도로 실행시켜야 햔다. 이론을 벗어나서 실제로는 자바스크립트 파일은 다이나믹하게 실행된다. 예를들어 커스텀 로더와 실행기가 빌드 시간동안 다이나믹하게 실행되는 웹팩을 고려해보자. 악성 플러그인이 존재한다면 우리는 피해가 최소화되고 흐름이 성공적으로 종료되길 바란다. 플러그인을 실핸하기 위해서는 자원들을 완전히 고립시킨 샌드박스 환경에서 실행되어야 한다. 고립을 구현하기 위해서 다음과 같은 세가지 옵션이 있다.

- 자식 프로세스 - 실행 시간을 제한하면서 빠르게 고립을 제공할 수 있다.

- 클라우드 서버리스 프레임워크는 샌드박스를 제공할 수 있다. 그러나 Faas 함수를 다이나믹하게 배포하고 실행하는건 쉽진 않다.

- npm 라이브러리 [sandbox](https://www.npmjs.com/package/sandbox) and [vm2](https://www.npmjs.com/package/vm2) 코드 한줄만으로 고립이 가능하다.

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

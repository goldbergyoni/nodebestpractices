# 위험한 코드는 샌드박스 안에서 실행해라

### 한문단 요약

경험상 자신의 JavaScript 파일만 실행해야 한다.
이론은 미뤄두고, 실제로는 런타임에 동적으로 전달되는 JavaScript 파일을 실행해야 한다.
예를 들어, 사용자 정의 로더를 허용하고 빌드 시간동안 동적으로 실행되는 webpack과 같은 프레임워크의 사용을 떠올려 보아라.
일부 악성 플러그인이 있는 경우 우리는 손상을 최소화하고 흐름이 성공적으로 종료되도록 하기를 원한다. 이를 위해서는 리소스, 충돌 및 공유된 정보의 측면에서 완전히 격리된 샌드박스 환경에서 플러그인을 실행해야 한다.

이런 격리를 실행하는데 도움이 될 수 있는 세 가지 주요 옵션은 다음과 같다:

- 전용 자식 프로세스 - 이것은 빠른 정보 격리를 제공하지만 자식 프로세스를 길들이고 실행시간을 제한하며 오류로부터 복구해야 한다.
- 클라우드 서버리스 프레임워크는 모든 샌드박스 요구 사항을 확인하지만 Faas 기능을 동적으로 배포하고 호출하는 것은 공원에서 산책하는것 만큼 쉬운일이 아니다.
- [sandbox](https://www.npmjs.com/package/sandbox) 그리고 [vm2](https://www.npmjs.com/package/vm2)같은 몇몇 npm 라이브러리는 한줄의 코드에서 격리된 코드를 실행할 수 있다. 이는 간편하지만 제한된 보호를 제공한다.

### 예시 코드 - Sandbox 라이브러리를 사용여 격리된 코드 실행

```javascript
const Sandbox = require('sandbox');
const s = new Sandbox();

s.run('lol)hai', (output) => {
  console.log(output);
  //output='Syntax error'
});

// 제한된 코드
s.run('process.platform', (output) => {
  console.log(output);
  //output=Null
});

// 무한 루프
s.run('while (true) {}', (output) => {
  console.log(output);
  //output='Timeout'
});
```

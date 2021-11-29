# 자바스크립트 eval statement를 피하라

### 한문단 요약

`eval()`, `setTimeout()`, `setInterval()`, 그리고 `new Function()` 는 Node.js 에서 자주 사용되는 전역 함수이며 JS표현식, 명령문, 명령문 시퀀스를 나타내는 문자열을 변수로 허용한다.
이러한 함수를 사용하는데 있어 보안상의 문제점은 사용자의 코드가 기본적으로 공격자가 할 수 있는 모든 작업을 실행할 수 있기 떄문에 신뢰할 수 없는 사용자의 입력이 코드에 침투하여 서버의 손상으로 이어질 가능성이 있다는 것이다. 
사용자의 입력이 함수에 전달되고 실행될 수 있는 함수를 사용하지 않도록 리팩토링 하는것이 좋다.

### 코드 예시

```javascript
// 공격자가 입력할 수 있는 악성코드 예시
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// 악성코드 실행
eval(userInput);
```

### 블로그 인용

[Liran Tal](https://leanpub.com/nodejssecurity)의 필수 Node.js 보안 책으로 부터:
> eval함수는 JS에서 보안의 관점에서 가장 거슬리는 부분이다. eval 함수는 JS문자열을 텍스트로 분석하고 JS코드인 것처럼 실행한다.
신뢰할 수 없는 사용자와 eval함수의 사용의 혼합은 결국 서버 손상으로 끝날 수 있다.
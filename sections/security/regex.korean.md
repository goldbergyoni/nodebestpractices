# 악성 정규표현(RegEx)이 단일 스레드 실행을 과부하시키는것을 막아라

### 한문단 요약

정규식을 사용하는데 있어 내제된 위험은 텍스트를 분석하고 주어진 정규식 패턴과 일치하는지 확인하는데 필요한 계산 리소스이다.
단일 스레드 이벤트 루프가 지배적인 Node.js 플랫폼의 경우 정규식 패턴을 확인하는 것과 같은 CPU를 사용하는 작업은 애플리케이션이 응답하지 않을 수 있게 한다.


가능하면 정규식 사용을 피하거나 정규식 패턴이 안전한지 확인하는 작업을 [validator.js](https://github.com/chriso/validator.js), 또는 [safe-regex](https://github.com/substack/safe-regex)와 같은 전용 라이브러리로 미뤄라. 


[OWASP 예시](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS)에 있는 취약한 정규식 패턴 몇가지:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### 예시코드 – Express 프레임워크를 사용하여 SSL/TLS 활성화하기

```javascript
const saferegex = require('safe-regex');
const emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// email정규식은 redos 공격에 취약하기 때문에 false를 출력해야 한다.
console.log(saferegex(emailRegex));

// 정규식 패턴 대신 유효성 검사기를 사용해라
const validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### 책 인용: "취약한 정규식은 반복을 적용하는 것으로 알려져 있다."

Liran Tal의 [필수 Node.js 보안](https://leanpub.com/nodejssecurity)에서 발췌
> 프로그래머는 종종 정규식을 사용하여 사용자의 입력이 조건에 부합하는지 확인하는 작업을 한다. 취약한 정규식은 반복의 연속과 일치하는 접미사 패턴과 +의 조합으로 알려져 있다.
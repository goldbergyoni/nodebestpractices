# 동작상의 에러 vs 프로그래머 에러

### 한문단 설명

다음 두 가지의 에러 유형을 구별하면 앱 다운타임(downtime)을 최소화하고 심각한 버그를 방지하는데 도움이 될 것이다: 동작 오류는 발생한 일과 영향에 대해 어떤 상황인지 말한다 – 예를 들면, 연결 문제로 인한 일부 HTTP 서비스 쿼리 실패가 있다. 반면에, 프로그래머 에러는 어디에서 에러가 발생했는지 왜 발생했는지 모르는 경우를 말한다 – 이것은 정의되지 않은 값이나 메모리 누수되는 데이터베이스 연결 풀(connection pool)을 읽으려는 코드일 수 있다. 동작 상의 에러는 비교적 다루기 쉽다 – 보통은 에러를 기록하면 충분하다. 프로그래머 에러가 발생하면, 응용 프로그램이 일관된 상태가 아닐 수도 있으며 이 땐 다시 시작하는 것보다 더 좋은 방법은 없다

### 코드 예시 – 동작상의 에러 표시 (신뢰됨)

```javascript
// marking an error object as operational 
const myError = new Error("How can I add new product when no value provided?");
myError.isOperational = true;

// or if you're using some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
class AppError {
  constructor (commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
};

throw new AppError(errorManagement.commonErrors.InvalidInput, "Describe here what happened", true);

```

### 블로그 인용: "프로그램에서 프로그래머 에러는 버그다"

Joyent 블로그에서 "Node.js 에러 처리" 키워드 1위에 위치했다

 > …프로그래머 에러를 복구하는 가장 좋은 방법은 즉시 충돌하는 것이다. 충돌 시 자동으로 프로그램을 다시 시작하는 리스타터(restarter)를 사용하여 프로그램을 실행해야 한다. 리스타터(restarter)를 사용하는 경우, 일시적인 프로그래머 오류에 직면하면 신뢰할 수 있는 서비스를 복구하는 가장 빠른 방법은 충돌이다…

### 블로그 인용: "정의되지 않은 취약 상태를 만들지 않고 떠나는 안전한 방법은 없다"

Node.js 공식문서에서

 > …자바스크립트에서 던지기(throw) 방식의 특성상, 정의되지 않은 종류의 취약 상태를 만들거나 참조 누수 없이는, 안전하게 "중단한 곳에서 픽업(pick up)" 할 수 있는 방법은 거의 없다. 던져진 에러를 처리하는 가장 안전한 방법은 프로세스를 종료하는 것이다. 물론, 일반적인 웹 서버에서는 많은 연결이 열려 있을 수 있으며, 다른 누군가에 의해 오류가 발생했을 수도 있기 때문에 갑자기 연결을 종료하는 것은 적절하지 않다. 더 나은 방법은 다른 사람들이 정상적인 시간에 완료할 수 있도록 하면서 에러를 발생시킨 요청에 대한 에러 응답을 보내고, 새 요청에 대한 응답을 중지하는 것이다.

### 블로그 인용: "그렇지 않으면 당신의 애플리케이션 상태가 위험해질 수 있음"

debugable.com 블로그에서 "Node.js 예상치 못한 예외 처리" 키워드 3위에 위치했다

 > …그래서, 당신이 정말로 무엇을 하고 있는 지 모른다면, "예상치 못한 예외 처리(uncaughtException)" 예외 이벤트를 받은 후 서비스를 다시 시작해야한다. 그렇지 않으면, 애플리케이션 상태나 제 3자 라이브러리의 상태가 일관되지 않아 모든 종류의 심각한 버그가 발생할 위험이 있다…

### 블로그 인용: "에러 처리에는 주로 세 가지 방법이 있다"

JS Recipes 블로그에서

> …에러 처리에는 주로 세 가지 방법이 있다:
1. 애플리케이션을 중지하고 다시 시작하기.
2. 가능한 모든 에러를 처리하고 충돌하지 않게 하기.
3. 이 두가지 사이의 균형잡힌 접근
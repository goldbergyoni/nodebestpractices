# 낯선이가 들어오면 프로세스를 적절하게 중단하라

### 한문단 설명

코드 내의 어딘가에 에러가 발생했을 때 에러 처리 객체는 어떻게 처리할 것인가를 정하는 역할을 합니다. 에러를 신뢰한다면(즉, best practice #3 작동상의 오류 추가 설명 참조) 로그 파일을 작성하는 것만으로도 충분하다. 에러가 익숙하지 않으면 복잡해질 수 있다. 이는 일부 구성요소가 잘못된 상태가 될 수 있고 이후 모든 요청이 실패할 수 있음을 의미한다. 예를 들어, 예외가 발생하고 상태가 손실된 싱글톤의 상태 저장 토큰 발급자 서비스를 가정하면 지금부터 예기치 않게 동작하여 모든 요청이 실패할 수 있다. 이 시나리오에서는 프로세스를 종료하고 '재시작 도구'(Forever, PM2 등)를 사용하여 깨끗한 상태로 다시 시작한다.

### 코드 예시: 충돌 여부 결정

```javascript
// Assuming developers mark known operational errors with error.isOperational=true, read best practice #3
process.on('uncaughtException', function(error) {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
  process.exit(1)
});

// centralized error handler encapsulates error-handling related logic
function errorHandler() {
  this.handleError = function (error) {
    return logger.logError(err)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = function (error) {
    return error.isOperational;
  }
}
```

### 블로그 인용: "가장 최선의 방법은 중지하는 것이다"

Joyent 블로그에서

> 프로그래머 에러를 회복하는 가장 좋은 방법은 즉시 중지하는 것이다. 중지된 경우 프로그램을 자동적으로 재실행시키는 restarter를 사용하여 프로그램을 실행해라. restarter를 사용하면 일시적인 프로그램 에러에 직면하여 중지하는 것이 안정적인 서비스로 복원시키는 가장 빠른 방법이다. 

### Blog Quote: "There are three schools of thoughts on error handling"

From the blog: JS Recipes

> …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. A balanced approach between the two

### Blog Quote: "No safe way to leave without creating some undefined brittle state"

From Node.js official documentation

> …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error while letting the others finish in their normal time, and stop listening for new requests in that worker.

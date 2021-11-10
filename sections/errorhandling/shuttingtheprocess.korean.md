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

### 블로그 인용: "에러 처리에 대해 세 가지 견해가 있다"

JS Recipes 블로그에서

> 에러 처리에 대해 주로 세 가지 견해가 있다:
1. 응용 프로그림을 중지시키고 재실행하게 해라.
2. 가능한 모든 에러를 처리하고 중지시키지 마라.
3. 두 가지 사이의 균형적인 접근

### 블로그 인용: "일부 정의되지 않은 취약 상태를 생성하지 않고는 안전한 방법이 없다.

Node.js 공식 문서에서

> 자바스크립트에서 throw가 작동하는 방법의 특성상, 참조의 누설이나 다른 종류의 정의되지 않은 취약 상태를 생성하지 않고는 안전하게 "중단한 부분부터 시작"하는 방법은 거의 없다. 던져진 오류를 가장 안전하게 응답하는 방법은 프로세스를 종료시키는 것이다. 물론, 일반 웹 서버에서 많은 연결이 열려있을 수 있고, 다른 사람이 오류가 발생시켰기 때문에 갑자기 연결을 종료하는 것은 합리적이지 않다. 더 나은 접근은 에러를 트리거한 요청에 에러를 응답하는 동안 다른 사용자가 정상적인 시간에 끝내도록 하고 해당 작업자의 새 요청에 대한 수신을 중지하는 것이다.

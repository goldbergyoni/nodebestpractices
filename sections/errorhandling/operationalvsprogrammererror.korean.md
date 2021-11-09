# 동작상의 에러 vs 프로그래머 에러

### 한문단 설명

두 가지 에러 타입을 구분하는 것은 따른 당신의 앱 다운 시간을 최소화하고 심각한 버그들을 피할 수 있도록 도와줄 것이다. 동작상의 에러는 발생한 것과 그 영향에 대한 어떤 상황인지 나타낸다. 예를 들어, 일부 HTTP 서비스 쿼리가 연결 문제 때문에 실패하는 것이다. 반면에, 프로그래머 에러는 에러가 왜 발생했는지 때때로 어디서 발생했는지 모르는 경우를 나타낸다. 정의되지 않은 값이나 메모리가 누수되는 DB 커넥션 풀을 읽으려 하는 코드일 수도 있다. 동작상의 에러는 비교적으로 다루기 쉽다. 보통 에러 로그를 남기는 것이 충분하다. 프로그래머 오류가 발생하면 상황이 복잡해지고, 응용 프로그램이 일관성없는 상태가 될 수 있으며 재시작하는 것보다 좋은 것은 없게 될 것이다.

### 코드 예시 - 동작상 에러 표시 (신뢰됨)

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// marking an error object as operational 
const myError = new Error('How can I add new product when no value provided?');
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

throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// some centralized error factory (see other examples at the bullet "Use only the built-in Error object")
export class AppError extends Error {
  public readonly commonType: string;
  public readonly isOperational: boolean;

  constructor(commonType: string, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.commonType = commonType;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// marking an error object as operational (true)
throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

### 블로그 인용: "프로그래머 에러는 프로그램에서 버그다"

Joyent 블로그에서 "Node.JS 에러 처리" 키워드가 1위에 랭크했다.

 > 프로그래머 에러를 복구하는 가장 좋은 방법은 즉시 충돌하는 것이다. 충돌 상황에서 프로그램을 자동으로 재시작해주는 restarter를 사용하여 프로그램을 실행해야 한다. restarter를 사용하는 경우, 충돌이 일시적인 프로그램 에러에 직면하면 안정적인 서비스를 복원하는 가장 빠른 방법이다

### 블로그 인용: "일부 정의되지 않은 취약한 상태를 만들지 않고 떠나는 안전한 방법은 없다"

Node.js 공식 문서에서

 > Javascript에서 throw 작동 방법의 특성상, 참조 누수나 일부 정의되지 않은 종류의 취약 상태를 생성하는 것 없이, 안전하게 "중단한 곳에서 찾는" 방법은 거의 없다. 던져진 에러를 응답하는 가장 안전한 방법은 프로세스를 꺼버리는 것이다. 물론, 일반적인 웹 서버에서 많은 연결을 가지고 있고, 다른 사람에 의해 에러가 발생할 수 있기 때문에 갑자기 연결을 끄는 것도 적절하지 않다. 더 좋은 접근 방식은 정상적인 시간에 다른 사람들이 완료하게 하는 동안 에러를 발생시킨 요청에 에러 응답을 보내고, 그 작업자의 새로운 요청에 응답하는 것을 중지하는 것이다.


### 블로그 인용: "그렇게 하지 않으면 응용프로그램 상태가 위험해진다"

debugable.com "Node.js 예상 못한 예외(uncaughtException)"가 3위에 랭크했다.

 > 그래서, 당신이 무엇을 하는지 정말 모른다면, "uncaughtException" 예외 이벤트를 받은 이후 서비스를 다시 시작해야 한다. 그렇지 않으면, 당신의 응용 프로그램 또는 제 3자의 라이브러리의 상태가 일관되지 않게 되어 모든 종류의 심각한 버그가 발생할 위험이 있다.

### 블로그 인용: "에러 처리에는 3가지 방법이 있다"

JS Recipes 블로그에서

> 에러 처리에는 주로 3가지 방법이 있다.
1. 응용프로그램을 멈추거나 재시작시켜라.
2. 가능한 모든 오류를 처리하고 충돌시키지 마라.
3. 두 가지를 균형있게 접근해라.

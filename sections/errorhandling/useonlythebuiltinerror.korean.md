# 내장된 Error 객체만 사용하라

### 한문단 설명

다양한 코드 흐름 옵션(예:EventEmitter, Callbacks, Promises 등)과 함께 JS의 허용 가능한 특성은 개발자가 오류를 발생시키는 방법에 큰 차이를 둔다. – 일부 개발자들은 문자열을 사용하고, 일부는 그들만의 커스텀 타입을 정의한다. Node.js 내장 Error 객체를 사용하면 당신의 코드와 제 3자 라이브러리의 균일성을 유지할 수 있도록 도와주며, 또한 스택정보(StrackTrace)와 같은 중요한 정보도 보존할 수 있다. 예외가 발생할 때, 일반적으로 오류 이름이나 관련 HTTP 오류 코드같은 상황별로 추가적인 속성으로 채우는 것이 좋은 방법이다. 이 균일성과 관행을 얻을려면, Error 객체를 추가 속성으로 확장하라, 아래 코드 예 참조

### 코드 예시 – 제대로 하기

```javascript
// throwing an Error from typical function, whether sync or async
if(!productToAdd)
    throw new Error("How can I add new product when no value provided?");

// 'throwing' an Error from EventEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// 'throwing' an Error from a Promise
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error("Product already exists!");
    }
  } catch (err) {
    // ...
  }
}
```

### 코드 예시 - 좋지않은 패턴

```javascript
// throwing a string lacks any stack trace information and other important data properties
if(!productToAdd)
    throw ("How can I add new product when no value provided?");
```

### 코드 예시 - 훨씬 더 좋다

```javascript
// centralized error object that derives from Node’s Error
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...other properties assigned here
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// client throwing an exception
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, "further explanation", true)
```

### 블로그 인용: "여러 가지 유형이 있다는 것은 가치가 없다고 본다"

Ben Nadel 블로그에서 "Node.js error 객체" 키워드 5위에 위치했다.

>…”개인적으로, 여러 가지 유형이 있다는 것은 가치가 없다고 본다 – 언어로서의 자바스크립트는 생성자 기반의 오류 파악에 적합하지 않은 것 같다. 따라서, 객체 속성에서 구별하는 것이 생성자 유형에서 구분하는 것보다 훨씬 쉬운 것 같다…

### 블로그 인용: "문자열은 오류가 아니다"

devthought.com 블로그에서 "Node.js error 객체" 키워드 6위에 위치했다.

> …오류 대신 문자열을 전달함으로써 모듈 간의 상호운용성이 줄어들었다. 문자열을 사용하면 `instanceof` 에러로 검사하는 API 계약을 깨뜨리는 데다가 오류의 자세한 정보도 알기 어렵다. 뒤에서 설명하겠지만, 최신 자바스크립트 엔진의 Error 객체에는 유용한 속성을 많이 있으며 생성자에 전달된 메시지도 포함된다…

### 블로그 인용: "에러로 부터 상속해도 많은 값을 추가하지 않는다"

machadogj 블로그에서

> …Error 클래스와 관련된 한 가지 문제는 확장하기가 그리 간단하지 않다는 것이다. 물론 클래스를 상속하고 HttpError, DbError 등 자신만의 에러 클래스를 만들 수 있다. 그러나, 당신이 타입으로 무엇인가를 하지 않는 한 이것은 시간이 걸리며 많은 값을 추가하지 않는다. 때로 당신은 메시지 추가와 내부 에러를 유지하길 원하고 때로는 매개 변수를 사용하여 에러를 확장하길 원할 것이다, 등등…

### 블로그 인용: "모든 자바스크립트와 시스템 에러들은 node.js이 상속한 에러로 부터 발생한다"

Node.js 공식문서에서

> …Node.js에 의해 발생된 모든 자바스크립트 및 시스템 에러는 표준 자바스크립트 에러 클래스에서 상속되거나 표준 자바스크립트 에러 클래스의 인스턴스이며 최소한 그 클래스에서 사용할 수 있는 속성을 제공할 수 있도록 보장된다. 에러가 발생한 이유에 대한 특정 상황을 나타내지 않는 일반 자바스크립트 에러 객체. 에러 객체는 에러가 인스턴스화된 코드에서 포인트를 자세히 설명하는 "스택 추적"을 캡처(capture)하며, 에러에 대한 텍스트 설명을 제공할 수도 있다. 모든 시스템과 자바스크립트 에러를 포함한 Node.js에 의해, 생성된 모든 에러는, 에러 클래스의 인스턴스이거나, 상속 받은 것이다.…

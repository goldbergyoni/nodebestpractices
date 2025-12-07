# 비동기 에러 처리를 위해 Async-Await 또는 promises를 사용하라.

### 한 문단 설명

콜백은 대부분의 개발자들에게 익숙하지 않기 때문에 확장성이 좋지 않다.
콜백 방식은 코드 곳곳에서 오류 검사를 하게 하고, 복잡한 코드 중첩을 처리하게 하며, 코드 흐름을 이해하기 어렵게 만든다. BlueBird, async, Q와 같은 Promise 라이브러리는 RETURN과 THROW를 사용한 표준적인 흐름 제어 방식을 제공한다. 특히, 선호되는 try-catch 기반 에러 처리 방식을 지원하여 주요 코드 흐름을 각 함수의 에러 처리 로직으로부터 분리할 수 있다.

### 코드 예시 - Promise를 사용한 에러 처리

```javascript
doWork()
  .then(doWork)
  .then(doOtherWork)
  .then((result) => doWork)
  .catch((error) => {
    throw error;
  })
  .then(verify);
```

### 안티 패턴 코드 예시 - 콜백 기반 에러 처리 방식

```javascript
getData(someParameter, function (err, result) {
  if (err !== null) {
    // 주어진 콜백 함수를 호출하는 등의 작업을 수행하고 오류를 전달한다.
    getMoreData(a, function (err, result) {
      if (err !== null) {
        // 주어진 콜백 함수를 호출하는 등의 작업을 수행하고 오류를 전달한다.
        getMoreData(b, function (c) {
          getMoreData(d, function (e) {
            if (err !== null) {
              // 무슨 말인지 알겠지?
            }
          });
        });
      }
    });
  }
});
```

### 블로그 인용: "Promise와 관련해 짚고 넘어가야 할 문제가 있다"

출처: pouchdb.com 블로그

> ……사실 콜백은 더 심각한 문제를 일으킨다: 프로그래밍 언어에서 당연시하는 스택을 빼앗아버린다는 점이다. 스택 없이 코드를 작성하는 것은 브레이크 페달 없이 자동차를 운전하는 것과 같다: 필요할 때 손을 뻗었는데 그것이 없다는 사실을 깨닫기 전까지는 얼마나 절실히 필요했는지 그 중요성을 깨닫지 못한다. Promise의 핵심 목적은 비동기(async) 방식으로 전환하면서 잃어버린 언어의 기본적인 요소들(return, throw 그리고 스택)을 되찾는 것에 있다. 하지만 Promise의 이점을 온전히 활용하기 위해서는 Promise의 사용법을 알아야 한다.

### 블로그 인용: "Promise 방식은 훨씬 간결하다."

출처: gosquared.com 블로그

> ………Promise 방식은 훨씬 더 간결하고, 더 명확하며, 작성도 빠르다. 작업 단계 중 어느 곳에서 오류나 예외가 발생하더라도 단 하나의 .catch() 핸들러에서 처리된다. 하나의 위치에서 모든 에러를 처리할 수 있다는 것은, 각 단계마다 에러 검사를 따로 작성할 필요가 없다는 의미다.

### 블로그 인용: "Promise는 ES6의 기본 기능이며, generators와 함께 사용할 수 있다."

출처: StrongLoop 블로그

> …콜백은 오류 처리 방식은 품질이 좋지 않다. Promise가 더 낫다. Express가 제공하는 기본 에러 처리와 Promise를 결합하면 uncaught exception 발생 가능성을 크게 낮출 수 있다. Promise는 ES6의 내장 기능이며 generators와 함께 사용할 수 있고, Babel 같은 컴파일러를 통해 ES7의 async/await 제안 기능도 활용 가능하다.

### 블로그 인용: "익숙한 흐름 제어 구조가 비동기 환경에서는 모두 무용지물이다."

출처: Benno's 블로그

> ……비동기, 콜백 기반 프로그래밍에서 흥미로운 점 중 하나는 우리가 익숙하게 사용해온 기본적인 흐름 제어 구조들이 사실상 완전히 무너진다는 것이다. 그중에서도 내가 보기에 가장 심각하게 무너지는 부분은 예외 처리이다. JavaScript는 예외 처리를 위해 꽤 익숙한 try…catch 구문을 제공한다. 예외 처리의 문제는 에러가 호출 스택을 타고 상위로 빠르게 전달 되어야 효과가 있지만 다른 스택에서 에러가 발생한다면 완전히 무용지물이 되어버린다는 점이다…

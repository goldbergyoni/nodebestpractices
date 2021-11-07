# 비동기 에러 처리시에는 async-await 혹은 promise를 사용하라

### 한 문장 설명자

콜백은 대부분의 프로그래머와 친숙하지 않기 때문에 잘 확장되지 않는다. 그것들은 에러를 전체적으로 확인하고, 다루기 어려운 코드 중첩을 처리하고, 코드 흐름에 대해 추론하기 어렵게 만든다. BlueBird, async, Q와 같은 Promise 라이브러리는 RETURN과 THROW를 사용하여 프로그램 흐름을 제어하는 표준 코드 스타일을 가진다. 특히, 기본 코드 경로가 모든 함수의 에러를 처리하지 않도록 가장 좋아하는 try-catch 에러 처리 스타일을 지원한다.

### 코드 예시 - promise를 사용하여 에러 잡기

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Anti pattern code example – callback style error handling

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // do something like calling the given callback function and pass the error
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // do something like calling the given callback function and pass the error
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // you get the idea? 
                        }
                    })
                });
            }
        });
    }
});
```

### 블로그 인용: "promise에 문제가 있다"

 pouchdb.com 블로그에서
 
 > 사실 콜백은 훨씬 더 불길한 일을 한다. 콜백은 우리가 프로그래밍 언어에서 일반적으로 당연하게 여기는 스택을 허용하지 않는다. 스택 없이 코드를 작성하는 것은 브레이크 없이 자동차를 운전하는 것과 비슷하다. 당신이 그것을 위해 애를 쓰고 그것이 없을 때까지 그것이 얼마나 절실히 필요한지 깨닫지 못한다. Promise의 핵심은 우리가 비동기식으로 돌아갔을 때 잃었던 언어 기본 요소인 return, throw 및 스택을 다시 제공하는 것이다. 그러나 당신들이 promise를 활용하려면 올바르게 사용하는 방법을 알아야 한다.

### 블로그 인용: "promise 방식이 훨씬 더 간결하다"

 gosquared.com 블로그에서

 > promise 방식이 훨씬 더 간결하고 명확하며 빠르게 작성할 수 있다. 작업 내에서 에러나 예외가 발생하면 단일 .catch() 핸들러에 의해 처리된다. 모든 에러를 처리할 수 있는 단일 장소가 있다는 것은 작업의 각 단계에 대해 에러 검사를 할 필요가 없다는 것을 의미한다.

### 블로그 인용: "promise는 네이티브 ES6이며, 생성자와 함께 사용할 수 있다"

 StrongLoop 블로그에서

 > 콜백은 에러 처리가 엉망이다. promise가 더 좋다. Express에 내장된 에러 처리를 promise와 결합하고 잡을 수 없는 예외의 가능성을 크게 낮춘다. promise는 네이티브 ES6이며 생성자와 함께 사용할 수 있고, Babel 같은 컴파일러를 통해 async/await와 같은 ES7 제안을 사용할 수 있다. 

### 블로그 인용문: "당신에게 익숙한 모든 일반 흐름 제어 구조는 완전히 망가졌다"

Benno’s 블로그에서

 > ……One of the best things about asynchronous, callback-based programming is that basically all those regular flow control constructs you are used to are completely broken. However, the one I find most broken is the handling of exceptions. Javascript provides a fairly familiar try…catch construct for dealing with exceptions. The problem with exceptions is that they provide a great way of short-cutting errors up a call stack, but end up being completely useless if the error happens on a different stack…

# 비동기 에러 처리시에는 async-await이나 promise를 사용하라

### 한문단설명

대부분의 프로그래머들은 콜백에 익숙하지 않기에 콜백은 확장하기가 힘들다. 에러를 곳곳에서 체크할것을 강요하고, 지독한 코드 nesting을 쓰게 만들며, 코드 흐름을 추론하기 힘들게 만든다. BlueBird, async, and Q같은 promise 라이브러리들은 RETURN과 THROW로 프로그램 흐름을 제어하는 표준의 코드 스타일로 되어있다. 특히나, 주된 코드 경로가 모든 함수의 에러를 처리하지 않아도 되게 해주는 try-catch 에러 처리 스타일을 지지한다.

### 코드 예제 – promise로 에러 catch하기

```javascript
return functionA()
  .then(functionB)
  .then(functionC)
  .then(functionD)
  .catch((err) => logger.error(err))
  .then(alwaysExecuteThisFunction)
```


### 코드 예제 - async/await로 에러 catch하기

```javascript
async function executeAsyncTask () {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  }
  catch (err) {
    logger.error(err);
  } finally {
    await alwaysExecuteThisFunction();
  }
}
```

### 안티패턴 코드 예제 – 콜백식 에러 처리

<details>
<summary><strong>Javascript</strong></summary>


```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // 주어진 콜백함수를 호출하고 에러를 넘겨라
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // 주어진 콜백함수를 호출하고 에러를 넘겨라
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // 눈치챘는가?
                        }
                    })
                });
            }
        });
    }
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>


```typescript
getData(someParameter, function(err: Error | null, resultA: ResultA) {
  if(err !== null) {
    // 주어진 콜백함수를 호출하고 에러를 넘겨라
    getMoreData(resultA, function(err: Error | null, resultB: ResultB) {
      if(err !== null) {
        // 주어진 콜백함수를 호출하고 에러를 넘겨라
        getMoreData(resultB, function(resultC: ResultC) {
          getMoreData(resultC, function(err: Error | null, d: ResultD) {
            if(err !== null) {
              // 눈치챘는가?
            }
          })
        });
      }
    });
  }
});
```

</details>

### 블로그 인용: "우리는 promise에 불만이 있다"

블로그 pouchdb.com로부터

 > ……게다가 실제로는, 콜백은 그보다도 더 사악한 짓을 한다: 프로그래밍 언어에서는 보통 당연하게 여기는 스택을 빼앗아간다. 스택 없이 코드를 쓰는 것은 브레이크 없이 자동차를 운전하는 것이나 마찬가지다: 이게 얼마나 필요한 것인지는 쓰려고 했는데 없는 상황이 오기 전에는 모른다. 프로미스의 취지는 비동기로 옮겼을 떄 잃어버린 언어의 핵심적인 요소들을 되돌리기 위함이다: return, throw와 stack. 하지만 이들을 사용하기 위해서는 프로미스를 올바르게 사용할 줄 알아야 한다.

### 블로그 인용: "프로미스 메소드는 훨씬 더 콤팩트하다"

 블로그 gosquared.com로부터

 > ………프로미스 메소드는 쓰기가 훨씬 더 콤팩트하고, 명쾌하며 빠르다. 이것의 어떤 작동중이던 에러나 예외가 일어나면 단일의 .catch() 핸들러가 처리한다. 모든 에러가 한군데서 처리된다는 것은 작업 단계마다 에러 확인을 하지 않아도 된다는 것을 의미한다.

### 블로그 인용: "프로미스는 ES6 네이티브이며, 제너레이터와 함께 쓸 수 있다"

 블로그 StrongLoop로부터

 > ….콜백은 에러 처리가 형편없다. Promise가 낫다. Express의 내장된 에러 처리를 프로미스와 함께 쓰면  chances of an 처리되지 못한 예외(uncaught exception)가 나타날 확률이 현저히 낮아진다. 프로미스는 ES6 네이티브이며, 제너레이터와 함께 쓸 수 있고, Babel 같은 컴파일러를 통해 async/await 같은 ES7 제안과도 쓸 수 있다.

### 블로그 인용: "익숙한 그 모든 regular flow control constructs 완전히 부서져 있다"

블로그 Benno’s로부터

 > ……비동기, 콜백 바탕의 프로그래밍의 장점은 요컨대 익숙한 그 모든 regular flow control construct들이 완전히 부서져 있다는 것이다. 하지만, 내가 보기에 가장 부서져 있는 것은 예외 처리다. 자바스크립트는 예외를 처리하는데 꽤나 친근한 try…catch construct를 제공한다. 예외의 문제점은 콜 스택 안에서는 에러를 빠르게 위로 보내주지만, 에러가 다른 스택에서 일어났을 경우 무용지물이 되어버린다는 것이다…
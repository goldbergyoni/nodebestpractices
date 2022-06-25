# 对于异步的错误处理，请使用 Async-Await 或者 promises

### 一段解释
由于大多数的程序员不熟悉回调，不能很好的掌控回调函数，导致被迫到处检测错误，处理让人不快的代码嵌套和难以理解的代码流程。Promise 的库，比如 BlueBird，async，和 Q 封装了一些代码，使用者可以使用 RETURN 和 THROW 的方式来控制程序的流程。具体来说，就是它们支持最受欢迎的 try-catch 错误处理风格，这使得主流程代码从在每一个方法中处理错误的方式中解放出来。

### 代码示例 – 使用 promises 捕获错误

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

### 代码示例 - 使用 async/await 捕获错误

```javascript
async function executeAsyncTask() {
  try {
    const valueA = await functionA();
    const valueB = await functionB(valueA);
    const valueC = await functionC(valueB);
    return await functionD(valueC);
  } catch (err) {
    logger.error(err);
  } finally {
    await alwaysExecuteThisFunction();
  }
}
```

### 代码示例 反模式 – 回调方式的错误处理

<details>
<summary><strong>Javascript</strong></summary>

```javascript
getData(someParameter, function(err, result){
    if(err != null)
      //做一些事情类似于调用给定的回调函数并传递错误
      getMoreData(a, function(err, result){
        if(err != null)
          //做一些事情类似于调用给定的回调函数并传递错误
          getMoreData(b, function(c){
            getMoreData(d, function(e){
              if(err != null)
                //你有什么想法? 
    });
});
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
getData(someParameter, function (err: Error | null, resultA: ResultA) {
  if (err !== null) {
    //做一些事情类似于调用给定的回调函数并传递错误
    getMoreData(resultA, function (err: Error | null, resultB: ResultB) {
      if (err !== null) {
        //做一些事情类似于调用给定的回调函数并传递错误
        getMoreData(resultB, function (resultC: ResultC) {
          getMoreData(resultC, function (err: Error | null, d: ResultD) {
            if (err !== null) {
              // 你有什么想法？
            }
          });
        });
      }
    });
  }
});
```

</details>

### 博客引用: "我们使用 promise 有一个问题"

摘自博客 pouchdb.com

> ……实际上, 回调会做一些更险恶的事情: 他们剥夺了我们的 stack, 这是我们通常在编程语言中想当然的事情。编写没有堆栈的代码很像驾驶一辆没有刹车踏板的汽车: 你没有意识到你有多么需要它, 直到你伸手去找它, 而它不在那里。promise 的全部目的是让我们回到我们在异步时丢失的语言基础: return，throw 和 stack。但你必须知道如何正确使用 promise, 以便利用他们。

### 博客引用: "promise 方法更加紧凑"

摘自博客 gosquared.com

> ………promise 的方法更紧凑, 更清晰, 写起来更快速。如果在任何 ops 中发生错误或异常,则由单个.catch()处理程序处理。有这个单一的地方来处理所有的错误意味着你不需要为每个阶段的工作写错误检查。

### 博客引用: "原生 ES6 支持 promise，可以和 generator 一起使用"

摘自博客 StrongLoop

> ….回调有一个糟糕的错误处理的报道。promise 更好。将 express 内置的错误处理与 promise 结合起来, 大大降低了 uncaught exception 的几率。原生 ES6 支持 promise, 通过编译器 babel，它可以与 generator，ES7 提议的技术(比如 async/await)一起使用。

### 博客引用: "所有那些您所习惯的常规的流量控制结构, 完全被打破"

摘自博客 Benno’s

> ……关于基于异步、回调编程的最好的事情之一是, 基本上所有那些您习惯的常规流量控制结构, 完全被打破。然而, 我发现最易打破的是处理异常。Javascript 提供了一个相当熟悉的 try...catch 结构来处理异常。异常的问题是, 它们提供了在一个调用堆栈上 short-cutting 错误的很好的方法, 但最终由于不同堆栈上发生的错误导致完全无用…

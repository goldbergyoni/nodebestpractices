# 对于异步的错误处理，请使用Async-Await或者promise


### 一段解释

由于回调对于大多数的程序员来说不熟悉，被迫随处检测错误，让人不快的代码内嵌和难以理解的代码流程，它没有形成一定规模。promise的库，比如BlueBird，async，和Q封装了一种标准的代码风格， 它通过使用return和throw来控制程序流程。具体来说，它们支持最受欢迎的try-catch错误处理风格，这使得主流程代码从在每一个方法中处理错误的方式中解放出来。


### 代码示例 – 使用promise捕获错误


```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### 代码示例 反模式 – 回调方式的错误处理

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
                //你有什么想法? 
    });
});
```

### 博客引用: "我们使用promise有一个问题"
 摘自博客pouchdb.com
 
 > ……实际上, 回调会做一些更险恶的事情: 他们剥夺了我们的stack, 这是我们通常在编程语言中想当然的事情。编写没有堆栈的代码很像驾驶一辆没有刹车踏板的汽车: 你没有意识到你有多么需要它, 直到你伸手去找它, 而它不在那里。promise的全部目的是让我们回到我们在异步时丢失的语言基础: return，throw和stack。但你必须知道如何正确使用promise, 以便利用他们。

### 博客引用: "promise方法更加紧凑"
 摘自博客gosquared.com
 
 > ………promise的方法更紧凑, 更清晰, 写起来更快速。如果在任何ops中发生错误或异常,则由单个.catch()处理程序处理。有这个单一的地方来处理所有的错误意味着你不需要为每个阶段的工作写错误检查。

### 博客引用: "原生ES6支持promise，可以和generator一起使用"
 摘自博客StrongLoop
 
 > ….回调有一个糟糕的错误处理的报道。promise更好。将express内置的错误处理与promise结合起来, 大大降低了uncaught exception的几率。原生ES6支持promise, 通过编译器babel，它可以与generator，ES7提议的技术(比如async/await)一起使用。

### 博客引用: "所有那些您所习惯的常规的流量控制结构, 完全被打破"
 摘自博客Benno’s
 
 > ……关于基于异步、回调编程的最好的事情之一是, 基本上所有那些您习惯的常规流量控制结构, 完全被打破。然而, 我发现最易打破的是处理异常。Javascript提供了一个相当熟悉的try...catch结构来处理异常。异常的问题是, 它们提供了在一个调用堆栈上 short-cutting错误的很好的方法, 但最终由于不同堆栈上发生的错误导致完全无用…

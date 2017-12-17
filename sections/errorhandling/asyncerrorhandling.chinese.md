# 对于异步的错误处理使用Async-Await或者promise


### 一段解释

回调不能形成一定规模，是由于对于大多数的程序员来说不熟悉，被迫随处检测错误，让人不快的代码内嵌和难以理解的代码流程。通过使用return和throw来控制程序流程，promise的库比如，BlueBird，async，和Q封装了一种标准的代码风格。具体来说，它们支持最受欢迎的try-catch错误处理风格，它允许主流程代码从在每一个方法中处理错误的方式中释放出来。


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
                    //you get the idea? 
    });
});
```

### 博客引用: "We have a problem with promises"
摘自博客pouchdb.com
 
 > ……And in fact, callbacks do something even more sinister: they deprive us of the stack, which is something we usually take for granted in programming languages. Writing code without a stack is a lot like driving a car without a brake pedal: you don’t realize how badly you need it, until you reach for it and it’s not there. The whole point of promises is to give us back the language fundamentals we lost when we went async: return, throw, and the stack. But you have to know how to use promises correctly in order to take advantage of them.

### 博客引用: "The promises method is much more compact"
摘自博客gosquared.com
 
 > ………The promises method is much more compact, clearer and quicker to write. If an error or exception occurs within any of the ops it is handled by the single .catch() handler. Having this single place to handle all errors means you don’t need to write error checking for each stage of the work.

### 博客引用: "Promises are native ES6, can be used with generators"
摘自博客StrongLoop
 
 > ….Callbacks have a lousy error-handling story. Promises are better. Marry the built-in error handling in Express with promises and significantly lower the chances of an uncaught exception. Promises are native ES6, can be used with generators, and ES7 proposals like async/await through compilers like Babel

### Blog Quote: "All those regular flow control constructs you are used to are completely broken"
摘自博客Benno’s
 
 > ……One of the best things about asynchronous, callback based programming is that basically all those regular flow control constructs you are used to are completely broken. However, the one I find most broken is the handling of exceptions. Javascript provides a fairly familiar try…catch construct for dealing with exceptions. The problems with exceptions is that they provide a great way of short-cutting errors up a call stack, but end up being completely useless of the error happens on a different stack…

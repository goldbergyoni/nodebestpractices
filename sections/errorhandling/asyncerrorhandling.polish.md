# Użyj Async-Await lub promises do obsługi błędów asynchronicznych

### Wyjaśnienie jednym akapitem

Callbacks nie skalują się dobrze, ponieważ większość programistów nie zna ich. Zmuszają do sprawdzania błędów, radzenia sobie z nieprzyjemnym zagnieżdżaniem kodu i utrudniają rozumowanie przepływu kodu. Biblioteki promises takie jak BlueBird, async i Q pakują standardowy styl kodu za pomocą RETURN i THROW do sterowania przebiegiem programu. W szczególności obsługują ulubiony styl obsługi błędów try-catch, który pozwala uwolnić główną ścieżkę kodu od radzenia sobie z błędami w każdej funkcji

### Przykład kodu - używanie promises do wychwytywania błędów

```javascript
return functionA()
  .then(functionB)
  .then(functionC)
  .then(functionD)
  .catch((err) => logger.error(err))
  .then(alwaysExecuteThisFunction)
```


### Przykład kodu - używanie async/await do wychwytywania błędów

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

### Przykład kodu antywzorca - obsługa błędów stylu wywołania zwrotnego

<details>
<summary><strong>Javascript</strong></summary>

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
                            // you get the idea?
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
    // do something like calling the given callback function and pass the error
    getMoreData(resultA, function(err: Error | null, resultB: ResultB) {
      if(err !== null) {
        // do something like calling the given callback function and pass the error
        getMoreData(resultB, function(resultC: ResultC) {
          getMoreData(resultC, function(err: Error | null, d: ResultD) {
            if(err !== null) {
              // you get the idea?
            }
          })
        });
      }
    });
  }
});
```
</details>

### Cytat z Bloga: "Mamy problem z promises"

 Z bloga pouchdb.com

 > ……And in fact, callbacks do something even more sinister: they deprive us of the stack, which is something we usually take for granted in programming languages. Writing code without a stack is a lot like driving a car without a brake pedal: you don’t realize how badly you need it until you reach for it and it’s not there. The whole point of promises is to give us back the language fundamentals we lost when we went async: return, throw, and the stack. But you have to know how to use promises correctly in order to take advantage of them.

### Cytat z Bloga: "The promises method is much more compact"

 Z bloga gosquared.com

 > ………The promises method is much more compact, clearer and quicker to write. If an error or exception occurs within any of the ops it is handled by the single .catch() handler. Having this single place to handle all errors means you don’t need to write error checking for each stage of the work.

### Cytat z Bloga: "Promises are native ES6, can be used with generators"

 Z bloga StrongLoop

 > ….Callbacks have a lousy error-handling story. Promises are better. Marry the built-in error handling in Express with promises and significantly lower the chances of an uncaught exception. Promises are native ES6, can be used with generators, and ES7 proposals like async/await through compilers like Babel

### Cytat z Bloga: "All those regular flow control constructs you are used to are completely broken"

Z bloga Benno’a

 > ……One of the best things about asynchronous, callback-based programming is that basically all those regular flow control constructs you are used to are completely broken. However, the one I find most broken is the handling of exceptions. Javascript provides a fairly familiar try…catch construct for dealing with exceptions. The problem with exceptions is that they provide a great way of short-cutting errors up a call stack, but end up being completely useless if the error happens on a different stack…

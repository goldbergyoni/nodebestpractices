# Use async-await for async error handling


### One Paragraph Explainer

> Callbacks don’t scale as they are not familiar to most programmers, force to check errors all over, deal with nasty code nesting and make it difficult to reason about the code flow. Promise libraries like BlueBird, async, and Q pack a standard code style using RETURN and THROW to control the program flow. Specifically, they support the favorite try-catch error handling style which allows freeing the main code path from dealing with errors in every function


### Code Example – using promises to catch errors

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => throw error)
 .then(verify);
```

### Anti pattern code example – callback style error handling

```javascript
getData(someParameter, function(err, result){
    if(err != null)
      //do something like calling the given callback function and pass the error
    getMoreData(a, function(err, result){
          if(err != null)
            //do something like calling the given callback function and pass the error
        getMoreData(b, function(c){ 
                getMoreData(d, function(e){ 
		 if(err != null)
            	//you get the idea? 
            });
        });
```
        
### Blog Quote: "We have a problem with promises"
 From the blog pouchdb.com, ranked 11 for the keywords “Node Promises”
 
 > …And in fact, callbacks do something even more sinister: they deprive us of the stack, which is something we usually take for granted in programming languages. Writing code without a stack is a lot like driving a car without a brake pedal: you don’t realize how badly you need it, until you reach for it and it’s not there. The whole point of promises is to give us back the language fundamentals we lost when we went async: return, throw, and the stack. But you have to know how to use promises correctly in order to take advantage of them.
 


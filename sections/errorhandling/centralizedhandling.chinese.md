# 集中处理错误，通过但不是在中间件里处理错误Ha


### 一段解释

如果没有一个专用的错误处理对象，那么由于操作不当，隐藏在雷达下的重要错误的可能性更大。错误处理对象负责使错误可见，例如通过写入一个格式话良好的logger，通过电子邮件将事件发送到某个监控产品或管理员。一个典型的错误处理流程可能是：一些模块抛出一个错误 -> API路由器捕获错误 -> 它传播错误给负责捕获错误的中间件（如Express，KOA）-> 集中式错误处理程序被调用 -> 中间件正在被告之这个错误是否是一个不可信的错误（不是操作型错误），这样可以优雅的重新启动应用程序。注意，在Express中间件中处理错误是一种常见但又错误的做法，这样做不会覆盖在非Web接口中抛出的错误。



### 代码示例 – 一个典型错误流

```javascript
//DAL层, 在这里我们不处理错误
DB.addDocument(newCustomer, (error, result) => {
    if (error)
        throw new Error("Great error explanation comes here", other useful parameters)
});
 
//API路由代码, 我们同时捕获异步和同步错误，并转到中间件
try {
    customerService.addNew(req.body).then(function (result) {
        res.status(200).json(result);
    }).catch((error) => {
        next(error)
    });
}
catch (error) {
    next(error);
}
 
//错误处理中间件，我们委托集中式错误处理程序处理错误
app.use(function (err, req, res, next) {
    errorHandler.handleError(err).then((isOperationalError) => {
        if (!isOperationalError)
            next(err);
    });
});

```

### 代码示例 – 在一个专门的对象里面处理错误

```javascript
module.exports.handler = new errorHandler();
 
function errorHandler(){
    this.handleError = function (error) {
        return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
    }

```

### 代码示例 – 反模式：在中间件内处理错误

```javascript
//中间件直接处理错误，那谁将处理Cron任务和测试错误呢？
app.use(function (err, req, res, next) {
    logger.logError(err);
    if(err.severity == errors.high)
        mailer.sendMail(configuration.adminMail, "Critical error occured", err);
    if(!err.isOperational)
        next(err);
});

```

### 博客引用: "Sometimes lower levels can’t do anything useful except propagate the error to their caller"
 From the blog Joyent, ranked 1 for the keywords “Node.JS error handling”
 
 > …You may end up handling the same error at several levels of the stack. This happens when lower levels can’t do anything useful except propagate the error to their caller, which propagates the error to its caller, and so on. Often, only the top-level caller knows what the appropriate response is, whether that’s to retry the operation, report an error to the user, or something else. But that doesn’t mean you should try to report all errors to a single top-level callback, because that callback itself can’t know in what context the error occurred…

 
### Blog Quote: "Handling each err individually would result in tremendous duplication"
 From the blog JS Recipes, ranked 17 for the keywords “Node.JS error handling”
 
 > ……In Hackathon Starter api.js controller alone, there are over 79 occurences of error objects. Handling each err individually would result in tremendous amount of code duplication. The next best thing you can do is to delegate all error handling logic to an Express middleware…


### Blog Quote: "HTTP errors have no place in your database code"
 From the blog Daily JS, ranked 14 for the keywords “Node.JS error handling”
 
 > ……You should set useful properties in error objects, but use such properties consistently. And, don’t cross the streams: HTTP errors have no place in your database code. Or for browser developers, Ajax errors have a place in code that talks to the server, but not code that processes Mustache templates…


# 集中处理错误，通过但不是在中间件里处理错误


### 一段解释

如果没有一个专用的错误处理对象，那么由于操作不当，在雷达下重要错误被隐藏的可能性就会更大。错误处理对象负责使错误可见，例如通过写入一个格式化良好的logger，通过电子邮件将事件发送到某个监控产品或管理员。一个典型的错误处理流程可能是：一些模块抛出一个错误 -> API路由器捕获错误 -> 它传播错误给负责捕获错误的中间件（如Express，KOA）-> 集中式错误处理程序被调用 -> 中间件正在被告之这个错误是否是一个不可信的错误（不是操作型错误），这样可以优雅的重新启动应用程序。注意，在Express中间件中处理错误是一种常见但又错误的做法，这样做不会覆盖在非Web接口中抛出的错误。



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
 
function errorHandler() {
    this.handleError = function (err) {
        return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
    }
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

### 博客引用: "有时较低的级别不能做任何有用的事情, 除非将错误传播给他们的调用者"
 摘自博客 Joyent, 对应关键字 “Node.JS error handling” 排名第一
 
 > …您可能会在stack的多个级别上处理相同的错误。这发生在当较低级别不能执行任何有用的操作，除了将错误传播给它们的调用方, 从而将错误传播到其调用方, 等等。通常, 只有top-level调用方知道适当的响应是什么, 无论是重试操作、向用户报告错误还是其他事情。但这并不意味着您应该尝试将所有错误报告给单个top-level回调, 因为该回调本身无法知道错误发生在什么上下文中…

 
### 博客引用: "单独处理每个错误将导致大量的重复"
 摘自博客 JS Recipes, 对应关键字 “Node.JS error handling” 排名17
 
 > ……仅仅在Hackathon启动api.js控制器中, 有超过79处重复的错误对象。单独处理每个错误将导致大量的代码重复。您可以做的下一个最好的事情是将所有错误处理逻辑委派给一个express中间件…


### 博客引用: "HTTP错误不会在数据库代码中出现"
 摘自博客 Daily JS, 对应关键字 “Node.JS error handling” 排名14
 
 > ……您应该在error对象中设置有用的属性, 但使用此类属性时应保持一致。而且, 不要越过流: HTTP错误不会在数据库代码中出现。或者对于浏览器开发人员来说, Ajax 错误在与服务器交互的代码中有一席之地, 而不是处理Mustache模板的代码…


# 在客户端隐藏错误详情

### 一段解释

在生产环境中，应该避免在客户端暴露应用程序的错误详情，因为这会带来暴露程序敏感信息的风险，比如：服务器文件路径、使用的第三方模块以及其他可能被攻击者利用的内部工作流程信息等。Express拥有内置的错误处理机制，以此来处理好在程序中可能会出现的任何错误。默认的错误处理中间件方法被添加到了中间件堆栈的最后面。如果你传了一个错误给`next()`，又没有通过自定义的错误处理机制来处理它，这个错误会被Express内置的错误处理机制处理；这个错误会被写到客户端的堆栈跟踪信息里。当`NODE_ENV`被设置为`development`的时候，才会把详细的错误信息写到客户端，但是当`NODE_ENV`被设置为`production`的时候，不会把详细的堆栈跟踪信息写入到客户端，只会返回HTTP的响应码。

### 代码示例：Express错误处理

``` javascript
// 生产环境错误处理
// 不把堆栈跟踪信息展示给用户看
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
```

### 其他资源

🔗 [Express.js 错误处理相关文档](https://expressjs.com/en/guide/error-handling.html)
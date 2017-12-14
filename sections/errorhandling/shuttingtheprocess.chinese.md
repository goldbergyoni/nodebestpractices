# 特殊情况产生时，优雅地停掉服务


### 一段解释

在您的代码的某个地方，当一个错误抛出的时候，错误处理对象负责决定如何进行时 – 如果错误是可信的（即操作型错误，在最佳实践# 3了解进一步的解释），写入日志文件可能是足够的。如果错误不熟悉，事情就变得棘手了 – 这意味着某些组件可能处于故障状态，所有将来的请求都可能失败。例如，假设一个单例（singleton）的、有状态的令牌发行者服务抛出异常并失去它的状态 — 从现在起，它可能会出现意外行为并导致所有请求失败。在这种情况下，杀进程，使用“重启”的工具（像Forever，PM2，等等）重新开始。



### 代码实例: 决定是否退出

```javascript
//deciding whether to crash when an uncaught exception arrives
//Assuming developers mark known operational errors with error.isOperational=true, read best practice #3
process.on('uncaughtException', function(error) {
 errorManagement.handler.handleError(error);
 if(!errorManagement.handler.isTrustedError(error))
 process.exit(1)
});
 
 
//centralized error handler encapsulates error-handling related logic
function errorHandler(){
 this.handleError = function (error) {
 return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
 }
 
 this.isTrustedError = function(error)
 {
 return error.isOperational;
 }

```


### Blog Quote: "The best way is to crash"
 From the blog Joyent
 
 > …从程序型错误中恢复过来的最好方法是立即崩溃。你应该使用一个重启助手来运行您的程序，它会在崩溃的情况下自动启动程序。当使用重启助手，崩溃是面对临时性的程序型错误时，恢复可靠的服务的最快的方法…


### Blog Quote: "错误处理有三种流派"
 From the blog: JS Recipes
 
 > …错误处理主要有三种流派:
1. 让应用崩溃，并重启。
2. 处理所有的错误，从不崩溃。
3. 介于两者之间。


### Blog Quote: "No safe way to leave without creating some undefined brittle state"
From Node.JS official documentation
 
 > …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error, while letting the others finish in their normal time, and stop listening for new requests in that worker.
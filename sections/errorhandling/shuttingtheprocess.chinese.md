# 特殊情况产生时，优雅地退出服务


### 一段解释

在您的代码的某个地方，当一个错误抛出的时候，错误处理对象负责决定如何进行时 – 如果错误是可信的（即操作型错误，在最佳实践#3了解进一步的解释），写入日志文件可能是足够的。如果错误不熟悉，事情就变得棘手了 – 这意味着某些组件可能处于故障状态，所有将来的请求都可能失败。例如，假设一个单例（singleton）的，有状态的令牌发行者服务抛出异常并失去它的状态 — 从现在起，它可能会出现意外行为并导致所有请求失败。在这种情况下，杀进程，使用“重启”的工具（像Forever，PM2，等等）重新开始。



### 代码实例: 决定是否退出

```javascript
//收到未捕获的异常时，决定是否要崩溃
//如果开发人员标记已知的操作型错误使用：error.isOperational=true， 查看最佳实践 #3
process.on('uncaughtException', function(error) {
 errorManagement.handler.handleError(error);
 if(!errorManagement.handler.isTrustedError(error))
 process.exit(1)
});
 
 
//封装错误处理相关逻辑在集中的错误处理中
function errorHandler(){
 this.handleError = function (error) {
 return logger.logError(err).then(sendMailToAdminIfCritical).then(saveInOpsQueueIfCritical).then(determineIfOperationalError);
 }
 
 this.isTrustedError = function(error)
 {
 return error.isOperational;
 }

```


### 博客引用: "最好的方式是立即崩溃"
摘自 博客：Joyent
 
 > …从程序型错误中恢复过来的最好方法是立即崩溃。你应该使用一个重启助手来运行您的程序，它会在崩溃的情况下自动启动程序。当使用重启助手，崩溃是面对临时性的程序型错误时，恢复可靠的服务的最快的方法…


### 博客引用: "错误处理有三种流派"
摘自 博客：JS Recipes
 
 > …错误处理主要有三种流派:
1. 让应用崩溃，并重启。
2. 处理所有的错误，从不崩溃。
3. 介于两者之间。


### 博客引用: "不伴随着创建一些易碎的状态，是没有保险的方式退出"
摘自 Node.JS 官方文档
 
 > …就throw工作在JavaScript的本质而言，几乎没有任何方法可以安全地“在您丢下的地方捡起”，而不会泄漏引用，或者创建其他类型的未定义的易碎性状态。对抛出的错误作出响应的最安全的方法是关闭进程。当然，在一个普通的Web服务器中，可能有很多连接打开了，因为其他人触发了一个错误，所以突然关闭这些连接是不合理的。更好的方法是将错误响应发送给触发错误的请求，同时让其他人在正常时间内完成，并停止侦听该工作者的新请求。
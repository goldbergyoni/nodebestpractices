# 区分操作型错误和程序型错误

### 一段解释

区分以下两种错误类型将最大限度地减少应用程序停机时间并帮助避免出现荒唐的错误: 操作型错误指的是您了解发生了什么情况及其影响的情形 – 例如, 由于连接问题而导致对某些 HTTP 服务的查询失败问题。另一方面, 程序型错误指的是您不知道原因, 有时是错误不知道来自何处的情况 – 可能是一些代码试图读取未定义的值或 DB 连接池泄漏内存。操作型错误相对容易处理 – 通常记录错误就足够了。当程序型错误出现，事情变得难以应付, 应用程序可能处于不一致状态, 你可以做的，没有什么比优雅的重新启动更好了。



### 代码示例 – 将错误标记为可操作 (受信任)

```javascript
//将错误标记为可操作 
var myError = new Error("How can I add new product when no value provided?");
myError.isOperational = true;
 
//或者, 如果您使用的是一些集中式错误工厂 (请参见项目符号中的示例"仅使用内置错误对象")
function appError(commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
};
 
throw new appError(errorManagement.commonErrors.InvalidInput, "Describe here what happened", true);

```

### 博客引用: "程序型错误是程序中的 bug"
摘自博客 Joyent, 对于关键字“Node.JS error handling”排名第一
 
 > …从程序型错误中恢复的最好方法是立即崩溃。您应该使用restarter运行程序, 以便在发生崩溃时自动重新启动程序。在一个使用了restarter的地方, 在面对一个瞬态程序型错误, 崩溃是最快的方式来恢复可靠的服务…

 ### 博客引用: "No safe way to leave without creating some undefined brittle state"
摘自Node.JS官方文档
 
 > …By the very nature of how throw works in JavaScript, there is almost never any way to safely “pick up where you left off”, without leaking references, or creating some other sort of undefined brittle state. The safest way to respond to a thrown error is to shut down the process. Of course, in a normal web server, you might have many connections open, and it is not reasonable to abruptly shut those down because an error was triggered by someone else. The better approach is to send an error response to the request that triggered the error, while letting the others finish in their normal time, and stop listening for new requests in that worker.  


 ### Blog Quote: "Otherwise you risk the state of your application"
From the blog debugable.com, ranked 3 for the keywords “Node.JS uncaught exception”
 
 > …So, unless you really know what you are doing, you should perform a graceful restart of your service after receiving an “uncaughtException” exception event. Otherwise you risk the state of your application, or that of 3rd party libraries to become inconsistent, leading to all kinds of crazy bugs…

 ### Blog Quote: "Blog Quote: There are three schools of thoughts on error handling"
From the blog: JS Recipes
 
 > …There are primarily three schools of thoughts on error handling:
1. Let the application crash and restart it.
2. Handle all possible errors and never crash.
3. Balanced approach between the two

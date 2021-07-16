# 区分操作型错误和程序型错误

### 一段解释

区分以下两种错误类型将最大限度地减少应用程序停机时间并帮助避免出现荒唐的错误: 操作型错误指的是您了解发生了什么情况及其影响的情形 – 例如, 由于连接问题而导致对某些 HTTP 服务的查询失败问题。另一方面, 程序型错误指的是您不知道原因, 有时是错误不知道来自何处的情况 – 可能是一些代码试图读取未定义的值或 DB 连接池内存泄漏。操作型错误相对容易处理 – 通常记录错误就足够了。当程序型错误出现，事情变得难以应付, 应用程序可能处于不一致状态, 你可以做的，没有什么比优雅的重新启动更好了。



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

 ### 博客引用: "不伴随着创建一些未定义的脆性状态，没有安全的方式可以离开"
 摘自Node.JS官方文档
 
 > …从 JavaScript throw 的工作原理上讲, 几乎没有任何方法可以安全地“在你跌倒的地方重新爬起来”而不引发泄漏且不创建一些其他形式的未定义的脆性状态。响应（未定义的）抛出错误的最安全方法是关闭进程。当然, 通常 web 服务器可能会有许多连接正在通信, 由于某个人触发了错误而突然关闭那些连接是不合理的。更好的方法是让该工作进程向触发错误的请求发送错误响应, 同时保持其它请求正常进行直至完成, 并停止侦听的新的请求。（译者注：为优雅重启做准备）

 ### 博客引用: "否则，您置您应用的状态于风险之中"
  摘自博客 debugable.com, 对于关键字“Node.JS uncaught exception”排名第3
 
 > …所以, 除非你真的知道你在做什么, 否则你应该在收到一个"uncaughtException"异常事件之后, 对你的服务进行一次优雅的重新启动。否则, 您应用的状态, 或和第三方库的状态变得不一致, 都被置于风险之中，导致各种荒唐的错误…

 ### 博客引用: "对于错误处理，有三种学院派想法"
 摘自博客: JS Recipes
 
 > …对于错误处理，主要有三种学院派想法:
1. 让应用崩溃并重启.
2. 处理所有可能的错误，从不崩溃.
3. 两者之间的折中方案

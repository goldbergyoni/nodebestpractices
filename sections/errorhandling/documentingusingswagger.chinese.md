# 使用Swagger对 API 错误文档化


### 一段解释

REST API 使用 HTTP 代码返回结果, API 用户不仅绝对需要了解 API schema, 而且还要注意潜在错误 – 调用方可能会捕获错误并巧妙地处理它。例如, 您的 api 文档可能提前指出, 当客户名称已经存在时, HTTP 状态409将返回 (假设 api 注册新用户), 因此调用方可以相应地呈现给定情况下的最佳 UX。Swagger是一个标准, 它定义了 API 文档的schema, 提供了一个生态系统的工具, 允许在线轻松创建文档, 请参阅下面的打印屏幕。

### 博客引用: "您必须告诉您的调用者什么错误可能发生"
 摘自博客 Joyent, 对于关键字 “Node.JS logging” ， 排名第一
 
 > 我们已经讨论了如何处理错误, 但是在编写新函数时, 如何将错误传递给调用函数的代码？
...如果你不知道会发生什么错误或者不知道他们的意思, 那么你的程序就不可能是正确的, 除非是偶然的。所以, 如果你正在写一个新的函数, 你必须告诉你的调用者什么错误可以发生, 它们的意思是什么…

 
 ### 有用的工具: Swagger 在线文档创建工具
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")
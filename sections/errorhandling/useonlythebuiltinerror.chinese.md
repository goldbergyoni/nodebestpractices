#  仅使用内建的错误对象


### 一段解释

JS天生的宽容性及其多变的代码流选项（例如 EventEmitter, Callbacks, Promises等等）使得开发者有太多引发错误的方式 – 有些人使用字符串，有些人使用自定义的类型。使用Node.js的内置错误对象有助于在你的代码和第三方库之间保持一致性，它还保留了重要信息，比如StackTrace。当引发异常时，给异常附加上下文属性（如错误名称和相关的HTTP错误代码）通常是一个好的习惯。要实现这种一致性和实践，请考虑使用附加属性扩展错误对象，见下面的代码示例。


### 代码示例 – 正确做法

```javascript
//从典型函数抛出错误, 无论是同步还是异步
if(!productToAdd)
    throw new Error("How can I add new product when no value provided?");
 
//从EventEmitter抛出错误
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));
 
//从promise抛出错误
 return new promise(function (resolve, reject) {
    Return DAL.getProduct(productToAdd.id).then((existingProduct) => {
        if(existingProduct != null)
            reject(new Error("Why fooling us and trying to add an existing product?"));

```

### 代码示例 – 反例

```javascript
//抛出字符串错误缺少任何stack trace信息和其他重要属性
if(!productToAdd)
    throw ("How can I add new product when no value provided?");

```

### 代码示例 – 更好做法

```javascript
//从node错误派生的集中错误对象
function appError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...在这赋值其它属性
};

appError.prototype.__proto__ = Error.prototype;

module.exports.appError = appError;
 
//客户端抛出一个错误
if(user == null)
  throw new appError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, "further explanation", true)
```

### 博客引用：“I don’t see the value in having lots of different types”

摘自博客Ben Nadel, 对于关键字“Node.JS错误对象”，排名第五

> … 就我个人而言，我没看到弄很多不同类型的错误对象的价值 – JavaScript作为一种语言，似乎不适合基于构造函数的错误捕获。因此，区分对象属性似乎比区分构造函数类型容易得多…

### 博客引用: "字符串不是错误"

摘自博客 devthought.com, 对于关键字 “Node.JS error object” 排名第6
 
> … 传递字符串而不是错误会导致模块间协作性降低。它打破了和API的约定，可能在执行`instanceof`这样的错误检查，或想了解更多关于错误的信息。正如我们将看到的，错误对象在现代JavaScript引擎中拥有非常有趣的属性，同时保留传递给构造函数的消息…
 
### 博客引用: "从Error对象继承不会增加太多的价值"

摘自博客 machadogj
 
> … 我对Error类的一个问题是不太容易扩展。当然, 您可以继承该类并创建自己的Error类, 如HttpError、DbError等。然而, 这需要时间, 并且不会增加太多的价值, 除非你是在做一些关于类型的事情。有时, 您只想添加一条消息, 并保留内部错误, 有时您可能希望使用参数扩展该错误, 等等…

### 博客引用: "Node.js引发的所有JavaScript和系统错误都继承自Error"

摘自 Node.JS 官方文档
 
> … Node.js引发的所有JavaScript和系统错误继承自，或是JavaScript标准错误类的实例, 这保证至少提供了该类的可用属性。一个通用的JavaScript错误对象, 它不表示错误为什么发生的任何特定环境。错误对象捕获一个"stack trace", 详细说明了错误被实例化时在代码中的点, 并可能提供错误的文本描述。由Node.js生成的所有错误, 包括所有的系统和JavaScript错误, 都将是Error类的实例, 或继承自Error类 …

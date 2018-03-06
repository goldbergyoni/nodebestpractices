# 捕获未处理的promise rejections
<br/><br/>


### 一段解释

通常，大部分的现代node.js/express应用代码运行在promise里 – 或者是在.then里处理，一个回调函数中，或者在一个catch块中。令人惊讶的是，除非开发者记得添加.catch语句，在这些地方抛出的错误都不会被uncaughtException事件处理程序来处理，然后消失掉。当未处理的rejection出现，node最近的版本增加了一个警告消息，尽管当事情出错的时候这可能有助于发现问题，但这显然不是一个适当的错误处理方法。简单明了的解决方案是永远不要忘记在每个promise链式调用中添加.catch语句，并重定向到一个集中的错误处理程序。然而，只在开发人员的规程上构建错误处理策略是有些脆弱的。因此，使用一个优雅的回调并订阅到process.on（'unhandledrejection'，callback）是高度推荐的 – 这将确保任何promise错误，如果不是本地处理，将在这处理。

<br/><br/>

### 代码示例: 这些错误将不会得到任何错误处理程序捕获（除unhandledrejection）

```javascript
DAL.getUserById(1).then((johnSnow) =>
{
  //this error will just vanish
	if(johnSnow.isAlive == false)
	    throw new Error('ahhhh');
});

```
<br/><br/>
### 代码示例: 捕获 unresolved 和 rejected 的 promise

```javascript
process.on('unhandledRejection', (reason, p) => {
  //我刚刚捕获了一个未处理的promise rejection, 因为我们已经有了对于未处理错误的后备的处理机制（见下面）, 直接抛出，让它来处理
  throw reason;
});
process.on('uncaughtException', (error) => {
  //我刚收到一个从未被处理的错误，现在处理它，并决定是否需要重启应用
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```
<br/><br/>
### 博客引用: "如果你犯了错误，在某个时候你就会犯错误。"
 摘自 James Nelson 的博客
 
 > 让我们测试一下您的理解。下列哪一项是您期望错误将会打印到控制台的？

```javascript
Promise.resolve(‘promised value’).then(() => {
  throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(() => {
  throw new Error(‘error’);
});

new Promise((resolve, reject) => {
  throw new Error(‘error’);
});
```

> 我不知道您的情况，但我的回答是我希望它们所有都能打印出一个错误。然而，现实是许多现代JavaScript环境不会为其中任何一个打印错误。做为人的问题是，如果你犯了错误，在某个时候你就会犯错误。记住这一点，很显然，我们应该设计这样一种方式，使错误尽可能少创造伤害，这意味着默认地处理错误，而不是丢弃错误。

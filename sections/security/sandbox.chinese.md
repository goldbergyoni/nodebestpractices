# 在沙箱中运行不安全的代码

### 一段解释

根据经验, 应该只运行自己的javascript文件。撇开理论不谈, 现实世界中的场景需要执行在运行时动态传递的javascript文件。例如, 考虑一个动态框架(如 webpack), 该框架接受自定义加载器(custom loaders), 并在构建时动态执行这些加载器。在存在一些恶意插件的情况下, 我们希望最大限度地减少损害, 甚至可能让工作流成功终止 - 这需要在一个沙箱环境中运行插件, 该环境在资源、宕机和我们共享的信息方面是完全隔离的。三个主要选项可以帮助实现这种隔离:

- 一个专门的子进程 - 这提供了一个快速的信息隔离, 但要求制约子进程, 限制其执行时间, 并从错误中恢复
- 一个基于云的无服务框架满足所有沙盒要求，但动态部署和调用Faas方法不是本部分的内容
- 一些npm库，比如[sandbox](https://www.npmjs.com/package/sandbox)和[vm2](https://www.npmjs.com/package/vm2)允许通过一行代码执行隔离代码。尽管后一种选择在简单中获胜, 但它提供了有限的保护。

### 代码示例 - 使用Sandbox库运行隔离代码

```javascript
const Sandbox = require("sandbox");
const s = new Sandbox();

s.run( "lol)hai", function( output ) {
  console.log(output);
  //output='Syntax error'
});

// Example 4 - Restricted code
s.run( "process.platform", function( output ) {
  console.log(output);
  //output=Null
})

// Example 5 - Infinite loop
s.run( "while (true) {}", function( output ) {
  console.log(output);
  //output='Timeout'
})
```

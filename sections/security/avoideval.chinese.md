# 避免JS eval语法

### 一段解释

`eval()`，`setTimeout()`和`setInterval()`是全局方法，经常在Node.js中被使用，它接收一个字符串参数，代表一个JavaScript表达式，语句，或者语句序列。使用这些函数的安全问题是, 不受信任的用户输入可能会发现进入代码执行的方式，从而导致危害服务器，因为评估用户代码实质上允许攻击者执行任何他可以的操作。对于这些用户输入可以传递给函数并执行的方法，建议重构代码，而不依赖于它们的使用。

### 代码示例

```javascript
// 攻击者可能输入的恶意代码示例
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// 恶意代码被执行
eval(userInput);
```

### 其他博客作者的说法

摘自[Liran Tal](https://leanpub.com/nodejssecurity)的书籍Essential Node.js Security:
> 从安全的角度出发，在JavaScript语法中，eval()可能是最让人不悦的函数。
它将javascript字符串解析为文本，并将其作为javascript代码执行。
和不受信任的用户输入掺和在一起，可能会发现使用eval()是一个导致灾难的方式，最终服务器遭受破坏。

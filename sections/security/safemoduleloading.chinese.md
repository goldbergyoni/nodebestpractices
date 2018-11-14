# 避免使用变量加载模块

### 一段解释

避免使用作为参数指定的路径来导入(requiring/importing)另一个文件，因为担心它可能源自用户的操作，只要包含了来自用户输入的动态变量，这个规则就可以被扩展用于访问一般文件（也就是 `fs.readFile()`），或者其它敏感的资源。

### 代码示例

```javascript
// 不安全， 因为helpPath变量可已经被用户的输入修改了
const uploadHelpers = require(helperPath);

// 安全
const uploadHelpers = require('./helpers/upload');
```

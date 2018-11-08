# 避免使用变量加载模块

### 一段解释

避免使用被指定为参数的路径变量导入(requiring/importing)另一个文件, 因为该变量可能源自用户输入。此规则可以扩展到一般情况下的访问文件(例如，`fs.readFile()`)，或者包含源自用户输入的动态变量的其他敏感资源。

### 代码示例

```javascript
// 不安全, 因为helperPath变量可能通过用户输入而改变
const uploadHelpers = require(helperPath);

// 安全
const uploadHelpers = require('./helpers/upload');
```

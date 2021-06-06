# 处理子进程时要谨慎

### 一段解释

尽管子进程非常棒, 但使用它们应该谨慎。如果无法避免传递用户输入，就必须经过脱敏处理。
未经脱敏处理的输入执行系统级逻辑的危险是无限的, 从远程代码执行到暴露敏感的系统数据, 甚至数据丢失。准备工作的检查清单可能是这样的

- 避免在每一种情况下的用户输入, 否则验证和脱敏处理
- 使用user/group标识限制父进程和子进程的权限
- 在隔离环境中运行进程, 以防止在其他准备工作失败时产生不必要的副作用

### 代码示例: 未脱敏处理子进程的危害

```javascript
const { exec } = require('child_process');

...

// 例如, 以一个脚本为例, 它采用两个参数, 其中一个参数是未经脱敏处理的用户输入
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> 想象一下, 如果用户只是输入'&& rm -rf --no-preserve-root /'类似的东西, 会发生什么
// 你会得到一个不想要的结果
```

### 额外资源

摘自Node.js child process [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):

> 切勿将未经脱敏处理的用户输入传递给此函数。任何包含shell元字符（metacharacters）的输入都可用于触发任意命令的执行。

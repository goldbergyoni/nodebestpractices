# 使用成熟的logger提高错误可见性

### 一段解释

我们都特别喜欢（loovve）console.log，但显而易见地，对于严肃的项目, 有信誉和持久的Logger是必需的，比如[Winston][winston] (非常流行) or [Pino][pino](专注于性能的新库)。一套实践和工具将有助于更快速地解释错误 – (1)使用不同的级别（debug, info, error）频繁地log；(2)在记录日志时, 以 JSON 对象的方式提供上下文信息, 请参见下面的示例；(3)使用日志查询API(在大多数logger中内置)或日志查看程序软件监视和筛选日志；(4)使用操作智能工具(如 Splunk)为操作团队公开和管理日志语句。

[winston]: https://www.npmjs.com/package/winston
[bunyan]: https://www.npmjs.com/package/bunyan
[pino]: https://www.npmjs.com/package/pino

### 代码示例 – 使用Winston Logger

```javascript
//您的集中式logger对象
var logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'somefile.log' })
  ]
});

//在某个地方使用logger的自定义代码
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });

```

### 代码示例 – 查询日志文件夹 (搜索条目)

```javascript
var options = {
    from: new Date - 24 * 60 * 60 * 1000,
    until: new Date,
    limit: 10,
    start: 0,
    order: 'desc',
    fields: ['message']
  };


  // 查找在今天和昨天之间记录的项目
  winston.query(options, function (err, results) {
    //对于结果的回调处理
  });

```

### 博客引用: "Logger要求"
 摘自博客 Strong Loop

 > 让我们确定一些要求 (对于logger):
1. 为每条日志添加时间戳。这条很好自我解释-你应该能够告知每个日志条目发生在什么时候。
2. 日志格式应易于被人类和机器理解。
3. 允许多个可配置的目标流。例如, 您可能正在将trace log写入到一个文件中, 但遇到错误时, 请写入同一文件, 然后写入到错误日志文件，并同时发送电子邮件…

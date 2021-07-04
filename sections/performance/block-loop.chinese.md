# 不要阻塞事件循环

<br/><br/>

Node主要通过在单个线程上的实现多个队列而处理事件循环。大型的复杂度高的json解析、大数组逻辑操作、不安全的正则表达式查询和大型IO操作都可能导致事件循环停止。避免CPU密集型任务，将其卸载到专门的服务（例如作业服务器），或将长任务分解为小步骤然后使用工作池，都是避免阻塞事件循环的例子。

### 示例：阻塞事件循环
让我们看一个来自[Node Clinic](https://clinicjs.org/documentation/doctor/05-fixing-event-loop-problem) 的例子。
```javascript
function sleep (ms) {
  const future = Date.now() + ms
  while (Date.now() < future);
}

server.get('/', (req, res, next) => {
  sleep(30)
  res.send({})
  next()
})
```

当我们对这个应用程序进行基准测试时，我们开始看到由长 while 循环导致的延迟。
### 运行基准测试
`clinic doctor --on-port 'autocannon localhost:$PORT' -- node slow-event-loop`

### 结果

```
┌─────────┬────────┬────────┬────────┬────────┬───────────┬──────────┬───────────┐
│ Stat    │ 2.5%   │ 50%    │ 97.5%  │ 99%    │ Avg       │ Stdev    │ Max       │
├─────────┼────────┼────────┼────────┼────────┼───────────┼──────────┼───────────┤
│ Latency │ 270 ms │ 300 ms │ 328 ms │ 331 ms │ 300.56 ms │ 38.55 ms │ 577.05 ms │
└─────────┴────────┴────────┴────────┴────────┴───────────┴──────────┴───────────┘
┌───────────┬─────────┬─────────┬─────────┬────────┬─────────┬───────┬─────────┐
│ Stat      │ 1%      │ 2.5%    │ 50%     │ 97.5%  │ Avg     │ Stdev │ Min     │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
│ Req/Sec   │ 31      │ 31      │ 33      │ 34     │ 32.71   │ 1.01  │ 31      │
├───────────┼─────────┼─────────┼─────────┼────────┼─────────┼───────┼─────────┤
```

## 事件循环的示例图
![Event Loop](/assets/images/event-loop.png "Event Loop")


### "这是保持 Node 服务器快速运行的一个很好的经验法则：_当在任何给定时间与每个客户端关联的工作量是“小”的时候，Node 是快速的。_ "

来自 Node.js 文档 - [Don't Block the Event Loop (or the Worker Pool)](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

> Node.js可扩展性的秘诀在于它使用少量线程来处理许多客户端。
> 如果Node.js可以使用更少的线程，那么它可以将更多的系统时间和内存花在客户端上，而不是为线程（内存、上下文切换）支付空间和时间开销。
> 但是因为Node.js只有少量的线程，所以您必须构建您的应用程序以明智地使用它们。
>
> 这是保持Node.js服务器速度的一个很好的经验法则：当在任何给定时间与每个客户端关联的工作量“小”时，Node.js 是快速的。
> 这适用于事件循环上的回调和工作池上的任务。

### "大多数人在自己开发最初的几个 NodeJS 应用程序中失败只是因为缺乏对事件循环、错误处理和异步等概念的理解"

来自 Deepal的博客 - [Event Loop Best Practices — NodeJS Event Loop Part 5](https://blog.insiderattack.net/event-loop-best-practices-nodejs-event-loop-part-5-e29b2b50bfe2)


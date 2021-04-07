# 测量和防范内存使用情况

<br/><br/>


### 一段解释

在一个完美的开发过程中, Web开发人员不应该处理内存泄漏问题。 实际上，内存问题是一个必须了解的Node已知的问题。首先，内存使用必须不断监视.在开发和小型生产站点上，您可以使用Linux命令或NPM工具和库（如node-inspector和memwatch）来手动测量。 这个人工操作的主要缺点是它们需要一个人进行积极的监控 - 对于正规的生产站点来说，使用鲁棒性监控工具是非常重要的，例如（AWS CloudWatch，DataDog或任何类似的主动系统），当泄漏发生时提醒。 防止泄漏的开发指南也很少：避免将数据存储在全局级别，使用动态大小的流数据，使用let和const限制变量范围。

<br/><br/>

### 其他博客说了什么

* 摘自博客 [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/):
> ... ”正如我们所了解到的，在Node.js 中，JavaScript被V8编译为机器码。由此产生的机器码数据结构与原始表达没有多大关系，只能由V8管理. 这意味着我们不能主动分配或释放JavaScript中的内存. V8 使用了一个众所周知的垃圾收集机制来解决这个问题.”

* 摘自博客 [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “虽然这个例子导致了明显的结果，但这个过程总是一样的：用一些时间和相当数量的内存分配创建heap dumps，比较dumps，以找出正在增长的内存泄露。”

* 摘自博客 [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/):
> ... “故障, 在内存较少的系统上运行时必须限制内存，Node.js会尝试使用大约1.5GB的内存。这是预期的行为，垃圾收集是一个代价很高的操作。
解决方案是为Node.js进程添加一个额外的参数:
node –max_old_space_size=400 server.js –production ”
“为什么垃圾收集代价很高? V8 JavaScript 使用了 stop-the-world (STW)的垃圾回收机制。 事实上，这意味着程序在进行垃圾回收时停止执行。”
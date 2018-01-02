# 测量和防范内存使用情况

<br/><br/>


### 段落解释

在一个完美的开发过程中, Web开发人员不应该处理内存泄漏问题。 实际上，内存问题是一个必须了解的Node已知的问题。 首先，内存使用必须不断监视.在开发和小型生产站点，您可以使用Linux命令或NPM工具和库（如节点检查器和MemWatch）来手动测量。 这个活动指南的主要缺点是它们需要一个人进行积极的监控 - 对于正规的生产场所来说，使用鲁棒性监控工具是非常重要的。 （AWS CloudWatch，DataDog或任何类似的主动系统），当泄漏发生时提醒。 防止泄漏的开发指南也很少：避免将数据存储在全局级别，使用流数据的动态大小，使用let和const限制变量范围。

<br/><br/>

### 其他博客作者所说

* 来自博客 [Dyntrace](http://apmblog.dynatrace.com/):
> ... ”正如我们所了解到的，在Node.js 中，JavaScript被V8编译为本机代码。由此产生的本地数据结构与原稿表达没有多大关系，只能由V8管理. 这意味着我们不能主动分配或释放JavaScript中的内存. V8 使用了一个众所周知的垃圾收集机制来解决这个问题.”

* 来自博客 [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “虽然这个例子导致了明显的结果，但这个过程总是一样的：用一些时间和相当数量的内存分配创建堆转储，比较几个转储，以找出正在增长的东西。”

* 来自博客 [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “故障, 在内存较少的系统上运行时必须限制内存，Node.js 会尝试使用大约1.5GB的内存。这是预期的行为，垃圾收集是一个代价很高的操作。
解决方案是为Node.js进程添加一个额外的参数:
node –max_old_space_size=400 server.js –production ”
“为什么垃圾收集代价很高? V8 JavaScript 使用了 stop-the-world (STW)的垃圾回收机制。 事实上，这意味着程序在进行垃圾回收时停止执行。”
# 使用智能日志使你的应用程序变得透明

<br/><br/>


### 一个段落解释

无论如何，您要打印日志语句，显然需要一些可以在其中跟踪错误和核心指标的接口来包装生产信息（在最慢的API端点，每小时发生了多少错误）为什么不在健壮的日志框架中进行一些适度的尝试呢?要实现这一目标，需要在三个步骤上做出深思熟虑的决定:
**1. 智能日志** -在最基本的情况下，您需要使用像[Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan)这样有信誉的日志库，在每个事务开始和结束时编写有意义的信息。还可以考虑将日志语句格式化为JSON，并提供所有上下文属性（如用户id、操作类型等）。这样操作团队就可以在这些字段上操作。在每个日志行中还包含一个唯一的事务ID，因为更多的信息引用下面的例子“写事务ID到日志”。最后要考虑的一点还包括一个代理，它记录系统资源，如内存和CPU，比如弹性节拍。
**2. 智能聚合** - 一旦您在服务器文件系统中有了全面的信息，就应该定期将这些信息推送到一个聚合、设施和可视化数据的系统中。例如，弹性堆栈是一种流行的、自由的选择，它提供所有组件来聚合和可视化数据。许多商业产品提供了类似的功能，只是它们大大减少了安装时间，不需要主机托管。
**3. 智能可视化** -现在，这些信息是聚合和搜索的，只有通过轻松搜索日志的能力才能满足这一要求，但如果不编码或花费大量的精力，这就会变得更加困难。
<br/><br/>


### 可视化示例:Kibana(弹性栈的一部分)促进了对日志内容的高级搜索
![Kibana facilitates advanced searching on log content](/assets/images/smartlogging1.png "Kibana facilitates advanced searching on log content")

<br/><br/>

### 可视化示例:Kibana(弹性堆栈的一部分)基于日志来可视化数据
![Kibana visualizes data based on logs](/assets/images/smartlogging2.jpg "Kibana visualizes data based on logs")

<br/><br/>

### 博客:记录器的要求
来自博客 [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):
> 让我们识别一些需求（对于一个日志记录器来说）：
> 1. 时间戳每个日志线。这个很好解释，您应该能够判断每个日志条目出现的时间。
> 2. 日志格式应该很容易被人类和机器消化。
> 3. 允许多个可配置的目标流。例如，您可能在一个文件中写入跟踪日志，但是当遇到错误时，将其写入相同的文件，然后进入错误文件并同时发送电子邮件。
 <br/><br/>
 

 
<br/><br/>

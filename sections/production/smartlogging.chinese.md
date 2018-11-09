# 使用智能日志使你的应用程序变得清晰

<br/><br/>


### 一段解释

无论如何，您要打印日志，而且需要一些可以在其中跟踪错误和核心指标的接口来展示生产环境信息（例如，每小时发生了多少错误，最慢的API节点是哪一个）为什么不在健壮的日志框架中进行一些适度的尝试呢? 要实现这一目标，需要在三个步骤上做出深思熟虑的决定:

**1. 智能日志** – 在最基本的情况下，您需要使用像[Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan)这样有信誉的日志库，在每个事务开始和结束时输出有意义的信息。还可以考虑将日志语句格式化为JSON，并提供所有上下文属性（如用户id、操作类型等）。这样运维团队就可以在这些字段上操作。在每个日志行中包含一个唯一的transaction ID，更多的信息查阅条款 “Write transaction-id to log”。最后要考虑的一点还包括一个代理，它记录系统资源，如内存和CPU，比如Elastic Beat。

**2. 智能聚合** – 一旦您在服务器文件系统中有了全面的信息，就应该定期将这些信息推送到一个可以聚合、处理和可视化数据的系统中。例如，Elastic stack是一种流行的、自由的选择，它提供所有组件去聚合和产生可视化数据。许多商业产品提供了类似的功能，只是它们大大减少了安装时间，不需要主机托管。

**3. 智能可视化** – 现在的信息是聚合和可搜索的, 一个可以满足仅仅方便地搜索日志的能力, 可以走得更远, 没有编码或花费太多的努力。我们现在可以显示一些重要的操作指标, 如错误率、平均一天CPU使用, 在过去一小时内有多少新用户选择, 以及任何其他有助于管理和改进我们应用程序的指标。

<br/><br/>


### 可视化示例: Kibana(Elastic stack的一部分)促进了对日志内容的高级搜索
![Kibana facilitates advanced searching on log content](/assets/images/smartlogging1.png "Kibana facilitates advanced searching on log content")

<br/><br/>

### 可视化示例: Kibana(Elastic stack的一部分)基于日志来可视化数据
![Kibana visualizes data based on logs](/assets/images/smartlogging2.jpg "Kibana visualizes data based on logs")

<br/><br/>

### 博客应用: Logger的需求
摘自博客 [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):

> 让我们识别一些需求（对于一个日志记录器来说）：
> 1. 每条日志对应一个时间戳。这个很好解释 – 您应该能够判断每个日志条目出现的时间。
> 2. 日志格式应该很容易被人和机器消化理解。
> 3. 允许多个可配置的目标流。例如，您可能在一个文件中写入trace日志，但是当遇到错误时，将其写入相同的文件，然后写入错误日志文件并同时发送电子邮件...
 <br/><br/>
 

 
<br/><br/>


# 监控！

<br/><br/>

### 一段解释

基本来说，当在生产环境中发生意外时，监控意味着你能够很*容易*识别它们。比如，通过电子邮件或Slack获得通知。挑战在于选择既能满足你的需求又不会破坏防护的合适工具集。我建议, 首先定义一组核心的度量标准, 这些指标必须被监视, 以确保健康状态 – CPU, 服务器RAM, Node进程RAM（小于1.4GB），最后一分钟的错误数量，进程重启次数，平均响应时间。然后去看看你可能喜欢的一些高级功能，并添加到你的愿望清单。一些高级监控功能的例子：DB分析，跨服务测量（即测量业务事务），前端集成，将原始数据展示给自定义BI客户端，Slack 通知等等。

要实现高级功能需要冗长的设置或购买诸如Datadog，Newrelic之类的商业产品。不幸的是，实现基本功能也并不容易，因为一些测量标准是与硬件相关的（CPU），而其它则在node进程内（内部错误），因此所有简单的工具都需要一些额外的设置。例如，云供应商监控解决方案（例如[AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/))能立即告诉您硬件度量标准，但不涉及内部应用程序行为。另一方面，基于日志的解决方案（如ElasticSearch）默认缺少硬件视图。解决方案是通过缺少的指标来增加您的选择，例如，一个流行的选择是将应用程序日志发送到[Elastic stack](https://www.elastic.co/products)并配置一些额外的代理（例如[Beat](https://www.elastic.co/products)）来共享硬件相关信息以获得完整的展现。

<br/><br/>

### 监控示例：AWS cloudwatch默认仪表板。很难提取应用内指标 

![AWS cloudwatch default dashboard. Hard to extract in-app metrics](/assets/images/monitoring1.png)

<br/><br/>

### 监控示例：StackDriver默认仪表板。很难提取应用内指标

![StackDriver default dashboard. Hard to extract in-app metrics](/assets/images/monitoring2.jpg)

<br/><br/>

### 监控示例：Grafana作为可视化原始数据的UI层


![Grafana as the UI layer that visualizes raw data](/assets/images/monitoring3.png)

<br/><br/>
### 其他博主说了什么
  摘自博客 [Rising Stack](https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/):

> ...我们建议您为所有服务监听这些信号：
> 错误率：因为错误是用户面对的，并立即会影响您的客户。
> 响应时间：因为延迟会直接影响您的客户和业务。
> 吞吐量：流量可帮助您了解增加的错误率和延迟的上下文。
> 饱和度：饱和度告诉你你的服务有多“满”。如果CPU使用率是90％，您的系统可以处理更多的流量吗？...

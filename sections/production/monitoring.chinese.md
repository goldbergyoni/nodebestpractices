
监控
<br/><br/>
解释
<br/>
基本来说，监控意味着在生产环境中当发生意外时你能够很容易识别。比如，通过电子邮件或Slack获得通知。
最大的难题是选择既能满足你的需求又不会破坏储库的比较合适的工具集。我建议，首先定义必须监视的一组核心指标，来保证CPU,服务器RAM,Node进程RAM（小于1.4GB），最后一分钟的错误数量，进程重启次数，平均响应时间在正常状态。然后去看看你可能喜欢的一些高级功能，并添加到你的愿望清单。

一些高级监控功能的例子：DB分析，跨服务测量（即测量业务事务），前端集成，将原始数据展示给自定义BI客户端，延缓通知等等。
要实现高级功能需要冗长的设置或购买诸如Datadog，newrelic之类的商业产品。不幸的是，实现基本功能也并不容易，因为一些测量标准是与硬件相关的（CPU），而其他标准是在node进程内（内部错误）因此所有简单的工具都需要一些额外的设置。例如，云供应商监控解决方案（例如[AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/))能立即告诉您硬件度量标准，但不涉及内部应用程序行为。

另一方面，基于日志的解决方案（如ElasticSearch）默认缺少硬件视图。解决方案是通过缺少的指标来增加您的选择，例如，流行的选择是将应用程序日志发送到<a href="https://www.elastic.co/products">Elastic堆栈</a>并配置一些额外的代理（例如<a href="https://www.elastic.co/products">Beat</a>）来共享硬件相关信息以获得完整的图像。

<br/><br/>
###监控示例：AWS cloudwatch默认仪表板。很难提取应用内指标  
<br/>
![AWS cloudwatch default dashboard. Hard to extract in-app metrics](/assets/images/monitoring1.png)
<br/><br/>

###监控示例：StackDriver默认仪表板。很难提取应用内指标
<br/>
![StackDriver default dashboard. Hard to extract in-app metrics](/assets/images/monitoring2.jpg)
<br/><br/>
###监控示例：Grafana作为可视化原始数据的UI层
<br/>
![Grafana as the UI layer that visualizes raw data](/assets/images/monitoring3.png)
<br/><br/>
###其他博客观点
 [<a href="http://mubaloo.com/best-practices-deploying-node-js-applications/">Rising Stack</a>]博客:

> 我们建议您监听所有服务的这些信号：
> 错误率：因为错误是面向用户的，并且会立即影响您的客户。
> 响应时间：因为延迟会直接影响您的客户和业务。
> 吞吐量：流量可帮助您了解增加的错误率和延迟的情况。
> 饱和度：饱和度告诉你你的服务有多满。如果CPU使用率是90％，您的系统可以处理更多的流量吗？

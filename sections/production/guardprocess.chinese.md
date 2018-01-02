# 用正确的工具保护和重启你的失败进程

<br/><br/>


### 段落解释

在基本级别，必须保护Node进程并在出现故障时重新启动。简单地说, 对于那些小容器和不使用的容器 – 像这样的工具 [PM2](https://www.npmjs.com/package/pm2-docker) 是完美的，因为它们带来简单性，重启能力以及与Node的丰富集成。其他具有强大Linux技能的人可能会使用systemd并将Node作为服务运行。对于使用Docker或任何容器技术的应用程序来说，事情会变得更加有趣，因为这些应用程序通常会附带集群管理工具（比如[AWS ECS]（http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html ），[Kubernetes]（https://kubernetes.io/）等），部署，监视和治愈容器。拥有所有丰富的集群管理功能（包括容器重启），为什么还要与其他工具（如PM2）混为一谈？这里并没有可靠的答案。将PM2保留在容器（主要是其容器特定版本[pm2-docker]（https://www.npmjs.com/package/pm2-docker））中作为第一个守护层是有充分的理由的 - 重新启动 处理并在主机容器要求正常重启时向代码提供特定于节点的功能。其他选择可能会避免不必要的图层。总而言之，没有一个解决方案适合所有人，但了解这些选择是最重要的。

<br/><br/>


### 其他博客作者怎么说？

* 来自[快速正产最佳实践](https://expressjs.com/en/advanced/best-practice-performance.html):
> ... 在开发中，您只需从命令行使用node.js或类似的东西启动您的应用程序。**但是在生产中这样做是一种灾难。 如果应用程序崩溃，它将掉线**，直到您重新启动它。要确保应用程序在崩溃时重新启动，请使用进程管理器。流程管理器是便于部署的应用程序的“容器”，提供高可用性，并使您能够在运行时管理应用程序。

* 从中篇博客文章中 [了解节点集群](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
> ...了解Docker-Land中的NodeJS集群“Docker容器是流线型的轻量级虚拟环境，旨在将流程简化为最低限度。管理和协调自己资源的流程不再有价值。**相反，像Kubernetes，Mesos和Cattle这样的管理层已经普及了这些资源应该在整个基础设施范围进行管理的概念**。CPU和内存资源由“调度器”分配，网络资源由堆栈提供的负载均衡器管理。

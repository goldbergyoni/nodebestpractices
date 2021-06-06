# 利用所有的CPU内核

<br/><br/>


### 一段解释

这应该不会让人感到意外, 在其基本形式上，Node运行在单进程，单线程，单个CPU上。购买了一个强大的包含4个或8个CPU的硬件，只使用一个听起来是不可思议的，对吗？适合中型应用最快的解决方案是使用Node的Cluster模块，它在10行代码中为每个逻辑核心和路由请求产生一个进程，进程之间以round-robin的形式存在。更好的是使用PM2，它通过一个简单的接口和一个很酷的监视UI来给cluster模块裹上糖衣。虽然这个解决方案对传统应用程序很有效，但它可能无法满足需要顶级性能和健壮的devops流的应用。对于那些高级的用例，考虑使用自定义部署脚本复制NODE进程，并使用像nginx
这样的专门的工具进行负载均衡，或者使用像AWS ECS或Kubernetees这样的容器引擎，这些工具具有部署和复制进程的高级特性。

<br/><br/>


### 比较:使用Node的clustre vs nginx做负载均衡

![Balancing using Node’s cluster vs nginx](/assets/images/utilizecpucores1.png "Balancing using Node’s cluster vs nginx")

<br/><br/>

### 其他博主说什么
* 摘自[Node.JS documentation](https://nodejs.org/api/cluster.html#cluster_how_it_works):
> ... 理论上第二种方法， Node clusters，应该是性能最佳的。然而, 在实践中, 由于操作系统调度程序的反复无常, 分布往往非常不平衡。观察负载, 所有连接中，超过70%在两个进程中处理, 而总共有八个进程...

* 摘自博客[StrongLoop](From the blog StrongLoop):
> ...通过Node的cluster模块实现集群化。这使一个主进程能够产生工作进程，并在工作进程间分配进入的连接。然而，与其直接使用这个模块，更好的选择是使用其中的许多工具之一, 它为您自动处理它; 例如，node-pm或cluster-service...

* 摘自the Medium post[node.js进程负载平衡性能:比较cluster moudlle、iptables和Nginx](https://medium.com/@fermads/node-js-process-load-balancing- iptabls -and- Nginx -6746aaf38272)
> ... Node cluster易于实施和配置，不依赖于其他软件就可以在Node的领域内进行。请记住，你的主进程将会工作几乎和你的工作进程一样多，比较于其他的解决方案，少一点请求率...
#利用所有的CPU内核

### 段落解释：
 nodejs的基本形式可能不会让人感到意外，是一个运行于单进程单线程单个CPU的服务器引擎。负担一个强大的硬件需要用4个或8个CPU，只使用一个听起来是不可思议的，对吗？适合中型应用程序最快的解决方案是使用Node的Cluster模块，它在10行代码中为每个逻辑核心和流程之间的路由请求产生一个循环样式的过程。更好的是使用PM2，它通过一个简单的接口和一个很酷的监视UI来给集群模块裹上糖衣。虽然这个解决方案对传统应用程序很有效，但它可能无法满足需要顶级性能和健壮的devops流的应用程序。对于那些高级的用例，考虑使用自定义部署脚本复制节点流程，并使用像nginx这样的特殊工具进行
 平衡，或者使用像AWS、ECS或kubernet这样的容器引擎，这些工具具有放置和复制进程的高级特性。

### 比较:平衡使用Node的clustre和nginx

### 其他博客作者说什么：
* 来自[Node.JS documentation](https://nodejs.org/api/cluster.html#cluster_how_it_works):
  理论上第二种方法应该是效率最佳的，但在实际情况下，由于操作系统调度机制的难以捉摸，会使分发变得不稳定。我们遇到过这种情况：8个进程中的2个，分担了70%的负载。

* 来自博客[StrongLoop](From the blog StrongLoop):
 ...通过Node的集群模块实现集群化。这使一个主进程能够产生工作进程，并在工作人员之间分配传入的连接。然而，与其直接使用这个模块，不如使用其中的一个工具自动完成它;例如，node-pm或cluster-service...

* 来自the Medium post[node.js进程负载平衡性能:比较cluster moudlle、iptables和Nginx](https://medium.com/@fermads/node-js-process-load-balancing- iptabls -and- Nginx -6746aaf38272)
节点集群的实现和配置很简单，不依赖于其他软件就可以在Node的领域内进行操作。请记住，你的主进程将会工作几乎和你的工作进程一样多，并且有较少的请求率，然后其他的解决方案...
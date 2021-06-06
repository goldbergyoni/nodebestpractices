# Utilize all CPU cores

<br/><br/>

### One Paragraph Explainer

It might not come as a surprise that in its basic form, Node runs over a single thread=single process=single CPU. Paying for beefy hardware with 4 or 8 CPU and utilizing only one sounds crazy, right? The quickest solution which fits medium sized apps is using Node’s Cluster module which in 10 lines of code spawns a process for each logical core and route requests between the processes in a round-robin style. Even better, use PM2 which sugarcoats the clustering module with a simple interface and cool monitoring UI. While this solution works well for traditional applications, it might fall short for applications that require top-notch performance and robust DevOps flow. For those advanced use cases, consider replicating the NODE process using custom deployment script and balancing using a specialized tool such as nginx or use a container engine such as AWS ECS or Kubernetees that have advanced features for deployment and replication of processes.

<br/><br/>

### Comparison: Balancing using Node’s cluster vs nginx

![Balancing using Node’s cluster vs nginx](/assets/images/utilizecpucores1.png "Balancing using Node’s cluster vs nginx")

<br/><br/>

### What Other Bloggers Say

* From the [Node.js documentation](https://nodejs.org/api/cluster.html#cluster_how_it_works):
> ... The second approach, Node clusters, should, in theory, give the best performance. In practice, however, distribution tends to be very unbalanced due to operating system scheduler vagaries. Loads have been observed where over 70% of all connections ended up in just two processes, out of a total of eight ...

* From the blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):
> ... Clustering is made possible with Node’s cluster module. This enables a master process to spawn worker processes and distribute incoming connections among the workers. However, rather than using this module directly, it’s far better to use one of the many tools out there that do it for you automatically; for example node-pm or cluster-service ...

* From the Medium post [Node.js process load balance performance: comparing cluster module, iptables, and Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272)
> ... Node cluster is simple to implement and configure, things are kept inside Node’s realm without depending on other software. Just remember your master process will work almost as much as your worker processes and with a little less request rate than the other solutions ...

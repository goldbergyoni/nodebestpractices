# Guard and restart your process upon failure (using the right tool)

<br/><br/>

### One Paragraph Explainer

At the base level, Node processes must be guarded and restarted upon failures. Simply put, for small apps and those who don’t use containers – tools like [PM2](https://www.npmjs.com/package/pm2-docker) are perfect as they bring simplicity, restarting capabilities and also rich integration with Node. Others with strong Linux skills might use systemd and run Node as a service. Things get more interesting for apps that use Docker or any container technology since those are usually accompanied by cluster management and orchestration tools (e.g. [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Kubernetes](https://kubernetes.io/), etc) that deploy, monitor and heal containers. Having all those rich cluster management features including container restart, why mess up with other tools like PM2? There’s no bulletproof answer. There are good reasons to keep PM2 within containers (mostly its containers specific version [pm2-docker](https://www.npmjs.com/package/pm2-docker)) as the first guarding tier – it’s much faster to restart a process and provide Node-specific features like flagging to the code when the hosting container asks to gracefully restart. Other might choose to avoid unnecessary layers. To conclude this write-up, no solution suits them all and getting to know the options is the important thing

<br/><br/>

### What Other Bloggers Say

* From the [Express Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html):
> ... In development, you started your app simply from the command line with node server.js or something similar. **But doing this in production is a recipe for disaster. If the app crashes, it will be offline** until you restart it. To ensure your app restarts if it crashes, use a process manager. A process manager is a “container” for applications that facilitate deployment, provides high availability, and enables you to manage the application at runtime.

* From the Medium blog post [Understanding Node Clustering](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
> ... Understanding Node.js Clustering in Docker-Land “Docker containers are streamlined, lightweight virtual environments, designed to simplify processes to their bare minimum. Processes that manage and coordinate their own resources are no longer as valuable. **Instead, management stacks like Kubernetes, Mesos, and Cattle have popularized the concept that these resources should be managed infrastructure-wide**. CPU and memory resources are allocated by “schedulers”, and network resources are managed by stack-provided load balancers.

# Utiliza todos los núcleos de la CPU

<br/><br/>

### Párrafo de explicación

Quizá no sea una sorpresa que, en su forma básica, Node se ejecute en un solo subproceso = proceso único = una sola CPU. Pagar por hardware pesado con 4 u 8 CPUs y usar solo una suena absurdo, ¿verdad? La solución más rápida que se adapta a aplicaciones de tamaño medio es utilizar el módulo Node's Cluster, que en 10 líneas de código genera un proceso para cada núcleo lógico y redirige las peticiones entre los procesos al estilo round-robin. Mejor aún, PM2 endulza Node's Cluster con una interfaz de monitorización simple y genial. Si bien esta solución funciona bien para aplicaciones tradicionales, se puede quedar corta para aplicaciones que requieren de un rendimiento de primer nivel y de un flujo DevOps robusto. Para esos casos más avanzados, considera la posibilidad de replicar el proceso NODE mediante un script personalizado de deploy, y balancear la carga a través de herramientas especializadas como nginx, o a través de un motor de contenedores como AWS ECS o Kubernetees, que tienen funciones avanzadas para deployment y replicación de procesos.

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

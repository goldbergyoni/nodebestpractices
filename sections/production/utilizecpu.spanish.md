# Utiliza todos los núcleos de la CPU

<br/><br/>

### Párrafo de explicación

Quizá no sea una sorpresa que, en su forma básica, Node se ejecute en un solo subproceso = proceso único = una sola CPU. Pagar por hardware pesado con 4 u 8 CPUs y usar solo una suena absurdo, ¿verdad? La solución más rápida que se adapta a aplicaciones de tamaño medio es utilizar el módulo Node's Cluster, que en 10 líneas de código genera un proceso para cada núcleo lógico y redirige las peticiones entre los procesos al estilo round-robin. Mejor aún, PM2 endulza Node's Cluster con una interfaz de monitorización simple y genial. Si bien esta solución funciona bien para aplicaciones tradicionales, se puede quedar corta para aplicaciones que requieren de un rendimiento de primer nivel y de un flujo DevOps robusto. Para esos casos más avanzados, considera la posibilidad de replicar el proceso NODE mediante un script personalizado de deploy, y balancear la carga a través de herramientas especializadas como nginx, o a través de un motor de contenedores como AWS ECS o Kubernetees, que tienen funciones avanzadas para deployment y replicación de procesos.

<br/><br/>

### Comparación: Balanceando usando el cluster de Node vs nginx

![Balancing using Node’s cluster vs nginx](/assets/images/utilizecpucores1.png "Balancing using Node’s cluster vs nginx")

<br/><br/>

### What Other Bloggers Say

* De la [documentación de Node.js](https://nodejs.org/api/cluster.html#cluster_how_it_works):
> ... The second approach, Node clusters, should, in theory, give the best performance. In practice, however, distribution tends to be very unbalanced due to operating system scheduler vagaries. Loads have been observed where over 70% of all connections ended up in just two processes, out of a total of eight ...

> ... El segundo enfoque, Node clusters, debería, en teoría, dar el mejor rendimiento. Pero, en práctica, la distribución tiene a estar muy desbalanceada debido a los caprichos del planificador del sistema. Cargas se han observado donde arriba del 70% de todas las conexiones terminan en solo 2 procesos, de un total de ocho ...

* Del blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):
> ... Clustering is made possible with Node’s cluster module. This enables a master process to spawn worker processes and distribute incoming connections among the workers. However, rather than using this module directly, it’s far better to use one of the many tools out there that do it for you automatically; for example node-pm or cluster-service ...

> ... Hacer clustering es posible con el módulo cluster de Node. Este permite al proceso principal el invocar procesos obreros y distribuir las conexiones entrantes entre estos obreros. Son embargo, en lugar de utilizar este módulo directamente, es mucho mejor utilizar una de las muchas herramientas que existen que lo hacen por ti automáticamente; por ejemplo node-pm o cluster-service ...

* De la publicación en Medium [Node.js process load balance performance: comparing cluster module, iptables, and Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272)
> ... Node cluster is simple to implement and configure, things are kept inside Node’s realm without depending on other software. Just remember your master process will work almost as much as your worker processes and with a little less request rate than the other solutions ...

> ... Node cluster es simple de implementar y configurar, las cosas se mantienen dentro del dominio de Node sin depender de otro software. Solo recuerda que el proceso maestro va a trabajar casi igual que los procesos obreros y con una tasa de peticiones menor que otras soluciones ...
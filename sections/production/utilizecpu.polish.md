# Wykorzystaj wszystkie rdzenie procesora

<br/><br/>

### Wyjaśnienie jednym akapitem

Nic dziwnego, że w swojej podstawowej formie Node działa na jednym wątku = pojedynczy proces = pojedynczy procesor. Płacenie za mocny sprzęt z 4 lub 8 procesorami i używanie tylko jednego brzmi szalenie, prawda? Najszybszym rozwiązaniem, które pasuje do średnich aplikacji jest użycie modułu klastrowania Node, który w 10 liniach kodu tworzy proces dla każdego logicznego rdzenia i kieruje żądania między procesami w stylu round-robin. Jeszcze lepiej, użyj PM2, który otacza moduł klastrowania prostym interfejsem i fajnym interfejsem monitorowania. Chociaż to rozwiązanie działa dobrze w przypadku tradycyjnych aplikacji, może nie być wystarczające w przypadku aplikacji, które wymagają najwyższej wydajności i niezawodnego przepływu DevOps. W przypadku zaawansowanych przypadków użycia rozważ replikację procesu NODE przy użyciu niestandardowego skryptu wdrażania i równoważenie za pomocą specjalistycznego narzędzia, takiego jak nginx, lub użyj silnika kontenera, takiego jak AWS ECS lub Kubernetees, które mają zaawansowane funkcje wdrażania i replikacji procesów.

<br/><br/>

### Porównanie: równoważenie za pomocą Node cluster vs nginx

![Balancing using Node’s cluster vs nginx](../../assets/images/utilizecpucores1.png "Balancing using Node’s cluster vs nginx")

<br/><br/>

### Co mówią inni blogerzy

* Z [dokumentacji Node.js](https://nodejs.org/api/cluster.html#cluster_how_it_works):
> ... The second approach, Node clusters, should, in theory, give the best performance. In practice, however, distribution tends to be very unbalanced due to operating system scheduler vagaries. Loads have been observed where over 70% of all connections ended up in just two processes, out of a total of eight ...

* Z bloga [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):
> ... Clustering is made possible with Node’s cluster module. This enables a master process to spawn worker processes and distribute incoming connections among the workers. However, rather than using this module directly, it’s far better to use one of the many tools out there that do it for you automatically; for example node-pm or cluster-service ...

* Z posta na Medium [Node.js process load balance performance: comparing cluster module, iptables, and Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272)
> ... Node cluster is simple to implement and configure, things are kept inside Node’s realm without depending on other software. Just remember your master process will work almost as much as your worker processes and with a little less request rate than the other solutions ...

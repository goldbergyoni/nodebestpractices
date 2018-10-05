# Proteje y reinicia tu proceso ante fallos (mediante la herramienta adecuada)

<br/><br/>

### Párrafo de explicación

Desde un nivel base, los procesos de Node deben protegerse reiniciándose en caso de fallo. En pocas palabras, para aplicaciones pequeñas y para aquellos que no usan contenedores: herramientas como [PM2](https://www.npmjs.com/package/pm2-docker) son perfectas, ya que brindan simplicidad, capacidad de reinicio y una gran integración con Node. Otros con sólidas habilidades en Linux podrían usar systemd y ejecutar Node como servicio. Las cosas se vuelven más interesantes para aplicaciones que usan Docker o cualquier tecnología de contenedores, ya que suelen ir acompañadas de herramientas de orquestación y gestión de clúster (por ejemplo, [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Kubernetes](https://kubernetes.io/), etc.) que despliegan, supervisan y reparan contenedores. Con toda esa abundancia en funciones de administración de clústeres, incluyendo reinicio de contenedores, ¿por qué ir a otras herramientas como PM2? No hay respuesta a prueba de balas. Hay buenas razones para mantener PM2 en el interior de contenedores (principalmente su versión específica para contenedores [pm2-docker](https://www.npmjs.com/package/pm2-docker)). Como primer nivel de protección, es mucho más rápido reiniciar un proceso y proporcionar características específicas de Node como marcar el código cuando el contenedor solicita un reinicio correctamente. Otros quizá elijan evitar capas innecesarias. Para concluir este artículo, ninguna solución es siempre la más conveniente, lo importante es conocer las opciones.

<br/><br/>

### What Other Bloggers Say

* From the [Express Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html):
> ... In development, you started your app simply from the command line with node server.js or something similar. **But doing this in production is a recipe for disaster. If the app crashes, it will be offline** until you restart it. To ensure your app restarts if it crashes, use a process manager. A process manager is a “container” for applications that facilitate deployment, provides high availability, and enables you to manage the application at runtime.

* From the Medium blog post [Understanding Node Clustering](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
> ... Understanding NodeJS Clustering in Docker-Land “Docker containers are streamlined, lightweight virtual environments, designed to simplify processes to their bare minimum. Processes that manage and coordinate their own resources are no longer as valuable. **Instead, management stacks like Kubernetes, Mesos, and Cattle have popularized the concept that these resources should be managed infrastructure-wide**. CPU and memory resources are allocated by “schedulers”, and network resources are managed by stack-provided load balancers.

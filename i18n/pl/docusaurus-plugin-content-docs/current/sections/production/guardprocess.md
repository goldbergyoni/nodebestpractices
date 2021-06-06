# Chroń i wznawiaj swoje procesy w przypadku awarii (za pomocą odpowiedniego narzędzia)

<br/><br/>

### Wyjaśnienie jednym akapitem

Na poziomie podstawowym procesy węzłów muszą być chronione i restartowane w przypadku awarii. Mówiąc prosto, dla małych aplikacji i tych, którzy nie używają kontenerów - narzędzia takie jak [PM2](https://www.npmjs.com/package/pm2-docker) są idealne, ponieważ zapewniają prostotę, możliwości ponownego uruchamiania oraz bogatą integrację z węzłem. Inni z dużymi umiejętnościami w Linuksie mogą używać systemd i uruchamiać Node jako usługę. Sprawy stają się bardziej interesujące dla aplikacji korzystających z Dockera lub dowolnej technologii kontenerowej, ponieważ zwykle towarzyszą im narzędzia do zarządzania klastrami i organizacji (np. [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Kubernetes](https://kubernetes.io/) itp.), które wdrażają, monitorują i leczą kontenery. Mając te wszystkie bogate funkcje zarządzania klastrami, w tym restart kontenera, po co mieszać się z innymi narzędziami, takimi jak PM2? Nie ma kuloodpornej odpowiedzi. Istnieją dobre powody, aby trzymać PM2 w kontenerach (głównie jego specyficzna wersja kontenerów [pm2-docker](https://www.npmjs.com/package/pm2-docker)) jako pierwsza warstwa ochronna - znacznie szybciej jest zrestartować przetwarzać i udostępniać funkcje specyficzne dla węzłów, takie jak oznaczanie kodu, gdy kontener hostujący prosi o wdzięczne ponowne uruchomienie. Inni mogą unikać niepotrzebnych warstw. Na zakończenie tego podsumowania żadne rozwiązanie nie pasuje do nich wszystkich, a poznanie opcji jest ważne.

<br/><br/>

### Co mówią inni blogerzy

* Z [Express Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html):
> ... In development, you started your app simply from the command line with node server.js or something similar. **But doing this in production is a recipe for disaster. If the app crashes, it will be offline** until you restart it. To ensure your app restarts if it crashes, use a process manager. A process manager is a “container” for applications that facilitate deployment, provides high availability, and enables you to manage the application at runtime.

* Z posta na blogu Medium [Understanding Node Clustering](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
> ... Understanding Node.js Clustering in Docker-Land “Docker containers are streamlined, lightweight virtual environments, designed to simplify processes to their bare minimum. Processes that manage and coordinate their own resources are no longer as valuable. **Instead, management stacks like Kubernetes, Mesos, and Cattle have popularized the concept that these resources should be managed infrastructure-wide**. CPU and memory resources are allocated by “schedulers”, and network resources are managed by stack-provided load balancers.

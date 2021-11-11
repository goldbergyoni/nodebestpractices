# 너의 프로세스를 실패에 대비하여 보호하고 재시작하라 (올바른 툴을 사용해서)

<br/><br/>

### 한 문단 설명

기본적으로, 노드 프로세스는 실패에 대비하여 보호되어야 하고 재시작되어야 한다. 간단히 말해, 작은 앱 혹은 container를 사용하지 않는 이에게 [PM2](https://www.npmjs.com/package/pm2-docker)와 같은 툴은 간단명료함, 재시작 역량, 노드와의 높은 호환성 등을 제공하기 때문에 안성맞춤이다. 강력한 리눅스 스킬을 가진 다른 이들은 시스템을 이용할 것이며, 노드를 서비스로 실행할 것이다. 도커 또는 다른 어떤 컨테이너 기술을 사용하는 앱의 얘기는 더 흥미진진해 지는데, 이들은 통상적으로 전개(deploy), 모니터링 그리고 컨테이너의 치유를 하는 클러스터 매니지먼트 혹은 orchestration 툴들(예. [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html), [Kubernetes](https://kubernetes.io/), etc)을 포함하기 때문이다. 컨테이너 재시작을 포함, 이런 유려한 클러스터 관리 기능들을 보유하고 있음에도 PM2와 같은 다른 툴들로 망치는 이유는 뭘까? 정해진 답은 없다. 컨테이너(대게 이것의 특정 버전 [pm2-docker](https://www.npmjs.com/package/pm2-docker)) 안에 PM2를 최우선 보호 티어로 유지해야하는 타당한 이유가 있다 - 재시작 시 더 빠르고 호스팅 컨테이너가 gracefully restart할 때 코드에 flagging하는 등 노드-특화 기능들을 제공하기 때문이다. 다른 것들은 불필요한 layers을 피하는 것을 선택하는 반면 말이다. 이 글의 결론을 말하자면, 모두를 만족시키는 해결책은 없기에 옵션을 아는 것이 중요하다는 것이다.

<br/><br/>

### 다른 블로거들의 얘기한 내용

- 다음으로 부터 [Express Production Best Practices](https://expressjs.com/en/advanced/best-practice-performance.html):

  > ... 개발과정에서, 너는 커맨드라인에서 간단히 node server.js 혹은 비슷한 커맨드로 서버를 실행할 것이다. **그러나 프로덕션에서 이렇게하면 재앙과 같은 결과로 이어질 수 있다. 앱이 터지면 너가 재시동할 때 까지 오프라인이 될 것이다.** 너의 앱이 터졌을 때 재시동을 보장하려면 프로세스 매니저를 사용하라. 프로세스 매니저는 애플리케이션의 전개를 가능하게 하고 높은 수준의 유효성을 제공하며 런타임에 너가 애플리케이션을 관리할 수 있도록 해주는 일종의 "컨테이너" 이다.

- 다음 중간 블로그 포스트에서 [Understanding Node Clustering](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
  > ... Docker-Land 내 Node.js 클러스터링에 대해 이해하기 "도커 컨테이너는 간소화된, 가벼운 가상 환경이며 가능한 한 프로세스를 간소화하도록 디자인되어 있다. 그들 스스로의 자원을 관리하고 조정하는 프로세스는 더이상 가치있게 여겨지지 않는다. **대신, Kubernetes, Mesos 그리고 Cattle 과 같은 관리 스택들은 이러한 자원들이 infrastructure-wide하게 관리되어야 한다는 개념을 널리알렸다.** CPU와 메모리 자원은 "schedulers"에 의해 할당되며, 네트워크 자원들은 stack-provided 로드 발란서에 의해 관리된다.

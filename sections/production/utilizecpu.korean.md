# 모든 CPU 코어를 이용하라

<br/><br/>

### 한 문단 설명

노드가 기본 폼일 땐 하나의 스레드=싱글 프로세스=싱글 CPU이라는 점은 별로 놀랍게 다가오지 않을 것이다. 4코어 혹은 8코어를 탑재한 고성능 CPU에서 고작 한 개의 코어를 이용한다니 좀 어이없다, 아니한가? 중간 규모의 앱에 적합한 가장 빠른 해결책은 코드 10줄로 프로세스 사이 round-robin 스타일로 각 논리코어와 루트 요청에 프로세스를 생산하는 노드의 클러스터를 사용하는 것이다. 간단한 인터페이스와 멋진 모니터링 UI로 클러스터링 모듈을 더 매력적으로 만드는 PM2를 사용하는 것은 금상첨화일 것이다. 그러나 이 해결책이 전통적인 애플리케이션에는 충분할진 몰라도, 최상의 퍼포먼스와 robust 데브옵스 플로우를 요구하는 애플리케이션에는 역부족이다. 이러한 고급 사용사례를 위해, 커스텀된 전개 스크립트를 이용한 노드프로세스의 복제나 nginx같은 특화 툴을 이용한 균형화(balancing)을 고려해보고 AWS ECS나 쿠버네티스와 같이 프로세스의 전개와 복제에 강점이 있는 컨테이너 엔진을 사용해 보아라.

<br/><br/>

### 비교: 노드의 클러스터 vs nginx를 이용한 균형화

![노드의 클러스터 vs nginx를 이용한 발란싱](/assets/images/utilizecpucores1.png "노드의 클러스터 vs nginx를 이용한 발란싱")

<br/><br/>

### 다른 블로거들이 말하길

- 다음 내용으로 부터 [Node.js documentation](https://nodejs.org/api/cluster.html#cluster_how_it_works):

  > ... 두번째 접근법(블로그 내 명시)이었던 노드 클러스터들은 이론상 최상의 퍼포먼스를 내야한다. 그러나 실제로는 운영체제 스케쥴러가 변덕스러운 이유로 배포가 상당히 불균형한 경향이 있다. 8 개중 고작 2 개의 프로세스로 모든 커넥션 의 70%가 넘는 비율이 로드되는 것으로 확인되었다.
  > ...

- 다음 블로거로 부터 [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

  > ... 클러스터링은 노드의 클러스터 모듈로 가능하게 되어있다. 이것은 마스터 프로세스가 워커 프로세스를 생산하여 유입되는 커넥션들을 워커 프로세스들 사이에서 분산할 수 있게 해준다. 그러나, 이 모듈을 직접적으로 사용하는 것 보단, 그것을 자동으로 처리해줄 수 있는 그밖의 수많은 툴들을 이용함이 훨씬 낫다; 예를들어 node-pm 혹은 cluster-service ...

- 다음 포스트의 중간부로 부터 [Node.js process load balance performance: comparing cluster module, iptables, and Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272)
  > ... 노드 클러스터는 실행하고 구성하기 쉽고, 다른 소프트웨어에 대한 의존 없이 노드의 영역안에 들어있다. 너의 마스터 프로세스가 다른 솔루션에 비해 별반 다를 바 없는 요청율을 갖고 너의 워커 프로세스 만큼 일한다는 것을 명심하라.
  > ...

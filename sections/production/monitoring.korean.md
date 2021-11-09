# Monitoring!

<br/><br/>

### 한문단 설명

기본적으로 모니터링이라 함은 제품(production)에 문제가 생겼을 *쉽게* 알아차릴 수 있음을 의미한다. 이메일이나 슬랙(Slack)을 통해 알게되는 것이 그 예이다. 너의 요구사항을 만족하는 올바른 툴 셋을 큰 어려움 없이 정하는 것이 관건이다. 조언하건데 CPU, 서버 RAM, 노드 프로세스 RAM(1.4GB보다 작은), 마지막 순간 발생하는 에러의 수, 프로세스 재시동 수, 평균 반응 시간과 같이 건전한 상태(healthy state)를 보장하기 위해 관리되어야하는 메트릭스(metrics) 코어셋부터 정의하라. 
그리고 나서 너가 원하는 고급기능을 찾아보고 너의 위시리스트에 추가하라. 럭셔리 모니터링 방법에 대한 몇가지 예시: DB 프로파일링, corss-service 측정법(즉, 비즈니스 트렌젝션을 측정함), 프론트엔드 통합(front-end integration), 커스텀 BI 고객에게 로우 데이터(raw data) 노출, 슬랙 알림, 그 외 다른 많은 것들. 

고급 기능들을 손에 넣는 것에는 긴 시간이 소요되는 셋업 또는 유료 제품인 Datadog, newrelic 등의 구매를 요구로 한다. 불행히도 일부 매트릭스는 하드웨어와 관련 되었으며 (CPU) 나머지는 노드 프로세스(내부 에러) 에 존재하는 등 모든 straightforward 툴들은 추가적인 셋업이 필요함에따라 기본적인 것들 조차 손에 넣기란 쉽지만은 않다. 예를 들어 cloud vendor monitoring solutions (예. [AWS CloudWatch](https://aws.amazon.com/cloudwatch/), [Google StackDriver](https://cloud.google.com/stackdriver/)) 은 너에게 즉각 하드웨어 매트릭스에 관하여 알려줄테지만, 내부적인 앱 행동은 알려주지 않는다. 한편, elasticsearch 와 같은 로그기반 솔루션은 기본으로(by default) 하드웨어 랙을 일으킨다. missing metrics로 더 나은 선택을 함으로써 이를 해결할 수 있다. 널리 사용되는 예를 들면 [Elastic stack](https://www.elastic.co/products) 에 로그를 보내는 방법이고, 추가적인 에이전트 (예. [Beat](https://www.elastic.co/products)) 를 알아내 전반적인 흐름을 알 수 있게 해주는 하드웨어 관련 정보를 공유한다.   

<br/><br/>

### 모니터링 예시: AWS cloudwatch default dashboard. 애플리케이션 내 매트릭스를 추출하기란 어렵다.

![AWS cloudwatch default dashboard. 애플리케이션 내 매트릭스를 추출하기란 어렵다.](/assets/images/monitoring1.png)

<br/><br/>

### 모니터링 예시: StackDriver default dashboard. 애플리케이션 내 매트릭스를 추출하기란 어렵다.

![StackDriver default dashboard. 애플리케이션 내 매트릭스를 추출하기란 어렵다.](/assets/images/monitoring2.jpg)

<br/><br/>

### Monitoring example: UI층으로서 로우 데이터를 시각화 하는 Granfana

![UI 층으로서 로우 데이터 (raw data) 를 시각화 하는 Grafana](/assets/images/monitoring3.png)

<br/><br/>

### 다른 블로거들이 말하길

다음의 블로그로 부터 [Rising Stack](http://mubaloo.com/best-practices-deploying-node-js-applications/):

> …우리는 너가 하기와 같은 신호(signals)들을 너의 서비스 전반을 위해 둘러보길 권장한다:
> 오류율: 에러는 유저 코앞에 있고 즉각적으로 고객에게 영향을 미칠 수 있기 떄문이다.
> 응답시간: 지연율은 너의 고객들과 비즈니스에 직접적으로 영향을 미칠 수 있기 때문이다.
> 스르풋: 트래픽은 너가 증가한 오류율과 지연율의 내용을 이해할 수 있도록 듭는다.
> 포화: 너의 서비스가 얼마나 "가득" 찼는지 말해준다. CPU 사용량이 90%일 경우 너의 시스템이 추가적인 트래픽을 감당할 수 있을까? …

# Make your app transparent using smart logs

<br/><br/>

### 한 문단 설명

너가 log statement를 인쇄(print)한 이후부터 어찌됐든 너는 프로덕션 정보를 감쌀 수 있고 이를 통해 에러와 코어 메트릭스를 추적(예. 한 시간의 몇번정도의 에러가 발생하는가, 그리고 너의 가장 느린 API end-point는 무엇인가)할 수 있는 몇 인터페이스를 필요로 할 것이다.
모든 것을 만족하는 robust logging framework에 일정 노력을 투자해 보는 것이 어떠한가? 세 가지 단계들에 있어 신중한 결정이 뒷밤침되어야 얻어지는 것 :

**1. 스마트 로깅** – 최소한 [Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan)와 같이 평판 좋은 로깅 라이브러리(logging library)를 사용하여야 하며 각 트랜젝션의 시작과 끝에 의미있는 정보를 써내려갈 필요가 있다. 또한 JSON처럼 log statement를 포맷하고 모든 문단상의 속성들(예. 유저 아이디, 운용체제 종류, 등등)을 제공해 운영 팀(operation team)이 이 필드에서 활동할 수 있도록 함을 고려해보아라. 각 로그 라인마다 고유한(unique) 트랜잭션 아이디를 포함하하고, 더 많은 정보를 원한다면 하기의 불릿을 참조해라. "트랜젝션-아이디를 로그에 적어라". 마지막, 추가적으로 고려해야할 점은 메모리와 Elastic Beat과 같은 CPU등 시스템 자원에 logs하는 주체(agent) 역시 포함하는 것이다.

**2. 스마트 합산** – 서버 파일 시스템에 대한 종합적인 정보가 있다면 이제는 이들 정보를 합산하고, 기능하게 하며 시각화하는 시스템에 정기적으로 올려(push)야 할 때이다. 예를들어 Elastic stack은 모든 컴포넌트들의 합산과 데이터 시각화를 제공하는 유명한 무료 선택이다. 셋업 시간을 대폭 줄이고 호스팅을 요하지 않는다면 비슷한 기능을 제공하는 여타 유료 제품들이 많이 있다.

**3. 스마트 시각화** – 이제 정보가 합산되었고 검색가능하다면, 누군가는 logs 을 검색으로 쉽게 찾을 수 있는 힘에 만족할테지만 코딩이나 추가적인 노력 없이 더 많은 것들을 할 수 있다. 우리는 이제 오류율, 하루동안의 평균 CPU, operational 매트릭스, 얼마나 많은 유저가 최근 한 시간동안 옵트인 했는가와 같은 우리의 앱을 관리하고 향상할 수 있는 중요한 매트릭스들을 보여줄 수 있다.

<br/><br/>

### 시각화 예시: Kibana(Elastic stack의 일부)는 log content에 대하여 고급 검색기능을 가능하게 한다.

![Kibana facilitates advanced searching on log content](/assets/images/smartlogging1.png "Kibana facilitates advanced searching on log content")

<br/><br/>

### 시각화 예시: Kibana (Elastic stack의 일부)는 logs에 기반하여 데이터를 시각화할 수 있다.

![Kibana visualizes data based on logs](/assets/images/smartlogging2.jpg "Kibana visualizes data based on logs")

<br/><br/>

### 블로그 인용: Logger 요구사항

다음의 블로그로부터 [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):

> 몇 요구사항들을 알아보자. (for a logger):
>
> 1. 각 로그 라인에 타임스탬프를 찍어라. 꽤나 자명한 설명 - 언제 각 로그 엔트리들이 발생했는지 식별 가능해야한다.
> 2. 로깅 포맷은 머신 뿐 아니라 사람에게도 쉽게 받아들여져야 한다.
> 3. 몇몇 추정가능한 목적지 흐름(Definition stream)을 허용하라. 예를들어, 너가 파일에 추적 로그를 적겠지만 에러가 발견되면, 같은파일에 적고 나서 에러파일에 적고 동시에 이메일도 보내라…

<br/><br/>

<br/><br/>

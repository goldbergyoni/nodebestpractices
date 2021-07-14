# 컴포넌트 기반으로 설계하라

<br/><br/>

### 한문단 설명

중소규모 이상의 앱부터는 단일암체 monolith는 정말 좋지 않다 - 의존성이 여럿 있는 커다란 하나의 소프트웨어를 쓰는 것은 꼬일대로 꼬인 스파게티 코드를 초래한다. 이 괴물을 '모듈화'하여 길들일만큼 숙련된 똑똑한 설계자들조차 디자인에 엄청난 정신력을 쏟아붓고, 모든 변화는 다른 의존하는 프로젝트에 어떤 영향을 미치는지 신중히 감정할것을 필요로 한다. 궁극적인 해결책은 소규모의 소프트웨어를 개발하는 것이다: 스택 전체를 다른이들과 파일을 공유하지 않는 자족적(self-contained)인 컴포넌트로 나누고, 추론하기 쉽게 극소수의 파일로만 구성되어야 한다 (예: API, 서비스, 데이터 접근, 테스트 등). 이것을 "마이크로서비스" 설계라고 부르기도 하는데, 마이크로서비스는 따라야 하는 사양이 아니라 원칙들이란 것을 아는 것이 중요하다. 원칙을 여럿 받아들여 완전한 마이크로서비스 설계를 할 수도 있고, 아니면 그 중 소수만 받아들일 수도 있다. 소프트웨어의 복잡하게 하지 않는 한 둘 다 좋은 방법이다. 최소한 컴포넌트 사이에 경계를 나누고, 프로젝트 최상위 루트에 각각의 비지니스 컴포넌트를 각기 다른 폴더에 배치하여 다른 컴포넌트들은 공용 인터페이스나 API로만 기능을 소비할 수 있게  자족적으로 만들 것. 이것이 컴포넌트를 간단하게 하고, 의존성 지옥을 방지하며 미래에 앱이 완전한 마이크로서비스로 자라나는 길을 닦는 기반이다.

<br/><br/>

### 블로그 인용: "확장하려면 애플리케이션 전체를 확장해야한다"

MartinFowler.com 블로그로부터

> 단일암체 애플리케이션도 성공적일 수 있지만, 점점 더 많은 사람들이 불만을 느끼고 있다 - 특히 더 많은 애플리케이션들이 클라우드로 전개될수록. 변화 주기는 다 같이 묶여 있다 - 애플리케이션의 조그마한 부분을 바꾸면 단일암체 전체를 재건하고 재배치하여야 한다. 시간이 흐를수록 좋은 모듈식의 구조를 유지하는것이 힘들어지고, 모듈 하나에만 작용해야 할 변화가 그 모듈 이내에서만 작용하도록 하는것이 힘들어진다. 더 많은 자원을 필요로 하는 부분만 확장하는 것이 아니라, 확장하려면 애플리케이션 전체를 확장해야한다.

<br/><br/>

### 블로그 인용: "그러니 당신의 어플리케이션의 설계를 보면 어떤 감이 오는가?"

[uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html)블로그로부터

> ...도서관 설계도를 보면, 아마도 커다란 입구, 체크인/체크아웃 구역, 독서실, 소규모 회의실들, 도서관의 모든 책을 수용할 수 있게 책꽂이들을 놓을 만한 공간들이 보일 것이다. 설계도를 보면 도서관이라고 바로 감이 올 것이다.<br/>

그러니 당신의 어플리케이션의 설계를 보면 어떤 감이 오는가? 최상위 디렉토리 구조와 최고위 레벨의 패키지의 소스 파일을 보면 건강 관리 시스템인지, 회계 시스템인지, 재고관리 시스템인지 바로 감이 오는가? 아니면 Rails이나 Spring/Hibernate, 혹은 ASP라는 감이 오는가?.

<br/><br/>

### 좋은예: 자족적인 컴포넌트 기반으로 설계하라

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### 나쁜예: 파일을 기술적인 역할별로 모아라

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")
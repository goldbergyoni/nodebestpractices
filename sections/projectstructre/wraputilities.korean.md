# 공유 유틸리티들은 NPM 패키지로 감싸라 (wrap)

<br/><br/>

### 한문단 설명

자라나기 시작하면서 비슷한 유틸리티들을 소비하는 다른 서버의 다른 컴포넌트들이 생겨나면 의존성을 관리하기 시작해야 한다 - 유틸리티 코드 한 부를 어떻게 소비자 컴포넌트 여럿이서 같이 쓰고 배치할 수 있게 하는가? 자, 여기 쓸만한 도구가 여기 있다...npm이라 불리는. 먼저 제삼자 유틸리티 패키지를 자신만의 코드로 감싸  미래에 대체하기 쉽게 하고 그 코드를 private npm 패키지로 publish해라. 이제 당신의 모든 코드 기반은 그 코드를 수입하여 무료 의존성 관리 도구의 혜택을 볼 수 있다. [private 모듈](https://docs.npmjs.com/private-modules/intro)이나 [private 레지스트리](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html), 혹은 [로컬 npm 패키지](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)를 사용하면 npm 패키지를 공개적으로 공유하지 않고도 자용으로 쓸 수 있게 출판할 수 있다.

<br/><br/>

### 당신만의 공유 유틸리티들을 환경과 컴포넌츠에 공유하기

![alt text](../../assets/images/Privatenpm.png "Structuring solution by components")

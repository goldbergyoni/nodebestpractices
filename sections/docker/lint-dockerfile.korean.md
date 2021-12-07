# 도커파일을 린트하여라

### 한 문단 설명

우리들의 핵심 어플리케이션 코드가 best practice에 부합되도록 린트되고 이슈나 버그들이 문제가 되기 전에 제거하는 것 처럼 우리의 도커파일들도 그렇게 해야한다. 도커파일을 린팅하는 것은 적은 노력으로 이슈를 잡아낼 확률을 높여준다. 예를 들어, 존재하지 않는 스테이지로 부터 복제를 시도하는 것, 알려지지 않은 온라인 저장소로 부터 복제하는 것, 파워 유저(SUDO)로 앱을 실행하는 것 외에 수많은 너의 도커파일에 특정된 logic과 instruction에 구조적 문제가 없음을 보장해 줄 수 있다. 오픈소스 도커파일 린터인 [Hadolint](https://github.com/hadolint/hadolint)는 수동으로 사용될 수 있고 혹은 너의 도커파일을 린트하기 위한 CI 프로세스의 일부로 사용될 수 있다. Hadolint는 [Docker best practices.](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)의 포함을 목적으로 하는 전문화(특화)된 도커파일 린터이다.

<br/>

### 코드 예시: hadolint를 사용하여 도커파일을 검사하여라

```bash
hadolint production.Dockerfile
hadolint --ignore DL3003 --ignore DL3006 <Dockerfile> # 특정 규직을 제외한다
hadolint --trusted-registry my-company.com:500 <Dockerfile> # 이미지로 부터 신뢰할 수 없음을 사용할 때 경고한다
```

### 다른 블로거들이 말하길

다음 [Josh Reichardt](https://thepracticalsysadmin.com/lint-your-dockerfiles-with-hadolint/)의 블로그로 부터:

> 아직도 도커파일들을 린팅하지 않는다면 너는 해야만 한다. 코드 린팅은 소프트웨어 개발에 있어 이슈와 버그들이 문제가 되기 전에 찾고, 식별하고, 제거하는데 도움을 줄 수 있는 일반적인 practice이다. 작고 끔찍한 버그들이 문제가되기 전에 식별하고 제거하는 데 도움을 주는 것은 코드를 린팅하는 것의 이점 중 하나이다.

다음 [Jamie Phillips](https://www.phillipsj.net/posts/hadolint-linting-your-dockerfile/)의 블로그로 부터

> 린터들은 일반적으로 개발과정에서 팀이 programmatic과 stylistic 에러들을 감지하는데 도움을 주기 위해 사용된다. Hadolint는 Haskell을 사용하는 도커파일들을 위해 만들어진 린터이다. 이 툴은 도커가 규정하는 best practice를 강하게 비판(부정)하고 너가 체크아웃해야 하는 도커파일을 parse하기 위해 적절히 접근한다. 이것은 모든 메이저 플랫폼들을 지원한다, 그리고 이 튜토리얼은 컨테이너가 예시 도커파일에 대한 린팅을 수행할 수 있도록 활용될 것이다.
> <br/>

# 취약한 종속성들에 대한 지속적이고 자동적인 검사

### 한 문단 요약

대부분의 Node.js 어플리케이션은 개발의 용이성 및 속도로 인하여 인기 있는 npm, 또는 yarn과 같은 인기있는 패키지 레지스트리들에 있는 타사 모듈들에 크게 의존한다. 하지만 이 장점은 알려지지 않은 취약점들을 어플리케이션에 포함시키게 된다는 보안 위험이란 단점을 가지며, 해당 위험은 OWASP의 가장 치명적인 어플리케이션 보안 위험 목록에 자리잡고 있는 것 중 하나이다. 

다른 커뮤니티들에 의해서 취약하다고 판별된 타사의 패키지들을 Node.js 어플리케이션에 도입하게 될 위험을 줄이기 위해서, 패키지를 식별하기 위한 여러가지 도구들이 존재한다. 이들은 CLI 도구들에서 주기적으로 사용되거나, 어플리케이션의 빌드 과정에 포함시킬 수도 있다.

### 목차

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### NPM Audit

'npm audit'은 NPM@6와 함께 소개된 새로운 cli 도구이다.

'npm audit'을 실행하면 영향을 받게되는 패키지의 이름, 취약점의 심각성 및 설명, 그리고 기타 정보들이 포함되는 보안 취약점 보고서가 생성되며 만약 가능하다면 해당 취약점들을 해결하기 위해서 패치를 적용하는 명령을 생성한다. 

![npm audit 예제](/assets/images/npm-audit.png)

🔗 [읽어보기: NPM blog](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

Snyk는 다양한 기능을 가진 CLI와 Github 통합을 제공한다. 여기에 더해서 취약점에 대해 알리는 것 뿐 아니라, 취약점에 대한 패치들이 릴리즈 될 때 해당 취약점들을 수정하는 새로운 pull requeste들을 자동으로 생성해준다.

또한 Snyk의 기능이 풍부한 웹 사이트는 GitHub 레퍼지토리나 npm 모듈 URL과 함께 제공되는 경우에 종속성에 대한 임의적인 평가도 허용한다 취약점이 있는 npm 패키지를 직접 검색할 수도 있다.

__자동적으로 pull request를 생성하는 Snyk Github 통합의 출력 예제:__
![snyk GitHub example](/assets/images/snyk.png)

🔗 [읽어보기: Snyk website](https://snyk.io/)

🔗 [읽어보기: Synk online tool to check npm packages and GitHub modules](https://snyk.io/test)

### Greenkeeper

Greenkeeper는 실시간 종속성 업데이트를 제공하는 서비스이며, 늘 최신 업데이트 및 패치된 종속성 버전을 사용하여 애플리케이션을 좀 더 안전하게 유지할 수 있게 한다.

Greenkeeper는 저장소의 `package.json` 파일에 지정된 npm 종속성을 감시하며, 각 종속성 업데이트와 함께 작업 브랜치를 자동으로 생성한다. 그리고 리포지토리 CI 제품군이 실행되면서 어플리케이션의 업데이트된 종속성 버전에 대해서 주요한 변경 사항을 나타낸다. 만약 종속성 업데이트로 인해 CI가 실패하게 되면, 경매될 레퍼지토리에 명확하고 간결하게 문제가 생성되면서 현재 및 업데이트된 패키지 버전과 업데이트된 버전의 정보 및 커밋 이력 등이 요약된다.

__자동적으로 pull request를 생성하는 Greenkeeper Github 통합의 출력 예제__

![synk github example](/assets/images/greenkeeper.png)
🔗 [읽어보기: Greenkeeper website](https://greenkeeper.io/)

### Additional resources

🔗 [Rising Stack Blog: Node.js dependency risks](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Improving npm security](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)

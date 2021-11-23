# 5.13. 취약점을 자동으로 탐지하는 도구를 사용해라

<br/><br/>

### 한문단 요약

최신의 노드 애플리케이션에는 수십 때로는 수백 개의 종속성이 있다.
종속성이 있는 경우 당신의 애플리케이션에는 알려진 보안 취약점이 존재한다.

다음은 종속성을 사용함에 있어 알려진 보안 취약성을 자동으로 확인하는 도구이다:
- [npm audit](https://docs.npmjs.com/cli/audit) - npm 검사
- [snyk](https://snyk.io/) - 종속 항목의 취약점을 지속적으로 파악하고 수정

<br/><br/>

### 블로그 인용

[StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/)의 블로그:

> ...애플리케이션의 종속성을 관리하는데 취약성 검사 도구를 사용하는 것은 강력하고 편리하다.
그러나 사용하는 패키지에 당신의 어플리케이션에 영향을 줄 수 있는 심각한 보안 취약점이 포함되어 있을 수 있다.
당신의 애플리케이션의 보안은 보안이 가장 약한 링크 보안과 같다.
다행스럽게도 당신이 사용할 수 있는 보장하는 써드파티 패키지가 두개 존재한다. 당신은  nsp 또는 requireSafe를 사용할 수 있다.

These two tools do largely the same thing, so using both might be overkill, but “better safe than sorry” are words to live by when it comes to security...
이 두가지 도구는 거읙 같은 일을 수행한다. 따라서 두개 모두 사용하는 것은 과할 수 있다. 그러나 "안전한 것이 수행 능력이 좋지 않아 미안한 것보다 낫다" 라는 문장은 보안과 관련하여 생활해야 할 문장이다.
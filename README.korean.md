[✔]: assets/images/checkbox-small-blue.png

# Node.js 모범 사례

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2083%20Best%20Practices-blue.svg" alt="83 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Apr%2013%202019-green.svg" alt="Last update: May 13, 2019"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.0.0%20LTS-brightgreen.svg" alt="Updated for Node 12.0.0 LTS">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **트위터에서 팔로우 하세요!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

다른 언어로 읽기: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU**, ![TR](/assets/flags/TR.png)**TR** 는 작업중입니다!)](#translations)

<br/>

###### Built and maintained by our [Steering Committee](#steering-committee) and [Collaborators](#collaborators)

# Latest Best Practices and News

- **New best practice:** 4.4: [Avoid test-fixtures, add data per test](https://github.com/i0natan/nodebestpractices#4-testing-and-overall-quality-practices)

- **New best practice:** 6.25: [Avoid publishing secrets to the npm registry](/sections/security/avoid_publishing_secrets.md)

- **New translation:** ![BR](/assets/flags/BR.png) [Brazilian Portuguese](/README.brazilian-portuguese.md) available now, courtesy of [Marcelo Melo](https://github.com/marcelosdm)! ❤️

<br/>

# 안녕하세요! 먼저 알아야 할 3가지가 있습니다:

**1. 이 문서를 읽는 것은, 사실상 수십 개의 베스트 Node.js 문서를 읽는 것입니다. -** 이 문서는 Node.js 의 가장 인기 있는 모범사례(Best Practice)들을 모은 요약집 및 큐레이션입니다.

**2. 가장 큰 모음집이며, 매주 성장하고 있습니다. -** 현재, 50개 이상의 모범사례들과, 스타일 가이드, 아키텍처적인 팁들이 제공되고 있습니다. 이 문서의 업데이트를 위해 새로운 이슈들과 PR들이 매일 만들어지고 있습니다. 우리는 이 문서의 잘못된 코드를 고치거나 새로운 아이디어들을 제안하는 것을 매우 환영합니다. [마일스톤 보러가기](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open)

**3. 항목 대부분은 추가적인 정보가 있습니다 -** 항목 옆쪽에 존재하는 **🔗자세히 보기** 링크에서 코드 예제, 참조 블로그 또는 기타 정보들을 확인 할 수 있습니다.

<br/><br/>

## 목차

1. [프로젝트 구조 설계 (5)](#1-프로젝트-구조-설계)
2. [에러 처리 방법 (11)](#2-에러-처리-방법)
3. [코드 스타일 (12) ](#3-코드-스타일)
4. [테스트 및 전체 품질 관리 (8) ](#4-테스트-및-전체-품질-관리)
5. [운영 환경으로 전환하기 (16) ](#5-운영-환경으로-전환하기)
6.  보안 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))
7.  성능 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))

<br/><br/>

# `1. 프로젝트 구조 설계`

## ![✔] 1.1 컴포넌트 기반으로 설계하라

**핵심요약:** 큰 프로젝트에서 빠지기 쉬운 최악의 함정은 많은 수백개의 의존성을 가진 커다란 소스코드를 유지보수하는 것이다. 그렇게 하나로 통째로 짜여진 코드는 개발자가 새로운 기능들을 협업하는 속도를 느려지게 한다. 그 대신에 당신의 코드를 컴포넌트로 나누고, 각각의 컴포넌트가 자신의 폴더 혹은 할당된 코드베이스를 가지게 하고 컴포넌트의 각 단위가 작고 간단하게 유지되도록 하라. 아래의 '자세히 보기'를 눌러 올바른 프로젝트 구조의 예시를 확인하라.

**그렇게 하지 않을 경우:** 새로운 기능을 작성하는 개발자가 변경사항이 미치는 영향을 깨닫기위해 몸부림치거나 의존하고 있는 다른 컴포넌트를 망칠까봐 두려워 할때 배포는 느려지고 더 위험해진다. 비지니스 단위가 나눠져 있지 않으면 확장(scale-out)하기도 쉽지 않다.

🔗 [**자세히 보기: 컴포넌트로 구조화하기**](/sections/projectstructre/breakintcomponents.korean.md)

<br/><br/>

## ![✔] 1.2 컴포넌트를 계층화(layer)하고, Express를 그 경계 안에 둬라.

**핵심요약:** 각각의 컴포넌트는 웹, 로직, 데이터 접근 코드을 위한 객체인 '계층'을 포함해야 한다. 이것은 우려를 깨끗하게 분리할 뿐만 아니라 모의 객체를 만들거나(mocking) 테스트하기가 굉장히 쉽게 만든다. 이것이 굉장히 일반적인 패턴임에도, API 개발자는 웹 계층의 객체 (Express req, res)를 비지니스 로직과 데이터 계층으로 보내서 계층을 뒤섞어버리는 경향이 있다. 그렇게 하는것은 당신의 어플리케이션에 의존성을 만들고 Express에서만 접근 가능하도록 만든다.

**그렇게 하지 않을 경우:** 웹 객체를 다른 계층과 뒤섞은 앱은 테스트 코드, CRON 작업이나 Express가 아닌 다른 곳에서 접근이 불가능하게 한다.

🔗 [**자세히 보기: 앱을 계층화하기**](/sections/projectstructre/createlayers.korean.md)

<br/><br/>

## ![✔] 1.3 유틸리티들을 NPM 패키지로 감싸라(wrap)

**핵심요약:** 커다란 코드 기반으로 구성되어있는 커다란 앱에서는 로깅, 암호화 같은 횡단 관심사(cross-cutting-concern)가 존재하는 유틸의 경우 당신 자신의 코드로 감싸져야하며 개인 NPM package로 노출이 되어야한다. 이것은 여러 코드 기반과 프로젝트들 사이에서 그것들을 공유가 가능하도록 해준다.

**그렇게 하지 않을 경우:** 당신 자신만의 배포 및 의존성 바퀴(wheel)를 새로 발명해야 할 것이다.

🔗 [**자세히 보기: 기능으로 구조화 하기**](/sections/projectstructre/wraputilities.korean.md)

<br/><br/>

## ![✔] 1.4 Express의 app과 server를 분리하라

**핵심요약:** 'Express' 정의를 적어도 API 선언(app.js)과 네트워크 부분(WWW)의 두 개 파일로 나눠서 전체 [Express](https://expressjs.com/)앱을 하나의 큰 파일에 정의하는 불쾌한 습관을 피해라. 더 좋은 구조는 API 선언을 컴포넌트에 위치시키는 것이다.

**그렇게 하지 않을 경우:** API는 HTTP 요청으로만 테스트가 가능 할것이다(커버리지 보고서를 생성하기가 더 느려지고 훨씬 힘들어진다). 수백줄의 코드를 하나의 파일에서 관리하는 것이 크게 즐겁지는 않을 것이다.

🔗 [**자세히 보기: Express를 'app'과 'server'로 분리하기**](/sections/projectstructre/separateexpress.korean.md)

<br/><br/>

## ![✔] 1.5 환경을 인식하는, 보안적인, 계층적인 설정을 사용하라

**핵심요약:** 완벽하고 결점이 없는 구성 설정은 (a) 파일과 환경 변수에서 키 값을 읽을 수 있어야하고 (b) 보안 값들은 커밋된 코드 바깥에서 관리되어야하고 (c) 설정은 좀 더 쉽게 찾을 수 있도록 계층적으로 관리해야 한다. [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config)와 같이 이러한 요구사항을 동작하게 해주는 몇가지 패키지가 존재한다.

**그렇게 하지 않을 경우:** 위의 구성 요구사항 중 어느 것도 만족시키지 못한다면 개발팀 혹은 데브옵스팀을 늪으로 몰아갈 수 있다. 아마도 두 팀 모두일 것이다.

🔗 [**자세히 보기: 구성 모범 사례**](/sections/projectstructre/configguide.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `2. 에러 처리 방법`

## ![✔] 2.1 비동기 에러 처리시에는 async-await 혹은 promise를 사용하라

**핵심요약:** 비동기 에러를 콜백 스타일로 처리하는 것은 지옥으로 가는 급행열차일 것이다(운명의 피라미드로 잘 알려진). 당신이 코드에 줄 수 있는 가장 큰 선물은 평판이 좋은 promise 라이브러리를 사용하거나 훨신 작고 친숙한 코드 문법인 try-catch를 사용하게 해주는 async-await를 사용하는 것이다.

**그렇게 하지 않을 경우:** Node.js 콜백 스타일인 function(err, response)는 에러 처리와 일반 코드의 혼합, 코드의 과도한 중첩, 이상한 코딩 패턴 때문에 유지보수가 불가능한 코드로가는 확실한 길이다.

🔗 [**자세히 보기: 콜백 피하기**](/sections/errorhandling/asyncerrorhandling.korean.md)

<br/><br/>

## ![✔] 2.2 내장된 Error 객체만 사용하라

**핵심요약:** 많은 사람들이 문자열이나 사용자가 임의로 정의한 타입으로 에러를 던진다(throw). 이것은 에러처리 로직과 모듈 사이의 상호운영성을 복잡하게 한다. 당신이 promise를 거부(reject)하든, 예외를 던지든, 에러를 냈건 내장된 Error 객체를 이용하는 것은 균일성을 향상하고 정보의 손실을 방지하게 만들것이다.

**그렇게 하지 않을 경우:** 일부 컴포넌트를 호출할때 어떤 에러의 타입이 반환될지 불확실해져서 적절한 에러처리가 매우 어려워 질것이다. 더 나쁜 것은, 사용자가 정의한 타입으로 에러를 나타내는 것은 스택 정보(stack trace)와 같은 중요한 에러 정보를 손실할 가능성이 있다는 것이다!

🔗 [**자세히 보기: 내장된 Error 객체 사용하기**](/sections/errorhandling/useonlythebuiltinerror.korean.md)

<br/><br/>

## ![✔] 2.3 동작상의 에러와 프로그래머 에러를 구분하라

**핵심요약:** API에서 잘못된 입력을 받는 것과 같은 동작상의 에러는 에러의 영향을 완전히 이해할수 있고 신중하게 처리 할수있는 알려진 경우를 의미한다. 반면에 정의되지 않은 변수를 읽는 것과 같은 프로그래머 에러는 어플리케이션을 우아하게 다시 시작하도록 만드는 알수 없는 코드 에러를 의미한다.

**그렇게 하지 않을 경우:** 당신은 에러가 날때마다 어플리케이션을 다시 시작할수도 있다. 하지만 왜 사소하고 예측가능한 동작상의 오류때문에 5000명의 온라인 사용자를 다운시키는 것인가? 나머지 상황 또한 이상적이지 않다. 알수없는 이슈(프로그래머 에러)가 났는데 어플리케이션을 그대로 두는 것은 예측이 불가능한 동작을 일으킬 수 있다. 두 가지를 구별하는 것은 현명한 행동과 주어진 상황에 따른 균형잡힌 접근을 가능하게 한다.

🔗 [**자세히 보기: 동작상의 에러와 프로그래머 에러**](/sections/errorhandling/operationalvsprogrammererror.korean.md)

<br/><br/>

## ![✔] 2.4 에러를 Express 미들웨어로 처리하지 말고 중앙집중적으로 처리하라

**핵심요약:** 관리자에게 메일을 보내거나 로깅을 하는 것과 같은 에러 처리는 에러가 발생할 때 모든 엔드포인트(예를 들어 Express 미들웨어, cron 작업, 단위 테스트 등)가 호출하는 에러전용 중앙집중 객체로 캡슐화 되어야한다.

**그렇게 하지 않을 경우:** 한 곳에서 에러를 처리하지 않는 것은 코드 중복과 부적절한 에러처리로 이어진다.

🔗 [**자세히 보기: 중앙집중적으로 에러 처리하기**](/sections/errorhandling/centralizedhandling.korean.md)

<br/><br/>

## ![✔] 2.5 Swagger를 이용해 API 에러를 문서화하라

**핵심요약:** API를 호출한 사람들이 어떤 에러가 반환 될수 있는지 알게하여 충돌없이 신중하게 처리 할 수 있도록하라. 이것은 보통 Swagger와 같은 API 문서화 프레임워크를 통해 이루어진다.

**그렇게 하지 않을 경우:** API 클라이언트는 알수 없는 에러로 인해 충돌 후에 재시작을 결정할수도 있을 것이다. 참고: 당신의 API를 호출한 사람이 당신 자신 일수도 있다.(마이크로서비스 환경에서는 아주 일반적임).

🔗 [**자세히 보기: Swagger에서 에러 문서화하기**](/sections/errorhandling/documentingusingswagger.korean.md)

<br/><br/>

## ![✔] 2.6 이상한 것이 들어왔을때 프로세스를 정상적으로 중단하라

**핵심요약:** 알수 없는 에러(프로그래머 에러, 모범사례 #3번 참조)가 발생하면 어플리케이션의 건강상태에 대한 불확실성이 있다. 일반적인 방법은 Forever와 PM2 같은 '재시작' 도구로 프로세스를 다시 시작하는 것이다. 

**그렇게 하지 않을 경우:** 익숙치 않은 예외가 발생하면 일부 객체가 오류 상태(예를 들어 전역적으로 사용되지만 내부 오류로 인해 이벤트를 더이상 발생시키지 않는 Event Emitter)일 수 있으며 향후의 모든 요청이 실패하거나 미친것처럼(crazily) 동작할 수 있다.

🔗 [**자세히 보기: 프로세스 중단하기**](/sections/errorhandling/shuttingtheprocess.korean.md)

<br/><br/>

## ![✔] 2.7 에러 확인을 용이하게 해주는 로거를 사용하라

**핵심요약:** Winston, Bunyan 혹은 Log4J와 같은 발전된 로깅 도구의 집합은 에러를 찾는 것과 이해하는 것의 속도를 높여준다. 그러니 console.log를 잊어버려라.

**그렇게 하지 않을 경우:** 로그 검색 도구나 괜찮은 로그 뷰어 없이 console.log 혹은 지저분한 텍스트 파일을 대충 읽는 것은 야근을 부를 수 있다.

🔗 [**자세히 보기: 발전된 로거를 사용하기**](/sections/errorhandling/usematurelogger.korean.md)

<br/><br/>

## ![✔] 2.8 당신이 선호하는 테스트 프레임워크로 에러 흐름을 테스트하라

**핵심요약:** 전문 자동화 QA든 일반 수동 개발자 테스트든 당신의 코드가 긍정적인 상황에서 잘 동작할 뿐만 아니라 올바른 에러를 처리하고 반환하는지 확실히 하라. Mocha & Chai와 같은 테스트 프레임워크는 이것을 쉽게 처리 할수 있다("Gist popup"안의 코드 예제를 확인하라).

**그렇게 하지 않을 경우:** 자동이든 수동이든 테스트가 없다면 당신은 당신의 코드가 올바른 에러를 반환하는지 믿지 못할 것이다. 의미가 있는 에러가 없다면 에러 처리는 없는 것이다.

🔗 [**자세히 보기: 에러 흐름 테스트하기**](/sections/errorhandling/testingerrorflows.korean.md)

<br/><br/>

## ![✔] 2.9 APM 제품을 사용하여 에러와 다운타임을 확인하라

**핵심요약:** APM이라고 불리는 모니터링 및 성능 제품은 미리 알아서 코드베이스와 API를 측정하고 자동적으로 당신이 놓친 에러, 충돌, 느린부분을 강조 표시해준다.

**그렇게 하지 않을 경우:** API의 성능과 다운타임을 측정하기위해 많은 노력을 들여야 할지도 모른다. 아마 당신은 실제 상황에서 어떤 코드 부분이 가장 느린지, 그것이 UX에 어떻게 영향을 미칠지 절대 알수없을 것이다.

🔗 [**자세히 보기: APM 제품 사용하기**](/sections/errorhandling/apmproducts.korean.md)

<br/><br/>

## ![✔] 2.10 처리되지 않은 promise 거부(unhandled promise rejection)를 잡아라

**핵심요약:** promise안에서 발생한 예외는 개발자가 명시적으로 처리하는 것을 잊게되면 삼켜지고 버려지게 된다. 당신의 코드가 process.uncaughtException 이벤트를 구독하고 있다고해도 말이다! 이것을 극복하기위해 process.unhandledRejection 이벤트를 등록하라.

**그렇게 하지 않을 경우:** 당신의 에러는 삼켜지고 어떤 흔적도 남기지 않을 것이다. 걱정할 것이 없긴 하다.

🔗 [**자세히 보기: 처리되지 않은 promise 거부 잡기**](/sections/errorhandling/catchunhandledpromiserejection.korean.md)

<br/><br/>

## ![✔] 2.11 전용 라이브러리를 이용해 인자값이 유효한지 검사하여 빠르게 실패하라(fail fast)

**핵심요약:** 나중에 처리하기가 더 힘들어지는 지저분한 버그를 피하기 위해 Assert API입력은 당신의 Express 모범사례가 되어야 한다. 당신이 Joi와 같은 유용한 헬퍼 라이브러리를 사용하지 않는 이상 유효성 검사 코드는 일반적으로 지루하다.

**그렇게 하지 않을 경우:** 이런 상황을 생각해보자. 당신의 함수가 "Discount"라는 숫자를 받아야하는데 요청하는 사람이 넘겨주는 것을 깜빡했다. 그 후에 당신의 코드는 Discount!=0인지 아닌지 체크한다(사실 허용된 Discount의 값은 0보다 커야 한다). 그러면 사용자가 할인을 받게될 것이다. 보이는가? 엄청나게 지저분한 버그이다.

🔗 [**자세히 보기: 빠르게 실패하기**](/sections/errorhandling/failfast.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `3. 코드 스타일`

## ![✔] 3.1 ESLint를 사용하라

**핵심요약:** [ESLint](https://eslint.org)는 발생 가능한 코드 에러를 체크하고 껄끄러운 간격(spacing) 문제를 식별하는 것부터 프로그래머가 분별없이 에러를 던지는 것과 같은 코드의 심각한 안티 패턴을 감지하여 코드 스타일을 바꾸는 것에 대한 사실상의 표준이다. ESLint도 자동으로 코드 스타일을 고칠 수 있지만 [prettier](https://www.npmjs.com/package/prettier)와 [beautify](https://www.npmjs.com/package/js-beautify) 같은 수정 부분의 포맷을 맞춰주는 강력한 툴이 있고 ESLint와 함께 작동된다.

**그렇게 하지 않을 경우:** 프로그래머가 쓸데없는 간격과 한 줄의 길이(line-width) 문제에 대해서 집중해야 하고 프로젝트의 코드 스타일에 대해 과도하게 생각하느라 시간을 낭비해야 할 수도 있다.

<br/><br/>

## ![✔] 3.2 Node.js에 특화된 플러그인들

**핵심요약:** vanlla JS만 지원하는 ESLinst의 표준 규칙 위에 [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha), [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)와 같은 Node에 특화된 플러그인을 같이 사용하라.

**그렇게 하지 않을 경우:** 많은 결함이 있는 Node.js 코드 패턴들이 레이더에서 벗어날 수 있다. 예를 들어 프로그래머는 변수로 된 파일 경로를 이용해 `require(파일경로변수)`로 파일을 가져올 수 있다. 이것은 공격자들이 어떤 JS script도 실행시킬 수 있게 한다. Node.js linter는 그러한 패턴을 감지하고 미리 알려준다.

<br/><br/>

## ![✔] 3.3 코드 블록의 중괄호를 같은 줄에서 시작하라

**핵심요약:** 블록에서 중괄호를 여는 부분은 코드를 여는 문장과 같은 줄에 있어야 한다.

### 코드 예제

```javascript
// Do
function someFunction() {
  // code block
}

// Avoid
function someFunction()
{
  // code block
}
```

**그렇게 하지 않을 경우:** 이 모범사례를 적용하지 않는 것은 아래의 Stackoverflow 스레드에서 보는 바와 같이 예기치 못한 결과로 이어질 수 있다.

🔗 [**자세히 보기:** "왜 결과가 중괄호의 위치에 따라 달라지는 거죠?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 세미콜론을 잊지 마라

**핵심요약:** 만장일치로 동의하지는 않겠지만 각 문장의 끝에 세미콜론을 붙이는 것은 여전히 권장사항이다. 이것은 당신의 코드를 읽는 다른 프로그래머가 좀 더 잘 읽게 하고 명확하게 할 것이다.

**그렇게 하지 않을 경우:** 이전 섹션에서 본 것처럼 자바스크립트의 인터프리터는 세미콜론이 없으면 의도되지 않은 결과를 야기할 수 있기에 자동으로 문장의 끝에 세미콜론을 붙인다.

<br/><br/>

## ![✔] 3.5 함수에 이름을 붙여라

**핵심요약:** 클로저와 콜백을 포함한 모든 함수에 이름을 붙여라. 익명 함수를 피해라. 이것은 노드 앱을 프로파일링 할 때 특히 유용하다. 모든 함수를 명명하는 것은 당신이 메모리 스냅샷을 확인할 때 당신이 보고 있는 것이 무엇인지 쉽게 이해할 수 있도록 해준다.

**그렇게 하지 않을 경우:**
당신이 익명 함수에서 메모리 소비가 많다는 것을 확인했을 때 코어 덤프(메모리 스냅샷)을 이용해 프로덕션 문제를 디버깅하는 것이 어려울 수도 있습니다.

<br/><br/>

## ![✔] 3.6 변수, 상수, 함수, 클래스의 명명 규칙(naming convention)

**핵심요약:** 상수와 변수, 함수를 명명할 때는 **_lowerCamelCase_** 를 사용하고 클래스를 명명할 때는 **_UpperCamelCase_**(첫 글자 대문자)를 사용하라. 이것은 일반 변수/함수와 인스턴스로 만들어야 하는 클래스를 구분하는데 도움을 것이다. 설명이 포함된 이름을 사용하되 이름을 짧게 유지하도록 해라.

**그렇게 하지 않을 경우:** 자바스크립트는 먼저 인스턴스로 만들지 않고 직접 생성자("Class")를 호출할 수 있는 세계 유일의 언어이다. 그러므로 클래스와 함수 생성자는 UpperCamelCase를 통해 구분된다.

### 코드예제

```javascript
// 클래스명은 UpperCamelCase 사용
class SomeClassExample {}

// 상수명은 const 키워드와 lowerCamelCase 사용
const config = {
  key: 'value'
};

// 변수와 함수 이름은 lowerCamelCase 사용
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 let보다는 const를 사용하라. var는 갖다버려라

**핵심요약:** `const`를 사용한다는 것은 변수에 한번 값이 할당되면 다시 할당할 수 없다는 것을 의미한다. `const`를 선호하는 것은 같은 변수를 다른 용도로 사용하는 것을 방지하고 당신의 코드를 더 깔끔하게 만드는데 도움을 준다. for 루프처럼 변수가 재할당 되어야 할 필요가 있으면 `let`을 사용하여 선언하라. `let`의 또 다른 중요한 부분은 선언된 변수를 사용하는 것이 변수가 정의된 블록 범위(block scope) 안에서만 가능하다는 것이다. `var`는 블록 범위가 아니라 함수 범위(function scope)이며 이제 대신할 수 있는 const와 let이 있으므로 [ES6에서는 사용하면 안 된다](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70).

**그렇게 하지 않을 경우:** 자주 변경되는 변수를 따라가려면 디버깅이 훨씬 더 번거로워진다.

🔗 [**자세히 보기: JavaScript ES6+: var 혹은 let 혹은 const?**](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 require는 맨 처음에 오게 하고 함수 안에서의 사용은 피하라

**핵심요약:** 모듈을 각 파일의 시작이나 모든 함수의 앞부분 혹은 밖에서 require하라. 이 간단한 모범사례는 파일의 의존성을 맨 위에서 쉽고 빠르게 구분할 수 있게 해줄 뿐만 아니라 여러 잠재적인 문제를 피하게 해준다.

**그렇게 하지 않을 경우:** require는 Node.js에서 동기로 실행된다. 함수 안에서 호출되면 다른 요청들을 더 중요한 시간에 처리되지 못하도록 막을 수 있다. 또한 require 된 모듈이나 그것의 의존 모듈이 에러를 뱉거나 서버를 다운시키면, 함수 안에서 그 모듈이 require 된 것이 아닌지 가능한 아주 빠르게 찾아야 할 것이다.

<br/><br/>

## ![✔] 3.9 require는 파일에 직접 하지 말고 폴더에 하라

**핵심요약:** 폴더에서 모듈과 라이브러리를 개발할 때 모든 소비자가 그것을 거치도록 모듈의 내부를 노출하는 index.js 파일을 둬라. 이것은 모듈의 '인터페이스'역할을 하며 계약을 위반하지 않으면서 미래의 변경사항에 대해 유연하게 대처하도록 해준다.

**그렇게 하지 않을 경우:** 파일 내부의 구조 혹은 서명을 변경하면 클라이언트와의 인터페이스가 손상될 수 있다.

### 코드 예제

```javascript
// 이렇게 하라
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// 피하라
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 `===` 연산자를 사용하라

**핵심요약:** 약하고 추상적인 같음 연산자 `==` 보다 엄격한 항등 연산자 `===`를 선호한다. `==`는 두 변수를 공용 타입으로 변환한 후에 비교한다. `===`에는 타입 변환이 없고 두 변수가 같으려면 타입도 같아야 한다.

**그렇게 하지 않을 경우:** `==`으로 비교하는 경우 같지 않은 변수가 true로 반환될 수 있다.

### 코드 예제

```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

위의 모든 문장은 `===`를 사용했다면 false를 반환했을 것이다.

<br/><br/>

## ![✔] 3.11 async-await을 사용하고 콜백을 피하라

**핵심요약:** Node 8의 LTS 버전은 현재 async-await을 완전히 지원한다. 이것은 콜백과 promise를 대체하여 비동기 코드를 다루는 새로운 방법이다. async-await은 비차단적(non-blocking)이고 비동기 코드를 동기 코드처럼 보이게 만든다. 당신의 코드에게 줄 수 있는 최고의 선물은 try-catch와 같은 더 작고 친숙한 코드 구문을 제공하는 async-await을 사용하는 것이다.

**그렇게 하지 않을 경우:** 콜백 스타일로 비동기 에러를 처리하는 것은 아마도 지옥으로 가는 가장 빠른 방법일 것이다. 이런 스타일은 에러를 전부 확인하게 하고 어색한 코드 중첩을 다루게 하며 코드 흐름을 추론하기 어렵게 만든다.

🔗[**자세히 보기: async-await 1.0 가이드**](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 두꺼운(=>) 화살표 함수를 사용하라

**핵심요약:** promise와 콜백을 받는 예전 API를 다룰 때는 async-await을 사용하고 함수 인자를 사용하는 것을 피하는 것이 권장되지만 - 화살표 함수가 코드 구조를 더 작게 해 주고 루트 함수의 어휘적 맥락(lexical context)을 유지시켜 준다. (예를 들어 'this')

**그렇게 하지 않을 경우:** 더 긴 코드(ES5의 function)은 버그에 더 취약하고 읽기가 번거롭다.

🔗 [**자세히 보기: 화살표 함수를 받아들일 시간이다**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `4. 테스트 및 전체 품질 관리`

## ![✔] 4.1 최소한, API(컴포넌트) 별로 테스트를 만들어라

**핵심요약:** 대부분의 프로젝트는 짧은 일정으로 인해 자동화 된 테스트가 없거나 '프로젝트를 테스트하는 것'은 종종 통제를 벗어나서 버려진다. 그런 이유로 우선 순위를 정해서 가장 간단하고 단위 테스트보다 더 넓은 커버리지를 제공하는 API 테스트로 시작해야한다(당신은 심지어 [포스트맨](https://www.getpostman.com/)같은 도구를 이용하여 코드 없이 손수 API테스트를 만들수 있다). 당신이 시간과 자원이 많을때 단위 테스트, DB 테스트, 성능 테스트 등과 같은 고급 유형의 테스트를 계속 진행하면 된다.

**그렇게 하지 않을 경우:** 단위 테스트를 만드는 것에 오랜 시간을 투자하였지만 테스트 범위가 전체 시스템의 20% 밖에 안되는것을 확인하게 될수도 있다

<br/><br/>

## ![✔] 4.2 각 테스트 이름에는 3 파트를 포함시켜라

**핵심요약:** 테스트를 요구 사항 수준에서 작성하게 하여 내부 코드에 익숙하지 않은 QA 엔지니어 및 개발자도 이해하게 하라. 테스트 이름에 무엇을 테스트 중이고(테스트 중인 단위), 어떤 상황에서 테스트 중인지 그리고 예상되는 결과는 무엇인지 언급하라.

**그렇게 하지 않을 경우:** 배포가 실패하더니, '기능 추가'라는 이름의 테스트가 실패했다고 한다. 당신은 정확히 어떤 것에서 오류가 났는지 알 수 있을까?

🔗 [**자세히 보기: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 린터(linter)를 통해서 코드 이슈를 확인하라

**핵심요약:** 코드 린터를 사용해서 코드의 질을 확인하고 안티패턴을 미리 감지하라. 어떤 테스트든지 그 전에 실행하도록 하고 pre-commit git-hook에 추가하여 리뷰를 하는 시간을 최소화 하고 어떤 이슈든 고쳐지도록 하라. [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices)의 코드 스타일 역시 참고하라.

**그렇게 하지 않을 경우:** 당신은 안티패턴과 취약한 코드를 상용환경에 노출 시킬 수 있다

<br/><br/>

## ![✔] 4.4 공용으로 고정되어 사용되는 테스트 데이터를 피하고 테스트마다 데이터를 추가하라

**핵심요약:** 테스트간의 간섭을 최소화하고 테스트 플로우에 대해 쉽게 추론하려면 각 테스트가 고유한 데이터를 추가하여 작동해야한다. 테스트가 일부 DB 데이터를 가져오거나 가정해야 할 때마다 명시적으로 데이터를 추가해야 하며 다른 레코드의 변경을 피해야 한다.

**그렇게 하지 않을 경우:** 테스트가 실패하여 배포가 중단되는 시나리오를 생각해보라. 귀중한 시간을 소모하여 조사 끝에 슬픈 결론으로 끝이 난다. "오류 보고서: 시스템은 잘 작동하지만 테스트의 상호 간섭으로 인해 배포 실패"

🔗 [**자세히 보기: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.5 의존성의 취약점을 끊임없이 검사하라

**핵심요약:** Express와 같은 가장 신뢰할 수있는 의존성 모듈 조차도 알려진 취약점이 있다. 이는 CI에서 빌드시마다 호출하도록 할수있는 🔗 [npm audit](https://docs.npmjs.com/cli/audit) and 🔗 [snyk.io](https://snyk.io)와 같은 커뮤니티 혹은 상업 도구를 사용하여 쉽게 해결할 수 있다.

**그렇게 하지 않을 경우:** 도구를 사용하지 않고 취약점으로부터 코드를 깨끗하게 유지하려면 새로운 위협에 관한 내용들을 지속적으로 따라야할것이다. 아주 지루하겠지만

<br/><br/>

## ![✔] 4.6 테스트를 태그하라 (#테스트)

**핵심요약:** 다른 종류의 테스트는 서로 다른 시나리오에서 실행되어야한다. 빌드가 되는지 안되는지에 대한 테스트, IO가 없는 테스트 등은 개발자가 파일을 저장하거나 커밋 할 때 테스트를 실행해야 하고, 보통은 풀리퀘스트가 있을 때 전체 종단 간 테스트를 실행한다. #cold #api #sanity와 같은 키워드를 사용하여 테스트에 태그를 지정하여 테스트 장치로 가져와서 원하는 하위 집합을 호출 할 수 있다. 예를 들어, 다음은 [Mocha](https://mochajs.org/)와 함께 'sanity' 테스트 그룹을 호출하는 방법이다. `mocha --grep 'sanity'`

**그렇게 하지 않을 경우:** 수십 개의 DB 쿼리를 수행하는 테스트를 포함하여 모든 테스트를 실행하면 개발자가 작은 변경을 할 때마다 매우 느려질 수 있으므로 테스트 실행을 방해 할 수 있다

<br/><br/>

## ![✔] 4.7 테스트 범위를 확인하면 잘못 된 테스트 패턴을 확인하는 것을 도울 수 있다

**핵심요약:** [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)와 같은 코드 커버리지 도구는 다음 세 가지 이유로 매우 유용하다. 첫째, 무료다(노력이 전혀 필요 없음). 둘째, 테스트 범위의 감소를 확인하는 데 도움을 준다. 마지막으로 테스트의 불일치를 강조합니다. 색이 입혀진 코드 범위 보고서를 보면서 알아 챘겠지만, 예를 들어 catch 절처럼 테스트되지 않은 코드 영역 (테스트에서는 오류가 발생했을 때의 실제 앱 동작 경로가 아니라 오류가 발생하지 않는 경로 만 호출한다는 의미)을 확인할 수 있다. 커버리지가 특정 임계 값 아래로 떨어지면 빌드 실패로 설정하라

**그렇게 하지 않을 경우:** 코드의 상당 부분이 테스트에 포함되지 않았다는 것을 알려주는 자동화된 측정 항목은 없다

<br/><br/>

## ![✔] 4.8 오래된 패키지를 검사하라 

**핵심요약:** 원하는 도구(예: 'npm outdated' 또는 [npm-check-updates](https://www.npmjs.com/package/npm-check-updates))를 사용하여 오래된 패키지를 검사하고 CI 파이프 라인에 검사를 삽입하고, 심각한 시나리오에서는 빌드가 실패하도록 하라. 예를 들어 설치된 패키지가 5 패치 커밋 차이나거나(예: 로컬 버전이 1.3.1이고 저장소 버전이 1.3.8 임) 작성자가 더 이상 사용하지 않는 것으로 태그 지정된 경우에 빌드를 종료시키고 버전을 배포하지 못하게하라

**그렇게 하지 않을 경우:** 당신의 상용 버전은 제작자가 위험하다고 태그한 패키지를 실행하게 될것이다

<br/><br/>

## ![✔] 4.9 e2e 테스트를 위해 docker-compose를 사용하라

**핵심요약:** 실제 데이터가 포함된 엔드 투 엔드(e2e) 테스트는 DB와 같은 몇가지 무거운 서비스가 포함되어야 하기때문에 취약한 연결고리가 되고는 했다. docker-compose는 간단한 텍스트 파일과 쉬운 명령을 사용하여 상용 환경과 같은 환경을 만들어서 이 문제를 쉽게 만들어준다. 이것을 이용해서 e2e테스트에 필요한 모든 서비스, DB 그리고 격리된 네트워크를 만들 수 있다. 또한 마지막으로 각 테스트 전에 호출되고 바로 사라지는 무상태(stateless) 환경을 유지하게 해준다

**그렇게 하지 않을 경우:** docker-compose가 없으면 개발자 머신을 포함한 각 테스트 환경에 대한 테스트 DB를 유지 관리해야하며 모든 DB를 동기화하여 테스트 결과가 환경에 따라 달라지지 않도록 해야한다

<br/><br/>

## ![✔] 4.10 정적 분석 도구를 이용하여 정기적으로 리팩터링하라

**핵심요약:** 정적 분석 도구는 객관적인 방법으로 코드 품질을 향상시키고 코드를 유지 관리 가능하도록 도와 준다. CI 빌드에 정적 분석 도구를 추가하여 코드에서 수상한 낌새를 발견하면 실패하도록 할 수 있습니다. 일반 linting에 비해 더 나은 점은 여러 파일의 컨텍스트에서 품질을 검사하거나(예: 중복 검사) 고급 분석을 수행하고(예: 코드 복잡성) 코드 문제의 내역 및 진행 상황을 추적 할 수있다는 것이다. 사용할 수있는 도구의 두 가지 예는 [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube))와 [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate))입니다.

**그렇게 하지 않을 경우:** 형편없는 코드의 품질로 인해 버그와 성능은 반짝이는 새로운 라이브러리나 최첨단 기술로는 고칠수 없는 문제가 되어버릴 것이다

🔗 [**자세히 보기: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.11 CI 플랫폼을 잘 선택하라 (Jenkins vs CircleCI vs Travis vs 기타 다른 모든 것들)

**핵심요약:** 지속적 통합 플랫폼(CICD)은 모든 품질 도구들(test, lint 등)을 호스팅할것이기 때문에 다양한 생태계의 플러그인을 가지고 있어야 한다. Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. 예전에는 학습이 어렵고 복잡한 설정을 요구하는 [Jenkins](https://jenkins.io/)가 가장 큰 커뮤니티를 보유하고 있고 매우 강력한 플랫폼을 갖추고 있기 때문에 대부분의 프로젝트에서 기본 선택이었다. 요즘에는 [CircleCI](https://circleci.com)와 같은 SaaS 도구를 사용하여 CI 솔루션을 설정하는 것이 훨씬 쉬워졌다. 이러한 도구를 사용하면 전체 인프라 관리 부담없이 유연한 CI 파이프 라인을 만들 수 있다. 결국은 견고성과 속도 사이의 트레이드 오프라고 할수있다.

**그렇게 하지 않을 경우:** CircleCI와 같은 중소 솔루션 업체를 선택하면 커스터마이즈가 많이 필요할 때 힘들 수 있다. 반대로 Jenkins를 사용하면 인프라 설치에 시간을 많이 소모하게 될 수 있다.

🔗 [**자세히 보기: Choosing CI platform**](/sections/testingandquality/citools.korean.md)

<br/><br/><br/>


<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `5. 운영 환경으로 전환하기`

## ![✔] 5.1. 모니터링!

**핵심요약:** 모니터링은 고객이 문제를 발견하기 전에 먼저 발견하는 게임이다. 모니터링에는 분명히 전례가없는 중요성을 부여해야한다. 솔루션에 너무 많은 기능들이 들어가 있을 가능성이 있으므로 확인해야만하는 기본 항목을 내부적으로 정의하고 나서 추가적인 기능들을 살펴보고 필요한 기능들이 모두 들어있는 솔루션을 선택하라. 아래의 'gist'를 클릭하면 솔루션 개요를 볼 수 있다

**그렇게 하지 않을 경우:** 오류 === 고객의 실망. 간단하다

🔗 [**자세히 보기: 모니터링!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. 똑똑한 로깅을 통해 투명성을 높여라

**핵심요약:** 로그는 디버그 텍스트가 모여있는 의미없는 창고일 수도 있고 앱의 상태를 대시보드로 볼수 있도록 만들어 줄 수 있는 유용한 데이터일 수도 있다. 첫날부터 로그를 어떻게 수집, 저장 및 분석하는지 계획하여 원하는 정보(예: 오류율, 서비스 및 서버를 통한 전체 트랜잭션 수행)를 실제로 추출 할지 확실히 하라

**그렇게 하지 않을 경우:** 당신은 결국 추측하기 힘든 블랙박스에 도달하게고, 필요한 정보를 추가하기 위해 모든 로그를 다시 작성하게 될것이다

🔗 [**자세히 보기: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. 가능한 모든 것들(예: gzip, SSL)을 reverse proxy에 위임하라

**핵심요약:** Node는 gzip이나 SSL Termination과 같이 CPU 집약적인 작업에 약하다. 이런게 필요할 경우 '실제' 미들웨어 서비스인 nginx, HAproxy 혹은 클라우드 서비스를 사용해야한다

**그렇게 하지 않을 경우:** 불쌍한 싱글 스레드는 어플리케이션의 코어를 처리하는 대신 인프라 작업을 수행하는 것에 더 바쁘게되고 성능은 저하될 것이다

🔗 [**자세히 보기: 가능한 모든 것들(예: gzip, SSL)을 reverse proxy에 위임하라**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. 의존성을 잠궈라(Lock dependencies)

**핵심요약:** 코드는 모든 환경에서 동일해야하지만 놀랍게도 npm을 사용하면 기본적으로 환경간에 종속성이 달라질 수 있다. 다양한 환경에서 패키지를 설치하면 패키지의 최신 패치 버전을 가져온다. npm config 파일 인 .npmrc를 사용하여이 문제를 극복하라. 각 환경에 각 패키지의 최신 버전이 아닌 정확한 버전을 저장하도록 알려준다. 또는 세밀하게 제어하려면`npm shrinkwrap`을 사용하라. \* 업데이트 : NPM5 현재 기본적으로 종속성이 잠겨 있다. 새로운 패키지 관리자인 Yarn도 기본적으로 잠겨 있다.

**그렇게 하지 않을 경우:** QA팀은 코드를 철저히 테스트했지만 테스트 환경과는 다르게 작동하는 버전을 승인할 것이다. 심지어 더 나쁜 것은 같은 프로덕션 클러스터의 여러 서버가 서로 다른 코드를 실행할 수도 있다는 것이다.

🔗 [**자세히 보기: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. 올바른 도구를 이용해 프로세스가 가동되는 시간을 보호하라

**핵심요약:** 프로세스는 계속 진행되어야하며 실패시 다시 시작해야한다. 간단한 시나리오의 경우 PM2와 같은 프로세스 관리 도구로도 충분하지만 오늘날 '도커가 사용되는' 세계에서는 클러스터 관리 도구도 고려해야한다

**그렇게 하지 않을 경우:** 명확한 전략없이 수십 개의 인스턴스와 너무 많은 도구 (클러스터 관리, 도커, PM2)를 실행하면 개발자가 혼란을 겪을 수 있다

🔗 [**자세히 보기: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. 모든 CPU를 활용하라

**핵심요약:** 기본적으로 Node 어플리케이션은 하나의 CPU 코어에서 실행되고 다른 CPU는 동작하지 않는다. 노드 프로세스를 복제하여 모든 CPU를 활용하는 것은 당신의 몫이다. 중소형 어플리케이션의 경우 노드 클러스터 또는 PM2를 사용하면 된다. 더 큰 앱의 경우 Docker 클러스터(예: K8S, ECS) 또는 Linux 초기화 시스템(예: systemd)을 기반으로하는 배포 스크립트를 사용하여 프로세스를 복제하는 것이 좋다

**그렇게 하지 않을 경우:** 사용 가능한 리소스의 25%, 혹은 훨씬 적게 활용할 것이다. 일반적인 서버는 CPU 코어가 4개 이상인 점을 감안할 때, Node를 아무 생각없이 배포하게 되면 그 중 단 1 개만 사용하게 될것이다. AWS beanstalk와 같은 PaaS 서비스 사용하더라도 말이다

🔗 [**자세히 보기: 모든 CPU를 활용하라**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. ‘유지 관리용 엔드 포인트’를 따로 만들어라

**핵심요약:** 보안적으로 안전한 API에서 메모리 사용 및 REPL 등과 같은 시스템 관련 정보를 노출하라. 표준 및 실전 테스트(battle-tests) 도구를 사용하는 것이 좋기는 하지만 몇몇 유용한 정보와 작업은 코드를 통해 쉽게 수행 할 수 있다

**그렇게 하지 않을 경우:** 단지 서버 진단을 목적으로 일부 정보를 추출하기 위하여 상용서버에 코드를 배포하는 "진단용 배포"를 자주 수행하고 있게 될 것이다

🔗 [**자세히 보기: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. APM을 사용하여 오류 및 가동 중지 시간을 발견하라

**핵심요약:** 어플리케이션 성능 관리 제품(Application Performance Management, APM)은 코드베이스 및 API를 사전에 측정하여 기존 모니터링 시스템을 뛰어 넘어 서비스 및 계층 전반에서 사용자 경험을 측정한다. 예를 들어 일부 APM 제품은 최종 사용자 측면에서 느리게 로드되는 트랜잭션을 강조 표시 하면서 근본 원인을 제시할 수 있다

**그렇게 하지 않을 경우:** API 성능 및 가동 중지 시간을 측정하는 데 많은 노력을 기울이게 될 수 있다. 실제 상황에서 가장 느린 코드가 무엇인지, 그리고 이것이 UX에 미치는 영향을 알지 못할 것이다

🔗 [**자세히 보기: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. 당신의 코드는 언제든 상용에 배포될수 있다

**핵심요약:** 첫날부터 배포를 염두에두고 코드를 작성하라. 다소 모호하게 들릴것 같아서 상용 유지 보수와 밀접하게 관련된 몇 가지 개발 팁을 컴파일해 두었다 (아래의 gist를 클릭하라)

**그렇게 하지 않을 경우:** 세계 최고의 IT/DevOps 전문가도 잘못 작성된 코드로 이루어진 시스템은 구하지 못한다

🔗 [**자세히 보기: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. 메모리 사용량 측정 및 보호

**핵심요약:** Node.js는 메모리와 관련하여 논란의 여지가 있다. v8 엔진은 메모리 사용량 (1.4GB)에 대한 제한이 있으며 노드의 코드에서 메모리 누수가 발생하는 알려진 방법이 존재하므로 노드의 프로세스 메모리를 관찰하는 것이 필수적이다. 작은 응용 프로그램에서는 Shell 명령을 사용하여 주기적으로 메모리를 측정 할 수 있지만 중대형 어플리케이션에서는 강력한 모니터링 시스템을 통해 메모리를 감시하는 것을 고려하라

**그렇게 하지 않을 경우:** [월마트](https://www.joyent.com/blog/walmart-node-js-memory-leak)에서 일어났던 것처럼 메모리가 하루에 수백 MB씩 누수 될 수 있다

🔗 [**자세히 보기: 메모리 사용량 측정 및 보호**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Node.js에서 프론트 엔드 파일 가져오기

**핵심요약:** 단일 스레드 모델로 인해 정적 파일을 많이 처리 할 때 Node.js 성능이 실제로 손상되기 때문에 전용 미들웨어(nginx, S3, CDN 등)를 사용하여 프론트 엔드 컨텐츠를 제공하는게 좋다

**그렇게 하지 않을 경우:** 단일 노드 스레드는 동적 컨텐츠를 전달하는 작업에 리소스를 할당하는 대신 수백 개의 html/images/angular/react 파일을 스트리밍 하느라 분주할 것이다

🔗 [**자세히 보기: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. 무상태(stateless)로 운영하고, 거의 매일 서버를 재부팅하라

**핵심요약:** 어떤 유형의 데이터(예: 유저 세션, 캐시, 업로드된 파일)든 외부 데이터 저장소에 저장하라. 서버를 주기적으로 재부팅/교체하는 것을 고려하거나 명시적으로 무상태로 운영하게 만드는 Serverless 플랫폼(예: AWS Lambda)을 사용하는 것을 고려하라

**그렇게 하지 않을 경우:** 해당서버에 오류가 발생하면 해당 서버만 제거하면 되는 것이 아니라 어플리케이션의 다운타임이 발생하게된다. 게다가 특정 서버에 의존하기 때문에 수평적 확장이 힘들어질 것이다

🔗 [**자세히 보기: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. 취약점을 자동으로 탐지하는 도구 사용

**핵심요약:** Express와 같은 가장 신뢰할만한 모듈조차도 시스템을 위험에 빠뜨릴 수있는 알려진 취약점이 존재한다. 이는 취약성을 지속적으로 확인하고(로컬 또는 GitHub에서) 경고하는 커뮤니티 및 상용 도구를 사용하여 쉽게 길들여질 수 있으며 일부는 즉시 패치 할 수도 있다

**그렇게 하지 않을 경우:** 전용 도구없이 취약점으로부터 코드를 깨끗하게 유지하려면 새로운 취약점에 대한 데이터를 지속적으로 확인해야 할것이다

🔗 [**자세히 보기: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. 로깅을 할때 트랜잭션 ID를 할당하라

**핵심요약:** 하나의 요청 내에서 각 로그에 동일한 식별자(transaction-id: { some value })를 할당하라. 그렇게하면 로그를 분석할때 에러 전과 후에 어떤 일이 생겼는지 쉽게 알수있다. 비동기적인 특성때문에 Node.js에서 구현하기 쉽지는 않다. 아래의 예제를 확인하라

**그렇게 하지 않을 경우:** 이전에 어떤일이 일어났는지에 대한 컨텍스트 없이 에러 로그를 확인하는 것은 문제를 해결하는 것을 더 어렵고 느리게 만든다

🔗 [**자세히 보기: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. `NODE_ENV=production`로 설정하라

**핵심요약:** 상용 최적화가 활성화 되어야하는지 아닌지를 표시하기 위해 `NODE_ENV`를 'production' 혹은 'development'로 설정하라. 많은 npm 패키지가 현재 환경을 확인하고 최적화한다

**그렇게 하지 않을 경우:** 이 단순한 속성을 빠뜨리면 성능이 크게 저하된다. 예를 들어 Express에서 서버 사이드 렌더링(Server Side Rendering, SSP)을 사용할때 `NODE_ENV`를 빠뜨리면 3배 느려진다

🔗 [**자세히 보기: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. 원자성의 자동화된 무중단 배포를 설계하라

**핵심요약:** 연구 결과에 따르면 자주 배포를 하는 팀이 상용버전에서 심각한 에러가 발생할 가능성을 낮춘다고 한다. 위험이 따르는 수동적인 과정과 서비스의 중지시간이 필요하지 않은 빠르고 자동화된 배포는 배포 프로세스를 크게 향상시킨다. 간소화된 배포의 표준이 된 Docker와 CI 도구를 결합하여 이를 달성할 수 있다.

**그렇게 하지 않을 경우:** 오래걸리는 배포 작업 -> 상용버전 중지시간 및 사람에 의한 에러 -> 배포를 하는 것에 자신감이 없어진 팀 -> 더 적은 배포와 기능들

<br/><br/>

## ![✔] 5.17. Node.js의 LTS 릴리즈 버전 사용

**핵심요약:** LTS 버전의 Node.js를 사용하여 중요한 버그 수정, 보안 업데이트 및 성능 향상을 받아라

**그렇게 하지 않을 경우:** 새로 발견된 버그나 취약점이 상용에서 운영중인 어플리케이션을 악용하는데 사용될 수 있으며, 다양한 모듈들에서 지원을 하지 않게 되고 유지보수하는 것이 힘들어 지게될것이다

🔗 [**자세히 보기: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. 앱 내에서 로그를 라우팅하지 말라

**핵심요약:** 로그의 목적지는 개발자가 어플리케이션 코드에 하드코딩해서는 안되고 프로그램이 실행되는 실행환경에서 정의되어야 한다. 개발자는 로거 유틸리티를 이용하여 로그를 `stdout`에 작성하고 상용환경(컨테이너, 서버 등)이 해당 `stdout`스트림을 적절한 목적지로 파이프해야한다

**그렇게 하지 않을 경우:** 어플리케이션 로그 라우팅 처리 === 확장성 저하, 로그 유실, 관심사의 분리 실패(Separation of Concerns, SoC)

🔗 [**자세히 보기: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. linter 보안 규칙 수용

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**핵심요약:** 이왕이면 코드를 작성하면서, 가능한한 빨리 eslint-plugin-security와 같은 보안 관련 linter 플러그인을 사용하여 보안 취약점을 잡으십시오. 이것은 eval, 자식 프로세스 호출, string iteral을 이용한 모듈 import (예를 들면 유저 인풋) 같은 보안 취약점을 잡는데 도움이 될 수 있다. 보안 linter가 잡는 코드를 보려면, 아래의 'Read more'을 클릭하십시오.

**그렇게 하지 않을 경우:** 개발 중에 직접 보안 취약점이 도리 수 있었던 것이 프로덕션에서 주요한 이슈가 된다. 또, 프로젝트가 일관된 보안 프렉티스를 따르지 않아, 취약점이 노출되거나 민감한 정보가 원격 저장소에 유출될 수 있다.

🔗 [**자세히 보기: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**핵심요약:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**그렇게 하지 않을 경우:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**자세히 보기: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**핵심요약:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**그렇게 하지 않을 경우:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**자세히 보기: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**핵심요약:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**그렇게 하지 않을 경우:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**자세히 보기: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**핵심요약:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**자세히 보기: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**핵심요약:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**그렇게 하지 않을 경우:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**자세히 보기: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**핵심요약:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**그렇게 하지 않을 경우:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**자세히 보기: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**핵심요약:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**그렇게 하지 않을 경우:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**자세히 보기: Use Bcrypt**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**핵심요약:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**그렇게 하지 않을 경우:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**자세히 보기: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**핵심요약:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**그렇게 하지 않을 경우:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**자세히 보기: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**핵심요약:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**그렇게 하지 않을 경우:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**자세히 보기: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**핵심요약:** A simple and powerful technique is to limit authorization attempts using two metrics:
           
1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**그렇게 하지 않을 경우:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**자세히 보기: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**핵심요약:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**그렇게 하지 않을 경우:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**자세히 보기: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**핵심요약:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**그렇게 하지 않을 경우:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**자세히 보기: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**핵심요약:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**그렇게 하지 않을 경우:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**자세히 보기: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**핵심요약:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**그렇게 하지 않을 경우:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**자세히 보기: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**핵심요약:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**그렇게 하지 않을 경우:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**자세히 보기: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**핵심요약:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**그렇게 하지 않을 경우:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**자세히 보기: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**핵심요약:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**그렇게 하지 않을 경우:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**자세히 보기: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**핵심요약:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**그렇게 하지 않을 경우:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**자세히 보기: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**핵심요약:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**그렇게 하지 않을 경우:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**핵심요약:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**그렇게 하지 않을 경우:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**자세히 보기: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**핵심요약:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**그렇게 하지 않을 경우:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**핵심요약:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**그렇게 하지 않을 경우:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**자세히 보기: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**핵심요약:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**그렇게 하지 않을 경우:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**자세히 보기: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#목차">⬆ Return to top</a></p>

# `7. Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

## ![✔] 7.1. Prefer native JS methods over user-land utils like Lodash

 **핵심요약:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**그렇게 하지 않을 경우:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**자세히 보기: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>

# 마일스톤

이 가이드를 관리하고 최신 버전을 유지하기 위해, 우리는 지속해서 가이드라인과 모범 사례들을 커뮤니티의 도움으로 업데이트하고 개선해 나가고 있습니다. [마일스톤](https://github.com/i0natan/nodebestpractices/milestones)을 확인하시고 이 프로젝트에 기여하고 싶다면 작업중인 그룹에 참여하세요!

<br/>

## 번역

모든 번역은 커뮤니티에 의해 기여되고 있습니다. 이미 완성된 번역이나, 진행중, 새로운 번역에 대한 도움은 언제나 환영합니다!

### 번역 작업 완료

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](/README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)

### 번역 작업중

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in USA, Europe, and Israel on building large scale scalable Node applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, MongoDB, pretty much anything that involves using JavaScript/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation, collaborating on the Community Committee's Website Redesign Initiative.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a reguar basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Past collaborators

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

## 감사 노트

하나의 단어를 고치는 것 부터 새로운 모범사례까지, 어떤 컨트리뷰트든 환영합니다. 아래는 이 프로젝트에 컨트리뷰트한 모든 사람의 리스트입니다. 🌻는 성공적인 풀리퀘스트를 표시하고, ⭐는 새로운 모범사례를 의미합니다.

### Flowers

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Sagir Khan](https://github.com/sagirk),
🌻 [Jason Kim](https://github.com/serv),
🌻 [Mitja O.](https://github.com/Max101),
🌻 [Sandro Miguel Marques](https://github.com/SandroMiguel),
🌻 [Gabe Kuslansky](https://github.com/GabeKuslansky),
🌻 [Ron Gross](https://github.com/ripper234),
🌻 [Valeri Karpov](https://github.com/vkarpov15)
🌻 [Sergio](https://github.com/imsergiobernal),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Nikola Telkedzhiev](https://github.com/ntelkedzhiev),
🌻 [Vitor Godoy](https://github.com/vitordagamagodoy),
🌻 [Manish Saraan](https://github.com/manishsaraan),
🌻 [Sangbeom Han](https://github.com/uronly14me),
🌻 [blackmatch](https://github.com/blackmatch),
🌻 [Joe Reeve](https://github.com/ISNIT0),
🌻 [Marcelo Melo](https://github.com/marcelosdm),
🌻 [Ryan Busby](https://github.com/BusbyActual),
🌻 [Iman Mohamadi](https://github.com/ImanMh),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Sergii Paryzhskyi](https://github.com/HeeL),
🌻 [Kapil Patel](https://github.com/kapilepatel),
🌻 [迷渡](https://github.com/justjavac),
🌻 [Hozefa](https://github.com/hozefaj),
🌻 [Ethan](https://github.com/el-ethan),
🌻 [Sam](https://github.com/milkdeliver),
🌻 [Arlind](https://github.com/ArlindXh),
🌻 [Teddy Toussaint](https://github.com/ttous),
🌻 [Lewis](https://github.com/LewisArdern),
🌻 [DouglasMV](https://github.com/DouglasMV),
🌻 [Corey Cleary](https://github.com/coreyc),
🌻 [Mehmet Perk](https://github.com/mperk),
🌻 [Ryan Ouyang](https://github.com/ryanouyang),
🌻 [Gabriel Lidenor](https://github.com/GabrielLidenor),
🌻 [Roman](https://github.com/animir),
🌻 [Invvard](https://github.com/Invvard),
🌻 [Rômulo Garofalo](https://github.com/romulogarofalo),
🌻 [Tho Q Luong](https://github.com/thoqbk),
🌻 [Burak Shen](https://github.com/Qeneke),
🌻 [Martin Muzatko](https://github.com/MartinMuzatko)


### Stars

⭐ [Kyle Martin](https://github.com/js-kyle),
⭐ [Keith Holliday](https://github.com/TheHollidayInn),
⭐ [Corey Cleary](https://github.com/coreyc),
⭐ [Maximilian Berkmann](https://github.com/Berkmann18),
⭐ [DouglasMV](https://github.com/DouglasMV),
⭐ [Marcelo Melo](https://github.com/marcelosdm),
⭐ [Mehmet Perk](https://github.com/mperk),
⭐ [Ryan Ouyang](https://github.com/ryanouyang)

<br/><br/><br/>

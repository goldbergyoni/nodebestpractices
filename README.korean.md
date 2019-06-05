[✔]: assets/images/checkbox-small-blue.png

# Node.js 모범 사례

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2082%20Best%20Practices-blue.svg" alt="82 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Jun%205%202019-green.svg" alt="Last update: Jun 5, 2019"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2012.14.0%20LTS-brightgreen.svg" alt="Updated for Node 12.14.0 LTS">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **트위터에서 팔로우 하세요!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

다른 언어로 읽기: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU**, ![TR](/assets/flags/TR.png)**TR** 는 작업중입니다!)](#translations)

<br/>

# 안녕하세요! 먼저 알아야 할 3가지가 있습니다:

**1. 이 문서를 읽는 것은, 사실상 수십 개의 베스트 Node.js 문서를 읽는 것입니다. -** 이 문서는 Node.js 의 가장 인기 있는 모범사례(Best Practice)들을 모은 요약집 및 큐레이션입니다.

**2. 가장 큰 모음집이며, 매주 성장하고 있습니다. -** 현재, 50개 이상의 모범사례들과, 스타일 가이드, 아키텍처적인 팁들이 제공되고 있습니다. 이 문서의 업데이트를 위해 새로운 이슈들과 PR들이 매일 만들어지고 있습니다. 우리는 이 문서의 잘못된 코드를 고치거나 새로운 아이디어들을 제안하는 것을 매우 환영합니다. [마일스톤 보러가기](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open)

**3. 항목 대부분은 추가적인 정보가 있습니다 -** 항목 옆쪽에 존재하는 **🔗자세히 보기** 링크에서 코드 예제, 참조 블로그 또는 기타 정보들을 확인 할 수 있습니다.

<br/><br/><br/>

## 목차

1. [프로젝트 구조 설계 (5)](#1-프로젝트-구조-설계)
2. [에러 처리 방법 (11)](#2-에러-처리-방법)
3. [코드 스타일 (12) ](#3-코드-스타일)
4. [테스트 및 전체 품질 관리 (8) ](#4-테스트-및-전체-품질-관리)
5. [운영 환경으로 전환하기 (16) ](#5-운영-환경으로-전환하기)
6.  보안 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))
7.  성능 ([예정](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))

<br/><br/><br/>

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

**핵심요약:** [ESLint](https://eslint.org)는 발생 가능한 코드 에러를 체크하고 껄끄러운 간격(spacing)문제를 식별하는 것부터 프로그래머가 분별없이 에러를 던지는 것과 같은 코드의 심각한 안티 패턴을 감지하여 코드 스타일을 바꾸는 것에 대한 사실상의 표준이다. ESLint도 자동으로 코드스타일을 고칠 수 있지만 [prettier](https://www.npmjs.com/package/prettier)와 [beautify](https://www.npmjs.com/package/js-beautify)같은 수정 부분의 포맷을 맞춰주는 강력한 툴이 있고 ESLint와 함께 작동된다.

**그렇게 하지 않을 경우:** 프로그래머가 쓸데없는 간격과 한줄의 길이(line-width) 문제에 대해서 집중해야하고 프로젝트의 코드스타일에 대해 과도하게 생각하느라 시간을 낭비해야할 수도 있다.

<br/><br/>

## ![✔] 3.2 Node.js에 특화된 플러그인들

**핵심요약:** vanlla JS만 지원하는 ESLinst의 표준 규칙 위에 [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha), [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)와 같은 Node에 특화된 플러그인을 같이 사용하라.

**그렇게 하지 않을 경우:** 많은 결함이 있는 Node.js 코드 패턴들이 레이더에서 벗어날 수 있다. 예를 들어 프로그래머는 변수로된 파일경로를 이용해 `require(파일경로변수)`로 파일을 가져올수 있다. 이것은 공격자들이 어떤 JS script도 실행시킬 수 있게 한다. Node.js linter는 그러한 패턴을 감지하고 미리 알려준다.

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

**그렇게 하지 않을 경우:** 이 모범사례를 적용하지 않는 것은 아래의 Stackoverflow 스레드에서 보는 바와 같이 예기치못한 결과로 이어질 수 있다.

🔗 [**자세히 보기:** "왜 결과가 중괄호의 위치에 따라 달라지는 거죠?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 세미콜론을 잊지 마라

**핵심요약:** 만장일치로 동의하지는 않겠지만 각 문장의 끝에 세미콜론을 붙이는 것은 여전히 권장사항이다. 이것은 당신의 코드를 읽는 다른 프로그래머가 좀더 잘 읽게하고 명확하게 할것이다.

**그렇게 하지 않을 경우:** 이전 섹션에서 본것처럼 자바스크립트의 인터프리터는 세미콜론이 없으면 의도되지 않은 결과를 야기할수 있기에 자동으로 문장의 끝에 세미콜론을 붙인다.

<br/><br/>

## ![✔] 3.5 함수에 이름을 붙여라

**핵심요약:** 클로저와 콜백을 포함한 모든 함수에 이름을 붙여라. 익명함수를 피해라. 이것은 노드 앱을 프로파일링 할때 특히 유용하다. 모든 함수를 명명하는 것은 당신이 메모리 스냅샷을 확인할때 당신이 보고있는 것이 무엇인지 쉽게 이해 할수있도록 해준다.

**그렇게 하지 않을 경우:**
당신이 익명함수에서 메모리 소비가 많다는 것을 확인 했을 때 코어 덤프(메모리 스냅샷)을 이용해 프로덕션 문제를 디버깅하는 것이 어려울 수도 있습니다.

<br/><br/>

## ![✔] 3.6 변수, 상수, 함수, 클래스의 명명 규칙(naming convention)

**핵심요약:** 상수와 변수 함수를 명명할때는 **_lowerCamelCase_** 를 사용하고 클래스를 명명 할때는 **_UpperCamelCase_**(첫 글자 대문자)를 사용하라. 이것은 일반 변수/함수와 인스턴스로 만들어야 하는 클래스를 구분하는데 도움을  것이다. 설명이 포함된 이름을 사용하되 이름을 짧게 유지하도록 해라.

**그렇게 하지 않을 경우:** 자바스크립트는 먼저 인스턴스로 만들지 않고 직접 생성자("Class")를 호출할 수 있는 세계 유일의 언어이다. 그러므로 클래스와 함수생성자는 UpperCamelCase를 통해 구분된다.

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

**핵심요약:** `const`를 사용한다는 것은 변수에 한번 값이 할당되면 다시 할당할 수 없다는 것을 의미한다. `const`를 선호하는 것은 같은 변수를 다른 용도로 사용하는 것을 방지하고 당신의 코드를 더 깔끔하게 만드는데 도움을 준다. for루프처럼 변수가 재할당 되어야 할 필요가 있으면 `let`을 사용하여 선언하라. `let`의 또 다른 중요한 부분은 선언된 변수를 사용하는 것이 변수가 정의된 블록범위(block scope) 안에서만 가능하다는 것이다. `var`는 블록범위가 아니라 함수범위(function scope)이며 이제 대신할 수 있는 const와 let이 있으므로 [ES6에서는 사용하면 안된다](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70).

**그렇게 하지 않을 경우:** 자주 변경되는 변수를 따라가려면 디버깅이 훨씬 더 번거로워 진다.

🔗 [**자세히 보기: JavaScript ES6+: var 혹은 let 혹은 const?**](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 require는 맨 처음에 오게하고 함수 안에서의 사용은 피하라

**핵심요약:** 모듈을 각 파일의 시작이나 모든 함수의 앞부분 혹은 밖에서 require하라. 이 간단한 모범사례는 파일의 의존성을 맨 위에서 쉽고 빠르게 구분 할수 있게 해줄 뿐만 아니라 여러 잠재적인 문제를 피하게 해준다.

**그렇게 하지 않을 경우:** require는 Node.js에서 동기로 실행된다. 함수 안에서 호출되면 다른 요청들을 더 중요한 시간에 처리되지 못하도록 막을 수 있다. 또한 require된 모듈이나 그것의 의존 모듈이 에러를 뱉거나 서버를 다운시키면, 함수 안에서 그 모듈이 require된 것이 아닌지 가능한 아주 빠르게 찾아야 할 것이다.

<br/><br/>

## ![✔] 3.9 require는 파일에 직접하지말고 폴더에 하라

**핵심요약:** 폴더에서 모듈과 라이브러리를 개발할 때 모든 소비자가 그것을 거치도록  모듈의 내부를 노출하는 index.js 파일을 둬라. 이것은 모듈의 '인터페이스'역할을 하며 계약을 위반하지 않으면서 미래의 변경사항에 대해 유연하게 대처하도록 해준다.

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

**핵심요약:** 약하고 추상적인 같음연산자 `==` 보다 엄격한 항등연산자 `===`를 선호한다. `==`는 두 변수를 공용 타입으로 변환한 후에 비교한다. `===`에는 타입 변환이 없고 두 변수가 같으려면 타입도 같아야 한다.

**그렇게 하지 않을 경우:** `==`으로 비교하는 경우 같지 않은 변수가 true로 반환 될 수있다.

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

위의 모든 문장은 `===`를 사용했다면 false를 반환 했을것이다.

<br/><br/>

## ![✔] 3.11 async-await을 사용하고 콜백을 피하라

**핵심요약:** Node 8의 LTS 버전은 현재 async-await을 완전히 지원한다. 이것은 콜백과 promise를 대체하여 비동기 코드를 다루는 새로운 방법이다. async-await은 비차단적(non-blocking)이고 비동기 코드를 동기 코드처럼 보이게 만든다. 당신의 코드에게 줄수 있는 최고의 선물은 try-catch와 같은 더 작고 친숙한 코드 구문을 제공하는 async-await을 사용하는 것이다.

**그렇게 하지 않을 경우:** 콜백 스타일로 비동기 에러를 처리하는 것은 아마도 지옥으로 가는 가장 빠른 방법일것이다. 이런 스타일은 에러를 전부 확인하게 하고 어색한 코드 중첩을 다루게하며 코드 흐름을 추론하기 어렵게 만든다.

🔗[**자세히 보기: async-await 1.0 가이드**](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 두꺼운(=>) 화살표 함수를 사용하라

**핵심요약:** async-await을 사용하고 함수 인자를 사용하는 것을 피하는 것이 권장되지만 promise와 콜백을 받는 예전 API를 다룰 때는 화살표 함수가 코드 구조를 더 작게해주고 루트 함수의 어휘적 맥락(lexical context)을 유지시켜 준다. (예를 들어 'this')

**그렇게 하지 않을 경우:** 더 긴 코드(ES5의 function)은 버그에 더 취약하고 읽기가 번거롭다.

🔗 [**Read mode: 화살표 함수를 받아들일 시간이다**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `4. 테스트 및 전체 품질 관리`

## ![✔] 4.1 At the very least, write API (component) testing

**핵심요약:** Most projects just don't have any automated testing due to short timetables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which is the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterward, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc

**그렇게 하지 않을 경우:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with a linter

**핵심요약:** Use a code linter to check basic quality and detect anti-patterns early. Run it before any test and add it as a pre-commit git-hook to minimize the time needed to review and correct any issue. Also check [Section 3](https://github.com/i0natan/nodebestpractices#3-code-style-practices) on Code Style Practices

**그렇게 하지 않을 경우:** You may let pass some anti-pattern and possible vulnerable code to your production environment.

<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs CircleCI vs Travis vs Rest of the world)

**핵심요약:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it should come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) used to be the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Nowadays, it became much easier to set up a CI solution using SaaS tools like [CircleCI](https://circleci.com) and others. These tools allow crafting a flexible CI pipeline without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**그렇게 하지 않을 경우:** Choosing some niche vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup

🔗 [**자세히 보기: Choosing CI platform**](/sections/testingandquality/citools.korean.md)

<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**핵심요약:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [npm audit](https://docs.npmjs.com/cli/audit) and 🔗 [snyk.io](https://snyk.io) that can be invoked from your CI on every build

**그렇게 하지 않을 경우:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.5 Tag your tests

**핵심요약:** Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**그렇게 하지 않을 경우:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremely slow and keeps developers away from running tests

<br/><br/>

## ![✔] 4.6 Check your test coverage, it helps to identify wrong test patterns

**핵심요약:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but not least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**그렇게 하지 않을 경우:** There won't be any automated metric telling you when a large portion of your code is not covered by testing

<br/><br/>

## ![✔] 4.7 Inspect for outdated packages

**핵심요약:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a severe scenario might be when an installed package is 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**그렇게 하지 않을 경우:** Your production will run packages that have been explicitly tagged by their author as risky

<br/><br/>

## ![✔] 4.8 Use docker-compose for e2e testing

**핵심요약:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after

**그렇게 하지 않을 경우:** Without docker-compose teams must maintain a testing DB for each testing environment including developers machines, keep all those DBs in sync so test results won't vary across environments

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `5. 운영 환경으로 전환하기`

## ![✔] 5.1. Monitoring!

**핵심요약:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**그렇게 하지 않을 경우:** Failure === disappointed customers. Simple

🔗 [**자세히 보기: Monitoring!**](/sections/production/monitoring.korean.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**핵심요약:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**그렇게 하지 않을 경우:** You end-up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**자세히 보기: Increase transparency using smart logging**](/sections/production/smartlogging.korean.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**핵심요약:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**그렇게 하지 않을 경우:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**자세히 보기: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.korean.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**핵심요약:** Your code must be identical across all environments, but amazingly NPM lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**그렇게 하지 않을 경우:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code

🔗 [**자세히 보기: Lock dependencies**](/sections/production/lockdependencies.korean.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**핵심요약:** The process must go on and get restarted upon failures. For simple scenarios, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**그렇게 하지 않을 경우:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to a DevOps chaos

🔗 [**자세히 보기: Guard process uptime using the right tool**](/sections/production/guardprocess.korean.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**핵심요약:** At its basic form, a Node app runs on a single CPU core while all other are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**그렇게 하지 않을 경우:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**자세히 보기: Utilize all CPU cores**](/sections/production/utilizecpu.korean.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**핵심요약:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**그렇게 하지 않을 경우:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**자세히 보기: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.korean.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**핵심요약:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**그렇게 하지 않을 경우:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affects the UX

🔗 [**자세히 보기: Discover errors and downtime using APM products**](/sections/production/apmproducts.korean.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**핵심요약:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**그렇게 하지 않을 경우:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**자세히 보기: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**핵심요약:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**그렇게 하지 않을 경우:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**자세히 보기: Measure and guard the memory usage**](/sections/production/measurememory.korean.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**핵심요약:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single threaded model

**그렇게 하지 않을 경우:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**자세히 보기: Get your frontend assets out of Node**](/sections/production/frontendout.korean.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your Servers almost every day

**핵심요약:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**그렇게 하지 않을 경우:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**자세히 보기: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.korean.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**핵심요약:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**그렇게 하지 않을 경우:** 그렇게 하지 않을 경우: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

🔗 [**자세히 보기: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.korean.md)

<br/><br/>

## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**핵심요약:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**그렇게 하지 않을 경우:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**자세히 보기: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.korean.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**핵심요약:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**그렇게 하지 않을 경우:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes the slower by a factor of three!

🔗 [**자세히 보기: Set NODE_ENV=production**](/sections/production/setnodeenv.korean.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**그렇게 하지 않을 경우:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**그렇게 하지 않을 경우:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**자세히 보기: Use an LTS release of Node.js**](/sections/production/LTSrelease.korean.md)

<br/><br/><br/>

<p align="right"><a href="#목차">⬆ 목차로 돌아가기</a></p>

# `보안`

## 컨트리뷰터들이 현재 작업중 입니다. 함께 하시겠습니까?

<br/><br/><br/>

# `성능`

## 컨트리뷰터들이 현재 작업중 입니다. 함께 하시겠습니까?

<br/><br/><br/>

# 마일스톤

이 가이드를 관리하고 최신 버전을 유지하기 위해, 우리는 지속해서 가이드라인과 모범 사례들을 커뮤니티의 도움으로 업데이트하고 개선해 나가고 있습니다. 만약 이 프로젝트에 기여를 하고 싶으시면 [마일스톤](https://github.com/i0natan/nodebestpractices/milestones) 을 보고 참여하십시오.

<br/><br/>

## 번역

모든 번역은 커뮤니티에 의해 기여되고 있습니다. 이미 완성된 번역이나, 진행중, 새로운 번역에 대한 도움은 언제나 환영합니다!

### 번역 작업 완료

* ![CN](/assets/flags/CN.png) [Chinese](README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)

### 번역 작업중

* ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
* ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
* ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
* ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
* ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
* ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/><br/>

# Contributors

## `Yoni Goldberg`

Independent Node.js consultant who works with customers in USA, Europe, and Israel on building large-scale scalable Node applications. Many of the best practices above were first published in his blog post at [http://www.goldbergyoni.com](http://www.goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

## `Ido Richter`

👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help

## `Bruno Scheufler`

💻 full-stack web developer and Node.js enthusiast

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)
Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.

<br/><br/><br/>

# Thank You Notes

This repository is being kept up to date thanks to the help from the community. We appreciate any contribution, from a single word fix to a new best practice. Below is a list of everyone who contributed to this project. A 🌻 marks a successful pull request and a ⭐ marks an approved new best practice

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
🌻 [Francozeira](https://github.com/Francozeira),
🌻 [Invvard](https://github.com/Invvard),
🌻 [Rômulo Garofalo](https://github.com/romulogarofalo),
🌻 [Tho Q Luong](https://github.com/thoqbk),
🌻 [Burak Shen](https://github.com/Qeneke),
🌻 [Martin Muzatko](https://github.com/MartinMuzatko),
🌻 [zhuweiyou](https://github.com/zhuweiyou)

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

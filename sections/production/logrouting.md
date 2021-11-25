# 애플리케이션 코드는 로그 라우팅 처리하지 마라. 

<br/><br/>

### 한문단 설명 

애플리케이션 코드는 로그 라우팅하면 안 되지만 대신 로거 유틸리티를 사용해서 'stdout/stderr'에 작성하면 된다. "로그 라우팅"은 애플리케이션이나 애플리케이션 프로세스가 아닌 다른 위치에 로그를 선택하고 푸시하는 것을 의미한다.(예: 파일, 데이터베이스 등에 로그 쓰기) 그러한 이유는 대부분 2가지 이다. 1) 관심사 분리 2) [최신 애플리케이션을 위한 12-Factor 모범 사례](https://12factor.net/logs).

"관심사 분리"에 대해 서비스 사이 또는 서비스들 자체 사이의 코드 모음으로 생각한다. 하지만, 이는 "인프라" 구성요소에도 잘 적용한다. 애플리케이션 코드가 인프라/실행 환경(대부분 요즘은 컨테이너들)에서 처리하는 것을 처리해서 안 된다. 애플리케이션에 로그 위치를 정의했지만 나중에 그 위치를 변경하려면 어떻게 되는가? 그 결과 코드가 변하거나 배포된다. 컨테이너 기반/클라우드 기반 플랫폼에서 작업할 때, 컨테이너들은 성능 요구 사항에 따라 회전되거나 꺼질 수 있다. 그래서 로그 파일이 어디서 끝나는지 확신할 수 없다. 대신 실행 환경(컨테이너)은 어디서 로그 파일이 라우트 되는지 결정돼야 한다. 애플리케이션은 'stdout'/'stderr'에서 무엇이 필요한지 기록해야 하고, 실행 환경은 거기서 로그 스트림을 선택하고 필요한 곳으로 라우팅하도록 구성해야 한다. 또한, 로그 대상을 지정 및/또는 변경해야 하는 팀은 종종 애플리케이션 개발자가 아니라 DevOps의 일부이고 애플리케이션 코드에 익숙하지 않을 수 있다. 이는 쉽게 변경되지 못하게 한다.

### 코드 예시 - 안 좋은 패턴: 애플리케이션과 긴밀하게 연결된 로그 라우팅

```javascript
const { createLogger, transports, winston } = require('winston');
/**
   * Requiring `winston-mongodb` will expose
   * `winston.transports.MongoDB`
   */
require('winston-mongodb');
 
// log to two different files, which the application now must be concerned with
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});
 
// log to MongoDB, which the application now must be concerned with
winston.add(winston.transports.MongoDB, options);
```
이렇게 하면 애플리케이션이 이제 애플리케이션/비즈니스 로직과 로그 라우팅 로직을 모두 처리애햐 한다!

<br/><br/>

### 코드 예시 - 더 좋은 로그 처리 + 도커 예시

애플리케이션에서:
```javascript
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });
```
도커 컨테이너 `daemon.json`에서 :
```json5
{
  "log-driver": "splunk", // just using Splunk as an example, it could be another storage type
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    //...
  }
}
```
따라서 이 예제는 `log -> stdout -> Docker container -> Splunk` 로 끝난다.

<br/><br/>

### 블로그 인용: "O'Reilly"

[O'Reilly blog](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs) 에 따르면,
 > 고정된 수의 서버에 고정된 수의 인스턴스를 가질 때, 디스크에 로그를 저장하는 것이 의미가 맞는 것 같다. 그러나, 애플리케이션이 실행중인 인스턴스가 동적으로 1에서 100개가 될 수 있고, 그 인스턴스가 어디에서 실행되고 있는지 모르면 클라우드 제공자가 사용자를 대신하여 로그 집계 처리를 해야 한다.

<br/><br/>

### 인용: "12-Factor"

[12-Factor best practices for logging](https://12factor.net/logs) 에서
 > 12-요소 앱은 출력 스트림의 라우팅이나 저장소에 전혀 관여하지 않는다. 로그 파일을 작성하거나 관리하려고 시도해서는 안 된다. 대신에, 각 실행중인 프로세스는 버퍼되지 않은 이벤트 스트림들을 stdout에 작성한다.
 
 > In staging or production deploys, each process’ stream will be captured by the execution environment, collated together with all other streams from the app, and routed to one or more final destinations for viewing and long-term archival. These archival destinations are not visible to or configurable by the app, and instead are completely managed by the execution environment.
 > 스테이징 또는 프로덕션 배포에서, 각 프로세스의 스트림은 실행 환경에서 캡처되고, 앱으로부터 다른 스트림과 함께 수집되며, 보여주기와 장기 보관을 위해 하나 이상의 최종 대상으로 라우팅 된다. 이러한 보관 대상은 앱에 보이지 않거나 구성할 수 없고, 대신 실행 환경에서 완전하게 관리된다.

<br/><br/>

 ### 예시: Docker와 Splunk를 예시로 사용하는 아키텍처 개요 
![alt text](/assets/images/logging-overview.png "Log routing overview")

<br/><br/>

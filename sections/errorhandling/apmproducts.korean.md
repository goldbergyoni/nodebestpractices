# Discover errors and downtime using APM products


### One Paragraph Explainer

예외 처리와 에러는 같지 않습니다. 과거의 에러 처리는 예외의 존재를 예측하는 것이었습니다. 그러나 응용 프그로그램 에러는 "느린 코드 경로", "api 다운타임", "연산 리소스의 부족" 등에서 발생할 수 있습니다. 이때 apm제품들이 최소한의 작업으로 방대한 양의 발생 가능한 이슈를 발견하기위해 사용되는 것입니다. apm제품들의 일반적인 특징들은 http api가 에러를 반환할때 경고를 주거나, api응답시간이 일정 임계치 이하로 떨어지거나, 코드상 위협을 감지하거나, 서버 자원을 모니터링 하거나, 다양한 방식으로 유용한 정보를 표현한 운영 대시보드를 제공하는 것 등이 았다. (대부분은 무료~)

### Wikipedia about APM

it기업이나 시스템 운영 현장에서는 application performance management(apm)는 소프트웨어의 적절한 운영과 성능을 관리하고 모니터링하는 역할을 한다. apm은 서비스를 유지 가능한 수준으로 만들기 위해 복잡한 어플리케이션을 분석하고 측정한다. apm은 it언어를 사업의 언어로 번역해주는 역할이다. 

### Understanding the APM marketplace

APM products constitute 3 major segments:

1. 웹사이트 또는 api 모니터링 - http 호출을 통해 제한된 시간 안에 외부적인 성능이 일정 수준을 유지하는지 모니터링한다. 다음 제품들이 유명하다:
[Pingdom](https://www.pingdom.com/), [Uptime Robot](https://uptimerobot.com/), and [New Relic](https://newrelic.com/application-monitoring)

2. 코드 장비 - 느린 알고리즘을 감지하고, 예외처리를 분석하고, 성능 모니터링 등의 특징을 가진 응용 프로그램을 내장한 제품군이 필요하다. 다음 제품들이 유명하다: New Relic, App Dynamics

3. 운영 대시보드 - 이 제품군들은 응용 프로그램의 전체 성능을 쉽게 이해할 수 있도록 하여 운영팀의 효율성을 높이는 데에 집중한다. 이 과정은 대게 프로그램 로그, 데이터베이스 로그, 서버 로등의 다양한 정보를 종합해야 한다. 다음 제품들이 유명하다: [Datadog](https://www.datadoghq.com/), [Splunk](https://www.splunk.com/), [Zabbix](https://www.zabbix.com/)



 ### Example: UpTimeRobot.Com – Website monitoring dashboard
![alt text](../../assets/images/uptimerobot.jpg "Website monitoring dashboard")

 ### Example: AppDynamics.Com – end to end monitoring combined with code instrumentation
![alt text](../../assets/images/app-dynamics-dashboard.png "end to end monitoring combined with code instrumentation")

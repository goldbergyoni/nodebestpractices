# Carefully choose your CI platform

<br/><br/>

### One Paragraph Explainer

CI 환경은 [Jenkins](https://jenkins.io/)의 유연성과 SaaS 공급업체의 단순성을 비교한 결과였습니다. 현재 [CircleCI](https://circleci.com/) 및 [Travis](https://travis-ci.org/))와 같은 SaaS 제공업체가 최소 설정 시간을 가진 도커 컨테이너를 포함한 강력한 솔루션을 제공하는 반면 Jenkins는 '유효성' 부문에서도 경쟁하려고 노력함에 따라 판도가 바뀌고 있다. 클라우드에서 풍부한 CI 솔루션을 설정할 수 있지만, 세부 정보를 제어해야 하는 경우 Jenkins가 여전히 선택하는 플랫폼입니다. 선택은 결국 CI 프로세스를 어느 정도까지 커스터마이징해야 하는지로 귀결됩니다. 무료 및 설치 클라우드 공급업체는 맞춤형 셸 명령, 사용자 지정 도커 이미지 실행, 워크플로우 조정, 매트릭스 빌드 실행 및 기타 다양한 기능을 사용할 수 있습니다. 그러나 인프라를 제어하거나 Java와 같은 공식 프로그래밍 언어를 사용하여 CI 로직을 프로그래밍하려는 경우에는 Jenkins를 선택할 수 있습니다. 그렇지 않으면 간편하고 무료 클라우드 설정 옵션을 선택하는 것이 좋습니다.

<br/><br/>

### Code Example – a typical cloud CI configuration. Single .yml file and that's it

```javascript
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:4.8.2
      - image: mongo:3.4.4
    steps:
      - checkout
      - run:
          name: Install npm wee
          command: npm install
  test:
    docker:
      - image: circleci/node:4.8.2
      - image: mongo:3.4.4
    steps:
      - checkout
      - run:
          name: Test
          command: npm test
      - run:
          name: Generate code coverage
          command: './node_modules/.bin/nyc report --reporter=text-lcov'
      - store_artifacts:
          path: coverage
          prefix: coverage

```

### Circle CI - almost zero setup cloud CI

![alt text](../../assets/images/circleci.png "API error handling")

### Jenkins - sophisticated and robust CI

![alt text](../../assets/images/jenkins_dashboard.png "API error handling")

<br/><br/>

# 리팩토링

<br/> <br/>

### 한문단 요약

반복적인 개발 흐름에서 리팩토링은 하나의 중요한 과정이다. 반복되는 코드, 긴 메소드들, 긴 파라미터 목록 등의 "Code Smells" (좋지않은 코딩 전략들)을 제거하는 것은 당신의 코드를 발전시키고, 더 유지하기 쉽게 만들어준다. 정적인 분석 도구를 사용하는 것은 당신으로 하여금 code smells를 찾도록 돕고, 또한 리팩토링을 위한 과정을 구축하도록 도와준다. 이러한 도구들을 당신의 CI 빌드에 추가하는것은 품질 체크 과정을 자동화할 수 있게 한다. 만약 Sonar 또는 Code Climate와 같은 도구들과 당신의 CI를 결합한다면, code smells을 발견했을 때 빌드가 실패하고 작성자에게 이슈를 어떻게 찾아가야 할지 정보를 제시할 것이다. 정적 분석 도구들은 Eslint와 같은 lint 도구들과도 금상첨화를 이룬다. 정적인 분석 도구들이 하나 그리고 여러 파일들을 거쳐 code smells에를 찾아내는 것에 집중할 동안, 대부분의 lint 도구들은 하나의 파일에서 띄어쓰기나 세미콜론의 부재와 같은 코드스타일에 집중한다. (비록 이 중 일부는 긴 함수와 같은 code smells를 발견하긴 하지만 말이다.)

<br/> <br/>

### Martin Fowler - Chief Scientist at ThoughtWorks
"Refactoring - Improving the Design of Existing Code" 발췌.
> 리팩토링은 존재하는 코드 베이스의 디자인을 발전시키기 위한 통제된 기술이다.

<br/> <br/>

### Evan Burchard - Web Development Consultant and Author
"Refactoring JavaScript: Turning Bad Code into Good Code" 발췌.
> 당신이 어떤 프레임워크 또는 "JS로 컴파일되는" 언어나 라이브러리를 사용하더라도, 당신의 근본적인 자바스크립트 퀄리티가 별로라면 버그들과 퍼포먼스에 대한 우려는 항상 이슈가 될 수밖에 없다.

<br/> <br/>

### 예제: CodeClimate를 이용한 복잡한 메소드 분석 (commercial)

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/codeanalysis-climate-complex-methods.PNG "Complex methods analysis")

### 예제: CodeClimate를 이용한 코드의 히스토리 및 트렌드 분석 (commercial)

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/codeanalysis-climate-history.PNG "Code analysis history")

### 예제: SonarQube를 이용한 코드의 요약 및 트렌드 분석 (commercial)

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/codeanalysis-sonarqube-dashboard.PNG "Code analysis history")


<br/><br/>

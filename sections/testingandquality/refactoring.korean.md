# Refactoring

<br/><br/>

### One Paragraph Explainer

리팩토링은 반복적인 개발 흐름에서 중요한 과정이다. 중복 코드, 긴 메서드, 긴 매개 변수 목록과 같은 "코드 스멜"(불량 코딩 관행)을 제거하면 코드가 향상되고 유지 관리가 더욱 용이해집니다. 정적 분석 도구를 사용하면 이러한 코드 스멜을 찾고 리팩토링에 대한 프로세스를 구축하는 데 도움이 됩니다. CI 빌드에 이러한 도구를 추가하면 품질 검사 프로세스를 자동화하는 데 도움이 됩니다. CI가 소나 또는 코드 기후와 같은 도구와 통합될 경우 코드 스멜을 감지하고 작성자에게 문제 해결 방법을 알려주면 빌드가 실패합니다. 이러한 정적 분석 도구는 ESLint와 같은 보풀 도구를 보완합니다. 대부분의 보풀 도구는 단일 파일에서 들여쓰기와 누락된 세미콜론과 같은 코드 스타일(일부는 긴 함수처럼 코드 냄새가 나기도 함)에 초점을 맞추고 정적 분석 도구는 단일 파일과 여러 파일에 있는 코드 냄새(중복 코드, 복잡성 분석 등)를 찾는 데 초점을 맞춥니다.

<br/><br/>

### Martin Fowler - Chief Scientist at ThoughtWorks

책, "JavaScript 수정: 불량 코드를 정상 코드로 변경"

> 리팩토링은 기존 코드베이스의 설계를 개선하기 위한 통제된 기술이다.

<br/><br/>

### Evan Burchard - Web Development Consultant and Author

책, "JavaScript 수정: 불량 코드를 정상 코드로 변경"

> 사용하는 프레임워크나
> "컴파일-투-JS" 언어 또는 라이브러리가 무엇이든
> 자바스크립트의 기본 품질이 낮으면 버그와 성능에 대한 우려는 항상 문제가 됩니다.

<br/><br/>

### Example: Complex methods analysis with CodeClimate (commercial)

![alt text](../../assets/images/codeanalysis-climate-complex-methods.PNG "Complex methods analysis")

### Example: Code analysis trends and history with CodeClimate (commercial)

![alt text](../../assets/images/codeanalysis-climate-history.PNG "Code analysis history")

### Example: Code analysis summary and trends with SonarQube (commercial)

![alt text](../../assets/images/codeanalysis-sonarqube-dashboard.PNG "Code analysis history")

<br/><br/>

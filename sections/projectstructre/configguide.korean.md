# 환경을 인식하는, 보안적인, 계층적인 config을 사용하라

<br/><br/>

### 한문단 설명

설정 값을 처리할 때 많은 문제가 발생하거나 속도가 느려질 수 있음:

1. config 파일을 이용하지 않고 환경 변수만으로 키를 지정하는 경우 100개 정도의 많은 키를 삽입해야 할 때는 매우 지루하고 단순작업이 됩니다. 반대로 파일만 이용해서 처리하면 DevOps 관리자는 코드를 변경하지 않고는 동작을 변경할 수 없게 됩니다. 신뢰할 수 있는 config 솔루션은 config 파일과 환경 변수를 이용한 재정의를 함께 사용할 수 있어야 합니다.

2. 계층적이지 않은 JSON 구성에서는 모든 키를 지정할 때 목록이 커지면 항목을 찾아 수정하는 것이 어렵습니다. 섹션으로 그룹화된 계층형 JSON 파일은 이 문제를 해결할 수 있습니다. 몇몇 config 라이브러리는 config를 여러 파일에 저장할 수 있고 런타임 시 모든 구성을 통합할 수 있습니다. 아래 예를 참조하십시오.

3. DB 비밀번호와 같은 민감한 정보를 저장하는 것은 분명히 권장하지 않지만 이 문제에 대해 더 빠르고 편리한 솔루션은 없습니다. 대안으로 일부 config 라이브러리는 파일을 암호화 기능을 제공하고, 어떤 config 라이브러리는 GIT에 커밋할 때 해당 항목을 암호화하거나 혹은 해당 항목에 대한 실제 값을 GIT에 커밋할 때는 저장하지 않고 배포 중에 환경 변수를 통해 실제 값을 설정합니다.

4. 일부 고급 config 케이스에서는 커맨드라인(vargs)을 통해 설정 값을 주입하도록 요구하는 경우도 있습니다. 혹은 여러 서버에서 동일한 설정 데이터를 사용할 수 있게 Redis와 같은 중앙 집중식 캐시를 통해 설정 정보를 동기화해야하는 경우도 있습니다.

Some configuration libraries can provide most of these features for free, have a look at npm libraries like [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), and [convict](https://www.npmjs.com/package/convict) which tick many of these requirements.

<br/><br/>

### Code Example – 계층 구성은 항목을 찾고 대용량 구성 파일을 유지 관리하는 데 도움을 줍니다.

```js
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>

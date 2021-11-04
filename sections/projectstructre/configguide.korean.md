# 환경을 인식하는, 보안적인, 계층적인 설정을 사용하라

<br/><br/>

### 한문단 설명

config data를 처리할 때 많은 문제가 발생하거나 속도가 느려질 수 있음:

1. 프로세스에서 환경 변수를 지정하면 100개 정도의 많은 키를 삽입해야 할 때는 매우 지루하고 단순작업이고(config 파일에서 키를 커밋하는 경우), 파일을 처리할 때 DevOps 관리자는 코드를 변경하지 않고 동작을 변경할 수 없습니다. 신뢰할 수 있는 config 솔루션은 config file과 프로세스 변수의 재정의를 모두 결합해야 합니다.

2. 계층적이지 않은 JSON 구성에서는 모든 키를 지정할 때 목록이 커지면 항목을 찾아 수정하는 것이 어렵습니다. 섹션으로 그룹화된 계층형 JSON 파일은 이 문제를 해결할 수 있습니다. 몇몇 config 라이브러리는 config를 여러 파일에 저장할 수 있고 런타임 시 모든 구성을 통합할 수 있습니다. 아래 예를 참조하십시오.

3. DB 비밀번호와 같은 민감한 정보를 저장하는 것은 분명히 권장하지 않지만 이 문제에 대해 더 빠르고 편리한 솔루션은 없습니다. 대안으로 일부 구성 라이브러리는 파일을 암호화할 수 있도록 허용하고, 다른 구성 라이브러리는 GIT 커밋 중에 해당 항목을 암호화하거나 해당 항목에 대한 실제 값을 저장하지 않고 환경 변수를 통해 배포 중에 실제 값을 지정합니다.

4. 일부 고도화된 config 케이스에서는 명령줄(vargs)을 통해 구성 값을 주입하거나 Redis와 같은 중앙 집중식 캐시를 통해 구성 정보를 동기화해야 여러 서버에서 동일한 구성 데이터를 사용할 수 있습니다.

몇몇 config 라이브러리는 이러한 기능의 대부분을 무료로 제공합니다. [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), [convict](https://www.npmjs.com/package/convict) 와 같은 npm 라이브러리를 살펴보세요. 

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

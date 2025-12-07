# 기밀은 설정 파일에서 빼거나 패키지를 이용해서 암호화하라.

### 한 문단 요약

Node.js 애플리케이션에서 key와 secret에 접근할 수 있는 일반적이고 안전한 방법은 그들이 실행될 시스템의 환경 변수로 깂을 저장하는 것이다. 한 번 설정이 되고나면, 해당 값들은 전역 `process.env`객체를 통해 접근이 가능해진다.
어플리케이션이 모든 구성을 올바르게 코드에서 제외하고 있는지 판단하는 리트머스 테스트는 자격증명을 손상시키지 않으면서 코드베이스를 오픈 소스로 언제든지 오픈 소스로 만들 수 있는지에 대한 여부이다.

만약 소스 제어 내부에 secret들을 저장해야하는 드문 상황이 생긴다면, [cryptr](https://www.npmjs.com/package/cryptr)같은 패키지를 사용하여 일반 텍스트가 아닌 암호화된 형태로 저장될 수 있도록 해야한다.

git commit 실수로 인해 secret이 추가되는 경우들에 대해서, [git-secrets](https://github.com/awslabs/git-secrets)과 같이 커밋을 감사하고 메세지를 커밋해주는 다양한 도구들이 있다. 

### 코드 예제

환경 변수에 저장되어 있는 API key에 대한 접근:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

암호화된 secret을 저장하기 위한 `cryprt` 사용:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // outputs decrypted string which was not stored in source control
```

### What other bloggers say
### 다른 블로거들의 이야기

> 환겨 변수들은 코드를 변경하지 않아도 배포 간 쉽게 변경이 가능하다. 구성 파일과는 다르게 실수로 레퍼지토리에 체크인이 될 가능성이 거의 없다. 그리고 다른 사용자 정의 구성 파일들이나 Java 시스템 속성과 같은 구성 메커니즘과 다르게, 그들은 언어나 OS에 구애받지 않고 상호 호환이 가능한 표준에 해당한다. [From: The 12 factor app](https://12factor.net/config)
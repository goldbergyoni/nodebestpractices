# Lock dependencies

<br/><br/>

### 한 문단 설명

너의 코드는 수많은 외부 패키지들에 의존하는데, 이것을 'requires'라 부르자. 그리고 momentjs-2.1.4를 사용하면 기본적으로(by default) 너가 프로덕션에 배포할 때 npm은 momentjs 2.1.5를 가져올 것이고, 이는 불행히도 테이블에 몇몇 없었던 버그들을 야기한다. npm config파일에 `–save-exact=true`라는 구문은 설치되었던 것과 _정확히_ 일치하는 버전을 npm에게 참조하도록 지시해 다음번 `npm install` 을 실행했을 때(프로덕션에서나 도커 컨테이너 내에선 너는 테스트를 위해 ship forward를 계획할 것이다) 똑같은 의존 버전이 가져와 질 것이다. 유명한 대안 접근 방식으로는 어떤 패키지와 버전이 설치되어야 하는지 명시해 주어 환경이 예상되었던 것보다 더 최신의 버전을 가져오지 못하도록 하는 `.shrinkwrap` 파일(npm을 통해 쉽게 생성 가능하다)을 사용하는 것이다.

- **업데이트:** npm 5부터, .shrinkwrap 의 사용으로 의존성들은 자동으로 잠긴다. 근래 부상하는 패키지 매니저인 Yarn의 사용으로도 의존성을 기본적으로(by default)로 잠굴 수 있다.

<br/><br/>

### 코드 예시: npm에게 정확한 버전 사용을 지시하는(알려주는) .npmrc파일

```npmrc
// 프로젝트 경로에 이 파일을 .npmrc로 저장하라.
save-exact:true
```

<br/><br/>

### 코드 예시: 정확한 의존성 트리를 추출하는 shrinkwrap.json 파일

```json
{
  "name": "A",
  "dependencies": {
    "B": {
      "version": "0.0.1",
      "dependencies": {
        "C": {
          "version": "0.1.0"
        }
      }
    }
  }
}
```

<br/><br/>

### 코드 예시: npm 5 의존성 잠금 파일 - package.json

```json
{
  "name": "package-name",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "dependencies": {
    "cacache": {
      "version": "9.2.6",
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
      "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
    },
    "duplexify": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
      "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
      "dependencies": {
        "end-of-stream": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
          "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
        }
      }
    }
  }
}
```

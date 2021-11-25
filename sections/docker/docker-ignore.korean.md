# .dockerignore를 사용해 비밀 누수를 방지하여라

<br/><br/>

### 한 문단 설명

도커의 빌드 커맨드는 로컬에 있는 파일들을 가상 네트워크에 존재하는 빌드 컨텍스트 환경에 복제한다. 조심하라 - 디벨롭과 CI 폴더들은 .npmrc, .aws, .env 또는 다른 민감한 파일들과 같은 비밀들을 포함하고 있다. 결과적으로, 도커 이미지는 비밀을 보유하고 그들을 안전하지 않은 영역(예. 도커 레포지토리, 파트너의 서버)에 노출시킨다. 도커파일은 무엇이 복제되는지에 대해 조금 더 명확해질 필요가 있다. 불필요한 폴더와 잠재적인 비밀들을 걸러내는 최종 안전 장치로서 역할을 할 수 있는 .dockerignore 파일을 포함하는 것은 가장 중요한 일이다. 이렇게 함으로써 또한 빌드속도를 높일 수 있다 - 프로덕션(즉. .git, 테스트결과, IDE configuration) 에서 쓰이는 일이 없는 일반 개발 폴더를 제외함으로써, 빌더는 캐시를 더 잘 이용할 수 있고 더 나은 퍼포먼스를 얻을 수 있다.

<br/><br/>

### 코드 예시 – Node.js를 위한 훌륭한 기본 .dockerignore파일

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### 안티-패턴 코드 예시 - 모든 파일의 재귀적 복사

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# 다음의 줄은 모든 것을 복사한다.
COPY . .

# 나머지는 여기에 온다

```

</details>

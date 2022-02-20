# NODE_MODULE 캐시를 삭제하라.

<br/><br/>

### 한 문단 요약

npm과 Yarn 등의 Node 패키지 매니저들을 설치된 패키지를 로컬에 캐싱하고 이를 통해 향후에 같은 라이브러리를 필요로 하는 프로젝트들이 원격 레퍼지토리로부터 fetch할 필요가 없도록 한다. 비록 이 방식은 패키지들을 복사하고 저장공간을 더 소모하지만, 일반적으로 같은 패키지들을 계속 설치하는 로컬 개발 환경에서 단점을 상쇄하고도 남는 장점을 가진다. 도커 컨테이너에서는 종속성 설치가 한번 이루어지기 때문에, 이러한 저장이 의미를 가지지 못한다. 한 줄의 코드를 통해 해당 캐시들을 삭제함으로써, 이미지로부터 수십 MB를 줄일 수 있다. 해당 작업을 하는 동안, 캐싱 문제로 인해 0이 아닌 코드로 종료되거나 CI 빌드가 실패하지 않는지 확인해야 한다. - 이는 --force 플래그를 포함해서 피할 수 있다.

마지막 단계에서 새로운 패키지를 설치하지 않는 한, 당신이 다단계 빌드를 사용한다면 이것은 관련이 없다.

<br/><br/>

### 코드 예제 - 캐시 삭제

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# The rest comes here
```

</details>
# 배포시 의존성을 제거해라

<br/><br/>

### 한문단 요약

개발 종속성은 잠재적인 보안 취약점과 컨테이너의 크기를 크게 증가시킨다.
예를들어, 가장 영햘도 있는 npm 보안 침해 중 일부는 [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) 또는 [event-stream that was used by nodemon](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/)과 같은 영향을 받는 패키지개발의존성에서 시작했다. 이러한 이유로 인해 최종적으로 배포되는 이미지는 안전하고 최소화 되어야 한다. `--production`플래그와 함께 `npm install`을 하는것이 가장 좋다. 그러나, 새로운 설치와 잠금 파일의 존재를 보장하는 `npm ci`를 실행하는 것이 훨씬 더 안전하다. 로컬 캐시를 제거하면 수십MB를 추가로 절약할 수 있다. 종종 개발의존성을 사용하여 컨테이너 내에서 테스트를 하거나 디버깅을 해야 할 필요가 있는데 [multi stage builds](./multi_stage_builds.md)가 서로 다른 종속성 세트와 배포용 종속성 세트를 갖는데 도움이 될 수 있다.
<br/><br/>

### 예시 코드 – 배포를 위한 설치

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# 나머지 코드는 여기서 부터 작성하면 된다.
```

</details>

<br/><br/>

### 예시 코드 – 여러 단계로 이루어진 빌드의 배포를 위한 설치

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:14.8.0-alpine AS build

COPY --chown=node:node package.json package-lock.json ./
# ✅ 안전한 설치
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build


# 런타임 단계
FROM node:14.8.0-alpine

COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# ✅ 깔끔한 개발 패키지
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
```

</details>


<br/><br/>

### Code Example Anti-Pattern – Installing all dependencies in a single stage dockerfile

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Two mistakes below: Installing dev dependencies, not deleting the cache after npm install
RUN npm install

# The rest comes here
```

</details>

<br/><br/>

### Blog Quote: "npm ci is also more strict than a regular install"

From [npm documentation](https://docs.npmjs.com/cli/ci.html)

> This command is similar to npm-install, except it’s meant to be used in automated environments such as test platforms, continuous integration, and deployment – or any situation where you want to make sure you’re doing a clean install of your dependencies. It can be significantly faster than a regular npm install by skipping certain user-oriented features. It is also more strict than a regular install, which can help catch errors or inconsistencies caused by the incrementally-installed local environments of most npm users.

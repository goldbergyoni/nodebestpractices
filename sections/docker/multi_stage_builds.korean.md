# 여러 단계의 빌드를 사용하라.

### 한 문단 요약

여러 단계의 빌드는 사용 가능한 바이너리들, 노출된 환경 변수들 , 그리고 기본적인 운영 체제 등과 같은 빌드 및 런타임별 환경 세 정보들을 분리할 수 있게 한다. Dockerfile을 여러 단계로 분할하는 것은 어플리케이션에 실제로 필요한 것들만 전송하기 때문에 최종적인 이미지와 컨테이너의 크기를 줄이는 데 도움이 된다. 때로는 당신이 빌드 단계에서만 필요한 도구들(예: TypeScript CLI와 같은 개발 종속성)을 포함시켜야 할 필요가 생길 것이다. 그럴 경우 당신은 빌드 단계에서 설치하고 실행 단계에서 최종 출력만 사용할 수 있다. 일부 종속성이 복사되지 않기 때문에, 이는 이미지가 축소되는 것 역시 의미한다. 당신은 특정 서비스들과 소통하는 데 사용되는 API 키나 기밀 값 등 런타임에 존재하면 안되는 환경 변수들을 노출시켜야 할 수도 있다. ([avoid build time secrets](./avoid-build-time-secrets.md)을 읽어보자.) 마지막 단계에서, 당신은 빌드 폴더나 프로덕션 전용 종속성과 같은 미리 빌드되어진 리소스들을 복사할 수 있다. (이는 후에 이어지는 단계에서도 가져올 수 있다.)

### Example

다음 디렉토리 구조에 대해 상상해보자.

```
- Dockerfile
- src/
    - index.ts
- package.json
- yarn.lock
- .dockerignore
- docs/
  - README.md
```

당신의 [.dockerignore](../docker/docker-ignore.md)은 이미 어플리케이션 빌드 및 실행에 필요하지 않은 파일들을 필터링한다.


sections/docker/docker-ignore.md
```
# Don't copy in existing node_modules, we'll fetch our own
node_modules

# Docs are large, we don't need them in our Docker image
docs
```

#### 여러 단계의 Dockerfile

도커는 지속적인 통합 환경에서 주로 사용되기 때문에, `npm install` 대신 `npm ci` 명령어를 사용하는 것이 좋다. 그것은 package-lock.json에 구체적으로 지정된 버젼들만을 사용하기 때문에 더 빠르고 엄격하며, 불일치를 감소시킨다. 추가적인 정보는 [여기](https://docs.npmjs.com/cli/ci.html#description)에서 확인이 가능하다. 이 예제는 패키지 매니저로 yarn을 사용하며 `npm ci` 명령어는 `yarn install --frozen-lockfile` [명령어](https://classic.yarnpkg.com/en/docs/cli/install/)에 해당한다.

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


FROM node:14.4.0

USER node
EXPOSE 8080

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### 여러 단계의 다른 베이스 이미지를 가지는 Dockerfile

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


# This will use a minimal base image for the runtime
FROM node:14.4.0-alpine

USER node
EXPOSE 8080

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### 여러 단계의 다른 베이스 이미지를 가지는 전체 Dockerfile

우리의 Dockerfile은 두 가지 단게를 포함한다: 하나는 완전히 기능을 가진 Node.js 도커 이미지를 사용해 어플리케이션을 빌드하기 위한 단계이며, 두번째로는 최소한의 Alpine 이미지에 기반하여 어플리케이션을 실행하기 위한 단계이다. 우리는 두 번째 단계에만 빌드된 파일들을 복사한 후 프로덕션 종속성들을 설치한다.

```dockerfile
# Start with fully-featured Node.js base image
FROM node:14.4.0 AS build

USER node
WORKDIR /home/node/app

# Copy dependency information and install all dependencies
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy source code (and all other relevant files)
COPY --chown=node:node src ./src

# Build code
RUN yarn build


# Run-time stage
FROM node:14.4.0-alpine

# Set non-root user and expose port 8080
USER node
EXPOSE 8080

WORKDIR /home/node/app

# Copy dependency information and install production-only dependencies
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Copy results from previous stage
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```
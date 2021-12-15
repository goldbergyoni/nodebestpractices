# npm 대신 node 커맨드를 사용한 부트스트랩 컨테이너

## 한 문단 설명

우리는 포크들이 그들의 앱을 `CMD 'npm start'`를 이용해 시작하는 코드 예시들을 보는 것에 익숙하지만 이것은 좋은 방식이 아니다. `npm` 바이너리는 시그널들을 너의 앱으로 전송하지 않을 것이며, 이에 우아한 종료(graceful shutdown)는 되지 않는다(참고 [/sections/docker/graceful-shutdown.md]). 당신이 child-process를 사용한다면 예기치 못한 종료의 경우 이들은 너의 호스트에 좀비프로세스를 남긴 채 올바르게 제거되지 않을 것이다. `npm start`는 또한 아무런 이익이 없는 잉여 프로세스를 가지게 될 것이다. 너의 앱을 시작하려면 `CMD ['node', 'server.js']`를 사용하라. 또한 너의 앱이 child-process를 낳는다면 시작할때 `TINI`를 사용하여라.

### 코드 예시 - 노드를 이용한 부트스래핑

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```

### 코드 예시 - Tiny를 엔드포인트로 사용하기

```dockerfile
FROM node:12-slim AS build

# 차일드-프로세스를 사용중이라면 Tini를 추가하여라
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### 안티패턴들

Using npm start

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# 그렇게 하지 마!
CMD "npm start"
```

단일 스트링(single string)에서 node를 사용하는 것은 bash/ash 쉘 프로세스가 너의 커맨드를 실행하도록 할 것이다. 그것은 `npm`을 사용하는 것과 마찬가지이다.

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# 그렇게 하지 마라, 이것은 bash를 시작시킬 것이다
CMD "node server.js"
```

npm으로 시작하여, 여기 프로세스 트리가 있다:

```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```

저러한 엑스트라 프로세스에는 이점이 없다.

소스들:

https://maximorlov.com/process-signals-inside-docker-containers/

https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals

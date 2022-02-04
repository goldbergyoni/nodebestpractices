# npm을 사용하지 않고 노드 커맨드를 사용하여 컨테이너 시작하기

## One paragraph explainer

우리는 종종 `CMD 'npm start'`로 시작하는 코드 예시들을 본적이 있다. 이건 좋지않은 예제다. npm은 당신의 app에 신호를 전달하지 않아서 안정적인 종료를 하지 못하게 한다. 만약 당신이 자식 프로세스를 사용한다면, 프로세스들은 예상치 못한 종료에 적절하게 종료되지 않는다, 당신의 호스트에 좀비 프로세스가 남게 된다. `npm start` 또한 추가적인 프로세스를 가진 결과를 남긴다. `CMD ['node','server.js']`를 사용하여 시작하자. 만약 자식 프로세스가 존재한다면 `TINI`를 추가하자.

### Code example - Bootsraping using Node

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```

### Code example - Using Tiny as entrypoint

```dockerfile
FROM node:12-slim AS build

# Add Tini if using child-processes
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### Antipatterns

Using npm start

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# don’t do that!
CMD "npm start"
```

Using node in a single string will start a bash/ash shell process to execute your command. That is almost the same as using `npm`

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# don’t do that, it will start bash
CMD "node server.js"
```

Starting with npm, here’s the process tree:

```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```

There is no advantage to those two extra processes.

Sources:

https://maximorlov.com/process-signals-inside-docker-containers/

https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals

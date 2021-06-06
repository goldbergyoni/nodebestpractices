# 使用node命令而不是npm启动容器

## 一段解释

我们经常看到开发者使用`CMD 'npm start'`启动app的代码示例。这是一个不好的做法。因为`npm`不会向您的app转发信号（signals），这将阻止应用优雅关闭（graceful shutdown），（见[/sections/docker/graceful-shutdown.md]）。如果您使用了子进程（child-processes），在意外关闭时则无法正确清理它们，将僵尸进程留在主机上。同时，`npm start`也导致无意义的增加一个额外进程。使用`CMD ['node','server.js']`启动您的应用吧。假如您的应用使用了子进程（child-processes），也可以使用`TINI`作为入口（entrypoint）。

### 代码示例 - 启动Node

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```


### 代码示例 - 使用Tiny作为入口（ENTRYPOINT）

```dockerfile
FROM node:12-slim AS build

# 使用子进程（child-processes）的情况下，添加Tini
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### 反模式

使用npm start
```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# 不要这么做!
CMD "npm start"
```

在同一字符串命令里面使用node，将启动一个bash/ash脚本进程去执行您的命令。它和使用`npm`的效果类似。

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# 不要这么做，它将启动bash
CMD "node server.js"
```

使用npm启动，这里是进程树：
```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```
额外的两个进程没有任何好处。

来源:


https://maximorlov.com/process-signals-inside-docker-containers/


https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
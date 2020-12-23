# npm の代わりに node コマンドを使用した Bootstrap コンテナ

## 一段落説明

`CMD 'npm start'`を使ってアプリを起動するコード例をよく見かけます。 This is a bad practice. The `npm` binary will not forward signals to your app which prevents graceful shutdown (see [/sections/docker/graceful-shutdown.md]). If you are using Child-processes they won’t be cleaned up correctly in case of unexpected shutdown, leaving zombie processes on your host. `npm start` also results in having an extra process for no benefit. To start you app use `CMD ['node','server.js']`. If your app spawns child-processes also use `TINI` as an entrypoint.

### コード例 - node を使用した Bootsraping

```dockerfile

FROM node:12-slim AS build


WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```


### コード例 - エントリーポイントとしての Tiny の使用

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

### アンチパターン

Using npm start
```dockerfile

FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# これはしないでください!
CMD "npm start"
```

Using node in a single string will start a bash/ash shell process to execute your command. That is almost the same as using `npm`

```dockerfile

FROM node:12-slim AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# これはしないでください、バッシングが始まります
CMD "node server.js"
```

npm でスタートすると、プロセスツリーは以下のようになります。:
```
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```
その2つの余分なプロセスには何のメリットもありません。

ソース:


https://maximorlov.com/process-signals-inside-docker-containers/


https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals

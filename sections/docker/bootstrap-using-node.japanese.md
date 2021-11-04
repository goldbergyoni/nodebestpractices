# npm の代わりに node コマンドを使用した Bootstrap コンテナ

## 一段落説明

`CMD 'npm start'` を使ってアプリを起動するコード例をよく見かけます。これは悪いプラクティスです。`npm` バイナリはシグナルをアプリに転送しないので、グレースフルシャットダウンができません ( [/sections/docker/graceful-shutdown.japanese.md] を参照してください)。子プロセスを使用している場合、予期せぬシャットダウンの場合には正しくクリーンアップされず、ホスト上にゾンビプロセスが残ってしまいます。また、`npm start` を実行しても、何のメリットもなく余分なプロセスが発生してしまいます。アプリを起動するには、`CMD ['node','server.js’]` を使用します。アプリが子プロセスを生成する場合は、`TINI` をエントリポイントとして使用します。

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

# 子プロセスを使用している場合は、Tini を追加します。
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

# これはしないでください、bash が起動されます。
CMD "node server.js"
```

npm でスタートすると、プロセスツリーは以下のようになります。:
```console
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

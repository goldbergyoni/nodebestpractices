# ビルド時のシークレットをクリーンアウトし、引数にシークレットを含めることを避ける

<br/><br/>

### 一段落説明

Docker イメージは単なるファイルの束ではなく、ビルド時に何が起こったかを明らかにする、複数のレイヤーを持っています。非常によくあるシナリオとして、開発者がビルド時に（主にプライベートレジストリのために）npm トークンを必要とする場面があります - ビルド時の引数としてこのトークンの値を渡すことでは、安全性を保つことはできません。無垢で安全のように思われますが、このトークン値は、開発者のマシン上の Docker 履歴や Docker レジストリ、CI から取り出すことができます。トークンを取得した攻撃者は、組織のプライベート npm レジストリに書き込むことができるようになります。これには、より安全な代替手段が2つあります: 申し分ない手段として、ビルド時にのみファイルをマウントすることができる、Docker の --secret 機能（2020年7月時点で実験的機能）を利用する方法があります。2つ目の方法は引数と共にマルチステージビルドを行う方法で、ビルドを行い、そしてプロダクションに必要なファイルのみをコピーするというものです。この2つ目の方法はイメージと一緒にシークレットをデプロイしてしまうことはありませんが、ローカルの Docker 履歴には現れます - これは多くの組織にとって十分に安全であると考えられています。


<br/><br/>

### コード例 – Docker mounted シークレットを利用する（実験的機能だが、安定している）

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# 残りの部分がここに来ます
```

</details>

<br/><br/>

### コード例 – マルチステージビルドを利用してセキュアにビルドする

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist

RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc


FROM build as prod

COPY --from=build /dist /dist
CMD ["node", "index.js"]

# ARG と .npmrc は最終的なイメージには現れませんが、Docker デーモンの un-tagged イメージリストから見つけることができます - これらを忘れずに削除してください
```

</details>

<br/><br/>

### コード例（アンチパターン） – ビルド時の引数を利用する

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist
RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

# .npmrc を同じ copy コマンド内で削除するとレイヤー内には保存されませんが、イメージ履歴から見つけることができます

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### ブログ引用: "These secrets aren’t saved in the final Docker"（これらのシークレットは最終的な Docker イメージに保存されません）

ブログ [Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ) より:

> In November 2018 Docker 18.09 introduced a new --secret flag for docker build. This allows us to pass secrets from a file to our Docker builds. These secrets aren’t saved in the final Docker image, any intermediate images, or the image commit history. With build secrets, you can now securely build Docker images with private npm packages without build arguments and multi-stage builds.

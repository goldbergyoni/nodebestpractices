# 開発依存性の除去

<br/><br/>

### 一段落説明

Dev-Dependencies は、コンテナへの攻撃面 (つまり潜在的なセキュリティ上の弱点) とコンテナサイズを大幅に増加させます。例として、最も影響力のある npm のセキュリティ侵害のいくつかは、[eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes) のような devDependencies や、[nodeemon が使用していた event-stream](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/) のような Dev-Dependencies に由来しています。これらの理由から、最終的に本番環境に出荷されるイメージは安全で最小限のものでなければなりません。npm install を `--production` で実行するのは素晴らしいスタートですが、新鮮なインストールとロックファイルの存在を保証する `npm ci` を実行するとさらに安全になります。ローカルキャッシュを削除することで、さらに数十 MB 削ることができます。devDependencies を使ってコンテナ内でテストやデバッグをする必要がある場合がよくあります - その場合、[multi stage builds](./multi_stage_builds.japanese.md) は、異なる依存関係のセットを持ち、最終的には本番用の依存関係だけを持つのに役立ちます。

<br/><br/>

### コード例 – 本番環境向けのインストール

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# 残りはここに来ます
```

</details>

<br/><br/>

### コード例 – マルチステージビルドを使用した本番環境向けのインストール

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:14.8.0-alpine AS build

COPY --chown=node:node package.json package-lock.json ./
# ✅ セーフインストール
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build


# ランタイムステージ
FROM node:14.8.0-alpine

COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# ✅ 開発パッケージをクリーンにする
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
```

</details>


<br/><br/>

### アンチパターン　コード例 – すべての依存関係を1つのステージの dockerfile にインストールする

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# 以下2つのミスがあります: dev の依存関係のインストールをし、npm インストール後にキャッシュを削除していません
RUN npm install

# The rest comes here
```

</details>

<br/><br/>

### ブログ引用: "npm ci is also more strict than a regular install(npm ci は通常のインストールよりも厳格です)"

[npm documentation](https://docs.npmjs.com/cli/ci.html) より

> このコマンドは npm-install と似ていますが、テストプラットフォームや継続的インテグレーション、デプロイメントなどの自動化された環境や、依存関係をクリーンにインストールしたい状況での使用を想定しています。ユーザー指向の機能をスキップすることで、通常の npm インストールよりも大幅に高速になります。また、通常のインストールよりも厳格で、ほとんどの npm ユーザのローカル環境がインクリメンタルにインストールされていることによるエラーや不整合を検出するのに役立ちます。

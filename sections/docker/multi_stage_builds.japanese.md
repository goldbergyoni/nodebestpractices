# マルチステージビルドを使用する

### 一段落説明

マルチステージビルドでは、利用可能なバイナリや公開されている環境変数、さらには基礎となるOSなど、ビルドとランタイム固有の環境の詳細を分離することができます。Dockerfile を複数のステージに分割することで、アプリケーションの実行に本当に必要なものだけをリリースすることができるので、最終的なイメージやコンテナのサイズを小さくすることができます。ビルド段階でのみ必要となるツール、例えば TypeScript CLI のような開発依存のツールを含める必要があることもあるでしょう。これらのツールはビルド段階でインストールし、最終的な出力のみ実行段階で使用することができます。これは、いくつかの依存関係がコピーオーバーされないため、イメージが縮小されることを意味します。また、実行時には存在してはいけない API キーや特定のサービスとの通信に使われるシークレットなどの環境変数をビルド中に公開しなければならないかもしれません([ビルド時のシークレットを避ける](./avoid-build-time-secrets.japanese.md) を参照してください。) 最終ステージでは、ビルドフォルダのようなビルド済みのリソースや本番環境専用の依存関係 (これは後のステップで取得することもできます) をコピーすることができます。

### 例

以下のようなディレクトリ構造を想像してみましょう。

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

[.dockerignore](./docker-ignore.japanese.md) では、アプリケーションのビルドや実行に必要のないファイルをすでにフィルタリングしています。

```
# 既存の node_modules をコピーしないで、自分たちで取得します。
node_modules

# ドキュメントは大きいので、Docker イメージには必要ありません。
docs
```

#### 複数のステージがある Dockerfile

Docker は継続的インテグレーション環境で使用されることが多いので、`npm install` ではなく `npm ci` コマンドを使用することをお勧めします。package-lock.json ファイルで指定されたバージョンのみを使用することで、より速く、より厳密になり、矛盾を減らすことができます。詳細は [こちら](https://docs.npmjs.com/cli/ci.html#description) を参照してください。この例ではパッケージマネージャとして yarn を使用していますが、`npm ci` と同等のものは `yarn install --frozen-lockfile` [command](https://classic.yarnpkg.com/en/docs/cli/install/) です。

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


FROM node:14.4.0

USER node
EXPOSE 8080

# 前のステージの結果をコピー
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### 複数のステージと異なるベースイメージを持つ Dockerfile

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


# ランタイム用に最小のベースイメージを使用
FROM node:14.4.0-alpine

USER node
EXPOSE 8080

# 前のステージの結果をコピー
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### 複数のステージと異なるベースイメージを持つフル Dockerfile

私たちの Dockerfile には2つのフェーズが含まれています: 1つ目のフェーズは、フル機能を備えた Node.js の Docker イメージを使ってアプリケーションを構築するためのものです。２つ目のフェーズは、最小限の Alpine イメージに基づいて、アプリケーションを実行するためのものです。ビルドされたファイルのみを第二段階にコピーし、本番環境の依存関係をインストールします。

```dockerfile
# フル機能の Node.js ベースのイメージでスタート
FROM node:14.4.0 AS build

USER node
WORKDIR /home/node/app

# 依存関係情報をコピーし、すべての依存関係をインストール
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# ソースコード（およびその他すべての関連ファイル）をコピー
COPY --chown=node:node src ./src

# コードのビルド
RUN yarn build


# ランタイムステージ
FROM node:14.4.0-alpine

# 非 root ユーザを設定し、ポート 8080 を公開
USER node
EXPOSE 8080

WORKDIR /home/node/app

# 依存関係情報をコピーして、本番環境のみの依存関係をインストール
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# 前のステージの結果をコピー
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```

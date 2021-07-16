# キャッシュを活用してビルド時間を短縮する

## 一段落説明

Docker イメージはレイヤーの組み合わせであり、Dockerfile 内の各指示はそれぞれレイヤーを作成します。もし指示が同じであるか、`COPY` や `ADD` の利用が同じであれば、docker デーモンはビルド間でそれらのレイヤーを再利用することができます。⚠️ キャッシュが特定のレイヤーで利用できなかった場合は、それ以降のすべてのレイヤーも無効になります。そのため、順番が重要なのです。Dockerfile を正しくレイアウトすることは、ビルドにおいて可変となっている部分の数を減らすために非常に重要です; あまり更新されない処理は Dockerfile の上の方に記述し、更新が多い処理（アプリケーションのコードなど）は下の方に記述するべきです。また、時間のかかるオペレーションをトリガーする指示は、（docker イメージをビルドするたびに変更されない限り）本当に必要なときにのみ実行されるように、上部に近い位置に配置するべきです。正しく行えば、ほぼ瞬時にキャッシュから Docker イメージ全体をリビルドすることができます。

![Docker layers](../../assets/images/docker_layers_schema.png)

* jessgreb01 による [Digging into Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612) から画像引用*

### ルール

#### 毎回変わるラベルの使用を避ける

もし Dockerfile の上部にビルド番号を含むラベルを記述している場合、毎回のビルドでキャッシュが無効化されてしまいます。

```Dockerfile
# ファイルの先頭
FROM node:10.22.0-alpine3.11 as builder

# ここでラベルの指定をしないでください！
LABEL build_number="483"

#... Dockerfile の残りの部分がここにきます
```

#### 良い .dockerignore ファイルを持つ

[**参照: docker ignore の重要性について**](./docker-ignore.md)

docker ignore ファイルは、テスト結果レポートやログ、一時ファイルなど、キャッシュのロジックを壊す可能性のあるファイルのコピーを回避します。

#### 「system」パッケージを最初にインストールする

使用するすべてのシステムパッケージが入ったベース Docker イメージを作成することをおすすめします。もし`apt` や `yum`、`apk` などを利用してパッケージインストールする必要が **本当に** あるのであれば、最初の指示にすべきです。Node アプリケーションをビルドするのに毎回 make や gcc、g++ を再インストールしたくはないでしょう。
**プロダクションアプリケーションなので、便宜のためだけにパッケージをインストールしてはいけません。**

#### まず最初に、package.json と lockfile を追加するだけにする

```Dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
```

lockfile と package.json はあまり頻繁に変更されません。それらを最初にコピーしておくことで、`npm install` ステップをキャッシュすることができ、貴重な時間を節約できます。

### その後、ファイルをコピーしてビルドステップを実行する（必要なら）

```Dockerfile
COPY . .
RUN npm run build
```

## 例

### OS 依存関係を必要とする node_modules の基本的な例

```Dockerfile
# node イメージバージョンのエイリアスを作成する
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci --production
COPY . "./"


FROM node as app

USER node
WORKDIR /app
COPY --from=builder /app/ "./"
RUN npm prune --production

CMD ["node", "dist/server.js"]
```


### ビルドステップの例（例えば、typescript を利用する場合）

```Dockerfile
# node イメージバージョンのエイリアスを作成する
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci
COPY . .
RUN npm run build


FROM node as app

USER node
WORKDIR /app
# 必要なファイルのみをコピーする
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist dist
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

## 便利なリンク

Docker ドキュメント: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache

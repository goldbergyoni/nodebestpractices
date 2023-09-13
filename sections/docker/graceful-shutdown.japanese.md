# グレースフルにシャットダウンする

<br/><br/>

### 一段落説明

Kubernetes のような Docker 化されたランタイムでは、コンテナは頻繁に生まれては死にます。これはエラーが発生したときだけでなく、コンテナの再配置や新しいバージョンへの置き換えなどの正当な理由でも起こります。これは、30秒の猶予期間を設けてプロセスに通知（SIGTERM シグナル）を送ることで達成されます。これは、アプリが進行中のリクエストやクリーンアップリソースをタイムリーに処理していることを確認するために、開発者に課題を課します。そうでなければ、何千人もの悲しいユーザーがレスポンスを得ることができません。実装的には、シャットダウンコードは進行中のすべてのリクエストが洗い流されるまで待機し、その後でリソースをクリーンアップします。言うのは簡単ですが、実際にはいくつかの部分をオーケストレーションする必要があります: ロードバランサーにアプリがそれ以上のリクエストを提供する準備ができていないことを伝え（ヘルスチェックで）、既存のリクエストが完了するのを待ち、新しいリクエストを処理しないようにし、リソースをクリーンアップし、最後に死ぬ前に有用な情報をログに記録します。キープアライブ接続を使用している場合は、クライアントにも新しい接続を確立するように通知する必要があります - [Stoppable](https://github.com/hunterloftis/stoppable) のようなライブラリはこれを実現するのに非常に役立ちます。

<br/><br/>


### コード例 – Node.js をルートプロセスとして配置することで、コードにシグナルを渡すことができます（[bootstrap using node](./bootstrap-using-node.japanese.md) を参照してください）。

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# ビルドロジックはここ

CMD ["node", "index.js"]
#この行は Node.js をルートプロセス(PID1)にします。

```

</details>

<br/><br/>

### コード例 – Tiny プロセスマネージャを使用してノードにシグナルを転送する

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# ビルドロジックはここ

ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini", "--"]

CMD ["node", "index.js"]
#これで Node は PID1 として動作する TINI のサブプロセスを実行します。

```

</details>

<br/><br/>

### アンチパターン　コード例 – npm スクリプトを使ってプロセスを初期化する

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

# ビルドロジックはここ

CMD ["npm", "start"]
#これで、Node は npm のサブプロセスを実行してシグナルを受信しなくなりました。

```

</details>

<br/><br/>

### 例 - シャットダウンフェーズ

ブログ [Rising Stack](https://blog.risingstack.com/graceful-shutdown-node-js-kubernetes/)　より

![alt text](../../assets/images/Kubernetes-graceful-shutdown-flowchart.png "The shutdown phases")

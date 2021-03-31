# 非 root ユーザとして Node.js を実行する

### 一段落説明

「最小権限の原則」によれば、ユーザ/プロセスは必要な情報やリソースにだけアクセスできるようにしなければならない。攻撃者にルートアクセスを与えることは、他のサービスにトラフィックをルーティングしたりするような、ありとあらゆる悪意のあるアイデアを試せる環境を与えてしまうことになります。実際には、ほとんどの Node.js アプリケーションは root アクセスを必要とせず、そのような特権とともに実行することはありません。しかし、root ユーザを使わなければならない 2 つのシナリオがあります:

- 特権ポート（例：80番ポート）へのアクセスを得るために、Node.js を root として実行する
- Docker コンテナはデフォルトで root として実行します（！）。Node.js ウェブアプリケーションは非特権ポートをリッスンし、受け付けるトラフィックを 80 番ポートから Node.js アプリケーションにリダイレクトするために nginx のようなリバースプロキシを利用することが推奨されます。Docker イメージをビルドする際は、安全性の高いアプリケーションは代理の非 root ユーザでコンテナを実行するべきです。多くの Docker クラスタ（例：Swarm、Kubernetes）は宣言的にセキュリティコンテキストを設定することが可能です。

### コード例 - 非 root ユーザとして Docker イメージを構築する

```dockerfile
FROM node:latest

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br/><br/>

### ブログ引用: "By default, Docker runs container as root"（デフォルトでは、Docker は root でコンテナを実行します）

[eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user) による docker-node リポジトリより:
> デフォルトでは、Docker はコンテナを root で実行しますが、コンテナ内部ではセキュリティ上の問題が発生する可能性があります。可能な限り、非特権ユーザとしてコンテナを実行したいと思うでしょう。そのために、node イメージは node ユーザを提供しています。よって、Docker イメージは次のようにして node ユーザとして実行することができます: "-u 'node'"

<br/><br/>

### ブログ引用: "The attacker will have total control over your machine"（攻撃者はマシンのすべての権限を得るでしょう）

[Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/) のブログ Don't run Node.js as root より:
> 実際、もし root でサーバを稼働させていて、コードの脆弱性からハッキングされた場合、攻撃者はマシンのすべての権限を得るでしょう。これは、潜在的に攻撃者がディスク全体を削除したり、さらに悪いことを行うことができるということを意味します。一方で、一般ユーザーの権限でサーバを実行していた場合、攻撃者はそれらの権限に制限されます。

<br/><br/>

### ブログ引用: "If you need to run your application on port 80 or 443, you can do port forwarding"（80 番ポートもしくは 443 番ポートでアプリケーションを実行する必要がある場合は、ポートフォワーディングが利用できます）

[Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce) によるブログ Developing Secure Node.js Applications — A Broad Guide より:
> Node.js を絶対に root で実行しないでください。Node.js を root として実行すると、攻撃者が何らかの形でアプリケーションの制御権を得た場合に、最悪の事態を招くことになります。このシナリオでは、攻撃者は root 権限も取得してしまい、大惨事になる可能性があります。アプリケーションを 80 番や 443 番ポートで実行する必要がある場合には、iptables を利用してポートフォワーディングするか、nginx や apache のような、80 番 や 443 番ポートからアプリケーションへリクエストをルーティングしてくれるフロントエンドプロキシを配置してください。。

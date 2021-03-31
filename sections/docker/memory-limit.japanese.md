# Docker と v8 の両方を使ってメモリ制限を設定する

<br/><br/>

### 一段落説明

メモリ制限はプロセス/コンテナに許容されるメモリ使用量の最大値を伝えます - この数を超えるリクエストや使用はプロセスを強制終了させます ( OOMKill )。これを適用することは、一人の市民がジュースを一人で飲み干すことなく、他のコンポーネントを飢えさせないようにするための素晴らしいプラクティスになります。メモリ制限はまた、ランタイムがコンテナを適切なインスタンスに配置することを可能にします - 300MBのメモリが利用可能なインスタンスに500MBを消費するコンテナを配置すると失敗につながります。2つの異なるオプションでこの制限を設定することができます: V8 フラグ( --max-old-space-size )と Docker ランタイムですが、どちらも絶対に必要です。正しい健全性の判断をするためのより広い視野を持っているので、常に Docker ランタイムの制限を設定するようにしてください。この制限があると、ランタイムはどのようにスケールしてより多くのリソースを作成するかが分かります。また、いつクラッシュするかについても思慮深い判断を下すことができます - コンテナがメモリ要求の短いバーストを持っていて、ホスティングインスタンスがこれをサポートすることができる場合、Docker はコンテナを生きたままにしておきます。最後に、Docker を使って、Ops のエキスパートはメモリスワップのように考慮に入れることができる様々なプロダクションメモリの設定を設定することができます。これだけでは十分ではありません - v8 の --max-old-space-size を設定しないと、JavaScript ランタイムは限界に近づいたときにガベージコレクションをプッシュしませんし、ホスト環境の50～60％しか利用していないときにもクラッシュしてしまいます。従って、v8 の制限値を Docker のメモリ制限値の75～100％に設定します。

<br/><br/>

### コード例 – Docker でのメモリ制限

<details>
<summary><strong>Bash</strong></summary>

```bash
docker run --memory 512m my-node-app
```

</details>

<br/><br/>

### コード例 – Kubernetes と v8 でのメモリ制限

<details>
<summary><strong>Kubernetes deployment yaml</strong></summary>

```yml
apiVersion: v1
kind: Pod
metadata:
  name: my-node-app
spec:
  containers:
  - name: my-node-app
    image: my-node-app
    resources:
      requests:
        memory: "400Mi"
      limits:
        memory: "500Mi"
    command: ["node index.js --max-old-space-size=350"]
```

</details>

<br/><br/>

### Kubernetes のドキュメント: "If you do not specify a memory limit(メモリ制限を指定しない場合)"

[K8S ドキュメント](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/) より

> コンテナは使用するメモリ量に上限はありません。コンテナは、それが実行されているノードで利用可能なすべてのメモリを使用することができ、その結果、OOM Killer を呼び出すことができます。さらに、OOM Killer の場合、リソースの制限がないコンテナは kill される可能性が高くなります。

<br/><br/>

### Docker のドキュメント: "it throws an OOME and starts killing processes(OOME を投げてプロセスを殺し始めます)"

[Docker 公式ドキュメント](https://docs.docker.com/config/containers/resource_constraints/) より

> 実行中のコンテナがホストマシンのメモリを消費しすぎないようにすることが重要です。Linux ホストでは、カーネルが重要なシステム機能を実行するのに十分なメモリがないことを検出すると、OOME (Out Of Memory Exception) をスローし、メモリを解放するためにプロセスの kill を開始します。

<br/><br/>

### Node.js のドキュメント: "V8 will spend more time on garbage collection(V8 はガベージコレクションにより時間を費やすことになります)"

[Node.js 公式ドキュメント](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes) より

> V8 の古いメモリセクションの最大メモリサイズを設定します。メモリ消費量が限界に近づくと、V8 は未使用のメモリを解放するためにガベージコレクションに多くの時間を費やします。メモリが2GBのマシンでは、これを1536 (1.5GB)に設定して、他の用途のためにメモリを残し、スワップを避けることを検討してください。

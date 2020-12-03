# NODE_ENV = production を設定する

<br/><br/>

### 一段落説明

プロセス環境変数は、実行中のプログラムで利用できるキーと値のペアのセットで、通常は設定の目的で利用できます。任意の変数を使うことができますが、Node は NODE_ENV と呼ばれる変数を使って、現在本番環境であるかどうかのフラグを立てる慣習を推奨しています。この決定により、コンポーネントは開発中にキャッシングを無効にしたり、冗長なログ文を出力したりするなど、より良い診断を提供することができます。Chef、Puppet、CloudFormation、その他の最新のデプロイツールは、デプロイ時に環境変数を設定することをサポートしています。

<br/><br/>

### コード例: 環境変数 NODE_ENV の設定と読み込み

```shell script
// ノードプロセスを起動する前に bash で環境変数を設定する
$ NODE_ENV=development
$ node
```

```javascript
// コードを使って環境変数を読み込む
if (process.env.NODE_ENV === 'production')
    useCaching = true;
```

<br/><br/>

### 他のブロガーが言っていること

ブログ [dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/) より:
> ...Node.js では、現在のモードを設定するために node_env という変数を使用する慣習があります。実際には NODE_ENV を読み込んで、設定されていない場合は「development」にデフォルトで設定されていることがわかります。NODE_ENV を本番環境に設定することで、Node.js が処理できるリクエスト数が約3分の2に跳ね上がり、CPU の使用率はわずかに低下することが明らかになっています。*これだけは強調しておきます: NODE_ENV を本番環境に設定すると、アプリケーションが3倍速くなります！*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>

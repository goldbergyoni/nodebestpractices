# 設定ファイルからシークレットを抽出する、もしくはパッケージを利用して暗号化する

### 一段落説明

Node.js アプリケーションにキーやシークレットを渡すための最も一般的で安全な方法は、実行環境における環境変数にそれらの値を格納することです。環境変数に設定することで、それらの値にグローバルオブジェクトである `process.env` オブジェクトからアクセスできるようになります。
アプリケーションが全ての設定をコードから正しく抽出できているかどうかのリトマステストとしては、クレデンシャルを晒すことなくコードをいつでもオープンソースにすることができるかどうか、というものがあります。

シークレットをソースコントロールの中に格納しなければならない稀な状況の場合においては、[cryptr](https://www.npmjs.com/package/cryptr) のようなパッケージを使用することで、平文ではなく暗号化された形で保存することができます。

[git-secrets](https://github.com/awslabs/git-secrets) のように、git commit においてコミットやコミットメッセージを監査して、誤ってシークレットを追加されていないかをチェックするツールが多く存在します。

### コード例

環境変数に格納された API キーにアクセスする:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

`cryptr` を死傷して暗号化されたシークレットを保存する:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // ソースコントロールに保存されていない、復号化された文字列を出力します
```

### 他のブロガーが言っていること

> 環境変数は、コードを変更することなくデプロイごとに簡単に変更できる。設定ファイルとは異なり、誤ってリポジトリにチェックインされる可能性はほとんどない。また、独自形式の設定ファイルや Java System Properties など他の設定の仕組みとは異なり、環境変数は言語や OS に依存しない標準である。[The 12 factor app より](https://12factor.net/ja/config)

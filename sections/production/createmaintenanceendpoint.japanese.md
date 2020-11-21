# メンテナンスエンドポイントの作成

<br/><br/>

### 一段落説明

メンテナンスエンドポイントは、アプリのコードの一部であり、その目的は、ops/プロダクションチームがメンテナンス機能を監視し、公開するために使用する高度に安全な HTTP API です。 例えば、プロセスのヒープダンプ（メモリスナップショット）を返したり、メモリリークがあるかどうかを報告したり、REPL コマンドを直接実行したりすることができます。このエンドポイントは、従来の DevOps ツール（監視製品、ログなど）では特定の情報を収集できない場合や、そのようなツールを購入/インストールしないことを選択した場合に必要となります。黄金律は、生産の監視と維持のために専門的な外部ツールを使用することですが、これらは通常、より堅牢で正確です。とはいえ、一般的なツールでは、Node やアプリに固有の情報を抽出できない場合もあるでしょう。– 例えば、GC がサイクルを完了した瞬間にメモリスナップショットを生成したい場合は、以下のようになります – いくつかの npm ライブラリは喜んでこの機能を実行してくれますが、一般的なモニタリングツールはこの機能を見逃してしまう可能性があります。DDOS 攻撃の標的になる可能性があるため、このエンドポイントを非公開にし、管理者のみがアクセスできるようにしておくことが重要です。

<br/><br/>

### コード例: コードによるヒープダンプの生成

```javascript
const heapdump = require('heapdump');

// リクエストが許可されているかどうかを確認する
function isAuthorized(req) {
    // ...
}

router.get('/ops/heapdump', (req, res, next) => {
    if (!isAuthorized(req)) {
        return res.status(403).send('You are not authorized!');
    }

    logger.info('About to generate heapdump');

    heapdump.writeSnapshot((err, filename) => {
        console.log('heapdump file is ready to be sent to the caller', filename);
        fs.readFile(filename, 'utf-8', (err, data) => {
            res.end(data);
        });
    });
});
```

<br/><br/>

### 推奨リソース

[Node.js アプリの制作準備 (スライド)](http://naugtur.pl/pres3/node2prod)

▶ [Node.js アプリの制作準備 (ビデオ)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Node.js アプリの制作準備](/assets/images/createmaintenanceendpoint1.png "Node.js アプリの制作準備")

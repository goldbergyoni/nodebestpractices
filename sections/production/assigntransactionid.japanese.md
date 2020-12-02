# 各ログ文に 'TransactionId' を割り当てる

<br/><br/>

### 一段落説明

典型的なログは、すべてのコンポーネントとリクエストからのエントリーの倉庫です。不審なラインやエラーが検出されると、同じ特定のフローに属する他のラインをマッチさせるのが面倒になります(例えば、ユーザの ”John” が何かを買おうとしたなど)。これは、リクエスト/トランザクションが複数のコンピュータにまたがる可能性がある場合、マイクロサービスの環境ではさらに重要で困難になります。これに対処するには、同じリクエストからのすべてのエントリに一意のトランザクション識別子の値を割り当てることで、1つの行を検出するときに、 ID をコピーして、類似のトランザクション ID を持つすべての行を検索できるようにします。しかし、1つのスレッドがすべてのリクエストを処理するために使用されるので、これを実現するためには Node では簡単ではありません - リクエストレベルでデータをグループ化できるライブラリを使用することを考えてください – 次のスライドのコード例を参照してください。他のマイクロサービスを呼び出す際には、同じコンテキストを保つために、”x-transaction-id” のような HTTP ヘッダを使ってトランザクション ID を渡してください。

<br/><br/>

### コード例: 典型的な Express の設定

```javascript
// 新しいリクエストを受信したときに、新しい独立したコンテキストを開始し、トランザクション ID を設定します。次の例は、npm ライブラリ continuation-local-storage を使用してリクエストを分離しています。

const { createNamespace } = require('continuation-local-storage');
const session = createNamespace('my session');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'some unique GUID');
    someService.getById(req.params.id);
    logger.info('Starting now to get something by id');
});

// これで、他のサービスやコンポーネントは、コンテクスト、リクエストごと、データごとにアクセスできるようになりました。
class someService {
    getById(id) {
        logger.info('Starting to get something by id');
        // other logic comes here
    }
}

// ロガーは、同じリクエストからのエントリが同じ値を持つように、各エントリにトランザクション ID を追加することができるようになりました。
class logger {
    info (message) {
        console.log(`${message} ${session.get('transactionId')}`);
    }
}
```

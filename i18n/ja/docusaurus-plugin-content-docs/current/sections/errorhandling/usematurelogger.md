# エラーの可視性を高めるために成熟したロガーを使用する

### 一段落説明

私たちはみな console.log を愛用していますが、明らかに [Winston][winston]（非常に人気）や [Pino][pino]（パフォーマンスにフォーカスした新参者）のような、評価が高く永続的なロガーが真面目なプロジェクトにおいて必須となります。一連のプラクティスやツール群は、より素早くエラーについての考察を行うことに役立ちます ー（１）ログレベルを使い分ける（debug、info、error）、（２）ロギングする際は、JSON オブジェクトとしてコンテキスト情報を提供する（下記の例を参照）、（３）（多くのロガーに組み込まれている）ログクエリ API やログビューアソフトウェアを使用して、ログの確認やフィルタリングを行う、（４）Splunk のような運用ツールを使用して、運用チームのためにログステートメントを公開し、まとめる

[winston]: https://www.npmjs.com/package/winston
[pino]: https://www.npmjs.com/package/pino

### コード例 – Winston 実践

```javascript
// 集中化されたロガーオブジェクト
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

// ロガーを使用したカスタムコード
logger.log('info', 'Test Log Message with some parameter %s', 'some parameter', { anything: 'This is metadata' });
```

### コード例 – ログフォルダをクエリする（エントリを検索する）

```javascript
const options = {
  from: Date.now() - 24 * 60 * 60 * 1000,
  until: new Date(),
  limit: 10,
  start: 0,
  order: 'desc',
  fields: ['message']
};

// 1日前から今にかけてのログを見つける
winston.query(options, (err, results) => {
  // results を受け取ってコールバックを実行する
});
```

### ブログ引用: "Logger Requirements"（ロガーの要件）

ブログ Strong Loop より

> （ロガーのための）いくつかの要件を確認してみましょう:
1. 各ログ行にタイムスタンプをつけましょう。これは非常に自明です ー 各ログエントリがいつ発生したのかをはっきりさせることができるはずです。
2. ロギングフォーマットは、機械だけでなく人間にとっても容易に解釈できるものであるべきです。
3. 複数の設定可能な送信先ストリームを許可しましょう。例えば、あるファイルにトレースログを書き込み、一方でエラーが発生した際は同様のファイルに書き込むと同時にエラーファイルにも書き込み、そして e メールを送信するかもしれません。

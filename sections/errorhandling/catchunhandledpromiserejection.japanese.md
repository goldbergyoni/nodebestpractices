# 未処理の reject された promise を捕捉する

<br/><br/>

### 一段落説明

一般的に、モダンな Node.js/Express アプリケーションのコードの多くは、promise の中で実行されます ー .then ハンドラ、コールバック関数、あるいは catch ブロックのいずれかです。驚くべきことに、開発者が忘れずに .catch 節を追加しない限り、promise 内で投げられた例外は uncaughtException イベントハンドラで処理されず、消えてなくなります。最近の Node.js のバージョンでは、未処理の reject があった場合に警告メッセージを表示するようになりましたが、これは何かがうまくいっていないときに気づくのに役立つかもしれませんが、明らかに適切なエラー処理の方法ではありません。単純な解決策は、各 promise チェインコール内に .catch 節を追加することを絶対に忘れず、集中化されたエラーハンドラに処理をリダイレクトすることです。しかしながら、開発者の規律だけでエラー処理の方針を構築することは、いささか脆いものです。したがって、潔いフォールバックを利用すること、そして `process.on('unhandledRejection', callback)` をサブスクライブすることを強く推奨します ー これは、全ての promise エラーが、ローカルで処理されていなくても、確実に処理されることを保証します。

<br/><br/>

### コード例: これらのエラーはどのエラーハンドラにも捕捉されません（unhandledRejection を除く）

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // このエラーはただ消えるだけです
  if(johnSnow.isAlive === false)
      throw new Error('ahhhh');
});
```

<br/><br/>

### コード例: 未解決の promise や reject された promise を捕捉する

<details>
<summary><strong>Javascript</strong></summary>

```javascript
process.on('unhandledRejection', (reason, p) => {
  // 未処理の promise の reject を捕捉しました
  // すでに未処理のエラーのためのフォールバックハンドラ（下記参照）を持っているので、
  // 投げて、処理させましょう
  throw reason;
});

process.on('uncaughtException', (error) => {
  // 未処理のエラーを受信したので、処理を行い、再起動が必要かどうかを判断してください
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
process.on('unhandledRejection', (reason: string, p: Promise<any>) => {
  // 未処理の promise の reject を捕捉しました
  // すでに未処理のエラーのためのフォールバックハンドラ（下記参照）を持っているので、
  // 投げて、処理させましょう
  throw reason;
});

process.on('uncaughtException', (error: Error) => {
  // 未処理のエラーを受信したので、処理を行い、再起動が必要かどうかを判断してください
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});
```
</details>

<br/><br/>

### ブログ引用: "If you can make a mistake, at some point you will"（ミスをすることができるなら、いつかするでしょう）

ブログ James Nelson より

> 理解度をテストしてみましょう。次のうち、コンソールにエラーを表示するのはどれだと思いますか？

```javascript
Promise.resolve('promised value').then(() => {
  throw new Error('error');
});

Promise.reject('error value').catch(() => {
  throw new Error('error');
});

new Promise((resolve, reject) => {
  throw new Error('error');
});
```

> あなたのことはわかりませんが、私の答えは、これらは全てエラーを表示すると思う、というものです。しかしながら、実際には、たくさんのモダンな JavaScript 環境はどのエラーも表示しません。人間であることの問題は、ミスをすることができるなら、いつかミスをするだろう、ということです。このことを念頭に置いていれば、ミスの影響ができるだけ小さくなるように設計をするべきであることが明らかであり、そしてこれはエラーの破棄ではなく、エラー処理をデフォルトで行うこと意味します。

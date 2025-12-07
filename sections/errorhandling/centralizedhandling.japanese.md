# エラー処理を一元化し、ミドウェア内で処理をしない

### 一段落説明

エラー処理専用のオブジェクトがないと、不適切な処理が原因となって重要なエラーが発見されない可能性が高くなります。エラー処理オブジェクトは、エラーを可視化する責任をもちます。例えば、整形されたロガーに書き込んだり、[Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), [Raygun](https://raygun.com/) のようなモニタリングサービスにイベントを送信したりするといったことなどです。[Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers) のようなほとんどの Web フレームワークは、エラー処理ミドルウェア機構を提供しています。典型的なエラー処理の流れは以下のようになります。いくつかのモジュールがエラーを投げる -> API router がエラーを捕捉する -> エラー捕捉に責任を持つミドルウェア（例: Express、KOA）にエラーを伝搬する -> 一元化されているエラーハンドラが呼び出される -> ミドルウェアは、補足したエラーが信頼されていないエラーかどうか（操作上のエラーでないか）が伝えられているので、アプリを直ちに再起動することができるようになっています。Express ミドルウェア内でエラー処理をすることは一般的ですが、実際には間違っていることに注意してください ー そうしてしまうと、ウェブ以外のインタフェースで投げられたエラーをカバーすることができません。

### コード例 – 典型的なエラーフロー

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// DAL（データアクセスレイヤー）, ここではエラー処理を行いません
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// API route コード, 同期エラーと非同期エラーの両方を捕捉し、ミドルウェアへ進みます
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// エラー処理ミドルウェア、一元化されたエラーハンドラに処理を委譲します
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// DAL（データアクセスレイヤー）, ここではエラー処理を行いません
DB.addDocument(newCustomer, (error: Error, result: Result) => {
  if (error)
    throw new Error('Great error explanation comes here', other useful parameters)
});

// API route コード, 同期エラーと非同期エラーの両方を捕捉し、ミドルウェアへ進みます
try {
  customerService.addNew(req.body).then((result: Result) => {
    res.status(200).json(result);
  }).catch((error: Error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// エラー処理ミドルウェア、一元化されたエラーハンドラに処理を委譲します
app.use(async (err: Error, req: Request, res: Response, next: NextFunction) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```
</details>


### コード例 – 専用オブジェクト内でのエラー処理

<details>
<summary><strong>Javascript</strong></summary>

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async (err) => {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };
}

export const handler = new ErrorHandler();
```
</details>


### コード例 – アンチパターン: ミドルウェア内でのエラー処理

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// エラーを直接的に処理するミドルウェア、Cron ジョブやテストエラーは誰が処理するのでしょうか？
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>


<details>
<summary><strong>Typescript</strong></summary>

```typescript
// エラーを直接的に処理するミドルウェア、Cron ジョブやテストエラーは誰が処理するのでしょうか？
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Critical error occured', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```
</details>

### ブログ引用: "Sometimes lower levels can’t do anything useful except propagate the error to their caller"（時に下位レベルはエラーを呼び出し元に伝搬すること以外に役に立ちません）

ブログ Joyent（“Node.js error handling”というキーワードで 1 位）より

> …スタックの複数レベルで同じエラーを処理することになるかもしれません。これは、呼び出し元にエラーを伝搬させ、その呼び出し元が伝搬されたエラーをその呼び出し元に伝搬させる、ということ繰り返す以外に、下位レベルの呼び出し元が役立つことをできない場合に起こります。多くの場合、操作を再試行するのか、ユーザーにエラーを報告するのか、はたまた何か他のことをするのか、最上位レベルの呼び出し元だけが適切な対応が何であるのかを知っています。しかし、これはすべてのエラーを単一のトップレベルのコールバックに報告しようとするべきだということを意味しているわけではありません。なぜならコールバック自身が、どのようなコンテキストでエラーが発生したのかを知ることができないためです。…

### ブログ引用: "Handling each err individually would result in tremendous duplication"（各エラーを個別に処理することは途方も無い重複をもたらします）

ブログ JS Recipes（“Node.js error handling”というキーワードで 17 位）より

> ……Hackathon Starter の api.js コントローラーだけでも、79 個以上のエラーオブジェクトが存在しています。それぞれのエラーを個別に処理することは、途方も無い量のコードの重複をもたらします。次にできる最も優れた方法は、すべてのエラー処理ロジックを Express のミドルウェアに委譲することです。…

### ブログ引用: "HTTP errors have no place in your database code"（データベースコードに HTTP エラーの居場所はありません）

ブログ Daily JS（“Node.js error handling”というキーワードで 14 位）より

> ……エラーオブジェクトには便利なプロパティを設定するべきですが、設定したプロパティは一貫して使用して下さい。また、ストリームをまたいではいけません: データベースコードには HTTP エラーの居場所はありません。ブラウザ開発者にとっては、Ajax のエラーは、サーバーと通信をしているコードの中にありますが、Mustache テンプレートを処理するコードの中には無いのです。…

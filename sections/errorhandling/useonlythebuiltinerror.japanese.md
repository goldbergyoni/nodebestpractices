# 組み込みのエラーオブジェクトのみを使用する

### 一段落説明

多くのコードフローの選択肢（EventEmitter、コールバック、Promises など）を持っているという JavaScript の寛容な性質が、開発者のエラー発生方法に大きな差をもたらしています - 文字列を使用する人もいれば、独自のカスタム型を定義する人もいます。Node.js の組み込みエラーオブジェクトを使用することは、コード内やサードパーティのライブラリ間において一貫性を保つことを助け、さらにスタックトレースのような重要な情報を保持します。通常、例外を発生させるときは、エラー名や関連する HTTP エラーコードといった追加のコンテキスト属性情報を付与することがベストプラクティスです。この一貫性保持やプラクティスを達成するために、エラーオブジェクトを追加プロパティで拡張することを考えますが、やりすぎには注意が必要です。一般的に、すべてのアプリケーションレベルのエラーに対して、AppError という形で一度だけ組み込みのエラーオブジェクトを拡張し、異なる種類のエラーを区別するために必要なデータを引数として渡すことをおすすめします。何回も（DbError、HttpError のようにそれぞれのケースに応じて）エラーオブジェクトを拡張する必要はありません。以下のコード例を参考にしてください。

### コード例 – 正しい方法

```javascript
// 同期または非同期に、典型的な関数からエラーを投げる
if(!productToAdd)
    throw new Error('How can I add new product when no value provided?');

// EventEmitter からエラーを「投げる」
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// Promise からエラーを「投げる」
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error('Product already exists!');
    }
  } catch (err) {
    // ...
  }
}
```

### コード例 – アンチパターン

```javascript
// 文字列を投げると、スタックトレース情報やその他の重要なデータプロパティを失います
if(!productToAdd)
    throw ('How can I add new product when no value provided?');
```

### コード例 – より優れた方法

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Node のエラーから派生した、集中化されたエラーオブジェクト
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...他のプロパティがここで割り当てられます
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// 例外を投げるクライアント
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Node のエラーから派生した、集中化されたエラーオブジェクト
export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // プロトタイプチェーンを復元する

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// 例外を投げるクライアント
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

*TypeScript における `Object.setPrototypeOf` の説明: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### ブログ引用: "I don’t see the value in having lots of different types"（たくさんの型を持つことに価値があるとは思えません）

ブログ Ben Nadel（「Node.js error object」というキーワードで 5 位）より

>…「個人的には、（ただ一つのエラーオブジェクト型を持つことに比べて）たくさんのエラーオブジェクト型を持つことに価値があると思えません - JavaScript は言語として、コンストラクタベースのエラー捕捉には適していないようです。このように、オブジェクトのプロパティで区別することは、コンストラクタの型で区別するよりはるかに簡単です…

### ブログ引用: "A string is not an error"（文字列はエラーではありません）

ブログ devthought.com（「Node.js error object」というキーワードで 6 位）より

> …エラーの結果ではなく文字列を渡すことは、モジュール間の相互運用性を低下させます。`instanceof` エラーチェックを実施しているかもしれない、またはエラーについてより詳しく知りたい API との決まりごとを破壊します。エラーオブジェクトは、コンストラクタに渡されたメッセージを保持する以外にも、モダンな JavaScript エンジンにおいては非常に興味深いプロパティを持ってます…

### ブログ引用: "Inheriting from Error doesn’t add too much value"（Error からの継承はあまり付加価値がありません）

ブログ machadogj より

> …Error クラスが抱える一つの問題は、拡張することが単純ではないということです。もちろん、Error クラスを継承して、HttpError や DbError といった独自のエラークラスを作成することも可能です。しかしながら、手間もかかりますし、型を使って何かをしない限りは（AppError といった形で一度だけ拡張することに比べて）あまり付加価値がありません。ただメッセージを加えて内部エラーを保持したいときもあれば、パラメータでエラーを拡張したい場合もあるでしょう…

### ブログ引用: "All JavaScript and System errors raised by Node.js inherit from Error"（Node.js で発生する全ての JavaScript エラーおよびシステムエラーは Error を継承しています）

Node.js 公式ドキュメントより

> …Node.js で発生する全ての JavaScript エラーおよびシステムエラーは、標準 JavaScript Error クラスを継承しているか、そのインスタンスとなっており、少なくともその標準クラスにおいて利用可能なプロパティが提供されることは保証されています。一般的な JavaScript エラーオブジェクトは、エラーが発生した原因の特定の状況を示しません。エラーオブジェクトは、エラーがインスタンス化されたコード内の箇所を詳細に示す「スタックトレース」をキャプチャし、エラーについてのテキスト説明を提供することができます。システムや JavaScript のエラーを含む、Node.js において作成されるすべてのエラーは、Error クラスのインスタンスであるか、クラスを継承したものとなるでしょう…

# 操作上のエラーとプログラマーのエラーを区別する

### 一段落説明

操作上のエラーとプログラマーのエラーという 2 つのエラーを区別することは、アプリケーションのダウンタイムを最小化し、とんでもないバグを避ける手助けになります: 操作上のエラーは、発生したことおよびその影響を理解できるエラー状態のことを指します ー 例えば、接続の問題が原因となってある HTTP サービスに対するクエリが失敗した状況などです。一方で、プログラマーのエラーは、エラーがなぜ起こったのか、そしてどこで発生したのかわからないエラー状態のことを指します ー これは、あるコードが未定義の値を参照している場合や、DB コネクションプールがメモリをリークしている場合などがあります。操作上のエラーは比較的処理が簡単です ー 通常、エラーをロギングするだけで十分です。プログラマーのエラーが発生した場合は厄介であり、アプリケーションが不安定な状況に陥り、すぐさま再起動するしかありません。

### コード例 – 操作上のエラーとしてマークする

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// 操作上のエラーとしてエラーオブジェクトをマークする例
const myError = new Error('How can I add new product when no value provided?');
myError.isOperational = true;

// もしくは、集中化されたエラーファクトリーを使っている場合の例（他の例は「組み込みのエラーオブジェクトのみを使用する」のセクションをご覧ください）
class AppError {
  constructor (commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
};

throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// 集中化されたエラーファクトリーを使っている場合の例（他の例は「組み込みのエラーオブジェクトのみを使用する」のセクションをご覧ください）
export class AppError extends Error {
  public readonly commonType: string;
  public readonly isOperational: boolean;

  constructor(commonType: string, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // プロトタイプチェーンを復元する

    this.commonType = commonType;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// 操作上のエラーとしてエラーオブジェクトをマーク (true の部分)
throw new AppError(errorManagement.commonErrors.InvalidInput, 'Describe here what happened', true);

```
</details>

### ブログ引用: "Programmer errors are bugs in the program"（プログラマーのエラーはプログラムにおけるバグです）

ブログ Joyent（“Node.js error handling”というキーワードで 1 位）より

 > …プログラマーのエラーから復帰する最も良い方法は直ちにクラッシュさせることです。プログラムがクラッシュしたときに自動的に再起動してくれるリスターターを備えた、プログラムを動かすべきです。リスターターを備えている場合、一時的なプログラマーのエラーに直面した際に、安定したサービスへと復旧させるための一番手っ取り早い方法は、クラッシュさせることになります。

### ブログ引用: "No safe way to leave without creating some undefined brittle state"（不明瞭で不安定な状態を作り出すことなしに、安全に中断する方法はありません）

Node.js 公式ドキュメントより

 > …JavaScript における throw の挙動の性質上、参照をリークさせたり、不明瞭で不安定な状態を作り出したりすることなく、安全に「中断したところから再開する」方法はほぼありません。投げられたエラーに対応する最も安全な方法は、プロセスをシャットダウンすることです。もちろん、通常のウェブサーバーでは、多くのコネクションがオープン状態になっているかもしれず、エラーが他の誰かによって引き起こされたからといって、それらを急にシャットダウンすることは合理的ではありません。より良いアプローチは、エラーの引き金となったリクエストにエラーレスポンスを送り、他のリクエストは通常の時間内に終了するようにして、そのワーカーにおいて新しいリクエストの受信を停止することです。

### ブログ引用: "Otherwise you risk the state of your application"（さもなければアプリケーションの状態を危険にさらします）

ブログ debugable.com（“Node.js uncaught exception”というキーワードで 3 位）より

 > …ですから、自分が本当に何をしているのか理解していない限り、「uncaughtException」例外イベント受信後は直ちにサービスを再起動すべきです。そうしないと、アプリケーションの状態やサードパーティのライブラリの状態が一貫性を失い、あらゆる種類のとんでもないバグにつながる危険性があります。

### ブログ引用: "There are three schools of thoughts on error handling"（エラー処理について、3 つの考え方があります）

ブログ JS Recipes より

> …エラー処理について、主に以下の3つの考え方があります:
1. アプリケーションをクラッシュさせ、再起動させる
2. 起こりうるすべてのエラーを処理し、決してクラッシュさせない
3. 上記 2 つをバランスよく取り入れたアプローチ

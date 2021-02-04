# 見ず知らずの事象が起きたら潔くプロセスを終了する

### 一段落説明

コード内のどこかで、エラーハンドラオブジェクトがエラー発生時にどのように処理するかを決定することに責任を負っているとき ー エラーが信頼されている場合は（すなわち、操作上のエラーのことです。ベストプラクティス 2.3 の説明を参照してください）、ログファイルに書き込むだけで十分かもしれません。不明なエラーの場合は、複雑になります ー 一部のコンポーネントが不完全な状態にあり、後に来るリクエストは失敗の対象となることを意味しています。例えば、シングルトンでステートフルなトークン発行者サービスが例外を投げて、保持していた状態を消失したと仮定しましょう ー これは、予期せぬ挙動をしたり、全てのリクエストが失敗する原因となっているかもしれません。このようなケースの場合は、プロセスを kill して、（Forever や PM2 などの）「再起動ツール」を利用してクリーンな状態からやり直してください。

### コード例: クラッシュするかどうか決定する

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// 開発者は既知のエラーに対して error.isOperational=true とマークをつけることを仮定しています。ベストプラクティス 2.3 を参照してください
process.on('uncaughtException', (error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// エラー処理関連のロジックをカプセル化した、集中化されたエラーハンドラ
function errorHandler() {
  this.handleError = (error) => {
    return logger.logError(error)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = (error) => {
    return error.isOperational;
  }
}
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// 開発者は既知のエラーに対して error.isOperational=true とマークをつけることを仮定しています。ベストプラクティス 2.3 を参照してください
process.on('uncaughtException', (error: Error) => {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
    process.exit(1)
});

// Node のエラーオブジェクトを継承した、集中化されたエラーオブジェクト
export class AppError extends Error {
  public readonly isOperational: boolean;

  constructor(description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}

// エラー処理関連のロジックをカプセル化した、集中化されたエラーハンドラ
class ErrorHandler {
  public async handleError(err: Error): Promise<void> {
    await logger.logError(err);
    await sendMailToAdminIfCritical();
    await saveInOpsQueueIfCritical();
    await determineIfOperationalError();
  };

  public isTrustedError(error: Error) {
    if (error instanceof AppError) {
      return error.isOperational;
    }
    return false;
  }
}

export const handler = new ErrorHandler();
```
</details>

### ブログ引用: "The best way is to crash"（最善の方法はクラッシュすることです）

ブログ Joyent より

> …プログラマーのエラーから復帰する最も良い方法は直ちにクラッシュさせることです。プログラムがクラッシュしたときに自動的に再起動してくれるリスターターを備えた、プログラムを動かすべきです。リスターターを備えている場合、一時的なプログラマーのエラーに直面した際に、安定したサービスへと復旧させるための一番手っ取り早い方法は、クラッシュさせることになります。

### ブログ引用: "There are three schools of thoughts on error handling"（エラー処理について、3 つの考え方があります）

ブログ JS Recipes より

> …エラー処理について、主に以下の3つの考え方があります:
1. アプリケーションをクラッシュさせ、再起動させる
2. 起こりうるすべてのエラーを処理し、決してクラッシュさせない
3. 上記 2 つをバランスよく取り入れたアプローチ

### ブログ引用: "No safe way to leave without creating some undefined brittle state"（不明瞭で不安定な状態を作り出すことなしに、安全に中断する方法はありません）

Node.js 公式ドキュメントより

> …JavaScript における throw の挙動の性質上、参照をリークさせたり、不明瞭で不安定な状態を作り出したりすることなく、安全に「中断したところから再開する」方法はほぼありません。投げられたエラーに対応する最も安全な方法は、プロセスをシャットダウンすることです。もちろん、通常のウェブサーバーでは、多くのコネクションがオープン状態になっているかもしれず、エラーが他の誰かによって引き起こされたからといって、それらを急にシャットダウンすることは合理的ではありません。より良いアプローチは、エラーの引き金となったリクエストにエラーレスポンスを送り、他のリクエストは通常の時間内に終了するようにして、そのワーカーにおいて新しいリクエストの受信を停止することです。

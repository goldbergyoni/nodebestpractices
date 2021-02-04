# 専用のライブラリを利用して引数の検証を高速に行う

### 一段落説明

隠れたバグを避けるためには、引数をチェックすること、そして高速に失敗することが重要であると誰もが知っています（下記のアンチパターンコード例を参照）。もし知らないのであれば、明示的プログラミングと防御的プログラミングについて読んでみてください。実際には、コーディングをするのが面倒なので避けがちですが（例えば、メールアドレスや日時のようなフィールドを持つ階層的な JSON オブジェクトの検証をすることを考えてみてください）、Joi や Validator のようなライブラリはこの面倒なタスクを簡単にしてくれます。

### Wikipedia「防御的プログラミング」

防御的プログラミング（Defensive programming）は、ソフトウェアのバグや問題の数を減少させるという一般的な品質の観点において、ソフトウェアやソースコードを改善するためのアプローチです。ソースコードを理解しやすいものにすること ー コード監査で承認されるように、ソースコードは可読性が高く、わかりやすいものであるべきです。想定外の入力やユーザーアクションに対しても、ソフトウェアに予測可能な挙動をさせるべきです。

### コード例: 「Joi」を利用して複雑な JSON 形式の入力を検証する

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // アサーションがまず最初に来る
 Joi.assert(newMember, memberSchema); // もし検証が失敗したら例外を投げます
 // その他のロジックがここに来ます
}
```



### アンチパターン: 検証をしないと厄介なバグが発生する

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// もし discount が正の値なら、ユーザーを割引クーポンを発行するためにユーザーをリダイレクトさせましょう
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// discount パラメータを渡すのを忘れてしまいました。一体なぜユーザーは割引クーポン発行画面へリダイレクトされたのでしょうか？
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// もし discount が正の値なら、ユーザーを割引クーポンを発行するためにユーザーをリダイレクトさせましょう
function redirectToPrintDiscount(httpResponse: Response, member: Member, discount: number) {
  if (discount != 0) {
    httpResponse.redirect(`/discountPrintView/${member.id}`);
  }
}

redirectToPrintDiscount(httpResponse, someMember, -12);
// discount パラメータとして負の値を渡しました。一体なぜユーザーは割引クーポン発行画面へリダイレクトされたのでしょうか？
```
</details>

### ブログ引用: "You should throw these errors immediately"（エラーは直ちに投げるべきです）

ブログ Joyentより

> 悪化したケースとして、非同期関数を呼び出したもののコールバックを渡さなかった場合があります。プログラムは壊れていますし、デバッグに最適なのは少なくともスタックトレースを取得、理想的にはエラーが発生した地点のコアファイルを取得することなので、このようなエラーは直ちに投げるべきです。これを行うために、関数の開始時にすべての引数の型を検証することをおすすめします。

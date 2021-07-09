# 悪意のある RegEx がシングルスレッド実行をオーバーロードすることを防止する

### 一段落説明

正規表現の使用に内在するリスクは、テキストを解析して、与えられたパターンにマッチするかどうか確認するために必要な計算リソースです。シングルスレッドのイベントループが支配している Node.js プラットフォームでは、正規表現パターンを解決するような CPU 依存のオペレーションをアプリケーションを応答不能にしてしまいます。
可能な場合は RegEx の使用を避けるか、[validator.js](https://github.com/chriso/validator.js) のような専用ライブラリに処理を任せるか、あるいは [safe-regex](https://github.com/substack/safe-regex) を利用して RegEx パターンが安全かどうかチェックしてください。

[OWASP examples](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) における、脆弱な RegEx パターンの例:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### コード例 – Express フレームワークを利用して SSL/TLS を有効にする

```javascript
const saferegex = require('safe-regex');
const emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// emailRegex が ReDoS 攻撃に対して脆弱であるため、false を出力するべき
console.log(saferegex(emailRegex));

// 正規表現パターンを利用する代わりに、バリデータを使用してください:
const validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### 書籍引用: "A vulnerable Regular Expression is known as one which applies repetition"（脆弱な正規表現は、繰り返しを適用するものとして知られています）

Liran Tal による書籍 [Essential Node.js Security](https://leanpub.com/nodejssecurity) より:
> しばしば、プログラマーはユーザーから受け取った値入力が期待する条件に合致しているか検証するために RegEx を使用します。脆弱性のある正規表現は、繰り返されているキャプチャグループに対して繰り返しを適用するものとして知られており、マッチする文字列が、有効なマッチパターンのサフィックスとキャプチャグループにマッチしない文字で構成されています。

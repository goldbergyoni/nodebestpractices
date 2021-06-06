# 受信した JSON スキーマを検証する

### 一段落説明

検証とは、アプリケーションがどのようなペイロードを受け付けるかを明確にし、入力が期待する値からかけ離れている場合には素早く失敗することです。これにより、攻撃者が異なる構造、値、長さのペイロードを試すことができなくなり、攻撃対象を最小限に抑えることができます。実際には、DDoS（入力が十分に定義されていればコードが失敗する可能性は低い）や、安全でないでシリアライゼーション（Insecure Deserialization、JSON に驚きはありません）のような攻撃を防ぐことができます。バリデーションはコード化されたり、クラスや型（TypeScript や ES6 クラス）に依存したりすることができますが、コーディングなしに複雑なルールを宣言できたり、フロントエンドと期待する条件を共有できるため、コミュニティはいっそう JSON ベースのスキーマを好むようになってきているようです。JSON スキーマは、多くの npm ライブラリやツール（例：[jsonschema](https://www.npmjs.com/package/jsonschema)、[Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)）でサポートされている、急成長中の標準であり、[joi](https://www.npmjs.com/package/@hapi/joi) もまた、糖衣構文で非常に人気があります。一般的に、JSON 構文はすべての検証シナリオをカバーすることはできず、カスタムコードや [validator.js](https://github.com/chriso/validator.js/) のような、プリベークされた検証フレームワークが便利です。選択した構文にかからわず、できる限り早く検証を実施するようにしてください - 例えば、Express ミドルウェアを使用して、リクエストがルートハンドラに渡される前にリクエストボディを検証する、などです。

### 例 - JSON スキーマ検証ルール

```json
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "exclusiveMinimum": 0
        }
    },
    "required": ["id", "name", "price"]
}
```


### 例 - JSON スキーマを用いてエンティティを検証する

```javascript
const JSONValidator = require('jsonschema').Validator;

class Product {

  validate() {
    const v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //define JSON-Schema, see example above
  }
}

```

### 例 - ミドルウェアバリデータの使い方

```javascript
// このバリデータは、エンティティを得て検証し、body ペイロードの検証が失敗した場合には
// HTTP ステータス 400 （Bas Reqeust） を返す、総称的なミドルウェアです
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // ルートハンドラのコードがここにきます
});

```



### 他のブロガーが言っていること

ブログ [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview) より:
> アプリケーションのセキュリティにおいて、ユーザーの入力を検証することは最も重要なことの一つです。それを正しく行うことができない場合、コマンドインジェクションや SQL インジェクション、格納型クロスサイトスクリプティングといった広範囲の攻撃に、アプリケーションやユーザーをさらすことになります。
>
> ユーザーの入力を検証するために、あなたが選ぶことができる最高のライブラリの1つは joiです。joi は JavaScript オブジェクトのための、オブジェクトスキーマ記述言語であり、バリデータです。

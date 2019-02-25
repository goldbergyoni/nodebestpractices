# 验证传入的JSON schemas

### 一段解释

验证是关于我们的应用程序愿意接受什么有效负载的非常明确地说明, 如果输入偏离预期, 则会立即返回错误。这样可以最大限度地减少攻击者再尝试具有不同结构、值和长度的有效负载的表层攻击。实际上, 它可以防止像DDOS这样的攻击(当输入定义良好时，代码不可能失败)和不安全反序列化(JSON不包含任何其它字段)。尽管验证可以编码或依赖于类和类型(TypeScript，ES6类), 但社区似乎越来越喜欢基于JSON的架构, 因为这些架构允许在不编码的情况下声明复杂的规则, 并与前端分享期望。JSON-schema是一个新兴的标准, 由许多npm库和工具支持(例如[jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/))，[joi](https://www.npmjs.com/package/joi)由于易用的语法非常流行。通常, JSON语法不能涵盖所有验证场景，这样的话自定义代码，或者预先准备好的验证框架，比如[validator.js](https://github.com/chriso/validator.js/)可以派上用场。无论选择哪种语法, 都要确保尽早运行验证 - 例如, 通过使用Express中间件在请求传递到路由处理程序之前验证请求正文。

### 代码示例 - JSON-Schema验证规则

``` javascript
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


### 代码示例 - 使用JSON-Schema验证实体

``` javascript
const JSONValidator = require("jsonschema").Validator;

class Product {
  
  validate() {
    var v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //定义JSON-Schema, 见上面的示例
  }
}

```

### 代码示例 - 使用中间件验证

``` javascript
// 验证程序是一个通用中间件, 它获取验证的实体, 并在正文有效负载
// 验证失败时返回http状态400(错误请求)
router.post("/" , **validator(Product.validate)**, async (req, res, next) => {
    // route handling code goes here
});

```



### 其他博主说了什么

摘自博客[Gergely Nemeth](https://nemethgergely.com/nodejs-security-overview/):
> 当涉及到应用程序的安全性时，验证用户输入是最重要的事情之一。如果做不到这一点, 您的应用程序和用户可能会受到广泛的攻击, 包括命令注入，SQL注入或存储的跨站点脚本。<br/>


要验证用户输入，可以选择的最佳库之一是joi。joi是一种对象模式描述语言，也是javascript对象的验证器。 

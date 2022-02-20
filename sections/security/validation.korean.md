# 들어오는 JSON 스키마를 검사해라

### 한 문단 설명

발리데이션은 우리의 앱이 받고자하는 페이로드가 무엇인지 알아내는 일과 입력값이 예상과 벗어날 때 빠르게 실패처리하는 일에 있어 매우 명확해지는 것에 대한 것이다. 이에 공격자는 더이상 다른 구조, 값, 길이로 페이로드를 시도하지 못하게 되며 공격자의 입지는 좁아지게 된다. 실제로, 이는 DDOS와 불안정 역직렬화(Insecure Deserialization)와 같은 공격을 사전에 방지한다. (DDOS: 잘 정의된 입력값이 넘어오거나, Insecure Deserialization: 특이점이 없는 JSON이더라도 실패시킨다.)
발리데이션이 코딩될 수 있고 클래스와 타입들(TypeScript, Es6 클래스들)에 의존할 수 있다곤 하지만 커뮤니티의 여론은 코딩없이 복잡한 규칙들의 선언을 허용하며 프론트엔드와 기대되는결과를 공유할 수 있는 JSON기반의 스키마를 선호하는 것으로 보인다.
JSON-스키마 는 많은 npm 라이브러리와 툴들 (예. [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/))
이 지원하는 떠오르는 표준이다. [joi](https://www.npmjs.com/package/joi)역시 sweet syntax로 상당히 유명하다. 일반적으론 JSON구문은 모든 발리데이션 시나리오와 커스텀 코드 혹은 [validator.js](https://github.com/chriso/validator.js/)와 같이 사전 가공되는 유용한 발리데이션 프레임워크를 모두 커버하진 못한다. 정해진 구문에 상관 없이, 예를들어, 요청이 루트 핸들러로 넘어가기 전에 요청 바디값을 검사하는 익스프레스 미들웨어 사용을 통해 가능한 빠르게 발리데이션을 진행하라.

### 예시 - JSON-스키마 검사 규칙

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

### 예시 - JSON-스키마를 이용한 엔티티 검사

```javascript
const JSONValidator = require("jsonschema").Validator;

class Product {
  validate() {
    const v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //JSON-스키마의 정의, 위의 예를 보아라
  }
}
```

### 예시 - 미들웨어 발리데이터의 사용

```javascript
// 발리데이터는 엔티티를 갖는 일반적인 미들웨어이다. 이것은 검사해야하며 반환하는 데 주의가 필요하다.
// body 페이로드 검사 실패 시 HTTP 상태코드 400(잘못된 요청)
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // 라우트 핸들링 코드가 들어갈 자리이다
});

```

### 다른 블로거들이 말하길

다음의 블로그로 부터 [Gergely Nemeth](https://nemethgergely.com/nodejs-security-overview/):

> 유저 입력값을 발리데이팅하는 것은 애플리케이션 보안 관점에서 가장 중요한 문제 중 하나이다. 이를 올바르게 처리하는데 실패함은 애플리케이션과 유저 모두를 커맨드 삽입, SQL 삽입 혹은 저장된 cross-site scripting을 포함한 광범범위한 공격에 노출시키는 것과 같다.

Joi는 유저 입력값을 검사하기 위해 선택할 수 있는 최선의 라이브러리중 하나이다. Joi는 객체 스키마 description 언어이자 자바스크립트 객체의 발리데이터이다.

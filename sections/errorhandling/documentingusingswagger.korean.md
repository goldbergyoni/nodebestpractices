# 2.5 Swagger나 GraphQL을 사용하여 API 에러를 문서화하라

### 한문단 설명

REST API는 HTTP 상태 코드를 사용하여 결과를 반환한다. API 사용자는 API 스키마 뿐만 아니라 잠재적인 에러에 대해서도 알아야한다. 그러면 호출자가 에러를 잡고 기술적으로 처리할 수 있다. 예를 들어, 이미 고객 이름이 존재할 때(API가 새로운 유저를 등록한다고 가정) API 문서가 HTTP 409 상태가 반환된다고 미리 명시되어 있을 수 있으므로 호출자가 주어진 상황에 대해 상응하여 최상의 UX를 렌더링할 수 있다. Swagger는 온라인에서 쉽게 문서를 작성할 수 있는 도구 생태계를 제공하는 API문서의 스키마를 정의하는 표준입니다. 아래 화면 참조 

API 엔드포인트에 대해 GraphQL을 채택했다면, 스키마는 이미 ([사양에 설명된](https://facebook.github.io/graphql/June2018/#sec-Errors)) 것과 같은 에러와 클라이언트 측 도구에서 에러를 처리하는 방법에 대한 엄격한 보장이 포함되어 있다. 게다가, 주석 기반의 문서로 보완할 수도 있다.

### GraphQL 에러 예시

> 이 예제는 Start Wars API인 [SWAPI](https://graphql.org/swapi-graphql)를 사용한다.

```graphql
# id가 유효하지 않기 때문에 실패해야 한다.
{
  film(id: "1ZmlsbXM6MQ==") {
    title
  }
}
```

```json
{
  "errors": [
    {
      "message": "No entry in local cache for https://swapi.co/api/films/.../",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "film"
      ]
    }
  ],
  "data": {
    "film": null
  }
}
```

### 블로그 인용: "호출자에게 어떤 에러가 발생할지 알려줘야 한다"

Joyent 블로그에서 "Node.js 로깅" 키워드가 1위에 랭크했다.

 > 오류를 처리하는 방법에 대해 얘기했다. 하지만 새로운 함수를 작성할 때, 함수를 호출한 코드에 오류를 어떻게 전달할 것인가? 어떤 오류가 발생할지 모르거나 오류가 의미하는 것을 모른다면 우연한 경우를 제외하고는 프로그램이 정확할 수 없다. 그래서 새로운 함수를 작성하는 경우 호출자에게 어떤 오류가 발생할지와 의미를 알려줘야 한다.

### 유용한 도구: Swagger 온라인 문서 작성자

![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "API error handling")

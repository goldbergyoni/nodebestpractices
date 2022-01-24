# Test your middlewares in isolation

<br/><br/>

### One Paragraph Explainer

미들웨어 테스트는 시스템의 작은 부분을 차지하며 라이브 Express 서버가 필요하기 때문에 대부분 미들웨어 테스트를 회피합니다. 두 가지 이유 모두 틀렸습니다. 미들웨어는 작지만 요청의 전부 또는 대부분에 영향을 미치며 '{req,res}' JS 개체를 가져오는 순수 함수로 쉽게 테스트할 수 있습니다. 미들웨어 함수를 테스트하려면 해당 함수를 호출하고 {req,res}개 개체와의 상호 작용에 대해 [예를 들어 Sinon 사용](https://www.npmjs.com/package/sinon)))을 스파이하여 함수가 올바른 동작을 수행했는지 확인해야 합니다. 라이브러리 [node-controls-products](https://www.npmjs.com/package/node-mocks-http)는 더 나아가서 {req,res}개의 객체의 동작에 대한 스파이 활동과 함께 인자를 분석합니다. 예를 들어 res 개체에 설정된 http 상태가 예상과 일치하는지 여부를 주장할 수 있습니다(아래 예 참조).

<br/><br/>

### Code example: Testing middleware in isolation

```javascript
//the middleware we want to test
const unitUnderTest = require("./middleware");
const httpMocks = require("node-mocks-http");
//Jest syntax, equivalent to describe() & it() in Mocha
test("A request without authentication header, should return http status 403", () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/user/42",
    headers: {
      authentication: "",
    },
  });
  const response = httpMocks.createResponse();
  unitUnderTest(request, response);
  expect(response.statusCode).toBe(403);
});
```

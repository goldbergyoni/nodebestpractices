# 미들웨어들은 독립적으로 테스트하라.

<br/><br/>

### 한 문단 요약

많은 이들이 미들웨어가 시스템의 매우 작은 부분을 나타내며 동작하는 Express 서버를 요구하기 때문에 미들웨어 테스트를 피하려한다. 두 이유는 모두 잘못되었다. — 미들웨어들은 작지만 거의 모든 요청들에 영향을 끼치며, 테스트는 {req,res} 객체를 얻는 순수 함수들만으로도 쉽게 테스트가 가능하다. 미들웨어를 테스트하기 위해서는 요청을 호출하고, {req,res} 객체들이 올바른 방향으로 동작하고 있음을 확신시키는 함수와 함께 이루어지는 상호 작용을 (예를 들어 Sinon을 사용해서) 파악해야 한다. node-mock-http 과 같은 라이브러리는 더 나아가 {req, res} 객체들이 어떻게 동작하는지 파악하는 것과 함께 요소들을 고려한다. 예를 들어, 응답 객체에 지정되는 http 상태가 기대와 일치하는지를 확실시 한다. (아래 예제를 확인하자.)

<br/><br/>

### 코드 예제: 독립적으로 미들웨어를 테스트

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
      authentication: ""
    }
  });
  const response = httpMocks.createResponse();
  unitUnderTest(request, response);
  expect(response.statusCode).toBe(403);
});
```

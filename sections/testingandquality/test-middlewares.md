# Test your middlewares in isolation

<br/><br/>

### One Paragraph Explainer

Many avoid Middleware testing because they represent a small portion of the system and require a live Express server. Both reasons are wrong — Middlewares are small but affect all or most of the requests and can be tested easily as pure functions that get `{req,res}` JS objects. To test a middleware function one should just invoke it and spy ([using Sinon for example](https://www.npmjs.com/package/sinon)) on the interaction with the {req,res} objects to ensure the function performed the right action. The library [node-mock-http](https://www.npmjs.com/package/node-mocks-http) takes it even further and factors the {req,res} objects along with spying on their behavior. For example, it can assert whether the http status that was set on the res object matches the expectation (See example below)

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
      authentication: ""
    }
  });
  const response = httpMocks.createResponse();
  unitUnderTest(request, response);
  expect(response.statusCode).toBe(403);
});
```
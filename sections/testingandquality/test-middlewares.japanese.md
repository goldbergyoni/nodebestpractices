# ミドルウェアを分離してテストする

<br/><br/>

### 一段落説明

ミドルウェアはシステムのごく一部であり、Express を起動させる必要があるため、多くの人はミドルウェアのテストを避けます。しかし、どちらの理由も間違っています ー ミドルウェアは小さいですが、すべて、あるいはほとんどのリクエストに影響を及ぼすものであり、`{req, res}` という JS オブジェクトを取得する純粋な関数として簡単にテストできます。ミドルウェア関数をテストするためには、その関数を呼び出して、関数が正しく動作していることを確認するために、{req, res} オブジェクトとのやり取りを（[例えば Sinon を使用して](https://www.npmjs.com/package/sinon)）スパイするべきです。[node-mock-http](https://www.npmjs.com/package/node-mocks-http) というライブラリは、これをさらに発展させ、{req, res} オブジェクトの動作をスパイしながら、そのオブジェクトに要素付けします。例えば、res オブジェクトに設定された http ステータスが期待値と一致しているかどうかを判定することができます（下記の例を参照してください）。

<br/><br/>

### コード例: ミドルウェアを分離してテストする

```javascript
// テストしたいミドルウェア
const unitUnderTest = require("./middleware");
const httpMocks = require("node-mocks-http");
// Jest シンタックス、Mocha における describe() と it() と同様
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

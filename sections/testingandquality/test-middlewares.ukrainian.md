# Тестуйте свої middleware ізольовано

<br/><br/>

### Пояснення за один абзац

Багато хто уникає тестування Middleware, тому що вони представляють невелику частину системи і вимагають живого Express-сервера. Обидві причини помилкові — Middleware невеликі, але впливають на всі або більшість запитів і можуть бути легко протестовані як чисті функції, які отримують об'єкти `{req,res}` JS. Щоб протестувати middleware-функцію, потрібно просто викликати її і шпигувати ([використовуючи Sinon, наприклад](https://www.npmjs.com/package/sinon)) за взаємодією з об'єктами {req,res}, щоб переконатися, що функція виконала правильну дію. Бібліотека [node-mock-http](https://www.npmjs.com/package/node-mocks-http) йде ще далі і створює об'єкти {req,res} разом зі шпигуванням за їхньою поведінкою. Наприклад, вона може перевірити, чи http-статус, встановлений на об'єкті res, відповідає очікуванню (див. приклад нижче)

<br/><br/>

### Приклад коду: Тестування middleware ізольовано

```javascript
//middleware, який ми хочемо протестувати
const unitUnderTest = require("./middleware");
const httpMocks = require("node-mocks-http");
//Jest синтаксис, еквівалентний describe() & it() в Mocha
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


# Prueba tu middleware en aislamiento

<br/><br/>

### Párrafo de explicación

Muchos evitan las pruebas de Middleware porque representan una pequeña porción del sistema y requiere un servidor Express activo. Ambas razones están equivocada - Los Middlewares son pequeños, pero afectan todas o la mayoría de las peticiones y pueden ser probados fácilmente como funciones puras que reciben objetos JS `{req,res}`. Para probar una función Middleware uno solo necesita invocarla y espiar ([Usando Sinon por ejemplo](https://www.npmjs.com/package/sinon)) en la interacción con los objetos {req,res} para asegurar que la función realizó la acción correcta. La biblioteca [node-mock-http](https://www.npmjs.com/package/node-mocks-http) toma esto mas allá y considera los objetos {req,res} junto con espiar su comportamiento. Por ejemplo, puede verificar si que el estado de http que fue puesto en el objeto res coincide con la expectativa (Ver ejemplo abajo)

<br/><br/>

### Código de ejemplo: Probando middleware en aislamiento

```javascript
//el middleware que queremos probar
const unitUnderTest = require("./middleware");
const httpMocks = require("node-mocks-http");
//Sintaxis de Jest , equivalente a describe() & it() en Mocha
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

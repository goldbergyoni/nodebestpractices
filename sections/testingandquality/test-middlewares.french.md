# Testez vos middlewares de manière isolée

<br/><br/>

### Un paragraphe d'explication

Beaucoup évitent les tests de Middleware parce qu'ils représentent une petite partie du système et nécessitent un serveur Express en ligne. Les deux raisons sont fausses - les Middlewares sont petits mais affectent toutes ou la plupart des requêtes et peuvent être testés facilement comme de pures fonctions qui récupèrent des objets JS `{req, res}`. Pour tester une fonction d'un Middleware, il suffit de l'appeler et d'espionner ([en utilisant Sinon par exemple](https://www.npmjs.com/package/sinon)) l'interaction avec les objets {req, res} pour s'assurer que la fonction a effectué la bonne action. La bibliothèque [node-mock-http] (https://www.npmjs.com/package/node-mocks-http) va encore plus loin et prend en compte les objets {req, res} en même temps que l'espionnage de leur comportement. Par exemple, elle peut affirmer si le statut http qui a été défini sur l'objet res correspond à celui attendu (voir l'exemple ci-dessous).

<br/><br/>

### Code exemple : tester le middleware de manière isolée

```javascript
// le middleware que nous voulons tester
const unitUnderTest = require("./middleware")
const httpMocks = require("node-mocks-http");
// Syntaxe Jest, équivalante à describe() & it() dans Mocha
test("Une requête sans entête d'authentification, doit renvoyer le statut http 403", () => {
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
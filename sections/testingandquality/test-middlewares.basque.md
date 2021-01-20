# Probatu zure middlewareak eurak bakarrik

<br/><br/>

### Azalpen paragrafoa

Askok Middlewarearen probak alde batera uzten dituzte sistemaren zati txiki bat adierazten dute eta zuzeneko Express zerbitzari bat edukitzea eskatzen dute. Bi arrazoi hauek okerrak dira, Middlewareak txikiak dira baina eskaera guztietan edo gehienetan eragina dute eta `{req,res}` JS objektuak berreskuratzen dituzten funtzio puru gisa errez probatu ahal dira. Middlewareko funtzio bat probatzeko, norberak funtzioa bera deitu behar du eta {req,res} objektuekin dagoen elkarrekintza espiatu (spy) ([erabili Sinon adibide gisa](https://www.npmjs.com/package/sinon)), funtzioak ekintza zuzena egin duela ziurtatzeko. [node-mock-http](https://www.npmjs.com/package/node-mocks-http) liburutegia oraindik ere urrutiago doa eta {req,res} objektuak faktorizatzen ditu beraien jokaera espiatuz. Adibidez, res objektuan zehaztutako http estatus bat esperotako balioarekin bat datorren baieztatu dezake (Ikusi beheko adibidea)

<br/><br/>

### Kode adibidea: probatu zure middlewarea bera bakarrik

```javascript
//probatu nahi dugun middlewarea
const probapeanDagoenUnitatea = require("./middleware");
const httpMocks = require("node-mocks-http");
//Jest sintaxisa, Mochako describe() eta it()en baliokidea
test("Autentikazio goiburu gabeko eskaera, 403 http estatus bat bueltatu beharko luke", () => {
  const request = httpMocks.createRequest({
    method: "GET",
    url: "/user/42",
    headers: {
      authentication: ""
    }
  });
  const erantzuna = httpMocks.createResponse();
  probapeanDagoenUnitatea(request, response);
  expect(erantzuna.statusCode).toBe(403);
});
```

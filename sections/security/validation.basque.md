# Balidatu sarrerako JSON eskemak

### Azalpena

Balioztatzea zehaztea da, oso esplizitua izatea gure aplikazioak zer karga hartzeko gaitasuna duen eta zenbat denbora jarraituko duen lanean huts egin arte, itxaropenetatik aldentzen bada sarrera. Horrek erasotzaileen aukerak (surface) minimizatzen ditu ezin baitira saiatu egitura, balio eta luzera desberdinetako karga erabilgarririk probatzen. Praktikan, DDOS bezalako erasoak saihesten ditu (kodeak nekez huts egingo du sarrera ondo zehaztuta dagoenean) eta deserializazio ez segurua (JSONk ez du sorpresarik). Nahiz eta balioztatzea kodetu daitekeen edo hainbat balioztatze mota erabili (TypeScript, ES6 klaseak), badirudi komunitateak gero eta gustukoago dituela JSONen oinarritutako eskemak, arau konplexuak kodetu gabe deklaratzea ahalbidetzen dutelako eta itxaropenak partekatzen dituztelako interfazearekin. JSON-schema estandar berri bat da, npm liburutegi eta tresna askorekin bateragarria dena (adibidez, [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)); [joi](https://www.npmjs.com/package/@hapi/joi) ere oso ezaguna da eta sintaxi samurra du. Normalean JSON sintaxiak ezin die balioztatze eszenatoki guztiei aurre egin, eta, hori dela eta, oso baliagarriak dira kode pertsonalizatuak edo aldez aurretik prestatutako balioztatze esparruak, [validator.js](https://github.com/chriso/validator.js/) bezala. Aukeratutako sintaxia edozein dela ere, ziurtatu balioztatzea ahalik eta azkarren egikaritzen dela; adibidez, eskaera gorputza balioztatzen duen Express middlewarea erabiliz, eskaera ibilbidearen kudeatzaileari pasa aurretik.

### Adibidea: JSON-schema balioztatzeko arauak

```json
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "izenburua": "Produktua",
  "deskribapena": "Acme katalogoko produktu bat",
  "mota": "object",
  "ezaugarriak": {
    "izena": {
      "deskribapena": "Produktuaren izena",
      "mota": "string"
    },
    "prezioa": {
      "mota": "number",
      "minimoExklusiboa": 0
    }
  },
  "beharrezkoak": ["id", "izena", "prezioa"]
}
```

### Adibidea: JSON-schema erabiliz entitate bat balioztatzea

```javascript
const JSONValidator = require("jsonschema").Validator;

class Produktua {
  validate() {
    const v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //JSON-Schema definitu, begiratu hurrengo adibidea
  }
}
```

### Adibidea: middleware balioztatzailearen erabilera

```javascript
// Balioztatzailea middleware generiko bat da, balioztatu beharreko entitatea hartu eta bueltatu beharrekoaz arduratzen dena
// HTTP 400 estatusa (Bad Request) balioztatzeak huts egin beharko luke
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // bideen kuadeaketa kodea hemen doa
});

```

### Beste blogari batzuek diotena

[Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview) bloga:

> Zure aplikazioaren segurtasunari dagokionez, erabiltzaileen sarrera balioztatzea da egin behar dituzun gauzarik garrantzitsuenetako bat. Behar bezala egiten ez baduzu, zure aplikazioa eta erabiltzaileak eraso ugari izateko arriskuan egon daitezke, besteak beste, komando injekzioa, SQL injekzioa edo gordetako guneetako scriptak.<br/>

Erabiltzaileen sarrera balioztatzeko, joi da hauta dezakezun liburutegi onenetako bat. Joi objektuen eskemen deskribapen hizkuntza da eta JavaScript objektuen balioztatzailea.

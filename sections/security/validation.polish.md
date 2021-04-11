# Sprawdź poprawność przychodzących schematów JSON

### Wyjaśnienie jednym akapitem

Sprawdzanie poprawności polega na tym, aby bardzo jasno określić, jaki payload nasza aplikacja jest gotowa zaakceptować i szybko zawieść, jeśli dane wejściowe odbiegają od oczekiwań. Minimalizuje to powierzchnię atakujących, którzy nie mogą już wypróbowywać payloads o innej strukturze, wartościach i długości. Praktycznie zapobiega atakom takim jak DDOS (kod prawdopodobnie nie zawiedzie, gdy dane wejściowe są dobrze zdefiniowane) i Insecure Deserialization (JSON nie zawiera niespodzianek). Chociaż sprawdzanie poprawności można kodować lub polegać na klasach i typach (klasy TypeScript, ES6), społeczność wydaje się coraz bardziej lubić schematy oparte na JSON, ponieważ pozwalają one na deklarowanie złożonych reguł bez kodowania i dzielą się oczekiwaniami z interfejsem użytkownika. Schemat JSON to nowy standard, który jest obsługiwany przez wiele bibliotek i narzędzi npm (np. [Jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)), [joi](https://www.npmjs.com/package/joi) jest również bardzo popularny ze słodką składnią. Zazwyczaj składnia JSON nie może obejmować wszystkich scenariuszy sprawdzania poprawności i przydają się niestandardowe kody lub wstępnie przygotowane ramy sprawdzania poprawności, takie jak [validator.js](https://github.com/chriso/validator.js/). Bez względu na wybraną składnię upewnij się, aby uruchomić sprawdzanie poprawności tak wcześnie, jak to możliwe - na przykład, używając oprogramowania pośredniego Express, które sprawdza poprawność treści żądania przed przekazaniem żądania do procedury obsługi trasy

### Przykład - JSON-Schema validation rules

```json
{
    "$schema": "http://json-schema.org/draft-06/schema#",
    "title": "Product",
    "description": "A product from Acme's catalog",
    "type": "object",
    "properties": {
        "name": {
            "description": "Name of the product",
            "type": "string"
        },
        "price": {
            "type": "number",
            "exclusiveMinimum": 0
        }
    },
    "required": ["id", "name", "price"]
}
```


### Przykład - Validating an entity using JSON-Schema

```javascript
const JSONValidator = require('jsonschema').Validator;

class Product {
  
  validate() {
    const v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //define JSON-Schema, see example above
  }
}

```

### Przykład - Zastosowanie walidatora middleware

```javascript
// The validator is a generic middleware that gets the entity it should validate and takes care to return
// HTTP status 400 (Bad Request) should the body payload validation fail
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // route handling code goes here
});

```



### Co inni blogerzy mówią

Z bloga [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview):
> Validating user input is one of the most important things to do when it comes to the security of your application. Failing to do it correctly can open up your application and users to a wide range of attacks, including command injection, SQL injection or stored cross-site scripting.<br/>

Aby sprawdzić poprawność danych wprowadzanych przez użytkownika, jedną z najlepszych bibliotek, jaką możesz wybrać, jest joi. Joi jest językiem opisu i sprawdzania poprawności schematów obiektów dla obiektów JavaScript.

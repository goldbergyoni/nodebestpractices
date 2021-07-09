# Validate the incoming JSON schemas

### One Paragraph Explainer

Validation is about being very explicit on what payload our app is willing to accept and failing fast should the input deviate from the expectations. This minimizes the attacker's surface who can no longer try out payloads with a different structure, values and length. Practically it prevents attacks like DDOS (code is unlikely to fail when the input is well defined) and Insecure Deserialization (JSON contain no surprises). Though validation can be coded or relied upon classes and types (TypeScript, ES6 classes) the community seems to increasingly like JSON-based schemas as these allow declaring complex rules without coding and share the expectations with the frontend. JSON-schema is an emerging standard that is supported by many npm libraries and tools (e.g. [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)), [joi](https://www.npmjs.com/package/@hapi/joi) is also highly popular with sweet syntax. Typically JSON syntax can't cover all validation scenario and custom code or pre-baked validation frameworks like [validator.js](https://github.com/chriso/validator.js/) come in handy. Regardless of the chosen syntax, ensure to run the validation as early as possible - For example, by using Express middleware that validates the request body before the request is passed to the route handler

### Example - JSON-Schema validation rules

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


### Example - Validating an entity using JSON-Schema

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

### Example - Usage of middleware validator

```javascript
// The validator is a generic middleware that gets the entity it should validate and takes care to return
// HTTP status 400 (Bad Request) should the body payload validation fail
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // route handling code goes here
});

```



### What other bloggers say

From the blog [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview):
> Validating user input is one of the most important things to do when it comes to the security of your application. Failing to do it correctly can open up your application and users to a wide range of attacks, including command injection, SQL injection or stored cross-site scripting.<br/>

To validate user input, one of the best libraries you can pick is joi. Joi is an object schema description language and validator for JavaScript objects.

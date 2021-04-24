# Valide os esquemas de entrada JSON

### Explicação em um Parágrafo

A validação é sobre ser muito explícito em qual entrada nossa aplicação está disposta a aceitar e falhar rapidamente caso a entrada se desvie das expectativas. Isso minimiza a superfície de um invasor que não pode mais testar cargas com estrutura, valores e comprimento diferentes. Na pratica isso evita ataques como DDOS (é improvável que o código falhe quando a entrada é bem definida) e Deserialização Insegura (JSON não contém surpresas). Embora a validação possa ser codificada ou basear-se em classes e tipos (classes TypeScript, ES6), a comunidade parece gostar cada vez mais de esquemas baseados em JSON, pois eles permitem a declaração de regras complexas sem codificação e compartilham as expectativas com o frontend. O esquema JSON é um padrão emergente que é suportado por muitas bibliotecas e ferramentas npm (por exemplo [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)), [joi](https://www.npmjs.com/package/joi) também é altamente popular com uma bela sintaxe. Normalmente, a sintaxe JSON não pode abranger todos os cenários de validação e códigos personalizados ou estruturas de validação pré-criadas, como [validator.js](https://github.com/chriso/validator.js/) vêm a calhar. Independentemente da sintaxe escolhida, certifique-se de executar a validação o mais cedo possível - Por exemplo, usando o middleware Express que valida o corpo da solicitação antes que a solicitação seja passada para o manipulador de rota

### Exemplo - Regras de validação de JSON-Schema

``` javascript
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


### Exemplo - Validando uma entidade usando JSON-Schema

``` javascript
const JSONValidator = require("jsonschema").Validator;

class Product {
  
  validate() {
    var v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //defina um JSON-Schema, veja o exemplo acima
  }
}

```

### Exemplo - Uso de validador middleware

``` javascript
// O validador é um middleware genérico que obtém a entidade que deve validar e toma o cuidado de retornar
// Status HTTP 400 (Bad Request) caso a validação da carga útil do corpo falhe
router.post("/" , **validator(Product.validate)**, async (req, res, next) => {
    // código de manipulação de rota vai aqui
});

```



### O que Outros Blogueiros Dizem

Do blog [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview):
> Validar a entrada do usuário é uma das coisas mais importantes a fazer quando se trata da segurança do seu aplicativo. Não fazer isso corretamente pode abrir o aplicativo e os usuários para uma ampla variedade de ataques, incluindo injeção de comando, injeção de SQL ou scripts de sites cruzados armazenados.<br/>

Para validar a entrada do usuário, uma das melhores bibliotecas que você pode escolher é a joi. Joi é uma linguagem de descrição de esquemas de objeto e um validador para objetos JavaScript.

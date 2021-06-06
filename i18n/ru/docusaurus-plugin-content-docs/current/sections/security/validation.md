# Проверяйте входящие схемы JSON

### Объяснение в один абзац

Проверка заключается в том, чтобы очень четко определить, какую полезную нагрузку готово принять ваше приложение, и быстро провалиться, если входные данные отклоняются от ожиданий. Это минимизирует область действия атакующего, который больше не может испытывать полезные нагрузки с другой структурой, значениями и длиной. Практически это предотвращает такие атаки, как DDOS (код вряд ли потерпит неудачу, когда ввод правильно определен) и небезопасная десериализация (JSON не содержит сюрпризов). Хотя валидация может быть закодирована или основана на классах и типах (классы TypeScript, ES6), сообществу все больше нравятся схемы на основе JSON, поскольку они позволяют объявлять сложные правила без кодирования и делить ожидания с внешним интерфейсом. JSON-схема - это новый стандарт, который поддерживается многими библиотеками и инструментами npm (например, [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)), [joi](https://www.npmjs.com/package/joi) также очень популярны среди приятного синтаксиса. Как правило, синтаксис JSON не может охватить весь сценарий проверки, и полезный пользовательский код или предварительно запеченные платформы проверки, такие как [validator.js](https://github.com/chriso/validator.js/). Независимо от выбранного синтаксиса, убедитесь, что проверка запущена как можно раньше - например, с помощью промежуточного программного обеспечения Express, которое проверяет тело запроса до его передачи обработчику маршрута.

### Пример - правила проверки JSON-схемы

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


### Пример - проверка сущности с использованием JSON-схемы

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

### Пример - использование средства проверки промежуточного программного обеспечения

```javascript
// The validator is a generic middleware that gets the entity it should validate and takes care to return
// HTTP status 400 (Bad Request) should the body payload validation fail
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // route handling code goes here
});

```



### Что говорят другие блогеры

Из блога [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview):
> Проверка правильности ввода данных пользователем является одной из самых важных вещей, которые необходимо предпринять, когда речь заходит о безопасности вашего приложения. Неспособность сделать это правильно может открыть ваше приложение и пользователей для широкого спектра атак, включая внедрение команд, внедрение SQL или хранимые межсайтовые сценарии.<br/>

Для проверки ввода пользователя одна из лучших библиотек, которую вы можете выбрать, - это joi. Joi - это язык описания схемы объектов и валидатор для объектов JavaScript.

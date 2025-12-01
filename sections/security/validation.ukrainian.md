# Валідуйте вхідні JSON схеми

### Пояснення за один абзац

Валідація полягає у чіткому визначенні того, який payload наш додаток готовий прийняти, і швидкій відмові, якщо ввід відхиляється від очікувань. Це мінімізує поверхню атаки зловмисника, який більше не може пробувати payloads з різною структурою, значеннями та довжиною. Практично це запобігає атакам, таким як DDOS (код навряд чи впаде, коли ввід добре визначений) та Небезпечна Десеріалізація (JSON не містить сюрпризів). Хоча валідація може бути закодована або покладатися на класи та типи (TypeScript, ES6 класи), спільнота, схоже, все більше надає перевагу схемам на основі JSON, оскільки вони дозволяють оголошувати складні правила без кодування та ділитися очікуваннями з фронтендом. JSON-schema — це новий стандарт, який підтримується багатьма npm бібліотеками та інструментами (наприклад, [jsonschema](https://www.npmjs.com/package/jsonschema), [Postman](http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/)), [joi](https://www.npmjs.com/package/@hapi/joi) також дуже популярний з приємним синтаксисом. Зазвичай JSON синтаксис не може покрити всі сценарії валідації, і користувацький код або готові фреймворки валідації, такі як [validator.js](https://github.com/chriso/validator.js/), стають у нагоді. Незалежно від обраного синтаксису, переконайтеся, що ви запускаєте валідацію якомога раніше — наприклад, використовуючи Express middleware, що валідує тіло запиту перед тим, як запит передається до обробника маршруту

### Приклад - Правила валідації JSON-Schema

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


### Приклад - Валідація сутності за допомогою JSON-Schema

```javascript
const JSONValidator = require('jsonschema').Validator;

class Product {

  validate() {
    const v = new JSONValidator();

    return v.validate(this, schema);
  }

  static get schema() {
    //визначте JSON-Schema, дивіться приклад вище
  }
}

```

### Приклад - Використання middleware валідатора

```javascript
// Валідатор — це загальний middleware, який отримує сутність, яку він повинен валідувати, і повертає
// HTTP статус 400 (Bad Request), якщо валідація payload тіла не вдалася
router.post('/' , **validator(Product.validate)**, async (req, res, next) => {
    // код обробки маршруту тут
});

```



### Що кажуть інші блогери

З блогу [Gergely Nemeth](https://nemethgergely.com/blog/nodejs-security-overview):
> Валідація користувацького вводу — одна з найважливіших речей, коли йдеться про безпеку вашого додатку. Неправильне її виконання може відкрити ваш додаток і користувачів для широкого спектру атак, включаючи ін'єкцію команд, SQL ін'єкцію або збережений cross-site scripting.<br/>

Для валідації користувацького вводу однією з найкращих бібліотек, яку ви можете вибрати, є joi. Joi — це мова опису об'єктних схем і валідатор для JavaScript об'єктів.


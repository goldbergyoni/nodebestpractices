# Используйте только встроенный объект Error

### Объяснение в один абзац

Лозволяющая природа JavaScript наряду с его разнообразием параметров потока кода (например, EventEmitter, Callbacks, Promises и т.д.) приводит к значительному расхождению в том, как разработчики выдают ошибки - некоторые используют строки, другие определяют свои собственные пользовательские типы. Использование встроенного объекта Error в Node.js помогает сохранить единообразие в вашем коде, а с помощью сторонних библиотек он также сохраняет важную информацию, такую ​​как StackTrace. При возникновении исключения обычно рекомендуется заполнить его дополнительными контекстными свойствами, такими как имя ошибки и связанный код ошибки HTTP. Чтобы добиться этого единообразия и практики, рассмотрите возможность расширения объекта Error дополнительными свойствами, см. пример кода ниже.

### Пример кода - делай все правильно

```javascript
// throwing an Error from typical function, whether sync or async
if(!productToAdd)
    throw new Error('How can I add new product when no value provided?');

// 'throwing' an Error from EventEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// 'throwing' an Error from a Promise
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error('Product already exists!');
    }
  } catch (err) {
    // ...
  }
}
```

### Пример кода - антипаттерн

```javascript
// throwing a string lacks any stack trace information and other important data properties
if(!productToAdd)
    throw ('How can I add new product when no value provided?');
```

### Пример кода - делаем это еще лучше

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// centralized error object that derives from Node’s Error
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...other properties assigned here
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// client throwing an exception
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// centralized error object that derives from Node’s Error
export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// client throwing an exception
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

*Объяснение `Object.setPrototypeOf` в Typescript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Цитата блога: "Я не вижу смысла в том, чтобы иметь много разных типов"

Из блога Бен Надель, занял 5 место по ключевым словам "объект ошибки Node.js"

> … Лично я не вижу смысла в том, чтобы иметь множество различных типов объектов ошибок - JavaScript, как язык, похоже, не предназначен для поиска ошибок на основе конструктора. Таким образом, дифференцирование по свойству объекта кажется гораздо проще, чем по типу Constructor …

### Цитата блога: "Строка не является ошибкой"

Из блога devthought.com, занял 6 место по ключевым словам "Объект ошибки Node.js"

> … передача строки вместо ошибки приводит к снижению совместимости между модулями. Он нарушает контракты с API, которые могут выполнять проверки ошибок instanceof или хотят узнать больше об ошибке. Объекты ошибок, как мы увидим, обладают очень интересными свойствами в современных механизмах JavaScript, помимо хранения сообщения, переданного конструктору …

### Цитата из блога: "Наследование от ошибки не увеличивает ценность"

Из блога Machadogj

> … Одна проблема, которую я имею с классом Error, заключается в том, что его не так просто расширить. Конечно, вы можете наследовать класс и создавать свои собственные классы ошибок, такие как HttpError, DbError и т.д. Однако это занимает время и не добавляет слишком много значения, если вы не делаете что-то с типами. Иногда вам просто нужно добавить сообщение и сохранить внутреннюю ошибку, а иногда вам может понадобиться расширить ошибку с помощью параметров, и так далее …

### Цитата из блога: "Все ошибки JavaScript и системы, возникающие в Node.js, наследуются от ошибок"

Из официальной документации Node.js

> … Все ошибки JavaScript и System, возникающие в Node.js, наследуются или являются экземплярами стандартного класса JavaScript Error и гарантированно предоставляют как минимум свойства, доступные в этом классе. Общий объект JavaScript Error, который не обозначает каких-либо конкретных обстоятельств, по которым произошла ошибка. Объекты ошибок фиксируют "трассировку стека", детализирующую точку в коде, в которой был создан экземпляр ошибки, и могут предоставлять текстовое описание ошибки. Все ошибки, сгенерированные Node.js, включая все системные ошибки и ошибки JavaScript, будут либо экземплярами класса Error, либо наследоваться от него …

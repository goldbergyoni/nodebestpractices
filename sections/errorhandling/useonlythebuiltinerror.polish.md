# Używaj tylko wbudowanego obiektu Error

### Wyjaśnienie jednym akapitem

Zezwalająca natura JavaScript wraz z różnorodnymi opcjami przepływu kodu (np. EventEmitter, Callbacki, Promises itp.) popycha do dużej rozbieżności w sposobie, w jaki programiści zgłaszają błędy - niektóre ciągi znaków, inne definiują własne typy niestandardowe. Korzystanie z wbudowanego obiektu Error Node.js pomaga zachować jednolitość w kodzie, a dzięki bibliotekom stron trzecich zachowuje również istotne informacje, takie jak StackTrace. Zgłaszając wyjątek, zwykle dobrą praktyką jest wypełnienie go dodatkowymi właściwościami kontekstowymi, takimi jak nazwa błędu i powiązany kod błędu HTTP. Aby osiągnąć tę jednolitość i praktyki, rozważ rozszerzenie obiektu Error o dodatkowe właściwości, ale uważaj, aby go nie przesadzić. Ogólnie dobrym pomysłem jest rozszerzenie wbudowanego obiektu Error tylko raz o AppError dla wszystkich błędów na poziomie aplikacji i przekazanie wszelkich danych potrzebnych do rozróżnienia różnych rodzajów błędów jako argumentów. Nie trzeba wielokrotnie rozszerzać obiektu Error (jeden dla każdego przypadku błędu, takiego jak DbError, HttpError) Zobacz przykłady kodu poniżej

### Przykład kodu - robienie tego dobrze

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

### Przykład kodu - Antywzorzec

```javascript
// throwing a string lacks any stack trace information and other important data properties
if(!productToAdd)
    throw ('How can I add new product when no value provided?');
```

### Przykład kodu – robienie tego nawet lepiej

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

*Wytłumaczenie na temat `Object.setPrototypeOf` w Typescript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Cytat z Bloga: "I don’t see the value in having lots of different types"

Z bloga, Ben Nadel w rankingu 5 słów kluczowych “Node.js error object”

>…”Personally, I don’t see the value in having lots of different types of error objects [in contrast with having only one] – JavaScript, as a language, doesn’t seem to cater to Constructor-based error-catching. As such, differentiating on an object property seems far easier than differentiating on a Constructor type…

### Cytat z Bloga: "A string is not an error"

Z bloga, devthought.com w rankingu 6 słów kluczowych “Node.js error object”

> …passing a string instead of an error results in reduced interoperability between modules. It breaks contracts with APIs that might be performing `instanceof` Error checks, or that want to know more about the error. Error objects, as we’ll see, have very interesting properties in modern JavaScript engines besides holding the message passed to the constructor…

### Cytat z Bloga: "Inheriting from Error doesn’t add too much value"

Z bloga machadogj

> …One problem that I have with the Error class is that is not so simple to extend. Of course, you can inherit the class and create your own Error classes like HttpError, DbError, etc. However, that takes time and doesn’t add too much value [compared to extending it only once for an AppError] unless you are doing something with types. Sometimes, you just want to add a message and keep the inner error, and sometimes you might want to extend the error with parameters, and such…

### Cytat z Bloga: "All JavaScript and System errors raised by Node.js inherit from Error"

Z oficjalnej dokumentacji Node.js

> …All JavaScript and System errors raised by Node.js inherit from, or are instances of, the standard JavaScript Error class and are guaranteed to provide at least the properties available on that class. A generic JavaScript Error object that does not denote any specific circumstance of why the error occurred. Error objects capture a “stack trace” detailing the point in the code at which the Error was instantiated, and may provide a text description of the error. All errors generated by Node.js, including all System and JavaScript errors, will either be instances of or inherit from, the Error class…

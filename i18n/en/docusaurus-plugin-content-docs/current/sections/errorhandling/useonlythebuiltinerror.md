# Use only the built-in Error object

### One Paragraph Explainer

The permissive nature of JavaScript along with its variety of code-flow options (e.g. EventEmitter, Callbacks, Promises, etc) pushes to great variance in how developers raise errors – some use strings, other define their own custom types. Using Node.js built-in Error object helps to keep uniformity within your code and with 3rd party libraries, it also preserves significant information like the StackTrace. When raising the exception, it’s usually a good practice to fill it with additional contextual properties like the error name and the associated HTTP error code. To achieve this uniformity and practices, consider extending the Error object with additional properties, but be careful not to overdo it. It's generally a good idea to extend the built-in Error object only once with an AppError for all the application level errors, and pass any data you need to differentiate between different kinds of errors as arguments. No need to extend the Error object multiple times (one for each error case, such as DbError, HttpError) See code examples below

### Code Example – doing it right

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

### Code example – Anti Pattern

```javascript
// throwing a string lacks any stack trace information and other important data properties
if(!productToAdd)
    throw ('How can I add new product when no value provided?');
```

### Code example – doing it even better

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

*Explanation about the `Object.setPrototypeOf` in Typescript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Blog Quote: "I don’t see the value in having lots of different types"

From the blog, Ben Nadel ranked 5 for the keywords “Node.js error object”

>…”Personally, I don’t see the value in having lots of different types of error objects [in contrast with having only one] – JavaScript, as a language, doesn’t seem to cater to Constructor-based error-catching. As such, differentiating on an object property seems far easier than differentiating on a Constructor type…

### Blog Quote: "A string is not an error"

From the blog, devthought.com ranked 6 for the keywords “Node.js error object”

> …passing a string instead of an error results in reduced interoperability between modules. It breaks contracts with APIs that might be performing `instanceof` Error checks, or that want to know more about the error. Error objects, as we’ll see, have very interesting properties in modern JavaScript engines besides holding the message passed to the constructor…

### Blog Quote: "Inheriting from Error doesn’t add too much value"

From the blog machadogj

> …One problem that I have with the Error class is that is not so simple to extend. Of course, you can inherit the class and create your own Error classes like HttpError, DbError, etc. However, that takes time and doesn’t add too much value [compared to extending it only once for an AppError] unless you are doing something with types. Sometimes, you just want to add a message and keep the inner error, and sometimes you might want to extend the error with parameters, and such…

### Blog Quote: "All JavaScript and System errors raised by Node.js inherit from Error"

From Node.js official documentation

> …All JavaScript and System errors raised by Node.js inherit from, or are instances of, the standard JavaScript Error class and are guaranteed to provide at least the properties available on that class. A generic JavaScript Error object that does not denote any specific circumstance of why the error occurred. Error objects capture a “stack trace” detailing the point in the code at which the Error was instantiated, and may provide a text description of the error. All errors generated by Node.js, including all System and JavaScript errors, will either be instances of or inherit from, the Error class…

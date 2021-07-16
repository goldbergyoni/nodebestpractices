# Utiliza solo el objeto Error nativo

### Párrafo de explicación

La naturaleza permisiva de JS junto con sus variadas opciones de flujo de código (ej. EventEmitter, Callbacks, Promises, etc) provocan la existencia de una gran variedad de maneras de lanzar errores. Algunos utilizan strings, otros definen sus propios tipos personalizados. Utilizar el objeto nativo de Error presente en Node.js ayuda a mantener la uniformidad dentro de tu código y de bibliotecas de terceros, así como a mantener información significativa como el StackTrace. Al lanzar la excepción, normalmente es buena práctica el agregar propiedades adicionales que aporten contexto, como el nombre del error y el código de error HTTP asociado. Para lograr esta uniformidad y estas prácticas, considera extender el objeto Error con propiedades adicionales, pero todo con medida. Generalmente es buena idea extender el objeto de Error nativo solo una vez con un `AppError` para todos los errores en nivel de aplicación, y pasar cualquier dato que necesites para diferenciar los distintos tipos de error como argumentos. No es necesario extender el objeto de Error multiples veces (one por cada caso, como DBError, HTTPError). Ver código de ejemplo abajo

### Código de ejemplo – ¿Cómo hacerlo bien?

```javascript
// Arrojando un Error desde una función común, sea síncrona o asíncrona
if(!productToAdd)
    throw new Error("How can I add new product when no value provided?");

// Arrojando un Error desde EvenEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// Arrojando un Error desde una promesa
return new Promise(function (resolve, reject) {
    return DAL.getProduct(productToAdd.id).then((existingProduct) => {
        if(existingProduct != null)
            reject(new Error("Why fooling us and trying to add an existing product?"));
    });
});
```

### Código de ejemplo – Anti patrón

```javascript
// Arrojando un String, pierde información importante como el stacktrace y propiedades de datos
if(!productToAdd)
    throw ("How can I add new product when no value provided?");
```

### Código de ejemplo – ¿Cómo hacerlo aún mejor?

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Objeto de error centralizado que deriva del Error de Node
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //... Asignar otras propiedades aquí
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

//Cliente arrojando una excepción
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// centralized error object that derives from Node’s Error
// objeto de Error centralizado que deriva del Error de Node
export class AppError extends Error {
  public readonly name: string;
  public readonly httpCode: HttpCode;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: HttpCode, description: string, isOperational: boolean) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype); // restaura la cadena de prototipo

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

// cliente arrojando una excepción
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, 'further explanation', true)
```
</details>

*Explicación acerca de  `Object.setPrototypeOf` en Typescript: https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget*

### Cita de blog: "No veo el valor de tener montones de diferentes tipos"

Del blog, Ben Nadel clasificado 5to para las palabras clave “Node.js error object”

>…”Personally, I don’t see the value in having lots of different types of error objects – JavaScript, as a language, doesn’t seem to cater to Constructor-based error-catching. As such, differentiating on an object property seems far easier than differentiating on a Constructor type…

>…”Personalmente, no veo el valor de tener montones de diferentes tipos de objectos de error – JavaScript, como lenguaje, no parece proveer captura de errores basada en constructores. Como tal, diferenciar según una propiedad de un objeto parece mucho más fácil que diferenciar según el tipo de constructor…

### Cita de blog: "Un string no es un error"

Del blog, devthought.com clasificado 6to para las palabras clave “Node.js error object”

> …passing a string instead of an error results in reduced interoperability between modules. It breaks contracts with APIs that might be performing `instanceof` Error checks, or that want to know more about the error. Error objects, as we’ll see, have very interesting properties in modern JavaScript engines besides holding the message passed to the constructor…

> …pasar un string en lugar de un error resulta en interoperabilidad reducida entre módulos. Rompe los contratos con APIs que podrían estar haciendo validaciones de errores usando `instanceof`, o que desean saber más sobre el error. Los objetos de error, como veremos, tienen propiedades muy importantes en motores de JavasScript modernos además de mantener el mensaje de error pasado al constructor…

### Cita de blog: "Heredar de Error no agrega mucho valor"

Del blog machadogj

> …One problem that I have with the Error class is that is not so simple to extend. Of course, you can inherit the class and create your own Error classes like HttpError, DbError, etc. However, that takes time and doesn’t add too much value unless you are doing something with types. Sometimes, you just want to add a message and keep the inner error, and sometimes you might want to extend the error with parameters, and such…

> …Un problema que tengo con la clase Error es que no es tan simple de extender. Por supuesto, puedes heredar de la clase y crear tus propias clases de Error como HttpError, DbError, etc. Sin embargo, eso toma tiempo y no agrega mucho valor a menos que estés haciendo algo con los tipos. A veces, solo quieres agregar un mensaje y mantener el error interno, y a veces puedes querer extender el error con parámetros, y tal…

### Cita de blog: "Todos los errores de JavaScript y des sistema creados en Node.js heredan de Error"

De la documentación oficial de Node.js

> …All JavaScript and System errors raised by Node.js inherit from, or are instances of, the standard JavaScript Error class and are guaranteed to provide at least the properties available on that class. A generic JavaScript Error object that does not denote any specific circumstance of why the error occurred. Error objects capture a “stack trace” detailing the point in the code at which the Error was instantiated, and may provide a text description of the error.All errors generated by Node.js, including all System and JavaScript errors, will either be instances of or inherit from, the Error class…

> …Todos los errores de JavaScript y del Sistema elevados por Node.js heredan o son instancias de la clase standard Error de JavaScript y está garantizado que proveen al menos las propiedades disponibles en esa clase. Un objeto de error genérico de JavaScript que no denota ninguna circunstancia específica de por qué ocurrió. Los objetos de error capturan un "stack trace" detallando el punto en el código donde el Error fue instanciado, y puede proveer una descripción de texto del error. Todos los errores generados por Node.js, incluyendo todos los errores del Sistema y de Javascript, serán instancias o heredarás de la clase Error…

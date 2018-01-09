[✔]: assets/images/checkbox-small-blue.png

# Mejores prácticas de NodeJS

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices" />
</h1>

<br/>

<div align="center">
<img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2053%20Best%20practices-blue.svg" alt="50 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Oct%2020%202017-green.svg" alt="Last update: Oct 20, 2017"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.4-brightgreen.svg" alt="Updated for Node v.8.4">
	</div>

<br/>

 [![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **¡Síguenos en Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)
 <br/>

# ¡Bienvenido! 3 cosas que necesitas saber primero:
**1. Cuando lees aquí, lees docenas de los mejores artículos de Node.JS -** este es un resumen y conservación del contenido mejor clasificado de las mejores prácticas de NodeJS

**2. Es la compilación más grande y crece cada semana -** actualmente, se presentan más de 50 prácticas, guías de estilo y consejos arquitectónicos. Damos la bienvenida a issues y pull requests para mantener este libro actualizado. Nos encantaría verte contribuir aquí, ya sea corrigiendo algunos errores de código o sugiriendo nuevas ideas brillantes: se parte del libro de mejores prácticas de Node.JS

**3. La mayoría de los puntos tiene información adicional -** Encontrás cerca de los puntos de mejores prácticas el enlace **🔗Leer más** que te dará algunos ejemplos de código, citas de blogs seleccionados y mas información

<br/><br/><br/>

## Tabla de contenidos
1. [Prácticas para estructura del proyecto (5)](#1-project-structure-practices)
2. [Prácticas en manejo de errores (11) ](#2-error-handling-practices)
3. [Prácticas de estilo de código (12) ](#3-code-style-practices)
4. [Practicas de prueba y calidad en general (8) ](#4-testing-and-overall-quality-practices)
5. [Prácticas de puesta en producción (16) ](#5-going-to-production-practices)
6. Prácticas de Seguridad (próximamente)
7. Prácticas de Rendimiento (próximamente)


<br/><br/><br/>
# `1. Prácticas de estructura del proyecto`

## ![✔] 1.1 Estructura tu solución en componentes

**TL;DR:** El peor inconveniente de las grandes aplicaciones es mantener una gran base de código con cientos de dependencias, un monolito que ralentiza a los desarrolladores que intentan incorporar nuevas características. En cambio, particiona tu código en componentes, cada uno obtiene su propia carpeta o una base de código dedicada, y asegúrate de que cada unidad se mantenga pequeña y simple. Visita 'Leer más' a continuación para ver ejemplos de la estructura correcta del proyecto

**De lo contrario:** Cuando desarrolladores codifican nuevas características luchan por darse cuenta del impacto de su cambio y temen romper otros componentes dependientes - las implementaciones se vuelven más lentas y más riesgosas. También se considera más difícil escalar cuando todas las unidades de negocios no están separadas

🔗 [**Leer más: estructura en componentes**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Aplicar capas para componentes, mantén Express dentro de sus límites

**TL;DR:** Cada componente debería contener 'capas'- un objeto dedicado para la web, la lógica y código para acceso a datos. Esto no solo genera una clara separación de conceptos sino que también facilita significativamente los mocks y la pruebas del sistema. Aunque este es un patrón muy común, los desarrolladores de APIs tienden a mezclar capas pasando los objetos de la capa web (Express req, res) a la lógica de negocios y capas de datos, esto hace que su aplicación dependa y solo sea accesible por Express.

**De lo contrario:** Una aplicación que mezcla objectos de web con otras capas no puede ser accedida por código de pruebas, CRON jobs y otras llamadas que no son de Express.

🔗 [**Leer más: Aplicar capas a tu aplicación**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Envuelve las utilidades comunes como paquetes de NPM

**TL;DR:** En una aplicación grande que se constituye de múltples bases de código, utilidades transversales como los loggers, cifrado y similares, deben de estar envueltos por su propio código y expuestos como paquetes privados de NPM. Esto permite compartirlos entre múltiples base de código y proyectos.

**De lo contrario:** Tendrás que inventar tu propia implementación y rueda de dependencia

🔗 [**Leer más: Estructura por característica**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Separar 'servidor' y 'aplicación' de express

**TL;DR:** Evite el desagradable hábito de definir toda la aplicación [Express](https://expressjs.com/) en un único archivo enorme; separa tú definición de 'Express' en al menos dos archivos: la declaración del API (app.js) y los características de red (WWW). Incluso para una mejor estructura, ubica tu declaración del API dentro de los componentes.

**De lo contrario:** Se podrá acceder a tu API para realizar pruebas solo a través de llamadas HTTP (más lento y mucho más difícil para generar informes de cobertura). Probablemente tampoco sea un placer enorme mantener cientos de líneas de código en un solo archivo

🔗 [**Leer más: separar 'servidor' y 'aplicación' de express**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Usar una configuración segura, jerárquica y consciente del entorno

**TL;DR:** La configuración perfecta e impecable debe incluir (a) claves que se pueden leer desde el archivo Y desde la variable de entorno (b) los secretos se guardan fuera del código al que se ha hecho commit (c) config es jerárquica para facilitar la localización. Solo hay unos pocos paquetes que pueden ayudar a validar la mayoría de estos casos como [nconf](https://www.npmjs.com/package/nconf) y [config](https://www.npmjs.com/package/config)

**De lo contrario:** No cumplir con ninguno de los requisitos de configuración simplemente frena al equipo de desarrollo o al equipo de devpos. Probablemente ambos

🔗 [**Leer más: buenas prácticas de configuración**](/sections/projectstructre/configguide.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `2. Prácticas en manejo de errores`

## ![✔] 2.1  Usa Async-Await o promesas para manejo de errores asíncronos

**TL;DR:** El manejo de errores asincrónicos en el estilo de callback es probablemente la manera más rápida de ir al infierno (a.k.a, pyramid of doom o pirámide de la perdición). El mejor regalo que le puedes dar a tu código es utilizar una biblioteca de promesas seria o async-await que proporcione una sintaxis de código muy compacta y familiar como try-catch

**De lo contrario:** El estilo de callback de Node.JS, function (err, response), es una forma prometedora de código no mantenible debido a la combinación de manejo de errores con código accidentado, anidación excesiva y patrones de codificación incómodos

🔗 [**Leer más: evitar callbacks**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>


## ![✔] 2.2 Usa solo el objeto Error incorporado

**TL;DR:** Muchos arrojan errores como una cadena o como un tipo personalizado; esto complica la lógica de manejo de errores y la interoperabilidad entre módulos. Ya sea que rechace una promesa, genere una excepción o emita un error, usar solo el objeto de Error incorporado aumentará la uniformidad y evitará la pérdida de información.

**De lo contrario:** Al invocar algún componente, no estar seguro de qué tipo de errores son retornados, hace que sea mucho más difícil manejar los errores de forma adecuada. Peor aún, el uso de tipos personalizados para describir los errores puede conducir a la pérdida de información de error crítico como el seguimiento de la pila.

🔗 [**Leer más: utilizando el objeto de Error incorporado**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Distinguir errores operacionales contra errores del programador

**TL;DR:** Los errores operacionales (por ejemplo, el API recibió una entrada no válida) se refieren a casos conocidos en los que el impacto del error se entiende completamente y se pueden manejar con cuidado. Por otro lado, el error del programador (por ejemplo, tratar de leer la variable no definida) se refiere a fallas desconocidas del código que ordenan reiniciar correctamente la aplicación

**De lo contrario:** Siempre puedes reiniciar la aplicación cuando aparece un error, pero ¿por qué dejar ~5000 usuarios en línea abajo debido a un error operacional menor, previsto? lo contrario tampoco es ideal: mantener la aplicación activa cuando se produce un problema desconocido (error del programador) puede provocar un comportamiento imprevisto. La diferenciación de los dos permite actuar con tacto y aplicar un enfoque equilibrado basado en el contexto dado

  🔗 [**Leer más: error operacional vs programador**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Manejar los errores centralmente, no dentro de un middleware Express

**TL;DR:** La lógica de manejo de errores, como un correo al administrador y registro de logs, debe encapsularse en un objeto dedicado y centralizado al que todos los end-points (por ejemplo, Express middleware, cron jobs, unit-testing) llaman cuando se produce un error .

**De lo contrario:** No manejar los errores dentro de un solo lugar dará lugar a la duplicación del código y, probablemente, a los errores que se manejan de forma incorrecta

🔗 [**Leer más: manejo de errores en un lugar centralizado**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Errores del API Document con Swagger

**TL;DR:** Deja que los clientes de tu API sepan qué errores podrían presentarse como respuesta para que puedan manejarlos cuidadosamente sin fallar. Esto se hace generalmente con frameworks de documentación REST API como Swagger

**De lo contrario:** Un cliente del API podría decidir bloquearse y reiniciarse solo porque recibió un error que no pudo entender. Nota: la persona que llama de su API puede ser tu (muy típico en un entorno de microservicios)

🔗 [**Leer más: documentación de errores en Swagger**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Cerrar el proceso elegantemento cuando un extraño llega

**TL; DR:** Cuando se produce un error desconocido (un error del desarrollador, consulta el número de práctica recomendada número #3): existe incertidumbre acerca del estado de la aplicación. Una práctica común sugiere reiniciar el proceso cuidadosamente usando una herramienta 'reiniciadora' como Forever y PM2.

**De lo contrario:** Cuando se detecta una excepción desconocida, algunos objetos pueden estar en un estado defectuoso (por ejemplo, un emisor de eventos que se usa globalmente y que ya no se activan debido a fallas internas) y todas las solicitudes futuras pueden fallar o comportarse de manera loca

🔗 [**Leer más: cerrar el proceso**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Usa un logger maduro para aumentar la visibilidad de los errores

**TL;DR:** Un conjunto de herramientas de registro maduras como Winston, Bunyan o Log4J acelerará el descubrimiento y la comprensión de errores. Así que olvídate de console.log.

**De lo contrario:** Navegando a través de console.logs o manualmente a través de un archivo de texto desordenado sin consultar herramientas o un lector de registro decente puede mantenerte ocupado en el trabajo hasta tarde

🔗 [**Leer más: utilizando un registrador maduro**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Flujos de errores de prueba usando su test framework favorito

**TL;DR:** Ya sea que se trate de un profesional de QA automatizado o de una prueba de desarrollador manual: asegúrate de que tu código no solo satisfaga un escenario positivo sino que también maneje y devuelva los errores correctos. Frameworks de prueba como Mocha & Chai pueden manejar esto fácilmente (vea ejemplos de código dentro del "Gist emergente")

**De lo contrario:** Sin pruebas, ya sea automática o manualmente, no puedes confiar en nuestro código para devolver los errores correctos. Sin errores significativos, no hay manejo de errores

🔗 [**Leer más: probar los flujos de error**](/sections/errorhandling/testingerrorflows.md)

<br/> <br/>

## ![✔] 2.9 Descubre errores y tiempo de inactividad usando productos APM

**TL;DR:** Los productos de monitoreo y rendimiento (a.k.a APM) miden de forma proactiva tu base de código o API para auto-mágicamente resaltar errores, bloqueos y ralentizar automáticamente partes que echas en falta.

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento y los tiempos de inactividad de la API, probablemente nunca sabrás cuáles son las piezas de código más lentas en el escenario del mundo real y cómo afectan estas a la experiencia del usuario.

🔗 [**Leer más: utilizando productos APM**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Captura rechazos de promesas no controladas

**TL;DR:** Cualquier excepción lanzada dentro de una promesa será tragada y descartada a menos que un desarrollador no se olvide de manejarla de manera explícita. ¡Incluso si su código está suscrito a process.uncaughtException! Supera esto registrándose en el proceso del evento.

**De lo contrario:** Tus errores serán tragados y no dejarán rastros. Nada de que preocuparse

🔗 [**Leer más: captura rechazos de promesas no controladas**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Falla rápidamente, valida argumentos usando una biblioteca dedicada

**TL; DR:** Esto debería ser parte de sus mejores prácticas para Express - API de Assert para evitar errores desagradables que son mucho más difíciles de seguir más adelante. El código de validación suele ser tedioso a menos que se utilicen bibliotecas muy interesantes como Joi

**De lo contrario:** Considera esto: tu función espera un argumento numérico "Descuento" que la persona que llama olvida pasar, más adelante su código comprueba si Descuento!= 0 (cantidad de descuento permitido es mayor que cero), entonces permitirás el usuario que disfrute de un descuento. Dios mío, qué desagradable error. ¿Puedes verlo?

🔗 [**Leer más: falla rapidamente**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `3. Code Style Practices`

## ![✔] 3.1 Use ESLint

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. Using ESLint and following the rest of the code style practices below means following the same styles used by the rest of the community, as well as the same code styles used in the core products themselves.

**Otherwise:** developers will focus on tedious spacing and line-width concerns

<br/><br/>

## ![✔] 3.2 Node JS Specific Plugins

**TL;DR:** On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Otherwise:** Many faulty Node.JS code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.JS linters can detect such patterns and complain early

<br/><br/>

## ![✔] 3.3 Start a Codeblock's Curly Braces in the Same Line 

**TL;DR:** The opening curly braces of a code block should be in the same line of the opening statement.

### Code Example
```javascript
  // Do
  function someFunction() {
    // code block
  }

  //Avoid
  function someFunction
  {
    // code block
  }
```

**Otherwise:** Deferring from this best practice might lead to unexpected results, as can be seen in the Stackoverflow thread below:

🔗 [**Read more:** "Why does a results vary based on curly brace placement?" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Don't Forget the Semicolon

**TL;DR:** While not unanimously agreed upon, it is still recommended to put a semicolon at the end of each statement. This will make your code more readable and explicit to other developers who read it.

**Otherwise:** As seen in the previous section, Javascript's interpeter auto adds semicolon at the end of a statement if there isn't one which can lead to some undesired results.

<br/><br/>

## ![✔] 3.5 Name Your Functions

**TL;DR:** Name all functions, including closures and callbacks. Avoid anonymous functions. This is especially useful when profiling a node app. Naming all functions will allow you to easily understand what you're looking at when cheking a memory snapshot.

**Otherwise:** Debugging production issues using a core dump (memory snapshot) might become challenging as you notice significant memory consumption from functions with no name.

<br/><br/>

## ![✔] 3.6 Naming conventions for variables, constants, functions and classes

**TL;DR:** Use ***lowerCamelCase*** when naming variables and functions, ***UpperCamelCase*** (capital first letter as well) when naming classes and ***UPPERCASE*** for constants. This will help you to easily distinguish between plain variables / functions, and classes that require instantiation. Use descriptive names, but try to keep them short.

**Otherwise:** Javascript is the only language in the world which allows to invoke a constructor ("Class") directly without instantiating it first. Consequently, Classes and function-constructors are differentiated by starting with UpperCamelCase.

### Code Example ###
```javascript
  // for class name we use UpperCamelCase
  class SomeClassExample () { 
    
    // for const name we use UPPERCASE
    const CONFIG = {
      key: 'value'
    };
    
    // for variables and functions names we use lowerCamelCase
    let someVariableExample = 'value';
    function doSomething() {
      
    }

  }
```

<br/><br/>

## ![✔] 3.7 Prefer const over let. Ditch the var

**TL;DR:** Using `const` means that once a variable is assigned, it cannot be reassigned. Prefering const will help you to not be tempted to use the same variable for different uses, and make your code clearer. If a variable needs to be reassigned, in a for loop for example, use `let` to declare it. Another important aspect of let is that a variable declared using let is only available in the block scope in which it was defined. `var` is function scoped, not block scoped, and [shouldn't be used in ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) now that you have const and let at your disposal.

**Otherwise:** Debugging becomes way more cumbersome when following a variable that frequently changes.

🔗 [**Read more: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Requires come first, and not inside functions.

**TL;DR:** Require modules at the beginning of each file, before and outside of any functions. This simple best practice will not only help you easily and quickly tell the dependencies of a file right at the top, but also avoids a couple of potential problems.

**Otherwise:** Requiers are run syncronously by Node JS. If they are called from within a function, it may block other requests from being handled at a more critical time. Also, if a required module or any of its own dependencies throw an error and crashes the server, it is best to find out about it as soon as possible, which might not be the case if that module is required from within a function.

<br/><br/>

## ![✔] 3.9 Do Require on the folders, not directly on the files

**TL;DR:** When developing a module/library in a folder, place an index.js file that exposes the module's
internals so every consumer will pass through it. This serves as an 'interface' to your module and ease
future changes without breaking the contract.

**Otherwise:** Changing to the internal structure of files or the signature may break the interface with
clients.

### Code example
```javascript
  // Do
  module.exports.SMSProvider = require('./SMSProvider');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver');

  // Avoid
  module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>


## ![✔] 3.10 Use the `===` operator

**TL;DR:** Prefer the strict equality operator `===` over the weaker abstract equality operator `==`. `==` will compare two variables after converting them to a common type. There is no type conversion in `===`, and both variables must be of the same type to be equal.

**Otherwise:** Unequal variables might return true when compared with the `==` operator.

### Code example
```javascript
'' == '0'           // false
0 == ''             // true
0 == '0'            // true

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```
All statements above will return false if used with `===`

<br/><br/>

## ![✔] 3.11 Use Async Await, avoid callbacks

**TL;DR:** Node 8 LTS now has full support for Async-await. This is a new way of dealing with asyncronous code which supercedes callbacks and promises. Async-await is non blocking, and it makes asynchronous code looks more synchronous. The best gift you can give to your code is using async-await which provides much compact and familiar code syntax like try-catch.

**Otherwise:** Handling async errors in callback style is probably the fastest way to hell - this style forces to check errors all over, deal with akward code nesting and make it difficult to reason about the code flow.

🔗[**Read more:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use Fat (=>) Arrow Functions 

**TL;DR:** Though it's recommended to use async-await and avoid function parameters, when dealing with older API that accept promises or callbacks - arrow functions makes the code structure more compact and keeps the lexical context of the root function (i.e. 'this').

**Otherwise:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read.

🔗 [**Read mode: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>


# `4. Testing And Overall Quality Practices`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short time tables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which are the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterwards, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc 

**Otherwise:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with ESLint + specific Node plugin rules

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Otherwise:** Many faulty Node.JS code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.JS linters can detect such patterns and complain early


<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it better come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) is the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Its rivals, online SaaS tools like [Travis](https://travis-ci.org/) and [CircleCI](https://circleci.com), are much easier to setup, without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**Otherwise:** Choosing some lightweight SaaS vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup


<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [nsp](https://github.com/nodesecurity/nsp) that can be invoked from your CI on every build

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.5 Tag your tests

**TL;DR:**  Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/):  mocha --grep 'sanity'

**Otherwise:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremly slow and keep developers away for running tests

<br/><br/>

## ![✔] 4.6 Check your test coverage, it helps to identify wrong test patterns

**TL;DR:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**Otherwise:** There won't be any automated metric that tells you when large portion of your code is not covered by testing



<br/><br/>

## ![✔] 4.7 Inspect for outdated packages

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-udpates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a sever scenario might be when an installed package lag by 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**Otherwise:** Your production will run packages that have been explicitly tagged by their author as risky 

<br/><br/>

## ![✔] 4.8 Use docker-compose for e2e testing

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after


**Otherwise:** Without docker-compose teams must maintain a testing DB for each testing environment including developers machines, keep all those DBs in sync so test results won't vary across environments


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `5. Going To Production Practices`
## ![✔] 5.1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**Otherwise:** Failure === disappointed customers. Simple.


🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day  1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information


🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)
	
<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. Instead, use a ‘real’ middleware services like nginx, HAproxy or cloud vendor services

**Otherwise:** Your poor single thread will keep busy doing networking tasks instead of dealing with your application core and performance will degrade accordingly


🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly NPM lets dependencies drift across environments be default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files , .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. *Update: as of NPM5 , dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code


🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenario, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without clear strategy and too many tools together (cluster management, docker, PM2) might lead to a devops chaos


🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

 
<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs over a single CPU core while as all other are left idle. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.JS utilizes only 1 (even using PaaS services like AWS beanstalk!)


🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes


🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real world scenario and how these affects the UX


🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)


<br/><br/>


## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled inside (click Gist below) few development tips that are closely related to production maintenance

**Otherwise:** A world champion IT/devops guy won’t save a system that is badly written


🔗 [**Read More: Make your code production-ready**](/sections/production/productoncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps you may gauge memory  periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like happened in Wallmart


🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>


## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really get hurts when dealing with many static files due to its single threaded model

**Otherwise:** Your single Node thread will keep busy streaming hundreds of html/images/angular/react files instead of  allocating all its resources for the task it was born for – serving dynamic content


🔗 [**Read More: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>


## ![✔] 5.12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of a just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server


🔗 [**Read More: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)


<br/><br/>


## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Otherwise: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious


🔗 [**Read More: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>


## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue


🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>


## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server side rendering omitting NODE_ENV makes the slower by a factor of three!


🔗 [**Read More: Set NODE_ENV=production**](/sections/production/setnodeenv.md)


<br/><br/>


## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `Security Practices`

## Our contributors are working on this section. Would you like to join?

<br/><br/><br/>
# `Performance Practices`

## Our contributors are working on this section. Would you like to join?


<br/><br/><br/>
# Contributors
## `Yoni Goldberg`
Developer & consultant, Backend expert, JavaScript enthusiast, focused on Node.JS. Many of the bullets was first published on his blog post [http://www.goldbergyoni.com](http://www.goldbergyoni.com)

## `Ido Richter`
👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast.

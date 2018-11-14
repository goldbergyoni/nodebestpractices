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
6.  :star: Nuevo: [Practicas de Seguridad (23)](#6-security-best-practices)
7.  Performance Practices ([coming soon](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))


<br/><br/><br/>
# `1. Prácticas de estructura del proyecto`

## ![✔] 1.1 Estructura tu solución en componentes

**TL;DR:** El peor inconveniente de las grandes aplicaciones es mantener una gran base de código con cientos de dependencias, un monolito que ralentiza a los desarrolladores que intentan incorporar nuevas características. En cambio, particiona tu código en componentes, cada uno obtiene su propia carpeta o una base de código dedicada, y asegúrate de que cada unidad se mantenga pequeña y simple. Visita 'Leer más' a continuación para ver ejemplos de la estructura correcta del proyecto

**De lo contrario:** Cuando desarrolladores codifican nuevas características luchan por darse cuenta del impacto de su cambio y temen romper otros componentes dependientes - las implementaciones se vuelven más lentas y más riesgosas. También se considera más difícil escalar cuando todas las unidades de negocios no están separadas

🔗 [**Leer más: estructura en componentes(Ingles)**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Aplicar capas para componentes, mantén Express dentro de sus límites

**TL;DR:** Cada componente debería contener 'capas'- un objeto dedicado para la web, la lógica y código para acceso a datos. Esto no solo genera una clara separación de conceptos sino que también facilita significativamente los mocks y la pruebas del sistema. Aunque este es un patrón muy común, los desarrolladores de APIs tienden a mezclar capas pasando los objetos de la capa web (Express req, res) a la lógica de negocios y capas de datos, esto hace que su aplicación dependa y solo sea accesible por Express.

**De lo contrario:** Una aplicación que mezcla objectos de web con otras capas no puede ser accedida por código de pruebas, CRON jobs y otras llamadas que no son de Express.

🔗 [**Leer más: Aplicar capas a tu aplicación(Ingles)**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Envuelve las utilidades comunes como paquetes de NPM

**TL;DR:** En una aplicación grande que se constituye de múltples bases de código, utilidades transversales como los loggers, cifrado y similares, deben de estar envueltos por su propio código y expuestos como paquetes privados de NPM. Esto permite compartirlos entre múltiples base de código y proyectos.

**De lo contrario:** Tendrás que inventar tu propia implementación y rueda de dependencia

🔗 [**Leer más: Estructura por característica(Ingles)**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Separar 'servidor' y 'aplicación' de express

**TL;DR:** Evite el desagradable hábito de definir toda la aplicación [Express](https://expressjs.com/) en un único archivo enorme; separa tú definición de 'Express' en al menos dos archivos: la declaración del API (app.js) y los características de red (WWW). Incluso para una mejor estructura, ubica tu declaración del API dentro de los componentes.

**De lo contrario:** Se podrá acceder a tu API para realizar pruebas solo a través de llamadas HTTP (más lento y mucho más difícil para generar informes de cobertura). Probablemente tampoco sea un placer enorme mantener cientos de líneas de código en un solo archivo

🔗 [**Leer más: separar 'servidor' y 'aplicación' de express(Ingles)**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Usar una configuración segura, jerárquica y consciente del entorno

**TL;DR:** La configuración perfecta e impecable debe incluir (a) claves que se pueden leer desde el archivo Y desde la variable de entorno (b) los secretos se guardan fuera del código al que se ha hecho commit (c) config es jerárquica para facilitar la localización. Solo hay unos pocos paquetes que pueden ayudar a validar la mayoría de estos casos como [nconf](https://www.npmjs.com/package/nconf) y [config](https://www.npmjs.com/package/config)

**De lo contrario:** No cumplir con ninguno de los requisitos de configuración simplemente frena al equipo de desarrollo o al equipo de devpos. Probablemente ambos

🔗 [**Leer más: buenas prácticas de configuración(Ingles)**](/sections/projectstructre/configguide.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `2. Prácticas en manejo de errores`

## ![✔] 2.1  Usa Async-Await o promesas para manejo de errores asíncronos

**TL;DR:** El manejo de errores asincrónicos en el estilo de callback es probablemente la manera más rápida de ir al infierno (a.k.a, pyramid of doom o pirámide de la perdición). El mejor regalo que le puedes dar a tu código es utilizar una biblioteca de promesas seria o async-await que proporcione una sintaxis de código muy compacta y familiar como try-catch

**De lo contrario:** El estilo de callback de Node.JS, function (err, response), es una forma prometedora de código no mantenible debido a la combinación de manejo de errores con código accidentado, anidación excesiva y patrones de codificación incómodos

🔗 [**Leer más: evitar callbacks(Ingles)**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>


## ![✔] 2.2 Usa solo el objeto Error incorporado

**TL;DR:** Muchos arrojan errores como una cadena o como un tipo personalizado; esto complica la lógica de manejo de errores y la interoperabilidad entre módulos. Ya sea que rechace una promesa, genere una excepción o emita un error, usar solo el objeto de Error incorporado aumentará la uniformidad y evitará la pérdida de información.

**De lo contrario:** Al invocar algún componente, no estar seguro de qué tipo de errores son retornados, hace que sea mucho más difícil manejar los errores de forma adecuada. Peor aún, el uso de tipos personalizados para describir los errores puede conducir a la pérdida de información de error crítico como el seguimiento de la pila.

🔗 [**Leer más: utilizando el objeto de Error incorporado(Ingles)**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Distinguir errores operacionales contra errores del programador

**TL;DR:** Los errores operacionales (por ejemplo, el API recibió una entrada no válida) se refieren a casos conocidos en los que el impacto del error se entiende completamente y se pueden manejar con cuidado. Por otro lado, el error del programador (por ejemplo, tratar de leer la variable no definida) se refiere a fallas desconocidas del código que ordenan reiniciar correctamente la aplicación

**De lo contrario:** Siempre puedes reiniciar la aplicación cuando aparece un error, pero ¿por qué dejar ~5000 usuarios en línea abajo debido a un error operacional menor, previsto? lo contrario tampoco es ideal: mantener la aplicación activa cuando se produce un problema desconocido (error del programador) puede provocar un comportamiento imprevisto. La diferenciación de los dos permite actuar con tacto y aplicar un enfoque equilibrado basado en el contexto dado

  🔗 [**Leer más: error operacional vs programador(Ingles)**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Manejar los errores centralmente, no dentro de un middleware Express

**TL;DR:** La lógica de manejo de errores, como un correo al administrador y registro de logs, debe encapsularse en un objeto dedicado y centralizado al que todos los end-points (por ejemplo, Express middleware, cron jobs, unit-testing) llaman cuando se produce un error .

**De lo contrario:** No manejar los errores dentro de un solo lugar dará lugar a la duplicación del código y, probablemente, a los errores que se manejan de forma incorrecta

🔗 [**Leer más: manejo de errores en un lugar centralizado(Ingles)**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Errores del API Document con Swagger

**TL;DR:** Deja que los clientes de tu API sepan qué errores podrían presentarse como respuesta para que puedan manejarlos cuidadosamente sin fallar. Esto se hace generalmente con frameworks de documentación REST API como Swagger

**De lo contrario:** Un cliente del API podría decidir bloquearse y reiniciarse solo porque recibió un error que no pudo entender. Nota: la persona que llama de su API puede ser tu (muy típico en un entorno de microservicios)

🔗 [**Leer más: documentación de errores en Swagger(Ingles)**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Cerrar el proceso elegantemento cuando un extraño llega

**TL; DR:** Cuando se produce un error desconocido (un error del desarrollador, consulta el número de práctica recomendada número #3): existe incertidumbre acerca del estado de la aplicación. Una práctica común sugiere reiniciar el proceso cuidadosamente usando una herramienta 'reiniciadora' como Forever y PM2.

**De lo contrario:** Cuando se detecta una excepción desconocida, algunos objetos pueden estar en un estado defectuoso (por ejemplo, un emisor de eventos que se usa globalmente y que ya no se activan debido a fallas internas) y todas las solicitudes futuras pueden fallar o comportarse de manera loca

🔗 [**Leer más: cerrar el proceso(Ingles)**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Usa un logger maduro para aumentar la visibilidad de los errores

**TL;DR:** Un conjunto de herramientas de registro maduras como Winston, Bunyan o Log4J acelerará el descubrimiento y la comprensión de errores. Así que olvídate de console.log.

**De lo contrario:** Navegando a través de console.logs o manualmente a través de un archivo de texto desordenado sin consultar herramientas o un lector de registro decente puede mantenerte ocupado en el trabajo hasta tarde

🔗 [**Leer más: utilizando un registrador maduro(Ingles)**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Flujos de errores de prueba usando su test framework favorito

**TL;DR:** Ya sea que se trate de un profesional de QA automatizado o de una prueba de desarrollador manual: asegúrate de que tu código no solo satisfaga un escenario positivo sino que también maneje y devuelva los errores correctos. Frameworks de prueba como Mocha & Chai pueden manejar esto fácilmente (vea ejemplos de código dentro del "Gist emergente")

**De lo contrario:** Sin pruebas, ya sea automática o manualmente, no puedes confiar en nuestro código para devolver los errores correctos. Sin errores significativos, no hay manejo de errores

🔗 [**Leer más: probar los flujos de error(Ingles)**](/sections/errorhandling/testingerrorflows.md)

<br/> <br/>

## ![✔] 2.9 Descubre errores y tiempo de inactividad usando productos APM

**TL;DR:** Los productos de monitoreo y rendimiento (a.k.a APM) miden de forma proactiva tu base de código o API para auto-mágicamente resaltar errores, bloqueos y ralentizar automáticamente partes que echas en falta.

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento y los tiempos de inactividad de la API, probablemente nunca sabrás cuáles son las piezas de código más lentas en el escenario del mundo real y cómo afectan estas a la experiencia del usuario.

🔗 [**Leer más: utilizando productos APM(Ingles)**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Captura rechazos de promesas no controladas

**TL;DR:** Cualquier excepción lanzada dentro de una promesa será tragada y descartada a menos que un desarrollador no se olvide de manejarla de manera explícita. ¡Incluso si su código está suscrito a process.uncaughtException! Supera esto registrándose en el proceso del evento.

**De lo contrario:** Tus errores serán tragados y no dejarán rastros. Nada de que preocuparse

🔗 [**Leer más: captura rechazos de promesas no controladas(Ingles)**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Falla rápida, argumentos validos usando una biblioteca dedicada

**TL; DR:** Esto debería ser parte de sus mejores prácticas para Express - API de Assert para evitar errores desagradables que son mucho más difíciles de seguir más adelante. El código de validación suele ser tedioso a menos que se utilicen bibliotecas muy interesantes como Joi

**De lo contrario:** Considera esto: tu función espera un argumento numérico "Descuento" que la persona que llama olvida pasar, más adelante su código comprueba si Descuento!= 0 (cantidad de descuento permitido es mayor que cero), entonces permitirás el usuario que disfrute de un descuento. Dios mío, qué desagradable error. ¿Puedes verlo?

🔗 [**Leer más: falla rápida(Ingles)**](/sections/errorhandling/failfast.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `3. Code Style Practices`

## ![✔] 3.1 Usar ESLint

**TL;DR** ESLint es el estándar para verificar el estilo del código, no solo para identificar los pequeños detalles en los problemas de espaciamiento , sino también para detectar anti-patrones de código graves como desarrolladores que cometen errores sin clasificación. Usar ESLint y seguir el resto de las prácticas de estilo de código a continuación significa seguir los mismos estilos utilizados por el resto de la comunidad, así como los mismos estilos de código utilizados en los productos principales mismos.

**De lo contrario:** los desarrolladores se enfocarán en el tedioso espaciamiento y los problemas de ancho de línea

<br/><br/>

## ![✔] 3.2 Plugins específicos de Node JS  

**TL; DR:** Además de las reglas estándar de ESLint que cubre solamente vanilla JS, agregue plugins específicos de Node como [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) y [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security).

**De lo contrario:** Muchos patrones de código defectuosos de Node.JS podrían escaparse bajo el radar. Por ejemplo, los desarrolladores pueden requerir archivos (variableAsPath) con una variable dada como ruta que permita a los atacantes ejecutar cualquier script JS. Los linters de Node.JS pueden detectar tales patrones y quejarse temprano

<br/><br/>

## ![✔] 3.3 Iniciar las llaves de apertura de un bloque de código en la misma línea

**TL;DR:** Las llaves de apertura de un bloque de código deben estar en la misma línea de la declaración de apertura.

### Ejemplo de codigo
```javascript
  // haz
  function unaFuncion() {
    // bloque de codigo
  }

  //evita
  function someFunction
  {
    // bloque de codigo
  }
```

**De lo contrario:** La postergación de esta mejor práctica podría llevar a resultados inesperados, como se puede ver en el hilo de Stackoverflow a continuación:

🔗 [**Leer más:** "¿Por qué los resultados varían según la colocación de llaves?(Ingles)" (Stackoverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 No olvides el punto y coma

**TL; DR:** Aunque no se ha acordado por unanimidad, todavía se recomienda poner un punto y coma al final de cada declaración. Esto hará que tu código sea más legible y explícito para otros desarrolladores que lo lean.

**De lo contrario:** Como se vio en la sección anterior, el interprete de JavaScript automáticamente agrega un punto y coma al final de una declaración si no hay uno, eso puede llevar a algunos resultados no deseados.

<br/><br/>

## ![✔] 3.5 Nombra tus Funciones

**TL; DR:** Nombra todas las funciones, incluyendo cierres y devoluciones de llamada. Evita funciones anónimas. Esto es especialmente útil al perfilar una aplicación de node. Nombrar todas las funciones te permitirá entender fácilmente lo que estás viendo al revisar una foto instantánea de memoria.

**De lo contrario:** La depuración de problemas de producción usando un volcado de memoria (fotos instantáneas de memoria) puede convertirse en un desafío, ya que observa un consumo significativo de memoria de las funciones sin nombre.

<br/><br/>

## ![✔] 3.6 Convenciones de nomenclatura para variables, constantes, funciones y clases.

**TL;DR:** Usa ***lowerCamelCase*** al nombrar variables y funciones, ***UpperCamelCase*** (primera letra mayúscula también) al nombrar clases y ***UPPERCASE*** para constantes. Esto le ayudará a distinguir fácilmente entre variables / funciones simples y clases que requieren creación de instancias. Use nombres descriptivos, pero trata de mantenerlos cortos.

**De lo contrario:** avascript es el único lenguaje de programacion en el mundo que permite invocar a un constructor ("Clase") directamente sin instanciarlo primero. En consecuencia, las clases y los constructores de funciones se diferencian comenzando con UpperCamelCase.

### Ejemplo de código ###
```javascript
  // para el nombre de la clase usamos UpperCamelCase
  class EjemploDeUnaClase () { 
    
    // para nombrar const usamos UPPERCASE
    const CONFIG = {
      key: 'valor'
    };
    
    // Para las variables y nombres de funciones que usamos lowerCamelCase
    let ejemploDeUnaVariable = 'valor';
    function hazAlgo() {
      
    }

  }
```

<br/><br/>

## ![✔] 3.7 Prefiere const sobre let. Deshazte de var

**TL;DR:** Usar `const` significa que una vez que se asigna una variable, no se puede reasignar. Preferir const te ayudará a no tener la tentación de usar la misma variable para diferentes usos, y aclarar tu código. Si una variable necesita ser reasignada, por ejemplo, en un bucle for, usar `let` para declararlo. Otro aspecto importante de let es que una variable declarada con let solo está disponible en el ámbito de bloque en el que se definió. `var` es la función de ámbito, no de bloque de ámbito, y [no debe utilizarse en ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) Ahora que tienes const y let a tu disposición.

**De lo contrario:** La depuración se vuelve mucho más engorrosa cuando se sigue una variable que cambia con frecuencia.

🔗 [**Leer más: JavaScript ES6+: var, let, o const?(Ingles)** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Las requerimientos son lo primero, y no las funciones internas.

**TL;DR:** los requerimientos de los módulos al comienzo de cada archivo, antes y fuera de cualquier función. Esta sencilla práctica recomendada no solo lo ayudará a identificar las dependencias de un archivo en la parte superior de manera fácil y rápida, sino que también evita un par de problemas potenciales.

**De lo contrario:** Los requisitos se ejecutan de forma sincronizada por Node JS. Si se llaman desde dentro de una función, puede bloquear otras solicitudes para que no se manejen en un momento más crítico. Además, si un módulo requerido o cualquiera de sus propias dependencias produce un error y bloquea el servidor, es mejor informarse sobre él lo antes posible, lo que podría no ser el caso si ese módulo es requerido desde dentro de una función.

<br/><br/>

## ![✔] 3.9 Requerimientos en las carpetas, no directamente en los archivos

**TL;DR:** Al desarrollar un módulo / biblioteca en una carpeta, coloque un archivo index.js que exponga los internos del módulo
para que todos los consumidores pasen por ella. Esto sirve como una 'interfaz' para tu módulo y facilita
cambios futuros sin romper el contrato.

**De lo contrario:** Cambiar a la estructura interna de los archivos o la firma puede romper la interfaz con clientes.

### Ejemplo de codigo
```javascript
  // Haz
  module.exports.SMSProvider = require('./SMSProvider');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver');

  // Evita
  module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
  module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>


## ![✔] 3.10 Utilice el operador `===`

**TL;DR:** Prefiera el operador de igualdad estricta `===` sobre el operador de igualdad abstracto más débil `==`. `==` comparará dos variables después de convertirlas a un tipo común. No hay conversión de tipo en `===`, y ambas variables deben ser del mismo tipo para ser iguales.

**De lo contrario:** Las variables desiguales pueden devolver verdadero cuando se comparan con el operador `==`.

### Ejemplo de codigo
```javascript
'' == '0'           // falso
0 == ''             // verdadero
0 == '0'            // verdadero

false == 'false'    // falso
false == '0'        // verdadero

false == undefined  // falso
false == null       // falso
null == undefined   // verdadero

' \t\r\n ' == 0     // verdadero
```
Todas las declaraciones anteriores devolverán falso si se utilizan con `===`

<br/><br/>

## ![✔] 3.11 Utilice Async Await, evite devoluciones de llamada

**TL;DR:** Node 8 LTS ahora tiene soporte completo para Async-await. Esta es una nueva forma de lidiar con el código asíncrono que reemplaza las devoluciones de llamada y promesas. Async-await no bloquea, y hace que el código asíncrono parezca más síncrono. El mejor regalo que le puede dar a su código es usar async-await, que proporciona una sintaxis de código muy compacta y familiar, como try-catch.

**Otherwise:** Controlar los errores asíncronos en el estilo de devolución de llamada es probablemente la forma más rápida de llegar al infierno: este estilo obliga a revisar los errores por completo, lidiar con el anidamiento de códigos incómodos y dificultar la razón del flujo de código.

🔗[**Leer más:** Guia para async await 1.0(Ingles)](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Use Fat (=>) Arrow Functions 

**TL;DR:** Though it's recommended to use async-await and avoid function parameters, when dealing with older API that accept promises or callbacks - arrow functions makes the code structure more compact and keeps the lexical context of the root function (i.e. 'this').

**De lo contrario:** Longer code (in ES5 functions) is more prone to bugs and cumbersome to read.

🔗 [**Leer más: It’s Time to Embrace Arrow Functions(Ingles)**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>


# `4. Testing And Overall Quality Practices`

## ![✔] 4.1 At the very least, write API (component) testing

**TL;DR:** Most projects just don't have any automated testing due to short time tables or often the 'testing project' run out of control and being abandoned. For that reason, prioritize and start with API testing which are the easiest to write and provide more coverage than unit testing (you may even craft API tests without code using tools like [Postman](https://www.getpostman.com/). Afterwards, should you have more resources and time, continue with advanced test types like unit testing, DB testing, performance testing, etc 

**De lo contrario:** You may spend long days on writing unit tests to find out that you got only 20% system coverage

<br/><br/>

## ![✔] 4.2 Detect code issues with ESLint + specific Node plugin rules

**TL;DR:** ESLint is the de-facto standard for checking code style, not only to identify nitty-gritty spacing issues but also to detect serious code anti-patterns like developers throwing errors without classification. On top of ESLint standard rules that cover vanilla JS only, add Node-specific plugins like [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) and [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**De lo contrario:** Many faulty Node.JS code patterns might escape under the radar. For example, developers might require(variableAsPath) files with a variable given as path which allows attackers to execute any JS script. Node.JS linters can detect such patterns and complain early


<br/><br/>

## ![✔] 4.3 Carefully choose your CI platform (Jenkins vs Rest of the world)

**TL;DR:** Your continuous integration platform (CICD) will host all the quality tools (e.g test, lint) so it better come with a vibrant ecosystem of plugins. [Jenkins](https://jenkins.io/) is the default for many projects as it has the biggest community along with a very powerful platform at the price of complex setup that demands a steep learning curve. Its rivals, online SaaS tools like [Travis](https://travis-ci.org/) and [CircleCI](https://circleci.com), are much easier to setup, without the burden of managing the whole infrastructure. Eventually, it's a trade-off between robustness and speed - choose your side carefully

**De lo contrario:** Choosing some lightweight SaaS vendor might get you blocked once you need some advanced customization. On the other hand, going with Jenkins might burn precious time on infrastructure setup


<br/><br/>

## ![✔] 4.4 Constantly inspect for vulnerable dependencies

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities. This can get easily tamed using community and commercial tools such as 🔗 [nsp](https://github.com/nodesecurity/nsp) that can be invoked from your CI on every build

**De lo contrario:** Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious

<br/><br/>

## ![✔] 4.5 Tag your tests

**TL;DR:**  Different tests must run on different scenarios: quick smoke, IO-less, tests should run when a developer saves or commits a file, full end-to-end tests usually run when a new pull request is submitted, etc. This can be achieved by tagging tests with keywords like #cold #api #sanity so you can grep with your testing harness and invoke the desired subset. For example, this is how you would invoke only the sanity test group with [Mocha](https://mochajs.org/):  mocha --grep 'sanity'

**De lo contrario:** Running all the tests, including tests that perform dozens of DB queries, any time a developer makes a small change can be extremly slow and keep developers away for running tests

<br/><br/>

## ![✔] 4.6 Check your test coverage, it helps to identify wrong test patterns

**TL;DR:** Code coverage tools like [Istanbul/NYC ](https://github.com/gotwarlost/istanbul)are great for 3 reasons: it comes for free (no effort is required to benefit this reports), it helps to identify a decrease in testing coverage, and last but least it highlights testing mismatches: by looking at colored code coverage reports you may notice, for example, code areas that are never tested like catch clauses (meaning that tests only invoke the happy paths and not how the app behaves on errors). Set it to fail builds if the coverage falls under a certain threshold

**De lo contrario:** There won't be any automated metric that tells you when large portion of your code is not covered by testing


<br/><br/>

## ![✔] 4.7 Inspect for outdated packages

**TL;DR:** Use your preferred tool (e.g. 'npm outdated' or [npm-check-udpates](https://www.npmjs.com/package/npm-check-updates) to detect installed packages which are outdated, inject this check into your CI pipeline and even make a build fail in a severe scenario. For example, a sever scenario might be when an installed package lag by 5 patch commits behind (e.g. local version is 1.3.1 and repository version is 1.3.8) or it is tagged as deprecated by its author - kill the build and prevent deploying this version

**De lo contrario:** Your production will run packages that have been explicitly tagged by their author as risky 

<br/><br/>

## ![✔] 4.8 Use docker-compose for e2e testing

**TL;DR:** End to end (e2e) testing which includes live data used to be the weakest link of the CI process as it depends on multiple heavy services like DB. Docker-compose turns this problem into a breeze by crafting production-like environment using a simple text file and easy commands. It allows crafting all the dependent services, DB and isolated network for e2e testing. Last but not least, it can keep a stateless environment that is invoked before each test suite and dies right after


**De lo contrario:** Without docker-compose teams must maintain a testing DB for each testing environment including developers machines, keep all those DBs in sync so test results won't vary across environments


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `5. Going To Production Practices`
## ![✔] 5.1. Monitoring!

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that tick all boxes. Click ‘The Gist’ below for overview of solutions

**De lo contrario:** Failure === disappointed customers. Simple.


🔗 [**Lee mas: Monitoring!(Ingles)**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day  1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**De lo contrario:** You end-up with a blackbox that is hard to reason about, then you start re-writing all logging statements to add additional information


🔗 [**Lee mas: Increase transparency using smart logging(Ingles)**](/sections/production/smartlogging.md)
	
<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. Instead, use a ‘real’ middleware services like nginx, HAproxy or cloud vendor services

**De lo contrario:** Your poor single thread will keep busy doing networking tasks instead of dealing with your application core and performance will degrade accordingly


🔗 [**Lee mas: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy(Ingles)**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly NPM lets dependencies drift across environments be default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using NPM config files , .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grain control use NPM” shrinkwrap”. *Update: as of NPM5 , dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**De lo contrario:** QA will thoroughly test the code and approve a version that will behave differently at production. Even worse, different servers at the same production cluster might run different code


🔗 [**Leer más: Lock dependencies(Ingles)**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenario, ‘restarter’ tools like PM2 might be enough but in today ‘dockerized’ world – a cluster management tools should be considered as well

**De lo contrario:** Running dozens of instances without clear strategy and too many tools together (cluster management, docker, PM2) might lead to a devops chaos


🔗 [**Leer más: Guard process uptime using the right tool(Ingles)**](/sections/production/guardprocess.md)

 
<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs over a single CPU core while as all other are left idle. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**De lo contrario:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.JS utilizes only 1 (even using PaaS services like AWS beanstalk!)


🔗 [**Lee mas: Utilize all CPU cores(Ingles)**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**De lo contrario:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes


🔗 [**Leer más: Create a ‘maintenance endpoint’(Ingles)**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**De lo contrario:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real world scenario and how these affects the UX


🔗 [**Leer más: Discover errors and downtime using APM products(Ingles)**](/sections/production/apmproducts.md)


<br/><br/>


## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled inside (click Gist below) few development tips that are closely related to production maintenance

**De lo contrario:** A world champion IT/devops guy won’t save a system that is badly written


🔗 [**Leer más: Make your code production-ready(Ingles)**](/sections/production/productoncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leaks memory in Node’s code – thus watching Node’s process memory is a must. In small apps you may gauge memory  periodically using shell commands but in medium-large app consider baking your memory watch into a robust monitoring system

**De lo contrario:** Your process memory might leak a hundred megabytes a day like happened in Wallmart


🔗 [**Leer más: Measure and guard the memory usage(Ingles)**](/sections/production/measurememory.md)

<br/><br/>


## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really get hurts when dealing with many static files due to its single threaded model

**De lo contrario:** Your single Node thread will keep busy streaming hundreds of html/images/angular/react files instead of  allocating all its resources for the task it was born for – serving dynamic content


🔗 [**Leer más: Get your frontend assets out of Node(Ingles)**](/sections/production/frontendout.md)

<br/><br/>


## ![✔] 5.12. Be stateless, kill your Servers almost every day

**TL;DR:** Store any type of data (e.g. users session, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**De lo contrario:** Failure at a given server will result in application downtime instead of a just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server


🔗 [**Leer más: Be stateless, kill your Servers almost every day(Ingles)**](/sections/production/bestateless.md)


<br/><br/>


## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can get easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**De lo contrario:** Otherwise: Keeping your code clean from vulnerabilities without dedicated tools will require to constantly follow online publications about new threats. Quite tedious


🔗 [**Leer más: Use tools that automatically detect vulnerabilities(Ingles)**](/sections/production/detectvulnerabilities.md)

<br/><br/>


## ![✔] 5.14. Assign ‘TransactionId’ to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due its async nature, see code examples inside

**De lo contrario:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue


🔗 [**Leer más: Assign ‘TransactionId’ to each log statement(Ingles)**](/sections/production/assigntransactionid.md)

<br/><br/>


## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many NPM packages determining the current environment and optimize their code for production

**De lo contrario:** Omitting this simple property might greatly degrade performance. For example, when using Express for server side rendering omitting NODE_ENV makes the slower by a factor of three!


🔗 [**Leer más: Set NODE_ENV=production(Ingles)**](/sections/production/setnodeenv.md)


<br/><br/>


## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Researches show that teams who perform many deployments – lowers the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improves the deployment process. You should probably achieve that using Docker combined with CI tools as they became the industry standard for streamlined deployment

**De lo contrario:** Long deployments -> production down time & human-related error -> team unconfident and in making deployment -> less deployments and features

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="53 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible , at best  while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**De lo contrario:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Leer más: Lint rules(Ingles)**](sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, or (for smaller and less critical apps) a rate limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**De lo contrario:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Leer más: Implement rate limiting(Ingles)**](sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last result, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**De lo contrario:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Leer más: Secret management(Ingles)**](sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection agains injection attacks

**De lo contrario:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Leer más: Query injection prevention using ORM/ODM libraries(Ingles)**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**TL;DR:** These is a collection of security advice that are not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Leer más: Common security best practices(Ingles)**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**De lo contrario:** Attackers could perform direct attacks on your application's users, leading huge security vulnerabilities

🔗 [**Leer más: Using secure headers in your application(Ingles)**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**De lo contrario:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Leer más: Dependency security(Ingles)**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**De lo contrario:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Leer más: Use Bcrypt(Ingles)**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly being referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**De lo contrario:** An attacker might store a malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Leer más: Escape output(Ingles)**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it qualifies the expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**De lo contrario:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Leer más: Validate incoming JSON schemas(Ingles)**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**De lo contrario:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Leer más: Blacklist JSON Web Tokens(Ingles)**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Limit the allowed login requests of each user

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A brute force protection middleware such as [express-brute](https://www.npmjs.com/package/express-brute) should be used inside an express application to prevent brute force/dictionary attacks on sensitive routes such as /admin or /login based on request properties such as the user name, or other identifiers such as body parameters

**De lo contrario:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Leer más: Login rate limiting(Ingles)**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this users' behalf by invoking the container with the flag "-u username"

**De lo contrario:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Leer más: Run Node.js as non-root user(Ingles)**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**De lo contrario:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Leer más: Limit payload size(Ingles)**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing a custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**De lo contrario:** Malicious JavaScript code finds a way into a text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Lee mas: Avoid JavaScript eval statements(Ingles)**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**De lo contrario:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Leer más: Prevent malicious RegEx(Ingles)**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**De lo contrario:** Malicious user input could find its way to a parameter that is used to require tampered files, for example a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**Leer más: Safe module loading(Ingles)**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. cluster.fork()), serverless environment or dedicated npm packages that acting as a sandbox

**De lo contrario:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Leer más: Run unsafe code in a sandbox(Ingles)**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**De lo contrario:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Leer más: Be cautious when working with child processes(Ingles)**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**De lo contrario:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Leer más: Hide error details from client(Ingles)**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**De lo contrario:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**De lo contrario:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Leer más: Cookie and session security(Ingles)**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**De lo contrario:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

 <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**De lo contrario:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Leer más: Prevent unsafe redirects(Ingles)**](/sections/security/saferedirects.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

<br/><br/><br/>

# `Prácticas API`

## Nuestros colaboradores están trabajando en esta sección. ¿Te gustaría unirte?

# `Prácticas de rendimiento`

## Nuestros colaboradores están trabajando en esta sección. ¿Te gustaría unirte?

<br/><br/><br/>

# Hitos

Para mantener esta guía y mantenerla actualizada, estamos constantemente actualizando y mejorando las pautas y las mejores prácticas con la ayuda de la comunidad. Puedes seguir nuestros [hitos](https://github.com/i0natan/nodebestpractices/milestones) y únete a los grupos de trabajo si quieres contribuir a este proyecto.

<br/><br/>

## Traducciones

Todas las traducciones son aportadas por la comunidad. ¡Nos complacerá recibir ayuda con traducciones nuevas, en curso o nuevas!

### Traducciones completadas

- ![CN](/assets/flags/CN.png) [Chino](README.chinese.md) - Cortesia de [Matt Jin](https://github.com/mattjin)

### Traducciones en curso

- ![FR](/assets/flags/FR.png) [Frances](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Koreano](README.korean.md) - Cortesia de [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![RU](/assets/flags/RU.png) [Ruso](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
- ![ES](/assets/flags/ES.png) [Español](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turco ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/><br/>
# Contribuidores
## `Yoni Goldberg`
Developer & consultant, Backend expert, JavaScript enthusiast, focused on Node.JS. Many of the bullets was first published on his blog post [http://www.goldbergyoni.com](http://www.goldbergyoni.com)

## `Ido Richter`
👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast.

## `Mauricio Landa`
JavaScript Developer, English-Spanish translator|Interpreter

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help

## `Bruno Scheufler`

💻 full-stack web developer and Node.js enthusiast

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)

Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.

<br/><br/><br/>

# Notas de agradecimiento

Este repositorio se mantiene actualizado gracias a la ayuda de la comunidad. Apreciamos cualquier contribución, desde una única corrección de palabras hasta una nueva mejor práctica. A continuación se muestra una lista de todos los que contribuyeron a este proyecto. una 🌻 marca un pull request exitoso y ⭐ marca una nueva práctica recomendada aprobada

### Flowers

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Sagir Khan](https://github.com/sagirk),
🌻 [Jason Kim](https://github.com/serv),
🌻 [Mitja O.](https://github.com/Max101),
🌻 [Sandro Miguel Marques](https://github.com/SandroMiguel),
🌻 [Gabe Kuslansky](https://github.com/GabeKuslansky),
🌻 [Ron Gross](https://github.com/ripper234),
🌻 [Valeri Karpov](https://github.com/vkarpov15)
🌻 [Sergio](https://github.com/imsergiobernal),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Nikola Telkedzhiev](https://github.com/ntelkedzhiev),
🌻 [Vitor Godoy](https://github.com/vitordagamagodoy),
🌻 [Manish Saraan](https://github.com/manishsaraan),
🌻 [Sangbeom Han](https://github.com/uronly14me)

### Stars <br/>

⭐ [Kyle Martin](https://github.com/js-kyle)
⭐ [Keith Holliday](https://github.com/TheHollidayInn)

<br/><br/><br/>

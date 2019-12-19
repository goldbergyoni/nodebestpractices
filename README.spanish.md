

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

# ¡Bienvenido! 3 cosas que deberías saber primero:
**1. Aquí encontrarás docenas de los mejores artículos sobre Node.JS -** este es un resumen y conservación del contenido mejor clasificado de las mejores prácticas de NodeJS

**2. Es la compilación más grande y crece cada semana -** actualmente, se presentan más de 50 prácticas, guías de estilo y consejos arquitectónicos. Damos la bienvenida a issues y pull requests para mantener este libro actualizado. Nos encantaría verte contribuir aquí, ya sea corrigiendo algunos errores de código o sugiriendo nuevas ideas brillantes: se parte del libro de mejores prácticas de Node.JS

**3. La mayoría de los puntos tienen información adicional -** Encontrás cerca de cada punto de mejores prácticas el enlace **🔗Leer más** que te dará algunos ejemplos de código, citas de blogs seleccionados y mas información

<br/><br/><br/>

## Tabla de contenidos
1. [Prácticas para estructura del proyecto (5)](#1-project-structure-practices)
2. [Prácticas en manejo de errores (11) ](#2-error-handling-practices)
3. [Prácticas de estilo de código (12) ](#3-code-style-practices)
4. [Practicas de prueba y calidad en general (12) ](#4-testing-and-overall-quality-practices)
5. [Prácticas de puesta en producción (18) ](#5-going-to-production-practices)
6. [Prácticas de seguridad (25)](#6-security-best-practices)
7. [Prácticas de rendimiento (1) (In Progress️ ✍️)](#7-performance-best-practices)



<br/><br/><br/>
# `1. Prácticas de estructura del proyecto`

## ![✔] 1.1 Estructura tu solución en componentes

**TL;DR:** El peor inconveniente de las grandes aplicaciones es mantener una gran base de código con cientos de dependencias, un monolito que ralentiza a los desarrolladores que intentan incorporar nuevas características. En cambio, particiona tu código en componentes, cada uno obtiene su propia carpeta o una base de código dedicada, y asegúrate de que cada unidad se mantenga pequeña y simple. Visita 'Leer más' a continuación para ver ejemplos de la estructura correcta del proyecto

**De lo contrario:** Cuando desarrolladores codifican nuevas características luchan por darse cuenta del impacto de su cambio y temen romper otros componentes dependientes - las implementaciones se vuelven más lentas y más riesgosas. También se considera más difícil escalar cuando todas las unidades de negocios no están separadas

🔗 [**Leer más: estructura en componentes**](/sections/projectstructre/breakintcomponents.spanish.md)

<br/><br/>

## ![✔] 1.2 Aplicar capas para componentes, mantén Express dentro de sus límites

**TL;DR:** Cada componente debería contener 'capas'- un objeto dedicado para la web, la lógica y código para acceso a datos. Esto no solo genera una clara separación de conceptos sino que también facilita significativamente los mocks y la pruebas del sistema. Aunque este es un patrón muy común, los desarrolladores de APIs tienden a mezclar capas pasando los objetos de la capa web (Express req, res) a la lógica de negocios y capas de datos, esto hace que su aplicación dependa y solo sea accesible por Express.

**De lo contrario:** Una aplicación que mezcla objectos de web con otras capas no puede ser accedida por código de pruebas, CRON jobs y otras llamadas que no son de Express.

🔗 [**Leer más: Aplicar capas a tu aplicación**](/sections/projectstructre/createlayers.spanish.md)

<br/><br/>

## ![✔] 1.3 Envuelve las utilidades comunes como paquetes de NPM

**TL;DR:** En una aplicación grande que se constituye de múltples bases de código, utilidades transversales como los loggers, cifrado y similares, deben de estar envueltos por su propio código y expuestos como paquetes privados de NPM. Esto permite compartirlos entre múltiples base de código y proyectos.

**De lo contrario:** Tendrás que inventar tu propia implementación y rueda de dependencia

🔗 [**Leer más: Estructura por característica**](/sections/projectstructre/wraputilities.spanish.md)

<br/><br/>

## ![✔] 1.4 Separar 'servidor' y 'aplicación' de express

**TL;DR:** Evite el desagradable hábito de definir toda la aplicación [Express](https://expressjs.com/) en un único archivo enorme; separa tú definición de 'Express' en al menos dos archivos: la declaración del API (app.js) y los características de red (WWW). Incluso para una mejor estructura, ubica tu declaración del API dentro de los componentes.

**De lo contrario:** Se podrá acceder a tu API para realizar pruebas solo a través de llamadas HTTP (más lento y mucho más difícil para generar informes de cobertura). Probablemente tampoco sea un placer enorme mantener cientos de líneas de código en un solo archivo

🔗 [**Leer más: separar 'servidor' y 'aplicación' de express**](/sections/projectstructre/separateexpress.spanish.md)

<br/><br/>

## ![✔] 1.5 Usar una configuración segura, jerárquica y consciente del entorno

**TL;DR:** La configuración perfecta e impecable debe incluir (a) claves que se pueden leer desde el archivo Y desde la variable de entorno (b) los secretos se guardan fuera del código al que se ha hecho commit (c) config es jerárquica para facilitar la localización. Solo hay unos pocos paquetes que pueden ayudar a validar la mayoría de estos casos como [nconf](https://www.npmjs.com/package/nconf) y [config](https://www.npmjs.com/package/config)

**De lo contrario:** No cumplir con ninguno de los requisitos de configuración simplemente frena al equipo de desarrollo o al equipo de devpos. Probablemente ambos

🔗 [**Leer más: buenas prácticas de configuración**](/sections/projectstructre/configguide.spanish.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `2. Prácticas en manejo de errores`

## ![✔] 2.1  Usa Async-Await o promesas para manejo de errores asíncronos

**TL;DR:** El manejo de errores asincrónicos en el estilo de callback es probablemente la manera más rápida de ir al infierno (a.k.a, pyramid of doom o pirámide de la perdición). El mejor regalo que le puedes dar a tu código es utilizar una biblioteca de promesas seria o async-await que proporcione una sintaxis de código muy compacta y familiar como try-catch

**De lo contrario:** El estilo de callback de Node.JS, function (err, response), es una forma prometedora de código no mantenible debido a la combinación de manejo de errores con código accidentado, anidación excesiva y patrones de codificación incómodos

🔗 [**Leer más: evitar callbacks**](/sections/errorhandling/asyncerrorhandling.spanish.md)

<br/><br/>


## ![✔] 2.2 Usa solo el objeto Error incorporado

**TL;DR:** Muchos arrojan errores como una cadena o como un tipo personalizado; esto complica la lógica de manejo de errores y la interoperabilidad entre módulos. Ya sea que rechace una promesa, genere una excepción o emita un error, usar solo el objeto de Error incorporado aumentará la uniformidad y evitará la pérdida de información.

**De lo contrario:** Al invocar algún componente, no estar seguro de qué tipo de errores son retornados, hace que sea mucho más difícil manejar los errores de forma adecuada. Peor aún, el uso de tipos personalizados para describir los errores puede conducir a la pérdida de información de error crítico como el seguimiento de la pila.

🔗 [**Leer más: utilizando el objeto de Error incorporado**](/sections/errorhandling/useonlythebuiltinerror.spanish.md)

<br/><br/>

## ![✔] 2.3 Distinguir errores operacionales contra errores del programador

**TL;DR:** Los errores operacionales (por ejemplo, el API recibió una entrada no válida) se refieren a casos conocidos en los que el impacto del error se entiende completamente y se pueden manejar con cuidado. Por otro lado, el error del programador (por ejemplo, tratar de leer la variable no definida) se refiere a fallas desconocidas del código que ordenan reiniciar correctamente la aplicación

**De lo contrario:** Siempre puedes reiniciar la aplicación cuando aparece un error, pero ¿por qué dejar ~5000 usuarios en línea abajo debido a un error operacional menor, previsto? lo contrario tampoco es ideal: mantener la aplicación activa cuando se produce un problema desconocido (error del programador) puede provocar un comportamiento imprevisto. La diferenciación de los dos permite actuar con tacto y aplicar un enfoque equilibrado basado en el contexto dado

  🔗 [**Leer más: error operacional vs programador**](/sections/errorhandling/operationalvsprogrammererror.spanish.md)

<br/><br/>

## ![✔] 2.4 Manejar los errores centralmente, no dentro de un middleware Express

**TL;DR:** La lógica de manejo de errores, como un correo al administrador y registro de logs, debe encapsularse en un objeto dedicado y centralizado al que todos los end-points (por ejemplo, Express middleware, cron jobs, unit-testing) llaman cuando se produce un error .

**De lo contrario:** No manejar los errores dentro de un solo lugar dará lugar a la duplicación del código y, probablemente, a los errores que se manejan de forma incorrecta

🔗 [**Leer más: manejo de errores en un lugar centralizado**](/sections/errorhandling/centralizedhandling.spanish.md)

<br/><br/>

## ![✔] 2.5 Errores del API Document con Swagger

**TL;DR:** Deja que los clientes de tu API sepan qué errores podrían presentarse como respuesta para que puedan manejarlos cuidadosamente sin fallar. Esto se hace generalmente con frameworks de documentación REST API como Swagger

**De lo contrario:** Un cliente del API podría decidir bloquearse y reiniciarse solo porque recibió un error que no pudo entender. Nota: la persona que llama de su API puede ser tu (muy típico en un entorno de microservicios)

🔗 [**Leer más: documentación de errores en Swagger**](/sections/errorhandling/documentingusingswagger.spanish.md)

<br/><br/>

## ![✔] 2.6 Cerrar el proceso elegantemento cuando un extraño llega

**TL; DR:** Cuando se produce un error desconocido (un error del desarrollador, consulta el número de práctica recomendada número #3): existe incertidumbre acerca del estado de la aplicación. Una práctica común sugiere reiniciar el proceso cuidadosamente usando una herramienta 'reiniciadora' como Forever y PM2.

**De lo contrario:** Cuando se detecta una excepción desconocida, algunos objetos pueden estar en un estado defectuoso (por ejemplo, un emisor de eventos que se usa globalmente y que ya no se activan debido a fallas internas) y todas las solicitudes futuras pueden fallar o comportarse de manera loca

🔗 [**Leer más: cerrar el proceso**](/sections/errorhandling/shuttingtheprocess.spanish.md)

<br/><br/>

## ![✔] 2.7 Usa un logger maduro para aumentar la visibilidad de los errores

**TL;DR:** Un conjunto de herramientas de registro maduras como Winston, Bunyan o Log4J acelerará el descubrimiento y la comprensión de errores. Así que olvídate de console.log.

**De lo contrario:** Navegando a través de console.logs o manualmente a través de un archivo de texto desordenado sin consultar herramientas o un lector de registro decente puede mantenerte ocupado en el trabajo hasta tarde

🔗 [**Leer más: utilizando un registrador maduro**](/sections/errorhandling/usematurelogger.spanish.md)

<br/><br/>

## ![✔] 2.8 Flujos de errores de prueba usando su test framework favorito

**TL;DR:** Ya sea que se trate de un profesional de QA automatizado o de una prueba de desarrollador manual: asegúrate de que tu código no solo satisfaga un escenario positivo sino que también maneje y devuelva los errores correctos. Frameworks de prueba como Mocha & Chai pueden manejar esto fácilmente (vea ejemplos de código dentro del "Gist emergente")

**De lo contrario:** Sin pruebas, ya sea automática o manualmente, no puedes confiar en nuestro código para devolver los errores correctos. Sin errores significativos, no hay manejo de errores

🔗 [**Leer más: probar los flujos de error**](/sections/errorhandling/testingerrorflows.spanish.md)

<br/> <br/>

## ![✔] 2.9 Descubre errores y tiempo de inactividad usando productos APM

**TL;DR:** Los productos de monitoreo y rendimiento (a.k.a APM) miden de forma proactiva tu base de código o API para auto-mágicamente resaltar errores, bloqueos y ralentizar automáticamente partes que echas en falta.

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento y los tiempos de inactividad de la API, probablemente nunca sabrás cuáles son las piezas de código más lentas en el escenario del mundo real y cómo afectan estas a la experiencia del usuario.

🔗 [**Leer más: utilizando productos APM**](/sections/errorhandling/apmproducts.spanish.md)

<br/><br/>

## ![✔] 2.10 Captura rechazos de promesas no controladas

**TL;DR:** Cualquier excepción lanzada dentro de una promesa será tragada y descartada a menos que un desarrollador no se olvide de manejarla de manera explícita. ¡Incluso si su código está suscrito a process.uncaughtException! Supera esto registrándose en el proceso del evento.

**De lo contrario:** Tus errores serán tragados y no dejarán rastros. Nada de que preocuparse

🔗 [**Leer más: captura rechazos de promesas no controladas**](/sections/errorhandling/catchunhandledpromiserejection.spanish.md)

<br/><br/>

## ![✔] 2.11 Falla rápidamente, valida argumentos usando una biblioteca dedicada

**TL; DR:** Esto debería ser parte de sus mejores prácticas para Express - API de Assert para evitar errores desagradables que son mucho más difíciles de seguir más adelante. El código de validación suele ser tedioso a menos que se utilicen bibliotecas muy interesantes como Joi

**De lo contrario:** Considera esto: tu función espera un argumento numérico "Descuento" que la persona que llama olvida pasar, más adelante su código comprueba si Descuento!= 0 (cantidad de descuento permitido es mayor que cero), entonces permitirás el usuario que disfrute de un descuento. Dios mío, qué desagradable error. ¿Puedes verlo?

🔗 [**Leer más: falla rapidamente**](/sections/errorhandling/failfast.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Regresar arriba</a></p>

# `3. Prácticas de estilo de código`

## ![✔] 3.1 Utilizar ESLint

**TL;DR:** [ESLint](https://eslint.org) es el estándar para verificar posibles errores de código y corregir el estilo del código, no solo para identificar problemas básicos, sino también para detectar anti-patrones de código graves, como los desarrolladores que arrojan errores sin clasificación. Aunque ESLint puede corregir automáticamente los estilos de código, otras herramientas como [prettier](https://www.npmjs.com/package/prettier) y [beautify](https://www.npmjs.com/package/js-beautify) son más potentes para formatear la solución y funcionan en conjunto con ESLint

**De lo contrario:** Los desarrolladores podrían desperdiciar demasiado tiempo centrándose demasiado en el corregir los espacios y el ancho de línea del código

🔗 [**Leer más: Usando ESLint y Prettier**](/sections/codestylepractices/eslint_prettier.spanish.md)

<br/><br/>

## ![✔] 3.2 Paquetes específicos para Node.js

**TL;DR:** Además de las reglas estándar de ESLint que cubre a JavaScript vainilla, es bueno agregar complementos específicos de Node.js como [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) y [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**De lo contrario:** Muchos patrones defectuosos de Node.js pueden no ser detectados. Por ejemplo, los desarrolladores pueden requerir archivos (variableAsPath) con una variable dada como ruta que permita a los atacantes ejecutar cualquier script JS. Los linters de Node.js pueden detectar tales patrones y ayudar a que esto no ocurra
<br/><br/>

## ![✔] 3.3 Empieza con las llaves en la misma línea en el código

**TL;DR:** Las llaves de apertura de un bloque de código deben estar en la misma línea que la declaración de apertura

### Ejemplo de código

```javascript
// Haz esto
function someFunction() {
  // code block
}

// Evita esto
function someFunction()
{
  // code block
}
```

**De lo contrario:** Diferir esta práctica recomendada puede generar resultados inesperados, como se ve en el hilo de StackOverflow a continuación:

🔗 [**Leer más:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Separa tus declaraciones correctamente

No importa si usas punto y coma o no para separar tus declaraciones, conocer las trampas comunes de los saltos de línea inadecuados o la inserción automática de punto y coma, te ayudará a eliminar los errores de sintaxis habituales.

**TL;DR:** Utiliza ESLint para obtener conciencia sobre las preocupaciones de separación. [Prettier](https://prettier.io/) o [Standardjs](https://standardjs.com/) puede resolver automáticamente estos inconvenientes.

**De lo contrario:** Como se vio en la sección anterior, el intérprete de JavaScript agrega automáticamente un punto y coma al final de una declaración si no hay una, o considera que una declaración no terminó donde debería, lo que podría generar algunos resultados no deseados. Puedes usar asignaciones y evitar el uso de expresiones de funciones invocadas inmediatas para evitar la mayoría de los errores inesperados.

### Ejemplo de código

```javascript
// Haz esto
function doThing() {
    // ...
}

doThing()

// Haz esto

const items = [1, 2, 3]
items.forEach(console.log)

// Evita esto — provoca error
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// Evita esto — provoca error
const count = 2 // intenta ejecutar 2(), pero 2 no es una función
(function doSomething() {
  // do something amazing
}())
// Pon un punto y coma antes de la función invocada inmediata, después de la definición constante, guarda el valor de retorno de la función anónima en una variable o evite los IIFE por completo
```

🔗 [**Leer más:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Leer más:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Pon nombre a tus funciones

**TL;DR:** Nombra todas las funciones, incluidos los cierres y las devoluciones de llamada. Evita funciones anónimas. Esto es especialmente útil cuando se perfila una aplicación de Node. Nombrar todas las funciones le permitirá comprender fácilmente lo que está viendo al revisar un registro de memoria

**De lo contrario:** La depuración de problemas de producción utilizando un registro de memoria (log) puede ser un desafío ya que observa un numero significativo de funciones anónimas

<br/><br/>

## ![✔] 3.6 Usa convenciones de nomenclatura para variables, constantes, funciones y clases.

**TL;DR:** Utiliza **_lowerCamelCase_** al nombrar constantes, variables y funciones y utiliza **_UpperCamelCase_** (la primera en mayúscula también) cuando nombres clases. Esto lo ayudará a distinguir fácilmente entre variables / funciones simples y clases que requieren instanciación. Use nombres descriptivos, pero trate de mantenerlos cortos

**De lo contrario:** Javascript es el único lenguaje en el mundo que permite invocar a un constructor ("Clase") directamente sin instanciarlo primero. En consecuencia, las clases y los constructores de funciones se diferencian comenzando con UpperCamelCase

### 3.6 Ejemplo de código

```javascript
// para una clase utilizamos UpperCamelCase
class SomeClassExample {}

// para las constantes utilizamos la palabra reservada const y lowerCamelCase
const config = {
  key: 'value'
};

// para las variables y funciones utilizamos lowerCamelCase
let someVariableExample = 'value';
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Escoje const antes que let. No uses var

**TL;DR:** Usar`const` significa que una vez que se asigna una variable, no se puede reasignar. Prefiriendo`const` te ayudaré a no sentirte tentado a usar la misma variable para diferentes usos y a aclarar tu código. Si una variable necesita ser reasignada, en un bucle for, por ejemplo, usa `let` para declararlo. Otro aspecto importante de `let`es que una variable declarada usando solo está disponible en el ámbito del bloque en el que se definió. `var` tiene ámbito de función, no ámbito de bloque, y [no debería ser usada en ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) ahora que tienes `const` y `let` a tu disposición

**De lo contrario:** La depuración se vuelve mucho más engorrosa cuando se sigue una variable que cambia con frecuencia

🔗 [**Leer más: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Importa los módulos primero, no dentro de funciones

**TL;DR:** Importa los módulos al comienzo de cada archivo, antes y fuera de cualquier función. Esta práctica recomendada simple no solo lo ayudará a identificar fácil y rápidamente las dependencias de un archivo en la parte superior, sino que también evitará un par de posibles problemas.

**De lo contrario:** Los requisitos se ejecutan sincrónicamente por Node.js. Si se los llama desde una función, puede bloquear el manejo de otras solicitudes en un momento más crítico. Además, si un módulo requerido o cualquiera de sus propias dependencias arroja un error y bloquea el servidor, es mejor averiguarlo lo antes posible, lo que podría no ser el caso si ese módulo se requiere desde una función

<br/><br/>

## ![✔] 3.9 Importa los módulos por carpetas y no por archivos directamente

**TL;DR:** Al desarrollar un módulo / biblioteca en una carpeta, coloca un archivo index.js que exponga los componentes internos del módulo para que todos los consumidores lo atraviesen. Esto sirve como una 'interfaz' para tu módulo y facilita los cambios futuros sin romper el contrato

**De lo contrario:** Cambiar la estructura interna de los archivos o la firma puede romper la interfaz con los clientes

### 3.9 Ejemplo de código

```javascript
// Haz esto
module.exports.SMSProvider = require('./SMSProvider');
module.exports.SMSNumberResolver = require('./SMSNumberResolver');

// Evita esto
module.exports.SMSProvider = require('./SMSProvider/SMSProvider.js');
module.exports.SMSNumberResolver = require('./SMSNumberResolver/SMSNumberResolver.js');
```

<br/><br/>

## ![✔] 3.10 Usa el operador `===`

**TL;DR:** Prioriza el operador de igualdad `===` por sobre de el operador de igualdad abstracto `==`. `==` comparará dos variables después de convertirlas a un tipo común. No hay conversión de tipo en `===`, y ambas variables deben ser del mismo tipo para ser iguales

**De lo contrario:** Variables que no son iguales pueden devolver `true` con el operador `==` 

### 3.10 Ejemplo de código

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

Todo lo de encima hubiera devuelto `false` si se hubiera usado `===`

<br/><br/>

## ![✔] 3.11 Usa Async Await, evita callbacks

**TL;DR:** Node 8 LTS ahora tiene soporte completo para Async-await. Esta es una nueva forma de lidiar con el código asincrónico que reemplaza las devoluciones de llamada y las promesas. Async-await no bloquea y hace que el código asincrónico se vea sincrónico. El mejor regalo que puede dar a su código es usar async-await, que proporciona una sintaxis de código mucho más compacta y familiar como try-catch

**De lo contrario:** El manejo de errores asíncronos en el estilo de callback es probablemente la forma más rápida de ir al infierno: este estilo obliga a verificar los errores por todas partes, lidiar con la incómoda anidación de código y hace que sea difícil razonar sobre el flujo de código

🔗[**Leer más:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Usar funciones de flecha (=>)

**TL;DR:** Aunque se recomienda usar async-wait y evitar parámetros de función cuando se trata de API más antiguas que aceptan promesas o callbacks. Las funciones de flecha hacen que la estructura del código sea más compacta y mantienen el contexto léxico de la función raíz (i.e. `this`)

**De lo contrario:** El código más largo (en las funciones de ES5) es más propenso a errores y engorroso de leer

🔗 [**Leer más: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `4. Pruebas y prácticas generales de calidad`

## ![✔] 4.1 Por lo menos, escribe las pruebas de la API (componente)

**TL;DR:** La mayoría de los proyectos simplemente no tienen pruebas automatizadas debido a los cortos horarios o, a menudo, el 'proyecto de prueba' se salió de control y fue abandonado. Por esa razón, priorice y comience con las pruebas API, que es la forma más fácil de escribir y proporciona más cobertura que las pruebas unitarias (incluso puede crear pruebas API sin código utilizando herramientas como [Postman](https://www.getpostman.com/). Luego, si tiene más recursos y tiempo, continúe con los tipos de pruebas avanzadas como pruebas unitarias, pruebas de base de datos, pruebas de rendimiento, etc.

**De lo contrario:** Puede pasar largos días escribiendo pruebas unitarias para descubrir que solo tiene un 20% de cobertura del sistema

<br/><br/>

## ![✔] 4.2 Incluye 3 partes en cada nombre de prueba

**TL;DR:** Haga que la prueba hable a nivel de requisitos para que se explique por sí mismo también a los ingenieros y desarrolladores de control de calidad que no están familiarizados con el código interno. Indique en el nombre de la prueba qué se está probando (unidad bajo prueba), en qué circunstancias y cuál es el resultado esperado

**De lo contrario:** Una implementación simplemente falló, una prueba llamada "Agregar producto" falló. ¿Esto te dice exactamente qué está funcionando mal?

🔗 [**Leer más: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Pruebas de estructura por el patrón AAA

**TL;DR:** Estructura tus pruebas con 3 secciones bien separadas: Organizar, Actuar y Afirmar (AAA - Arrange, Act & Assert). La primera parte incluye la configuración de la prueba, luego la ejecución de la unidad bajo prueba y finalmente la fase de afirmación. Seguir esta estructura garantiza que el lector no gaste CPU cerebral en comprender el plan de prueba

**De lo contrario:** No solo pasa largas horas diarias entendiendo el código principal, ahora también lo que debería haber sido la parte simple del día (pruebas) ha ejercitado tu cerebro

🔗 [**Leer más: Structure tests by the AAA pattern**](/sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Detecta problemas de código con un linter

**TL;DR:** Usa un código de interfaz para verificar la calidad básica y detectar antipatrones temprano. Ejecútala antes de cualquier prueba y agrégalo como un git-hook previo al commit para minimizar el tiempo necesario para revisar y corregir cualquier problema. También verifica la [Sección 3](#3-code-style-practices) sobre las prácticas de estilo de código

**De lo contrario:** Puede dejar pasar algún código antipatrón y posible código vulnerable a su entorno de producción.

<br/><br/>

## ![✔] 4.5 Evita datos globales, agrega datos personalizados por prueba

**TL;DR:** Para evitar el acoplamiento de pruebas y razonar fácilmente sobre el flujo de prueba, cada prueba debe agregar y actuar en su propio conjunto de filas de base de datos. Cada vez que una prueba necesita extraer o asumir la existencia de algunos datos de base de datos, debes agregar explícitamente esos datos y evitar la mutación de cualquier otro registro

**De lo contrario:** Considera un escenario en el que se cancela la implementación debido a las pruebas fallidas, el equipo ahora pasará un tiempo de investigación precioso que termina en una triste conclusión: el sistema funciona bien, las pruebas sin embargo interfieren entre sí y rompen la construcción

🔗 [**Leer más: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Inspecciona constantemente las dependencias vulnerables.

**TL;DR:** Incluso las dependencias de mayor reputación como Express tienen vulnerabilidades conocidas. Esto se puede controlar fácilmente utilizando herramientas comunitarias y comerciales como 🔗 [npm audit](https://docs.npmjs.com/cli/audit) y 🔗 [snyk.io](https://snyk.io) que se puede invocar desde su CI en cada compilación

**De lo contrario:** Mantener su código limpio de vulnerabilidades sin herramientas dedicadas requerirá seguir constantemente las publicaciones en línea sobre nuevas amenazas. Bastante tedioso

<br/><br/>

## ![✔] 4.7 Etiqueta tus pruebas

**TL;DR:** Deben ejecutarse diferentes pruebas en diferentes escenarios: "quick smoke", "IO-less", pruebas que deben ejecutarse cuando un desarrollador guarda o hace commit a un archivo, pruebas completas de extremo a extremo generalmente se ejecutan cuando se envía una nueva solicitud de pull , etc. Esto se puede lograr etiquetando las pruebas con palabras clave como #cold #api #sanity para que pueda aprovechar su arnés de prueba e invocar el subconjunto deseado. Por ejemplo, así es como invocaría solo al grupo de prueba de sanidad con [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**De lo contrario:** La ejecución de todas las pruebas, incluidas las pruebas que realizan docenas de consultas DB, cada vez que un desarrollador realiza un pequeño cambio puede ser extremadamente lento y mantiene a los desarrolladores lejos de ejecutar pruebas

<br/><br/>

## ![✔] 4.8 Verifique su cobertura de prueba, ayuda a identificar patrones de prueba incorrectos

**TL;DR:** Herramientas de cobertura de código como [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) son excelentes por 3 razones: son gratis (no se requiere ningún esfuerzo para realizar estos informes), ayudan a identificar una disminución en la cobertura de las pruebas y, por último, pero no menos importante, resaltan los desajustes de las pruebas: al mirar los informes de cobertura de códigos de colores puede que veas, por ejemplo, áreas de código que nunca se prueban como cláusulas catch (lo que significa que las pruebas solo invocan las rutas felices y no cómo se comporta la aplicación ante los errores). Configúrelo para generar fallos si la cobertura cae por debajo de un cierto umbral

**De lo contrario:** No habrá ninguna métrica automatizada que le indique cuándo una gran parte de su código no está cubierto por las pruebas

<br/><br/>

## ![✔] 4.9 Inspecciona los paquetes obsoletos

**TL;DR:** Usa tu herramienta preferida (e.g. 'npm outdated' o [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) para detectar paquetes instalados que están desactualizados, inyecte esta verificación en su canalización de CI e incluso haga que una compilación falle en un escenario grave. Por ejemplo, un escenario grave podría ser cuando un paquete instalado tiene 5 parches confirmados (por ejemplo, la versión local es 1.3.1 y la versión del repositorio es 1.3.8) o está etiquetado como obsoleto por su autor: elimine la compilación y evite implementar esto versión

**De lo contrario:** Su producción ejecutará paquetes que han sido etiquetados explícitamente por su autor como riesgosos

<br/><br/>

## ![✔] 4.10 Usa ambiente de producción para pruebas e2e

**TL;DR:** La prueba de extremo a extremo (e2e) que incluye datos en vivo solía ser el eslabón más débil del proceso de CI, ya que depende de múltiples servicios pesados como DB. Usa un entorno que esté lo más cerca posible de su producción real como a-continue

**De lo contrario:** Sin los equipos compuestos por docker, deben mantener una base de datos de prueba para cada entorno de prueba, incluidas las máquinas de los desarrolladores, mantener todas esas bases de datos sincronizadas para que los resultados de la prueba no varíen entre entornos.

<br/><br/>

## ![✔] 4.11 Refactoriza regularmente utilizando herramientas de análisis estático

**TL;DR:** El uso de herramientas de análisis estático ayuda al proporcionar formas objetivas para mejorar la calidad del código y mantiene tu código mantenible. Puedes agregar herramientas de análisis estático a su compilación de CI para que falle cuando encuentre que el código huele. Sus principales puntos de venta sobre el revestimiento simple son la capacidad de inspeccionar la calidad en el contexto de múltiples archivos (por ejemplo, detectar duplicaciones), realizar análisis avanzados (por ejemplo, complejidad del código) y seguir el historial y el progreso de los problemas de código. Dos ejemplos de herramientas que puede usar son [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) y [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**De lo contrario:** Con una mala calidad de código, los errores y el rendimiento siempre serán un problema que ninguna biblioteca nueva brillante o características de última generación podrá solucionar

🔗 [**Leer más: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Elije con cuidado tu plataforma CI (Jenkins vs CircleCI vs Travis vs Resto del mundo)

**TL;DR:** Tu plataforma de integración continua (CICD) alojará todas las herramientas de calidad (por ejemplo, prueba, pelusa), por lo que debería venir con un ecosistema vibrante de complementos. [Jenkins](https://jenkins.io/) solía ser el valor predeterminado para muchos proyectos, ya que tiene la comunidad más grande junto con una plataforma muy poderosa al precio de una configuración compleja que exige una curva de aprendizaje empinada. Hoy en día, se ha vuelto mucho más fácil configurar una solución de CI utilizando herramientas SaaS como [CircleCI](https://circleci.com) y otros. Estas herramientas permiten crear una tubería de CI flexible sin la carga de administrar toda la infraestructura. Eventualmente, es una compensación entre robustez y velocidad: elije tu lado con cuidado

**De lo contrario:** Elegir un proveedor de nicho puede bloquearlo una vez que necesite una personalización avanzada. Por otro lado, ir con Jenkins podría quemar un tiempo precioso en la configuración de la infraestructura

🔗 [**Leer más: Choosing CI platform**](/sections/testingandquality/citools.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `5. Yendo a las prácticas de producción`

## ![✔] 5.1. Monitorización

**TL;DR:** Monitorear es un juego para descubrir problemas antes de que lo hagan los clientes; obviamente, se le debe asignar una importancia sin precedentes. El mercado está abrumado por las ofertas, por lo tanto, considera empezar con la definición de las métricas básicas que debe seguir (mis sugerencias en el interior), luego repasar características sofisticadas adicionales y elegir la solución que cumple todos los requisitos. Haga clic en "Lo esencial" a continuación para obtener una descripción general de las soluciones

**De lo contrario:** Fallar === clientes decepcionados. Simple

🔗 [**Leer más: Monitoring!**](/sections/production/monitoring.spanish.md)

<br/><br/>

## ![✔] 5.2. Aumenta la transparencia utilizando unos registros inteligentes

**TL;DR:** Los registros pueden ser un almacén tonto de declaraciones de depuración o el habilitador de un hermoso tablero que cuenta la historia de tu aplicación. Planifica tu plataforma de registro desde el día 1: cómo se recopilan, almacenan y analizan los registros para garantizar que la información deseada (por ejemplo, tasa de error, después de una transacción completa a través de servicios y servidores, etc.) realmente se pueda extraer

**De lo contrario:** Terminarás con un cuadro negro con el que es difícil razonar y luego empezaras a reescribir todas las declaraciones de registro para agregar información adicional

🔗 [**Leer mas: Increase transparency using smart logging**](/sections/production/smartlogging.spanish.md)

<br/><br/>

## ![✔] 5.3. Delega todo lo posible (por ejemplo, gzip, SSL) a un proxy inverso

**TL;DR:** Node es terriblemente malo para realizar tareas intensivas de CPU como gzipping, terminación SSL, etc. En su lugar, debes usar servicios de middleware "reales" como nginx, HAproxy o servicios de proveedores en la nube

**De lo contrario:** Tu único subproceso se mantendrá ocupado haciendo tareas de infraestructura en lugar de ocuparse del núcleo de tu aplicación y el rendimiento se degradará en consecuencia

🔗 [**Leer más: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.spanish.md)

<br/><br/>

## ![✔] 5.4. Bloquear dependencias

**TL;DR:** Tu código debe ser idéntico en todos los entornos, pero sorprendentemente npm permite que las dependencias se desplacen entre los entornos de forma predeterminada: cuando instala paquetes en varios entornos, intenta obtener la última versión del parche de los paquetes. Evita esto utilizando archivos de configuración npm, .npmrc, que le indican a cada entorno que guarde la versión exacta (no la última) de cada paquete. Alternativamente, para un control más fino usa `npm shrinkwrap`. \ * Actualización: a partir de NPM5, las dependencias están bloqueadas de forma predeterminada. El nuevo administrador de paquetes, Yarn, también lo cubre por defecto

**De lo contrario:** El control de calidad probará a fondo el código y aprobará una versión que se comportará de manera diferente cuando está en producción. Peor aún, diferentes servidores en el mismo clúster de producción pueden ejecutar código diferente

🔗 [**Leer más: Lock dependencies**](/sections/production/lockdependencies.spanish.md)

<br/><br/>

## ![✔] 5.5. Proteja la disponibilidad del proceso utilizando la herramienta adecuada

**TL;DR:** El proceso debe continuar y reiniciarse si falla. Para escenarios simples, las herramientas de administración de procesos como PM2 pueden ser suficientes, pero en el mundo "dockerizado" de hoy en día, las herramientas de administración de clústeres también deben considerarse

**De lo contrario:** Ejecutar docenas de instancias sin una estrategia clara y demasiadas herramientas juntas (administración de clúster, docker, PM2) podría conducir al caos de DevOps

🔗 [**Leer más: Guard process uptime using the right tool**](/sections/production/guardprocess.spanish.md)

<br/><br/>

## ![✔] 5.6. Utiliza todos los núcleos de la CPU

**TL;DR:** En su forma básica, una aplicación Node se ejecuta en un solo núcleo de CPU mientras que todas las demás quedan inactivas. Es tu deber replicar el proceso Node y utilizar todas las CPU: para aplicaciones pequeñas y medianas, puedes usar Node Cluster o PM2. Para una aplicación más grande, considera replicar el proceso utilizando algún clúster de Docker (por ejemplo, K8S, ECS) o scripts de implementación basados en el sistema de inicio Linux (ej. systemd)

**De lo contrario:** Es probable que tu aplicación utilice solo el 25% de sus recursos disponibles (!) O incluso menos. Ten en cuenta que un servidor típico tiene 4 núcleos de CPU o más, la implementación ingenua de Node.js utiliza solo 1 (¡incluso utilizando servicios PaaS como AWS beanstalk!)

🔗 [**Leer más: Utilize all CPU cores**](/sections/production/utilizecpu.spanish.md)

<br/><br/>

## ![✔] 5.7. Crear un "punto final de mantenimiento"

**TL;DR:** Descubre un conjunto de información relacionada con el sistema, como el uso de memoria y REPL, etc. en una API segura. Aunque es muy recomendable confiar en herramientas estándar y de pruebas de batalla, parte de la información y las operaciones valiosas se hacen más fácilmente usando código

**De lo contrario:** Descubrirás que estás realizando muchas "implementaciones de diagnóstico": envío de código a producción solo para extraer cierta información con fines de diagnóstico

🔗 [**Leer más: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.spanish.md)

<br/><br/>

## ![✔] 5.8. Descubre errores y tiempos de inactividad utilizando productos APM

**TL;DR:** Los productos de monitoreo y rendimiento de aplicaciones (también conocido como APM) miden proactivamente la base de código y la API para que puedan ir automáticamente más allá del monitoreo tradicional y medir la experiencia general del usuario en todos los servicios y niveles. Por ejemplo, algunos productos APM pueden resaltar una transacción que se carga demasiado lentamente en el lado de los usuarios finales al tiempo que sugiere lo que lo podría provocar

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento de la API y los tiempos de inactividad, probablemente nunca te darás cuenta de cuáles son tus partes de código más lentas en un escenario del mundo real y cómo afectan a la experiencia de usuario

🔗 [**Leer más: Discover errors and downtime using APM products**](/sections/production/apmproducts.spanish.md)

<br/><br/>

## ![✔] 5.9. Prepara tu código para la producción

**TL;DR:** Codifica con el fin en mente, planifica la producción desde el día 1. Esto suena un poco vago, así que he compilado algunos consejos de desarrollo que están estrechamente relacionados con el mantenimiento de la producción (haga clic en Gist a continuación)

**De lo contrario:** Un campeón mundial de IT/DevOps no salvará un sistema mal escrito

🔗 [**Leer más: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Medir y proteger el uso de la memoria.

**TL;DR:** Node.js tiene relaciones controvertidas con la memoria: el motor v8 tiene límites suaves en el uso de la memoria (1,4 GB) y hay rutas conocidas para perder memoria en el código de Node, por lo que es imprescindible observar la memoria de proceso de Node. En aplicaciones pequeñas, puedes medir la memoria periódicamente utilizando comandos de shell, pero en aplicaciones medianas y grandes, considera convertir tu reloj de memoria en un sistema de monitoreo robusto

**De lo contrario:** Tu memoria de proceso podría perder cien megabytes por día, como sucedió a [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Leer más: Measure and guard the memory usage**](/sections/production/measurememory.spanish.md)

<br/><br/>

## ![✔] 5.11. Saca tus recursos frontend de Node

**TL;DR:** Sirve el contenido frontend usando middleware dedicado (nginx, S3, CDN) porque el rendimiento de Node se ve  realmente afectado cuando se trata con muchos archivos estáticos debido a su modelo de subproceso único

**De lo contrario:** Tu único hilo Node estará ocupado transmitiendo cientos de archivos html / images / angular / react en lugar de asignar todos sus recursos para la tarea para la que nació: servir contenido dinámico

🔗 [**Leer más: Get your frontend assets out of Node**](/sections/production/frontendout.spanish.md)

<br/><br/>

## ![✔] 5.12. Se anti-estado, mata tus servidores casi todos los días

**TL;DR:** Almacena cualquier tipo de datos (por ejemplo, sesiones de usuario, caché, archivos cargados) en almacenes de datos externos. Considera matar" sus servidores periódicamente o utilice la plataforma "sin servidor" (por ejemplo, AWS Lambda) que aplica explícitamente un comportamiento sin estado

**De lo contrario:** Un fallo en un servidor dará como resultado el tiempo de inactividad de la aplicación en lugar de simplemente matar una máquina defectuosa. Además, la elasticidad de escalamiento será más difícil debido a la dependencia de un servidor específico

🔗 [**Leer más: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.spanish.md)

<br/><br/>

## ![✔] 5.13. Usa herramientas que detecten vulnerabilidades automáticamente

**TL;DR:** Incluso las dependencias de mayor reputación como Express tienen vulnerabilidades conocidas (de vez en cuando) que pueden poner en riesgo un sistema. Esto se puede dominar fácilmente usando herramientas comunitarias y comerciales que constantemente verifican vulnerabilidades y advierten (localmente o en GitHub), algunos incluso pueden parchearlas de inmediato

**De lo contrario:** Mantener tu código limpio de vulnerabilidades sin herramientas dedicadas requerirá que sigas constantemente las publicaciones en línea sobre nuevas amenazas. Bastante tedioso

🔗 [**Leer más: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.spanish.md)

<br/><br/>

## ![✔] 5.14. Asigna una identificación de transacción a cada instrucción del registro

**TL;DR:** Asigna el mismo identificador, id-transacción: {algún valor}, a cada entrada de registro dentro de una sola solicitud. Luego, al inspeccionar los errores en los registros, encontrarás fácilmente lo que sucedió antes y después. Desafortunadamente, esto no es fácil de lograr en Node debido a su naturaleza asíncrona, vea ejemplos de código dentro

**De lo contrario:** Ver un registro de errores de producción sin el contexto, lo que sucedió antes, hace que sea mucho más difícil y lento razonar sobre el problema

🔗 [**Leer más: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.spanish.md)

<br/><br/>

## ![✔] 5.15. Establecer NODE_ENV=production

**TL;DR:** Establece la variable de entorno NODE_ENV en "producción" o "desarrollo" para marcar si las optimizaciones de producción deben activarse; muchos paquetes npm determinan el entorno actual y optimizan su código para la producción

**De lo contrario:** Omitir esta simple propiedad podría degradar en gran medida el rendimiento. Por ejemplo, cuando se usa Express para la representación del lado del servidor, omitir `NODE_ENV` lo hace un tercio más lento.

🔗 [**Leer más: Set NODE_ENV=production**](/sections/production/setnodeenv.spanish.md)

<br/><br/>

## ![✔] 5.16. Diseña implementaciones automatizadas, atómicas y de tiempo de inactividad cero

**TL;DR:** La investigación muestra que los equipos que realizan muchas implementaciones reducen la probabilidad de problemas graves de producción. Las implementaciones rápidas y automatizadas que no requieren pasos manuales riesgosos y el tiempo de inactividad del servicio mejoran significativamente el proceso de implementación. Probablemente deberías lograr esto usando Docker combinado con herramientas de CI, ya que se convirtieron en el estándar de la industria para la implementación simplificada

**De lo contrario:** Implementaciones largas -> tiempo de inactividad de producción y error relacionado con el ser humano -> equipo desconfiado en la implementación -> menos implementaciones y características

<br/><br/>

## ![✔] 5.17. Usa una versión LTS de Node.js

**TL;DR:** Asegúrate de estar utilizando una versión LTS de Node.js para recibir correcciones de errores críticos, actualizaciones de seguridad y mejoras de rendimiento.

**De lo contrario:** Los errores o vulnerabilidades recientemente descubiertos podrían utilizarse para explotar una aplicación que se ejecuta en producción, y su aplicación puede dejar de ser compatible con varios módulos y ser más difícil de mantener

🔗 [**Leer más: Use an LTS release of Node.js**](/sections/production/LTSrelease.spanish.md)

<br/><br/>

## ![✔] 5.18. No enrutes registros dentro de la aplicación

**TL;DR:** Los desarrolladores no deben codificar los destinos de registro dentro del código de la aplicación, sino que deben estar definidos por el entorno de ejecución en el que se ejecuta la aplicación. Los desarrolladores deben escribir registros en 'stdout' utilizando una utilidad de registro y luego dejar que el entorno de ejecución (contenedor, servidor, etc.) canalice la secuencia `stdout` al destino apropiado (es decir, Splunk, Graylog, ElasticSearch, etc.).

**De lo contrario** Aplicación de enrutamiento de registro de manejo === difícil de escalar, pérdida de registros, mala separación de preocupaciones

🔗 [**Leer más: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `6. Mejores prácticas de seguridad`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Adopta las reglas de seguridad de linter

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Utiliza los complementos de interfaz relacionados con la seguridad, como [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) para detectar vulnerabilidades y problemas de seguridad lo antes posible, preferiblemente mientras se codifican. Esto puede ayudar a detectar debilidades de seguridad, como usar eval, invocar un proceso secundario o importar un módulo con un literal de cadena (por ejemplo, entrada del usuario). Haga clic en "Leer más" a continuación para ver ejemplos de código que quedarán atrapados por una interfaz de seguridad

**De lo contrario:** Lo que podría haber sido una debilidad de seguridad directa durante el desarrollo se convierte en un problema importante en la producción. Además, el proyecto puede no seguir prácticas de seguridad de código consistentes, lo que lleva a la introducción de vulnerabilidades o secretos confidenciales confiados en repositorios remotos

🔗 [**Leer más: Lint rules**](/sections/security/lintrules.spanish.md)

<br/><br/>

## ![✔] 6.2. Limita las solicitudes concurrentes utilizando un middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Los ataques DOS son muy populares y relativamente fáciles de realizar. Implementa la limitación de velocidad utilizando un servicio externo como balanceadores de carga en la nube, firewalls en la nube, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) paquete, o (para aplicaciones más pequeñas y menos críticas) un middleware que limita la velocidad (e.j. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**De lo contrario:** Una aplicación podría estar sujeta a un ataque que resulte en una denegación de servicio donde los usuarios reales reciban un servicio degradado o no disponible.

🔗 [**Leer más: Implement rate limiting**](/sections/security/limitrequests.spanish.md)

<br/><br/>

## ![✔] 6.3 Quita los secretos de los archivos de configuración o usa paquetes para cifrarlos

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Nunca almacenes secretos sin formato en archivos de configuración o código fuente. En su lugar, utiliza sistemas de gestión secreta como productos Vault, Kubernetes / Docker Secrets o variables de entorno. Como último recurso, los secretos almacenados en el control de código fuente deben ser encriptados y administrados (claves rodantes, vencimiento, auditoría, etc.). Utiliza los ganchos en pre-commit/push para evitar que se guarden secretos accidentalmente

**De lo contrario:** El control del código fuente, incluso para repositorios privados, puede hacerse público por error, momento en el que se exponen todos los secretos. El acceso al control de origen para una parte externa proporcionará inadvertidamente acceso a sistemas relacionados (bases de datos, API, servicios, etc.).

🔗 [**Leer más: Secret management**](/sections/security/secretmanagement.spanish.md)

<br/><br/>

## ![✔] 6.4. Prevenir vulnerabilidades de inyección de consultas con bibliotecas ORM / ODM

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Para evitar la inyección de SQL / NoSQL y otros ataques maliciosos, utilice siempre un ORM / ODM o una biblioteca de base de datos que escape a los datos o admita consultas parametrizadas con nombre o indexadas, y se encarga de validar la entrada del usuario para los tipos esperados. Nunca utilices cadenas de plantillas de JavaScript o concatenación de cadenas para inyectar valores en las consultas, ya que esto abre su aplicación a un amplio espectro de vulnerabilidades. Todas las bibliotecas acreditadas de acceso a datos de Node.js (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) tienen protección incorporada contra ataques de inyección.

**De lo contrario:** La entrada de usuario no validada o no higiénica podría conducir a la inyección del operador cuando se trabaja con MongoDB para NoSQL, y no usar un sistema de desinfección adecuado u ORM permitirá fácilmente ataques de inyección SQL, creando una vulnerabilidad gigante.

🔗 [**Leer más: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.spanish.md)

<br/><br/>

## ![✔] 6.5. Colección de mejores prácticas de seguridad genéricas

**TL;DR:** Esta es una colección de consejos de seguridad que no está relacionada directamente con Node.js: la implementación de Node no es muy diferente a la de cualquier otro idioma. Haz clic en leer más para hojear.

🔗 [**Leer más: Common security best practices**](/sections/security/commonsecuritybestpractices.spanish.md)

<br/><br/>

## ![✔] 6.6. Ajusta los encabezados de respuesta HTTP para mayor seguridad

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Tu aplicación debe usar encabezados seguros para evitar que los atacantes usen ataques comunes como scripting entre sitios (XSS), clickjacking y otros ataques maliciosos. Estos se pueden configurar fácilmente utilizando módulos como [helmet](https://www.npmjs.com/package/helmet).

**De lo contrario:** Los atacantes pueden realizar ataques directos a los usuarios de su aplicación, lo que genera enormes vulnerabilidades de seguridad

🔗 [**Leer más: Using secure headers in your application**](/sections/security/secureheaders.spanish.md)

<br/><br/>

## ![✔] 6.7. Inspeccionar de manera constante y automática las dependencias vulnerables

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** Con el ecosistema npm es común tener muchas dependencias para un proyecto. Las dependencias siempre deben mantenerse bajo control a medida que se encuentran nuevas vulnerabilidades. Usa herramientas como [npm audit](https://docs.npmjs.com/cli/audit) o [snyk](https://snyk.io/) para rastrear, monitorear y parchear dependencias vulnerables. Integra estas herramientas con su configuración de CI para que pueda detectar una dependencia vulnerable antes de que llegue a producción.

**De lo contrario:** Un atacante podría detectar su marco web y atacar todas sus vulnerabilidades conocidas.

🔗 [**Leer más: Dependency security**](/sections/security/dependencysecurity.spanish.md)

<br/><br/>

## ![✔] 6.8. Evita usar la biblioteca criptográfica Node.js para manejar contraseñas, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Las contraseñas o los secretos (claves API) deben almacenarse utilizando una función segura hash + salt como `bcrypt`, que debería ser la opción preferida sobre su implementación de JavaScript debido a razones de rendimiento y seguridad.

**De lo contrario:** Las contraseñas o los secretos que se conservan sin utilizar una función segura son vulnerables a la fuerza bruta y los ataques de diccionario que eventualmente conducirán a su divulgación.

🔗 [**Leer más: Use Bcrypt**](/sections/security/bcryptpasswords.spanish.md)

<br/><br/>

## ![✔] 6.9. Escapa la salida de HTML, JS y CSS

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Los datos no confiables que se envían al navegador pueden ejecutarse en lugar de mostrarse, esto se conoce comúnmente como un ataque de scripting entre sitios (XSS). Mitiga esto mediante el uso de bibliotecas dedicadas que marquen explícitamente los datos como contenido puro que nunca debe ejecutarse (es decir, codificación, escape)

**De lo contrario:** Un atacante podría almacenar código JavaScript malicioso en su base de datos que luego se enviará tal cual a los pobres clientes 

🔗 [**Leer más: Escape output**](/sections/security/escape-output.spanish.md)

<br/><br/>

## ![✔] 6.10. Validar esquemas JSON entrantes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Valida la carga útil del cuerpo de las solicitudes entrantes y asegúrese de que cumpla con las expectativas, falle rápidamente si no lo hace. Para evitar la tediosa codificación de validación dentro de cada ruta, puede usar esquemas de validación ligeros basados en JSON, como [jsonschema](https://www.npmjs.com/package/jsonschema) o [joi](https://www.npmjs.com/package/joi)

**De lo contrario:** Tu generosidad y enfoque permisivo aumentan enormemente la superficie de ataque y ayuda al atacante a probar muchas entradas hasta que encuentren alguna combinación para bloquear la aplicación.

🔗 [**Leer más: Validate incoming JSON schemas**](/sections/security/validation.spanish.md)

<br/><br/>

## ![✔] 6.11. Admite las listas negras de JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Cuando se usan tokens web JSON (por ejemplo con [Passport.js](https://github.com/jaredhanson/passport)), de manera predeterminada, no existe un mecanismo para revocar el acceso de los tokens emitidos. Una vez que descubres alguna actividad maliciosa de los usuarios, no hay forma de evitar que accedan al sistema siempre que tengan un token válido. Soluciona esto implementando una lista negra de tokens no confiables que se validan en cada solicitud.

**De lo contrario:** Los tokens caducados o extraviados pueden ser utilizados maliciosamente por un tercero para acceder a una aplicación y hacerse pasar por el propietario del token.

🔗 [**Leer más: Blacklist JSON Web Tokens**](/sections/security/expirejwt.spanish.md)

<br/><br/>

## ![✔] 6.12. Prevenir ataques de fuerza bruta contra la autorización

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Una técnica simple y poderosa es limitar los intentos de autorización utilizando dos métricas:

1. El primero es el número de intentos fallidos consecutivos por el mismo ID / nombre único de usuario y dirección IP.
2. El segundo es el número de intentos fallidos de una dirección IP durante un largo período de tiempo. Por ejemplo, bloquee una dirección IP si realiza 100 intentos fallidos en un día.

**De lo contrario:** Un atacante puede emitir intentos de contraseña automatizados ilimitados para obtener acceso a cuentas privilegiadas en una aplicación

🔗 [**Leer más: Login rate limiting**](/sections/security/login-rate-limit.spanish.md)

<br/><br/>

## ![✔] 6.13. Ejecuta Node.js como usuario no root

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Hay un escenario común en el que Node.js se ejecuta como usuario root con permisos ilimitados. Por ejemplo, este es el comportamiento predeterminado en los contenedores Docker. Se recomienda crear un usuario no root y hornearlo en la imagen de Docker (ejemplos a continuación) o ejecutar el proceso en nombre de este usuario invocando el contenedor con la marca "-u username"

**De lo contrario:** Un atacante que logra ejecutar un script en el servidor obtiene poder ilimitado sobre la máquina local (por ejemplo, cambiar iptable y redirigir el tráfico a su servidor)

🔗 [**Leer más: Run Node.js as non-root user**](/sections/security/non-root-user.spanish.md)

<br/><br/>

## ![✔] 6.14. Limita el tamaño de la carga útil utilizando un proxy inverso o un middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Cuanto más grande es la carga útil del cuerpo, más difícil es que su único hilo trabaje en su procesamiento. Esta es una oportunidad para que los atacantes pongan a los servidores de rodillas sin una gran cantidad de solicitudes (ataques DOS / DDOS). Mitiga esto limitando el tamaño del cuerpo de las solicitudes entrantes en el borde (por ejemplo, firewall, ELB) o configurando [express body parser](https://github.com/expressjs/body-parser) para aceptar solo cargas pequeñas

**De lo contrario:** Tu aplicación tendrá que lidiar con solicitudes grandes, incapaz de procesar el otro trabajo importante que tiene que realizar, lo que conlleva implicaciones de rendimiento y vulnerabilidad ante los ataques de DOS

🔗 [**Leer más: Limit payload size**](/sections/security/requestpayloadsizelimit.spanish.md)

<br/><br/>

## ![✔] 6.15. Evita las sentencias eval de JavaScript

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` es malo, ya que permite ejecutar código JavaScript personalizado durante el tiempo de ejecución. Esto no es solo un problema de rendimiento, sino también un problema de seguridad importante debido al código JavaScript malicioso que puede obtenerse de la entrada del usuario. Otra característica del lenguaje que debe evitarse es el constructor `new Function`. `setTimeout` y` setInterval` y nunca deberían pasar el código JavaScript dinámico tampoco.

**De lo contrario:** El código JavaScript malicioso encuentra una forma en el texto pasado a `eval` u otras funciones del lenguaje JavaScript de evaluación en tiempo real, y obtendrá acceso completo a los permisos de JavaScript en la página. Esta vulnerabilidad a menudo se manifiesta como un ataque XSS.

🔗 [**Leer más: Avoid JavaScript eval statements**](/sections/security/avoideval.spanish.md)

<br/><br/>

## ![✔] 6.16. Evita que el malvado de RegEx sobrecargue tu ejecución de subproceso único

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Las expresiones regulares, aunque son prácticas, representan una amenaza real para las aplicaciones de JavaScript en general, y para la plataforma Node.js en particular. Una entrada de usuario para que el texto coincida puede requerir una cantidad excepcional de ciclos de CPU para procesar. El procesamiento de RegEx puede ser ineficiente hasta el punto de que una sola solicitud que valida 10 palabras puede bloquear todo el bucle de eventos durante 6 segundos y activar la CPU a 🔥. Por esa razón, escoge paquetes de validación de terceros como [validator.js](https://github.com/chriso/validator.js) en lugar de escribir sus propios patrones Regex, o hacer uso de [safe-regex](https://github.com/substack/safe-regex) para detectar patrones de expresiones regulares vulnerables

**De lo contrario:** Las expresiones regulares mal escritas pueden ser susceptibles a los ataques DoS de Expresión regular que bloquearán el bucle de eventos por completo. Por ejemplo, el popular paquete `moment` fue encontrado vulnerable con el uso malicioso de RegEx en noviembre de 2017

🔗 [**Leer más: Prevent malicious RegEx**](/sections/security/regex.spanish.md)

<br/><br/>

## ![✔] 6.17. Evita cargar módulos usando una variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Evita requerir / importar otro archivo con una ruta que se proporcionó como parámetro debido a la preocupación de que podría haberse originado a partir de la entrada del usuario. Esta regla se puede extender para acceder a archivos en general (es decir, `fs.readFile ()`) u otro acceso a recursos confidenciales con variables dinámicas que se originan a partir de la entrada del usuario. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter puede atrapar tales patrones y advertir lo suficientemente temprano

**De lo contrario:** La entrada de usuario malintencionado podría encontrar su camino hacia un parámetro que se utiliza para requerir archivos manipulados, por ejemplo, un archivo cargado previamente en el sistema de archivos, o acceder a archivos del sistema ya existentes.

🔗 [**Leer más: Safe module loading**](/sections/security/safemoduleloading.spanish.md)

<br/><br/>

## ![✔] 6.18. Ejecuta código inseguro en un sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Cuando se te asigne la tarea de ejecutar código externo que se proporciona en tiempo de ejecución (por ejemplo, un complemento), usa cualquier tipo de entorno de ejecución 'sandbox' que aísle y proteja el código principal contra el complemento. Esto se puede lograr mediante un proceso dedicado (por ejemplo, `cluster.fork ()`), entorno sin servidor o paquetes npm dedicados que actúan como un sandbox

**De lo contrario:** Un complemento puede atacar a través de una variedad infinita de opciones como bucles infinitos, sobrecarga de memoria y acceso a variables de entorno de procesos sensibles.

🔗 [**Leer más: Run unsafe code in a sandbox**](/sections/security/sandbox.spanish.md)

<br/><br/>

## ![✔] 6.19. Ten mucho cuidado al trabajar con procesos secundarios.

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Evita el uso de procesos secundarios cuando sea posible y valide y desinfecta la entrada para mitigar los ataques de inyección de shell si aún tienes que hacerlo. Usa`child_process.execFile` que, por definición, solo ejecutará un solo comando con un conjunto de atributos y no permitirá la expansión de parámetros de shell.

**De lo contrario:** El uso ingenuo de procesos secundarios podría provocar la ejecución remota de comandos o ataques de inyección de shell debido a la entrada maliciosa del usuario transmitida a un comando del sistema no desinfectado.

🔗 [**Leer más: Be cautious when working with child processes**](/sections/security/childprocesses.spanish.md)

<br/><br/>

## ![✔] 6.20. Ocultar detalles de error de los clientes

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Un controlador de error express integrado oculta los detalles del error de forma predeterminada. Sin embargo, son grandes las posibilidades de que implemente su propia lógica de manejo de errores con objetos de error personalizados (considerado por muchos como una práctica recomendada). Si lo haces, asegúrate de no devolver todo el objeto Error al cliente, que podría contener algunos detalles confidenciales de la aplicación

**De lo contrario:** Los detalles confidenciales de la aplicación, como las rutas de archivos del servidor, los módulos de terceros en uso y otros flujos de trabajo internos de la aplicación que podrían ser explotados por un atacante, podrían filtrarse de la información encontrada en un seguimiento de la pila.

🔗 [**Leer más: Hide error details from client**](/sections/security/hideerrors.spanish.md)

<br/><br/>

## ![✔] 6.21. Configura 2FA para npm o Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Cualquier paso en la cadena de desarrollo debe protegerse con MFA (autenticación multifactor), npm / Yarn es una buena oportunidad para los atacantes que pueden tener en sus manos la contraseña de algún desarrollador. Utilizando credenciales de desarrollador, los atacantes pueden inyectar código malicioso en bibliotecas que están ampliamente instaladas en proyectos y servicios. Tal vez incluso en la web si se publica en público. Habilitar la autenticación de 2 factores en npm deja casi cero posibilidades para que los atacantes alteren el código de su paquete.

**De lo contrario:** [¿Has oído hablar del desarrollador de eslint cuya contraseña fue secuestrada?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modificar la configuración del middleware de sesión

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Cada marco web y tecnología tiene sus debilidades conocidas: decirle a un atacante qué marco web utilizamos es de gran ayuda para ellos. El uso de la configuración predeterminada para middlewares de sesión puede exponer su aplicación a ataques de secuestro específicos de módulos y marcos de manera similar al encabezado `X-Powered-By`. Intenta ocultar todo lo que identifique y revele tu stack tecnológico (por ejemplo, Node.js, express)

**De lo contrario:** Las cookies podrían enviarse a través de conexiones inseguras, y un atacante podría usar la identificación de sesión para identificar el marco subyacente de la aplicación web, así como las vulnerabilidades específicas del módulo

🔗 [**Leer más: Cookie and session security**](/sections/security/sessions.spanish.md)

<br/><br/>

## ![✔] 6.23. Evita los ataques de DOS estableciendo explícitamente cuándo debe fallar un proceso

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** El proceso de Node se bloqueará cuando no se manejen los errores. Muchas de las mejores prácticas incluso recomiendan salir a pesar de que se detectó un error y se manejó. Express, por ejemplo, se bloqueará en cualquier error asincrónico, a menos que ajuste las rutas con una cláusula catch. Esto abre un punto de ataque muy dulce para los atacantes que reconocen qué información hace que el proceso se bloquee y envían repetidamente la misma solicitud. No hay remedio instantáneo para esto, pero algunas técnicas pueden mitigar el dolor: alerta con severidad crítica cada vez que un proceso se bloquea debido a un error no controlado, valida la entrada y evita que el proceso se bloquee debido a una entrada inválida del usuario, envuelve todas las rutas con una captura y considera no bloquearse cuando se origine un error dentro de una solicitud (en oposición a lo que sucede globalmente)

**De lo contrario:** Esto es solo una suposición educada: dadas muchas aplicaciones de Node.js, si intentamos pasar un cuerpo JSON vacío a todas las solicitudes POST, un puñado de aplicaciones se bloqueará. En ese momento, podemos repetir el envío de la misma solicitud para eliminar las aplicaciones con facilidad

<br/><br/>

## ![✔] 6.24. Prevenir redireccionamientos inseguros

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Los redireccionamientos que no validan la entrada del usuario pueden permitir a los atacantes lanzar estafas de phishing, robar credenciales de usuario y realizar otras acciones maliciosas.

**De lo contrario:** Si un atacante descubre que no está validando entradas externas proporcionadas por el usuario, puede aprovechar esta vulnerabilidad al publicar enlaces especialmente diseñados en foros, redes sociales y otros lugares públicos para que los usuarios hagan clic en él.

🔗 [**Leer más: Prevent unsafe redirects**](/sections/security/saferedirects.spanish.md)

<br/><br/>

## ![✔] 6.25. Evita publicar secretos en el registro npm

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Se deben tomar precauciones para evitar el riesgo de publicar accidentalmente secretos en registros públicos de npm. Se puede usar un archivo `.npmignore` para poner en una lista negra archivos o carpetas específicos, o la matriz ` files` en `package.json` puede actuar como una lista blanca.

**De lo contrario:** Las claves de API, las contraseñas u otros secretos de su proyecto están abiertos a ser abusados por cualquier persona que los encuentre, lo que puede provocar pérdidas financieras, suplantación y otros riesgos.

🔗 [**Leer más: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.spanish.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `7. Borrador: Mejores prácticas de rendimiento`

## Nuestros colaboradores están trabajando en esta sección. [¿Te gustaría unirte?](https://github.com/i0natan/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. No bloquees el bucle de eventos

**TL;DR:** Evita las tareas intensivas de la CPU, ya que bloquearán el bucle de eventos en su mayoría de un solo subproceso y las descargarán en un subproceso dedicado, proceso o incluso una tecnología diferente según el contexto.

**De lo contrario:** A medida que se bloquea el bucle de eventos, Node.js no podrá manejar otra solicitud, lo que provocará demoras para los usuarios concurrentes. **3000 usuarios están esperando una respuesta, el contenido está listo para ser servido, pero una sola solicitud impide que el servidor envíe los resultados**

🔗 [**Leer más: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />


## ![✔] 7.2. Escoge los métodos JS nativos sobre las utilidades de usuario como Lodash

 **TL;DR:** A menudo es más penalizador usar bibliotecas de utilidades como `lodash` y` underscore` sobre los métodos nativos, ya que conduce a dependencias innecesarias y un rendimiento más lento.
Ten en cuenta que con la introducción del nuevo motor V8 junto con los nuevos estándares ES, los métodos nativos se mejoraron de tal manera que ahora es aproximadamente un 50% más eficiente que las bibliotecas de servicios públicos.

**De lo contrario:** Tendrás que mantener proyectos de menor rendimiento en los que simplemente podría haber usado lo que **ya estaba** disponible o haber tratado algunas líneas más a cambio de algunos archivos más.

🔗 [**Leer más: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>


# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/i0natan/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)
- ![ES](/assets/flags/ES.png) [Spanish](./README.spanish.md) - Courtesy of [Jordi Castillo](https://github.com/Whitefox98)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/i0natan)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, MongoDB, pretty much anything that involves using JavaScript/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation, collaborating on the Community Committee's Website Redesign Initiative.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :--: | :--: |
| [Ido Richter (Founder)](https://github.com/idori) | [Keith Holliday](https://github.com/TheHollidayInn) |

### Past collaborators

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :--: |
| [Refael Ackermann](https://github.com/refack) |

<br/>

## Thank You Notes

We appreciate any contribution, from a single word fix to a new best practice. View our contributors and [contributing documentation here!](CONTRIBUTORS.md)

<br/><br/><br/>

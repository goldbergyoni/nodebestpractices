
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

# `3. Prácticas de estilo de código`

## ![✔] 3.1 Utilizar ESLint

**TL;DR:** [ESLint](https://eslint.org) es el estándar para verificar posibles errores de código y corregir el estilo del código, no solo para identificar problemas básicos, sino también para detectar anti-patrones de código graves, como los desarrolladores que arrojan errores sin clasificación. Aunque ESLint puede corregir automáticamente los estilos de código, otras herramientas como [prettier](https://www.npmjs.com/package/prettier) y [beautify](https://www.npmjs.com/package/js-beautify) son más potentes para formatear la solución y funcionan en conjunto con ESLint

**De lo contrario:** Los desarrolladores podrían desperdiciar demasiado tiempo centrándose demasiado en el corregir los espacios y el ancho de línea del código

🔗 [**Leer más: Usando ESLint y Prettier**](/sections/codestylepractices/eslint_prettier.md)

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

🔗 [**Leer más: Choosing CI platform**](/sections/testingandquality/citools.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `5. Going To Production Practices`

## ![✔] 5.1. Monitoring

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Otherwise:** Failure === disappointed customers. Simple

🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Otherwise:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grained control use `npm shrinkwrap`. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, process management tools like PM2 might be enough but in today's ‘dockerized’ world, cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Application monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Otherwise:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Read More: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single-threaded model

**Otherwise:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Read More: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your servers almost every day

**TL;DR:** Store any type of data (e.g. user sessions, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Read More: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**Read More: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Assign a transaction id to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determine the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes it slower by a factor of three!

🔗 [**Read More: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Otherwise:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Read More: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Don't route logs within the app

**TL;DR:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**Otherwise:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**Read More: Log Routing**](/sections/production/logrouting.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Otherwise:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Read More: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Otherwise:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Read More: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Otherwise:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Read More: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**Otherwise:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Read More: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**TL;DR:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Otherwise:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Read More: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Otherwise:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Read More: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Avoid using the Node.js crypto library for handling passwords, use Bcrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (API keys) should be stored using a secure hash + salt function like `bcrypt`, that should be a preferred choice over its JavaScript implementation due to performance and security reasons.

**Otherwise:** Passwords or secrets that are persisted without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Read More: Use Bcrypt**](/sections/security/bcryptpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Otherwise:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Read More: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Otherwise:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Read More: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Otherwise:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Read More: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**Otherwise:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Read More: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**Otherwise:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Read More: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Otherwise:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Read More: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Otherwise:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Read More: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Otherwise:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Read More: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Otherwise:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the filesystem, or access already existing system files.

🔗 [**Read More: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**Otherwise:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Read More: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Otherwise:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Read More: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Otherwise:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Read More: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Otherwise:** [Have you heard about the eslint developer who's password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Otherwise:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Read More: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Otherwise:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Otherwise:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Read More: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**Otherwise:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Read More: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Return to top</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/i0natan/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**TL;DR:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**Otherwise:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Read More: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />


## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

 **TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
 Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Otherwise:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Read More: Native over user land utils**](/sections/performance/nativeoverutil.md)

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

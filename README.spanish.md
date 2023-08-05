[✔]: assets/images/checkbox-small-blue.png

# Mejores prácticas de NodeJS

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices"/>
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 items"/> <img id="last-update-badge" src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20July%2019%2C%202023-green.svg" alt="Last update: July 19, 2023" /> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2019.0.0-brightgreen.svg" alt="Updated for Node 19.0.0"/>
</div>

<br/>

[<img src="assets/images/twitter.svg" width="16" height="16" alt="" />]https://twitter.com/nodepractices/) **¡Síguenos en Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Leelo en otro idioma: [![CN](./assets/flags/CN.png)**CN**](./README.chinese.md), [![FR](./assets/flags/FR.png)**FR**](./README.french.md), [![BR](./assets/flags/BR.png)**BR**](./README.brazilian-portuguese.md), [![RU](./assets/flags/RU.png)**RU**](./README.russian.md), [![PL](./assets/flags/PL.png)**PL**](./README.polish.md), [![JA](./assets/flags/JA.png)**JA**](./README.japanese.md), [![EU](./assets/flags/EU.png)**EU**](./README.basque.md) [(![ES](./assets/flags/ES.png)**ES**, ![HE](./assets/flags/HE.png)**HE**, ![KR](./assets/flags/KR.png)**KR** and ![TR](./assets/flags/TR.png)**TR** in progress! )](#translations)

<br/>

# 🎊 ¡La edición 2023 está aquí!

- **🛰 Modernizado al 2023**: Montones de ediciones de texto, nuevas bibliotecas recomendadas y varias nuevas mejores prácticas 

- **✨ Enfocate facilmente en nuevo contenido**: ¿Ya lo has visitado? Busca las etiquetas `#new` o `#updated` exclusivas para contenido nuevo

- **🔖 ¿Tienes curiosidad por ver ejemplos? Tenemos un Starter**: Visita [Practica.js](https://github.com/practicajs/practica), nuestro ejemplo de aplicación y plantilla (beta) para ver algunas prácticas en acción

<br/><br/>

# ¡Bienvenido! 3 cosas que deberías saber primero

**1. Está leyendo docenas de los mejores artículos de Node.js -** este repositorio es un resumen y curación del contenido mejor clasificado de las mejores prácticas de NodeJS, así como el contenido escrito aquí por colaboradores

**2. Es la compilación más grande y crece cada semana -** actualmente, se presentan más de 80 prácticas, guías de estilo y consejos arquitectónicos. Nuevos issues y pull request son creados cada día para mantener esta guía actualizada. Nos encantaría verte contribuyendo, ya sea arreglando errores en el código, ayudando en las traducciones, o sugiriendo brillantes nuevas ideas. Ve las [Normas de contribución](./.operations/writing-guidelines.spanish.md)

**3. Las mejores prácticas tienen información adicional -** la mayoría de los puntos incluyen el enlace **🔗Leer más** que expanden la práctica con ejemplos de código, citas de blogs seleccionados y mas información

<br/><br/>

# By Yoni Goldberg

### Aprenda conmigo: como consultor, participo con equipos de todo el mundo en diversas actividades, como talleres y revisiones de código. 🎉Y... Espera, acabo de lanzar mi [curso de pruebas más allá de lo básico, que está en oferta por tiempo limitado](https://testjavascript.com/) hasta el 7 de agosto

<br/><br/>

## Tabla de contenidos

<details>
  <summary>
    <a href="#1-prácticas-de-estructura-del-proyecto">1. Prácticas para estructura del proyecto (6)</a>
  </summary>

&emsp;&emsp;[1.1 Estructura tu solución en componentes`#strategic` `#updated`](#-11-estructura-tu solución-en-componentes)</br>
&emsp;&emsp;[1.2 Pon tus componentes en capas, mantén la capa web dentro de sus límites `#strategic` `#updated`](#-12-pon tus-componentes-en-capas-mantén-la-capa-web-dentro-de-sus-límites)</br>
&emsp;&emsp;[1.3 Engloba utilidades comunes como paquetes, considera publicarlos](#-13-engloba-utilidades-comunes-como-paquetes-considera-publicarlos)</br>
&emsp;&emsp;[1.4 Usa una configuración consciente del entorno,segura y jerárquica `#updated`](#-14-usa-una-configuración-consciente-del-entornosegura-y-jerárquica)</br>
&emsp;&emsp;[1.5 Considera todas las consecuencias al elegir el framwork principal `#new`](#-15-considera-todas-las-consecuencias-al-elegir-el-framwork-principal)</br>
&emsp;&emsp;[1.6 Usa TypeScript con moderación y consideración `#new`](#-16-usa-type-script-con-moderación-y-consideración)</br>

</details>

<details>
  <summary>
    <a href="#2-prácticas-en-manejo-de-errores">2. Prácticas en manejo de errores (12)</a>
  </summary>

&emsp;&emsp;[2.1 Usa Async-Await o promesas para el manejo de errores asíncronos](#-21-usa-async-await-o-promesas-para-el-manejo-de-errores-asíncronos)</br>
&emsp;&emsp;[2.2 Extiende el objeto Error nativo `#strategic` `#updated`](#-22-extiende-el-objeto-error-nativo)</br>
&emsp;&emsp;[2.3 Distingue errores catastróficos de errores operacionales `#strategic` `#updated`](#-23-distingue-errores-catastróficos-de-errores-operacionales)</br>
&emsp;&emsp;[2.4 Maneja los errores centralmente, no dentro de un middleware `#strategic`](#-24-maneja-los-errores-centralmente-no-dentro-de-un-middleware)</br>
&emsp;&emsp;[2.5 Documenta errores del API con OpenAPI o GraphQL](#-25-documenta-errores-del-api-con-open-api-o-graphql)</br>
&emsp;&emsp;[2.6 Cierra el proceso elegantemente cuando un extraño llega a la ciudad `#strategic`](#-26-cierra-el-proceso-elegantemente-cuando-un-extraño-llega-a-la-ciudad)</br>
&emsp;&emsp;[2.7 Usa un logger maduro para aumentar la visibilidad de los errores `#updated`](#-27-usa-un-logger-maduro-para-aumentar-la-visibilidad-de-los-errores)</br>
&emsp;&emsp;[2.8 Pruebas los flujos de errores usando tu framework de prueba favorito `#updated`](#-28-pruebas-los-flujos-de-errores-usando-tu-framework-de-prueba-favorito)</br>
&emsp;&emsp;[2.9 Descubre errores y tiempo de inactividad usando productos de APM](#-29-descubre-errores-y-tiempo-de-inactividad-usando-productos-de-apm)</br>
&emsp;&emsp;[2.10 Captura los rechazos de promesas no controladas `#updated`](#-210-captura-los-rechazos-de-promesas-no-controladas)</br>
&emsp;&emsp;[2.11 Falla rápidamente, valida los argumentos usando una biblioteca dedicada](#-211-falla-rápidamente-valida-los-argumentos-usando-una-biblioteca-dedicada)</br>
&emsp;&emsp;[2.12 Siempre resuelve las promesas antes de retornarlas para evitar un stacktrace parcial `#new`](#-212-always-await-promises-before-returning-to-avoid-a-partial-stacktrace)</br>
&emsp;&emsp;[2.13 Subscribete al evento 'error' de los emisores de eventos `#new`](#-213-subscribete-al-evento-'error'-de-los-emisores-de-eventos)</br>

</details>


3. [Prácticas de estilo de código (12) ](#3-prácticas-de-estilo-de-código)
4. [Prácticas de prueba y calidad en general (13) ](#4-pruebas-y-prácticas-generales-de-calidad)
5. [Prácticas de puesta en producción (19) ](#5-yendo-a-las-prácticas-de-producción)
6. [Prácticas de seguridad (25)](#6-mejores-prácticas-de-seguridad)
7. [Prácticas de rendimiento (2) (En Progreso ✍️)](#7-borrador-mejores-prácticas-de-rendimiento)
8. [Prácticas de Docker (15)](#8-mejores-prácticas-de-docker)


<br/><br/><br/>
# `1. Prácticas de estructura del proyecto`

## ![✔] 1.1 Estructura tu solución en componentes

**TL;DR:** El peor inconveniente de las grandes aplicaciones es mantener una gran base de código con cientos de dependencias, un monolito que ralentiza a los desarrolladores que intentan incorporar nuevas características. En cambio, divide tu código en componentes, cada uno obtiene su propia carpeta o una base de código dedicada, y asegúrate de que cada unidad se mantenga pequeña y simple. Visita 'Leer más' a continuación para ver ejemplos de la estructura correcta del proyecto

**De lo contrario:** Cuando desarrolladores codifican nuevas características luchan por darse cuenta del impacto de su cambio y temen romper otros componentes dependientes - las implementaciones se vuelven más lentas y más riesgosas. También se considera más difícil escalar cuando todas las unidades de negocios no están separadas

🔗 [**Leer más: estructura en componentes**](./sections/projectstructre/breakintcomponents.spanish.md)

<br/><br/>

## ![✔] 1.2 Aplicar capas para componentes, mantén Express dentro de sus límites

**TL;DR:** Cada componente debería contener 'capas'- un objeto dedicado para la web, la lógica y código para acceso a datos. Esto no solo genera una clara separación de conceptos sino que también facilita significativamente los mocks y la pruebas del sistema. Aunque este es un patrón muy común, los desarrolladores de APIs tienden a mezclar capas pasando los objetos de la capa web (Express req, res) a la lógica de negocios y capas de datos, esto hace que su aplicación dependa y solo sea accesible por Express.

**De lo contrario:** Una aplicación que mezcla objectos de web con otras capas no puede ser accedida por código de pruebas, CRON jobs, eventos de colas de mensajes, entre otros.

🔗 [**Leer más: Aplicar capas a tu aplicación**](./sections/projectstructre/createlayers.spanish.md)

<br/><br/>

## ![✔] 1.3 Envuelve las utilidades comunes como paquetes de NPM

**TL;DR:** En una aplicación grande que se constituye de múltiples bases de código, utilidades transversales como los loggers, cifrado y similares, deben de estar envueltos por su propio código y expuestos como paquetes privados de NPM. Esto permite compartirlos entre múltiples base de código y proyectos.

**De lo contrario:** Tendrás que inventar tu propia implementación y rueda de dependencia

🔗 [**Leer más: Estructura por característica**](./sections/projectstructre/wraputilities.spanish.md)

<br/><br/>

## ![✔] 1.x Separar 'servidor' y 'aplicación' de express

**TL;DR:** Evite el desagradable hábito de definir toda la aplicación [Express](https://expressjs.com/) en un único archivo enorme; separa tú definición de 'Express' en al menos dos archivos: la declaración del API (app.js) y los características de red (WWW). Incluso para una mejor estructura, ubica tu declaración del API dentro de los componentes.

**De lo contrario:** Se podrá acceder a tu API para realizar pruebas solo a través de llamadas HTTP (más lento y mucho más difícil para generar informes de cobertura). Probablemente tampoco sea un placer enorme mantener cientos de líneas de código en un solo archivo

🔗 [**Leer más: separar 'servidor' y 'aplicación' de express**](./sections/projectstructre/separateexpress.spanish.md)

<br/><br/>

## ![✔] 1.4 Usa una configuración consciente del entorno,segura y jerárquica  

**TL;DR:** La configuración perfecta e impecable debe incluir (a) claves que se pueden leer desde el archivo Y desde la variable de entorno (b) los secretos se guardan fuera del código al que se ha hecho commit (c) config es jerárquica para facilitar la localización. Solo hay unos pocos paquetes que pueden ayudar a validar la mayoría de estos casos como [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), y [convict](https://www.npmjs.com/package/convict)

**De lo contrario:** No cumplir con ninguno de los requisitos de configuración simplemente frena al equipo de desarrollo o al equipo de devOps. Probablemente ambos

🔗 [**Leer más: buenas prácticas de configuración**](./sections/projectstructre/configguide.spanish.md)


<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `2. Prácticas en manejo de errores`

## ![✔] 2.1  Usa Async-Await o promesas para el manejo de errores asíncronos

**TL;DR:** El manejo de errores asíncronos en el estilo de callback es probablemente la manera más rápida de ir al infierno (a.k.a, pyramid of doom o pirámide de la perdición). El mejor regalo que le puedes dar a tu código es utilizar una biblioteca de promesas seria o async-await que proporciona una sintaxis de código muy compacta y similar al try-catch

**De lo contrario:** El estilo de callback de Node.JS, function (err, response), es una forma prometedora de código no mantenible debido a la combinación de manejo de errores con código normal, anidación excesiva y patrones de codificación incómodos

🔗 [**Leer más: evitar callbacks**](./sections/errorhandling/asyncerrorhandling.spanish.md)

<br/><br/>


## ![✔] 2.2 Extiende el objeto Error nativo

**TL;DR:** Muchos arrojan errores como una cadena o como un tipo personalizado; esto complica la lógica de manejo de errores y la interoperatividad entre módulos. Ya sea que rechace una promesa, genere una excepción o emita un error, usar solo el objeto de Error nativo (o un objecto que herede del objeto Error nativo) aumentará la uniformidad y evitará la pérdida de información. Existe la regla `no-throw-literal` de ESLint que revisa esto (aunque tiene unas [limitaciones](http://eslint.org/docs/rules/no-throw-literal) que pueden ser solucionadas al usar TypeScript y configurando la regla `eslint/no-throw-literal`).

**De lo contrario:** Al invocar algún componente, no estar seguro de qué tipo de errores son retornados, hace que sea mucho más difícil manejar los errores de forma adecuada. Peor aún, el uso de tipos personalizados para describir los errores puede conducir a la pérdida de información de error crítico como el seguimiento de la pila.

🔗 [**Leer más: utilizando el objeto de Error incorporado**](./sections/errorhandling/useonlythebuiltinerror.spanish.md)

<br/><br/>

## ![✔] 2.3 Distingue errores catastróficos de errores operacionales

**TL;DR:** Los errores operacionales (por ejemplo, el API recibió una entrada no válida) se refieren a casos conocidos en los que el impacto del error se entiende completamente y se pueden manejar con cuidado. Por otro lado, el error del programador (por ejemplo, tratar de leer la variable no definida) se refiere a fallas desconocidas del código que ordenan reiniciar correctamente la aplicación.

**De lo contrario:** Siempre puedes reiniciar la aplicación cuando aparece un error, pero ¿Por qué dejar ~5000 usuarios en línea abajo debido a un error operacional menor, previsto? lo contrario tampoco es ideal: Mantener la aplicación activa cuando se produce un problema desconocido (error del programador) puede provocar un comportamiento imprevisto. La diferenciación de los dos permite actuar con tacto y aplicar un enfoque equilibrado basado en el contexto dado.

  🔗 [**Leer más: error operacional vs programador**](./sections/errorhandling/operationalvsprogrammererror.spanish.md)

<br/><br/>

## ![✔] 2.4 Maneja los errores centralmente, no dentro de un middleware

**TL;DR:** La lógica de manejo de errores, como un correo al administrador y registro de logs, debe encapsularse en un objeto dedicado y centralizado al que todos los end-points (por ejemplo, Express middleware, cron jobs, unit-testing) llamen cuando se produce un error.

**De lo contrario:** No manejar los errores dentro de un solo lugar dará lugar a la duplicación del código y, probablemente, a los errores que se manejan de forma incorrecta

🔗 [**Leer más: manejo de errores en un lugar centralizado**](./sections/errorhandling/centralizedhandling.spanish.md)

<br/><br/>

## ![✔] 2.5 Documenta errores del API con OpenAPI o GraphQL

**TL;DR:** Deja que los clientes de tu API sepan qué errores podrían presentarse como respuesta, para que puedan manejarlos cuidadosamente sin fallar. Para API's RESTful esto se hace generalmente con frameworks de documentación REST API como Swagger. Si estás utilizando GraphQL, también puedes utilizar tus esquemas y comentarios.

**De lo contrario:** Un cliente del API podría decidir bloquearse y reiniciarse solo porque recibió un error que no pudo entender. Nota: la persona que llama de su API puede ser tu (muy típico en un entorno de microservicios).

🔗 [**Leer más: documentación de errores en Swagger o GraphQL**](./sections/errorhandling/documentingusingswagger.spanish.md)

<br/><br/>

## ![✔] 2.6 Cerrar el proceso elegantemente cuando un extraño llega a la ciudad

**TL; DR:** Cuando se produce un error desconocido (un error del desarrollador, consulta el número de práctica recomendada número 2.3): existe incertidumbre acerca del estado de la aplicación. Una práctica común sugiere reiniciar el proceso cuidadosamente usando una herramienta de gestión de procesos como [Forever](https://www.npmjs.com/package/forever) y [PM2](https://pm2.keymetrics.io/).

**De lo contrario:** Cuando se detecta una excepción desconocida, algunos objetos pueden estar en un estado defectuoso (por ejemplo, un emisor de eventos que se usa globalmente y que ya no se activan debido a fallas internas) y todas las solicitudes futuras pueden fallar o comportarse de manera loca.

🔗 [**Leer más: cerrar el proceso**](./sections/errorhandling/shuttingtheprocess.spanish.md)

<br/><br/>

## ![✔] 2.7 Usa un logger maduro para aumentar la visibilidad de los errores

**TL;DR:** Un conjunto de herramientas de registro maduras como [Pino](https://github.com/pinojs/pino) o [Log4js](https:www.npmjs.com/package/log4js) acelerará el descubrimiento y la comprensión de errores. Así que olvídate de console.log.

**De lo contrario:** Navegando a través de console.logs o manualmente a través de un archivo de texto desordenado sin herramientas de consulta o un visor de registro decente puede mantenerte ocupado en el trabajo hasta tarde

🔗 [**Leer más: utilizando un registrador maduro**](./sections/errorhandling/usematurelogger.spanish.md)

<br/><br/>

## ![✔] 2.8 Pruebas los flujos de errores usando tu framework de prueba favorito

**TL;DR:** Ya sea que se trate de un profesional de QA automatizado o de una prueba de desarrollador manual: asegúrate de que tu código no solo satisfaga un escenario positivo sino que también maneje y devuelva los errores correctos. Frameworks de prueba como Mocha & Chai pueden manejar esto fácilmente (vea ejemplos de código dentro del "Gist emergente").

**De lo contrario:** Sin pruebas, ya sea automática o manualmente, no puedes confiar en su código para devolver los errores correctos. Sin errores significativos, no hay manejo de errores.

🔗 [**Leer más: probar los flujos de error**](./sections/errorhandling/testingerrorflows.spanish.md)

<br/> <br/>

## ![✔] 2.9 Descubre errores y tiempo de inactividad usando productos de APM

**TL;DR:** Los productos de monitoreo y rendimiento (a.k.a APM) miden de forma proactiva tu base de código o API para auto-mágicamente resaltar errores, bloqueos y ralentizar partes que no te das cuenta.

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento y los tiempos de inactividad de la API, probablemente nunca sabrás cuáles son las piezas de código más lentas en el escenario del mundo real y cómo afectan estas a la experiencia del usuario.

🔗 [**Leer más: utilizando productos APM**](./sections/errorhandling/apmproducts.spanish.md)

<br/><br/>

## ![✔] 2.10 Captura los rechazos de promesas no controladas

**TL;DR:** Cualquier excepción lanzada dentro de una promesa será tragada y descartada a menos que un desarrollador no se olvide de manejarla de manera explícita. ¡Incluso si su código está suscrito a `process.uncaughtException`! Supera esto registrándose en el proceso del evento `process.unhandledRejection`.

**De lo contrario:** Tus errores serán tragados y no dejarán rastros. Nada de que preocuparse

🔗 [**Leer más: captura rechazos de promesas no controladas**](./sections/errorhandling/catchunhandledpromiserejection.spanish.md)

<br/><br/>

## ![✔] 2.11 Falla rápidamente, valida los argumentos usando una biblioteca dedicada

**TL; DR:** Valida los datos de entrada en la API para evitar bugs molestos que son difíciles de rastrear mas adelante. La validación de código suele ser tediosa amenos que tengas ona librería que pueda ayudar como [ajv](https://www.npmjs.com/package/ajv) y [Joi](https://www.npmjs.com/package/joi).

**De lo contrario:** Considera esto: tu función espera un argumento numérico "Descuento" que la persona que llama la función olvida pasar, más adelante su código comprueba si Descuento!= 0 (cantidad de descuento permitido es mayor que cero), entonces permitirás el usuario que disfrute de un descuento. Dios mío, qué desagradable error. ¿Puedes verlo?

🔗 [**Leer más: falla rápidamente**](./sections/errorhandling/failfast.spanish.md)

<br><br>

## ![✔] 2.12 Siempre resuelve las promesas antes de retornarlas para evitar un stacktrace parcial

**TL;DR:** Siempre utiliza `return await` cuando regreses una promesa para tener un error stacktrace completo. Si la función regresa una promesa, esa función debe ser declarada como `async` y explícitamente esperar (`await`) la promesa antes de retornarla.

**De lo contrario** La función que regresa una promesa sin esperar no aparecerá en el stacktrace. Esas piezas faltantes probablemente complicarán el entendimiento del flujo que lleva al error, especialmente si la causa del comportamiento está en la función faltante.

🔗 [**Leer más: retornar promesas**](./sections/errorhandling/returningpromises.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `3. Prácticas de estilo de código`

## ![✔] 3.1 Utilizar ESLint

**TL;DR:** [ESLint](https://eslint.org) es el estándar para verificar posibles errores de código y corregir el estilo del código, no solo para identificar problemas básicos, sino también para detectar anti-patrones de código graves, como los desarrolladores que arrojan errores sin clasificación. Aunque ESLint puede corregir automáticamente los estilos de código, otras herramientas como [prettier](https://www.npmjs.com/package/prettier) y [beautify](https://www.npmjs.com/package/js-beautify) son más potentes para formatear la solución y funcionan en conjunto con ESLint

**De lo contrario:** Los desarrolladores podrían desperdiciar demasiado tiempo centrándose demasiado en el corregir los espacios y el ancho de línea del código

🔗 [**Leer más: Usando ESLint y Prettier**](./sections/codestylepractices/eslint_prettier.spanish.md)

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

**De lo contrario:** La depuración de problemas de producción utilizando un registro de memoria (log) puede ser un desafío ya que observa un número significativo de funciones anónimas

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

## ![✔] 3.7 Escoge const antes que let. No uses var

**TL;DR:** Usar `const` significa que una vez que se asigna una variable, no se puede reasignar. Prefiriendo `const` te ayudará a no sentirte tentado a usar la misma variable para diferentes usos y a aclarar tu código. Si una variable necesita ser reasignada, en un bucle for, por ejemplo, usa `let` para declararlo. Otro aspecto importante de `let`es que una variable declarada usando solo está disponible en el ámbito del bloque en el que se definió. `var` tiene ámbito de función, no ámbito de bloque, y [no debería ser usada en ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) ahora que tienes `const` y `let` a tu disposición

**De lo contrario:** La depuración se vuelve mucho más engorrosa cuando se sigue una variable que cambia con frecuencia

🔗 [**Leer más: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Importa los módulos primero, no dentro de funciones

**TL;DR:** Importa los módulos al comienzo de cada archivo, antes y fuera de cualquier función. Esta práctica recomendada simple no solo lo ayudará a identificar fácil y rápidamente las dependencias de un archivo en la parte superior, sino que también evitará un par de posibles problemas.

**De lo contrario:** Los requisitos se ejecutan de manera síncrona por Node.js. Si se los llama desde una función, puede bloquear el manejo de otras solicitudes en un momento más crítico. Además, si un módulo requerido o cualquiera de sus propias dependencias arroja un error y bloquea el servidor, es mejor averiguarlo lo antes posible, lo que podría no ser el caso si ese módulo se requiere desde una función

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

**TL;DR:** Prioriza el operador de igualdad estricto `===` sobre el operador de igualdad abstracto `==`. `==` comparará dos variables después de convertirlas a un tipo común. No hay conversión de tipo en `===`, y ambas variables deben ser del mismo tipo para ser iguales

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

**TL;DR:** Node 8 LTS ahora tiene soporte completo para Async-await. Esta es una nueva forma de lidiar con el código asíncrono que reemplaza las devoluciones de llamada y las promesas. Async-await no bloquea y hace que el código asíncrono se vea síncrono. El mejor regalo que puede dar a su código es usar async-await, que proporciona una sintaxis de código mucho más compacta y familiar a try-catch.

**De lo contrario:** El manejo de errores asíncronos en el estilo de callback es probablemente la forma más rápida de ir al infierno: este estilo obliga a verificar los errores por todas partes, lidiar con la incómoda anidación de código y hace que sea difícil razonar sobre el flujo de código

🔗[**Leer más:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Usar funciones de flecha (=>)

**TL;DR:** Aunque se recomienda usar async-await y evitar parámetros de función cuando se trata de API más antiguas que aceptan promesas o callbacks. Las funciones de flecha hacen que la estructura del código sea más compacta y mantienen el contexto léxico de la función raíz (i.e. `this`)

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

🔗 [**Leer más: Incluye 3 partes en cada nombre de prueba**](./sections/testingandquality/3-parts-in-name.spanish.md)

<br/><br/>

## ![✔] 4.3 Pruebas de estructura por el patrón AAA

**TL;DR:** Estructura tus pruebas con 3 secciones bien separadas: Organizar, Actuar y Afirmar (AAA - Arrange, Act & Assert). La primera parte incluye la configuración de la prueba, luego la ejecución de la unidad bajo prueba y finalmente la fase de afirmación. Seguir esta estructura garantiza que el lector no gaste CPU cerebral en comprender el plan de prueba

**De lo contrario:** No solo pasa largas horas diarias entendiendo el código principal, ahora también lo que debería haber sido la parte simple del día (pruebas) ha ejercitado tu cerebro

🔗 [**Leer más: Pruebas de estructura por el patrón AAA**](./sections/testingandquality/aaa.spanish.md)

<br/><br/>

## ![✔] 4.4 Detecta problemas de código con un linter

**TL;DR:** Usa un código de interfaz para verificar la calidad básica y detectar anti-patrones temprano. Ejecútala antes de cualquier prueba y agrégalo como un git-hook previo al commit para minimizar el tiempo necesario para revisar y corregir cualquier problema. También verifica la [Sección 3](#3-code-style-practices) sobre las prácticas de estilo de código.

**De lo contrario:** Puede dejar pasar algún código anti-patrón y posible código vulnerable a su entorno de producción.

<br/><br/>

## ![✔] 4.5 Evita datos globales, agrega datos personalizados por prueba

**TL;DR:** Para evitar el acoplamiento de pruebas y razonar fácilmente sobre el flujo de prueba, cada prueba debe agregar y actuar en su propio conjunto de filas de base de datos. Cada vez que una prueba necesita extraer o asumir la existencia de algunos datos de base de datos, debes agregar explícitamente esos datos y evitar la mutación de cualquier otro registro

**De lo contrario:** Considera un escenario en el que se cancela la implementación debido a las pruebas fallidas, el equipo ahora pasará un tiempo de investigación precioso que termina en una triste conclusión: el sistema funciona bien, las pruebas sin embargo interfieren entre sí y rompen la construcción

🔗 [**Leer más: Evita datos globales**](./sections/testingandquality/avoid-global-test-fixture.spanish.md)

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

## ![✔] 4.10 Usa ambiente similar al de producción para pruebas e2e

**TL;DR:** La prueba de extremo a extremo (e2e) que incluye datos en vivo solía ser el eslabón más débil del proceso de CI, ya que depende de múltiples servicios pesados como DB. Usa un entorno que esté lo más cerca posible de su producción real como a-continue

**De lo contrario:** Sin 'docker-compose',los equipos deben mantener una base de datos de prueba para cada entorno de prueba, incluidas las máquinas de los desarrolladores, mantener todas esas bases de datos sincronizadas para que los resultados de la prueba no varíen entre entornos.

<br/><br/>

## ![✔] 4.11 Refactoriza regularmente utilizando herramientas de análisis estático

**TL;DR:** El uso de herramientas de análisis estático ayuda al proporcionar formas objetivas para mejorar la calidad del código y mantiene tu código mantenible. Puedes agregar herramientas de análisis estático a su compilación de CI para que falle cuando encuentre que el código huele. Sus principales puntos de venta sobre el revestimiento simple son la capacidad de inspeccionar la calidad en el contexto de múltiples archivos (por ejemplo, detectar duplicaciones), realizar análisis avanzados (por ejemplo, complejidad del código) y seguir el historial y el progreso de los problemas de código. Dos ejemplos de herramientas que puede usar son [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) y [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**De lo contrario:** Con una mala calidad de código, los errores y el rendimiento siempre serán un problema que ninguna biblioteca nueva brillante o características de última generación podrá solucionar

🔗 [**Leer más: Refactoriza!**](./sections/testingandquality/refactoring.spanish.md)

<br/><br/>

## ![✔] 4.12 Elije con cuidado tu plataforma CI (Jenkins vs CircleCI vs Travis vs Resto del mundo)

**TL;DR:** Tu plataforma de integración continua (CI/CD) alojará todas las herramientas de calidad (por ejemplo, prueba, lint), por lo que debería venir con un ecosistema vibrante de complementos. [Jenkins](https://jenkins.io/) solía ser el valor predeterminado para muchos proyectos, ya que tiene la comunidad más grande junto con una plataforma muy poderosa al precio de una configuración compleja que exige una curva de aprendizaje empinada. Hoy en día, se ha vuelto mucho más fácil configurar una solución de CI utilizando herramientas SaaS como [CircleCI](https://circleci.com) y otros. Estas herramientas permiten crear una tubería de CI flexible sin la carga de administrar toda la infraestructura. Eventualmente, es una compensación entre robustez y velocidad: elije tu lado con cuidado

**De lo contrario:** Elegir un proveedor de nicho puede bloquearlo una vez que necesite una personalización avanzada. Por otro lado, ir con Jenkins podría quemar un tiempo precioso en la configuración de la infraestructura

🔗 [**Leer más: Elige tu plataforma CI**](./sections/testingandquality/citools.spanish.md)

<br><br>

## ![✔] 4.13 Prueba tu middleware por separado

**TL;DR:** Cuando tu middleware tiene una lógica inmensa que se extiende a muchas peticiones, vale la pena realizar pruebas por separado, sin necesidad de despertar todo el framework web. Esto puede hacerse fácilmente pisando y espiando en los objetos {req, res, next}.

**De lo contrario** Un bug en un middleware de express === un bug en todas o casi todas las peticiones

🔗 [**Leer más: Prueba tu middleware por separado**](./sections/testingandquality/test-middlewares.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `5. Yendo a las prácticas de producción`

## ![✔] 5.1. Monitorización

**TL;DR:** Monitorear es un juego para descubrir problemas antes de que lo hagan los clientes; obviamente, se le debe asignar una importancia sin precedentes. El mercado está abrumado por las ofertas, por lo tanto, considera empezar con la definición de las métricas básicas que debe seguir (mis sugerencias en el interior), luego repasar características sofisticadas adicionales y elegir la solución que cumple todos los requisitos. Haga clic en "Lo esencial" a continuación para obtener una descripción general de las soluciones

**De lo contrario:** Fallar === clientes decepcionados. Simple

🔗 [**Leer más: Monitorización!**](./sections/production/monitoring.spanish.md)

<br/><br/>

## ![✔] 5.2. Aumenta la transparencia utilizando unos registros inteligentes

**TL;DR:** Los registros pueden ser un almacén tonto de declaraciones de depuración o el habilitador de un hermoso tablero que cuenta la historia de tu aplicación. Planifica tu plataforma de registro desde el día 1: cómo se recopilan, almacenan y analizan los registros para garantizar que la información deseada (por ejemplo, tasa de error, seguir una transacción completa a través de servicios y servidores, etc.) realmente se pueda extraer

**De lo contrario:** Terminarás con un cuadro negro con el que es difícil razonar y luego empezaras a reescribir todas las declaraciones de registro para agregar información adicional

🔗 [**Leer mas: Aumenta la transparencia utilizando unos registros inteligentes**](./sections/production/smartlogging.spanish.md)

<br/><br/>

## ![✔] 5.3. Delega todo lo posible (por ejemplo, gzip, SSL) a un proxy inverso

**TL;DR:** Node es terriblemente malo para realizar tareas intensivas de CPU como gzipping, terminación SSL, etc. En su lugar, debes usar servicios de middleware "reales" como nginx, HAproxy o servicios de proveedores en la nube

**De lo contrario:** Tu único subproceso se mantendrá ocupado haciendo tareas de infraestructura en lugar de ocuparse del núcleo de tu aplicación y el rendimiento se degradará en consecuencia

🔗 [**Leer más: Delega todo lo posible a un proxy inverso**](./sections/production/delegatetoproxy.spanish.md)

<br/><br/>

## ![✔] 5.4. Bloquear dependencias

**TL;DR:** Tu código debe ser idéntico en todos los entornos, pero sorprendentemente npm permite que las dependencias se desplacen entre los entornos de forma predeterminada: cuando instala paquetes en varios entornos, intenta obtener la última versión del parche de los paquetes. Evita esto utilizando archivos de configuración npm, .npmrc, que le indican a cada entorno que guarde la versión exacta (no la última) de cada paquete. Alternativamente, para un control más fino usa `npm shrinkwrap`. \ * Actualización: a partir de NPM5, las dependencias están bloqueadas de forma predeterminada. El nuevo administrador de paquetes, Yarn, también lo cubre por defecto

**De lo contrario:** El control de calidad probará a fondo el código y aprobará una versión que se comportará de manera diferente cuando está en producción. Peor aún, diferentes servidores en el mismo clúster de producción pueden ejecutar código diferente

🔗 [**Leer más: Bloquear dependencias**](./sections/production/lockdependencies.spanish.md)

<br/><br/>

## ![✔] 5.5. Proteja la disponibilidad del proceso utilizando la herramienta adecuada

**TL;DR:** El proceso debe continuar y reiniciarse si falla. Para escenarios simples, las herramientas de administración de procesos como PM2 pueden ser suficientes, pero en el mundo "dockerizado" de hoy en día, las herramientas de administración de clústeres también deben considerarse

**De lo contrario:** Ejecutar docenas de instancias sin una estrategia clara y demasiadas herramientas juntas (administración de clúster, docker, PM2) podría conducir al caos de DevOps

🔗 [**Leer más: Proteja la disponibilidad del proceso utilizando la herramienta adecuada**](./sections/production/guardprocess.spanish.md)

<br/><br/>

## ![✔] 5.6. Utiliza todos los núcleos de la CPU

**TL;DR:** En su forma básica, una aplicación Node se ejecuta en un solo núcleo de CPU mientras que todas las demás quedan inactivas. Es tu deber replicar el proceso Node y utilizar todas las CPU: para aplicaciones pequeñas y medianas, puedes usar Node Cluster o PM2. Para una aplicación más grande, considera replicar el proceso utilizando algún clúster de Docker (por ejemplo, K8S, ECS) o scripts de implementación basados en el sistema de inicio Linux (ej. systemd)

**De lo contrario:** Es probable que tu aplicación utilice solo el 25% de sus recursos disponibles (!) O incluso menos. Ten en cuenta que un servidor típico tiene 4 núcleos de CPU o más, la implementación ingenua de Node.js utiliza solo 1 (¡incluso utilizando servicios PaaS como AWS beanstalk!)

🔗 [**Leer más: Utiliza todos los núcleos de la CPU**](./sections/production/utilizecpu.spanish.md)

<br/><br/>

## ![✔] 5.7. Crear un "end point de mantenimiento"

**TL;DR:** Descubre un conjunto de información relacionada con el sistema, como el uso de memoria y REPL, etc. en una API segura. Aunque es muy recomendable confiar en herramientas estándar y de pruebas de batalla, parte de la información y las operaciones valiosas se hacen más fácilmente usando código

**De lo contrario:** Descubrirás que estás realizando muchas "implementaciones de diagnóstico": envío de código a producción solo para extraer cierta información con fines de diagnóstico

🔗 [**Leer más: Crea un ‘endpoint de mantenimiento**](./sections/production/createmaintenanceendpoint.spanish.md)

<br/><br/>

## ![✔] 5.8. Descubre errores y tiempos de inactividad utilizando productos APM

**TL;DR:** Los productos de monitoreo y rendimiento de aplicaciones (también conocido como APM) miden proactivamente la base de código y la API para que puedan ir automáticamente más allá del monitoreo tradicional y medir la experiencia general del usuario en todos los servicios y niveles. Por ejemplo, algunos productos APM pueden resaltar una transacción que se carga demasiado lentamente en el lado de los usuarios finales al tiempo que sugiere lo que lo podría provocar

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento de la API y los tiempos de inactividad, probablemente nunca te darás cuenta de cuáles son tus partes de código más lentas en un escenario del mundo real y cómo afectan a la experiencia de usuario

🔗 [**Leer más: Descubre errores y tiempos de inactividad utilizando productos APM**](./sections/production/apmproducts.spanish.md)

<br/><br/>

## ![✔] 5.9. Prepara tu código para la producción

**TL;DR:** Codifica con el fin en mente, planifica la producción desde el día 1. Esto suena un poco vago, así que he compilado algunos consejos de desarrollo que están estrechamente relacionados con el mantenimiento de la producción (haga clic en Gist a continuación)

**De lo contrario:** Un campeón mundial de IT/DevOps no salvará un sistema mal escrito

🔗 [**Leer más: Prepara tu código para la producción**](./sections/production/productioncode.spanish.md)

<br/><br/>

## ![✔] 5.10. Medir y proteger el uso de la memoria

**TL;DR:** Node.js tiene relaciones controversiales con la memoria: el motor v8 tiene límites suaves en el uso de la memoria (1,4 GB) y hay maneras conocidas para perder memoria en el código de Node, por lo que es imprescindible observar la memoria de proceso de Node. En aplicaciones pequeñas, puedes medir la memoria periódicamente utilizando comandos de shell, pero en aplicaciones medianas y grandes, considera convertir tu reloj de memoria en un sistema de monitoreo robusto

**De lo contrario:** Tu memoria de proceso podría perder cien megabytes por día, como sucedió a [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Leer más:  Medir y proteger el uso de la memoria**](./sections/production/measurememory.spanish.md)

<br/><br/>

## ![✔] 5.11. Saca tus recursos frontend de Node

**TL;DR:** Sirve el contenido frontend usando middleware dedicado (nginx, S3, CDN) porque el rendimiento de Node se ve  realmente afectado cuando se trata con muchos archivos estáticos debido a su modelo de subproceso único

**De lo contrario:** Tu único hilo Node estará ocupado transmitiendo cientos de archivos html / images / angular / react en lugar de asignar todos sus recursos para la tarea para la que nació: servir contenido dinámico

🔗 [**Leer más: Saca tus recursos frontend de Node**](./sections/production/frontendout.spanish.md)

<br/><br/>

## ![✔] 5.12. Se anti-estado, mata tus servidores casi todos los días

**TL;DR:** Almacena cualquier tipo de datos (por ejemplo, sesiones de usuario, caché, archivos cargados) en almacenes de datos externos. Considera "matar" sus servidores periódicamente o utilice la plataforma "sin servidor" (por ejemplo, AWS Lambda) que aplica explícitamente un comportamiento sin estado

**De lo contrario:** Un fallo en un servidor dará como resultado el tiempo de inactividad de la aplicación en lugar de simplemente matar una máquina defectuosa. Además, la elasticidad de escalamiento será más difícil debido a la dependencia de un servidor específico

🔗 [**Leer más: Se anti-estado, mata tus servidores casi todos los días**](./sections/production/bestateless.spanish.md)

<br/><br/>

## ![✔] 5.13. Usa herramientas que detecten vulnerabilidades automáticamente

**TL;DR:** Incluso las dependencias de mayor reputación como Express tienen vulnerabilidades conocidas (de vez en cuando) que pueden poner en riesgo un sistema. Esto se puede dominar fácilmente usando herramientas comunitarias y comerciales que constantemente verifican vulnerabilidades y advierten (localmente o en GitHub), algunos incluso pueden parchearlas de inmediato

**De lo contrario:** Mantener tu código limpio de vulnerabilidades sin herramientas dedicadas requerirá que sigas constantemente las publicaciones en línea sobre nuevas amenazas. Bastante tedioso

🔗 [**Leer más: Usa herramientas que detecten vulnerabilidades automáticamente**](./sections/production/detectvulnerabilities.spanish.md)

<br/><br/>

## ![✔] 5.14. Asigna un id de transacción a cada instrucción del registro

También conocido como correlation id / transit id / tracing id / request id / request context / etc.

**TL;DR:** Asigna el mismo identificador, id-transacción: {algún valor}, a cada entrada de registro dentro de una sola solicitud. Luego, al inspeccionar los errores en los registros, encontrarás fácilmente lo que sucedió antes y después. Antes de la version 14 de Node, esto no era fácil de hacer debido a la naturaleza asíncrona de Node, pero desde `AsyncLocalStorage` llegó, esto se volvió posible y mas fácil que nunca. Ver códigos de ejemplo adentro

**De lo contrario:** Ver un registro de errores de producción sin el contexto, lo que sucedió antes, hace que sea mucho más difícil y lento razonar sobre el problema

🔗 [**Leer más: asigna un ‘Id de transacción’ a cada instrucción del registro**](./sections/production/assigntransactionid.spanish.md)

<br/><br/>

## ![✔] 5.15. Establecer `NODE_ENV=production`

**TL;DR:** Establece la variable de entorno NODE_ENV a "producción" o "desarrollo" para marcar si las optimizaciones de producción deben activarse; muchos paquetes npm determinan el entorno actual y optimizan su código para la producción

**De lo contrario:** Omitir esta simple propiedad podría degradar en gran medida el rendimiento. Por ejemplo, cuando se usa Express para la representación del lado del servidor, omitir `NODE_ENV` lo hace un tercio más lento.

🔗 [**Leer más: Establecer NODE_ENV=production**](./sections/production/setnodeenv.spanish.md)

<br/><br/>

## ![✔] 5.16. Diseña implementaciones automatizadas, atómicas y sin tiempo de inactividad

**TL;DR:** Las investigaciónes muestran que los equipos que realizan muchas implementaciones reducen la probabilidad de problemas graves de producción. Las implementaciones rápidas y automatizadas que no requieren pasos manuales riesgosos y el tiempo de inactividad del servicio mejoran significativamente el proceso de implementación. Deberías lograr esto usando Docker combinado con herramientas de CI, ya que se convirtieron en el estándar de la industria para la implementación simplificada

**De lo contrario:** Implementaciones largas -> tiempo de inactividad de producción y error humano -> equipo desconfiado en la implementación -> menos implementaciones y características

<br/><br/>

## ![✔] 5.17. Usa una versión LTS de Node.js

**TL;DR:** Asegúrate de estar utilizando una versión LTS (de soporte a largo plazo) de Node.js para recibir correcciones de errores críticos, actualizaciones de seguridad y mejoras de rendimiento.

**De lo contrario:** Los errores o vulnerabilidades recientemente descubiertos podrían utilizarse para explotar una aplicación que se ejecuta en producción, y su aplicación puede dejar de ser compatible con varios módulos y ser más difícil de mantener

🔗 [**Leer más: Usa una versión LTS de Node.js**](./sections/production/LTSrelease.spanish.md)

<br/><br/>

## ![✔] 5.18. No enrutes registros dentro de la aplicación

**TL;DR:** Los desarrolladores no deben codificar los destinos de registro dentro del código de la aplicación, sino que deben estar definidos por el entorno de ejecución en el que se ejecuta la aplicación. Los desarrolladores deben escribir registros en 'stdout' utilizando una utilidad de registro y luego dejar que el entorno de ejecución (contenedor, servidor, etc.) canalice la secuencia `stdout` al destino apropiado (es decir, Splunk, Graylog, ElasticSearch, etc.).

**De lo contrario** Aplicación de enrutamiento de registro de manejo === difícil de escalar, pérdida de registros, mala separación de preocupaciones

🔗 [**Leer más: Enrutamiento de registros**](./sections/production/logrouting.spanish.md)

<br><br>

## ![✔] 5.19. Instala tus paquetes con `npm ci`

**TL;DR:** Tienes que asegurate que el código de producción utiliza la misma versión de los paquetes con los que realizaste pruebas. Corre `npm ci` para estrictamente instalar de manera limpia las dependencias que correspondan al package.json y package-lock.json. Usando este comando es recomendado en ambientes automatizados, como los canalizadores de integración contínua (continuos integration pipelines).

**De lo contrario** QA va probar exhaustivamente el código y aprobar una version que se va a comportar diferente en producción. Peor aún, servidores en el mismo cluster de producción podría correr distinto código.

🔗 [**Leer más: Instala tus paquetes con npm ci**](./sections/production/installpackageswithnpmci.spanish.md)

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

🔗 [**Leer más: Reglas de seguridad de linter**](./sections/security/lintrules.spanish.md)

<br/><br/>

## ![✔] 6.2. Limita las solicitudes concurrentes utilizando un middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Los ataques DOS son muy populares y relativamente fáciles de realizar. Implementa la limitación de velocidad utilizando un servicio externo como balanceadores de carga en la nube, firewalls en la nube, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) paquete, o (para aplicaciones más pequeñas y menos críticas) un middleware que limita la velocidad (e.j. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**De lo contrario:** Una aplicación podría estar sujeta a un ataque que resulte en una denegación de servicio donde los usuarios reales reciban un servicio degradado o no disponible.

🔗 [**Leer más: Limita la tasa de solicitudes**](./sections/security/limitrequests.spanish.md)

<br/><br/>

## ![✔] 6.3 Quita los secretos de los archivos de configuración o usa paquetes para cifrarlos

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Nunca almacenes secretos sin formato en archivos de configuración o código fuente. En su lugar, utiliza sistemas de gestión secreta como productos Vault, Kubernetes / Docker Secrets o variables de entorno. Como último recurso, los secretos almacenados en el control de código fuente deben ser encriptados y administrados (claves rodantes, vencimiento, auditoría, etc.). Utiliza los ganchos en pre-commit/push para evitar que se guarden secretos accidentalmente

**De lo contrario:** El control del código fuente, incluso para repositorios privados, puede hacerse público por error, momento en el que se exponen todos los secretos. El acceso al control de origen para una parte externa proporcionará inadvertidamente acceso a sistemas relacionados (bases de datos, API, servicios, etc.).

🔗 [**Leer más: Manejo de secretos**](./sections/security/secretmanagement.spanish.md)

<br/><br/>

## ![✔] 6.4. Prevenir vulnerabilidades de inyección de consultas con bibliotecas ORM / ODM

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Para evitar la inyección de SQL / NoSQL y otros ataques maliciosos, utilice siempre un ORM / ODM o una biblioteca de base de datos que escape a los datos o admita consultas parametrizadas con nombre o indexadas, y se encarga de validar la entrada del usuario para los tipos esperados. Nunca utilices cadenas de plantillas de JavaScript o concatenación de cadenas para inyectar valores en las consultas, ya que esto abre su aplicación a un amplio espectro de vulnerabilidades. Todas las bibliotecas acreditadas de acceso a datos de Node.js (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) tienen protección incorporada contra ataques de inyección.

**De lo contrario:** La entrada de usuario no validada o no higiénica podría conducir a la inyección del operador cuando se trabaja con MongoDB para NoSQL, y no usar un sistema de desinfección adecuado u ORM permitirá fácilmente ataques de inyección SQL, creando una vulnerabilidad gigante.

🔗 [**Leer más: Prevención de inyección de consultas utilizando bibliotecas ORM/ODM**](./sections/security/ormodmusage.spanish.md)

<br/><br/>

## ![✔] 6.5. Colección de mejores prácticas de seguridad genéricas

**TL;DR:** Esta es una colección de consejos de seguridad que no está relacionada directamente con Node.js: la implementación de Node no es muy diferente a la de cualquier otro idioma. Haz clic en leer más para mas información.

🔗 [**Leer más: Common security best practices**](./sections/security/commonsecuritybestpractices.spanish.md)

<br/><br/>

## ![✔] 6.6. Ajusta los encabezados de respuesta HTTP para mayor seguridad

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Tu aplicación debe usar encabezados seguros para evitar que los atacantes usen ataques comunes como scripting entre sitios (XSS), clickjacking y otros ataques maliciosos. Estos se pueden configurar fácilmente utilizando módulos como [helmet](https://www.npmjs.com/package/helmet).

**De lo contrario:** Los atacantes pueden realizar ataques directos a los usuarios de su aplicación, lo que genera enormes vulnerabilidades de seguridad

🔗 [**Leer más: Usando encabezados seguros en su aplicación**](./sections/security/secureheaders.spanish.md)

<br/><br/>

## ![✔] 6.7. Inspeccionar de manera constante y automática las dependencias vulnerables

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** Con el ecosistema npm es común tener muchas dependencias para un proyecto. Las dependencias siempre deben mantenerse bajo control a medida que se encuentran nuevas vulnerabilidades. Usa herramientas como [npm audit](https://docs.npmjs.com/cli/audit) o [snyk](https://snyk.io/) para rastrear, monitorear y parchear dependencias vulnerables. Integra estas herramientas con su configuración de CI para que pueda detectar una dependencia vulnerable antes de que llegue a producción.

**De lo contrario:** Un atacante podría detectar su framework web y atacar todas sus vulnerabilidades conocidas.

🔗 [**Leer más: Seguridad de dependencias**](./sections/security/dependencysecurity.spanish.md)

<br/><br/>

## ![✔] 6.8. Proteja las contraseñas/secretos de sus usuarios usando bcrypt o scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Las contraseñas o los secretos (claves API) deben almacenarse utilizando una función segura hash + salt como `bcrypt`, o en le peor de los casos `pbkdf2`.

**De lo contrario:** Las contraseñas o los secretos que se conservan sin utilizar una función segura son vulnerables a la fuerza bruta y los ataques de diccionario que eventualmente conducirán a su divulgación.

🔗 [**Leer más: Usa Bcrypt**](./sections/security/bcryptpasswords.spanish.md)

<br/><br/>

## ![✔] 6.9. Escapa la salida de HTML, JS y CSS

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Los datos no confiables que se envían al navegador pueden ejecutarse en lugar de mostrarse, esto se conoce comúnmente como un ataque de scripting entre sitios (XSS). Mitiga esto mediante el uso de bibliotecas dedicadas que marquen explícitamente los datos como contenido puro que nunca debe ejecutarse (es decir, codificación, escape)

**De lo contrario:** Un atacante podría almacenar código JavaScript malicioso en su base de datos que luego se enviará tal cual a los pobres clientes 

🔗 [**Leer más: Escapa la salida**](./sections/security/escape-output.spanish.md)

<br/><br/>

## ![✔] 6.10. Validar esquemas JSON entrantes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Valida la carga útil del cuerpo de las solicitudes entrantes y asegúrese de que cumpla con las expectativas, falle rápidamente si no lo hace. Para evitar la tediosa codificación de validación dentro de cada ruta, puede usar esquemas de validación ligeros basados en JSON, como [jsonschema](https://www.npmjs.com/package/jsonschema) o [joi](https://www.npmjs.com/package/joi)

**De lo contrario:** Tu generosidad y enfoque permisivo aumentan enormemente la superficie de ataque y ayuda al atacante a probar muchas entradas hasta que encuentren alguna combinación para bloquear la aplicación.

🔗 [**Leer más: Valida esquemas JSON entrantes**](./sections/security/validation.spanish.md)

<br/><br/>

## ![✔] 6.11. Admite las listas negras de JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Cuando se usan tokens web JSON (por ejemplo con [Passport.js](https://github.com/jaredhanson/passport)), de manera predeterminada, no existe un mecanismo para revocar el acceso de los tokens emitidos. Una vez que descubres alguna actividad maliciosa de los usuarios, no hay forma de evitar que accedan al sistema siempre que tengan un token válido. Soluciona esto implementando una lista negra de tokens no confiables que se validan en cada solicitud.

**De lo contrario:** Los tokens caducados o extraviados pueden ser utilizados maliciosamente por un tercero para acceder a una aplicación y hacerse pasar por el propietario del token.

🔗 [**Leer más: Bloquea JSON Web Tokens caducados**](./sections/security/expirejwt.spanish.md)

<br/><br/>

## ![✔] 6.12. Prevenir ataques de fuerza bruta contra la autorización

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Una técnica simple y poderosa es limitar los intentos de autorización utilizando dos métricas:

1. El primero es el número de intentos fallidos consecutivos por el mismo ID / nombre único de usuario y dirección IP.
2. El segundo es el número de intentos fallidos de una dirección IP durante un largo período de tiempo. Por ejemplo, bloquee una dirección IP si realiza 100 intentos fallidos en un día.

**De lo contrario:** Un atacante puede emitir intentos de contraseña automatizados ilimitados para obtener acceso a cuentas privilegiadas en una aplicación

🔗 [**Leer más: Limita tasa de login**](./sections/security/login-rate-limit.spanish.md)

<br/><br/>

## ![✔] 6.13. Ejecuta Node.js como usuario no root

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Hay un escenario común en el que Node.js se ejecuta como usuario root con permisos ilimitados. Por ejemplo, este es el comportamiento predeterminado en los contenedores Docker. Se recomienda crear un usuario no root y hornearlo en la imagen de Docker (ejemplos a continuación) o ejecutar el proceso en nombre de este usuario invocando el contenedor con la marca "-u username"

**De lo contrario:** Un atacante que logra ejecutar un script en el servidor obtiene poder ilimitado sobre la máquina local (por ejemplo, cambiar iptable y redirigir el tráfico a su servidor)

🔗 [**Leer más: Ejecuta Node.js como usuario no root**](./sections/security/non-root-user.spanish.md)

<br/><br/>

## ![✔] 6.14. Limita el tamaño de la carga útil utilizando un proxy inverso o un middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Cuanto más grande es la carga útil del cuerpo, más difícil es que su único hilo trabaje en su procesamiento. Esta es una oportunidad para que los atacantes pongan a los servidores de rodillas sin una gran cantidad de solicitudes (ataques DOS / DDOS). Mitiga esto limitando el tamaño del cuerpo de las solicitudes entrantes en el borde (por ejemplo, firewall, ELB) o configurando [express body parser](https://github.com/expressjs/body-parser) para aceptar solo cargas pequeñas

**De lo contrario:** Tu aplicación tendrá que lidiar con solicitudes grandes, incapaz de procesar el otro trabajo importante que tiene que realizar, lo que conlleva implicaciones de rendimiento y vulnerabilidad ante los ataques de DOS

🔗 [**Leer más: Limita tamaño de carga**](./sections/security/requestpayloadsizelimit.spanish.md)

<br/><br/>

## ![✔] 6.15. Evita las sentencias eval de JavaScript

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` es malo, ya que permite ejecutar código JavaScript personalizado durante el tiempo de ejecución. Esto no es solo un problema de rendimiento, sino también un problema de seguridad importante debido al código JavaScript malicioso que puede obtenerse de la entrada del usuario. Otra característica del lenguaje que debe evitarse es el constructor `new Function`. `setTimeout` y` setInterval` y nunca deberían pasar el código JavaScript dinámico tampoco.

**De lo contrario:** El código JavaScript malicioso encuentra una forma en el texto pasado a `eval` u otras funciones del lenguaje JavaScript de evaluación en tiempo real, y obtendrá acceso completo a los permisos de JavaScript en la página. Esta vulnerabilidad a menudo se manifiesta como un ataque XSS.

🔗 [**Leer más: Evita sentencias eval**](./sections/security/avoideval.spanish.md)

<br/><br/>

## ![✔] 6.16. Evita que el malvado de RegEx sobrecargue tu ejecución de subproceso único

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Las expresiones regulares, aunque son prácticas, representan una amenaza real para las aplicaciones de JavaScript en general, y para la plataforma Node.js en particular. Una entrada de usuario para que el texto coincida puede requerir una cantidad excepcional de ciclos de CPU para procesar. El procesamiento de RegEx puede ser ineficiente hasta el punto de que una sola solicitud que valida 10 palabras puede bloquear todo el bucle de eventos durante 6 segundos y activar la CPU a 🔥. Por esa razón, escoge paquetes de validación de terceros como [validator.js](https://github.com/chriso/validator.js) en lugar de escribir sus propios patrones Regex, o hacer uso de [safe-regex](https://github.com/substack/safe-regex) para detectar patrones de expresiones regulares vulnerables

**De lo contrario:** Las expresiones regulares mal escritas pueden ser susceptibles a los ataques DoS de Expresión regular que bloquearán el bucle de eventos por completo. Por ejemplo, el popular paquete `moment` fue encontrado vulnerable con el uso malicioso de RegEx en noviembre de 2017

🔗 [**Leer más: Evita RegEx malicioso**](./sections/security/regex.spanish.md)

<br/><br/>

## ![✔] 6.17. Evita cargar módulos usando una variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Evita requerir / importar otro archivo con una ruta que se proporcionó como parámetro debido a la preocupación de que podría haberse originado a partir de la entrada del usuario. Esta regla se puede extender para acceder a archivos en general (es decir, `fs.readFile ()`) u otro acceso a recursos confidenciales con variables dinámicas que se originan a partir de la entrada del usuario. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter puede atrapar tales patrones y advertirlo de manera temprana

**De lo contrario:** La entrada de usuario malintencionado podría encontrar su camino hacia un parámetro que se utiliza para requerir archivos manipulados, por ejemplo, un archivo cargado previamente en el sistema de archivos, o acceder a archivos del sistema ya existentes.

🔗 [**Leer más: Carga de módulos segura**](./sections/security/safemoduleloading.spanish.md)

<br/><br/>

## ![✔] 6.18. Ejecuta código inseguro en un sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Cuando se te asigne la tarea de ejecutar código externo que se proporciona en tiempo de ejecución (por ejemplo, un complemento), usa cualquier tipo de entorno de ejecución 'sandbox' que aísle y proteja el código principal contra el complemento. Esto se puede lograr mediante un proceso dedicado (por ejemplo, `cluster.fork ()`), entorno sin servidor o paquetes npm dedicados que actúan como un sandbox

**De lo contrario:** Un complemento puede atacar a través de una variedad infinita de opciones como bucles infinitos, sobrecarga de memoria y acceso a variables de entorno de procesos sensibles.

🔗 [**Leer más: Ejecuta código inseguro en un sandbox**](./sections/security/sandbox.spanish.md)

<br/><br/>

## ![✔] 6.19. Ten mucho cuidado al trabajar con procesos secundarios.

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Evita el uso de procesos secundarios cuando sea posible y valide y desinfecta la entrada para mitigar los ataques de inyección de shell si aún tienes que hacerlo. Usa `child_process.execFile` que, por definición, solo ejecutará un solo comando con un conjunto de atributos y no permitirá la expansión de parámetros de shell.

**De lo contrario:** El uso ingenuo de procesos secundarios podría provocar la ejecución remota de comandos o ataques de inyección de shell debido a la entrada maliciosa del usuario transmitida a un comando del sistema no desinfectado.

🔗 [**Leer más: Ten cuidado al trabajar con procesos secundarios**](./sections/security/childprocesses.spanish.md)

<br/><br/>

## ![✔] 6.20. Ocultar detalles de error de los clientes

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Un controlador de error express integrado oculta los detalles del error de forma predeterminada. Sin embargo, son grandes las posibilidades de que implemente su propia lógica de manejo de errores con objetos de error personalizados (considerado por muchos como una práctica recomendada). Si lo haces, asegúrate de no devolver todo el objeto Error al cliente, que podría contener algunos detalles confidenciales de la aplicación

**De lo contrario:** Los detalles confidenciales de la aplicación, como las rutas de archivos del servidor, los módulos de terceros en uso y otros flujos de trabajo internos de la aplicación que podrían ser explotados por un atacante, podrían filtrarse de la información encontrada en un seguimiento de la pila.

🔗 [**Leer más: Oculta detalles de error de los cliente**](./sections/security/hideerrors.spanish.md)

<br/><br/>

## ![✔] 6.21. Configura 2FA para npm o Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Cualquier paso en la cadena de desarrollo debe protegerse con MFA (autenticación multifactor), npm / Yarn es una buena oportunidad para los atacantes que pueden tener en sus manos la contraseña de algún desarrollador. Utilizando credenciales de desarrollador, los atacantes pueden inyectar código malicioso en bibliotecas que están ampliamente instaladas en proyectos y servicios. Tal vez incluso en la web si se publica en público. Habilitar la autenticación de 2 factores en npm deja casi cero posibilidades para que los atacantes alteren el código de su paquete.

**De lo contrario:** [¿Has oído hablar del desarrollador de eslint cuya contraseña fue secuestrada?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modificar la configuración del middleware de sesión

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Cada framework web y tecnología tiene sus debilidades conocidas: decirle a un atacante qué framework web utilizamos es de gran ayuda para ellos. El uso de la configuración predeterminada para middlewares de sesión puede exponer su aplicación a ataques de secuestro específicos de módulos y frameworks de manera similar al encabezado `X-Powered-By`. Intenta ocultar todo lo que identifique y revele tu stack tecnológico (por ejemplo, Node.js, express)

**De lo contrario:** Las cookies podrían enviarse a través de conexiones inseguras, y un atacante podría usar la identificación de sesión para identificar el framework subyacente de la aplicación web, así como las vulnerabilidades específicas del módulo

🔗 [**Leer más: Seguridad de Cookies y sesiones**](./sections/security/sessions.spanish.md)

<br/><br/>

## ![✔] 6.23. Evita los ataques de DOS estableciendo explícitamente cuándo debe fallar un proceso

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** El proceso de Node se bloqueará cuando no se manejen los errores. Muchas de las mejores prácticas incluso recomiendan salir a pesar de que se detectó un error y se manejó. Express, por ejemplo, se bloqueará en cualquier error asíncrono, a menos que ajuste las rutas con una cláusula catch. Esto abre un punto de ataque muy dulce para los atacantes que reconocen qué información hace que el proceso se bloquee y envían repetidamente la misma solicitud. No hay remedio instantáneo para esto, pero algunas técnicas pueden mitigar el dolor: alerta con severidad crítica cada vez que un proceso se bloquea debido a un error no controlado, valida la entrada y evita que el proceso se bloquee debido a una entrada inválida del usuario, envuelve todas las rutas con una captura y considera no bloquearse cuando se origine un error dentro de una solicitud (en oposición a lo que sucede globalmente)

**De lo contrario:** Esto es solo una suposición educada: dadas muchas aplicaciones de Node.js, si intentamos pasar un cuerpo JSON vacío a todas las solicitudes POST, un puñado de aplicaciones se bloqueará. En ese momento, podemos repetir el envío de la misma solicitud para eliminar las aplicaciones con facilidad

<br/><br/>

## ![✔] 6.24. Prevenir redireccionamientos inseguros

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Los redireccionamientos que no validan la entrada del usuario pueden permitir a los atacantes lanzar estafas de phishing, robar credenciales de usuario y realizar otras acciones maliciosas.

**De lo contrario:** Si un atacante descubre que no está validando entradas externas proporcionadas por el usuario, puede aprovechar esta vulnerabilidad al publicar enlaces especialmente diseñados en foros, redes sociales y otros lugares públicos para que los usuarios hagan clic en él.

🔗 [**Leer más: Evita redireccionamientos inseguros**](./sections/security/saferedirects.spanish.md)

<br/><br/>

## ![✔] 6.25. Evita publicar secretos en el registro npm

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Se deben tomar precauciones para evitar el riesgo de publicar accidentalmente secretos en registros públicos de npm. Se puede usar un archivo `.npmignore` para poner en una lista negra archivos o carpetas específicos, o el arreglo `files` en `package.json` puede actuar como una lista blanca.

**De lo contrario:** Las claves de API, las contraseñas u otros secretos de su proyecto están abiertos a ser abusados por cualquier persona que los encuentre, lo que puede provocar pérdidas financieras, suplantación y otros riesgos.

🔗 [**Leer más: Evita publicar secretos**](./sections/security/avoid_publishing_secrets.spanish.md)
<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `7. Borrador: Mejores prácticas de rendimiento`

## Nuestros colaboradores están trabajando en esta sección. [¿Te gustaría unirte?](https://github.com/i0natan/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. No bloquees el bucle de eventos

**TL;DR:** Evita las tareas intensivas de la CPU, ya que bloquearán el bucle de eventos en su mayoría de un solo subproceso y descargalas en un subproceso dedicado, proceso o incluso una tecnología diferente según el contexto.

**De lo contrario:** A medida que se bloquea el bucle de eventos, Node.js no podrá manejar otra solicitud, lo que provocará demoras para los usuarios concurrentes. **3000 usuarios están esperando una respuesta, el contenido está listo para ser servido, pero una sola solicitud impide que el servidor envíe los resultados**

🔗 [**Leer más: No bloquees el bucle de eventos**](./sections/performance/block-loop.spanish.md)

<br /><br /><br />


## ![✔] 7.2. Escoge los métodos JS nativos sobre las utilidades de usuario como Lodash

**TL;DR:** A menudo es más penalizador usar bibliotecas de utilidades como `lodash` y ` underscore` sobre los métodos nativos, ya que conduce a dependencias innecesarias y un rendimiento más lento.
Ten en cuenta que con la introducción del nuevo motor V8 junto con los nuevos estándares ES, los métodos nativos se mejoraron de tal manera que ahora es aproximadamente un 50% más eficiente que las bibliotecas de servicios públicos.

**De lo contrario:** Tendrás que mantener proyectos de menor rendimiento en los que simplemente podría haber usado lo que **ya estaba** disponible o haber tratado algunas líneas más a cambio de algunos archivos más.

🔗 [**Leer más: Nativo sobre implementaciones externas**](./sections/performance/nativeoverutil.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `8. Mejores prácticas de Docker`

🏅 Muchas gracias a [Bret Fisher](https://github.com/BretFisher) de quien hemos aprendido muchas de las siguientes prácticas

<br/><br/>

## ![✔] 8.1. Utilice compilaciones de múltiples etapas para obtener imágenes de Docker más sencillas y seguras

**TL;DR:** Utilice la compilación de múltiples etapas para copiar únicamente los artefactos de producción necesarios. Un montón de dependencias y archivos de tiempo de compilación no son necesarios para ejecutar tu aplicación. Haciendo uso de compilaciones de múltiples etapas, estos recursos pueden ser utilizados durante la compilación mientras que el entorno de tiempo de ejecución sólo contiene lo necesario. Las compilaciones de múltiples etapas representan una forma sencilla de deshacerse del sobrepeso y las amenazas de seguridad.

**De lo contrario:** Las imágenes más grandes tomarán más tiempo en compilar y desplegarse, las herramientas de solo compilación pueden contener vulnerabilidades y los secretos que solo están destinados a la fase de compilación pueden ser filtrados.

### Dockerfile de ejemplo para compilaciones de múltiples etapas

```dockerfile
FROM node:14.4.0 AS build

COPY . .
RUN npm ci && npm run build

FROM node:slim-14.4.0

USER node
EXPOSE 8080

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./
RUN npm ci --production

CMD [ "node", "dist/app.js" ]
```

🔗 [**Leer más: Utilice compilaciones múltiples**](./sections/docker/multi_stage_builds.spanish.md)

<br /><br /><br />

## ![✔] 8.2. Arranque usando el comando `node`, evita `npm start`

**TL;DR:** usa `CMD ['node', 'server.js']` para iniciar su aplicación, evita usar los scripts de npm, los cuales no pasan señales del sistema operativo (OS) al código. Para prevenir estos problemas en los procesos secundarios, manejo de señales y apagado simple sin tener procesos zombie.

**De lo contrario** Cuando no se pasan señales, su código nunca será notificado cuando se detenga el proceso, Sin esto, Se perderá la oportunidad de cerrar de manera apropiada, posiblemente perdiendo peticiones o datos actuales.

🔗 [**Leer más: Arranque usando node, evite npm start**](./sections/docker/bootstrap-using-node.spanish.md)


<br><br><br>

## ![✔] 8.3. Permite a Docker manejar replicación y tiempo de ejecución

**TL;DR:** Cuando se usa un manejador de tiempo de ejecución de Docker (Por ejemplo, Kubernetes), invoque el proceso de Node.js directamente, sin manejadores de proceso intermedios o código personalizado que replica el proceso (Por ejemplo, PM2, Cluster Module). La plataforma de tiempo de ejecución tiene la mayor cantidad de datos y visibilidad al hacer la decisión de posicionamiento: Sabe mejor que nadie cuantos procesos son necesarios, como distribuirlos y que hacer en caso de errores.

**De lo contrario** El contenedor sigue cayendo debido a la escasez de recursos se estará reiniciando de manera indefinida por el manejador de procesos. Si Kubernetes supiera esto, lo podría redirreccionar a una instancia diferente.

🔗 [**Leer más: Permita al manejador Docker reiniciar y replicar procesos**](./sections/docker/restart-and-replicate-processes.spanish.md)

<br><br><br>

## ![✔] 8.4. Utilize .dockerignore para prevenir fuga de secretos

**TL;DR:** Incluye un archivo `.dockerignore` que filtra todos los archivos con secretos comúnes y artefactos de desarrollo. Al hacer esto. Puede evitar que sus secretos salgan a la luz. Ademas el tiempo de compilación se va a reducir de manera significante. También asegúrese de no copiar todos los archivos recursivamente, mejor selecciones cuales deben ser copiados a docker de manera explícita.

**De lo contrario** Archivos comúnes de secretos como `.env`, `.aws`, y `.npmrc` serán compartidos con cualquiera que tenga acceso a la imágen (Por ejemplo un repositorio Docker).

🔗 [**Leer más: Utiliza .dockerignore**](./sections/docker/docker-ignore.spanish-md)

<br><br><br>

## ![✔] 8.5. Limpie dependencias antes de ir a producción

**TL;DR:** Aunque algunas dependencias de desarrollo son necesarios durante los ciclos de compilación y prueba, eventualmente la imágen que será enviada a producción debe estar los mas limpia posible de dependencias de desarrollador. Haciendo esto garantiza que solo el código necesario es cargado y la cantidad de ataques potenciales (Por ejemplo. attack surface (ataque de superficie)) sea mínimo. Cuando se use compilación multi-pasos (Vea punto dedicado) esto puede ser logrado al instalar todas las dependencias primero y finalmente ejecutar `npm ci --production`.

**De lo contrario** Muchas brechas de seguridad conocidas fueron encontradas dentro de paquetes de desarrollo (Por ejemplo. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes)).

🔗 [**Leer más: Remueva dependencias de desarrollo**](./sections/docker/install-for-production.spanish.md)

<br><br><br>

## ![✔] 8.6. Apague de manera inteligente y gentil

**TL;DR:** Maneje el evento de proceso SIGTERM y limpie todas las conexiones existentes y recursos. Esto debería hacerse mientra se responden a peticiones activas. En tiempos de ejecución de Docker, apagar contenedores no es un evento raro, sino un evento frecuente que es parte de una rutina de trabajo. Hacer esto requiere un código bien pensado para manejar muchas partes separadas: El balance de carga, mantener las conexiones, el servidor HTTP y otros recursos.

**De lo contrario** Apagando de manera inmediata significa no responder a cientos de usuarios decepcionados.

🔗 [**Leer más: Apagado gentil**](./sections/docker/graceful-shutdown.spanish.md)

<br><br><br>

## ![✔] 8.7. Asigne límites de memoria utilizando Docker y v8

**TL;DR:** Siempre configure un límite de memoria utilizando Docker y las marcas de tiempo de ejecución de JavaScript. El límite de Docker es necesario para hacer decisiones de posicionamiento bien pensadas, la marca --v8 max-old-space es necesaria para arrancar el GC a tiempo y prevenir desperdicio de recursos. En la práctica, asignale a la marca max-old-space de v8 un tamaño un poco menor al límite del contenedor.

**De lo contrario** La definición de Docker es necesaria para realizar decisiones bien pensadas de escalación y prevenir la escasez para otros procesos. Si tampoco defines los límites de v8, no va a utilizar completamente los recursos de contenedor; Sin instrucciones explícitas, se colapsará cuando se use ~50-60% de los recursos del host

🔗 [**Leer más: Asigne límites de memoria en Docker**](./sections/docker/memory-limit.spanish.md)

<br><br><br>

## ![✔] 8.8. Planee caché eficientemente

**TL;DR:** Re-compilar toda la imágen de Docker mediante caché puede ser casi instantáneo si se hace correctamente. Las instrucciones que se actualizan con menor frecuencia deben estar hasta arriba en su Dockerfile y las que cambian constantemente (Como el código de la aplicación) deberían estar hasta abajo.

**De lo contrario** La compilación de Docker va a ser muy larga y consumir demasiados recursos, incluso al hacer cambios menores.

🔗 [**Leer más: Maneje el caché para reducir tiempos de compilación**](./sections/docker/use-cache-for-shorter-build-time.spanish.md)

<br><br><br>

## ![✔] 8.9. Utilize imágen de referencia explícita, evite la etiqueta `latest`

**TL;DR:** Especifíque la etiqueta de versión de la imágen de manera explícita, nunca utilice `latest`. Desarrolladores piensan que al especificar la etiqueta `latest` recibirán la imágen mas reciente del repositorio, Sin embargo, este no es el caso, Usando una explícita garantiza que cada instancia del servicio esta corriendo exactamente el mismo código.

Como extra, refiriéndose a una etiqueta de imágen significa que la imágen base esta sujeta a cambios, por ello las etiquetas de imágen no pueden ser confiables para una instalación determinista. En su lugar, si se espera un instalación determinista una SHA256 puede ser usada como referencia a la imágen exacta.

**De lo contrario** Una nueva versión de la imágen base puede ser desplegada a producción con cambios severos, causando comportamiento anormal.

🔗 [**Leer más: Entender las etiquetas de imágen y utilizar las etiqueta "lates" con precaución**](./sections/docker/image-tags.spanish.md)

<br><br><br>

## ![✔] 8.10. Utilize imágenes base pequeñas

**TL;DR:** Imágenes grandes conducen a una mayor exposición de vulnerabilidades y a un aumento del uso de recursos. Usando imágenes mas apoyadas como Slim y Alpine Linux reduce este problema.

**De lo contrario** Compilar, enviar y recibir cambios de imágenes va a tomar mas tiempo, terceros pueden utilizar ataques de vectores desconocidos y consumir mar recursos.

🔗 [**Leer más: Utilice imágenes pequeñas**](./sections/docker/image-tags.spanish.md)

<br><br><br>

## ![✔] 8.11. Limpie secretos en tiempo de compilación, evite secretos en argumentos

**TL;DR:** Evite la fuga de secretos en el entorno compilación de Docker. Una imágen de Docker normalmente es compartida por multiples entornos como CI y un registro que no está tan limpio como producción. Un ejemplo común is un token npm que suele ser pasado a dockerfile como argumento. Este token permanece en la imágen después de ser utilizada y permite al atacante acceso indefinido a un registro npm privado. Esto puede ser evitado al copiar un archivo secreto como `.npmrc` y después removiéndolo usando la compilación multi-pasos (Cuidado, la historia de compilación debe ser borrada también) o usando el build-kit de Docker que no deja ningún rastro.

**De lo contrario** Cualquiera con acceso al CI y al registro Docker también tendrá acceso a unos preciosos secretos de la empresa como regalo.

🔗 [**Leer más: Limpia tus secretos de tiempo de compilación**](./sections/docker/avoid-build-time-secrets.spanish.md)

<br><br><br>

## ![✔] 8.12. Escanea imágenes para vulnerabilidades multi-capa

**TL;DR:** Además de revisar vulnerabilidades de las dependencias, escanee la imágen final que será enviada a producción, Los escáneres de imágen de Docker revisan las dependencias del código, pero también los binarios del sistema operativo (OS binaries). Este escaneo de seguridad de punto a punto abarca mas espacio y verifica que nadie haya implantado cosas maliciosas durante la compilación. Consecuentemente, se recomienda hacer esto como último paso antes del despliegue. Hay una buena cantidad de escáneres gratuitos y de paga que también proporcionan extensiones CI/CD.

**De lo contrario** Su código puede estar completamente libre de vulnerabilidades. Pero puede llegar a ser hackeado debido a una version vulnerable de los binarios a nivel SO (Por ejemplo. OpenSSL, TarBall), los cuales son usados comúnmente por las aplicaciones.

🔗 [**Leer más: Escanea la imágen completa antes de producción**](./sections/docker/scan-images.spanish.md)

<br><br><br>

## ![✔] 8.13. Limpie el caché de NODE_MODULE

**TL;DR:** Después de instalar dependencias en un contenedor remueva el caché local. No tiene sentido duplicar las dependencias para instalaciones mas rápidas futuras, debido a que no habrá instalaciones futuras. Una imágen de Docker is inmutable. Utilizando una sola línea de código decenas de MB (normalmente ~10-50% del tamaño de la imágen) son podados.

**De lo contrario** La imágen que será enviada a producción pesara un 30% extra debido a archivos que no serán utilizados.

🔗 [**Leer más: Limpie el caché de NODE_MODULE**](./sections/docker/clean-cache.spanish.md)

<br><br><br>

## ![✔] 8.14. Prácticas de Docker generales

**TL;DR:** Esta es una colección de los consejos de Docker que no están relacionados directamente con Docker: La implementación de Docker no es muy diferente a cualquier otro lenguaje, Da click en leer más para mas información.

🔗 [**Leer más: Prácticas de Docker generales](./sections/docker/generic-tips.spanish.md)

<br><br><br>

## ![✔] 8.15. utilize Lint en su Dockerfile

**TL;DR:** Utilizar una herramienta de lint en su Dockerfile es un paso importante para identificar problemas en su Dockerfile que difieran de las mejores prácticas. Al escanear por fallas potenciales usando un linter especializado de a Docker, se pueden identificar fácilmente mejoras a la seguridad y rendimiento, salvando incontables horas de tiempo en problemas de seguridad en código de producción.

**De lo contrario** Dejar por error a Root como el usuario de producción en el Dockerfile, y también usar una imágen de un repositorio de una fuente desconocida. Esto puede ser fácilmente evitado usando un linter.

🔗 [**Leer más: Utilize Lint en su Dockerfile**](./sections/docker/lint-dockerfile.spanish.md)

<br/><br /><br />

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# Metas

Para mantener esta guía y tenerla actualizada, estamos constantemente modernizando y mejorando las pautas y las mejores prácticas con la ayuda de la comunidad. Puede seguir nuestras [metas](https://github.com/goldbergyoni/nodebestpractices/milestones) y unirte a los grupos que trabajan si es que quieres contribuir a este proyecto.

<br/>

## Traducciones

Todas las traducciones están contribuidas por la comunidad. Estaremos encantados de obtener ayuda con traducciones completas, en curso o nuevas.

### Traducciones Completadas

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Cortesía de [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Cortesía de [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Cortesía de [Alex Ivanov](https://github.com/contributorpw)
- ![PL](/assets/flags/PL.png) [Polish](./README.polish.md) - Cortesía de [Michal Biesiada](https://github.com/mbiesiad)
- ![JA](/assets/flags/JA.png) [Japanese](./README.japanese.md) - Cortesía de [Yuki Ota](https://github.com/YukiOta), [Yuta Azumi](https://github.com/YA21)
- ![EU](/assets/flags/EU.png) [Basque](README.basque.md) - Cortesía de [Ane Diaz de Tuesta](https://github.com/anediaz) & Joxefe Diaz de Tuesta

### Traducciones en curso

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebreo ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Cortesía de [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/94))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turco ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/139))

<br/><br/>

## Comité Directivo

Conozca a los miembros del comité directivo: las personas que trabajan juntas para brindar orientación y dirección al proyecto. Además, cada miembro del comité lidera un proyecto seguido bajo nuestros [proyectos Github](https://github.com/i0natan/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Consultor independiente de Node.js que trabaja con clientes en EE. UU., Europa e Israel en la construcción de aplicaciones Node.js a gran escala. Muchas de las mejores prácticas anteriores se publicaron por primera vez en [goldbergyoni.com](https://goldbergyoni.com). Comuníquese con Yoni a través de [@goldbergyoni](https://github.com/goldbergyoni) o [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 ingeniero web full-stack, entusiasta de Node.js y GraphQL

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Desarrollador Full Stack e ingeniero de confiabilidad de sitio con sede en Nueva Zelanda, interesado en la seguridad de aplicaciones web y en la arquitectura y creación de aplicaciones Node.js que funcionan a escala global

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png">

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Desarrollador full-stack independiente, con una pizca de Ops y automatización.

### Comité directivo Emérito

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Especialista en JavaScript y su ecosistema: React, Node.js, MongoDB, prácticamente cualquier cosa que implique el uso de JavaScript / JSON en cualquier capa del sistema: la creación de productos utilizando la plataforma web para las marcas más reconocidas del mundo. Miembro individual de la Fundación Node.js, colaborando en la Iniciativa de rediseño del sitio web del Comité de la Comunidad.

<br/>

## Colaboradores

Gracias a todos nuestros colaboradores! 🙏

Nuestros colaboradores son miembros que contribuyen regularmente al repositorio, sugiriendo nuevas mejores prácticas, problemas de evaluación, revisión de solicitudes de extracción y más. Si está interesado en ayudarnos a guiar a miles de personas para crear mejores aplicaciones de Node.js, lea nuestras [pautas para contribuyentes](/.operations/CONTRIBUTING.spanish.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                                   [Ido Richter (Fundador)](https://github.com/idori)                                    |                                        [Keith Holliday](https://github.com/TheHollidayInn)                                         |

### Colaboradores anteriores

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                        [Refael Ackermann](https://github.com/refack)                                        |

<br/>

## Agradecimientos

Agradecemos cualquier contribución, desde una simple palabra hasta una nueva práctica en nuestra guía. Mira nuestros colaboradores y [documentación para contribuir aquí!](CONTRIBUTORS.md)

## Contribuidores ✨

¡Gracias a estas maravillosas personas que han contribuido a este repositorio!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4" width="100px;" alt=""/><br /><sub><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4" width="100px;" alt=""/><br /><sub><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
    <td align="center"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4" width="100px;" alt=""/><br /><sub><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
    <td align="center"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
    <td align="center"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4" width="100px;" alt=""/><br /><sub><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
    <td align="center"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4" width="100px;" alt=""/><br /><sub><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4" width="100px;" alt=""/><br /><sub><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4" width="100px;" alt=""/><br /><sub><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4" width="100px;" alt=""/><br /><sub><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
    <td align="center"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4" width="100px;" alt=""/><br /><sub><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
    <td align="center"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4" width="100px;" alt=""/><br /><sub><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4" width="100px;" alt=""/><br /><sub><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4" width="100px;" alt=""/><br /><sub><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4" width="100px;" alt=""/><br /><sub><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4" width="100px;" alt=""/><br /><sub><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4" width="100px;" alt=""/><br /><sub><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
    <td align="center"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4" width="100px;" alt=""/><br /><sub><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4" width="100px;" alt=""/><br /><sub><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
    <td align="center"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4" width="100px;" alt=""/><br /><sub><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4" width="100px;" alt=""/><br /><sub><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4" width="100px;" alt=""/><br /><sub><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4" width="100px;" alt=""/><br /><sub><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4" width="100px;" alt=""/><br /><sub><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
    <td align="center"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4" width="100px;" alt=""/><br /><sub><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
    <td align="center"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4" width="100px;" alt=""/><br /><sub><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
    <td align="center"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4" width="100px;" alt=""/><br /><sub><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
    <td align="center"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4" width="100px;" alt=""/><br /><sub><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4" width="100px;" alt=""/><br /><sub><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4" width="100px;" alt=""/><br /><sub><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4" width="100px;" alt=""/><br /><sub><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4" width="100px;" alt=""/><br /><sub><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
    <td align="center"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4" width="100px;" alt=""/><br /><sub><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4" width="100px;" alt=""/><br /><sub><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4" width="100px;" alt=""/><br /><sub><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4" width="100px;" alt=""/><br /><sub><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4" width="100px;" alt=""/><br /><sub><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
    <td align="center"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4" width="100px;" alt=""/><br /><sub><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4" width="100px;" alt=""/><br /><sub><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
    <td align="center"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4" width="100px;" alt=""/><br /><sub><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4" width="100px;" alt=""/><br /><sub><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
    <td align="center"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4" width="100px;" alt=""/><br /><sub><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4" width="100px;" alt=""/><br /><sub><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4" width="100px;" alt=""/><br /><sub><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4" width="100px;" alt=""/><br /><sub><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
    <td align="center"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4" width="100px;" alt=""/><br /><sub><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4" width="100px;" alt=""/><br /><sub><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4" width="100px;" alt=""/><br /><sub><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4" width="100px;" alt=""/><br /><sub><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4" width="100px;" alt=""/><br /><sub><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4" width="100px;" alt=""/><br /><sub><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
    <td align="center"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4" width="100px;" alt=""/><br /><sub><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
    <td align="center"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4" width="100px;" alt=""/><br /><sub><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4" width="100px;" alt=""/><br /><sub><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4" width="100px;" alt=""/><br /><sub><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4" width="100px;" alt=""/><br /><sub><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4" width="100px;" alt=""/><br /><sub><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4" width="100px;" alt=""/><br /><sub><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4" width="100px;" alt=""/><br /><sub><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4" width="100px;" alt=""/><br /><sub><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4" width="100px;" alt=""/><br /><sub><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
    <td align="center"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4" width="100px;" alt=""/><br /><sub><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
    <td align="center"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4" width="100px;" alt=""/><br /><sub><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4" width="100px;" alt=""/><br /><sub><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4" width="100px;" alt=""/><br /><sub><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
    <td align="center"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4" width="100px;" alt=""/><br /><sub><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
    <td align="center"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4" width="100px;" alt=""/><br /><sub><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4" width="100px;" alt=""/><br /><sub><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4" width="100px;" alt=""/><br /><sub><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4" width="100px;" alt=""/><br /><sub><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
    <td align="center"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4" width="100px;" alt=""/><br /><sub><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
    <td align="center"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4" width="100px;" alt=""/><br /><sub><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4" width="100px;" alt=""/><br /><sub><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4" width="100px;" alt=""/><br /><sub><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4" width="100px;" alt=""/><br /><sub><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
    <td align="center"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;" alt=""/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4" width="100px;" alt=""/><br /><sub><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4" width="100px;" alt=""/><br /><sub><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4" width="100px;" alt=""/><br /><sub><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4" width="100px;" alt=""/><br /><sub><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4" width="100px;" alt=""/><br /><sub><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4" width="100px;" alt=""/><br /><sub><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
    <td align="center"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4" width="100px;" alt=""/><br /><sub><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4" width="100px;" alt=""/><br /><sub><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4" width="100px;" alt=""/><br /><sub><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4" width="100px;" alt=""/><br /><sub><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
    <td align="center"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4" width="100px;" alt=""/><br /><sub><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
    <td align="center"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4" width="100px;" alt=""/><br /><sub><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4" width="100px;" alt=""/><br /><sub><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4" width="100px;" alt=""/><br /><sub><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4" width="100px;" alt=""/><br /><sub><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4" width="100px;" alt=""/><br /><sub><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4" width="100px;" alt=""/><br /><sub><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4" width="100px;" alt=""/><br /><sub><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
    <td align="center"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4" width="100px;" alt=""/><br /><sub><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4" width="100px;" alt=""/><br /><sub><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
    <td align="center"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4" width="100px;" alt=""/><br /><sub><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4" width="100px;" alt=""/><br /><sub><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4" width="100px;" alt=""/><br /><sub><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4" width="100px;" alt=""/><br /><sub><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
    <td align="center"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4" width="100px;" alt=""/><br /><sub><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
    <td align="center"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4" width="100px;" alt=""/><br /><sub><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4" width="100px;" alt=""/><br /><sub><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4" width="100px;" alt=""/><br /><sub><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4" width="100px;" alt=""/><br /><sub><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4" width="100px;" alt=""/><br /><sub><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4" width="100px;" alt=""/><br /><sub><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4" width="100px;" alt=""/><br /><sub><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4" width="100px;" alt=""/><br /><sub><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
    <td align="center"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4" width="100px;" alt=""/><br /><sub><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
    <td align="center"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4" width="100px;" alt=""/><br /><sub><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4" width="100px;" alt=""/><br /><sub><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4" width="100px;" alt=""/><br /><sub><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4" width="100px;" alt=""/><br /><sub><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/13luismb"><img src="https://avatars3.githubusercontent.com/u/32210483?v=4" width="100px;" alt=""/><br /><sub><b>Luis Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
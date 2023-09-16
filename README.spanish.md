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

&emsp;&emsp;[1.1. Estructura tu solución en componentes `#strategic` `#updated`](#-11-estructura-tu-solución-en-componentes-de-negocio)</br>
&emsp;&emsp;[1.2. Pon tus componentes en capas, mantén la capa web dentro de sus límites `#strategic` `#updated`](#-12-pon-tus-componentes-en-capas-mantén-la-capa-web-dentro-de-sus-límites)</br>
&emsp;&emsp;[1.3. Engloba utilidades comunes como paquetes, considera publicarlos](#-13-engloba-utilidades-comunes-como-paquetes-considera-publicarlos)</br>
&emsp;&emsp;[1.4 Usa una configuración consciente del entorno,segura y jerárquica `#updated`](#-14-usa-una-configuración-consciente-del-entornosegura-y-jerárquica)</br>
&emsp;&emsp;[1.5 Considera todas las consecuencias al elegir el framwork principal `#new`](#-15-considera-todas-las-consecuencias-al-elegir-el-framwork-principal)</br>
&emsp;&emsp;[1.6 Utiliza TypeScript con moderación y consideración `#new`](#-16-utiliza-typescript-con-moderación-y-consideración)</br>

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

<details>
  <summary>
    <a href="#3-prácticas-de-estilo-de-código">3. Prácticas de estilo de código (13)</a>
  </summary>

&emsp;&emsp;[3.1 Utiliza ESLint `#strategic`](#-31-utiliza-eslint)</br>
&emsp;&emsp;[3.2 Utiliza las extensiones de eslint para para Node.js `#updated`](#-32-utiliza-las-extensiones-de-eslint-para-para-nodejs)</br>
&emsp;&emsp;[3.3 Inicia las llaves de un bloque de código en la misma línea](#-33-inicia-las-llaves-de-un-bloque-de-código-en-la-misma-línea)</br>
&emsp;&emsp;[3.4 Separa tus sentencias correctamente](#-34-Separa tus sentencias correctamente)</br>
&emsp;&emsp;[3.5 Nombra a tus funciones](#-35-nombra-a-tus-funciones)</br>
&emsp;&emsp;[3.6 Usa convenciones de nombre para variables, constantes, funciones y clases](#-36-usa-convenciones-de-nombre-para-variables-constantes-funciones-y-clases)</br>
&emsp;&emsp;[3.7 Prefiere const antes que let. No uses var](#-37-prefiere-const-antes-que-let-no-uses-var)</br>
&emsp;&emsp;[3.8 Importa los módulos primero, no dentro de funciones](#-38-importa-los-módulos-primero-no-dentro-de-funciones)</br>
&emsp;&emsp;[3.9 Establece un punto de entrada explícito a un módulo/carpeta `#updated`](#-39-establece-un-punto-de-entrada-explícito-a-un-módulocarpeta)</br>
&emsp;&emsp;[3.10 Usa el operador ===](#-310-usa el-operador-)</br>
&emsp;&emsp;[3.11 Usa Async Await, evita los callbacks `#strategic`](#-311-usa-async-await-evita-los-callbacks)</br>
&emsp;&emsp;[3.12 Usa expresiones de función flecha (=>)](#-312-usa-expresiones-de-funcion-flecha-)</br>
&emsp;&emsp;[3.13 Evita efectos fuera de las funciones `#new`](#-313-evita-efectos-fuera-de-las-funciones)</br>

</details>

<details>
  <summary>
    <a href="#4-pruebas-y-prácticas-generales-de-calidad">4. Prácticas de prueba y calidad en general (13)</a>
  </summary>

&emsp;&emsp;[4.1 Por lo menos, escribe las pruebas de la API (componente) `#strategic`](#-41-por-lo-menos,-escribe-las-pruebas-de-la-api-)</br>
&emsp;&emsp;[4.2 Incluye 3 partes en cada nombre de prueba `#new`](#-42-incluye-3-partes-en-cada-nombre-de-prueba)</br>
&emsp;&emsp;[4.3 Estructura las pruebas utilizando el patrón AAA `#strategic`](#-43-estructura-las-pruebas-utilizando-el-patrón-aaa)</br>
&emsp;&emsp;[4.4 Asegurate que la versión de Node esté unificada `#new`](#-44-asegurate-que-la-versión-de-node-esté-unificada)</br>
&emsp;&emsp;[4.5 Evita estados de prueba (fixtures) y semillas globales, agrega datos por prueba `#strategic`](#-45-evita-estados-de-prueba-fixtures-y-semillas-globales-agrega-datos-por-prueba)</br>
&emsp;&emsp;[4.6 Etiqueta tus pruebas `#advanced`](#-4etiqueta-tus-pruebas)</br>
&emsp;&emsp;[4.7 Verifica la cobertura de tus pruebas, ayuda a identificar patrones de prueba incorrectos](#-47-verifica-la-cobertura-de-tus-pruebas-ayuda-a-identificar-patrones-de-prueba-incorrectos)</br>
&emsp;&emsp;[4.8 Usa un ambiente similar al de producción para pruebas e2e](#-48-usa-un-ambiente-similar-al-de-producción-para-pruebas-e2e)</br>
&emsp;&emsp;[4.9 Refactoriza regularmente utilizando herramientas de análisis estático de código](#-49-refactor-regularly-using-static-analysis-tools)</br>
&emsp;&emsp;[4.10 Simula las respuestas de servicios HTTP externos #advanced `#new` `#advanced`](#-410-simula-las-respuestas-de-servicios-http-externos)</br>
&emsp;&emsp;[4.11 Prueba tus middlewares por separado](#-411-prueba-tus-middlewares-por-separado)</br>
&emsp;&emsp;[4.12 Especifica un puerto en producción, aleatorizalo en las pruebas `#new`](#-412-especifica-un-puerto-en-producción-aleatorizalo-en-las-pruebas)</br>
&emsp;&emsp;[4.13 Prueba los cinco posibles resultados #strategic `#new`](#-413-prueba-los-cinco-posibles-resultados)</br>

</details>

<details>
  <summary>
    <a href="#5-prácticas-de-puesta-en-producción">5. Prácticas de puesta en producción (19)</a>
  </summary>

&emsp;&emsp;[5.1. Monitoreo `#strategic`](#-51-monitoreo)</br>
&emsp;&emsp;[5.2. Aumenta la observabilidad utilizando logging inteligente `#strategic`](#-52-aumenta-la-observabilidad-utilizando-logging-inteligente)</br>
&emsp;&emsp;[5.3. Delega todo lo posible (por ejemplo, gzip, SSL) a un proxy inverso `#strategic`](#-53-delega-todo-lo-posible-por-ejemplo-gzip-ssl-a-un-proxy-inverso)</br>
&emsp;&emsp;[5.4. Bloquea dependencias](#-54-bloquea-dependencias)</br>
&emsp;&emsp;[5.5. Proteje la disponibilidad del proceso utilizando la herramienta adecuada](#-55-proteje-la-disponibilidad-del-proceso-utilizando-la-herramienta-adecuada)</br>
&emsp;&emsp;[5.6. Utiliza todos los núcleos de la CPU](#-56-utiliza-todos-los-núcleos-de-la-cpu)</br>
&emsp;&emsp;[5.7. Crea un "endpoint de mantenimiento"](#-57-crea-un-endpoint-de-mantenimiento)</br>
&emsp;&emsp;[5.8. Descubre lo desconocido utilizando productos de APM `#advanced` `#updated`](#-58-descubre-lo-desconocido-utilizando-productos-de-apm)</br>
&emsp;&emsp;[5.9. Haz tu código listo para producción](#-59-haz-tu-código-listo-para-producción)</br>
&emsp;&emsp;[5.10. Mide y protege el uso de la memoria `#advanced`](#-510-mide-y-protege-el-uso-de-la-memoria)</br>
&emsp;&emsp;[5.11. Saca tus recursos frontend de Node](#-511-saca-tus-recursos-frontend-de-node)</br>
&emsp;&emsp;[5.12. Esfuerzate por ser stateless `#strategic`](#-512-esfuerzate-por-ser-stateless)</br>
&emsp;&emsp;[5.13. Usa herramientas que detecten automáticamente vulnerabilidades](#-513-usa-herramientas-que-detecten-automáticamente-vulnerabilidades)</br>
&emsp;&emsp;[5.14. Asigna un id de transacción a cada registro del log `#advanced`](#-514-asigna-un-id-de-transacción-a-cada-registro-del-log)</br>
&emsp;&emsp;[5.15. Establece `NODE_ENV=production`](#-515-establece-node_envproduction)</br>
&emsp;&emsp;[5.16. Diseña despliegues automatizados, atómicos y sin tiempo de inactividad `#advanced`](#-516-diseña-despliegues-automatizados-atómicos-y-sin-tiempo-de-inactividad)</br>
&emsp;&emsp;[5.17. Usa una versión LTS de Node.js](#-517-usa-una-version-lts-de-nodejs)</br>
&emsp;&emsp;[5.18. Loguea hacia stdout, evita especificar un destino de log dentro de la aplicación `#updated`](#-518-loguea-hacia-stdout-evita-especificar-un-destino-de-log-dentro-de-la-aplicación)</br>
&emsp;&emsp;[5.19. Instala tus paquetes con `npm ci`` `#new`](#-519-instala-tus-paquetess-con-npm-ci)</br>

</details>

<details>
  <summary>
    <a href="#6-mejores-prácticas-de-seguridad">6. Prácticas de seguridad (25)</a>
  </summary>

&emsp;&emsp;[6.1. Adopta las reglas de seguridad del linter](#-61-adopta-las-reglas-de-seguridad-del-linter)</br>
&emsp;&emsp;[6.2. Limita las solicitudes concurrentes utilizando un middleware](#-62-limita-las-solicitudes-concurrentes-utilizando-un-middleware)</br>
&emsp;&emsp;[6.3. Quita los secretos de los archivos de configuración o utiliza paquetes para cifrarlos `#strategic`](#-63-quita-los-secretos-de-los-archivos-de-configuración-o-utiliza-paquetes-para-cifrarlos)</br>
&emsp;&emsp;[6.4. Evita vulnerabilidades de inyección de consultas con bibliotecas ORM / ODM `#strategic`](#-64-evita-vulnerabilidades-de-inyección-de-consultas-con-bibliotecas-orm--odm)</br>
&emsp;&emsp;[6.5. Colección de mejores prácticas de seguridad genéricas](#-65-colección-de-mejores-prácticas-de-seguridad-genéricas)</br>
&emsp;&emsp;[6.6. Ajusta los encabezados de respuesta HTTP para mayor seguridad](#-66-ajusta-los-encabezados-de-respuesta-http-para-mayor-seguridad)</br>
&emsp;&emsp;[6.7. Inspecciona constante y automáticamente en busca de dependencias vulnerables `#strategic`](#-67-inspecciona-constante-y-automáticamente-en-busca-de-dependencias-vulnerables)</br>
&emsp;&emsp;[6.8. Protege las contraseñas/secretos de sus usuarios usando bcrypt o scrypt `#strategic`](#-68-protege-las-contraseñas/secretos-de-sus-usuarios-usando-bcrypt-o-scrypt)</br>
&emsp;&emsp;[6.9. Escapa la salida de HTML, JS y CSS](#-69-escapa-la-salida-de-html-js-y-css)</br>
&emsp;&emsp;[6.10. Valida esquemas JSON entrantes `#strategic`](#-610-Valida esquemas JSON entrantes)</br>
&emsp;&emsp;[6.11. Soporta listas de bloqueo de JWTs](#-611-soporta-listas-de-bloqueo-de-jwts)</br>
&emsp;&emsp;[6.12. Evita ataques de fuerza bruta contra la autorización `#advanced`](#-612-evita-ataques-de-fuerza-bruta-contra-la-autorización)</br>
&emsp;&emsp;[6.13. Ejecuta Node.js como usuario no root](#-613-ejecuta-nodejs-como-usuario-no-root)</br>
&emsp;&emsp;[6.14. Limita el tamaño del mensaje utilizando un proxy inverso o un middleware](#-614-limita-el-tamaño-del-mensaje-utilizando-un-proxy-inverso-o-un-middleware)</br>
&emsp;&emsp;[6.15. Evita las sentencias eval de JavaScript](#-615-evita-las-sentencias-eval-de-java-script)</br>
&emsp;&emsp;[6.16. Evita que una RegEx maliciosa sobrecargue la ejecución del único hilo](#-616-evita-que-una-reg-ex-maliciosa-sobrecargue-la-ejecución-del-único-hilo)</br>
&emsp;&emsp;[6.17. Evita cargar módulos usando variables](#-617-evita-cargar-módulos-usando-variables)</br>
&emsp;&emsp;[6.18. Ejecuta código inseguro en un sandbox](#-618-ejecuta-código-inseguro-en-un-sandbox)</br>
&emsp;&emsp;[6.19. Ten especial cuidado al trabajar con procesos secundarios `#advanced`](#-619-ten-especial-cuidado-al-trabajar-con-procesos-secundarios)</br>
&emsp;&emsp;[6.20. Oculta los detalles de error de los clientes](#-620-oculta-los-detalles-de-error-de-los-clientes)</br>
&emsp;&emsp;[6.21. Configura 2FA para npm o Yarn `#strategic`](#-621-configura-2fa-para-npm-o-yarn)</br>
&emsp;&emsp;[6.22. Modifica la configuración del middleware de sesión](#-622-modifica-la-configuración-del-middleware-de-sesión)</br>
&emsp;&emsp;[6.23. Evita los ataques de DoS estableciendo explícitamente cuándo debe fallar un proceso `#advanced`](#-623-evita-los-ataques-de-do-s-estableciendo-explícitamente-cuándo-debe-fallar-un-proceso)</br>
&emsp;&emsp;[6.24. Evita redirecciones inseguras](#-624-evita-redirecciones-inseguras)</br>
&emsp;&emsp;[6.25. Evita publicar secretos en el registro npm](#-625-evita-publicar-secretos-en-el-registro-npm)</br>
&emsp;&emsp;[6.26. Inspecciona si hay paquetes obsoletos](#-626-inspect-for-outdated-packages)</br>
&emsp;&emsp;[6.27. Importa los módulos integrados utilizando el protocolo 'node:' `#new`](#-627-inspecciona-si-hay-paquetes-obsoletos)</br>

</details>

<details>
  <summary>
    <a href="#7-borrador-mejores-prácticas-de-rendimiento">7. Prácticas de rendimiento (2) (En Progreso ✍️)</a>
  </summary>

&emsp;&emsp;[7.1. No bloquees el bucle de eventos](#-71-no-bloquees-el-bucle-de-eventos)</br>
&emsp;&emsp;[7.2. Prefiere los métodos nativos de a las utilidades de usuario como Lodash](#-72-prefiere-los-métodos-nativos-de-a-las-utilidades-de-usuario-como-lodash)</br>

</details>

<details>
  <summary>
    <a href="#8-mejores-prácticas-de-docker">8. Prácticas de Docker (15)</a>
  </summary>

&emsp;&emsp;[8.1. Utiliza compilaciones de múltiples etapas para obtener imágenes de Docker más sencillas y seguras `#strategic`](#-81-utiliza-compilaciones-de-múltiples-etapas-para-obtener-imágenes-de-docker-más-sencillas-y-seguras)</br>
&emsp;&emsp;[8.2. Arranca usando el comando `node`, evita `npm start`](#-82-arranca-usando-el-comando-node-evita-npm-start)</br>
&emsp;&emsp;[8.3. Permite a Docker maneje la replicación y el tiempo de ejecución `#strategic`](#-83-permite-a-docker-maneje-la-replicación-y-el-tiempo-de-ejecución)</br>
&emsp;&emsp;[8.4. Utiliza .dockerignore para evitar la fuga de secretos](#-84-utiliza-dockerignore-para-evitar-la-fuga-de-secretos)</br>
&emsp;&emsp;[8.5. Limpia las dependencias antes de ir a producción](#-85-limpia-las-dependencias-antes-de-ir-a-producción)</br>
&emsp;&emsp;[8.6. Apaga de manera inteligente y elegante `#advanced`](#-86-apaga-de-manera-inteligente-y-elegante)</br>
&emsp;&emsp;[8.7. Establece límites de memoria utilizando Docker y v8 `#advanced` `#strategic`](#-87-establece-límites-de-memoria-utilizando-docker-y-v8)</br>
&emsp;&emsp;[8.8. Planifica un almacenamiento en caché eficiente](#-88-planifica-un-almacenamiento-en-caché-eficiente)</br>
&emsp;&emsp;[8.9. Utiliza una referencia de imagen explícita, evita la etiqueta `latest`](#-89-utiliza-una-referencia-de-imagen-explícita-evita-la-etiqueta-latest)</br>
&emsp;&emsp;[8.10. Prefiere imágenes base de Docker pequeñas](#-810-prefiere-imágenes-base-de-docker-pequeñas)</br>
&emsp;&emsp;[8.11. Limpia los secretos de tiempo de compilación, evita los secretos en args `#strategic #new`](#-811-limpia-los-secretos-de-tiempo-de-compilación-evita-los-secretos-en-args)</br>
&emsp;&emsp;[8.12. Escanea las imágenes en busca de vulnerabilidades multi-capas `#advanced`](#-812-escanea-las-imágenes-en-busca-de-vulnerabilidades-multi-capas)</br>
&emsp;&emsp;[8.13 Limpia la caché de NODE_MODULE](#-813-limpia-la-caché-de-node-module)</br>
&emsp;&emsp;[8.14. Prácticas generales de Docker](#-814-prácticas-generales-de-docker)</br>
&emsp;&emsp;[8.15. Utiliza un linter en tu Dockerfile `#new`](#-815-Utiliza un linter en tu Dockerfile)</br>

</details>

<br/><br/>

# `1. Prácticas de estructura del proyecto`

## ![✔] 1.1. Estructura tu solución en componentes de negocio

### `📝 #updated`

**TL;DR:** La raíz de un sistema debe contener carpetas o repositorios que representen módulos de negocio de tamaño razonable. Cada componente representa un dominio de producto (es decir, contexto limitado), como 'componente de usuario', 'componente de pedido', etc. Cada componente tiene su propia API, lógica y base de datos lógica. ¿Cuál es el mérito significativo? Con un componente autónomo, cada cambio se realiza en un alcance granular y más pequeño: la sobrecarga mental, la fricción en el desarrollo y el miedo al despliegue son mucho menores. Como resultado, los desarrolladores pueden avanzar mucho más rápido. Esto no necesariamente exige una separación física y se puede lograr usando un Monorepo o un multi-repo.

```bash
my-system
├─ apps (componentes)
│  ├─ orders
│  ├─ users
│  ├─ payments
├─ libraries (funcionalidad genérica transversal a componentes)
│  ├─ logger
│  ├─ authenticator
```

**De lo contrario:** cuando se mezclan artefactos de varios módulos/temas, existen grandes posibilidades de que se forme un sistema 'espagueti' estrechamente acoplado. Por ejemplo, en una arquitectura donde el 'controlador del módulo a' puede llamar al 'servicio del módulo b', no hay límites claros de modularidad: cada cambio de código puede afectar cualquier otra cosa. Con este enfoque, sin límites claros entre módulos, los desarrolladores que codifican nuevas funcionalidades luchan por darse cuenta del alcance y el impacto de su cambio. En consecuencia, temen romper otros módulos y cada implementación se vuelve más lenta y riesgosa.

🔗 [**Leer más: estructura en componentes**](./sections/projectstructre/breakintcomponents.spanish.md)

<br/><br/>

## ![✔] 1.2. Pon tus componentes en capas, mantén la capa web dentro de sus límites

### `📝 #updated`

**TL;DR:** Cada componente debe contener "capas", una carpeta dedicada a temas comunes: "punto de entrada" donde reside el controlador, "dominio" donde reside la lógica y "acceso a datos". El principio principal de las arquitecturas más populares es separar las cuestiones técnicas (por ejemplo, HTTP, DB, etc.) de la lógica pura de la aplicación para que un desarrollador pueda codificar más funciones sin preocuparse por cuestiones de infraestructura. Poner cada inquietud en una carpeta dedicada, también conocida como [patrón de 3 capas] (https://es.wikipedia.org/wiki/Arquitectura_multicapa), es la forma más sencilla de lograr este objetivo.

```bash
my-system
├─ apps (componentes)
│  ├─ component-a
   │  ├─ entry-points (puntos de entrada)
   │  │  ├─ api # el controlador va aquí
   │  │  ├─ message-queue # el consumidor de mensaje va aqui
   │  ├─ domain (dominio) # funcionalidades y flujos: DTO, servicios, lógica
   │  ├─ data-access (acceso a datos) # Llamadas a DB sin ORM
```

**De lo contrario:** A menudo se ve que el desarrollador pasa objetos web como solicitud/respuesta a funciones en el dominio/capa lógica; esto viola el principio de separación y dificulta el acceso posterior al código lógico por parte de otros clientes, como código de prueba, tareas programadas, colas de mensajes. , etc.

🔗 [**Leer más: Aplicar capas a tu aplicación**](./sections/projectstructre/createlayers.spanish.md)

<br/><br/>

## ![✔] 1.3. Engloba utilidades comunes como paquetes, considera publicarlos

**TL;DR:** Coloca todos los módulos reutilizables en una carpeta dedicada, por ejemplo, "libraries" (bibliotecas), y debajo de cada módulo en su propia carpeta, por ejemplo, "/libraries/logger". Convierte a cada módulo en un paquete independiente con su propio archivo package.json para aumentar la encapsulación del módulo y permitir la publicación futura en un repositorio. En una configuración de Monorepo, los módulos se pueden consumir mediante un 'enlace npm' a sus rutas físicas, usando ts-paths o publicando e instalando desde un repositorio de paquetes como el registro npm.

```bash
my-system
├─ apps (componentes)
  │  ├─ component-a
├─ libraries (funcionalidad genérica transversal a componente)
│  ├─ logger
│  │  ├─ package.json
│  │  ├─ src
│  │  │ ├─ index.js

```

**De lo contrario:** Los clientes de un módulo pueden importar y acoplarse a la funcionalidad interna de un módulo. Con un package.json en la raíz, se puede configurar un package.json.main o un package.json.exports para indicar explícitamente qué archivos y funciones forman parte de la interfaz pública.

🔗 [**Leer más: Estructura por característica**](./sections/projectstructre/wraputilities.spanish.md)

<br/><br/>

## ![✔] 1.4 Usa una configuración consciente del entorno,segura y jerárquica  

### `📝 #updated`

**TL;DR:** La configuración perfecta e impecable debe incluir: a) los entradas que se pueden leer desde el archivo Y desde la variable de entorno; b) los secretos se guardan fuera del código al que se ha hecho commit; c) la configuración es jerárquica para facilitar la localización; d) soporte al tipado; e) validación para fallar rápido; f) especificar un valor por defecto para cada entrada. Solo hay unos pocos paquetes que pueden ayudar a cumplir con la mayoría de estos casos como [convict](https://www.npmjs.com/package/convict), [env-var](https://github.com/evanshortiss/env-var), [zod](https://github.com/colinhacks/zod), otros.

**De lo contrario:** Considera una variable de entorno obligatoria que no se proporcionó. La aplicación se inicia correctamente y atiende solicitudes; parte de la información ya se conserva en la base de datos. Luego, se da cuenta de que sin esta clave obligatoria la solicitud no se puede completar, lo que deja la aplicación en un estado sucio.

🔗 [**Leer más: buenas prácticas de configuración**](./sections/projectstructre/configguide.spanish.md)

<br/><br/>

## ![✔] 1.5. Considera todas las consecuencias al elegir el framwork principal 

### `🌟 #new`

**TL;DR:** Al crear aplicaciones y APIs, utilizar un framwork es obligatorio. Es fácil pasar por alto framworks alternativos o consideraciones importantes y finalmente elegir una opción subóptima. En 2023/2024, creemos que vale la pena considerar estos cuatro framwork: [Nest.js](https://nestjs.com/), [Fastify](https://www.fastify.io/), [express ](https://expressjs.com/) y [Koa](https://koajs.com/). Haga clic en leer más a continuación para conocer los pros y los contras detallados de cada framwork. De manera simplista, creemos que Nest.js es la mejor opción para los equipos que desean utilizar programación orientada a objetos y/o crear aplicaciones a gran escala que no se pueden dividir en componentes _autónomos_ más pequeños. Fastify es nuestra recomendación para aplicaciones con componentes de tamaño razonable (por ejemplo, microservicios) que se basan en mecánicas simples de Node.js. Lea nuestra [guía de consideraciones completas aquí] (./sections/projectstructre/choose-framework.spanish.md).

**De lo contrario:** Debido a la abrumadora cantidad de consideraciones, es fácil tomar decisiones basadas en información parcial y comparar peras con manzanas. Por ejemplo, se cree que Fastify es un servidor web mínimo que debería compararse únicamente con Express. En realidad, es un framwork rico con muchos complementos oficiales que cubren muchas problemáticas.

🔗 [**Leer más: Eligiendo el framework correcto**](./sections/projectstructre/choose-framework.spanish.md)

## ![✔] 1.6. Utiliza TypeScript con moderación y consideración

### `🌟 #new`

**TL;DR:** Programar sin seguridad de tipos ya no es una opción; TypeScript es la opción más popular para este objetivo. Úsalo para definir variables y tipos de retorno de funciones. Con eso, también es un arma de doble filo que puede _fomentar_ enormemente la complejidad con sus ~ 50 palabras clave adicionales y características sofisticadas. Considera usarlo con moderación, principalmente con tipos simples, y utiliza funciones avanzadas solo cuando surja una necesidad real.

**De lo contrario:** [Las investigaciones](https://earlbarr.com/publications/typestudy.pdf) muestran que el uso de TypeScript puede ayudar a detectar aproximadamente un 20% de errores antes. Sin él, la experiencia del desarrollador en el IDE también es intolerable. Por otro lado, el 80% de los otros errores no se descubrieron utilizando tipos. En consecuencia, la sintaxis tipada es valiosa pero limitada. Sólo las pruebas eficientes pueden descubrir todo un espectro de errores, incluidos los relacionados con el tipo. También podría frustrar su propósito: es probable que las características sofisticadas del código aumenten su complejidad, lo que por sí aumenta tanto la cantidad de errores como el tiempo promedio de corrección de los mismos.

🔗 [**Leer más: Consideraciones sobre TypeScript**](./sections/projectstructre/typescript-considerations.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `2. Prácticas en manejo de errores`

## ![✔] 2.1  Usa Async-Await o promesas para el manejo de errores asíncronos

**TL;DR:** El manejo de errores asíncronos en el estilo de callback es probablemente la manera más rápida de ir al infierno (a.k.a, pyramid of doom o pirámide de la perdición). El mejor regalo que le puedes dar a tu código es Promise con async-await que proporciona una sintaxis de código más compacta y similar al try-catch

**De lo contrario:** El estilo de callback de Node.JS, function (err, response), es una forma prometedora de hacer código no mantenible debido a la combinación de manejo de errores con código normal, anidación excesiva y patrones de codificación incómodos

🔗 [**Leer más: evitar callbacks**](./sections/errorhandling/asyncerrorhandling.spanish.md)

<br/><br/>

## ![✔] 2.2 Extiende el objeto Error nativo

### `📝 #updated`

**TL;DR:** Varias bibliotecas arrojan errores como una cadena de caracteres o como un tipo personalizado; esto complica la lógica de manejo de errores y la interoperatividad entre módulos. En su lugar, crea un objeto/clase de error de aplicación que extienda el objeto Error y utilízalo siempre que rechaces, arrojes o emitas un error. El error de la aplicación debería agregar propiedades útiles como el nombre/código del error y isCatastrophic. Al hacerlo, todos los errores tendrán una estructura unificada y permitirán un mejor manejo de errores. Existe la regla `no-throw-literal` de ESLint que chequea esto (aunque tiene unas [limitaciones](http://eslint.org/docs/rules/no-throw-literal) que pueden ser solucionadas al usar TypeScript y configurando la regla `@typescript-eslint/no-throw-literal`).

**De lo contrario:** Cuando invoques algún compontente, al no estar seguro de qué tipo de errores son retornados, será mucho más difícil manejar los errores de forma adecuada. Peor aún, el uso de tipos personalizados para describir los errores puede conducir a la pérdida de información de crítica de los errores como el seguimiento de la pila.

🔗 [**Leer más: utilizando el objeto de Error incorporado**](./sections/errorhandling/useonlythebuiltinerror.spanish.md)

<br/><br/>

## ![✔] 2.3 Distingue errores catastróficos de errores operacionales

### `📝 #updated`

**TL;DR:** Los errores operacionales (por ejemplo, el API recibió una entrada inválida) se refieren a casos conocidos en los que el impacto del error se entiende completamente y se pueden manejar con cuidado. Por otro lado, los errores catastróficos (también conocidos como errores del programador) se refiere a fallas desconocidas del código que obliga a reiniciar correctamente la aplicación.

**De lo contrario:** Siempre puedes reiniciar la aplicación cuando aparece un error, pero ¿por qué dejar sin servicio ~5000 usuarios en línea debido a un error previsto, menor y operacional? Lo contrario tampoco es ideal: Mantener la aplicación activa cuando se produce un problema desconocido (error del programador) puede provocar un comportamiento impredecible. Diferenciar los dos permite actuar con tacto y aplicando un enfoque equilibrado basado en el contexto dado.

  🔗 [**Leer más: error operacional vs programador**](./sections/errorhandling/operationalvsprogrammererror.spanish.md)

<br/><br/>

## ![✔] 2.4 Maneja los errores centralmente, no dentro de un middleware

**TL;DR:** La lógica de manejo de errores como el registro en logs, dicidir cuando fallar y las métricas de monitoreo, deben encapsularse en un objeto dedicado y centralizado al que todos los puntos de entrada (por ejemplo, API, trabajos cron, trabajos programados) puedan llamar cuando se presente un error.

**De lo contrario:** No manejar los errores dentro de un solo lugar dará lugar a  duplicación de código y, probablemente, a manejo inapropiado de errores.

🔗 [**Leer más: manejo de errores en un lugar centralizado**](./sections/errorhandling/centralizedhandling.spanish.md)

<br/><br/>

## ![✔] 2.5 Documenta errores del API con OpenAPI o GraphQL

**TL;DR:** Deja que los clientes de tu API sepan qué errores podrían presentarse como respuesta, para que puedan manejarlos cuidadosamente sin fallar. Para API's RESTful esto se hace generalmente con frameworks de documentación REST API como OpenAPI. Si estás utilizando GraphQL, también puedes utilizar tus esquemas y comentarios.

**De lo contrario:** Un cliente de la API podría decidir bloquearse y reiniciarse solo porque recibió un error que no pudo entender. Nota: la persona que llama a tu API puedes ser tu (muy típico en un entorno de microservicios).

🔗 [**Leer más: documentación de errores en Swagger o GraphQL**](./sections/errorhandling/documentingusingswagger.spanish.md)

<br/><br/>

## ![✔] 2.6 Cierra el proceso elegantemente cuando un extraño llega a la ciudad

**TL; DR:** Cuando se produce un error desconocido (un error catastrófico, consulta la práctica 2.3): existe incertidumbre acerca del estado de salud de la aplicación. En este caso, no hay otra opción que hacer observable el error, cerrar las conexiones y terminar el proceso. Cualquier framework de ejecución confiable, como servicios Dockerizados o soluciones en la nube sin servidor, se encargarán de reiniciar

**De lo contrario:** Cuando se detecta una excepción desconocida, algunos objetos pueden quedar en un estado defectuoso (por ejemplo, un emisor de eventos que se usa globalmente y que no envía más eventos debido a fallas internas) haciendo que las solicitudes futuras puedan fallar o comportarse de manera extraña.

🔗 [**Leer más: cerrar el proceso**](./sections/errorhandling/shuttingtheprocess.spanish.md)

<br/><br/>

## ![✔] 2.7 Usa un logger maduro para aumentar la visibilidad de los errores

### `📝 #updated`

**TL;DR:** Una herramienta de logueo robusta como [Pino](https://github.com/pinojs/pino) o [Winston](https://github.com/winstonjs/winston) aumentan la visibilidad de los errores utilizando funcionalidades como niveles de log, visualización coloreada y más. Console.log carece de estas características y debe evitarse. Los mejores logger permiten adjuntar propiedades útiles personalizadas en los logs con una penalización mínima de performance en la serialización. Los desarrolladores deben escribir los logs a `stdout` y dejar que la infraestructura realice la transmisión al agregador de logs apropiado.

**De lo contrario:** Navegando a través de console.logs o manualmente a través de un archivo de texto desordenado sin herramientas de consulta o un visor de logs decente puede mantenerte ocupado hasta tarde en el trabajo.

🔗 [**Leer más: utilizando un logger maduro**](./sections/errorhandling/usematurelogger.spanish.md)

<br/><br/>

## ![✔] 2.8 Prueba los flujos de errores usando tu framework de prueba favorito

### `📝 #updated`

**TL;DR:** Ya sea que se trate de una prueba automatizada de QA profesional o de una de desarrollador manual: asegúrate de que tu código no solo satisfaga un escenario positivo sino que también maneje y devuelva los errores correctos. Además de esto, simule flujos de errores más profundos, como excepciones no capturadas, y asegúrese de que el controlador de errores los trate adecuadamente (vea ejemplos de código en la sección "leer más").

**De lo contrario:** Sin pruebas, ya sean automáticas o manuales, no puedes confiar en tu código para devolver los errores correctos. Sin errores útiles, no hay manejo de errores.

🔗 [**Leer más: probar los flujos de error**](./sections/errorhandling/testingerrorflows.spanish.md)

<br/> <br/>

## ![✔] 2.9 Descubre errores y tiempo de inactividad usando productos de APM

**TL;DR:** Los productos de monitoreo y rendimiento (a.k.a APM) miden de forma proactiva tu base de código o API para auto-mágicamente resaltar errores, caídas y partes lentas que no has notado.

**De lo contrario:** Es posible que dediques un gran esfuerzo en medir el rendimiento y los tiempos de caída de la API y probablemente nunca sabrás cuáles son las piezas de código más lentas en el escenario del mundo real y cómo afectan estas a la experiencia del usuario.

🔗 [**Leer más: utilizando productos APM**](./sections/errorhandling/apmproducts.spanish.md)

<br/><br/>

## ![✔] 2.10 Captura los rechazos de promesas no controladas

### `📝 #updated`

**TL;DR:** Cualquier excepción lanzada dentro de una promesa será tragada y descartada a menos que un desarrollador no se olvide de manejarla de manera explícita. ¡Incluso si su código está suscrito a `process.uncaughtException`! Supera esto registrándote al evento `process.unhandledRejection`.

**De lo contrario:** Tus errores serán tragados y no dejarán rastros. Nada de que preocuparse

🔗 [**Leer más: captura rechazos de promesas no controladas**](./sections/errorhandling/catchunhandledpromiserejection.spanish.md)

<br/><br/>

## ![✔] 2.11 Falla rápidamente, valida los argumentos usando una biblioteca dedicada

**TL; DR:** Valida los datos de entrada a la API para evitar bugs molestos que son difíciles de rastrear luego. El código de validación suele ser tediosa amenos que utilices una biblioteca de validación moderna como [ajv](https://www.npmjs.com/package/ajv), [zod](https://github.com/colinhacks/zod) o [typebox](https://github.com/sinclairzx81/typebox)

**De lo contrario:** Considera esto: tu función espera un argumento numérico "Descuento" que el invocador de la función olvida pasar, más adelante su código chequea si Descuento!= 0 (cantidad de descuento permitido es mayor que cero), entonces permitirá que el usuario que disfrute de un descuento. Dios mío, qué desagradable error. ¿Puedes verlo?

🔗 [**Leer más: falla rápidamente**](./sections/errorhandling/failfast.spanish.md)

<br><br>

## ![✔] 2.12 Siempre resuelve las promesas antes de retornarlas para evitar un stacktrace parcial

### `🌟 #new`

**TL;DR:** Siempre utiliza `return await` cuando regreses una promesa para tener un error stacktrace completo. Si la función regresa una promesa, esa función debe ser declarada como `async` y explícitamente esperar (`await`) la promesa antes de retornarla.

**De lo contrario** La función que regresa una promesa sin esperar no aparecerá en el stacktrace. Esas piezas faltantes probablemente complicarán el entendimiento del flujo que lleva al error, especialmente si la causa del comportamiento está en la función faltante.

🔗 [**Leer más: retornar promesas**](./sections/errorhandling/returningpromises.spanish.md)

<br/><br/>

## ![✔] 2.13 Subscribete al evento 'error' de los emisores de eventos

## `🌟 #new`

**TL;DR:** A diferencia de las funciones típicas, una cláusula try-catch no obtendrá errores que se originen en emisores de eventos (`Event Emitters`) ni en nada heredado de ellos (por ejemplo, `streams`). En lugar de try-catch, suscríbase al evento de 'error' de un emisor de eventos para que su código pueda manejar el error en contexto. Cuando se trata de [EventTargets](https://nodejs.org/api/events.html#eventtarget-and-event-api) (la versión web estándar de `Event Emitters``) no hay ningún evento de "error" y todos los errores terminan en el evento global Process.on('error) - en este caso, al menos asegúrese de que el proceso falle o no según el contexto deseado. Además, tenga en cuenta que los errores que se originan en los controladores de eventos _asincrónicos_ no se detectan a menos que el emisor del evento se inicialice con {captureRejections: true}.

**Otherwise:** Los emisores de eventos se utilizan comúnmente para funciones de aplicaciones clave y globales, como conexiones de bases de datos o colas de mensajes. Cuando este tipo de objetos cruciales arrojan un error, en el mejor de los casos el proceso fallará debido a una excepción no controlada. Peor aún, permanecerá vivo como un zombi mientras una función clave esté desactivada.

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `3. Prácticas de estilo de código`

## ![✔] 3.1 Usa ESLint

**TL;DR:** [ESLint](https://eslint.org) es el estándar de-facto para detectar  errores de código y corregir estilo, no solo para identificar problemas básicos, sino también para detectar anti-patrones de código graves, como los desarrolladores lanzando errores sin clasificación. Aunque ESLint puede corregir automáticamente los estilos de código, otras herramientas como [prettier](https://www.npmjs.com/package/prettier) son más potentes para formatear la solución y funcionan en conjunto con ESLint-

**De lo contrario:** Los desarrolladores se centrarán en los espacios y el ancho de línea del código y desperdicierán tiempo sobrepensando el estilo de código del proyecto.

🔗 [**Leer más: Usando ESLint y Prettier**](./sections/codestylepractices/eslint_prettier.spanish.md)

<br/><br/>

## ![✔] 3.2 Utiliza las extensiones de eslint para para Node.js

### `📝 #updated`

**TL;DR:** Además de las reglas estándar de ESLint que cubre a JavaScript vainilla, es bueno agregar complementos específicos como [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) y [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security), [eslint-plugin-require](https://www.npmjs.com/package/eslint-plugin-require), [/eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) y otras reglas útiles

**De lo contrario:** Muchos patrones defectuosos de Node.js pueden escaparse. Por ejemplo, los desarrolladores pueden requerir archivos (variableAsPath) con una variable dada como ruta que permita a los atacantes ejecutar cualquier script JS. Los linters de Node.js pueden detectar tales patrones y avisar tempranamente

<br/><br/>

## ![✔] 3.3 Inicia las llaves de un bloque de código en la misma línea

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

## ![✔] 3.4 Separa tus sentencias correctamente

No importa si usas punto y coma o no para separar tus sentencias, conocer las trampas comunes de los saltos de línea inadecuados o la inserción automática de punto y coma, te ayudará a eliminar los errores de sintaxis habituales.

**TL;DR:** Utiliza ESLint para ganar conciencia sobre la separación de intereses. [Prettier](https://prettier.io/) o [Standardjs](https://standardjs.com/) pueden resolver automáticamente estos inconvenientes.

**De lo contrario:** Como se vio en la sección anterior, el intérprete de JavaScript agrega automáticamente un punto y coma al final de una sentencia si no hay una, o considera que una declaración no terminó donde debería, lo que podría generar resultados inesperados. Puedes usar asignaciones y evitar el uso de expresiones de funciones invocadas inmediatamente para evitar la mayoría de los errores inesperados.

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
// Pon un punto y coma antes de la función invocada inmediatamente y después de la definición de una constante; guarda el valor de retorno de la función anónima en una variable o evita los IIFE por completo
```

🔗 [**Leer más:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Leer más:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Nombra a tus funciones

**TL;DR:** Nombra todas las funciones, incluidos los closures y callbacks. Evita las funciones anónimas. Esto es especialmente útil cuando se perfila una aplicación Node. Nombrar todas las funciones le permitirá comprender fácilmente lo que está viendo al revisar una instantanea de la memoria.

**De lo contrario:** La depuración de problemas de producción utilizando un volcado de memoria (instantenea de memoria) puede ser un desafío al observar un consumo significativo de memoria por parte de funciones anónimas.

<br/><br/>

## ![✔] 3.6 Usa convenciones de nombre para variables, constantes, funciones y clases

**TL;DR:** Usa **_lowerCamelCase_** al nombrar constantes, variables y funciones y utiliza **_UpperCamelCase_** (la primera en mayúscula también) cuando nombres clases y **_UPPER_SNAKE_CASE_** al nombrar variables globales o estáticas. Esto lo ayudará a distinguir fácilmente entre variables, funciones,  clases que requieren instanciación y variables declarardas en el scope global del módulo. Usa nombres descriptivos, pero trata de mantenerlos cortos.

**De lo contrario:** Javascript es el único lenguaje en el mundo que permite invocar a un constructor ("Clase") directamente sin instanciarlo primero. En consecuencia, las clases y constructores de funciones se diferencian comenzando con UpperCamelCase

### 3.6 Ejemplo de código

```javascript
// para nombres de variables globales usamos el keyword const/let y UPPER_SNAKE_CASE
let MUTABLE_GLOBAL = "mutable value";
const GLOBAL_CONSTANT = "immutable value";
const CONFIG = {
  key: "value",
};

// ejemplos de la convención de UPPER_SNAKE_CASE en el ecosistema nodejs/javascript

// en el moóulo Math.PI de JavaScript
const PI = 3.141592653589793;

// https://github.com/nodejs/node/blob/b9f36062d7b5c5039498e98d2f2c180dca2a7065/lib/internal/http2/core.js#L303
// en el modulo http2 de NodeJS
const HTTP_STATUS_OK = 200;
const HTTP_STATUS_CREATED = 201;

// para nombre de clases usamos UpperCamelCase
class SomeClassExample {
  // para propiedades estáticas de clase usamos UPPER_SNAKE_CASE
  static STATIC_PROPERTY = "value";
}

// para funciones usamos lowerCamelCase
function doSomething() {
  // for scoped variable names we use the const/let keyword and lowerCamelCase
  // para variables dentro de un scope usamos utilizamos la keyword const/let  y lowerCamelCase
  const someConstExample = "immutable value";
  let someMutableExample = "mutable value";
}
```

<br/><br/>

## ![✔] 3.7 Prefiere const antes que let. No uses var

**TL;DR:** Usar `const` significa que una vez que se asigna una variable, no se puede reasignar. Prefiriendo `const` te ayudará a no sentirte tentado a usar la misma variable para diferentes usos y hace tu código más claro. Si una variable necesita ser reasignada, por ejemplo en un bucle for, usa `let` para declararla. Otro aspecto importante es que una variable declarada con `let` solo está disponible en el ámbito del bloque en la que se definió. `var` tiene ámbito de función, no de bloque, y [no debería ser usada en ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) ahora que tienes `const` y `let` a tu disposición.

**De lo contrario:** La depuración se vuelve mucho más engorrosa cuando se sigue una variable que cambia con frecuencia

🔗 [**Leer más: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 Importa los módulos primero, no dentro de funciones

**TL;DR:** Importa los módulos al comienzo de cada archivo, antes y fuera de cualquier función. Esta simple práctica recomendada no solo te ayudará a identificar fácil y rápidamente las dependencias de un archivo en la parte superior, sino que también evitará un par de posibles problemas.

**De lo contrario:** Los requisitos se ejecutan de manera síncrona por Node.js. Si se los llama desde una función, puede bloquear el manejo de otras solicitudes en un momentos críticos. Además, si un módulo requerido o cualquiera de sus propias dependencias arroja un error y tirar el servidor, es mejor averiguarlo lo antes posible, lo que podría no ser así si el módulo se requiere desde una función.

<br/><br/>

## ![✔] 3.9 Establece un punto de entrada explícito a un módulo/carpeta

### `📝 #updated`

**TL;DR:** Al desarrollar un módulo/biblioteca, establece un archivo raíz explícito que exporte el código público e interesante. Disuade al código del cliente de importar archivos profundos y de familiarizarse con la estructura interna. Con commonjs (require), esto se puede hacer con un archivo index.js en la raíz de la carpeta o en el campo package.json.main. Con ESM (import), si existe un paquete.json en la raíz, el campo "exportaciones" permite especificar el archivo raíz del módulo. Si no existe ningún paquete.json, puedes colocar un archivo index.js en la raíz que reexporte toda la funcionalidad pública.

**De lo contrario:** Tener un archivo raíz explícito actúa como una "interfaz" pública que encapsula lo interno, dirige al invocador al código público y facilita cambios futuros sin romper el contrato.

### 3.9 Ejemplo de código - evita el acoplamiento del cliente con la estructura del módulo

```javascript
// Evita: el client tiene mucha familiaridad con lo interno

// Código cliente
const SMSWithMedia = require("./SMSProvider/providers/media/media-provider.js");

// Mejor: exporta explícitamente la funciones públicas

//index.js, código del módulo
module.exports.SMSWithMedia = require("./SMSProvider/providers/media/media-provider.js");

// Client code
const { SMSWithMedia } = require("./SMSProvider");
```

<br/><br/>

## ![✔] 3.10 Usa el operador `===`

**TL;DR:** Prefiere el operador de igualdad estricto `===` por sobre el operador de igualdad abstracto `==`. `==` comparará dos variables después de convertirlas a un tipo común. Con `===` no hay conversión de tipo, y ambas variables deben ser del mismo tipo para ser iguales

**De lo contrario:** Variables que no son iguales pueden devolver `true` con el operador `==` 

### 3.10 Ejemplo de código

```javascript
"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

" \t\r\n " == 0; // true
```

Todas las sentencias de arriba retornarían `false` si se hubiera usado `===`.

<br/><br/>

## ![✔] 3.11 Usa Async Await, evita callbacks

**TL;DR:** Async-await es la forma más sencilla de expresar un flujo asincrónico, ya que hace que el código asincrónico parezca sincrónico. Async-await también dará como resultado un código mucho más compacto y soporte para try-catch. Esta técnica ahora reemplaza los callbacks y las promesas en la _mayoría_ de los casos. Usarlo en tu código es probablemente el mejor regalo que le puedas hacer al lector del código.

**De lo contrario:** Manejar errores asíncronos en el estilo de callback es probablemente el camino más rápido al infierno. Ese estilo obliga a verificar los errores por todas partes, lidiar con el anidamiento de código y dificulta razonar sobre el flujo de código.

🔗[**Leer más:** Guide to async await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Usa expresiones de función flecha (=>)

**TL;DR:** Aunque se recomienda usar async-await y evitar parámetros de función cuando se trata de API más antiguas que aceptan promesas o callbacks. Las funciones de flecha hacen que la estructura del código sea más compacta y mantienen el contexto léxico de la función raíz (i.e. `this`)

**De lo contrario:** El código más largo (en las funciones ES5) es más propenso a errores y engorroso de leer.

🔗 [**Leer más: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/>

## ![✔] 3.13 Evita efectos fuera de las funciones

### `🌟 #new`

**TL;DR:** Evita colocar código con efectos como llamadas de red o de base de datos fuera de las funciones. Dicho código se ejecutará inmediatamente cuando otro archivo requiera el archivo. Este código "flotante" podría ejecutarse cuando el sistema subyacente aún no esté listo. También viene con una penalización de rendimiento incluso cuando las funciones de ese módulo finalmente no se utilicen en tiempo de ejecución. Por último, mockear estas llamadas de red/DB para realizar pruebas es más difícil afuera de las funciones. En su lugar, coloque este código dentro de funciones que deban llamarse explícitamente. Si hay código de base de datos/red que deba ejecutarse justo cuando se carga el módulo, considera usar un factory o revelar los patrones del módulo.

**De lo contrario:** Un típico framework web establece un controlador de errores, variables de entorno y monitoreo. Cuando se realizan llamadas a la base de datos/red antes de que se inicialice el framework web, estas no serán monitoreadas o fallarán debido a la falta de datos de configuración.

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `4. Pruebas y prácticas generales de calidad`

\_Tenemos guías dedicadas a las pruebas, ver más abajo. La lista de mejores prácticas aquí es un breve resumen de estas guías.

a. [JavaScript testing best practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
b. [Node.js testing - beyond the basics](https://github.com/testjavascript/nodejs-integration-tests-best-practices)
\_

## ![✔] 4.1 Por lo menos, escribe las pruebas de la API (componente)

**TL;DR:** La mayoría de los proyectos simplemente no tienen pruebas automatizadas debido a los cortos horarios o, a menudo, el 'proyecto de pruebas' se salió de control y fue abandonado. Por esa razón, priorice y comience con las pruebas API, que es la forma más fácil de escribir y proporciona más cobertura que las pruebas unitarias (incluso puede crear pruebas API sin código utilizando herramientas como [Postman](https://www.getpostman.com/). Luego, si tiene más recursos y tiempo, continúe con los tipos de pruebas avanzadas como pruebas unitarias, pruebas de base de datos, pruebas de rendimiento, etc.

**De lo contrario:** Puede pasar largos días escribiendo pruebas unitarias para descubrir que solo tiene un 20% de cobertura del sistema

<br/><br/>

## ![✔] 4.2 Incluye 3 partes en cada nombre de prueba

### `🌟 #new`

**TL;DR:** Haga que las pruebas hablen a nivel de requisitos para que se expliquen por sí mismos también a los ingenieros de QA y desarrolladores que no están familiarizados con el detalle interno del código. Indique en el nombre de la prueba qué se está probando (unidad bajo prueba), en qué circunstancias y cuál es el resultado esperado

**De lo contrario:** Una implementación acaba de fallar y una prueba llamada "Agregar producto" falló. ¿Esto te dice exactamente qué está funcionando mal?

🔗 [**Leer más: Incluye 3 partes en cada nombre de prueba**](./sections/testingandquality/3-parts-in-name.spanish.md)

<br/><br/>

## ![✔] 4.3 Estructura las pruebas utilizando el patrón AAA

### `🌟 #new`

**TL;DR:** Estructura tus pruebas con 3 secciones bien separadas: Organizar, Actuar y Afirmar (AAA - Arrange, Act & Assert). La primera parte incluye la configuración de la prueba, la segunda la ejecución de la unidad bajo prueba y finalmente la fase de afirmaciones. Seguir esta estructura garantiza que el lector no gaste CPU cerebral en comprender el plan de prueba

**De lo contrario:** No solo pasas largas horas diarias entendiendo el código principal, ahora también lo que debería haber sido la parte simple del día (pruebas)  ejercita tu cerebro

🔗 [**Leer más: Pruebas de estructura por el patrón AAA**](./sections/testingandquality/aaa.spanish.md)

<br/><br/>

## ![✔] 4.4 Asegurate que la versión de Node esté unificada

### `🌟 #new`

**TL;DR:** Usa herramientas que fomenten o impongan la misma versión de Node.js en diferentes entornos y desarrolladores. Herramientas como [nvm](https://github.com/nvm-sh/nvm) y [Volta](https://volta.sh/) permiten especificar la versión del proyecto en un archivo para que cada miembro del equipo pueda ejecutar un comando único para ajustarse a la versión del proyecto. Opcionalmente, esta definición se puede replicar en CI y en el tiempo de ejecución de producción (por ejemplo, copiar el valor especificado en la compilación .Dockerfile y en el archivo de declaración de CI).

**De lo contrario:** Un desarrollador puede enfrentar o pasar por alto un error porque usa una versión de Node.js diferente a la de sus compañeros de equipo. Peor aún: el tiempo de ejecución de producción puede ser diferente al entorno donde se ejecutaron las pruebas.

<br/><br/>

## ![✔] 4.5 Evita los estados de prueba (fixtures) y semillas globales, agrega datos por prueba

**TL;DR:** Para evitar el acoplamiento de pruebas y razonar fácilmente sobre el flujo de prueba, cada prueba debe agregar y actuar en su propio conjunto de registros de base de datos. Cada vez que una prueba necesita extraer o asumir la existencia de algunos datos de base de datos, debes agregar explícitamente esos datos y evitar la mutación de cualquier otro registro.

**De lo contrario:** Considera un escenario en el que se cancela la implementación debido a las pruebas fallidas, el equipo ahora pasará un tiempo de investigación precioso que termina en una triste conclusión: el sistema funciona bien, las pruebas sin embargo interfieren entre sí y rompen la construcción

🔗 [**Leer más: Evita datos globales**](./sections/testingandquality/avoid-global-test-fixture.spanish.md)

<br/><br/>

## ![✔] 4.6 Etiqueta tus pruebas

**TL;DR:** Pruebas diferentes deben ejecutarse en diferentes escenarios: "smoke rápido", "sin IO", pruebas que deben ejecutarse cuando un desarrollador guarda o hace commit a un archivo, pruebas completas de punta a punta que generalmente se ejecutan cuando se envía una nueva pull request, etc. Esto se puede lograr etiquetando las pruebas con palabras clave como #cold #api #sanity para que pueda aprovechar su andamiaje de pruebas e invocar el subconjunto deseado. Por ejemplo, así es como invocaría solo al grupo de prueba de sanidad con [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**De lo contrario:** La ejecución de todas las pruebas, incluidas las pruebas que realizan docenas de consultas DB, cada vez que un desarrollador realiza un pequeño cambio puede ser extremadamente lento y mantiene a los desarrolladores lejos de ejecutar pruebas

<br/><br/>

## ![✔] 4.7 Verifica la cobertura de tus pruebas, ayuda a identificar patrones de prueba incorrectos

**TL;DR:** Herramientas de cobertura de código como [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) son excelentes por 3 razones: son gratis (no se requiere ningún esfuerzo para realizar estos informes), ayudan a identificar una disminución en la cobertura de las pruebas y, por último, pero no menos importante, resaltan los desajustes de las pruebas: al mirar los informes de cobertura de códigos de colores puede que veas, por ejemplo, áreas de código que nunca se prueban como cláusulas catch (lo que significa que las pruebas solo invocan las rutas felices y no cómo se comporta la aplicación ante los errores). Configúrelo para generar fallos si la cobertura cae por debajo de un cierto umbral

**De lo contrario:** No habrá ninguna métrica automatizada que le indique cuándo una gran parte de su código no está cubierto por las pruebas

<br/><br/>

## ![✔] 4.8 Usa un ambiente similar al de producción para pruebas e2e

**TL;DR:** La prueba de punta a punta (e2e) que incluye datos en vivo solía ser el eslabón más débil del proceso de CI, ya que depende de múltiples servicios pesados como la BDD. Usa un entorno que esté lo más cerca posible de su producción real como una continuación

**De lo contrario:** Sin 'docker-compose',los equipos deben mantener una base de datos de prueba para cada entorno de prueba, incluidas las máquinas de los desarrolladores, mantener todas esas bases de datos sincronizadas para que los resultados de la prueba no varíen entre entornos.

<br/><br/>

## ![✔] 4.9 Refactoriza regularmente utilizando herramientas de análisis estático de código

**TL;DR:** El uso de herramientas de análisis estático ayudan al proporcionar formas objetivas de  mejorar la calidad del código y mantienen tu código mantenible. Puedes agregar herramientas de análisis estático a tu compilación de CI para que falle cuando encuentre problemas en código. Sus principales puntos de venta sobre el linting son la capacidad de inspeccionar la calidad en el contexto de múltiples archivos (por ejemplo, detectar duplicaciones), realizar análisis avanzados (por ejemplo, complejidad del código) y seguir el historial y el progreso de los problemas de código. Dos ejemplos de herramientas que puede usar son [Sonarqube](https://www.sonarqube.org/) (2,600+ [stars](https://github.com/SonarSource/sonarqube)) y [Code Climate](https://codeclimate.com/) (1,500+ [stars](https://github.com/codeclimate/codeclimate)).

**De lo contrario:** Con una mala calidad de código, los errores y el rendimiento siempre serán un problema que ninguna nueva y brillante biblioteca o características de última generación podrá solucionar

🔗 [**Leer más: Refactorización!**](./sections/testingandquality/refactoring.spanish.md)

<br/><br/>

## ![✔] 4.10 Simula las respuestas de servicios HTTP externos

### `🌟 #new`

**TL;DR:** Utilice herramientas de mocking de red para simular las respuestas de servicios de colaboradores externos se accedan a través de la red (por ejemplo, REST, GraphQL). Es imperativo no sólo para aislar el componente bajo prueba sino principalmente para simular los caminos no felices. Herramientas como [nock](https://github.com/nock/nock) (en proceso) o [Mock-Server](https://www.mock-server.com/) permiten definir respuestas específicas de un servicio externo en una sola línea de código. Recuerda simular también los errores, retrasos, tiempos de espera agotados y cualquier otro evento que pueda ocurrir en producción.

**De lo contrario:** Permitir que tu componente lleguen a instancias reales de servicios externos probablemente dará como resultado pruebas ingenuas que en su mayoría cubren solo los caminos felices. Las pruebas también pueden ser inestables y lentas.

🔗 [**Read More: Mock external services**](./sections/testingandquality/mock-external-services.spanish.md)

## ![✔] 4.11 Prueba tus middlewares por separado

**TL;DR:** Cuando tu middleware tiene una lógica inmensa que se extiende a muchas peticiones, vale la pena realizar pruebas por separado, sin necesidad de levantar todo el framework web. Esto puede hacerse fácilmente simulando y espiando los objetos {req, res, next}.

**De lo contrario** Un bug en un middleware de express === un bug en todas o casi todas las peticiones

🔗 [**Leer más: Prueba tu middleware por separado**](./sections/testingandquality/test-middlewares.spanish.md)

<br/><br/>

## ![✔] 4.12 Especifica un puerto en producción, aleatorizalo en las pruebas

### `🌟 #new`

**TL;DR:** Al realizar pruebas con la API, es común y deseable inicializar el servidor web dentro de las pruebas. Deje que el servidor aleatorice el puerto del servidor web durante las pruebas para evitar colisiones. Si está utilizando el servidor http de Node.js (utilizado por la mayoría de los fraweworks), hacerlo no exige nada más que pasar un número de puerto cero; esto aleatorizará un puerto disponible.

**Otherwise:** Especificar un puerto fijo evitará que se ejecuten dos procesos de prueba al mismo tiempo. La mayoría de los ejecutores de pruebas modernos se ejecutan con múltiples procesos de forma predeterminada.

🔗 [**Leer más: Aleatoriza un puerto para pruebas**](./sections/testingandquality/randomize-port.spanish.md)

<br/><br/>

## ![✔] 4.13 Prueba los cinco posibles resultados

### `🌟 #new`

**TL;DR:** Al probar un flujo, asegúrate de cubrir las cinco categorías potenciales. Cada vez que se desencadena alguna acción (por ejemplo, una llamada a la API), ocurre una reacción, un **resultado** significativo es generado y se solicita una prueba. Hay cinco tipos de resultados posibles para cada flujo: una respuesta, un cambio de estado visible (por ejemplo, BDD), una llamada de API saliente, un nuevo mensaje en una cola y una llamada de observabilidad (por ejemplo, logging, métrica). Consulta una [lista aquí] (https://testjavascript.com/wp-content/uploads/2021/10/the-backend-checklist.pdf). Cada tipo de resultado presenta desafíos únicos y técnicas para mitigar esos desafíos; tenemos una guía dedicada a este tema: [Node.js testing - beyond the basics](https://github.com/testjavascript/nodejs-integration-tests-best-practices).

**Otherwise:** Considera el caso de probar el agregar un nuevo producto al sistema. Es común ver pruebas que se basan únicamente en una respuesta válida. ¿Qué pasa si el producto no persiste a pesar de la respuesta positiva? ¿Qué pasa si al agregar un nuevo producto se requiere llamar a algún servicio externo o poner un mensaje en la cola? ¿No debería la prueba confirmar estos resultados también? Es fácil pasar por alto varios caminos, aquí es donde una [lista resulta útil] (https://testjavascript.com/wp-content/uploads/2021/10/the-backend-checklist.pdf).

🔗 [**Leer más: Prueba cinco resultados**](./sections/testingandquality/test-five-outcomes.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `5. Prácticas de puesta en producción`

## ![✔] 5.1. Monitoreo

**TL;DR:** Monitorear es un juego para descubrir problemas antes de que lo hagan los clientes; obviamente, se le debe asignar una importancia sin precedentes. El mercado está abrumado por las ofertas, por lo tanto, considera empezar con la definición de las métricas básicas que debe seguir (mis sugerencias dentro), luego vé por características sofisticadas adicionales y elige la solución que cumpla con todos los requisitos. En cualquier caso, se deben cubrir las 4 capas de observabilidad: tiempo de actividad, métricas centradas en los síntomas de cara al usuario y métricas técnicas de Node.js como la demora del Event Loop, medición de flujos distribuidos con Open Telemetry y logueo. Haga clic en "Leer más" debajo para una descripción general de las soluciones.

**De lo contrario:** Fallar === clientes decepcionados. Simple

🔗 [**Leer más: Monitorización!**](./sections/production/monitoring.spanish.md)

<br/><br/>

## ![✔] 5.2. Aumenta la observabilidad utilizando logging inteligente

**TL;DR:** Los logs pueden ser un almacén tonto de sentencias de depuración o el habilitador de un hermoso tablero que cuenta la historia de tu aplicación. Planifica tu plataforma de logs desde el día 1: cómo se recopilan, almacenan y analizan los registros para garantizar que la información deseada realmente se pueda extraer (por ejemplo, la tasa de error, seguir una transacción completa a través de servicios y servidores, etc.).

**De lo contrario:** Terminarás con un caja negra con la que es difícil pensar y luego empezaras a reescribir todas las declaraciones de registro para agregar información adicional

🔗 [**Leer mas: Aumenta la transparencia utilizando logging inteligentes**](./sections/production/smartlogging.spanish.md)

<br/><br/>

## ![✔] 5.3. Delega todo lo posible (por ejemplo, gzip, SSL) a un proxy inverso

**TL;DR:** Node es terriblemente malo para realizar tareas intensivas de CPU como compresión, terminación SSL, etc. En su lugar deberías usar servicios de infraestructura especializados como nginx, HAproxy o servicios de proveedores en la nube

**De lo contrario:** Tu pobre monohilo se mantendrá ocupado haciendo tareas de infraestructura en lugar de ocuparse del núcleo de tu aplicación y el rendimiento se degradará en consecuencia

🔗 [**Leer más: Delega todo lo posible a un proxy inverso**](./sections/production/delegatetoproxy.spanish.md)

<br/><br/>

## ![✔] 5.4. Bloquea dependencias

**TL;DR:** Tu código debe ser idéntico en todos los entornos, pero sin un archivo de bloqueo especial npm permite que las dependencias fluctúen entre los entornos. Asegúrese de agregar a su repositorio el archivo paquete-lock.json para que todos los entornos sean idénticos.

**De lo contrario:** QA probará a fondo el código y aprobará una versión que se comportará de manera diferente cuando está en producción. Peor aún, diferentes servidores en el mismo clúster de producción podrían ejecutar código diferente

🔗 [**Leer más: Bloquear dependencias**](./sections/production/lockdependencies.spanish.md)

<br/><br/>

## ![✔] 5.5. Proteje la disponibilidad del proceso utilizando la herramienta adecuada

**TL;DR:** El proceso debe continuar y reiniciarse en caso de fallas. Las plataformas de ejecución modernas, como las plataformas dockerizadas (por ejemplo, Kubernetes) y Serverless, se encargan de esto automáticamente. Cuando la aplicación está alojada en un servidor básico, uno deben gestionar las herramientas de gestión de procesos como [systemd](https://systemd.io/). Evite incluir una herramienta de gestión de procesos personalizada en una plataforma moderna que monitoree una instancia de aplicación (por ejemplo, Kubernetes); al hacerlo, se ocultarán las fallas de la infraestructura. Cuando la infraestructura subyacente no reconoce los errores, no puede realizar medidas de mitigación útiles, como reemplazar la instancia en una ubicación diferente.

**De lo contrario:** Ejecutar docenas de instancias sin una estrategia clara y demasiadas herramientas juntas (administración de clúster, docker, PM2) podría conducir al caos de DevOps.

🔗 [**Leer más: Proteja la disponibilidad del proceso utilizando la herramienta adecuada**](./sections/production/guardprocess.spanish.md)

<br/><br/>

## ![✔] 5.6. Utiliza todos los núcleos de la CPU

**TL;DR:** En su forma básica, una aplicación Node se ejecuta en un solo núcleo de CPU mientras que todas las demás quedan inactivas. Es tu deber replicar el proceso Node y utilizar todas las CPU. La mayoría de las plataformas de ejecución modernas (por ejemplo, Kubernetes) permiten replicar instancias de la aplicación, pero no verifican que se utilicen todos los núcleos; este es su deber. Si la aplicación está alojada en un servidor básico, también es su deber utilizar alguna solución de replicación de procesos (por ejemplo, systemd).

**De lo contrario:** Es probable que tu aplicación utilice solo el 25% de sus recursos disponibles (!) O incluso menos. Ten en cuenta que un servidor típico tiene 4 núcleos de CPU o más, la implementación ingenua de Node.js utiliza solo 1 (¡incluso utilizando servicios PaaS como AWS beanstalk!)

🔗 [**Leer más: Utiliza todos los núcleos de la CPU**](./sections/production/utilizecpu.spanish.md)

<br/><br/>

## ![✔] 5.7. Crea un "end point de mantenimiento"

**TL;DR:** Descubre un conjunto de información relacionada con el sistema, como el uso de memoria y REPL, etc. en una API segura. Aunque es muy recomendable confiar en herramientas estándar y probadas, parte de la información valiosa y de las operaciones se obtienen más fácilmente usando código

**De lo contrario:** Descubrirás que estás realizando muchas "implementaciones de diagnóstico", es decir, el envío de código a producción solo para extraer cierta información con fines de diagnóstico.

🔗 [**Leer más: Crea un ‘endpoint de mantenimiento**](./sections/production/createmaintenanceendpoint.spanish.md)

<br/><br/>

## ![✔] 5.8. Descubre lo desconocido utilizando productos de APM

### `📝 #updated`

**TL;DR:** Considera agregar otra capa de seguridad a la pila de producción: APM. Si bien la mayoría de los síntomas y causas pueden detectarse mediante técnicas de monitoreo tradicionales, en un sistema distribuido hay más de lo que parece. Los productos de rendimiento y monitoreo de aplicaciones (también conocidos como APM) pueden ir automáticamente más allá del monitoreo tradicional y proporcionar una capa adicional de descubrimiento y experiencia para desarrolladores. Por ejemplo, algunos productos APM pueden resaltar una transacción que se carga demasiado lenta en el **lado del usuario final** y al mismo tiempo sugerir la causa raíz. Los APM también brindan más contexto para los desarrolladores que intentan solucionar un error de registro al mostrar en qué estaba ocupado el servidor cuando ocurrió el error. Por nombrar algunos ejemplos.

**De lo contrario:** Es posible que dediques un gran esfuerzo a medir el rendimiento de la API y los tiempos de inactividad, probablemente nunca te darás cuenta de cuáles son tus partes de código más lentas en un escenario del mundo real y cómo afectan a la experiencia de usuario

🔗 [**Leer más: Descubre errores y tiempos de inactividad utilizando productos APM**](./sections/production/apmproducts.spanish.md)

<br/><br/>

## ![✔] 5.9. Haz tu código listo para producción

**TL;DR:** Codifica con el fin en mente, planifica la producción desde el día 1. Esto suena un poco vago, así que he compilado algunos consejos de desarrollo que están estrechamente relacionados con el mantenimiento de la producción (haz clic en "Leer más")

**De lo contrario:** Un campeón mundial de IT/DevOps no salvará un sistema que está mal escrito

🔗 [**Leer más: Has tu código listo para producción**](./sections/production/productioncode.spanish.md)

<br/><br/>

## ![✔] 5.10. Mide y protege el uso de la memoria

**TL;DR:** Node.js tiene relaciones controversiales con la memoria: el motor v8 tiene límites suaves en el uso de la memoria (1,4 GB) y hay formas conocidas de perder memoria en el código de Node, por lo que es imprescindible observar la memoria de proceso de Node. En aplicaciones pequeñas, puedes medir la memoria periódicamente utilizando comandos de shell, pero en aplicaciones medianas y grandes, considera convertir tu observación de la memoria en un sistema de monitoreo robusto

**De lo contrario:** Tu proceso podría perder memoria al ritmo de cien megabytes por día, como le sucedió a [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Leer más:  Medir y proteger el uso de la memoria**](./sections/production/measurememory.spanish.md)

<br/><br/>

## ![✔] 5.11. Saca tus recursos frontend de Node

**TL;DR:** Sirve el contenido frontend usando middleware dedicado (nginx, S3, CDN) porque el rendimiento de Node se ve realmente afectado cuando se trata con muchos archivos estáticos debido a su modelo de único hilo. Una excepción a esta guía es cuando se hace server-side rendering.

**De lo contrario:** Tu único hilo Node estará ocupado transmitiendo cientos de archivos html / images / angular / react en lugar de asignar todos sus recursos para la tarea para la que nació: servir contenido dinámico

🔗 [**Leer más: Saca tus recursos frontend de Node**](./sections/production/frontendout.spanish.md)

<br/><br/>

## ![✔] 5.12. Esfuerzate por ser stateless

**TL;DR:** Almacena cualquier tipo de _datos_ (por ejemplo, sesiones de usuario, caché, archivos cargados) en almacenes de datos externos. Cuando la aplicación mantiene datos en proceso, esto agrega una capa adicional de complejidad de mantenimiento, como enrutar a los usuarios a la misma instancia y un mayor costo de reiniciar un proceso. Para imponer y fomentar un enfoque sin estado, la mayoría de las plataformas de ejecución modernas permiten "reaplicar" instancias periódicamente.

**De lo contrario:** Un fallo en un servidor dará como resultado el tiempo de inactividad de la aplicación en lugar de simplemente matar una máquina defectuosa. Además, la elasticidad de escalamiento será más difícil debido a la dependencia de un servidor específico

🔗 [**Leer más: Se stateless, mata tus servidores casi todos los días**](./sections/production/bestateless.spanish.md)

<br/><br/>

## ![✔] 5.13. Usa herramientas que detecten automáticamente vulnerabilidades

**TL;DR:** Incluso las dependencias de mayor reputación como Express tienen vulnerabilidades conocidas (de vez en cuando) que pueden poner en riesgo un sistema. Esto se puede manejar fácilmente usando herramientas comunitarias y comerciales que constantemente verifican vulnerabilidades y advierten (localmente o en GitHub), algunas incluso pueden parchearlas de inmediato

**De lo contrario:** Mantener tu código limpio de vulnerabilidades sin herramientas dedicadas requerirá que sigas constantemente las publicaciones en línea sobre nuevas amenazas. Bastante tedioso

🔗 [**Leer más: Usa herramientas que detecten vulnerabilidades automáticamente**](./sections/production/detectvulnerabilities.spanish.md)

<br/><br/>

## ![✔] 5.14. Asigna un id de transacción a cada registro del log

**TL;DR:** Asigna el mismo identificador, id-transacción: uuid(), a cada entrada de registro dentro de una solicitud (también conocido como correlation id, tracing id, request context, etc.). Luego, al inspeccionar los errores en los logs, encontrarás fácilmente lo que sucedió antes y después. Node tiene un mecanismo incorporado, [AsyncLocalStorage](https://nodejs.org/api/async_context.html), para mantener el mismo contexto en llamadas asincrónicas. Ver los ejemplos de código dentro.

**De lo contrario:** Ver un log de error de producción sin el contexto, lo que sucedió antes, hace que sea mucho más difícil y lento razonar sobre el problema.

🔗 [**Leer más: Asigna un ‘TransactionId’ a cada registro de log**](./sections/production/assigntransactionid.spanish.md)

<br/><br/>

## ![✔] 5.15. Establece `NODE_ENV=production`

**TL;DR:** Establece la variable de entorno NODE_ENV a "producción" o "desarrollo" para marcar si las optimizaciones de producción deben activarse; muchos paquetes npm determinan el entorno actual y optimizan su código para la producción

**De lo contrario:** Omitir esta simple propiedad podría degradar en gran medida el rendimiento. Por ejemplo, cuando se usa Express para la representación del lado del servidor, omitir `NODE_ENV` lo hace un tercio más lento.

🔗 [**Leer más: Establecer NODE_ENV=production**](./sections/production/setnodeenv.spanish.md)

<br/><br/>

## ![✔] 5.16. Diseña despliegues automatizados, atómicos y sin tiempo de inactividad

**TL;DR:** Las investigaciónes muestran que los equipos que realizan muchas implementaciones reducen la probabilidad de problemas graves de producción. Las implementaciones rápidas y automatizadas que no requieren pasos manuales riesgosos y el tiempo de inactividad del servicio mejoran significativamente el proceso de implementación. Deberías lograr esto usando Docker combinado con herramientas de CI, ya que se convirtieron en el estándar de la industria para la implementación simplificada

**De lo contrario:** Implementaciones largas -> tiempo de inactividad de producción y error humano -> equipo desconfiado en la implementación -> menos implementaciones y características

<br/><br/>

## ![✔] 5.17. Usa una versión LTS de Node.js

**TL;DR:** Asegúrate de estar utilizando una versión LTS (de soporte a largo plazo) de Node.js para recibir correcciones de errores críticos, actualizaciones de seguridad y mejoras de rendimiento.

**De lo contrario:** Los errores o vulnerabilidades recientemente descubiertos podrían utilizarse para explotar una aplicación que se ejecuta en producción, y su aplicación puede dejar de ser compatible con varios módulos y ser más difícil de mantener

🔗 [**Leer más: Usa una versión LTS de Node.js**](./sections/production/LTSrelease.spanish.md)

<br/><br/>

## ![✔] 5.18. Loguea hacia stdout, evita especificar un destino de log dentro de la aplicación

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

## ![✔] 6.1. Adopta las reglas de seguridad del linter

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

## ![✔] 6.3. Quita los secretos de los archivos de configuración o utiliza paquetes para cifrarlos

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Nunca almacenes secretos sin formato en archivos de configuración o código fuente. En su lugar, utiliza sistemas de gestión secreta como productos Vault, Kubernetes / Docker Secrets o variables de entorno. Como último recurso, los secretos almacenados en el control de código fuente deben ser encriptados y administrados (claves rodantes, vencimiento, auditoría, etc.). Utiliza los ganchos en pre-commit/push para evitar que se guarden secretos accidentalmente

**De lo contrario:** El control del código fuente, incluso para repositorios privados, puede hacerse público por error, momento en el que se exponen todos los secretos. El acceso al control de origen para una parte externa proporcionará inadvertidamente acceso a sistemas relacionados (bases de datos, API, servicios, etc.).

🔗 [**Leer más: Manejo de secretos**](./sections/security/secretmanagement.spanish.md)

<br/><br/>

## ![✔] 6.4. Evita vulnerabilidades de inyección de consultas con bibliotecas ORM / ODM

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

## ![✔] 6.7. Inspecciona constante y automáticamente en busca de dependencias vulnerables

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** Con el ecosistema npm es común tener muchas dependencias para un proyecto. Las dependencias siempre deben mantenerse bajo control a medida que se encuentran nuevas vulnerabilidades. Usa herramientas como [npm audit](https://docs.npmjs.com/cli/audit) o [snyk](https://snyk.io/) para rastrear, monitorear y parchear dependencias vulnerables. Integra estas herramientas con su configuración de CI para que pueda detectar una dependencia vulnerable antes de que llegue a producción.

**De lo contrario:** Un atacante podría detectar su framework web y atacar todas sus vulnerabilidades conocidas.

🔗 [**Leer más: Seguridad de dependencias**](./sections/security/dependencysecurity.spanish.md)

<br/><br/>

## ![✔] 6.8. Protege las contraseñas/secretos de sus usuarios usando bcrypt o scrypt

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

## ![✔] 6.10. Valida esquemas JSON entrantes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Valida la carga útil del cuerpo de las solicitudes entrantes y asegúrese de que cumpla con las expectativas, falle rápidamente si no lo hace. Para evitar la tediosa codificación de validación dentro de cada ruta, puede usar esquemas de validación ligeros basados en JSON, como [jsonschema](https://www.npmjs.com/package/jsonschema) o [joi](https://www.npmjs.com/package/joi)

**De lo contrario:** Tu generosidad y enfoque permisivo aumentan enormemente la superficie de ataque y ayuda al atacante a probar muchas entradas hasta que encuentren alguna combinación para bloquear la aplicación.

🔗 [**Leer más: Valida esquemas JSON entrantes**](./sections/security/validation.spanish.md)

<br/><br/>

## ![✔] 6.11. Soporta listas de bloqueo de JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Cuando se usan tokens web JSON (por ejemplo con [Passport.js](https://github.com/jaredhanson/passport)), de manera predeterminada, no existe un mecanismo para revocar el acceso de los tokens emitidos. Una vez que descubres alguna actividad maliciosa de los usuarios, no hay forma de evitar que accedan al sistema siempre que tengan un token válido. Soluciona esto implementando una lista negra de tokens no confiables que se validan en cada solicitud.

**De lo contrario:** Los tokens caducados o extraviados pueden ser utilizados maliciosamente por un tercero para acceder a una aplicación y hacerse pasar por el propietario del token.

🔗 [**Leer más: Bloquea JSON Web Tokens caducados**](./sections/security/expirejwt.spanish.md)

<br/><br/>

## ![✔] 6.12. Evita ataques de fuerza bruta contra la autorización

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

## ![✔] 6.14. Limita el tamaño del mensaje utilizando un proxy inverso o un middleware

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

## ![✔] 6.16. Evita que una RegEx maliciosa sobrecargue la ejecución del único hilo

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Las expresiones regulares, aunque son prácticas, representan una amenaza real para las aplicaciones de JavaScript en general, y para la plataforma Node.js en particular. Una entrada de usuario para que el texto coincida puede requerir una cantidad excepcional de ciclos de CPU para procesar. El procesamiento de RegEx puede ser ineficiente hasta el punto de que una sola solicitud que valida 10 palabras puede bloquear todo el bucle de eventos durante 6 segundos y activar la CPU a 🔥. Por esa razón, escoge paquetes de validación de terceros como [validator.js](https://github.com/chriso/validator.js) en lugar de escribir sus propios patrones Regex, o hacer uso de [safe-regex](https://github.com/substack/safe-regex) para detectar patrones de expresiones regulares vulnerables

**De lo contrario:** Las expresiones regulares mal escritas pueden ser susceptibles a los ataques DoS de Expresión regular que bloquearán el bucle de eventos por completo. Por ejemplo, el popular paquete `moment` fue encontrado vulnerable con el uso malicioso de RegEx en noviembre de 2017

🔗 [**Leer más: Evita RegEx malicioso**](./sections/security/regex.spanish.md)

<br/><br/>

## ![✔] 6.17. Evita cargar módulos usando variables

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

## ![✔] 6.19. Ten especial cuidado al trabajar con procesos secundarios

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Evita el uso de procesos secundarios cuando sea posible y valide y desinfecta la entrada para mitigar los ataques de inyección de shell si aún tienes que hacerlo. Usa `child_process.execFile` que, por definición, solo ejecutará un solo comando con un conjunto de atributos y no permitirá la expansión de parámetros de shell.

**De lo contrario:** El uso ingenuo de procesos secundarios podría provocar la ejecución remota de comandos o ataques de inyección de shell debido a la entrada maliciosa del usuario transmitida a un comando del sistema no desinfectado.

🔗 [**Leer más: Ten cuidado al trabajar con procesos secundarios**](./sections/security/childprocesses.spanish.md)

<br/><br/>

## ![✔] 6.20. Oculta los detalles de error de los clientes

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

## ![✔] 6.22. Modifica la configuración del middleware de sesión

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Cada framework web y tecnología tiene sus debilidades conocidas: decirle a un atacante qué framework web utilizamos es de gran ayuda para ellos. El uso de la configuración predeterminada para middlewares de sesión puede exponer su aplicación a ataques de secuestro específicos de módulos y frameworks de manera similar al encabezado `X-Powered-By`. Intenta ocultar todo lo que identifique y revele tu stack tecnológico (por ejemplo, Node.js, express)

**De lo contrario:** Las cookies podrían enviarse a través de conexiones inseguras, y un atacante podría usar la identificación de sesión para identificar el framework subyacente de la aplicación web, así como las vulnerabilidades específicas del módulo

🔗 [**Leer más: Seguridad de Cookies y sesiones**](./sections/security/sessions.spanish.md)

<br/><br/>

## ![✔] 6.23. Evita los ataques de DoS estableciendo explícitamente cuándo debe fallar un proceso

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** El proceso de Node se bloqueará cuando no se manejen los errores. Muchas de las mejores prácticas incluso recomiendan salir a pesar de que se detectó un error y se manejó. Express, por ejemplo, se bloqueará en cualquier error asíncrono, a menos que ajuste las rutas con una cláusula catch. Esto abre un punto de ataque muy dulce para los atacantes que reconocen qué información hace que el proceso se bloquee y envían repetidamente la misma solicitud. No hay remedio instantáneo para esto, pero algunas técnicas pueden mitigar el dolor: alerta con severidad crítica cada vez que un proceso se bloquea debido a un error no controlado, valida la entrada y evita que el proceso se bloquee debido a una entrada inválida del usuario, envuelve todas las rutas con una captura y considera no bloquearse cuando se origine un error dentro de una solicitud (en oposición a lo que sucede globalmente)

**De lo contrario:** Esto es solo una suposición educada: dadas muchas aplicaciones de Node.js, si intentamos pasar un cuerpo JSON vacío a todas las solicitudes POST, un puñado de aplicaciones se bloqueará. En ese momento, podemos repetir el envío de la misma solicitud para eliminar las aplicaciones con facilidad

<br/><br/>

## ![✔] 6.24. Evita redirecciones inseguras

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
<br/><br/>

## ![✔] 6.26 Inspecciona los paquetes obsoletos

**TL;DR:** Usa tu herramienta preferida (e.g. 'npm outdated' o [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) para detectar paquetes instalados que están desactualizados, inyecte esta verificación en su canalización de CI e incluso haga que una compilación falle en un escenario grave. Por ejemplo, un escenario grave podría ser cuando un paquete instalado tiene 5 parches confirmados (por ejemplo, la versión local es 1.3.1 y la versión del repositorio es 1.3.8) o está etiquetado como obsoleto por su autor: elimine la compilación y evite implementar esto versión

**De lo contrario:** Su producción ejecutará paquetes que han sido etiquetados explícitamente por su autor como riesgosos
<br/><br/>

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


## ![✔] 7.2. Prefiere los métodos nativos de a las utilidades de usuario como Lodash

**TL;DR:** A menudo es más penalizador usar bibliotecas de utilidades como `lodash` y ` underscore` sobre los métodos nativos, ya que conduce a dependencias innecesarias y un rendimiento más lento.
Ten en cuenta que con la introducción del nuevo motor V8 junto con los nuevos estándares ES, los métodos nativos se mejoraron de tal manera que ahora es aproximadamente un 50% más eficiente que las bibliotecas de servicios públicos.

**De lo contrario:** Tendrás que mantener proyectos de menor rendimiento en los que simplemente podría haber usado lo que **ya estaba** disponible o haber tratado algunas líneas más a cambio de algunos archivos más.

🔗 [**Leer más: Nativo sobre implementaciones externas**](./sections/performance/nativeoverutil.spanish.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Volver arriba</a></p>

# `8. Mejores prácticas de Docker`

🏅 Muchas gracias a [Bret Fisher](https://github.com/BretFisher) de quien hemos aprendido muchas de las siguientes prácticas

<br/><br/>

## ![✔] 8.1. Utiliza compilaciones de múltiples etapas para obtener imágenes de Docker más sencillas y seguras

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

## ![✔] 8.2. Arranca usando el comando `node`, evita `npm start`

**TL;DR:** usa `CMD ['node', 'server.js']` para iniciar su aplicación, evita usar los scripts de npm, los cuales no pasan señales del sistema operativo (OS) al código. Para prevenir estos problemas en los procesos secundarios, manejo de señales y apagado simple sin tener procesos zombie.

**De lo contrario** Cuando no se pasan señales, su código nunca será notificado cuando se detenga el proceso, Sin esto, Se perderá la oportunidad de cerrar de manera apropiada, posiblemente perdiendo peticiones o datos actuales.

🔗 [**Leer más: Arranque usando node, evite npm start**](./sections/docker/bootstrap-using-node.spanish.md)


<br><br><br>

## ![✔] 8.3. Permite a Docker maneje la replicación y el tiempo de ejecución

**TL;DR:** Cuando se usa un manejador de tiempo de ejecución de Docker (Por ejemplo, Kubernetes), invoque el proceso de Node.js directamente, sin manejadores de proceso intermedios o código personalizado que replica el proceso (Por ejemplo, PM2, Cluster Module). La plataforma de tiempo de ejecución tiene la mayor cantidad de datos y visibilidad al hacer la decisión de posicionamiento: Sabe mejor que nadie cuantos procesos son necesarios, como distribuirlos y que hacer en caso de errores.

**De lo contrario** El contenedor sigue cayendo debido a la escasez de recursos se estará reiniciando de manera indefinida por el manejador de procesos. Si Kubernetes supiera esto, lo podría redirreccionar a una instancia diferente.

🔗 [**Leer más: Permita al manejador Docker reiniciar y replicar procesos**](./sections/docker/restart-and-replicate-processes.spanish.md)

<br><br><br>

## ![✔] 8.4. Utiliza .dockerignore para evitar la fuga de secretos

**TL;DR:** Incluye un archivo `.dockerignore` que filtra todos los archivos con secretos comúnes y artefactos de desarrollo. Al hacer esto. Puede evitar que sus secretos salgan a la luz. Ademas el tiempo de compilación se va a reducir de manera significante. También asegúrese de no copiar todos los archivos recursivamente, mejor selecciones cuales deben ser copiados a docker de manera explícita.

**De lo contrario** Archivos comúnes de secretos como `.env`, `.aws`, y `.npmrc` serán compartidos con cualquiera que tenga acceso a la imágen (Por ejemplo un repositorio Docker).

🔗 [**Leer más: Utiliza .dockerignore**](./sections/docker/docker-ignore.spanish-md)

<br><br><br>

## ![✔] 8.5. Limpia las dependencias antes de ir a producción

**TL;DR:** Aunque algunas dependencias de desarrollo son necesarios durante los ciclos de compilación y prueba, eventualmente la imágen que será enviada a producción debe estar los mas limpia posible de dependencias de desarrollador. Haciendo esto garantiza que solo el código necesario es cargado y la cantidad de ataques potenciales (Por ejemplo. attack surface (ataque de superficie)) sea mínimo. Cuando se use compilación multi-pasos (Vea punto dedicado) esto puede ser logrado al instalar todas las dependencias primero y finalmente ejecutar `npm ci --production`.

**De lo contrario** Muchas brechas de seguridad conocidas fueron encontradas dentro de paquetes de desarrollo (Por ejemplo. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes)).

🔗 [**Leer más: Remueva dependencias de desarrollo**](./sections/docker/install-for-production.spanish.md)

<br><br><br>

## ![✔] 8.6. Apaga de manera inteligente y elegante

**TL;DR:** Maneje el evento de proceso SIGTERM y limpie todas las conexiones existentes y recursos. Esto debería hacerse mientra se responden a peticiones activas. En tiempos de ejecución de Docker, apagar contenedores no es un evento raro, sino un evento frecuente que es parte de una rutina de trabajo. Hacer esto requiere un código bien pensado para manejar muchas partes separadas: El balance de carga, mantener las conexiones, el servidor HTTP y otros recursos.

**De lo contrario** Apagando de manera inmediata significa no responder a cientos de usuarios decepcionados.

🔗 [**Leer más: Apagado gentil**](./sections/docker/graceful-shutdown.spanish.md)

<br><br><br>

## ![✔] 8.7. Establece límites de memoria utilizando Docker y v8

**TL;DR:** Siempre configure un límite de memoria utilizando Docker y las marcas de tiempo de ejecución de JavaScript. El límite de Docker es necesario para hacer decisiones de posicionamiento bien pensadas, la marca --v8 max-old-space es necesaria para arrancar el GC a tiempo y prevenir desperdicio de recursos. En la práctica, asignale a la marca max-old-space de v8 un tamaño un poco menor al límite del contenedor.

**De lo contrario** La definición de Docker es necesaria para realizar decisiones bien pensadas de escalación y prevenir la escasez para otros procesos. Si tampoco defines los límites de v8, no va a utilizar completamente los recursos de contenedor; Sin instrucciones explícitas, se colapsará cuando se use ~50-60% de los recursos del host

🔗 [**Leer más: Asigne límites de memoria en Docker**](./sections/docker/memory-limit.spanish.md)

<br><br><br>

## ![✔] 8.8. Planifica un almacenamiento en caché eficiente

**TL;DR:** Re-compilar toda la imágen de Docker mediante caché puede ser casi instantáneo si se hace correctamente. Las instrucciones que se actualizan con menor frecuencia deben estar hasta arriba en su Dockerfile y las que cambian constantemente (Como el código de la aplicación) deberían estar hasta abajo.

**De lo contrario** La compilación de Docker va a ser muy larga y consumir demasiados recursos, incluso al hacer cambios menores.

🔗 [**Leer más: Maneje el caché para reducir tiempos de compilación**](./sections/docker/use-cache-for-shorter-build-time.spanish.md)

<br><br><br>

## ![✔] 8.9. Utiliza una referencia de imagen explícita, evita la etiqueta `latest`

**TL;DR:** Especifíque la etiqueta de versión de la imágen de manera explícita, nunca utilice `latest`. Desarrolladores piensan que al especificar la etiqueta `latest` recibirán la imágen mas reciente del repositorio, Sin embargo, este no es el caso, Usando una explícita garantiza que cada instancia del servicio esta corriendo exactamente el mismo código.

Como extra, refiriéndose a una etiqueta de imágen significa que la imágen base esta sujeta a cambios, por ello las etiquetas de imágen no pueden ser confiables para una instalación determinista. En su lugar, si se espera un instalación determinista una SHA256 puede ser usada como referencia a la imágen exacta.

**De lo contrario** Una nueva versión de la imágen base puede ser desplegada a producción con cambios severos, causando comportamiento anormal.

🔗 [**Leer más: Entender las etiquetas de imágen y utilizar las etiqueta "lates" con precaución**](./sections/docker/image-tags.spanish.md)

<br><br><br>

## ![✔] 8.10. Prefiere imágenes base de Docker pequeñas

**TL;DR:** Imágenes grandes conducen a una mayor exposición de vulnerabilidades y a un aumento del uso de recursos. Usando imágenes mas apoyadas como Slim y Alpine Linux reduce este problema.

**De lo contrario** Compilar, enviar y recibir cambios de imágenes va a tomar mas tiempo, terceros pueden utilizar ataques de vectores desconocidos y consumir mar recursos.

🔗 [**Leer más: Utilice imágenes pequeñas**](./sections/docker/image-tags.spanish.md)

<br><br><br>

## ![✔] 8.11. Limpia los secretos de tiempo de compilación, evita los secretos en args

**TL;DR:** Evita la fuga de secretos en el entorno compilación de Docker. Una imágen de Docker normalmente es compartida por multiples entornos como CI y un registro que no está tan limpio como producción. Un ejemplo común is un token npm que suele ser pasado a dockerfile como argumento. Este token permanece en la imágen después de ser utilizada y permite al atacante acceso indefinido a un registro npm privado. Esto puede ser evitado al copiar un archivo secreto como `.npmrc` y después removiéndolo usando la compilación multi-pasos (Cuidado, la historia de compilación debe ser borrada también) o usando el build-kit de Docker que no deja ningún rastro.

**De lo contrario** Cualquiera con acceso al CI y al registro Docker también tendrá acceso a unos preciosos secretos de la empresa como regalo.

🔗 [**Leer más: Limpia tus secretos de tiempo de compilación**](./sections/docker/avoid-build-time-secrets.spanish.md)

<br><br><br>

## ![✔] 8.12. Escanea las imágenes en busca de vulnerabilidades multi-capas

**TL;DR:** Además de revisar vulnerabilidades de las dependencias, escanee la imágen final que será enviada a producción, Los escáneres de imágen de Docker revisan las dependencias del código, pero también los binarios del sistema operativo (OS binaries). Este escaneo de seguridad de punto a punto abarca mas espacio y verifica que nadie haya implantado cosas maliciosas durante la compilación. Consecuentemente, se recomienda hacer esto como último paso antes del despliegue. Hay una buena cantidad de escáneres gratuitos y de paga que también proporcionan extensiones CI/CD.

**De lo contrario** Su código puede estar completamente libre de vulnerabilidades. Pero puede llegar a ser hackeado debido a una version vulnerable de los binarios a nivel SO (Por ejemplo. OpenSSL, TarBall), los cuales son usados comúnmente por las aplicaciones.

🔗 [**Leer más: Escanea la imágen completa antes de producción**](./sections/docker/scan-images.spanish.md)

<br><br><br>

## ![✔] 8.13. Limpia la caché de NODE_MODULE

**TL;DR:** Después de instalar dependencias en un contenedor remueva el caché local. No tiene sentido duplicar las dependencias para instalaciones mas rápidas futuras, debido a que no habrá instalaciones futuras. Una imágen de Docker is inmutable. Utilizando una sola línea de código decenas de MB (normalmente ~10-50% del tamaño de la imágen) son podados.

**De lo contrario** La imágen que será enviada a producción pesara un 30% extra debido a archivos que no serán utilizados.

🔗 [**Leer más: Limpie el caché de NODE_MODULE**](./sections/docker/clean-cache.spanish.md)

<br><br><br>

## ![✔] 8.14. Prácticas generales de Docker

**TL;DR:** Esta es una colección de los consejos de Docker que no están relacionados directamente con Docker: La implementación de Docker no es muy diferente a cualquier otro lenguaje, Da click en leer más para mas información.

🔗 [**Leer más: Prácticas de Docker generales](./sections/docker/generic-tips.spanish.md)

<br><br><br>

## ![✔] 8.15. Utiliza un linter en tu Dockerfile

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

Conozca a los miembros del comité directivo: las personas que trabajan juntas para brindar orientación y dirección al proyecto. Además, cada miembro del comité lidera un proyecto seguido bajo nuestros [proyectos Github](https://github.com/goldbergyoni/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png"/>

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Consultor independiente de Node.js que trabaja con clientes en EE. UU., Europa e Israel en la construcción de aplicaciones Node.js a gran escala. Muchas de las mejores prácticas anteriores se publicaron por primera vez en [goldbergyoni.com](https://goldbergyoni.com). Comuníquese con Yoni a través de [@goldbergyoni](https://github.com/goldbergyoni) o [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<a id="josh-hemphill" href="https://github.com/josh-hemphill" target="_blank"><img src="assets/images/members/josh-hemphill.png" align="left" width="100" height="100" alt="Josh Hemphill" loading="lazy"/></a>

[Josh Hemphill](https://github.com/josh-hemphill)
<a href="https://twitter.com/spooklogical"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/joshuahemphill/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://joshuahemphill.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Ingeniero / desarrollador web full-stack especializado en Seguridad, DevOps/DevSecOps e integraciones con ERPs.

<br/>

<a id="raz-luvaton" href="https://github.com/rluvaton" target="_blank"><img src="assets/images/members/raz-luvaton.jpg" align="left" width="100" height="100" alt="Raz Luvaton" loading="lazy"/></a>

[Raz Luvaton](https://github.com/rluvaton)
<a href="https://twitter.com/rluvaton"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/rluvaton/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Desarrollador Full Stack que sabe salir de Vim y ama la Arquitectura, la Virtualización y la Seguridad.

<br/>

## Colaborar

Si alguna vez quisiste colaborar en código abierto, ¡ahora es tu oportunidad! Consulta los [documentos de colaboración](/.operations/CONTRIBUTING.spanish.md) para obtener más información.

## Colaboradores

¡Gracias a estas maravillosas personas que han contribuido a este repositorio!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4" width="100px;" alt="Kevin Rambaud"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4" width="100px;" alt="Michael Fine"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4" width="100px;" alt="Shreya Dahal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4" width="100px;" alt="Matheus Cruz Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4" width="100px;" alt="Yog Mehta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4" width="100px;" alt="Kudakwashe Paradzayi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4" width="100px;" alt="t1st3"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4" width="100px;" alt="mulijordan1976"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4" width="100px;" alt="Matan Kushner"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4" width="100px;" alt="Fabio Hiroki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4" width="100px;" alt="James Sumners"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4" width="100px;" alt="Dan Gamble"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4" width="100px;" alt="PJ Trainor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4" width="100px;" alt="Remek Ambroziak"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4" width="100px;" alt="Yoni Jah"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4" width="100px;" alt="Misha Khokhlov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4" width="100px;" alt="Evgeny Orekhov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4" width="100px;" alt="-"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4" width="100px;" alt="Isaac Halvorson"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4" width="100px;" alt="Vedran Karačić"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4" width="100px;" alt="lallenlowe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4" width="100px;" alt="Nathan Wells"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4" width="100px;" alt="Paulo Reis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4" width="100px;" alt="syzer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4" width="100px;" alt="David Sancho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4" width="100px;" alt="Robert Manolea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4" width="100px;" alt="Xavier Ho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4" width="100px;" alt="Aaron"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4" width="100px;" alt="Jan Charles Maghirang Adona"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4" width="100px;" alt="Allen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4" width="100px;" alt="Leonardo Villela"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4" width="100px;" alt="Michał Załęcki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4" width="100px;" alt="Chris Nicola"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4" width="100px;" alt="Alejandro Corredor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4" width="100px;" alt="cwar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4" width="100px;" alt="Yuwei"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4" width="100px;" alt="Utkarsh Bhatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4" width="100px;" alt="Duarte Mendes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4" width="100px;" alt="Jason Kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4" width="100px;" alt="Mitja O."style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4" width="100px;" alt="Sandro Miguel Marques"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4" width="100px;" alt="Gabe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4" width="100px;" alt="Ron Gross"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4" width="100px;" alt="Valeri Karpov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4" width="100px;" alt="Sergio Bernal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4" width="100px;" alt="Nikola Telkedzhiev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4" width="100px;" alt="Vitor Godoy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4" width="100px;" alt="Manish Saraan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4" width="100px;" alt="Sangbeom Han"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4" width="100px;" alt="blackmatch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4" width="100px;" alt="Joe Reeve"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4" width="100px;" alt="Ryan Busby"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4" width="100px;" alt="Iman Mohamadi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4" width="100px;" alt="Sergii Paryzhskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4" width="100px;" alt="Kapil Patel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4" width="100px;" alt="迷渡"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4" width="100px;" alt="Hozefa"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4" width="100px;" alt="Ethan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4" width="100px;" alt="Sam"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4" width="100px;" alt="Arlind"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4" width="100px;" alt="Teddy Toussaint"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4" width="100px;" alt="Lewis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4" width="100px;" alt="Gabriel Lidenor "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4" width="100px;" alt="Roman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4" width="100px;" alt="Francozeira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4" width="100px;" alt="Invvard"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4" width="100px;" alt="Rômulo Garofalo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4" width="100px;" alt="Tho Q Luong"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4" width="100px;" alt="Burak Shen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4" width="100px;" alt="Martin Muzatko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4" width="100px;" alt="Jared Collier"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4" width="100px;" alt="Hilton Meyer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4" width="100px;" alt="ChangJoo Park(박창주)"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4" width="100px;" alt="Masahiro Sakaguchi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4" width="100px;" alt="Keith Holliday"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4" width="100px;" alt="coreyc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;" alt="Maximilian Berkmann"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4" width="100px;" alt="Douglas Mariano Valero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4" width="100px;" alt="Marcelo Melo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4" width="100px;" alt="Mehmet Perk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4" width="100px;" alt="ryan ouyang"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4" width="100px;" alt="Shabeer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4" width="100px;" alt="Eduard Kyvenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4" width="100px;" alt="Deyvison Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4" width="100px;" alt="George Mamer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4" width="100px;" alt="Konstantinos Leimonis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4" width="100px;" alt="Oliver Lluberes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4" width="100px;" alt="Tien Do"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4" width="100px;" alt="Ranvir Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4" width="100px;" alt="Vadim Nicolaev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4" width="100px;" alt="German Gamboa Gonzalez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4" width="100px;" alt="Hafez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4" width="100px;" alt="Chandiran"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4" width="100px;" alt="VinayaSathyanarayana"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4" width="100px;" alt="Kim Kern"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4" width="100px;" alt="Kenneth Freitas"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4" width="100px;" alt="songe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4" width="100px;" alt="Kirill Shekhovtsov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4" width="100px;" alt="Serge"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4" width="100px;" alt="keyrwinz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4" width="100px;" alt="Dmitry Nikitenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4" width="100px;" alt="bushuai"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4" width="100px;" alt="Benjamin Gruenbaum"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4" width="100px;" alt="Ezequiel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4" width="100px;" alt="Juan José Rodríguez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4" width="100px;" alt="Or Bin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4" width="100px;" alt="Andreo Vieira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4" width="100px;" alt="Michael Solomon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4" width="100px;" alt="Jimmy Callin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4" width="100px;" alt="Siddharth"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4" width="100px;" alt="Ryan Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4" width="100px;" alt="Tom Boettger"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4" width="100px;" alt="Joaquín Ormaechea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4" width="100px;" alt="dfrzuz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4" width="100px;" alt="Victor Homyakov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4" width="100px;" alt="Josh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4" width="100px;" alt="Alec Francis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4" width="100px;" alt="arjun6610"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4" width="100px;" alt="Jan Osch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4" width="100px;" alt="Thiago Rotondo Sampaio"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4" width="100px;" alt="Alexsey"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4" width="100px;" alt="Luis A. Acurero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4" width="100px;" alt="Lucas Romano"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4" width="100px;" alt="Denise Case"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4" width="100px;" alt="Nick Ribal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Aelektronik2k5" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4" width="100px;" alt="0xflotus"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4" width="100px;" alt="Jonathan Chen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4" width="100px;" alt="Dilan Srilal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4" width="100px;" alt="vladthelittleone"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4" width="100px;" alt="Nik Osvalds"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4" width="100px;" alt="Daniel Kiss"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/forresst17"><img src="https://avatars2.githubusercontent.com/u/163352?v=4" width="100px;" alt="Forresst"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Forresst</b></sub></a><br /><a href="#content-forresst" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/svenheden"><img src="https://avatars1.githubusercontent.com/u/76098?v=4" width="100px;" alt="Jonathan Svenheden"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Svenheden</b></sub></a><br /><a href="#content-svenheden" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AustrisC"><img src="https://avatars2.githubusercontent.com/u/12381652?v=4" width="100px;" alt="AustrisC"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>AustrisC</b></sub></a><br /><a href="#content-AustrisC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cisco0808"><img src="https://avatars0.githubusercontent.com/u/60251188?v=4" width="100px;" alt="kyeongtae kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kyeongtae kim</b></sub></a><br /><a href="#translation-cisco0808" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://keybase.io/651z9pz968v2accj"><img src="https://avatars.githubusercontent.com/u/65741741?v=4" width="100px;" alt="007"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>007</b></sub></a><br /><a href="#content-6gx7iycn53ioq2e8apk1j1ypwov4giui" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.anediaz.com"><img src="https://avatars.githubusercontent.com/u/17216937?v=4" width="100px;" alt="Ane Diaz de Tuesta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ane Diaz de Tuesta</b></sub></a><br /><a href="#translation-anediaz" title="Translation">🌍</a> <a href="#content-anediaz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://yukioh.net"><img src="https://avatars.githubusercontent.com/u/23182489?v=4" width="100px;" alt="YukiOta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>YukiOta</b></sub></a><br /><a href="#translation-YukiOta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yeovilhospital.co.uk/"><img src="https://avatars.githubusercontent.com/u/43814140?v=4" width="100px;" alt="Frazer Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Frazer Smith</b></sub></a><br /><a href="#content-Fdawgs" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rluvaton"><img src="https://avatars.githubusercontent.com/u/16746759?v=4" width="100px;" alt="Raz Luvaton"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Raz Luvaton</b></sub></a><br /><a href="#content-rluvaton" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YA21"><img src="https://avatars.githubusercontent.com/u/37298463?v=4" width="100px;" alt="Yuta Azumi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuta Azumi</b></sub></a><br /><a href="#content-YA21" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andrewjbarbour"><img src="https://avatars.githubusercontent.com/u/77080074?v=4" width="100px;" alt="andrewjbarbour"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>andrewjbarbour</b></sub></a><br /><a href="#content-andrewjbarbour" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://MasujimaRyohei.jp"><img src="https://avatars.githubusercontent.com/u/17163541?v=4" width="100px;" alt="mr"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mr</b></sub></a><br /><a href="#content-MasujimaRyohei" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kubanac95"><img src="https://avatars.githubusercontent.com/u/16191931?v=4" width="100px;" alt="Aleksandar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aleksandar</b></sub></a><br /><a href="#content-kubanac95" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vincentjonathan.com"><img src="https://avatars.githubusercontent.com/u/32597776?v=4" width="100px;" alt="Owl"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Owl</b></sub></a><br /><a href="#content-SuspiciousLookingOwl" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yedidyas"><img src="https://avatars.githubusercontent.com/u/36074789?v=4" width="100px;" alt="Yedidya Schwartz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yedidya Schwartz</b></sub></a><br /><a href="#content-yedidyas" title="Content">🖋</a> <a href="#example-yedidyas" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ariel-diaz"><img src="https://avatars.githubusercontent.com/u/20423540?v=4" width="100px;" alt="ari"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ari</b></sub></a><br /><a href="#content-ariel-diaz" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.koenigthomas.de/"><img src="https://avatars.githubusercontent.com/u/7080389?v=4" width="100px;" alt="Thomas König"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thomas König</b></sub></a><br /><a href="#content-Vispercept" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/coocos"><img src="https://avatars.githubusercontent.com/u/1397804?v=4" width="100px;" alt="Kalle Lämsä"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kalle Lämsä</b></sub></a><br /><a href="#content-coocos" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://math.cat"><img src="https://avatars.githubusercontent.com/u/10328430?v=4" width="100px;" alt="Wyatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Wyatt</b></sub></a><br /><a href="#content-ZhyMC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://libkhadir.fr"><img src="https://avatars.githubusercontent.com/u/45130488?v=4" width="100px;" alt="KHADIR Tayeb"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>KHADIR Tayeb</b></sub></a><br /><a href="#content-tkhadir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shankarregmi"><img src="https://avatars.githubusercontent.com/u/7703345?v=4" width="100px;" alt="Shankar Regmi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shankar Regmi</b></sub></a><br /><a href="#content-shankarregmi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/codebyshubham"><img src="https://avatars.githubusercontent.com/u/10389723?v=4" width="100px;" alt="Shubham"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shubham</b></sub></a><br /><a href="#content-codebyshubham" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://lucalves.me/"><img src="https://avatars.githubusercontent.com/u/17712401?v=4" width="100px;" alt="Lucas Alves"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Alves</b></sub></a><br /><a href="#content-lucalves" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benjaminudoh10"><img src="https://avatars.githubusercontent.com/u/9018331?v=4" width="100px;" alt="Benjamin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin</b></sub></a><br /><a href="#content-benjaminudoh10" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yjoer.com"><img src="https://avatars.githubusercontent.com/u/47742486?v=4" width="100px;" alt="Yeoh Joer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yeoh Joer</b></sub></a><br /><a href="#content-yjoer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.miigon.net"><img src="https://avatars.githubusercontent.com/u/16161991?v=4" width="100px;" alt="Miigon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Miigon</b></sub></a><br /><a href="#content-Miigon" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://brainstorage.me/Egregor2011"><img src="https://avatars.githubusercontent.com/u/3630318?v=4" width="100px;" alt="Rostislav Bogorad"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rostislav Bogorad</b></sub></a><br /><a href="#content-Egregor2011" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Flouse"><img src="https://avatars.githubusercontent.com/u/1297478?v=4" width="100px;" alt="Flouse"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Flouse</b></sub></a><br /><a href="#content-Flouse" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://taranttini.com"><img src="https://avatars.githubusercontent.com/u/6922125?v=4" width="100px;" alt="Tarantini Pereira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tarantini Pereira</b></sub></a><br /><a href="#content-taranttini" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kzmat"><img src="https://avatars.githubusercontent.com/u/34614358?v=4" width="100px;" alt="Kazuki Matsuo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kazuki Matsuo</b></sub></a><br /><a href="#content-kzmat" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/burkybang"><img src="https://avatars.githubusercontent.com/u/927886?v=4" width="100px;" alt="Adam Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Adam Smith</b></sub></a><br /><a href="#content-burkybang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://codekodo.tistory.com"><img src="https://avatars.githubusercontent.com/u/33795856?v=4" width="100px;" alt="Dohyeon Ko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dohyeon Ko</b></sub></a><br /><a href="#content-k906506" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vlad99902"><img src="https://avatars.githubusercontent.com/u/67615003?v=4" width="100px;" alt="Vladislav Legkov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vladislav Legkov</b></sub></a><br /><a href="#content-vlad99902" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kerolloz.github.io"><img src="https://avatars.githubusercontent.com/u/36763164?v=4" width="100px;" alt="Kerollos Magdy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kerollos Magdy</b></sub></a><br /><a href="#content-kerolloz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/erez-lieberman-b90b7219/"><img src="https://avatars.githubusercontent.com/u/3277260?v=4" width="100px;" alt="Erez Lieberman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Erez Lieberman</b></sub></a><br /><a href="#content-erezLieberman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/breno-macedo-ernani-de-s%C3%A1-110223158/"><img src="https://avatars.githubusercontent.com/u/48841329?v=4" width="100px;" alt="Breno Macedo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Breno Macedo</b></sub></a><br /><a href="#content-breno404" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JFernando122"><img src="https://avatars.githubusercontent.com/u/40414805?v=4" width="100px;" alt="Fernando Flores"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fernando Flores</b></sub></a><br /><a href="#translation-JFernando122" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/rafaelconcept/"><img src="https://avatars.githubusercontent.com/u/43880669?v=4" width="100px;" alt="Rafael Brito"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rafael Brito</b></sub></a><br /><a href="#translation-rafaelconcept" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emiliano-peralta-portfolio.vercel.app/"><img src="https://avatars.githubusercontent.com/u/63617637?v=4" width="100px;" alt="Emiliano Peralta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Emiliano Peralta</b></sub></a><br /><a href="#translation-emiperalta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lannex.github.io"><img src="https://avatars.githubusercontent.com/u/7369541?v=4" width="100px;" alt="Shin, SJ"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shin, SJ</b></sub></a><br /><a href="#content-lannex" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.benjaminforster.com"><img src="https://avatars.githubusercontent.com/u/12589522?v=4" width="100px;" alt="Benjamin Forster"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Forster</b></sub></a><br /><a href="#content-e-e-e" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DanieleFedeli"><img src="https://avatars.githubusercontent.com/u/37077048?v=4" width="100px;" alt="Daniele Fedeli"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniele Fedeli</b></sub></a><br /><a href="#content-DanieleFedeli" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/djob195"><img src="https://avatars.githubusercontent.com/u/17146669?v=4" width="100px;" alt="djob195"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>djob195</b></sub></a><br /><a href="#content-djob195" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/antspk"><img src="https://avatars.githubusercontent.com/u/78955792?v=4" width="100px;" alt="antspk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>antspk</b></sub></a><br /><a href="#content-antspk" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jjy0821.tistory.com/"><img src="https://avatars.githubusercontent.com/u/88075341?v=4" width="100px;" alt="정진영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>정진영</b></sub></a><br /><a href="#content-jjy821" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kkk-cashwalk"><img src="https://avatars.githubusercontent.com/u/91455122?v=4" width="100px;" alt="kkk-cashwalk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kkk-cashwalk</b></sub></a><br /><a href="#content-kkk-cashwalk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/apainintheneck"><img src="https://avatars.githubusercontent.com/u/42982186?v=4" width="100px;" alt="apainintheneck"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>apainintheneck</b></sub></a><br /><a href="#content-apainintheneck" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/koyanyaroo"><img src="https://avatars.githubusercontent.com/u/9715368?v=4" width="100px;" alt="Fajar Budhi Iswanda"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fajar Budhi Iswanda</b></sub></a><br /><a href="#content-koyanyaroo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jutiger"><img src="https://avatars.githubusercontent.com/u/97490806?v=4" width="100px;" alt="이주호"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>이주호</b></sub></a><br /><a href="#content-jutiger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MisterSingh"><img src="https://avatars.githubusercontent.com/u/44462019?v=4" width="100px;" alt="Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Singh</b></sub></a><br /><a href="#content-MisterSingh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alex-Dumitru"><img src="https://avatars.githubusercontent.com/u/43738450?v=4" width="100px;" alt="Alex Dumitru"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alex Dumitru</b></sub></a><br /><a href="#content-Alex-Dumitru" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lykhatskyi"><img src="https://avatars.githubusercontent.com/u/18104686?v=4" width="100px;" alt="Anton Lykhatskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Anton Lykhatskyi</b></sub></a><br /><a href="#content-lykhatskyi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EverythingAvailable"><img src="https://avatars.githubusercontent.com/u/81002379?v=4" width="100px;" alt="sangwonlee"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>sangwonlee</b></sub></a><br /><a href="#content-EverythingAvailable" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/euberdeveloper"><img src="https://avatars.githubusercontent.com/u/33126163?v=4" width="100px;" alt="Eugenio Berretta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eugenio Berretta</b></sub></a><br /><a href="#content-euberdeveloper" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/soranakk"><img src="https://avatars.githubusercontent.com/u/3930307?v=4" width="100px;" alt="soranakk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>soranakk</b></sub></a><br /><a href="#content-soranakk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/backend-joonyoung"><img src="https://avatars.githubusercontent.com/u/94430145?v=4" width="100px;" alt="고준영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>고준영</b></sub></a><br /><a href="#content-backend-joonyoung" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=backend-joonyoung" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GuilhermePortella"><img src="https://avatars.githubusercontent.com/u/59876059?v=4" width="100px;" alt="Guilherme Portella "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Guilherme Portella </b></sub></a><br /><a href="#content-GuilhermePortella" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.youtube.com/channel/UCBxzOQd2v9wWfiMDrf_RQ7A"><img src="https://avatars.githubusercontent.com/u/18497570?v=4" width="100px;" alt="André Esser"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>André Esser</b></sub></a><br /><a href="#content-Esser50K" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ShiChenCong"><img src="https://avatars.githubusercontent.com/u/22486446?v=4" width="100px;" alt="Scc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Scc</b></sub></a><br /><a href="#translation-ShiChenCong" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mauroaccornero.it"><img src="https://avatars.githubusercontent.com/u/1875822?v=4" width="100px;" alt="Mauro Accornero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mauro Accornero</b></sub></a><br /><a href="#content-mauroaccornero" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/no-yan"><img src="https://avatars.githubusercontent.com/u/63000297?v=4" width="100px;" alt="no-yan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>no-yan</b></sub></a><br /><a href="#content-no-yan" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### Comité Directivo Emérito

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/web.svg" width="16" height="16"></img></a>

💻 Ingeniero web de pila completa, entusiasta de Node.js y GraphQL.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png"/>

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Desarrollador Full Stack y Site Reliability Engineer con sede en Nueva Zelanda, interesado en la seguridad de aplicaciones web y en la arquitectura y construcción de aplicaciones Node.js que funcionen a escala global.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png"/>

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>

Desarrollador full-stack independiente con gusto por la Operación y la automatización.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/sagir.png"/>

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter.svg" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.svg" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/web.svg" width="16" height="16"></img></a>

Especialista experto en JavaScript y su ecosistema (React, Node.js, TypeScript, GraphQL, MongoDB, prácticamente cualquier cosa que involucre JS/JSON en cualquier capa del sistema), creando productos utilizando la plataforma web para las marcas más reconocidas del mundo. Miembro Individual de la Fundación Node.js.

# Instala paquetes con npm ci en producción

<br><br>

### Párrafo de explicación

Bloqueaste tus dependencias siguiendo [**Bloquea dependencias**](./lockdependencies.spanish.md), pero necesitas asegurarte que se usen las versiones exactas en producción.

Usando `npm ci` para instalar paquetes te permitirá hacer eso y más.
* Fallará si tu `package.json` y `package-lock.json` no coinciden (deberían) o si no tienes el archivo `package-lock.json`.
* Si un directorio `node_modules` existe, lo removerá automáticamente antes de instalar.
* ¡Es más rápido! Casi el doble según [la publicación de lanzamiento](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable).

### ¿Cuándo puede ser útil?
Tienes la garantía de que tu entorno CI o QA van a probar tu programa con exactamente la misma versión de paquete que será enviada después a producción.
También, si por alguna razón alguien modifica manualmente package.json, no a través de un comando de cli, pero directamente editando el package-json, un hoyo entre package.json y package-lock.json es creado y arroja un error.

### ¿Qué dice npm?

De la [documentación npm ci](https://docs.npmjs.com/cli/ci.html)
> This command is similar to npm-install, except it’s meant to be used in automated environments such as test platforms, continuous integration, and deployment – or any situation where you want to make sure you’re doing a clean install of your dependencies.

> Este comando es similar a npm-install, excepto, esta hecho para usarse en entornos automatizados, como una plataforma de pruebas, integración continua, y despliegue -  o cualquier otra situación donde quieras asegurarte que estas haciendo una instalación limpia de dependencias.

[Publicación de blog anunciando el lanzamiento del commando `ci`](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
>  The command offers massive improvements to both the performance and reliability of builds for continuous integration / continuous deployment processes, providing a consistent and fast experience for developers using CI/CD in their workflow.

> El comando ofrece una mejora masiva en cuanto a rendimiento y confiabilidad en compilaciones para procesos de integración continua o despliegue continuo, proporcionando una experiencia consistente y rápida para desarrolladores usando CI/CD en su flujo de trabajo

[npmjs: dependencias y dependencias de desarrollo](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file)
>    "dependencies": Packages required by your application in production.
>    "devDependencies": Packages that are only needed for local development and testing.

>    "dependencias": Paquetes requeridos para tu aplicación en producción.
>    "dependencias de desarrollo": Paquetes que solo son necesarios para el desarrollo y pruebas locales.

<br/><br/>
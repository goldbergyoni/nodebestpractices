# Utilice .dockerignore para prevenir la filtración de secretos

<br/><br/>

### Párrafo de explicación

El comando de compilación de Docker copia los archivos locales en el entorno de contexto de compilación a través de una red virtual. Tenga cuidado - las carpetas de desarrollo y CI contienen secretos como archivos .npmrc, .aws, .env y otros archivos confidenciales. En consecuencia, las imágenes de Docker pueden contener secretos y exponerlos en territorios inseguros (por ejemplo, repositorio de Docker, servidores de socios). En un mundo mejor, Dockerfile debería ser explícito sobre lo que se está copiando. Además de esto, incluya un archivo .dockerignore que actúa como la última red de seguridad que filtra las carpetas innecesarias y los secretos potenciales. Si lo hace, también aumenta la velocidad de compilación - al omitir las carpetas de desarrollo comunes que no tienen uso en producción (por ejemplo, .git, resultados de pruebas, configuración del IDE), el compilador puede utilizar mejor el caché y lograr un mejor rendimiento

<br/><br/>

### Código de ejemplo – Un buen .dockerignore predeterminado para Node.js

<details>
<summary><strong>.dockerignore</strong></summary>

```
**/node_modules/
**/.git
**/README.md
**/LICENSE
**/.vscode
**/npm-debug.log
**/coverage
**/.env
**/.editorconfig
**/.aws
**/dist
```

</details>

<br/><br/>

### Código antipatrón de ejemplo – Copia recursiva de todos los archivos

<details>
<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
# La siguiente línea copia todo
COPY . .

# El resto viene aquí

```

</details>

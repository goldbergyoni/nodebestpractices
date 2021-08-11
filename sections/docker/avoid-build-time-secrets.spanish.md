# Elimina los secretos de la fase de compilación, evita los secretos como argumentos

<br/><br/>

### Un párrafo explicativo


Una imagen de docker no es solo un montón de archivos, sino más bien múltiples capas que revelan lo que ocurrió durante el tiempo de compilación. En un escenario muy común, los desarrolladores necesitan el token npm durante el tiempo de compilación (principalmente para registros privados) - esto se consigue erróneamente al pasar el token como un argumento de tiempo de compilación. Puede parecer inocente y seguro, sin embargo, este token ahora puede ser obtenido desde el historial de Docker de la máquina del desarrollador, desde el registro de Docker y el CI. Un atacante que obtenga acceso a ese token es ahora capaz de escribir en el registro npm privado de la organización. Hay dos alternativas más seguras: la perfecta es usar la característica --secret de Docker (experimental desde Julio de 2020) la cual permite montar un archivo solo en tiempo de compilación. La segunda opción es usar una compilación de multiples etapas con argumentos, compilar y luego copiar solo los archivos necesarios a producción. La última técnica no enviará los secretos con las imágenes pero aparecerá en el historial local de Docker - Generalmente, esto se considerada lo suficientemente seguro para la mayoría de las organizaciones. 

<br/><br/>

### Ejemplo de código – Usando secretos montados de Docker (experimental pero estable)

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
# sintaxis = docker/dockerfile:1.0-experimental

FROM node:12-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# El resto viene aquí
```

</details>

<br/><br/>

### Ejemplo de código – Compilando de forma segura utilizando compilación de múltiples etapas

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist

RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc


FROM build as prod

COPY --from=build /dist /dist
CMD ["node", "index.js"]

# ARG y .npmrc no aparecerán en la imagen final, pero se pueden encontrar en la lista de imágenes no etiquetadas del daemon de Docker - asegúrese de eliminarlos.
```

</details>

<br/><br/>

### Ejemplo de código antipatrón – Usando argumentos de tiempo de compilación

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim

ARG NPM_TOKEN

WORKDIR /usr/src/app
COPY . /dist

RUN echo "//registry.npmjs.org/:\_authToken=\$NPM_TOKEN" > .npmrc && \
 npm ci --production && \
 rm -f .npmrc

# Eliminando el .npmrc dentro del mismo comando de copia no lo guardará dentro de la capa, sin embargo, se puede encontrar en el historial de imágenes

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Cita de Blog: "Estos secretos no se guardan en el último Docker"

Del Blog, [Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ)

> En Noviembre de 2018, Docker 18.09 introdujo una nueva bandera --secret para la compilación de docker. Esto nos permite pasar secretos desde un archivo a nuestras compilaciones de Docker. Estos secretos no se guardan en la imagen final de Docker, ninguna imagen intermedia o el historial de confirmación de la imagen. Con secretos de compilación, ahora puedes compilar de forma segura imágenes de Docker con paquetes npm privados sin argumentos de compilación ni compilaciones de múltiples etapas.

```

```

# Aprovechar el almacenamiento en caché para reducir los tiempos de compilación

## Explicación en un párrafo

Las imágenes de Docker son una combinación de capas, cada instrucción de su Dockerfile genera una capa. Lo cual el servicio residente de Docker (i.e. Deamon Docker) puede reutilizar esas capas entre compilaciones sí cada instrucción son idénticas o en el caso de no cambiar los archivos utilizados por las instrucciones de `COPY` o `ADD`. ⚠️ Si al momento de que el caché falle en una capa particular, las demás capas posteriores se invalidarán. Por lo tanto el orden es importante, ya que es crucial que cada capa de tu Dockerfile sea correcta para reducir el número de instrucciones de compilación, es decir las instrucciones que requieran menores cambios deberán estar en la parte inferior mientras que las instrucciones con constantes cambios (e.g. el código de tu proyecto) deberán estar en la parte inferior. De igual manera, es importante pensar que las instrucciones que desencadenan una operación prolongada deberían estar en la parte superior para garantizar que sucedan solo cuando sea realmente necesario (al menos que en cada cambio construya una imagen de Docker). Por lo tanto, la reconstrucción de una imagen desde el caché puede ser casi instantánea si se hace correctamente. 

![Capas en Docker](../../assets/images/docker_layers_schema.png)

* Imagen tomada desde el artículo, [Digging into Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612), escrita por essgreb01*

### Reglas

#### Evitar las etiquetas con constantes cambios

Sí tienen una etiqueta en la parte superior con un gran número de cambios, la caché se invalidará en cada compilación.

```Dockerfile
#Inicio del archivo
FROM node:10.22.0-alpine3.11 as builder

# ¡No hagas esto aquí!
LABEL build_number="483"

#... El resto del archivo de Dockerfile
```

#### Haz un buen archivo de .dockerignore 

[**Leé: La importancia de docker ignore**](./docker-ignore.spanish.md)

El docker ignore evita copiar los archivos que pueden consumir la memoria caché, tal como los resultados de reportes, registros (e.g. logs) o archivos temporales.

#### Instala primero los paquetes del "sistema"

Es recomendado crear una base para la imagen de Docker que contenga todos los paquetes del sistema a utilizar. Si es realmente necesario instalar paquetes usando `apt`, `yum`, `apk` o algo por el estilo, debes ser una de las primeras instrucciones. No debes reinstalar `make`, `gcc` o `g++` cada vez que compiles tu aplicación en Node.
**No instales paquetes a tu conveniencia, esta es una aplicación de producción**

#### Primero debes agregar tu package.json y tu package-lock.json

```Dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
```

Ambos archivos cambian con menor frecuencia. Copiarlos primero mantendrá el paso de `npm install` en la caché, lo cual ahorrarás tiempo valioso.
 
### Después copia todos los archivos y realiza un paso de compilación (si es necesario)

```Dockerfile
COPY . .
RUN npm run build
```

## Ejemplos

### Ejemplo básico con node_modules que necesitan dependencias del Sistema Operativo.
```Dockerfile
#Crea una imagen de Node con un alias
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci --production
COPY . "./"


FROM node as app

USER node
WORKDIR /app
COPY --from=builder /app/ "./"
RUN npm prune --production

CMD ["node", "dist/server.js"]
```


Ejemplo que necesita un paso de compilación (e.g. cuando se utiliza typescript)
```Dockerfile
#Crea una imagen de Node con un alias
FROM node:10.22.0-alpine3.11 as builder

RUN apk add --no-cache \
    build-base \
    gcc \
    g++ \
    make

USER node
WORKDIR /app
COPY "package.json" "package-lock.json" "./"
RUN npm ci
COPY . .
RUN npm run build


FROM node as app

USER node
WORKDIR /app
# Copia únicamente los archivos que se necesita
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist dist
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

## Hipervínculos de ayuda

Documentación de Docker: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache

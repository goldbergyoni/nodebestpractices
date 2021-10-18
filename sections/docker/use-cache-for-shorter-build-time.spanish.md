# Aprovechar el almacenamiento en caché para reducir los tiempos de compilación

## Párrafo de explicación

Las imágenes de Docker son una combinación de capas, cada instrucción de su Dockerfile genera una capa. Puede reutilizar esas capas entre compilaciones sí cada instrucción son idénticas o en el caso de no cambiar los archivos utilizados por las instrucciones de `COPY` o `ADD`. ⚠️ Si el caché falla en una capa particular, las capas posteriores se invalidarán. Por lo tanto el orden es importante, ya que es crucial que cada capa de tu Dockerfile sea correcta para reducir el número de instrucciones de compilación, es decir las instrucciones actualizadas con menor frecuencia deberán estar en la parte superior mientras que las instrucciones con cambios constantes (por ejemplo el código de tu proyecto) deberán estar en la parte inferior. De igual manera, es importante pensar que las instrucciones que desencadenan una operación prolongada deberían estar en la parte superior para garantizar que sucedan solo cuando sea realmente necesario (a menos que en cada cambio construya una imagen de Docker). La reconstrucción de una imagen desde el caché puede ser casi instantánea si se hace correctamente. 

![Capas en Docker](../../assets/images/docker_layers_schema.png)

* Imagen tomada desde el artículo, [Digging into Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612), escrita por essgreb01*

### Reglas

#### Evitar las etiquetas con cambios constantes

Si tienen una etiqueta en la parte superior con un gran número de cambios, el caché se invalidará en cada compilación.

```Dockerfile
#Inicio del archivo
FROM node:10.22.0-alpine3.11 as builder

# ¡No hagas esto aquí!
LABEL build_number="483"

#... El resto del archivo de Dockerfile
```

#### Haz un buen archivo .dockerignore 

[**Véase: La importancia de docker ignore**](./docker-ignore.spanish.md)

El docker ignore evita copiar los archivos que pueden consumir la memoria caché, tal como los resultados de reportes, registros (por ejemplo logs) o archivos temporales.

#### Instala primero los paquetes del "sistema"

Es recomendado crear una base para la imagen de Docker que contenga todos los paquetes del sistema a utilizar. Si es realmente necesario instalar paquetes usando `apt`, `yum`, `apk` o algo por el estilo, debe ser una de las primeras instrucciones. No debes reinstalar make, gcc o g++ cada vez que compiles tu aplicación en Node.
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

### Ejemplo básico con node_modules que necesitan dependencias del Sistema Operativo
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


Ejemplo que necesita un paso de compilación (por ejemplo cuando se utiliza typescript)
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

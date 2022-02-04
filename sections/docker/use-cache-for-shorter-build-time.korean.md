# Leverage caching to reduce build times

## One paragraph explainer

도커 이미지는 레이어의 조합이다. 도커 파일의 각 규정사항들은 하나의 층을 만든다. 도커 데몬은 빌드 사이에 각 층을 재사용할 수 있게 한다. 만약 각 층에 대한 캐싱이 사용되지 않는다면 모든 시퀀스의 층들이 유효하지 않게 될 것이다. 순서가 중요한 이유가 이것이다. 이전에 업데이트된 사항들은 꼬대기에 최근에 업데이트 된 사항은 아래에 위치해야 한다. 또한, 오랜 시간이 필요한 규정들은 위에서 끝나게 해서 진짜 필요할 때에만 다시 실행되도록 해야 한다. 도커 이미지 재실행은 이와 같은 사항들이 지켜진다면, 충분히 즉시 수행될 수 있따.

Docker images are a combination of layers, each instruction in your Dockerfile creates a layer. The docker daemon can reuse those layers between builds if the instructions are identical or in the case of a `COPY` or `ADD` files used are identical. ⚠️ If the cache can't be used for a particular layer all the subsequent layers will be invalidated too. That's why order is important. It is crucial to layout your Dockerfile correctly to reduce the number of moving parts in your build; the less updated instructions should be at the top and the ones constantly changing (like app code) should be at the bottom. It's also important to think that instructions that trigger long operation should be close to the top to ensure they happen only when really necessary (unless it changes every time you build your docker image). Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly.

![Docker layers](../../assets/images/docker_layers_schema.png)

- Image taken from [Digging into Docker layers](https://medium.com/@jessgreb01/digging-into-docker-layers-c22f948ed612) by jessgreb01\*

### Rules

#### 항상 변경되는 LABEL을 사용하지 마라

만약 빌드 넘버가 담긴 라벨이 도커 파일 최상단에 있다면 캐싱은 불가능하다.

```Dockerfile
#Beginning of the file
FROM node:10.22.0-alpine3.11 as builder

# Don't do that here!
LABEL build_number="483"

#... Rest of the Dockerfile
```

#### Have a good .dockerignore file

[**See: On the importance of docker ignore**](./docker-ignore.md)

dock ignore는 우리의 캐싱 로직을 과부화 할 수 있는 파일 복사를 피하게 한다. (로그나 일시적인 파일 같은 것들)
The docker ignore avoids copying files that could bust our cache logic, like tests results reports, logs or temporary files.

#### Install "system" packages first

사용할 모든 시스템 패키지에 기본이 될 수 있는 기본 도커 이미지를 만는 것이 필요하다. 만약 당신이 진짜로 `apt`,`yum`,`apk`를 사용해서 패키지를 설치한다면 이건 첫번재 규칙이 될 것이다. 당신은 매 빌드마다 . gcc같은 것을 설치하고 싶진 않지 않나.

#### First, only ADD your package.json and your lockfile

```Dockerfile
COPY "package.json" "package-lock.json" "./"
RUN npm ci
```

lock file과 package.json은 변경이 적게 발생한다. 첫번쨰로 하면 npm install 단계를 캐싱할 수 있다.

### Then copy your files and run build step (if needed)

```Dockerfile
COPY . .
RUN npm run build
```

## Examples

### Basic Example with node_modules needing OS dependencies

```Dockerfile
#Create node image version alias
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

### Example with a build step (when using typescript for example)

```Dockerfile
#Create node image version alias
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
# Only copying the files that we need
COPY --from=builder /app/node_modules node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/dist dist
RUN npm prune --production

CMD ["node", "dist/server.js"]
```

## Useful links

Docker docs: https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#leverage-build-cache

# Запускайте контейнер за допомогою команди node замість npm

## Пояснення за один абзац

Ми звикли бачити приклади коду, де люди запускають свій застосунок за допомогою `CMD 'npm start'`. Це погана практика. Бінарний файл `npm` не пересилає сигнали до вашого застосунку, що запобігає м'якому завершенню роботи (див. [/sections/docker/graceful-shutdown.md]). Якщо ви використовуєте дочірні процеси, вони не будуть правильно очищені у випадку несподіваного завершення, залишаючи зомбі-процеси на вашому хості. `npm start` також призводить до наявності додаткового процесу без користі. Для запуску вашого застосунку використовуйте `CMD ['node','server.js']`. Якщо ваш застосунок створює дочірні процеси, також використовуйте `TINI` як entrypoint.

### Приклад коду - Запуск за допомогою Node

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

CMD ["node", "server.js"]
```


### Приклад коду - Використання Tiny як entrypoint

```dockerfile
FROM node:12-slim AS build

# Додаємо Tini, якщо використовуються дочірні процеси
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

ENTRYPOINT ["/tini", "--"]

CMD ["node", "server.js"]
```

### Антипатерни

Використання npm start
```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# не робіть так!
CMD "npm start"
```

Використання node в одному рядку запустить процес оболонки bash/ash для виконання вашої команди. Це майже те саме, що використання `npm`

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm clean cache --force

# не робіть так, це запустить bash
CMD "node server.js"
```

Запуск з npm, ось дерево процесів:
```console
$ ps falx
  UID   PID  PPID   COMMAND
    0     1     0   npm
    0    16     1   sh -c node server.js
    0    17    16    \_ node server.js
```
Немає переваг у цих двох додаткових процесах.

Джерела:


https://maximorlov.com/process-signals-inside-docker-containers/


https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals


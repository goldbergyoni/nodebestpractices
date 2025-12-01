# Очищайте секрети часу збірки, уникайте секретів як аргументів

<br/><br/>

### Пояснення за один абзац


Docker-образ — це не просто набір файлів, а кілька шарів, які розкривають те, що відбувалося під час збірки. У дуже поширеному сценарії розробникам потрібен npm-токен під час збірки (переважно для приватних реєстрів) — це помилково досягається передачею токена як аргументу часу збірки. Це може здаватися невинним і безпечним, однак цей токен тепер можна отримати з історії Docker на машині розробника, з Docker-реєстру та CI. Зловмисник, який отримує доступ до цього токена, тепер може писати в приватний npm-реєстр організації. Є дві більш безпечні альтернативи: Бездоганна — використання функції Docker --secret (експериментальна станом на липень 2020), яка дозволяє монтувати файл лише під час збірки. Другий підхід — використання багатоетапної збірки з аргументами, збірка, а потім копіювання лише необхідних файлів у продакшен. Остання техніка не відправить секрети з образами, але вони з'являться в локальній історії Docker — це зазвичай вважається достатньо безпечним для більшості організацій.

<br/><br/>

### Приклад коду – Використання змонтованих секретів Docker (експериментально, але стабільно)

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
# syntax = docker/dockerfile:1.0-experimental

FROM node:12-slim

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN --mount=type=secret,id=npm,target=/root/.npmrc npm ci

# Решта йде тут
```

</details>

<br/><br/>

### Приклад коду – Безпечна збірка з використанням багатоетапної збірки

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

# ARG та .npmrc не з'являться в кінцевому образі, але їх можна знайти в списку немаркованих образів Docker daemon - переконайтеся, що видалили їх
```

</details>

<br/><br/>

### Приклад коду Антипатерн – Використання аргументів часу збірки

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

# Видалення .npmrc в тій же команді copy не збереже його всередині шару, однак його можна знайти в історії образу

CMD ["node", "index.js"]
```

</details>

<br/><br/>

### Цитата з блогу: "Ці секрети не зберігаються в кінцевому Docker"

З блогу [Alexandra Ulsh](https://www.alexandraulsh.com/2019/02/24/docker-build-secrets-and-npmrc/?fbclid=IwAR0EAr1nr4_QiGzlNQcQKkd9rem19an9atJRO_8-n7oOZXwprToFQ53Y0KQ)

> У листопаді 2018 Docker 18.09 представив новий прапорець --secret для docker build. Це дозволяє нам передавати секрети з файлу до наших Docker-збірок. Ці секрети не зберігаються в кінцевому Docker-образі, будь-яких проміжних образах або історії комітів образу. З секретами збірки ви тепер можете безпечно будувати Docker-образи з приватними npm-пакетами без аргументів збірки та багатоетапних збірок.

```

```


# Видаляйте залежності розробки

<br/><br/>

### Пояснення за один абзац

Dev-залежності значно збільшують поверхню атаки контейнера (тобто потенційну слабкість безпеки) та розмір контейнера. Як приклад, деякі з найбільш впливових порушень безпеки npm походили від devDependencies, таких як [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes), або впливали на dev-пакети, такі як [event-stream, який використовувався nodemon](https://snyk.io/blog/a-post-mortem-of-the-malicious-event-stream-backdoor/). З цих причин образ, який остаточно відправляється в продакшен, повинен бути безпечним і мінімальним. Запуск npm install з `--production` — хороший початок, однак ще безпечніше запускати `npm ci`, який забезпечує чисте встановлення та наявність lock-файлу. Видалення локального кешу може зрізати додаткові десятки МБ. Часто є потреба тестувати або налагоджувати в контейнері за допомогою devDependencies — у такому випадку [багатоетапні збірки](./multi_stage_builds.ukrainian.md) можуть допомогти мати різні набори залежностей і, зрештою, лише ті, що для продакшену.

<br/><br/>

### Приклад коду – Встановлення для продакшену

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm ci --production && npm cache clean --force

# Решта йде тут
```

</details>

<br/><br/>

### Приклад коду – Встановлення для продакшену з багатоетапною збіркою

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:14.8.0-alpine AS build

COPY --chown=node:node package.json package-lock.json ./
# ✅ Безпечне встановлення
RUN npm ci
COPY --chown=node:node src ./src
RUN npm run build


# Етап виконання
FROM node:14.8.0-alpine

COPY --chown=node:node --from=build package.json package-lock.json ./
COPY --chown=node:node --from=build node_modules ./node_modules
COPY --chown=node:node --from=build dist ./dist

# ✅ Очищення dev-пакетів
RUN npm prune --production

CMD [ "node", "dist/app.js" ]
```

</details>


<br/><br/>

### Приклад коду Антипатерн – Встановлення всіх залежностей в одноетапному dockerfile

<details>

<summary><strong>Dockerfile</strong></summary>

```dockerfile
FROM node:12-slim AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
# Дві помилки нижче: Встановлення dev-залежностей, не видалення кешу після npm install
RUN npm install

# Решта йде тут
```

</details>

<br/><br/>

### Цитата з блогу: "npm ci також більш суворий, ніж звичайний install"

З [документації npm](https://docs.npmjs.com/cli/ci.html)

> Ця команда подібна до npm-install, за винятком того, що вона призначена для використання в автоматизованих середовищах, таких як тестові платформи, безперервна інтеграція та розгортання — або в будь-якій ситуації, коли ви хочете переконатися, що виконуєте чисте встановлення залежностей. Вона може бути значно швидшою, ніж звичайний npm install, пропускаючи певні функції, орієнтовані на користувача. Вона також більш сувора, ніж звичайний install, що може допомогти виявити помилки або невідповідності, спричинені інкрементно встановленими локальними середовищами більшості користувачів npm.


# Використовуйте багатоетапні збірки

### Пояснення за один абзац

Багатоетапні збірки дозволяють розділити деталі середовища збірки та виконання, такі як доступні бінарні файли, експоновані змінні середовища і навіть базова операційна система. Розділення ваших Dockerfile на кілька етапів допоможе зменшити кінцевий розмір образу та контейнера, оскільки ви відправите лише те, що вам дійсно потрібно для запуску вашого застосунку. Іноді вам потрібно включити інструменти, які потрібні лише на етапі збірки, наприклад, залежності розробки, такі як TypeScript CLI. Ви можете встановити їх на етапі збірки і використовувати лише кінцевий результат на етапі виконання. Це також означає, що ваш образ зменшиться, оскільки деякі залежності не будуть скопійовані. Вам також може знадобитися експонувати змінні середовища під час збірки, які не повинні бути присутні під час виконання (див. [уникайте секретів часу збірки](./avoid-build-time-secrets.ukrainian.md)), такі як API-ключі та секрети, що використовуються для зв'язку з конкретними сервісами. На кінцевому етапі ви можете скопіювати попередньо зібрані ресурси, такі як папка збірки, або залежності лише для продакшену (які ви також можете отримати на наступному кроці).

### Приклад

Уявімо наступну структуру каталогів

```
- Dockerfile
- src/
    - index.ts
- package.json
- yarn.lock
- .dockerignore
- docs/
  - README.md
```

Ваш [.dockerignore](../docker/docker-ignore.ukrainian.md) вже відфільтрує файли, які не потрібні для збірки та запуску вашого застосунку.


sections/docker/docker-ignore.md
```
# Не копіюємо існуючі node_modules, ми отримаємо свої власні
node_modules

# Документи великі, вони нам не потрібні в нашому Docker-образі
docs
```

#### Dockerfile з кількома етапами

Оскільки Docker часто використовується в середовищах безперервної інтеграції, рекомендується використовувати команду `npm ci` (замість `npm install`). Вона швидша, суворіша і зменшує невідповідності, використовуючи лише версії, вказані у файлі package-lock.json. Див. [тут](https://docs.npmjs.com/cli/ci.html#description) для отримання додаткової інформації. У цьому прикладі використовується yarn як менеджер пакетів, для якого еквівалентом `npm ci` є команда `yarn install --frozen-lockfile` [команда](https://classic.yarnpkg.com/en/docs/cli/install/).

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


FROM node:14.4.0

USER node
EXPOSE 8080

# Копіюємо результати з попереднього етапу
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Dockerfile з кількома етапами та різними базовими образами

```dockerfile
FROM node:14.4.0 AS build

COPY --chown=node:node . .
RUN yarn install --frozen-lockfile && yarn build


# Це використає мінімальний базовий образ для виконання
FROM node:14.4.0-alpine

USER node
EXPOSE 8080

# Копіюємо результати з попереднього етапу
COPY --chown=node:node --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/yarn.lock ./
RUN yarn install --frozen-lockfile --production

CMD [ "node", "dist/app.js" ]
```

#### Повний Dockerfile з кількома етапами та різними базовими образами

Наш Dockerfile міститиме дві фази: Одну для збірки застосунку з використанням повнофункціонального Docker-образу Node.js,
і другу фазу для запуску застосунку, засновану на мінімальному Alpine-образі. Ми скопіюємо лише зібрані файли на наш другий етап,
а потім встановимо продакшен-залежності.

```dockerfile
# Починаємо з повнофункціонального базового образу Node.js
FROM node:14.4.0 AS build

USER node
WORKDIR /home/node/app

# Копіюємо інформацію про залежності та встановлюємо всі залежності
COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Копіюємо вихідний код (та всі інші відповідні файли)
COPY --chown=node:node src ./src

# Збираємо код
RUN yarn build


# Етап виконання
FROM node:14.4.0-alpine

# Встановлюємо непривілейованого користувача та експонуємо порт 8080
USER node
EXPOSE 8080

WORKDIR /home/node/app

# Копіюємо інформацію про залежності та встановлюємо лише продакшен-залежності
COPY --chown=node:node package.json yarn.lock ./
RUN yarn install --frozen-lockfile --production

# Копіюємо результати з попереднього етапу
COPY --chown=node:node --from=build /home/node/app/dist ./dist

CMD [ "node", "dist/app.js" ]
```


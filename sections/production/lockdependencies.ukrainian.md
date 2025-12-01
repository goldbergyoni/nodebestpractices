# Блокування залежностей

<br/><br/>

### Пояснення за один абзац

Ваш код залежить від багатьох зовнішніх пакетів, скажімо, він 'вимагає' та використовує momentjs-2.1.4, тоді за замовчуванням, коли ви розгортаєте в продакшен, npm може отримати momentjs 2.1.5, який, на жаль, приносить нові баги. Використання конфігураційних файлів npm та аргументу ```–save-exact=true``` інструктує npm посилатися на *точно* ту саму версію, яка була встановлена, тому наступного разу, коли ви запустите ```npm install``` (в продакшені або в Docker-контейнері, який ви плануєте відправити для тестування), буде отримана та сама залежна версія. Альтернативний і популярний підхід — використання файлу `.shrinkwrap` (легко генерується за допомогою npm), який вказує, які саме пакети та версії повинні бути встановлені, щоб жодне середовище не спокусилося отримати новіші версії, ніж очікувалося.

* **Оновлення:** починаючи з npm 5, залежності блокуються автоматично за допомогою .shrinkwrap. Yarn, новий менеджер пакетів, також блокує залежності за замовчуванням.

<br/><br/>

### Приклад коду: файл .npmrc, який інструктує npm використовувати точні версії

```npmrc
// збережіть це як файл .npmrc у директорії проекту
save-exact:true
```

<br/><br/>

### Приклад коду: файл shrinkwrap.json, який описує точне дерево залежностей

```json
{
    "name": "A",
    "dependencies": {
        "B": {
            "version": "0.0.1",
            "dependencies": {
                "C": {
                    "version": "0.1.0"
                }
            }
        }
    }
}
```

<br/><br/>

### Приклад коду: файл блокування залежностей npm 5 – package-lock.json

```json
{
    "name": "package-name",
    "version": "1.0.0",
    "lockfileVersion": 1,
    "dependencies": {
        "cacache": {
            "version": "9.2.6",
            "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
            "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
        },
        "duplexify": {
            "version": "3.5.0",
            "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
            "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
            "dependencies": {
                "end-of-stream": {
                    "version": "1.0.0",
                    "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
                    "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
                }
            }
        }
    }
}
```


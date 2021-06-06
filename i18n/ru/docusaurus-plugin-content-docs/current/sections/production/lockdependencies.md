# Блокируйте зависимости

<br/><br/>

### Объяснение в один абзац

Ваш код зависит от многих внешних пакетов, допустим, что он "требует" и использует momentjs-2.1.4, тогда по умолчанию при развертывании в рабочей среде npm может получить momentjs-2.1.5, что, к сожалению, приводит к появлению новых ошибок. Использование файлов конфигурации npm и параметра ```-save-correct = true``` указывает npm ссылаться на *точную* версию, которая была установлена, поэтому при следующем запуске ```npm install``` (в работе или в контейнере Docker, который вы планируете отправить для тестирования) будет выбрана та же версия зависимости. Альтернативный и популярный подход заключается в использовании файла `.shrinkwrap` (легко генерируемого с помощью npm), в котором указывается, какие именно пакеты и версии следует установить, чтобы ни у одной среды не было соблазна получить более новые версии, чем ожидалось.

* **Обновление:** начиная с npm 5, зависимости блокируются автоматически с помощью .shrinkwrap. Yarn, еще один менеджер пакетов, также блокирует зависимости по умолчанию.

<br/><br/>

### Пример кода: файл .npmrc, который указывает npm использовать точные версии

```npmrc
// save this as .npmrc file on the project directory
save-exact:true
```

<br/><br/>

### Пример кода: файл shrinkwrap.json, в котором определяется точное дерево зависимостей

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

### Пример кода: файл блокировки зависимостей npm 5 - package.json

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

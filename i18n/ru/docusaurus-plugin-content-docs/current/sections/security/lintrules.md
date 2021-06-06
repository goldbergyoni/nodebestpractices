# Пользуйтесь правилами безопасности линтера

### Объяснение в один абзац

Плагины безопасности для ESLint и TSLint, такие как [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) и [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) предлагает проверки безопасности кода, основанные на ряде известных уязвимостей, таких как небезопасный RegEx, небезопасное использование `eval()` и не буквальные имена файлов, используемые при доступе к файловой системе в приложении , Использование перехватчиков git, таких как [pre-git](https://github.com/bahmutov/pre-git), позволяет дополнительно применять любые правила управления исходным кодом до их распространения на удаленные устройства, одиним из можно проверить, что никакие секреты не были добавлены в систему контроля версий.

### Пример `eslint-plugin-security`

Некоторые примеры правил небезопасной практики, обнаруженных с помощью `eslint-plugin-security`:

`detect-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detect-non-literal-fs-filename`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detect-eval-with-expression`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detect-non-literal-regexp`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```

Пример запуска `eslint-plugin-security` в проекте Node.js с использованием описанных выше методов небезопасного кода:

![nsp check example](/assets/images/eslint-plugin-security.png)

### Что говорят другие блогеры

Из блога [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Линтирование не обязательно должно быть просто инструментом для применения педантичных правил в отношении пробелов, точек с запятой или операторов eval. ESLint предоставляет мощную платформу для устранения широкого спектра потенциально опасных шаблонов в вашем коде (регулярные выражения, проверка ввода и т.д.). Я думаю, что он предоставляет мощный новый инструмент, который заслуживает рассмотрения разработчиками JavaScript, заботящимися о безопасности.

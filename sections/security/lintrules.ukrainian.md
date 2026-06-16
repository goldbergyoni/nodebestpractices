# Використовуйте правила безпеки лінтера

### Пояснення за один абзац

Плагіни безпеки для ESLint і TSLint, такі як [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) і [tslint-config-security](https://www.npmjs.com/package/tslint-config-security), пропонують перевірки безпеки коду на основі ряду відомих вразливостей, таких як небезпечні RegEx, небезпечне використання `eval()` та нелітеральні імена файлів, що використовуються при доступі до файлової системи в додатку. Використання git hooks, таких як [pre-git](https://github.com/bahmutov/pre-git), дозволяє додатково застосовувати будь-які правила до системи контролю версій перед їх розповсюдженням на віддалені сервери, одним з яких може бути перевірка, що жодних секретів не було додано до системи контролю версій.

### Приклад `eslint-plugin-security`

Деякі приклади небезпечних практик, виявлених `eslint-plugin-security`:

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

Приклад запуску `eslint-plugin-security` на проекті Node.js з вищезазначеними небезпечними практиками коду:

![приклад перевірки nsp](../../assets/images/eslint-plugin-security.png)

### Що кажуть інші блогери

З блогу [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Лінтинг не повинен бути просто інструментом для застосування педантичних правил про пробіли, крапки з комою або оператори eval. ESLint надає потужний фреймворк для усунення широкого спектру потенційно небезпечних патернів у вашому коді (регулярні вирази, валідація вводу тощо). Я думаю, що він надає потужний новий інструмент, вартий уваги JavaScript-розробників, які піклуються про безпеку.


# Ustanowienie zasad bezpieczeństwa linter

### Wyjaśnienie jednym akapitem

Wtyczki bezpieczeństwa dla ESLint i TSLint, takie jak [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) i [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) oferowują kontrole bezpieczeństwa kodu na podstawie szeregu znanych luk, takich jak niebezpieczne RegEx, niebezpieczne użycie `eval ()` i nieliterowe nazwy plików używane podczas uzyskiwania dostępu do systemu plików w aplikacji. Korzystanie z git hooks, takich jak [pre-git](https://github.com/bahmutov/pre-git), pozwala na dalsze egzekwowanie reguł dotyczących kontroli źródła, zanim zostaną one przekazane zdalnym, z których jednym może być sprawdzenie że do kontroli źródła nie dodano żadnych danych wrażliwych.

### `eslint-plugin-security` przykład

Niektóre przykłady zasad niebezpiecznych praktyk wykrytych przez `eslint-plugin-security`:

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

Przykład działania `eslint-plugin-security` na projekcie Node.js z powyższymi niebezpiecznymi praktykami dotyczącymi kodu:

![nsp check example](../../assets/images/eslint-plugin-security.png)

### Co mówią inni blogerzy

Z bloga od [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Linting doesn’t have to be just a tool to enforce pedantic rules about whitespace, semicolons or eval statements. ESLint provides a powerful framework for eliminating a wide variety of potentially dangerous patterns in your code (regular expressions, input validation, and so on). I think it provides a powerful new tool that’s worthy of consideration by security-conscious JavaScript developers.

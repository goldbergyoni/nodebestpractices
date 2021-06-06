# Adote as regras de segurança do linter

### Explicação em um Parágrafo

Plugins de segurança para ESLint e TSLint, como [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) e [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) oferecer verificações de segurança de código com base em várias vulnerabilidades conhecidas, como RegEx inseguras, o uso não seguro de `eval()`, e nomes de arquivos não literais sendo usados ​​ao acessar o sistema de arquivos em uma aplicação. O uso de ganchos git como [pre-git](https://github.com/bahmutov/pre-git) permite reforçar ainda mais quaisquer regras no controle de origem antes de serem distribuídas aos controles remotos, uma das quais pode ser verificar se nenhum segredo foi adicionado ao controle de origem.

### exemplo `eslint-plugin-security` 

Alguns exemplos de regras de prática inseguras detectadas por `eslint-plugin-security`:

`detectar-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detectar-nome-de-arquivo-não-literal-em-fs`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detectar-eval-com-expressão`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detectar-regexp-não-literal`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```

Um exemplo de execução do `eslint-plugin-security` em um projeto Node.js com as práticas de código não seguras acima:

![nsp check example](/assets/images/eslint-plugin-security.png)

### O que outros blogueiros dizem

Do blog de [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Um Linter não precisa ser apenas uma ferramenta para impor regras pedantes sobre espaço em branco, ponto-e-vírgula ou instruções eval. O ESLint fornece uma estrutura poderosa para eliminar uma ampla variedade de padrões potencialmente perigosos em seu código (expressões regulares, validação de entrada e assim por diante). Acho que ele fornece uma nova ferramenta poderosa que merece ser considerada por desenvolvedores de JavaScript preocupados com a segurança.

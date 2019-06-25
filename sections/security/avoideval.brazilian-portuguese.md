# Evite instruções eval do JavaScript

### Explicação em um Parágrafo

`eval()`, `setTimeout()`, `setInterval()`, e `new Function()` são funções globais, geralmente usadas no Node.js, que aceitam um parâmetro de string que representa uma expressão, instrução ou sequência de instruções JavaScript. A preocupação de segurança de usar essas funções é a possibilidade de que uma entrada de usuário não confiável possa entrar na execução do código, levando ao comprometimento do servidor, já que avaliar o código do usuário essencialmente permite que um invasor execute qualquer ação possível. Sugere-se refatorar código para não depender do uso dessas funções em que a entrada do usuário pode ser passada para a função e executada.

### Exemplo de Código

```javascript
// exemplo de código malicioso que um invasor conseguiu inserir
userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// código malicioso executado
eval(userInput);
```

### O que Outros Blogueiros Dizem

Do livro Essential Node.js Security por [Liran Tal](https://leanpub.com/nodejssecurity):
> A função eval() é talvez a mais desaprovada dentro do JavaScript em uma perspectiva de segurança. Ela analisa uma string JavaScript como texto e a executa como se fosse um código JavaScript.
Misturar isso com entradas não confiáveis ​​do usuário que podem encontrar o caminho para eval() é uma receita para o desastre que
pode acabar comprometendo o servidor.

# Evite o carregamento de módulos usando uma variável

### Explicação em um Parágrafo

Evite requerir/importar outro arquivo com um caminho que tenha sido fornecido como parâmetro devido à preocupação de que ele possa ter se originado da entrada do usuário. Esta regra pode ser estendida para acessar arquivos em geral (por exemplo, `fs.readFile ()`) ou outros recursos sensíveis com variáveis ​​dinâmicas provenientes da entrada do usuário.

### Exemplo de código

```javascript
// inseguro, pois a variável helperPath pode ter sido modificada pela entrada do usuário
const uploadHelpers = require(helperPath);

// seguro
const uploadHelpers = require('./helpers/upload');
```

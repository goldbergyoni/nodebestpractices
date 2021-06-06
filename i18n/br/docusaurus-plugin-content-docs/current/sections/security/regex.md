# Evite que RegEx maliciosos sobrecarreguem sua execução de thread único

### Explicação em um Parágrafo

O risco inerente ao uso de Expressões Regulares são os recursos computacionais necessários para analisar o texto e corresponder a um determinado padrão. Para a plataforma Node.js, em que um loop de eventos de thread único é dominante, uma operação vinculada à CPU, como a resolução de um padrão de expressão regular, tornará o aplicativo sem resposta.
Evite RegEx quando possível ou delege a tarefa para uma biblioteca dedicada como [validator.js](https://github.com/chriso/validator.js), ou [safe-regex](https://github.com/substack/safe-regex) para verificar se a RegEx é segura.

Alguns [exemplos OWASP](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) de padrões vulneráveis de RegEx:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### Exemplo de código - Ativando SSL/TLS usando o framework Express

```javascript
var saferegex = require('safe-regex');
var emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// deve ser falso porque o emailRegex é vulnerável a ataques de REDoS
console.log(saferegex(emailRegex));

// em vez do padrão regex, use validator:
var validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### Citação de livro: "Uma expressão regular vulnerável é conhecida como aquela que se aplica à repetição"

Do livro [Essential Node.js Security](https://leanpub.com/nodejssecurity) por Liran Tal
> Freqüentemente, os programadores usarão RegExs para validar que uma entrada recebida de um usuário, para verificar se está de acordo com uma condição esperada. Uma Expressão Regular vulnerável é conhecida como uma que aplica a repetição a um grupo de captura de repetição e em que a string a ser correspondida é composta de um sufixo de um padrão de correspondência válido, mais caracteres que não correspondem ao grupo de captura.


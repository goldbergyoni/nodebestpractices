# Zapobiegaj złośliwemu RegExowi przeciążania wykonania pojedynczego wątku

### Wyjaśnienie jednym akapitem

Ryzykiem nieodłącznie związanym z używaniem wyrażeń regularnych są zasoby obliczeniowe, które wymagają analizy tekstu i dopasowania do określonego wzorca. W przypadku platformy Node.js, w której dominuje jednowątkowa pętla zdarzeń, operacja związana z procesorem, taka jak rozwiązywanie wzorca wyrażeń regularnych, spowoduje, że aplikacja nie będzie odpowiadać.
Jeśli to możliwe, unikaj RegEx lub odrocz zadanie do dedykowanej biblioteki, takiej jak [validator.js](https://github.com/chriso/validator.js) lub [safe-regex](https://github.com/substack/safe-regex), aby sprawdzić, czy wzorzec RegEx jest bezpieczny.

Nieco [przykładów OWASP](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) dla podatności wzorców RegEx:
* (a|aa)+
* ([a-zA-Z]+)*

<br/><br/>

### Przykład kodu – Włączanie SSL / TLS przy użyciu frameworka Express

```javascript
const saferegex = require('safe-regex');
const emailRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// should output false because the emailRegex is vulnerable to redos attacks
console.log(saferegex(emailRegex));

// instead of the regex pattern, use validator:
const validator = require('validator');
console.log(validator.isEmail('liran.tal@gmail.com'));
```

<br/><br/>

### Cytat z książki: "A vulnerable Regular Expression is known as one which applies repetition"

Z książki [Essential Node.js Security](https://leanpub.com/nodejssecurity) by Liran Tal
> Often, programmers will use RegEx to validate that an input received from a user conforms to an expected condition. A vulnerable Regular Expression is known as one which applies repetition to a repeating capturing group, and where the string to match is composed of a suffix of a valid matching pattern plus characters that aren't matching the capturing group.


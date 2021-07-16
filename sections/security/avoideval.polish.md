# Unikaj JS eval statements

### Wyjaśnienie jednym akapitem

`eval()`, `setTimeout()`, `setInterval()`, i `new Function()` są funkcjami globalnymi, często używanymi w Node.js, które akceptują parametr ciągu znaków reprezentujący wyrażenie JavaScript, instrukcję lub sekwencję instrukcji. Problemem związanym z bezpieczeństwem korzystania z tych funkcji jest możliwość, że niezaufane dane wejściowe użytkownika mogą znaleźć drogę do wykonania kodu prowadzącego do naruszenia bezpieczeństwa serwera, ponieważ ocena kodu użytkownika zasadniczo pozwala atakującemu na wykonanie dowolnych działań. Sugeruje się, aby kod refaktoryzować, aby nie polegał na użyciu tych funkcji, w których dane wejściowe użytkownika mogą być przekazywane do funkcji i wykonywane.

### Przykład kodu

```javascript
// example of malicious code which an attacker was able to input
const userInput = "require('child_process').spawn('rm', ['-rf', '/'])";

// malicious code executed
eval(userInput);
```

### Co mówią inni blogerzy

Z książki Essential Node.js Security od [Liran Tal](https://leanpub.com/nodejssecurity):
> The eval() function is perhaps of the most frowned upon JavaScript pieces from a security
perspective. It parses a JavaScript string as text, and executes it as if it were a JavaScript code.
Mixing that with untrusted user input that might find it’s way to eval() is a recipe for disaster that
can end up with server compromise.

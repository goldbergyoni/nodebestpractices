# Zachowaj ostrożność podczas pracy z procesami potomnymi

### Wyjaśnienie jednym akapitem

Niezależnie od tego, jak wielkie są procesy potomne, należy ich używać ostrożnie. Przekazywanie danych wejściowych przez użytkownika musi być sanitized, jeśli w ogóle nie można go uniknąć.
Niebezpieczeństwa związane z niezaangażowanym wejściem wykonującym logikę na poziomie systemu są nieograniczone, od zdalnego wykonania kodu po ujawnienie
wrażliwych danych systemowych, a nawet utraty danych. Lista kontrolna przygotowań może wyglądać następująco

- w każdym przypadku unikaj wprowadzania danych przez użytkownika, w przeciwnym razie waliduj i sanitize
- ograniczenie uprawnień procesów nadrzędnych i podrzędnych przy użyciu tożsamości użytkowników / grup
- uruchom proces w izolowanym środowisku, aby zapobiec niepożądanym skutkom ubocznym, jeśli inne przygotowania zawiodą

### Przykład kodu: Dangers of unsanitized child process executions

```javascript
const { exec } = require('child_process');

...

// as an example, take a script that takes two arguments, one of them is unsanitized user input
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imagine what could happen if the user simply enters something like '&& rm -rf --no-preserve-root /'
// you'd be in for an unwanted surprise
```

### Dodatkowe zasoby

Z Node.js child process [documentation](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):

> Never pass unsanitized user input to this function. Any input containing shell metacharacters may be used to trigger arbitrary command execution.

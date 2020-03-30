# Uruchom niebezpieczny kod w piaskownicy

### Wyjaśnienie jednym akapitem

Z zasady należy uruchamiać tylko własne pliki JavaScript. Pomijając teorie, scenariusze w świecie rzeczywistym wymagają wykonywania plików JavaScript przekazywanych dynamicznie w czasie wykonywania. Rozważmy na przykład strukturę dynamiczną, taką jak webpack, która akceptuje niestandardowe programy ładujące i wykonuje je dynamicznie podczas kompilacji. W obecności szkodliwych wtyczek chcemy zminimalizować szkody, a może nawet pozwolić na pomyślne zakończenie przepływu - wymaga to uruchomienia wtyczek w środowisku piaskownicy, które jest w pełni izolowane pod względem zasobów, awarii i informacji, którymi się z nim dzielimy. Trzy główne opcje mogą pomóc w osiągnięciu tej izolacji:

- dedykowany proces potomny - zapewnia to szybką izolację informacji, ale wymaga oswojenia procesu potomnego, ograniczenia czasu jego wykonywania i odzyskania po błędach
- platforma bezserwerowa w chmurze spełnia wszystkie wymagania piaskownicy, ale dynamiczne wdrażanie i wywoływanie funkcji FaaS nie jest spacerem w parku
- niektóre biblioteki npm [sandbox](https://www.npmjs.com/package/sandbox) oraz [vm2](https://www.npmjs.com/package/vm2) pozwalają na wykonanie izolowanego kodu w 1 pojedynczym wierszu kodu. Chociaż ta ostatnia opcja wygrywa w prostocie, zapewnia ograniczoną ochronę

### Przykład kodu - używanie biblioteki Sandbox do uruchamiania kodu w izolacji

```javascript
const Sandbox = require('sandbox');
const s = new Sandbox();

s.run('lol)hai', (output) => {
  console.log(output);
  //output='Syntax error'
});

// Example 4 - Restricted code
s.run('process.platform', (output) => {
  console.log(output);
  //output=Null
});

// Example 5 - Infinite loop
s.run('while (true) {}', (output) => {
  console.log(output);
  //output='Timeout'
});
```

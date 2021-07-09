# Preferuj natywne metody JS niż narzędzia użytkowników, takie jak Lodash


<br/><br/>

### Wyjaśnienie jednym akapitem
Czasami użycie metod natywnych jest lepsze niż wymaganie _lodash_ lub _underscore_, ponieważ te biblioteki mogą prowadzić do utraty wydajności lub zajmować więcej miejsca niż potrzeba.
Wydajność przy użyciu metod rodzimych skutkuje [ogólnym ~50% zyskiem](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx), który obejmuje następujące metody: `Array.concat`,` Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...


<!-- comp here: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### Przykład: benchmark comparison - Lodash vs V8 (Native)
Poniższy wykres pokazuje [średnią wyników dla różnych metod Lodasha](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods), pokazuje to, że metody Lodash zajmują średnio 146,23% więcej czasu na wykonanie tych samych zadań, co metody V8.

![meanDiag](../../assets/images/sampleMeanDiag.png)

### Przykład kodu – Benchmark test on `_.concat`/`Array.concat`
```javascript
const _ = require('lodash');
const __ = require('underscore');
const Suite = require('benchmark').Suite;
const opts = require('./utils'); //cf. https://github.com/Berkmann18/NativeVsUtils/blob/master/utils.js

const concatSuite = new Suite('concat', opts);
const array = [0, 1, 2];

concatSuite.add('lodash', () => _.concat(array, 3, 4, 5))
  .add('underscore', () => __.concat(array, 3, 4, 5))
  .add('native', () => array.concat(3, 4, 5))
  .run({ 'async': true });
```

Co zwraca to:

![output](../../assets/images/concat-benchmark.png)

Możesz znaleźć większą listę benchmarków [tutaj](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) lub alternatywnie [uruchom to](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js) które pokazałyby to samo, ale z kolorami.

### Cytat z bloga: "You don't (may not) need Lodash/Underscore"

Z [repozytorium na ten temat, które koncentruje się na Lodash i Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

 > Lodash and Underscore are great modern JavaScript utility libraries, and they are widely used by Front-end developers. However, when you are targeting modern browsers, you may find out that there are many methods which are already supported natively thanks to ECMAScript5 [ES5] and ECMAScript2015 [ES6]. If you want your project to require fewer dependencies, and you know your target browser clearly, then you may not need Lodash/Underscore.

### Przykład: Linting for non-native methods usage
Istnieje [wtyczka ESLint](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) która wykrywa, gdzie korzystasz z bibliotek, ale nie musisz, ostrzegając Cię sugestiami (porównaj z przykładem poniżej).<br/>
Sposób konfiguracji polega na dodaniu wtyczki `eslint-plugin-you-dont-need-lodash-underscore` do pliku konfiguracyjnego ESLint:
```json
{
  "extends": [
    "plugin:you-dont-need-lodash-underscore/compatible"
  ]
}
```

### Przykład: detecting non-v8 util usage using a linter
Consider the file below:
```js
const _ = require('lodash');
// ESLint will flag the line above with a suggestion
console.log(_.map([0, 1, 2, 4, 8, 16], x => `d${x}`));
```
Oto, co wyświetli ESLint podczas korzystania z wtyczki YDNLU.
![output](../../assets/images/ydnlu.png)

Oczywiście powyższy przykład nie wydaje się realistyczny, biorąc pod uwagę, jakie byłyby rzeczywiste bazy kodów, ale masz pomysł.

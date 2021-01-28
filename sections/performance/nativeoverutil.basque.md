# Hobetsi jatorrizko JS metodoak Lodash bezalako erabiltzailearen baliabideak baino

<br/><br/>

### Azalpen paragrafoa

Batzuetan, jatorrizko funtzioak erabiltzea _lodash_ edo _underscore_ bezalako liburutegien erabilera behartzea baino hobea da, hauek errendimendu galera bat ekar baitezakete eta beharrezko baino memoria gehiago hartu
Jatorrizko funtzioak erabiltzeak [%50 inguruko erabateko irabazia](https://github.com/Berkmann18/NativeVsUtils/blob/master/analysis.xlsx) suposa dezake, funtzio hauek kontutan hartzen direlarik: `Array.concat`, `Array.fill`, `Array.filter`, `Array.map`, `(Array|String).indexOf`, `Object.find`, ...

<!-- koparaketa hemen: https://gist.github.com/Berkmann18/3a99f308d58535ab0719ac8fc3c3b8bb-->

<br/><br/>

### Abididea: konparaketa frogak: Lodash versus V8 (jatorrizkoa)

Azpiko grafikoak [Lodashen funtzio anitzentzako frogen esanahia](https://github.com/Berkmann18/NativeVsUtils/blob/master/nativeVsLodash.ods) erakusten du, batazbeste Lodashen 146 funtzio hartzen ditu kontutan. 23% denbora gehiago behar da ataza berak V8 funtzioekin egiteko.

![esanahia](../../assets/images/sampleMeanDiag.png)

### Kodearen adibidea: `_.concat`/`Array.concat`en froga

```javascript
const _ = require("lodash");
const __ = require("underscore");
const Suite = require("benchmark").Suite;
const opts = require("./utils"); //cf. https://github.com/Berkmann18/NativeVsUtils/blob/master/utils.js

const concatSuite = new Suite("concat", opts);
const array = [0, 1, 2];

concatSuite
  .add("lodash", () => _.concat(array, 3, 4, 5))
  .add("underscore", () => __.concat(array, 3, 4, 5))
  .add("native", () => array.concat(3, 4, 5))
  .run({ async: true });
```

Non hau bueltatzen duen:

![output](../../assets/images/concat-benchmark.png)

[Hemen](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.txt) froga zerrenda luzeago bat aurki zenezake edo bestela [exekutatu hau](https://github.com/Berkmann18/NativeVsUtils/blob/master/index.js), berdina erakutsiko du baina koloretan.

### Blogeko aipua: "(baliteke) Ez duzu Lodash/Underscoreren beharrik (ez izatea)"

[Lodash eta Underscoren beharrean zentratutako biltegitik](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore).

> Lodash eta Underscore JavaScripten erabilgarritasun liburutegi moderno bikainak dira, eta Front-end garatzaileen artean oso erabiliak dira. Hala ere, nabigatzaile modernoak jomugatzat dituzunean, pentsa dezakezu funtzio hauetako asko jatorriz ECMAScript5ek [ES5] and ECMAScript2015ek [ES6] badituztela. Zure proiektuak menpekotasun gutxiago edukitzea nahi baduzu, eta argi badaukazu zein nabilgatzaile duzun helburutzat, baliteke Lodash/Underscore behar ez izatea.

### Adibidea: jatorrizko funtzioak ez direnak garbitzen

Badago [ESLint plugin](https://www.npmjs.com/package/eslint-plugin-you-dont-need-lodash-underscore) bat behar ez dituzun liburutegiak detektatzen dituena eta honen inguruan aholkuak ematen dizkizuna (adibide bat behean).<br> Hau martxan jartzeko modua zure ESLint ezarpen fitxategian `eslint-plugin-you-dont-need-lodash-underscore` plugina gehitzea da:

```json
{
  "extends": ["plugin:you-dont-need-lodash-underscore/compatible"]
}
```

### Adibidea: linter bat erabiliz, beharrezko ez diren v8 funtzionalitateen erabilera detektatu

Eman begirada bat azpiko fitxategiari:

```js
const _ = require("lodash");
// ESLintek azpiko lerroa markatuko du iradokizun batekin
console.log(_.map([0, 1, 2, 4, 8, 16], (x) => `d${x}`));
```

Hementxe dago ESLintek bistaratuko lukeena YDNLU plugina erabiliz.
![output](../../assets/images/ydnlu.png)

Noski, adibide honek ez du errealista ematen, egungo kodeek dutena kontutan hartuz, baina ideia bat egin zenezake.

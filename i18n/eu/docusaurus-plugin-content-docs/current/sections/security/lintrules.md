# Besarkatu linter segurtasun arauak

### Azalpena

ESLint eta TSLint segurtasun pluginek kodeen segurtasun egiaztapenak eskaintzen dituzte, [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) eta [tslint-config-security](https://www.npmjs.com/package/tslint-config-security) bezalako ahultasunenetan oinarritutakoak, hala nola, RegEx ez segurua eta `eval()` erabilera ez segurua, eta literalak ez diren fitxategi izenak, aplikazio baten barruan fitxategi sistemara sartzeko erabiltzen direnak. [pre-git](https://github.com/bahmutov/pre-git) moduan git giltzak erabiltzeak iturburuko kontrolari buruzko arauak gehiago betearaztea ahalbidetzen du urruneko kontroletara banatu aurretik, eta horietako bat izan daiteke egiaztatzea iturburuko kontrolari sekreturik gehitu ez zaiola.

### `eslint-plugin-security`ren adibidea

`eslint-plugin-security`k antzemandako erabilitako arau ez-seguruen adibide batzuk:

`detect-pseudoRandomBytes`

```javascript
const insecure = crypto.pseudoRandomBytes(5);
```

`detect-non-literal-fs-filename`

```javascript
const path = req.body.userinput;
fs.readFile(path);
```

`detect-eval-with-expression`

```javascript
const userinput = req.body.userinput;
eval(userinput);
```

`detect-non-literal-regexp`

```javascript
const unsafe = new RegExp('/(x+x+)+y/)');
```
`eslint-plugin-security` erabiliz antzemandako praktika ez-seguruen adibide batzuk:

![nsp check adibidea](/assets/images/eslint-plugin-security.png)

### Beste blogari batzuek diotena

[Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/)en blogetik hartua:
> Garbitzailea (Linting) ez da zuriune, puntu eta koma edo eval enuntziatuei buruzko arau pedanteak betearazteko tresna soilik izan behar. ESLintek esparru indartsua eskaintzen du zure kodean arriskutsuak izan daitezkeen eredu ugari ezabatzeko (adierazpen erregularrak, sarrera balioztatzea, eta abar). Segurtasunaz arduratzen diren JavaScript garatzaileek kontuan hartu beharreko tresna indartsu berria eskaintzen duela uste dut.

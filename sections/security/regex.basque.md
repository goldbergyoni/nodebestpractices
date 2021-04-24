# Saihestu RegEx maltzurra zure hari bakarreko exekuzioa gainkargatzea

### Azalpena

Adierazpen Erregularrak (Regular Expressions) erabiltzearen berezko arriskua da testuaren analisi sintaktikoa egin eta testu hori eredu jakin batekin bat egiteko behar diren konputazio baliabideak. Node.js plataforman hari bakarreko gertaeren begizta gailentzen delarik, PUZarekin lotutako operazio batek, adierazpen erregular bateko eredua sortzearen tankerakoa, aplikazioa erabilezin bihur dezake. Ekidin RegEx erabiltzea posible den heinean, edo [validator.js](https://github.com/chriso/validator.js), edo [safe-regex](https://github.com/substack/safe-regex) bezalako liburutegi dedikatu baten esku utzi zeregin hori, RegExen adierazpena segurua den kontrolatzeko, alegia.

Hainbat [OWASP adibide](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) RegEx eredu erasogarrientzat:

- (a|aa)+
- ([a-zA-Z]+)\*

<br/><br/>

### Kode adibidea: denbora esponentzialeko RegEx balioztatzea eta RegEx-en ordez balioztatzaileak erabiltzea

```javascript
const regexSegurua = require("safe-regex");
const postaElektronikoaRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// alse bistaratu beharko luke, postaElektronikoaRegex eraso erraza baita
console.log(regexSegurua(postaElektronikoaRegex));

// regex ereduaren ordez, erabili balioztatzailea:
const balioztatzailea = require("validator");
console.log(balioztatzailea.postaElektronikoaDa("liran.tal@gmail.com"));
```

<br/><br/>

### Liburuko aipua: "Errepikapena erabiltzen duen adierazpenari deritzo adierazpen erregular erasogarria"

Liran Talen [Ezinbesteko Node.jsren Segurtasuna](https://leanpub.com/nodejssecurity) liburua:

> Askotan, programatzaileek RegEx erabiliko dute erabiltzaileen sarrerak esperotako baldintzekin bat datozela balioztatzeko. Errepikatzen den atzemate multzoei errepikapena aplikatzen adierazpenei deritze Adierazpen Erregular erasogarria, non kointzidentzia eredu onargarri batek eta atzemate taldearekin bat ez datozen karaktere batzuek osatzen baitute bat etorri behar duen katea.

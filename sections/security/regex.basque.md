# Saihestu RegEx gaiztoak zure exekuzio hari bakarra gainkargatzen

### Azalpen paragrafoa

Expresio Erregularrak erabiltzearen arriskua, analisi sintaktikoa behar duten eta eredu jakin batekin bat datozen testuen konputazio baliabideak dira. Node.js plataforman, non hari bakarraren gertaeren begizta menderatzaile den, expresio erregular bateko eredua ebaztea bezalako PUZeko operazio batek aplikazioa erabilezin bihur dezake. Saihestu RegEx posible den einean edo [validator.js](https://github.com/chriso/validator.js), edo [safe-regex](https://github.com/substack/safe-regex) bezalako liburutegi dedikatu baten esku utzi zeregin hau, RegEx expresioa segurua den kontrolatzeko alegia.

Hainbat [OWASP adibide](https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS) RegEx eredu erasoerrazentzat:

- (a|aa)+
- ([a-zA-Z]+)\*

<br/><br/>

### Kodearen adibidea: denbora exponentzialaren RegEx baten balioztatzea RegExen partez balioztatzaileak erabiliz

```javascript
const regexSegurua = require("safe-regex");
const postaElektronikoaRegex = /^([a-zA-Z0-9])(([\-.]|[_]+)?([a-zA-Z0-9]+))*(@){1}[a-z0-9]+[.]{1}(([a-z]{2,3})|([a-z]{2,3}[.]{1}[a-z]{2,3}))$/;

// false bistaratu beharko luke, postaElektronikoaRegex erasoerraza baita
console.log(regexSegurua(postaElektronikoaRegex));

// regex ereduaren ordez, erabili balioztatzailea:
const balioztatzailea = require("validator");
console.log(balioztatzailea.postaElektronikoaDa("liran.tal@gmail.com"));
```

<br/><br/>

### Liburuko aipua: "Expresio Erregular erasoerraza errepikapena erabiltzen duena bezala da ezaguna"

[Ezinbesteko Node.jsen Segurtasuna](https://leanpub.com/nodejssecurity) liburutik, Liran Talen eskutik

> Askotak, programatzaileek RegEx erabiliko dute erabiltzaile sarrera esperotako baldintzekin bat datorrela balioztatzeko. Expresio Erregular erasoerraz bat ezaguna da multzo batean errepikapena erabiltzeagatik, non aztertutako testuaren aitzizkia bakarrik bat datorren zuzena den ereduarekin, baina ez testuaren gainontzekoa.

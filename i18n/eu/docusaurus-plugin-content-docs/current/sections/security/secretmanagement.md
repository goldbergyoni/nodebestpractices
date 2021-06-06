# Atera sekretuak konfigurazio fitxategietatik edo erabili horiek enkriptatzen dituen npm paketea

### Azalpena
Node.js aplikazioari giltza eta sekretuetarako sarbidea emateko modurik ohikoena eta seguruena da gordetzea exekutatzen ari den sisteman ingurune aldagaiak erabiliz, eta, behin ezarri ondoren, `process.env`. objektu globaletik sar daiteke haietara. Aplikazio batek kodetik konfigurazio guztiak ondo konfiguratuta dituen ala ez egiaztatzeko erabakigarria da kode basea edozein unetan iturburu irekiko kode bihur daitekeen, kredentzialak arriskuan jarri gabe.

Sekretuak iturburu kodearen kontrolaren barruan gorde behar diren egoera arraroetarako, [cryptr](https://www.npmjs.com/package/cryptr) bezalako pakete bat erabiliz gero, enkriptatuta gorde daitezke testu arrunt moduan orde beharrean.

Badaude hainbat tresna git commit erabiltzen dutenak commit-ak auditatzeko eta sekretuen ustekabeko gehitzeak izendatzeko, hala nola [git-secrets](https://github.com/awslabs/git-secrets).

### Kode adibidea

Ingurune aldagai batean gordetako API giltza batera sartzea:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

Erabili `cryptr` enkriptatutako sekretua gordetzeko:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);

let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');

console.log(accessToken);  // gordeta ez zegoen dekriptatutako testua bistaratzen du
```

### Beste blogari batzuek diotena

> Env var-ak erraz aldatzen dira inplementazioen artean inolako koderik aldatu gabe; konfigurazio fitxategiak ez bezala, aukera gutxi dago kodea gordailuan ustekabean egiaztatzeko; eta konfigurazio fitxategi pertsonalizatuak edo Java Sistema Propietateak bezalako beste konfigurazio mekanismo batzuk ez bezala, hizkuntza eta OS sistema agnostikoak dira. [Igorlea: 12 faktoreko aplikazioa](https://12factor.net/config)

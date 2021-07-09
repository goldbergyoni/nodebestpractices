# Izan aberrigabea, hil zure zerbitzariak ia egunero

<br/><br/>

### Azalpena

Inoiz aurkitu duzu produkzio arazo larri bat, zerbitzari batek ezarpen edo datu batzuk falta zituela, adibidez? Baiezkotan, seguruenik, inplementazioaren parte ez den tokiko aktiboekiko menpekotasun ezbeharrezkoren batengatik izango zen. Produktu arrakastatsu askok Fenix hegaztiak balira bezala tratatzen dituzte zerbitzariak: behin eta berriro jaio eta hiltzen dira, inolako kalterik gabe. Beste modu batera esanda, zure kodea denbora batez exekutatzen duen hardwarea besterik ez da zerbitzaria, eta ondoren ordezkatua izan ohi da. Antolaketa horrek

- eskalatzea ahalbidetzen du zerbitzariak dinamikoki gehituz eta kenduz albo efekturik gabe.
- mantentze lanak errazten ditu askatzen baikaitu zerbitzari bakoitza ebaluatzetik.

<br/><br/>

### Anti ereduaren kode adibideak

```javascript
// Akats arrunta 1: kargatutako fitxategiak zerbitzari batean era lokalean gordetzea
const multer = require("multer"); // express middlewarea fitxategien kargak kudeatzeko
const upload = multer({ dest: "uploads/" });

app.post("/photos/upload", upload.array("photos", 12), (req, res, next) => {});

// Akats arrunta 2: autentikazio sesioak fitxategi lokal batean edota memorian gordetzea
const FileStore = require("session-file-store")(session);
app.use(
  session({
    store: new FileStore(options),
    secret: "keyboard cat",
  })
);

// Akats arrunta 3: objektu globalean informazioa gordetzea
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### Beste blogari batzuek diotena

[Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html)en bloga:

> ...Egun batean eragiketetarako ziurtagiri zerbitzua martxan jartzeko fantasia izan nuen. Zertan zetzan ebaluazioa baina? Lankide bat eta biok korporazioko datu zentrora joan eta produkzio zerbitzari kritikoetan hasi behar genuen lanean beisbol makila, motozerra bat eta ur pistola bana esketan genuela. Eragiketen talde horrek aplikazio guztiak berriro martxan jartzeko zenbat denbora behar zuen, horixe zen ebaluatu beharrekoa. Alimaleko fantasia inozoa dirudien arren, badago jakinduria ttantta bat horretan.
> Beisbol makilak erabiltzeari uko egin beharko bazenio ere, egokia litzateke zure zerbitzariak aldian behin erreko bazenitu. Zerbitzari batek fenix bat bezalakoa izan beharko luke, aldizka errautsetatik berpizten dena...

<br/><br/>

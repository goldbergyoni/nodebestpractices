# Huts egin azkar, balidatu argudioak liburutegi dedikatu baten laguntzarekin

### Azalpen paragrafoa

Denok dakigu argudioak egiaztatzea eta azkar huts egitea garrantzitsua dela ezkutuko arazoak ekiditeko (ikusi anti-eredu kodearen adibidea behean). Horrela izan ezean, irakurri programazio explizituaren eta babes programazioaren inguruan. Errealitatean, hau ekiditeko ohitura daukagu, kode hau idazteak suposatzen duen gogaikarritasuna dela eta (adibidez pentsatu posta elektronikoa eta datak bezalako alorrak dituen JSON objektu hierarkiko bat balioztatzen), Joi eta Validator bezalako liburutegiek hau asko leuntzen dute.

### Wikipedia: babes programazioa

Babes programazioa software eta jatorri kodea hobetzeko ikuspuntua da, kalitate orokorraren terminoetan, software akats eta arazo kantitatea murriztuz. Jatorri kodea ulergarria eginez, jatorri kodea irakurgarria eta ulergarria izan behar da kode auditoria batean onartua izan dadin. Softwarea aurreikusteko moduko eran jokatzeko egin, ustekabeko sarrerak edo erabiltzaile ekintzak gertatu arren.

### Kodearen adibidea: JSON sarrera koplexua balioztatu ‘Joi’ erabiliaz

```javascript
var kideEskema = Joi.object().keys({
  pasahitza: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  jaioteguna: Joi.number().integer().min(1900).max(2013),
  postaElektronikoa: Joi.string().email(),
});

function kideBerriaGehitu(kideBerria) {
  // lehenengo baieztapena dator
  Joi.assert(kideBerria, kideEskema); //jaurti balioztatzeak huts egiten badu
  // bestelako logika hemen
}
```

### Anti eredua: balioztatze ezak akats kaskarrak dakartza

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// deskontua positiboa bada, bidali erabiltzailea bere deskontu tiketak inprimatzera
function bidaliDeskontuTiketakInprimatzera(httpResponse, kidea, deskontua) {
  if (deskontua != 0) {
    httpResponse.redirect(`/deskontuInpresioBistaratzea/${kidea.id}`);
  }
}

bidaliDeskontuTiketakInprimatzera(httpResponse, kiderenBat);
// deskontu parametroa pasatzea ahaztuta, orduan zergatik bidali da erabiltzailea deskontu pantailara?
```

</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// deskontua positiboa bada bidali erabiltzailea bere deskontu tiketak inprimatzera
function bidaliDeskontuTiketakInprimatzera(
  httpResponse: Response,
  kidea: Member,
  deskontua: number
) {
  if (deskontua != 0) {
    httpResponse.redirect(`/deskontuInpresioBistaratzea/${kidea.id}`);
  }
}

bidaliDeskontuTiketakInprimatzera(httpResponse, kiderenBat, -12);
// deskontu parametro negatiboa pasatu dugu, We passed a negative parameter discount, orduan zergatik bidali da erabiltzailea deskontu pantailara?
```

</details>

### Blogeko aipua: "Errore hauek zuzenean jaurti beharko zenituzke"

Joyent blogetik

> Kasu degeneratu bat norbaitek funtzio asinkrono bat callback gabe deitzen duenean da. Errore hauek zuzenean jaurti beharko zenituzke programa apurtuta baitago eta hau arazteak gutxienez pila arrastoa eta errorearen lekuko fitxategia berreskuratzea eskatzen ditu. Hau egiteko, funtzioaren hasieran argudio guztien motak balioztatzea gomendatzen dugu.

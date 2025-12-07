# Huts eragin azkar, balidatu argudioak liburutegi dedikatu baten laguntzarekin

### Azalpena

Denok dakigu argudioak egiaztatzea eta azkar huts egitea garrantzitsua dela ezkutuko erroreak ekiditeko (ikusi ereduaren aurkako kodearen adibidea behean). Bestela, irakurri zerbait programazio esplizituaren eta babes programazioaren gainean. Errealitatean, hori ekiditeko ohitura daukagu, kodea idazteak suposatzen duen gogaikarritasuna dela eta (adibidez pentsatu posta elektronikoa eta datak bezalako alorrak dituen JSON objektu hierarkiko bat balioztatzea). Joi eta Validator bezalako liburutegiek asko leuntzen dute lan hori

### Wikipedia: programazio defentsiboa

Programazio defentsiboa softwarea eta iturburu kodea hobetzeko ikuspuntua da, kalitate orokorrari dagokionez, software errore eta arazo kopurua murriztuz. Iturburu kodea ulergarria izango bada, irakurgarria eta ulergarria izan behar da kode auditoria batean onartua izan dadin. Softwarea aurreikusteko moduko eran jokatzeko egin behar da, ustekabeko sarrerak edo erabiltzaile ekintzak gertatu arren

### Kode adibidea: balioztatu JSON sarrera koplexua ‘Joi’ erabiliz

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

### Anti eredua: balioztatze ezak errore kaskarrak dakartza

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

### Blog aipua: "Errore hauek zuzenean jaurti beharko zenituzke"

Joyent bloga

> Kasu degeneratu bat da norbaitek funtzio asinkrono bat callback gabe deitzea atzera deirik egin gabe. Errore horiek berehala jaurti beharko zenituzke programa apurtuta baitago eta hori arazteak gutxienez pila arrastoa eta errorearen lekuko fitxategia berreskuratzea eskatzen du. Hori egiteko, funtzioaren hasieran argudio guztien motak balioztatzea gomendatzen dugu

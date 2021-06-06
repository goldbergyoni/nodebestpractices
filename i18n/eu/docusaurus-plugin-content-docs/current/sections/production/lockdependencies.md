# Blokeatu menpekotasunak

<br/><br/>

### Azalpena

Zure kodea kanpoko pakete askoren menpe dago. Esan dezagun momentjs-2.1.4 ‘behar‘ eta erabiltzen duela eta, lehenespenez, ekoizpenean erabiltzen duzunean, npmek zmomentjs 2.1.5 eskura dezake, tamalez errore berri batzuk ekarriko dituena mahaira. Npm konfigurazio fitxategiak eta `–save-exact=true` argumentuak erabiltzeak adierazten dio npm-ri instalatutako bertsio berbera erabili behar duela, eta, beraz, `npm install` exekutatzen duzun hurrengo aldian (ekoizpenean edo probak egiteko bidali nahi duzu Docker edukiontzi baten barruan) menpeko bertsio bera eskuratuko du. Horren ordez, aukera egokia eta ezaguna da `.shrinkwrap` fitxategia erabiltzea (npm erabiliz erraz sortzen dena), berak adieraziko baitu zein pakete eta bertsio instalatu beharko liratekeen inongo inguruneak tentaziorik izan ez dezan espero baino bertsio berriagorik bilatzeko.

- **Eguneratzea:** npm 5etik aurrera, menpekotasunak automatikoki blokeatzen dira .shrinkwrap erabiliz gero. Yarn pakete kudeatzaile sortu berriak ere menpekotasunak blokeatzen ditu lehenespenez.

<br/><br/>

### Kode adibidea: .npmrc fitxategi mota bat da, npmri agindua ematen diona bertsio zehatzak erabiltzeko

```npmrc
// gorde hau .npmrc fitxategi gisa zure proiektuan
save-exact:true
```

<br/><br/>

### Kode adibidea: shrinkwrap.json fitxategia, menpekotasun zuhaitz zehatza osatzen duena

```json
{
  "name": "A",
  "dependencies": {
    "B": {
      "version": "0.0.1",
      "dependencies": {
        "C": {
          "version": "0.1.0"
        }
      }
    }
  }
}
```

<br/><br/>

### Kode adibidea: npm 5 menpekotasunak blokeatzeko fitxategia - package-lock.json

```json
{
  "name": "package-name",
  "version": "1.0.0",
  "lockfileVersion": 1,
  "dependencies": {
    "cacache": {
      "version": "9.2.6",
      "resolved": "https://registry.npmjs.org/cacache/-/cacache-9.2.6.tgz",
      "integrity": "sha512-YK0Z5Np5t755edPL6gfdCeGxtU0rcW/DBhYhYVDckT+7AFkCCtedf2zru5NRbBLFk6e7Agi/RaqTOAfiaipUfg=="
    },
    "duplexify": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/duplexify/-/duplexify-3.5.0.tgz",
      "integrity": "sha1-GqdzAC4VeEV+nZ1KULDMquvL1gQ=",
      "dependencies": {
        "end-of-stream": {
          "version": "1.0.0",
          "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.0.0.tgz",
          "integrity": "sha1-1FlucCc0qT5A6a+GQxnqvZn/Lw4="
        }
      }
    }
  }
}
```

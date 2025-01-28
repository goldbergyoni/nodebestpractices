# Dokumentatu API erroreak OpenAPI (aurretik Swagger bezala ezagutua) edo GraphQL-ren laguntzarekin

### Azalpena

REST APIek HTTP estatus kodigoak erabiliz bueltatzen dituzte emaitzak. APIaren erabiltzailearentzat guztiz beharrezkoa da APIaren egituraren eta baita ere errore posibleen berri izatea, erabiltzaileak errorea atzeman eta kontu handiz kudea dezake eta. Adibidez, zure APIaren dokumentazioak aurrez azaldu behar du 409 HTTP estatus kodea bueltatzen dela bezeroaren izena iada existitzen denean (APIak bezero berriak gordetzen dituela ziurtzat joz), APIaren erabiltzaileak egoera bakoitzerako bistaratze egokiena proposa dezan. OpenAPI (aitzina Swagger) APIaren dokumentaziorako eskema bat zehazten duen estandar bat da, dokumentazioa online modu errazean sortzea ahalbidetzen duten tresna ekosistema bat proposatuz. Begiratu hurrengo pantailako argazkiak beherago

Dagoeneko GraphQL erabiltzen baduzu zure APIaren helburuetarako, zure eskemak iada zorrozki bermatzen du zein errorek zein itxura eduki beharko luketen ([dokumentuan laburbilduta](https://facebook.github.io/graphql/June2018/#sec-Errors)) eta nola kudeatu beharko liratekeen zure bezero tresnekin. Gainera, komentarioz osatutako dokumentazioa ere gehi zenezake

### GraphQL errore baten adibidea

> Adibide honek [SWAPI](https://graphql.org/swapi-graphql) erabiltzen du, Star Warsen APIa.

```graphql
# huts egin beharko luke id ez baita zuzena
{
  filmea(id: "1ZmlsbXM6MQ==") {
    izenburua
  }
}
```

```json
{
  "erroreak": [
    {
      "mezua": "Ez dago sarrerarik cache lokalean https://swapi.co/api/films/.../-rentzat",
      "lekuak": [
        {
          "ilara": 2,
          "zutabea": 3
        }
      ],
      "bidea": ["filmea"]
    }
  ],
  "datuak": {
    "filmea": null
  }
}
```

### Blog aipua: "Zure deitzaileei zein errore gertatu diren esan behar diezu"

Joyent blogeko “Node.js erregistratzea“ hitz gako bati esker sailkatua

> Erroreak nola kudeatu behar diren aztertu dugu, baina funtzio berri bat idazten ari zarenean, nola bidaltzen dizkiozu erroreak zure funtzioa deitu duen kodeari? …Zein errore gerta litezkeen edo haiek zer esan nahi duten ez badakizu, esan nahi du zure programa ezin litekeela zuzena izan, txiripaz izan ezean. Beraz, funtzio berri bat idazten ari bazara, zure deitzaileei zein errore gerta litezkeen eta haiek zer esan nahi duten esan behar diezu…

### Tresna erabilgarria: Swagger Online Dokumentazio Sortzailea

![Swagger API Eskema](../../assets/images/swaggerDoc.png "APIen errore kudeaketa")

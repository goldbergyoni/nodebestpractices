# Dokumentatu API erroreak OpenAPI (aurretik Swagger bezala ezagutua) edo GraphQL-ren laguntzarekin

### Azalpen Paragrafoa

REST APIek HTTP estatus kodigoak erabiliz bueltatzen dituzte emaitzak, APIaren erabiltzailearentzat guztiz beharrezkoa da APIaren egituraren eta baita errore posibleen berri izatea, erabiltzaileak errorea harrapatu eta kontu handiz kudea dezake. Adibidez, zure APIaren dokumentazioak aurrez azaldu behar du 409 HTTP estatus kodea bueltatzen dela bezeroaren izena iada existitzen denean (APIak bezero berriak gordetzen dituela ziurtzat joz), APIaren erabiltzaileak egoera bakoitzerako bistaratze egokiena proposa dezan. OpenAPI (aintzina Swagger) APIaren dokumentaziorako eskema bat zehazten duen estandar bat da, dokumentazioa online modu errezean sortzea ahalbidetzen duten tresna ekosistema bat proposatuz, begiratu hurrengo pantaila argazkiak beherago

Iada GraphQL erabiltzen baduzu zure APIaren helmugetarako, zure eskemak iada zorrozki bermatzen du zein errorek zein itxura eduki beharko luketeen ([dokumentuan laburbilduta](https://facebook.github.io/graphql/June2018/#sec-Errors)) eta nola kudeatu beharko liratekeen zure bezero zatiko tresnekin. Gainera, komentarioz osatutako dokumentazioa ere gehi zenezake.

### GraphQL Errore baten Adibidea

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
      "bidea": [
        "filmea"
      ]
    }
  ],
  "datuak": {
    "filmea": null
  }
}
```

### Blogeko Aipua: "Zure deilariei zein errore gertatu diren esan behar diezu"

Joyent blogetik, “Node.js erregistratzea“ hitz gako bati esker sailkatua

 > Erroreak nola kudeatzeari buruz hitz egin dugu, baina funtzio berri bat idazten ari zarenean, nola bidaltzen dizkiozu erroreak zure funtzioa deitu duen kodeari? …Zein errore gerta litezkeen edo hauek zer esan nahi duten ez badakizu, zure programa ezin litekeela zuzela izan esan nahi du, txiripaz izan ezean. Beraz, funtzio berri bat idazten ari bazara, zure deilariei zein errore gerta litezkeen eta hauek zer esan nahi duten esan behar diezu…

### Tresna Erabilgarria: Swagger Online Dokumentazio Sortzailea

![Swagger API Eskema](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/swaggerDoc.png "APIen errore kudeaketa")

# Ezkutatu bezeroari erroreen xehetasunak

### Azalpena

Produkzioan saihestu beharko litzateke bezeroari azaltzea aplikazioaren erroreen xehetasunak, haren xehetasun sentikorrak agerian jartzeko arriskua dagoelako, hala nola zerbitzariaren fitxategien bideak, erabiltzen ari diren hirugarrenen moduluak eta erasotzaileek balia ditzaketen aplikazioaren barneko beste lan fluxu batzuk.
Expressek erroreen kudeatzaile integratu bat dakar, aplikazioan sor daitezkeen erroreak zaintzen dituena. Erroreak kudeatzeko middleware funtzio lehenetsi hori middleware funtzioen pilaren amaieran gehitzen da. Errorea `next()`era pasatzen baduzu eta errore kudeatzaile pertsonalizatu batean kudeatzen ez baduzu, Expresseko erroreen kudeatzaile integratuak kudeatuko du; errorea bezeroan idatziko da pilaren aztarnarekin. Hala gertatuko da `NODE_ENV` garapenean (`development`) ezarrita dagoenean; baina, `NODE_ENV` ekoizpenean (`production`) ezarrita dagoenean, HTTP erantzun kodea bakarrik idatziko da, pila aztarna, ordea, ez.

### Kode adibidea: Express erroreen kudeatzailea

```javascript
// ekoizpeneko errore kudeatzailea
// ez dago informaziorik agerian erabiltzailearentzat
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: {},
  });
});
```

### Baliabide osagarriak

🔗 [Express.jsen erroreak kudeatzeko dokumentazioa](https://expressjs.com/en/guide/error-handling.html)

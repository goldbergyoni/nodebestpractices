# Erabili 3 zati proba izen bakoitzean

<br/><br/>

### Azalpena

Proben txostenak esan behar du aplikazioaren berrikuspenak erantzuten dien kodea nahitaez ezagutzen ez duten pertsonen beharrei: probatzailea, inplementazioa egiten ari den DevOps injinerua eta zu zeu hemendik bi urtera. Hori errazago lortuko duzu probak eskatutako baldintzak kontuan hartzen baditu eta hiru zatiz osatua badago:

(1) Zer ari gara probatzen? Adibidez, ProduktuZerbitzua.gehituProduktuBerria funtzioa

(2) Zein egoera eta agertokitan? Adibidez, ez zaio preziorik pasatzen funtzioari

(3) Zein da espero den emaitza? Adibidez, produktu berria ez dago onartua

<br/><br/>

### Kode adibidea: 3 zati dituen proba izena

```javascript
//1. unitatea frogapean
describe('Produktu Zerbitzua', () => {
  describe('Produktu berria gehitu', () => {
    //2. kasua eta 3. esperotakoa
    it('Prezioa zehaztuta ez dagoenean, produktuaren egoera baieztapenaren zai dago', () => {
      const produktuBerria = new ProduktuZerbitzua().gehitu(...);
      expect(produktuBerria.egoera).to.equal('baieztapenarenZai');
    });
  });
});
```

<br/><br/>

### Anti ereduaren kode adibidea: norberak proba osoaren kodea irakurri behar du eta asmoa ulertu
```javascript
describe('Produktu Zerbitzua', () => {
  describe('Produktu berria gehitu', () => {
    it('Egoera zuzena itzuli behar du', () => {
        //mmm, zer egiaztatzen ari da proba hau? zein da kasua eta espero dena?
      const produktuBerria = new ProduktuZerbitzua().gehitu(...);
      expect(produktuBerria.egoera).to.equal('baieztapenarenZai');
    });
  });
});
```

<br/><br/>

### "Zuzen egiteko adibidea: proben txostenak dokumentuaren baldintzak biltzen ditu"

["30 Node.jsren proba jarraibide egokiak" blogetik hartua, Yoni Goldbergen eskutik](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

![Proba txostenaren adibidea](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "Proba txostenaren adibidea")

<br/><br/>

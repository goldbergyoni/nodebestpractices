# Erabili 3 zati proba izen bakoitzean

<br/><br/>

### Azalpen Paragrafoa

Proben txostenak, aplikazioaren berrikuspenak kodea ezagun ez dutenentzako baldintzak betetzen dituen aipatu behar du: saiatzailea, inplementazioa egiten ari den DevOpsa eta hemendik bi urterako etorkizuneko zu. Hau hoberen lor daiteke probak eskatutako baldintzak kontuan hartzen baditu eta hiru zatiz osatua badago:

(1) Zer ari gara frogatzen? Adibidez, ProduktuZerbitzua.gehituProduktuBerria funtzioa

(2) Zein egoera eta kasutan? Adibidez, ez zaio preziorik pasatu funtzioari

(3) Zein da esperotako emaitza? Adibidez, produktu berria ez da onartua

<br/><br/>

### Kodearen adibidea: 3 zati dituen proba izena

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

### Kodearen adibidea – Anti Eredua: norberak proba osoaren kodea irakurri behar du eta asmoa ulertu

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

### "Zuzen Egitearen Adibidea: Proben txostenak dokumentuaren baldintzak biltzen ditu"

["30 Node.jsen proba jarraibide egokiak" blogetik, Yoni Goldbergen eskutik](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

![Proba txostenaren adibidea](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "Proba txostenaren adibidea")

<br/><br/>

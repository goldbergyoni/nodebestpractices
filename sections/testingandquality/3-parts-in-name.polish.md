# Dołącz 3 części do każdej nazwy testu

<br/><br/>

### Wyjaśnienie jednym akapitem

Raport z testu powinien informować, czy bieżąca wersja aplikacji spełnia wymagania osób, które niekoniecznie znają kod: testera, wdrażającego program DevOps i przyszłego ciebie za dwa lata. Można to najlepiej osiągnąć, jeśli testy mówią na poziomie wymagań i obejmują 3 części:

(1) Co jest testowane? Na przykład, metoda ProductsService.addNewProduct

(2) W jakich okolicznościach i scenariuszu? Na przykład, żadna cena nie jest przekazywana do metody

(3) Jaki jest oczekiwany wynik? Na przykład nowy produkt nie został zatwierdzony

<br/><br/>

### Przykład kodu: nazwa testu, która obejmuje 3 części
```javascript
//1. unit under test
describe('Products Service', () => {
  describe('Add new product', () => {
    //2. scenario and 3. expectation
    it('When no price is specified, then the product status is pending approval', () => {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

### Przykład kodu - Antywzorzec: należy przeczytać cały kod testowy, aby zrozumieć zamiar
```javascript
describe('Products Service', () => {
  describe('Add new product', () => {
    it('Should return the right status', () => {
        //hmm, what is this test checking? what are the scenario and expectation?
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

###  "Przykład robienia tego dobrze: raport z testu przypomina dokument wymagań"

 [Z bloga "30 Node.js testing best practices" od Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![Przykład raportu testu](../../assets/images/test-report-like-requirements.jpeg "A test report example")

<br/><br/>

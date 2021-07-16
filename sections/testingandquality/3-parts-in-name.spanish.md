# Incluye 3 partes en cada nombre de prueba

<br><br>

### Párrafo de explicación

Un reporte de pruebas debe ser capaz de probar si la revisión actual de la aplicación cumple con los requerimientos a personar que no necesariamente esta familiarizadas con el código: El testes, el ingeníero DevOps que esta desplegando y tu futuro yo dentro de 2 años. Esto puede ser logrado de gran manera si las pruebas hablan al nivel de requerimientos e incluyen 3 partes:

(1) ¿Qué está siendo probado? Por ejemplo, el método ProductsService.addNewProduct.

(2) ¿Bajo qué circunstancias y escenario? Por ejemplo, no se paso precio al método.

(3) ¿Cuál es el resultado esperado? Por ejemplo, el nuevo producto no es aceptado.

<br><br>

### Código de ejemplo - un nombre de prueba que incluye 3 partes

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

### Código de ejemplo anti-patrón - Se debe leer todo el código de prueba para entender la intención

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

### "Ejemplo haciéndolo bien: El reporte de pruebas se parece al documento de requerimientos"

[del blog "30 Node.js testing best practices" por Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![Un ejemplo de reporte de pruebas](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "Un ejemplo de reporte de pruebas")

<br/><br/>
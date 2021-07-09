# Inclua 3 partes em cada nome de teste

<br/><br/>

### Explicação em um Parágrafo

Um relatório de teste deve informar se a revisão atual do aplicativo satisfaz os requisitos para as pessoas que não estão necessariamente familiarizadas com o código: o testador, o engenheiro de DevOps que está implantando e o futuro daqui a dois anos. Isso pode ser melhor alcançado se os testes falarem no nível de requisitos e incluírem 3 partes:

(1) O que está sendo testado? Por exemplo, o método ProductsService.addNewProduct

(2) Em que circunstâncias e cenário? Por exemplo, nenhum preço é passado para o método

(3) Qual é o resultado esperado? Por exemplo, o novo produto não é aprovado

<br/><br/>

### Exemplo de código: um nome de teste que inclui 3 partes
```javascript
//1. unidade em teste
describe('Serviço de Produtos', function() {
  describe('Adicionar novo produto', function() {
    //2. cenário e 3. expectativa
    it('Quando nenhum preço é especificado, o status do produto está aguardando aprovação', ()=> {
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

### Exemplo de código - Anti-padrão: é necessário ler todo o código de teste para entender a intenção
```javascript
describe('Serviço de Produtos', function() {
  describe('Adicionar novo produto', function() {
    it('Deve devolver o status correto', ()=> {
        //hmm, o que é esta verificação de teste? Quais são o cenário e a expectativa?
      const newProduct = new ProductService().add(...);
      expect(newProduct.status).to.equal('pendingApproval');
    });
  });
});
```

<br/><br/>

###  "Fazendo direito exemplo: O relatório de teste se assemelha ao documento de requisitos"

 [Do blog "30 Node.js testing best practices" por Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![Um exemplo de relatório de teste](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/test-report-like-requirements.jpeg "Um exemplo de relatório de teste")

<br/><br/>
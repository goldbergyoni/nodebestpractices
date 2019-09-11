# Fluxos de testes de erros usando seu framework favorito

### Explicação em um Parágrafo

Testar caminhos "felizes" não é melhor do que testar falhas. Uma boa cobertura de código de teste exige testar caminhos excepcionais. Caso contrário, não há confiança de que as exceções sejam realmente tratadas corretamente. Cada estrutura de testes unitários, como o [Mocha](https://mochajs.org/) e [Chai](http://chaijs.com/), suporta testes de exceção (exemplos de código abaixo). Se você achar tedioso testar todas as funções internas e exceções, você pode resolver testando apenas erros HTTP da API REST.

### Exemplo de código: garantindo que a exceção correta seja lançada usando Mocha & Chai

```javascript
describe("Bate-papo do Facebook", () => {
  it("Notifica em nova mensagem de bate-papo", () => {
    var chatService = new chatService();
    chatService.participants = getDisconnectedParticipants();
    expect(chatService.sendMessage.bind({ message: "Oi" })).to.throw(ConnectionError);
  });
});

```

### Exemplo de código: garantindo que a API retorne o código de erro HTTP correto

```javascript
it("Cria um novo grupo no Facebook", function (done) {
  var invalidGroupInfo = {};
  httpRequest({
    method: 'POST',
    uri: "facebook.com/api/groups",
    resolveWithFullResponse: true,
    body: invalidGroupInfo,
    json: true
  }).then((response) => {
    // se fôssemos executar o código neste bloco, nenhum erro foi lançado na operação acima
  }).catch(function (response) {
    expect(400).to.equal(response.statusCode);
    done();
  });
});
```

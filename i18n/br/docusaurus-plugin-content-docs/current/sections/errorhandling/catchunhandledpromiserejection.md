# Capture rejeições de promises não tratadas

<br/><br/>

### Explicação em um Parágrafo

Normalmente, a maioria do código de um aplicativo Node.js/Express moderno é executado dentro de promises - seja no manipulador .then, em uma função callback ou em um bloco catch. Surpreendentemente, a menos que um desenvolvedor tenha lembrado de adicionar uma cláusula .catch, os erros lançados nesses locais não serão manipulados pelo manipulador de eventos uncaughtException e desaparecerão. Versões recentes do Node adicionaram uma mensagem de aviso quando uma rejeição não tratada aparece, embora isso possa ajudar a perceber quando as coisas dão errado, obviamente não é um método adequado de tratamento de erros. A solução direta é nunca esquecer de incluir cláusulas .catch em cada chamada de cadeia de promessa e redirecionar para um manipulador de erro centralizado. No entanto, criar sua estratégia de tratamento de erros apenas contando com a disciplina do desenvolvedor é um pouco frágil. Conseqüentemente, é altamente recomendado usar uma alternativa elegante e usar o `process.on ('unhandledRejection', callback)` - isso garantirá que qualquer erro prometido, se não for tratado localmente, receba seu tratamento.

<br/><br/>

### Exemplo de código: esses erros não serão detectados por nenhum manipulador de erros (exceto unhandledRejection)

```javascript
DAL.getUserById(1).then((johnSnow) => {
  // esse erro vai simplesmente desaparecer
  if(johnSnow.isAlive == false)
      throw new Error('ahhhh');
});

```

<br/><br/>

### Exemplo de código: captura de promises não resolvidas e rejeitadas

```javascript
process.on('unhandledRejection', (reason, p) => {
  // Acabei de receber uma rejeição de promise não tratada, já que nós já temos uma alternativa para erros não manipulados (veja abaixo), vamos jogar e deixar ele lidar com isso
  throw reason;
});
process.on('uncaughtException', (error) => {
  // Acabei de receber um erro que nunca foi tratado, tempo para resolvê-lo e, em seguida, decidir se é necessário reiniciar
  errorManagement.handler.handleError(error);
  if (!errorManagement.handler.isTrustedError(error))
    process.exit(1);
});

```

<br/><br/>

### Citação de Blog: "Se você pode cometer um erro, em algum momento você vai"

 Do blog James Nelson

 > Vamos testar sua compreensão. Qual das seguintes opções você espera que imprima um erro no console?

```javascript
Promise.resolve(‘promised value’).then(() => {
  throw new Error(‘error’);
});

Promise.reject(‘error value’).catch(() => {
  throw new Error(‘error’);
});

new Promise((resolve, reject) => {
  throw new Error(‘error’);
});
```

> Eu não sei sobre você, mas minha resposta é que eu esperaria que todos eles imprimissem um erro. No entanto, a realidade é que vários ambientes JavaScript modernos não imprimem erros para nenhum deles. O problema de ser humano é que, se você puder cometer um erro, em algum momento você o fará. Tendo isso em mente, parece óbvio que devemos projetar as coisas de tal maneira que os erros causem o mínimo de dano possível, e isso significa manipular erros por padrão, não descartá-los.

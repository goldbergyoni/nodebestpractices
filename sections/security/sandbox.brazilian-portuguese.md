# Rode códigos não seguros em uma sandbox

### Explicação em um Parágrafo

Como regra geral, deve-se executar apenas seus próprios arquivos JavaScript. Teorias à parte, os cenários do mundo real exigem a execução de arquivos JavaScript que estão sendo transmitidos dinamicamente em tempo de execução. Por exemplo, considere uma estrutura dinâmica como o webpack que aceita carregadores personalizados e os execute dinamicamente durante o tempo de compilação. Na existência de algum plugin malicioso, nós queremos minimizar os danos e talvez até mesmo deixar o fluxo terminar com sucesso - isso requer a execução dos plugins em um ambiente sandbox que é totalmente isolado em termos de recursos, falhas e as informações que compartilhamos com ele. Três opções principais podem ajudar a alcançar esse isolamento:

- um processo filho dedicado - isso fornece um rápido isolamento de informações, mas exige domar o processo filho, limitar seu tempo de execução e recuperar-se dos erros
- um framework cloud serverless preenche todos os requisitos do sandbox, mas a implementação e invocação de uma função FaaS dinamicamente não é um passeio no parque
- algumas bibliotecas no npm, como [sandbox](https://www.npmjs.com/package/sandbox) e [vm2](https://www.npmjs.com/package/vm2) permitem a execução de código isolado em uma única linha de código. Embora esta última opção ganhe na simplicidade, ela fornece uma proteção limitada

### Exemplo de código - Usando a biblioteca Sandbox para executar o código isoladamente

```javascript
const Sandbox = require("sandbox")
  , s = new Sandbox()

s.run( "lol)hai", function( output ) {
  console.log(output);
  //output='Syntax error'
});

// Exemplo 4 - Código restrito
s.run( "process.platform", function( output ) {
  console.log(output);
  //output=Null
})

// Example 5 - Loop infinito
s.run( "while (true) {}", function( output ) {
  console.log(output);
  //output='Timeout'
})
```

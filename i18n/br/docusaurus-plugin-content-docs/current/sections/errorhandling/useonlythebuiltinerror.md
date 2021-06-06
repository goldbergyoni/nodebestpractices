# Utilize apenas o objeto interno Error

### Explicação em um Parágrafo

A natureza permissiva do JS junto com sua variedade de opções de fluxo de código (por exemplo, EventEmitter, Callbacks, Promises, etc) cria uma grande variação em como os desenvolvedores lidam com erros – alguns usam strings, outros definem os próprios tipos customizados. Usar o objeto interno Error do Node.js ajuda a manter a uniformidade dentro do seu código e com bibliotecas de terceiros, também preserva informações significativas como o rastreamento de stack. Ao gerar a exceção, geralmente é uma boa prática preenchê-la com propriedades contextuais adicionais, como o nome do erro e o código de erro HTTP associado. Para obter essa uniformidade e práticas, considere estender o objeto de erro com propriedades adicionais, consulte o exemplo de código abaixo

### Exemplo de código - fazendo certo

```javascript
// jogando um Error de uma função típica, seja síncrona ou assíncrona
if(!productToAdd)
    throw new Error("Como posso adicionar um novo produto quando nenhum valor é fornecido?");

// 'jogando' um Error de um EventEmitter
const myEmitter = new MyEmitter();
myEmitter.emit('error', new Error('whoops!'));

// 'jogando' um Error de uma Promise
const addProduct = async (productToAdd) => {
  try {
    const existingProduct = await DAL.getProduct(productToAdd.id);
    if (existingProduct !== null) {
      throw new Error("O produto já existe!");
    }
  } catch (err) {
    // ...
  }
}
```

### Exemplo de código – Anti padrão

```javascript
// lançar uma string não possui informações de rastreamento de stack e outras propriedades de dados importantes
if(!productToAdd)
    throw ("Como posso adicionar um novo produto quando nenhum valor é fornecido?");
```

### Exemplo de código - fazendo isso ainda melhor

```javascript
// Objeto de erro centralizado que deriva do Error do Node
function AppError(name, httpCode, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.name = name;
    //...outras propriedades atribuídas aqui
};

AppError.prototype = Object.create(Error.prototype);
AppError.prototype.constructor = AppError;

module.exports.AppError = AppError;

// cliente jogando uma exceção
if(user == null)
    throw new AppError(commonErrors.resourceNotFound, commonHTTPErrors.notFound, "mais explicações", true)
```

### Citação de Blog: "Não vejo o valor em ter vários tipos diferentes"

Do blog, Ben Nadel classificado como 5 para as palavras-chave “Node.js error object”

>…”Pessoalmente, não vejo o valor em ter vários tipos diferentes de objetos de erro – JavaScript, como uma linguagem, não parece atender à captura de erros baseada em construtor. Como tal, diferenciar em uma propriedade de objeto parece muito mais fácil do que diferenciar em um tipo Construtor…

### Citação de Blog: "Uma string não é um erro"

Do blog, devthought.com classificado como 6 para as palavras-chave “Node.js error object”

> …passar uma string em vez de um erro resulta em interoperabilidade reduzida entre os módulos. Isso quebra relações com APIs que podem estar realizando checagens `instanceof` Error, ou que querem saber mais sobre o erro. Objetos Error, como veremos, têm propriedades muito interessantes em mecanismos modernos de JavaScript, além de manter a mensagem transmitida ao construtor…

### Citação de Blog: "Herdar de Error não adiciona muito valor"

Do blog machadogj

> …Um problema que eu tenho com a classe Error é que não é tão simples estendê-la. Claro, você pode herdar a classe e criar suas próprias classes Error como HttpError, DbError, etc. No entanto, isso leva tempo e não acrescenta muito valor, a menos que você esteja fazendo algo com tipos. Às vezes, você só quer adicionar uma mensagem e manter o erro interno, e às vezes você pode querer estender o erro com parâmetros, e tal…

### Citação do Blog: "Todos os erros do sistema e do JavaScript levantados pelo Node.js herdam de Error"

Da documentação oficial do Node.js

> …Todos os erros de JavaScript e do sistema gerados pelo Node.js herdam ou são instâncias da classe padrão Error do JavaScript e têm a garantia de fornecer pelo menos as propriedades disponíveis nessa classe. Um objeto genérico Erro de JavaScript que não denota nenhuma circunstância específica de por que o erro ocorreu. Objetos Error capturam um "rastreamento de stack" detalhando o ponto no código no qual o Erro foi instanciado e podem fornecer uma descrição do erro em texto. Todos os erros gerados pelo Node.js, incluindo todos os erros de sistema e JavaScript, serão instâncias ou herdarão da classe Error…

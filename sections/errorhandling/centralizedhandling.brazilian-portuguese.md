# Lide com erros de forma centralizada. Não dentro de middlewares

### Explicação em um Parágrafo

Sem um objeto dedicado para o tratamento de erros, maiores são as chances de erros importantes se esconderem sob o radar devido a manuseio inadequado. O objeto manipulador de erros é responsável por tornar o erro visível, por exemplo, gravando em um logger bem formatado, enviando eventos para algum produto de monitoramento, como [Sentry](https://sentry.io/), [Rollbar](https://rollbar.com/), ou [Raygun](https://raygun.com/). A maioria dos frameworks web, como [Express](http://expressjs.com/en/guide/error-handling.html#writing-error-handlers), fornece um mecanismo de manipulação de erro através de um middleware. Um fluxo típico de manipulação de erros pode ser: Algum módulo lança um erro -> o roteador da API detecta o erro -> ele propaga o erro para o middleware (por exemplo, Express, KOA) que é responsável por detectar erros -> um manipulador de erro centralizado é chamado -> o middleware está sendo informado se erro é um erro não confiável (não operacional) para que ele possa reiniciar o aplicativo graciosamente. Note que é uma prática comum, mas errada, lidar com erros no middleware do Express - isso não cobre erros que são lançados em interfaces que não sejam da web.

### Exemplo de código - um fluxo de erro típico

```javascript
// camada de acesso a dados, não lidamos com erros aqui
DB.addDocument(newCustomer, (error, result) => {
  if (error)
    throw new Error("explicação melhor do erro aqui", other useful parameters)
});

// Código de rota da API, detectamos erros de sincronos e assíncronos e encaminhamos para o middleware
try {
  customerService.addNew(req.body).then((result) => {
    res.status(200).json(result);
  }).catch((error) => {
    next(error)
  });
}
catch (error) {
  next(error);
}

// Erro ao manipular o middleware, delegamos a manipulação ao manipulador de erro centralizado
app.use(async (err, req, res, next) => {
  const isOperationalError = await errorHandler.handleError(err);
  if (!isOperationalError) {
    next(err);
  }
});
```

### Exemplo de código - manipulando erros dentro de um objeto dedicado

```javascript
module.exports.handler = new errorHandler();

function errorHandler() {
  this.handleError = async function(err) {
    await logger.logError(err);
    await sendMailToAdminIfCritical;
    await saveInOpsQueueIfCritical;
    await determineIfOperationalError;
  };
}
```

### Exemplo de código - Anti-padrão: manipulando erros dentro do middleware

```javascript
// middleware lida com o erro diretamente, quem vai lidar com tarefas Cron e erros de teste?
app.use((err, req, res, next) => {
  logger.logError(err);
  if (err.severity == errors.high) {
    mailer.sendMail(configuration.adminMail, 'Erro crítico ocorreu', err);
  }
  if (!err.isOperational) {
    next(err);
  }
});
```

### Citação de Blog: "Às vezes, níveis mais baixos não podem fazer nada útil, exceto propagar o erro para quem o chamou"

Do blog Joyent, classificado como 1 para as palavras-chave “Node.js error handling”

> …Você pode acabar lidando com o mesmo erro em vários níveis do stack. Isso acontece quando os níveis mais baixos não podem fazer nada útil, exceto propagar o erro para quem o chamou, o qual propaga o erro para quem o chamou e assim por diante. Geralmente, somente quem chama sabe qual é a resposta apropriada, seja para repetir a operação, relatar um erro ao usuário ou outra coisa. Mas isso não significa que você deve tentar reportar todos os erros para uma única callback de nível superior, porque a própria callback não pode saber em que contexto o erro ocorreu…

### Citação de Blog: "Lidar com cada erro individualmente resultaria em uma enorme duplicação"

Do blog JS Recipes classificado como 17 para as palavras-chave “Node.js error handling”

> ……Apenas no controlador do api.js da Hackathon Starter, existem mais de 79 ocorrências de objetos de erro. Lidar com cada erro individualmente resultaria em uma enorme quantidade de duplicação de código. A próxima melhor opção que você tem é delegar toda a lógica de tratamento de erros para um middleware do Express…

### Citação de Blog: "Erros de HTTP não têm lugar na sua base de código"

Do blog Daily JS classificado como 14 para as palavras-chave “Node.js error handling”

> ……Você deve definir propriedades úteis em objetos de erro, mas use essas propriedades de forma consistente. E não cruze os fluxos: Erros de HTTP não têm lugar na sua base de código. Ou para desenvolvedores de navegador, os erros do Ajax têm um lugar no código que fala com o servidor, mas não no código que processa os templates Mustache…

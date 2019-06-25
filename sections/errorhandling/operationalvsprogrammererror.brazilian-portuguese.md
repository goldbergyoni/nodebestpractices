# Diferencie erros operacionais vs erros de programação

### Explicação em um Parágrafo

Distinguir os dois tipos de erros a seguir minimizará o tempo de inatividade do seu aplicativo e ajudará a evitar bugs insanos: Erros operacionais referem-se a situações em que você entende o que aconteceu e o impacto disso – por exemplo, uma consulta a algum serviço HTTP falhou devido a um problema de conexão. Por outro lado, os erros do programador referem-se a casos em que você não tem idéia do motivo e, às vezes, de onde um erro ocorreu – Pode ser algum código que tentou ler um valor indefinido ou um conjunto de conexões de banco de dados que vaze memória. Erros operacionais são relativamente fáceis de lidar – geralmente registrar o erro é o suficiente. As coisas ficam complicadas quando um erro do programador aparece, o aplicativo pode estar em um estado inconsistente e não há nada melhor que você possa fazer do que reiniciar normalmente.

### Exemplo de código - marcando um erro como operacional (confiável)

```javascript
// marcando um objeto de erro como operacional 
const myError = new Error("Como posso adicionar um novo produto quando nenhum valor é fornecido?");
myError.isOperational = true;

// ou se você estiver usando alguma fábrica centralizada de erros (veja outros exemplos no marcador "Use somente o objeto Error interno")
class AppError {
  constructor (commonType, description, isOperational) {
    Error.call(this);
    Error.captureStackTrace(this);
    this.commonType = commonType;
    this.description = description;
    this.isOperational = isOperational;
  }
};

throw new AppError(errorManagement.commonErrors.InvalidInput, "Descreva aqui o que aconteceu", true);

```

### Citação de Blog: "Erros do programador são bugs no programa"

Do blog, Joyent classificado como 1 para as palavras-chave “Node.js error handling”

 > …A melhor maneira de se recuperar de erros de programação é travar imediatamente. Você deve executar seus programas usando um restaurador que irá reiniciar automaticamente o programa em caso de falha. Com um reinicializador executando, reiniciar é a maneira mais rápida de restaurar o serviço confiável diante de um erro temporário do programador…

### Citação de Blog: "Não há maneira segura de sair sem criar algum estado frágil indefinido"

Da documentação oficial do Node.js

 > …Pela própria natureza de como o throw funciona em JavaScript, quase nunca há como "continuar de onde você parou" com segurança, sem vazar referências, ou criar algum outro tipo de estado frágil indefinido. A maneira mais segura de responder a um erro é desligar o processo. É claro que, em um servidor web normal, você pode ter muitas conexões abertas, e não é razoável encerrá-las abruptamente porque um erro foi acionado por outra pessoa. A melhor abordagem é enviar uma resposta de erro à solicitação que acionou o erro, deixando as outras concluírem em seu tempo normal e parar de atender novas solicitações nesse processo..

### Citação de Blog: "Caso contrário, você arrisca o estado do seu aplicativo"

Do blog, debugable.com classificado como 3 para as palavras-chave “Node.js uncaught exception”

 > …Então, a menos que você realmente saiba o que está fazendo, você deve executar um reinício do seu serviço depois de receber um“uncaughtException” evento de exceção. Caso contrário, você corre o risco de que o estado do seu aplicativo, ou de bibliotecas de terceiros, se torne inconsistente, levando a todos os tipos de bugs malucos…

### "Citação de Blog: Existem três escolas de pensamentos sobre tratamento de erros"

Do blog: JS Recipes

> …Existem basicamente três escolas de pensamento sobre tratamento de erros:
1. Deixar o aplicativo travar e reiniciá-lo.
2. Lidar com todos os erros possíveis e nunca travar.
3. Uma abordagem equilibrada entre os dois.
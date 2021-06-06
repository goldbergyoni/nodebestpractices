# Finalize o processo quando um estranho chegar

### Explicação em um Parágrafo

Em algum lugar dentro do seu código, um objeto manipulador de erro é responsável por decidir como proceder quando um erro é lançado – se o erro for confiável (por exemplo, erro operacional, consulte mais explicações na melhor prática #3), a gravação no arquivo de log poderá ser suficiente. As coisas ficam complicadas se o erro não for familiar - isso significa que algum componente pode estar em um estado defeituoso e todas as solicitações futuras estão sujeitas a falhas. Por exemplo, suponha um serviço de emissor de token único e com estado, que lançou uma exceção e perdeu seu estado - a partir de agora ele pode se comportar de maneira inesperada e fazer com que todas as solicitações falhem. Neste cenário, mate o processo e use uma "ferramenta de reinicialização" (como Forever, PM2, etc) para começar de novo com um estado limpo.

### Exemplo de código: decidindo se vai travar

```javascript
// Supondo que os desenvolvedores marquem erros operacionais conhecidos com error.isOperational = true, leia as melhores práticas #3
process.on('uncaughtException', function(error) {
  errorManagement.handler.handleError(error);
  if(!errorManagement.handler.isTrustedError(error))
  process.exit(1)
});

// manipulador de erro centralizado encapsula lógica relacionada à manipulação de erros
function errorHandler() {
  this.handleError = function (error) {
    return logger.logError(err)
      .then(sendMailToAdminIfCritical)
      .then(saveInOpsQueueIfCritical)
      .then(determineIfOperationalError);
  }

  this.isTrustedError = function (error) {
    return error.isOperational;
  }
}
```

### Citação de Blog: "A melhor maneira é travar"

Do blog Joyent

> …A melhor maneira de se recuperar de erros de programação é travar imediatamente. Você deve executar seus programas usando um restaurador que irá reiniciar automaticamente o programa em caso de falha. Com um reinicializador executando, o travamento é a maneira mais rápida de restaurar um serviço confiável diante de um erro temporário do programador…

### "Citação de Blog: Existem três escolas de pensamentos sobre tratamento de erros"

Do blog: JS Recipes

> …Existem basicamente três escolas de pensamento sobre tratamento de erros:
1. Deixar o aplicativo travar e reiniciá-lo.
2. Lidar com todos os erros possíveis e nunca travar.
3. Uma abordagem equilibrada entre os dois.

### Citação de Blog: "Não há maneira segura de sair sem criar algum estado frágil indefinido"

Da documentação oficial do Node.js

 > …Pela própria natureza de como o throw funciona em JavaScript, quase nunca há como "continuar de onde você parou" com segurança, sem vazar referências, ou criar algum outro tipo de estado frágil indefinido. A maneira mais segura de responder a um erro é desligar o processo. É claro que, em um servidor web normal, você pode ter muitas conexões abertas, e não é razoável encerrá-las abruptamente porque um erro foi acionado por outra pessoa. A melhor abordagem é enviar uma resposta de erro à solicitação que acionou o erro, deixando as outras concluírem em seu tempo normal e parar de atender novas solicitações nesse processo..

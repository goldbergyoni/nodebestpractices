# Atribua‘TransactionId’ para cada declaração de log

<br/><br/>

### Explicação em um Parágrafo

Um log típico é um armazém de entradas de todos os componentes e requisições. Após a detecção de alguma linha ou erro suspeito, torna-se difícil combinar outras linhas que pertencem ao mesmo fluxo específico (por exemplo, o usuário "João" tentou comprar algo). Isso se torna ainda mais crítico e desafiador em um ambiente de microsserviço quando uma requisição/transação pode se estender por vários computadores. Aborde isso atribuindo um valor de identificador de transação exclusivo a todas as entradas da mesma solicitação, para que, ao detectar uma linha, você possa copiar o id e pesquisar por todas as linhas que possuam ID de transação semelhante. No entanto, alcançar isso no Node não é simples, pois um único thread é usado para atender a todas as solicitações - considere o uso de uma biblioteca que possa agrupar dados no nível de requisições - veja o exemplo de código no próximo slide. Ao chamar outro microsserviço, passe o Id da transação usando um cabeçalho HTTP como "x-transaction-id" para manter o mesmo contexto.

<br/><br/>

### Exemplo de código: configuração típica do Express

```javascript
// ao receber um novo pedido, inicie um novo contexto isolado e defina um ID de transação. O exemplo a seguir está usando a continuação da biblioteca npm-local-storage para isolar solicitações

const { createNamespace } = require('continuation-local-storage');
var session = createNamespace('minha sessão');

router.get('/:id', (req, res, next) => {
    session.set('transactionId', 'algum GUID único');
    someService.getById(req.params.id);
    logger.info('Começando agora para obter algo por Id');
});

// Agora, qualquer outro serviço ou componente pode ter acesso aos dados contextuais, por requisição
class someService {
    getById(id) {
        logger.info(“Starting to get something by Id”);
        // outra lógica vem aqui
    }
}

// O logger agora pode anexar o ID da transação a cada entrada para que as entradas da mesma requisição tenham o mesmo valor
class logger {
    info (message)
    {console.log(`${message} ${session.get('transactionId')}`);}
}
```

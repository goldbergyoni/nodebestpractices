# Deixe seu código pronto para produção

<br/><br/>

### Explicação em um Parágrafo

A seguir, uma lista de dicas de desenvolvimento que afetam significativamente a manutenção e a estabilidade da produção:

* O guia de doze fatores - Familiarize-se com o guia [Doze fatores](https://12factor.net/)
* Seja sem estado - Não salve dados localmente em um servidor Web específico (veja o marcador separado - "Seja sem estado")
* Cache - Utilize o cache intensamente, mas nunca falhe por causa da incompatibilidade de cache
* Teste de memória - calibre o uso de memória e vazamentos como parte do seu fluxo de desenvolvimento, ferramentas como "memwatch" podem facilitar muito essa tarefa
* Funções de nome - Minimize o uso de funções anônimas (ou seja, callbacks em linha), pois um perfilador de memória típico fornecerá uso de memória por nome de função
* Use ferramentas CI - Use ferramentas CI para detectar falhas antes de enviar para produção. Por exemplo, use o ESLint para detectar erros de referência e variáveis ​​indefinidas. Use –trace-sync-io para identificar o código que usa APIs síncronas (em vez da versão assíncrona)
* Registre sabiamente - Inclua em cada informação contextual da declaração de log, esperançosamente no formato JSON, para que as ferramentas de agregadores de log, como o Elastic, possam pesquisar nessas propriedades (veja o marcador separado - "Aumentar a visibilidade usando logs inteligentes"). Além disso, inclua o ID da transação que identifica cada solicitação e permite correlacionar linhas que descrevem a mesma transação (veja o marcador separado - "Incluir ID da transação")
* Gerenciamento de erros - O tratamento de erros é o calcanhar de Aquiles dos sites de produção do Node.js - muitos processos do Node estão travando devido a pequenos erros, enquanto outros persistem em um estado defeituoso em vez de travar. Definir a sua estratégia de tratamento de erros é absolutamente essencial, leia aqui as minhas [práticas recomendadas de tratamento de erros](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)

# Aumente a transparência usando smart logging

<br/><br/>

### Explicação em um Parágrafo

Já que você imprime declarações de log de qualquer maneira e obviamente precisa de alguma interface que envolva informações de produção nas quais possa rastrear erros e métricas principais (por exemplo, quantos erros ocorrem a cada hora e qual é o ponto final da API mais lento) por que não investir algum esforço em uma estrutura de registro robusta que satisfará todos requisitos? Conseguir isso requer uma decisão ponderada em três etapas:

**1. logging inteligente** – no mínimo, você precisa usar uma biblioteca de registro respeitável como [Winston](https://github.com/winstonjs/winston), [Bunyan](https://github.com/trentm/node-bunyan) e escreva informações significativas em cada início e fim de transação. Considere também formatar instruções de log como JSON e fornecer todas as propriedades contextuais (por exemplo, ID de usuário, tipo de operação, etc.) para que a equipe de operações possa atuar nesses campos. Inclua também um ID de transação exclusivo em cada linha de registro. Para obter mais informações, consulte o marcador abaixo "Escrever ID de transação para registrar". Um último ponto a considerar também é incluir um agente que registre os recursos do sistema, como memória e CPU, por exemplo o Elastic Beat.

**2. agregação inteligente** – depois de obter informações abrangentes sobre o sistema de arquivos dos servidores, é hora de enviá-las periodicamente para um sistema que agrega, facilita e visualiza esses dados. O stack Elastic, por exemplo, é uma escolha popular e gratuita que oferece todos os componentes para agregar e visualizar dados. Muitos produtos comerciais fornecem funcionalidade semelhante apenas reduzem significativamente o tempo de configuração e não requerem hospedagem.

**3. visualização inteligente** – agora as informações são agregadas e pesquisáveis, uma pessoa pode ficar satisfeita apenas com o poder de pesquisar facilmente os logs, mas isso pode ir muito além sem codificar ou gastar muito esforço. Agora, podemos mostrar métricas operacionais importantes, como taxa de erros, CPU média ao longo do dia, quantos novos usuários optaram por participar na última hora e qualquer outra métrica que ajude a gerenciar e melhorar nossa aplicação.

<br/><br/>

### Exemplo de visualização: Kibana (parte do stack Elastic) facilita a pesquisa avançada no conteúdo do log

![Kibana facilita a pesquisa avançada no conteúdo do log](/assets/images/smartlogging1.png "Kibana facilita a pesquisa avançada no conteúdo do log")

<br/><br/>

### Exemplo de visualização: Kibana (parte do stack Elastic) visualiza dados com base em logs

![Kibana visualiza dados com base em logs](/assets/images/smartlogging2.jpg "Kibana visualiza dados com base em logs")

<br/><br/>

### Citações de Blog: Requisitos do Logger

Do blog [Strong Loop](https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/):

> Vamos identificar alguns requisitos (para um logger):
> 1. Carimbo de data/hora de cada linha de log. Este é bastante auto-explicativo - você deve ser capaz de dizer quando cada entrada de log ocorreu.
> 2. Formato de registro deve ser facilmente entendido por seres humanos, bem como máquinas.
> 3. Permite múltiplos fluxos de destino configuráveis. Por exemplo, você pode estar gravando logs de rastreio em um arquivo, mas quando um erro é encontrado, grava no mesmo arquivo, depois no arquivo de erro e envia um email ao mesmo tempo…

<br/><br/>

<br/><br/>

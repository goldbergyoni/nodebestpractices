# Não direcione logs dentro do aplicativo

<br/><br/>

### Explicação em um Parágrafo

O código da aplicação não deve manipular o roteamento de log, mas deve usar um utilitário de logger para gravar em `stdout/stderr`. "Roteamento de log" significa selecionar e enviar logs para um local diferente da aplicação ou processo da aplicação, por exemplo, gravar os logs em um arquivo, banco de dados etc. A razão para isso é principalmente dupla: 1) separação de interesses e 2) [Melhores práticas de 12 fatores para aplicações modernas](https://12factor.net/logs).

Muitas vezes pensamos em "separação de interesses" em termos de pedaços de código entre serviços e entre os próprios serviços, mas isso se aplica também aos componentes mais "infra-estruturais". Seu código da aplicação não deve manipular algo que deve ser tratado pela infraestrutura/ambiente de execução (na maioria das vezes nos dias de hoje, contêineres). O que acontece se você definir os locais de log em sua aplicação, mas depois precisar alterar esse local? Isso resulta em uma alteração e implementação de código. Ao trabalhar com plataformas baseadas em contêiner/nuvem, os contêineres podem delegar e desligar ao escalar para demandas de desempenho, portanto, não podemos ter certeza de onde um arquivo de log terminará. O ambiente de execução (container) deve decidir para onde os arquivos de log serão roteados. O aplicativo deve apenas registrar o que precisa para `stdout`/`stderr`, e o ambiente de execução deve ser configurado para pegar o fluxo de log a partir de lá e roteá-lo para onde ele precisa ir. Além disso, aqueles na equipe que precisam especificar e/ou alterar os destinos de log geralmente não são desenvolvedores de aplicações, mas fazem parte do DevOps e podem não ter familiaridade com o código da aplicação. Isso impede que eles façam alterações facilmente.

<br/><br/>

### Exemplo de código - Anti-padrão: roteamento de log bem acoplado ao aplicativo

```javascript
const { createLogger, transports, winston } = require('winston');
const winston-mongodb = require('winston-mongodb');
 
// log para dois arquivos diferentes, que o aplicativo agora deve estar preocupado com
const logger = createLogger({
  transports: [
    new transports.File({ filename: 'combined.log' }),
 
  ],
  exceptionHandlers: [
    new transports.File({ filename: 'exceptions.log' })
  ]
});
 
// log para MongoDB, que o aplicativo agora deve estar preocupado com
winston.add(winston.transports.MongoDB, options);
```
Fazendo isso dessa maneira, a aplicação agora lida com lógica de aplicativo/lógica de negócios e lógica de roteamento de log!

<br/><br/>

### Exemplo de código - melhor tratamento de logs + exemplo do Docker
In the application:
```javascript
const logger = new winston.Logger({
  level: 'info',
  transports: [
    new (winston.transports.Console)()
  ]
});

logger.log('info', 'Mensagem de Log de Teste com algum parâmetro %s', 'algum parâmetro', { anything: 'Este é um metadado' });
```
Then, in the docker container `daemon.json`:
```javascript
{
  "log-driver": "splunk", // usando apenas o Splunk como exemplo, poderia ser outro tipo de armazenamento
  "log-opts": {
    "splunk-token": "",
    "splunk-url": "",
    ...
  }
}
```
Então este exemplo acaba ficando como `log -> stdout -> Docker container -> Splunk`

<br/><br/>

### Citação de Blog: "O'Reilly"

Do [blog O'Reilly](https://www.oreilly.com/ideas/a-cloud-native-approach-to-logs),
 > Quando você tem um número fixo de instâncias em um número fixo de servidores, o armazenamento de logs no disco parece fazer sentido. No entanto, quando sua aplicação pode ir dinamicamente de 1 instância em execução para 100 e você não tem ideia de onde essas instâncias estão sendo executadas, é necessário que seu provedor de nuvem lide com a agregação desses logs em seu nome.

<br/><br/>

### Citação: "12-Factor"

Do [guia de boas práticas 12-Factor](https://12factor.net/logs),
 > Uma aplicação de doze fatores nunca se preocupa com o roteamento ou armazenamento de seu fluxo de saída. Não se deve tentar gravar ou gerenciar arquivos de log. Em vez disso, cada processo em execução grava seu fluxo de eventos, sem buffer, em stdout.
 
 > Nas implantações de teste ou de produção, o fluxo de cada processo será capturado pelo ambiente de execução, agrupado com todos os outros fluxos da aplicação e roteado para um ou mais destinos finais para visualização e arquivamento de longo prazo. Esses destinos de arquivamento não são visíveis ou configuráveis ​​pela aplicação e, em vez disso, são completamente gerenciados pelo ambiente de execução.

<br/><br/>

 ### Exemplo: Visão geral da arquitetura usando o Docker e o Splunk como exemplo

![alt text](../../assets/images/logging-overview.png "Visão geral de roteamento de log")

<br/><br/>

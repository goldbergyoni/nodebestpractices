# Extraia segredos dos config files ou use pacotes para criptografá-los

### Explicação de um Parágrafo

A maneira mais comum e segura de fornecer um acesso a aplicações Node.js para chaves e segredos é armazená-los usando variáveis ​​de ambiente no sistema em que ele está sendo executado. Depois de definidos, eles podem ser acessados ​​a partir do objeto global `process.env`.
Um teste decisivo para determinar se um aplicativo tem todas as configurações corretamente consideradas fora do código é se a base de código pode ser de código aberto a qualquer momento, sem comprometer as credenciais.

Para situações raras em que os segredos precisam ser armazenados dentro do controle de origem, usando um pacote como [cryptr](https://www.npmjs.com/package/cryptr) permite que estes sejam armazenados de forma criptografada, ao contrário de texto simples.

Há uma variedade de ferramentas disponíveis que usam o git commit para auditar commits e enviar mensagens para acréscimos acidentais de segredos, como [git-secrets](https://github.com/awslabs/git-secrets).

### Exemplo de código

Acessando uma chave de API armazenada em uma variável de ambiente:

```javascript
    const azure = require('azure');

    const apiKey = process.env.AZURE_STORAGE_KEY;
    const blobService = azure.createBlobService(apiKey);
```

Usando `cryptr` para armazenar um segredo criptografado:

```javascript
const Cryptr = require('cryptr');
const cryptr = new Cryptr(process.env.SECRET);
 
let accessToken = cryptr.decrypt('e74d7c0de21e72aaffc8f2eef2bdb7c1');
 
console.log(accessToken);  // gera saída de string decriptografada que não foi armazenada no controle de origem
```

### O que outros blogueiros dizem

> As variáveis ​​de env são fáceis de alterar entre as implementações sem alterar nenhum código; Ao contrário dos arquivos de configuração, há pouca chance de eles serem verificados no repositório de código acidentalmente; e, ao contrário dos arquivos de configuração personalizados ou de outros mecanismos de configuração, como as propriedades do sistema Java, eles são um padrão independente de linguagem e sistema operacional.[De: The 12 factor app](https://12factor.net/config)

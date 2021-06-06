# Rode o Node.js como um usuário que não seja root

### Explicação em um Parágrafo

De acordo com o "Princípio do menor privilégio", um usuário/processo deve ser capaz de acessar apenas as informações e recursos necessários. A concessão de acesso root a um invasor abre um novo mundo de ideias mal-intencionadas, como o roteamento de tráfego para outros servidores. Na prática, a maioria das aplicações Node.js não precisa de acesso root e não é executada com esses privilégios. No entanto, existem dois cenários comuns que podem levar ao uso da raiz:

- para obter acesso à uma porta de privilégios (por exemplo, porta 80), o Node.js deve ser executado como raiz
- Contêineres do Docker, por padrão, são executados como root (!). É recomendado que aplicações Web Node.js escutem em portas sem privilégios e confiem em um proxy reverso como nginx para redirecionar o tráfego de entrada da porta 80 para a aplicação Node.js. Ao criar uma imagem do Docker, as aplicações altamente protegidas devem executar o contêiner com um usuário alternativo não root. A maioria dos clusters Docker (por exemplo, Swarm, Kubernetes) permitem definir o contexto de segurança declarativamente

### Exemplo de código - Criando uma imagem do Docker como não root

```dockerfile
FROM node:latest

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br/><br/>

### Citação de Blog: "Por padrão, o Docker executa contêiner como root"

Do repositório docker-node por [eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user):
> Por padrão, o Docker executa o contêiner como root, que dentro do contêiner pode representar um problema de segurança. Você deseja executar o contêiner como um usuário não privilegiado sempre que possível. As imagens do node fornecem o usuário do node para esse propósito. A imagem do Docker pode então ser executada com o usuário do nó da seguinte maneira: "-u 'node'"

<br/><br/>

### Citação de Blog: "O atacante terá controle total sobre sua máquina"

Não execute Node.js como root por [Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/):
> De fato, se você estiver executando seu servidor como root e ele for invadido por meio de uma vulnerabilidade em seu código, o invasor terá controle total sobre sua máquina. Isso significa que o invasor pode acabar com todo o seu disco ou pior. Por outro lado, se o servidor for executado com as permissões de um usuário comum, o invasor será limitado por essas permissões.

<br/><br/>

### Citação de Blog: "Se você precisar executar seu aplicativo na porta 80 ou 443, poderá fazer o encaminhamento de porta"

Desenvolvendo Aplicações Node.js Seguros - Um Guia Amplo por [Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce):
> Nunca execute o Node.js como root. Executar o node.js como root irá causar mais danos caso um invasor de alguma forma ganhar controle sobre sua aplicação. Nesse cenário, o invasor também ganharia privilégios de root, o que poderia resultar em uma catástrofe. Se você precisar executar sua aplicação na porta 80 ou 443, poderá fazer o encaminhamento de porta usando o iptables ou poderá colocar um proxy front-end, como nginx ou apache, que encaminha a solicitação da porta 80 ou 443 para sua aplicação

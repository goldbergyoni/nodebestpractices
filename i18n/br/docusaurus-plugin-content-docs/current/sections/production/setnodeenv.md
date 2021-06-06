#  Defina NODE_ENV = production

<br/><br/>

### Explicação em um Parágrafo

Variáveis ​​de ambiente de processo são um conjunto de pares de valores-chave disponibilizados para qualquer programa em execução, geralmente para propósitos de configuração. Embora quaisquer variáveis ​​possam ser usadas, o Node incentiva a convenção de usar uma variável chamada NODE_ENV para sinalizar se estamos em produção no momento. Essa determinação permite que os componentes forneçam diagnósticos melhores durante o desenvolvimento, por exemplo, desativando o armazenamento em cache ou emitindo instruções de log detalhadas. Qualquer ferramenta de implantação moderna - Chef, Puppet, CloudFormation, outros - suporta a configuração de variáveis ​​de ambiente durante a implantação.

<br/><br/>

### Exemplo de código: definindo e lendo a variável de ambiente NODE_ENV

```javascript
// Configurando variáveis ​​de ambiente no bash antes de iniciar o processo do Node
$ NODE_ENV=development
$ node

// Lendo a Variável de Ambiente Usando Código
if (process.env.NODE_ENV === “production”)
    useCaching = true;
```

<br/><br/>

### O que Outros Blogueiros Dizem

Do blog [dynatrace](https://www.dynatrace.com/blog/the-drastic-effects-of-omitting-node_env-in-your-express-js-applications/):
> ...No Node.js há uma convenção para usar uma variável chamada NODE_ENV para definir o modo atual. Vimos que, de fato, NODE_ENV é lida e o padrão é "development", se não estiver definido. Observamos claramente que, configurando NODE_ENV para produção, o número de requisições que o Node.js pode manipular aumenta em cerca de dois terços, enquanto o uso da CPU cai um pouco. Deixe-me enfatizar isso: A configuração NODE_ENV para produção torna sua aplicação 3 vezes mais rápida!*

![NODE_ENV=production](/assets/images/setnodeenv1.png "NODE_ENV=production")

<br/><br/>

# Use configuração consciente, segura e hierárquica do ambiente

<br/><br/>

### Explicação em um Parágrafo

Ao lidar com dados de configuração, muitas coisas podem simplesmente incomodar e desacelerar:

1. A configuração de todas as chaves usando variáveis ​​de ambiente de processo torna-se muito entediante quando é necessário injetar 100 chaves (em vez de apenas cometer aquelas em um arquivo de configuração), no entanto, ao lidar com arquivos, os administradores do DevOps não podem alterar o comportamento sem alterar o código. Uma solução de configuração confiável deve combinar os dois arquivos de configuração + substituições das variáveis ​​de processo.

2. Ao especificar todas as chaves em um JSON simples, é frustrante encontrar e modificar entradas quando a lista ficar maior. Um arquivo JSON hierárquico que é agrupado em seções pode superar esse problema + poucas bibliotecas de configuração permitem armazenar a configuração em vários arquivos e tomar cuidado para unir todas em tempo de execução. Veja o exemplo abaixo.

3. O armazenamento de informações confidenciais, como a senha do banco de dados, obviamente não é recomendado, mas não existe uma solução rápida e prática para esse desafio. Algumas bibliotecas de configuração permitem criptografar arquivos, outras criptografam essas entradas durante as confirmações do GIT ou simplesmente não armazenam valores reais para essas entradas e especificam o valor real durante a implementação por meio de variáveis ​​de ambiente.

4. Alguns cenários de configuração avançada exigem a injeção de valores de configuração via linha de comando (vargs) ou informações de configuração de sincronização por meio de um cache centralizado, como o Redis, para que vários servidores usem os mesmos dados de configuração.

Algumas bibliotecas de configuração podem fornecer a maioria desses recursos gratuitamente, dê uma olhada nas bibliotecas npm como [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) e [config](https://www.npmjs.com/package/config) que satisfazem muitos desses requisitos.

<br/><br/>

### Exemplo de código - configuração hierárquica ajuda a encontrar entradas e manter arquivos de configuração enormes

```js
{
  // Configurações do módulo do cliente 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Definir baixo para desenvolvimento 
      "initialDays": 1
    }
  }
}
```

<br/><br/>

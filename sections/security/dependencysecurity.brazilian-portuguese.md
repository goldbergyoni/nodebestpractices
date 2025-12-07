# Inspecione constante e automaticamente por dependências vulneráveis

### Explicação em um Parágrafo

A maioria das aplicações Node.js depende muito de um grande número de módulos de terceiros do npm ou do Yarn, ambos registros de pacotes populares, devido à facilidade e velocidade de desenvolvimento. No entanto, a desvantagem desse benefício são os riscos de segurança de incluir vulnerabilidades desconhecidas em seu aplicativo, que é um risco reconhecido por seu lugar na lista de riscos de segurança de aplicações web mais importante do OWASP.

Há várias ferramentas disponíveis para ajudar a identificar pacotes de terceiros em aplicativos Node.js que foram identificados como vulneráveis ​​pela comunidade para reduzir o risco de introduzi-los em seu projeto. Eles podem ser usados ​​periodicamente em ferramentas CLI ou incluídos como parte do processo de criação da sua aplicação.

### Índice

- [NPM audit](#npm-audit)
- [Snyk](#snyk)
- [Greenkeeper](#greenkeeper)

### NPM Audit

`npm audit` é uma nova ferramenta cli introduzida no NPM@6.

A execução de `npm audit` produzirá um relatório de vulnerabilidades de segurança com o nome do pacote afetado, gravidade da vulnerabilidade e descrição, caminho e outras informações e, se disponíveis, comandos para aplicar correções para resolver vulnerabilidades.

![exemplos do npm audit](../../assets/images/npm-audit.png)

🔗 [Leia em: NPM blog](https://docs.npmjs.com/getting-started/running-a-security-audit)

### Snyk

O Snyk oferece uma CLI rica em recursos, bem como integração com o GitHub. O Snyk vai além disso e, além de notificar vulnerabilidades, também cria automaticamente novas solicitações de pull, corrigindo vulnerabilidades, à medida que os patches são liberados para vulnerabilidades conhecidas.

O site do Snyk, rico em recursos, também permite uma avaliação ad-hoc das dependências, quando fornecido com um repositório do GitHub ou url do módulo npm. Você também pode procurar por pacotes npm que possuem vulnerabilidades diretamente.

Um exemplo da saída da integração do Synk GitHub, solicitação de pull criada automaticamente:
![exemplo do synk GitHub](../../assets/images/snyk.png)

🔗 [Leia em: Snyk website](https://snyk.io/)

🔗 [Leia em: Ferramenta on-line Synk para verificar pacotes npm e módulos do GitHub](https://snyk.io/test)

### Greenkeeper

O Greenkeeper é um serviço que oferece atualizações de dependência em tempo real, o que mantém um aplicativo mais seguro, sempre usando as versões das dependêcias mais atualizadas e corrigidas.

O Greenkeeper observa as dependências npm especificadas no arquivo `package.json` de um repositório e cria automaticamente uma ramificação com cada atualização de dependência. O conjunto de Integração Contínua (IC) do repositório é então executado para revelar quaisquer alterações significativas para a versão de dependência atualizada no aplicativo. Se o IC falhar devido à atualização de dependência, um problema claro e conciso será criado no repositório para ser analisado, destacando as versões do pacote atual e atualizado, juntamente com informações e histórico de confirmações da versão atualizada.

Um exemplo da saída da solicitação do Greenkeeper GitHub automaticamente criado pull request:

![exemplo do synk github](../../assets/images/greenkeeper.png)
🔗 [Leia em: site do Greenkeeper](https://greenkeeper.io/)

### Recursos Adicionais

🔗 [Rising Stack Blog: riscos de dependências Node.js](https://blog.risingstack.com/controlling-node-js-security-risk-npm-dependencies/)

🔗 [NodeSource Blog: Melhorando a segurança do npm](https://nodesource.com/blog/how-to-reduce-risk-and-improve-security-around-npm)

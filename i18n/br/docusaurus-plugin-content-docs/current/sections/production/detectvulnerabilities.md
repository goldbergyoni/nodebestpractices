# Utilize ferramentas que detectam vulnerabilidades automaticamente

<br/><br/>

### Explicação em um Parágrafo

As aplicações modernas de Node possuem dezenas e algumas vezes centenas de dependências. Se alguma das dependências que você usa tiver uma vulnerabilidade de segurança conhecida, seu aplicativo também estará vulnerável.
As ferramentas a seguir verificam automaticamente vulnerabilidades de segurança conhecidas em suas dependências:

- [npm audit](https://docs.npmjs.com/cli/audit) - npm audit
- [snyk](https://snyk.io/) - Encontre e corrija continuamente vulnerabilidades em suas dependências

<br/><br/>

### O que Outros Blogueiros dizem

Do blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/):

> ...Usá-lo para gerenciar as dependências da sua aplicação é poderoso e conveniente. Mas os pacotes que você usa podem conter vulnerabilidades críticas de segurança que também podem afetar sua aplicação. A segurança da sua aplicação é tão forte quanto o "elo mais fraco" em suas dependências. Felizmente, existem duas ferramentas úteis que você pode usar para garantir os pacotes de terceiros que você usa: nsp e requireSafe. Estas duas ferramentas fazem basicamente a mesma coisa, então usar ambos pode ser um exagero, mas “melhor prevenir do que remediar” são palavras para se viver quando se trata de segurança ...

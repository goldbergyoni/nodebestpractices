# Meça e proteja o uso de memória

<br/><br/>

### Explicação em um Parágrafo

Em um mundo perfeito, um desenvolvedor Web não deve lidar com vazamentos de memória. Na realidade, os problemas de memória são uma pegadinha conhecida do Node. Acima de tudo, o uso da memória deve ser monitorado constantemente. Nos sites de desenvolvimento e produção pequena, você pode avaliar manualmente usando comandos do Linux ou ferramentas npm e bibliotecas como node-inspector e memwatch. A principal desvantagem dessas atividades manuais é que elas exigem que um ser humano monitore ativamente - para locais de produção sérios, é absolutamente vital usar ferramentas robustas de monitoramento, por exemplo. (AWS CloudWatch, DataDog ou qualquer sistema proativo semelhante) que alertam quando ocorre um vazamento. Existem também algumas diretrizes de desenvolvimento para evitar vazamentos: evite armazenar dados no nível global, use fluxos para dados com tamanho dinâmico, limite o escopo de variáveis ​​usando let e const.

<br/><br/>

### O que Outros Blogueiros Dizem

* Do blog [Dyntrace](https://www.dynatrace.com/news/blog/understanding-garbage-collection-and-hunting-memory-leaks-in-node-js/):
> ... ”Como já aprendemos, no Node.js o JavaScript é compilado para código nativo pelo V8. As estruturas de dados nativas resultantes não têm muito a ver com a representação original e são gerenciadas exclusivamente pelo V8. Isso significa que não podemos alocar ou desalocar ativamente a memória em JavaScript. O V8 usa um mecanismo bem conhecido chamado coleta de lixo para resolver esse problema.”

* Do blog [Dyntrace](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> ... “Embora este exemplo leve a resultados óbvios, o processo é sempre o mesmo:
Crie dumps de heap com algum tempo e uma boa quantidade de alocação de memória entre
Compare alguns dumps para descobrir o que está crescendo”

* Do blog [Rising Stack](https://blog.risingstack.com/finding-a-memory-leak-in-node-js/):
> ... “falha, o Node.js tentará usar cerca de 1,5 GB de memória, que deve ser limitado quando executado em sistemas com menos memória. Esse é o comportamento esperado, pois a coleta de lixo é uma operação muito cara.
A solução para isso foi adicionar um parâmetro extra ao processo Node.js:
node –max_old_space_size=400 server.js –production ”
“Por que a coleta de lixo é cara? O mecanismo JavaScript V8 emprega um mecanismo de coletor de lixo pare-o-mundo. Na prática, isso significa que o programa interrompe a execução enquanto a coleta de lixo está em andamento.”

# Poupe tempo de atividade do processo usando a ferramenta certa

<br/><br/>

### Explicação em um Parágrafo

No nível base, os processos do Node devem ser protegidos e reiniciados após falhas. Simplificando, para aplicativos pequenos e para aqueles que não usam contêineres - ferramentas como [PM2](https://www.npmjs.com/package/pm2-docker) são perfeitas, pois trazem simplicidade, reiniciando recursos e também uma rica integração com o Node. Outros com fortes habilidades em Linux podem usar o systemd e executar o Node como um serviço. As coisas ficam mais interessantes para aplicativos que usam o Docker ou qualquer outra tecnologia de contêineres, pois geralmente são acompanhados por ferramentas de gerenciamento e orquestração de clusters (por exemplo, [AWS ECS](http://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome)), [Kubernetes](https://kubernetes.io/), etc) que implantam, monitoram e curam contêineres. Com todos esses recursos avançados de gerenciamento de cluster, incluindo reinício do contêiner, por que mexer com outras ferramentas como o PM2? Não há resposta à prova de balas. Há boas razões para manter o PM2 dentro de contêineres (principalmente a versão específica de contêineres [pm2-docker](https://www.npmjs.com/package/pm2-docker)) como o primeiro nível de proteção - é muito mais rápido reiniciar um processe e fornecer recursos específicos do Node, como sinalizar ao código quando o contêiner de hospedagem solicitar a reinicialização normal. Outros podem optar por evitar camadas desnecessárias. Para concluir este artigo, nenhuma solução serve para todos eles e conhecer as opções é o mais importante.

<br/><br/>

### O que Outros Blogueiros Dizem

* De [Boas Práticas em Produção do Express](https://expressjs.com/en/advanced/best-practice-performance.html):
> ... Em desenvolvimento, você iniciou sua aplicação simplesmente a partir da linha de comando com o node server.js ou algo semelhante. **Mas fazer isso na produção é uma receita para o desastre. Se o aplicativo falhar, ficará off-line** até que você reinicie. Para garantir que sua aplicação seja reiniciada se ela falhar, use um gerenciador de processos. Um gerenciador de processos é um “contêiner” para aplicativos que facilitam a implementação, fornece alta disponibilidade e permite gerenciar o aplicativo em tempo de execução.

* De um post no blog Medium [Understanding Node Clustering](https://medium.com/@CodeAndBiscuits/understanding-nodejs-clustering-in-docker-land-64ce2306afef#.cssigr5z3):
> ... Entendendo o Cluster de Node.js no Docker “Os contêineres do Docker são ambientes virtuais simplificados e leves, projetados para simplificar os processos ao mínimo necessário. Processos que gerenciam e coordenam seus próprios recursos não são mais valiosos. **Em vez disso, as empresas de gerenciamento, como Kubernetes, Mesos e Gado, popularizaram o conceito de que esses recursos devem ser gerenciados em toda a infraestrutura.** Os recursos de CPU e memória são alocados por "agendadores" e os recursos de rede são gerenciados por balanceadores de carga fornecidos pelo stack.

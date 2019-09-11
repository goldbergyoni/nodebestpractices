# Utilize todos os núcleos do processador

<br/><br/>

### Explicação em um Parágrafo

Pode não ser uma surpresa que, em sua forma básica, o Node seja executado em um único thread = um único processo = um único CPU. Pagando por hardwares pesados ​​com 4 ou 8 CPUs e utilizando apenas um parece loucura, certo? A solução mais rápida para aplicações de tamanho médio é o uso do módulo Node’s Cluster, que em 10 linhas de código gera um processo para cada núcleo lógico e encaminha solicitações entre os processos em um estilo round-robin. Melhor ainda, use o PM2, que adoça o módulo de clustering com uma interface simples e interface de monitoramento legal. Embora essa solução funcione bem para aplicações tradicionais, ela pode ser insuficiente para aplicações que exigem desempenho de alto nível e fluxo de DevOps robusto. Para esses casos de uso avançado, considere a replicação do processo NODE usando o script de implantação e o balanceamento personalizados usando uma ferramenta especializada, como o nginx, ou use um mecanismo de contêiner como o AWS ECS ou Kubernetees que tenha recursos avançados para implantação e replicação de processos.

<br/><br/>

### Comparação: balanceamento usando o cluster do Node versus o nginx

![Balanceamento usando o cluster do Node versus o nginx](/assets/images/utilizecpucores1.png "Balanceamento usando o cluster do Node versus o nginx")

<br/><br/>

### O que Outros Blogueiros Dizem

* Da [documentação do Node.js](https://nodejs.org/api/cluster.html#cluster_how_it_works):
> ... A segunda abordagem, os clusters do Node, deve, em teoria, oferecer o melhor desempenho. Na prática, no entanto, a distribuição tende a ser muito desequilibrada devido aos caprichos do planejador do sistema operacional. Cargas foram observadas onde mais de 70% de todas as conexões acabaram em apenas dois processos, de um total de oito ...

* Do blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):
> ... O clustering é possível com o módulo de cluster do Node. Isso permite que um processo mestre crie processos de trabalho e distribua conexões de entrada entre os trabalhadores. No entanto, em vez de usar este módulo diretamente, é muito melhor usar uma das muitas ferramentas que fazem isso por você automaticamente. por exemplo, node-pm ou cluster-service ...

* Do post no Medium [Desempenho do balanceamento de carga do processo Node.js: comparando módulo de cluster, iptables e Nginx](https://medium.com/@fermads/node-js-process-load-balancing-comparing-cluster-iptables-and-nginx-6746aaf38272)
> ... O cluster do Node é simples de implementar e configurar, as coisas são mantidas dentro do reino do Node sem depender de outro software. Lembre-se de que seu processo mestre funcionará quase tanto quanto os processos de trabalho e com uma taxa de solicitação um pouco menor do que as outras soluções. ...

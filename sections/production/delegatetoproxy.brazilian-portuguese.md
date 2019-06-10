# Delegue tudo o que for possível (por exemplo, gzip, SSL) a um proxy reverso

<br/><br/>

### Explicação em um Parágrafo

É muito tentador carregar o Express e usar suas várias opções de middleware para tarefas relacionadas à rede, como servir arquivos estáticos, codificação gzip, solicitações de limitação, terminação SSL etc. Isso é uma perda de desempenho devido ao seu modelo de thread único que manterá a CPU ocupada por longos períodos (Lembre-se, o modelo de execução do Node é otimizado para tarefas curtas ou tarefas relacionadas a IO assíncrono). Uma abordagem melhor é usar uma ferramenta especializada em tarefas de rede - os mais populares são o nginx e o HAproxy, que também são usados ​​pelos maiores fornecedores de nuvem para aliviar a carga recebida nos processos node.js.

<br/><br/>

### Exemplo de configuração do Nginx - usando o nginx para compactar as respostas do servidor

```nginx
# configurar compactação gzip
gzip on;
gzip_comp_level 6;
gzip_vary on;

# configurar upstream
upstream myApplication {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    keepalive 64;
}

#definindo servidor da web
server {
    # configurar servidor com páginas ssl e de erro
    listen 80;
    listen 443 ssl;
    ssl_certificate /some/location/sillyfacesociety.com.bundle.crt;
    error_page 502 /errors/502.html;

    # lidando com conteúdo estático
    location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
    root /usr/local/silly_face_society/node/public;
    access_log off;
    expires max;
}
```

<br/><br/>

### O que Outros Blogueiros Dizem

* Do blog [Mubaloo](http://mubaloo.com/best-practices-deploying-node-js-applications):
> …É muito fácil cair nessa armadilha - Você vê um pacote como o Express e pensa “Incrível! Vamos começar ”- você codifica e tem uma aplicação que faz o que você deseja. Isso é excelente e, para ser honesto, você ganhou muito da batalha. No entanto, você perderá a guerra se fizer o upload do seu aplicativo em um servidor e escutá-lo na porta HTTP, porque esqueceu uma coisa muito importante: o Node não é um servidor da web. **Assim que qualquer volume de tráfego começar a bater em sua aplicação, você perceberá que as coisas começam a dar errado: as conexões são interrompidas, os recursos deixam de ser exibidos ou, no pior dos casos, o servidor falha. O que você está fazendo é tentar fazer com que o Node lide com todas as coisas complicadas que um servidor da Web comprovado faz muito bem. Por que reinventar a roda?**
> **Isto é apenas para um pedido, para uma imagem e tendo em conta que esta é a memória que a sua aplicação poderia ser usada para coisas importantes como ler uma base de dados ou lidar com lógica complicada; por que você prejudicaria sua aplicação apenas por conveniência?**

* Do blog [Argteam](http://blog.argteam.com/coding/hardening-node-js-for-production-part-2-using-nginx-to-avoid-node-js-load):
> Embora o express.js tenha manipulação interna de arquivos estáticos através de algum middleware de conexão, você nunca deve usá-lo. **O Nginx pode fazer um trabalho muito melhor ao lidar com arquivos estáticos e pode impedir que solicitações de conteúdo não dinâmico obstruam nossos processos do Node**…

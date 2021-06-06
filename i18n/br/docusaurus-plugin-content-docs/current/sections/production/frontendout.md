# Deixe seus recursos de frontend fora do Node

<br/><br/>

### Explicação em um Parágrafo

Em uma aplicação web clássica, o back-end serve o front-end/gráficos para o navegador, uma abordagem muito comum no mundo do Node é usar o middleware estático do Express para enviar arquivos estáticos para o cliente. MAS - O Node não é um aplicativo  Web típico, pois utiliza um único thread que não é otimizado para servir muitos arquivos de uma só vez. Em vez disso, considere o uso de um proxy reverso (por exemplo, nginx, HAProxy), armazenamento em nuvem ou CDN (por exemplo, AWS S3, Armazenamento de Blobs do Azure etc.) que utiliza muitas otimizações para essa tarefa e obtém uma taxa de transferência muito melhor. Por exemplo, um middleware especializado como o nginx incorpora ganchos diretos entre o sistema de arquivos e a placa de rede e usa uma abordagem multi-thread para minimizar a intervenção entre várias solicitações.

Sua solução ideal pode usar um dos seguintes formulários:

1. Usando um proxy reverso - seus arquivos estáticos estarão localizados próximos ao seu aplicativo Node, somente os pedidos para a pasta de arquivos estáticos serão servidos por um proxy que fica na frente do seu aplicativo Node, como o nginx. Usando essa abordagem, seu aplicativo Node é responsável por implantar os arquivos estáticos, mas não para atendê-los. O colega do seu frontend vai adorar esta abordagem, pois evita solicitações de origem cruzada do frontend.

2. Armazenamento em nuvem - seus arquivos estáticos NÃO farão parte do conteúdo do aplicativo Node, eles serão carregados em serviços como o AWS S3, o Azure BlobStorage ou outros serviços semelhantes que nasceram para essa missão. Usando essa abordagem, seu aplicativo Node não é responsável por implantar os arquivos estáticos nem para atendê-los, portanto, um desacoplamento completo é desenhado entre o Node e o Frontend, que é, de qualquer maneira, manipulado por equipes diferentes.
<br/><br/>

### Exemplo de configuração: configuração típica do nginx para servir arquivos estáticos

```nginx
# configurar compactação gzip
gzip on;
keepalive 64;

# definindo servidor da web
server {
listen 80;
listen 443 ssl;

# lidar com conteúdo estático
location ~ ^/(images/|img/|javascript/|js/|css/|stylesheets/|flash/|media/|static/|robots.txt|humans.txt|favicon.ico) {
root /usr/local/silly_face_society/node/public;
access_log off;
expires max;
}
```

<br/><br/>

### O que Outros Blogueiros Dizem

Do blog [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/):

>…Em desenvolvimento, você pode usar [res.sendFile()](http://expressjs.com/4x/api.html#res.sendFile) para servir arquivos estáticos. Mas não faça isso em produção, porque essa função precisa ser lida no sistema de arquivos para cada solicitação de arquivo. Por isso, ela terá latência significativa e afetará o desempenho geral do aplicativo. Note que res.sendFile() não é implementado com a chamada do sistema sendfile, o que tornaria muito mais eficiente. Em vez disso, use o middleware static-service (ou algo equivalente), que é otimizado para servir arquivos para aplicativos Express. Uma opção ainda melhor é usar um proxy reverso para servir arquivos estáticos; consulte Usar um proxy reverso para obter mais informações…

<br/><br/>

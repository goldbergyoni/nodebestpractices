#  Limite o tamanho do payload usando um proxy reverso ou um middleware

### Explicação em um Parágrafo

A análise do corpo de uma requisição, por exemplo, payloads codificadas em JSON, é uma operação com desempenho pesado, especialmente com solicitações maiores.
Ao lidar com solicitações recebidas em sua aplicação web, você deve limitar o tamanho de seus respectivos payloads. Pedidos recebidos com
tamanhos ilimitados de corpo/payload podem levar a um desempenho ruim da sua aplicação ou falha devido a uma interrupção de negação de serviço ou outros efeitos colaterais indesejados.
Muitas soluções de middleware populares para análise de corpos de requisições, como o pacote `body-parser` já incluído para express, possui
opções para limitar os tamanhos de payloads de requisições, facilitando a implementação dessa funcionalidade pelos desenvolvedores.
Você também pode integrar um limite de tamanho do corpo da requisição no seu software de proxy reverso/servidor Web, se suportado. Abaixo estão exemplos para limitar tamanhos de solicitações usando
`express` e/ou` nginx`.

### Exemplo de código para `express`

```javascript
const express = require('express');

const app = express();

app.use(express.json({ limit: '300kb' })); // body-parser tem por padrão um limite de tamanho para o corpo de 100kb

// Requisição com corpo no formato json
app.post('/json', (req, res) => {

    // Verifica se o tipo de conteúdo da carga útil da solicitação corresponde ao json, porque o body-parser não verifica os tipos de conteúdo
    if (!req.is('json')) {
        return res.sendStatus(415); // -> Tipo de mídia não suportado se a solicitação não tiver corpo JSON
    }

    res.send('Hooray, funcionou!');
});

app.listen(3000, () => console.log('Exemplo de app ouvindo na porta 3000!'));
```

🔗 [**Documentação Express para express.json()**](http://expressjs.com/en/4x/api.html#express.json)

### Exemplo de configuração para `nginx`

```
http {
    ...
    # Limita o tamanho do corpo para TODAS requisições recebidas para 1 MB
    client_max_body_size 1m;
}

server {
    ...
    # Limita o tamanho do corpo para requisições recebidas por esse bloco específico do servidor para 1 MB
    client_max_body_size 1m;
}

location /upload {
    ...
    # Limita o tamanho do corpo para requisições recebidas nessa essa rota para 1 MB
    client_max_body_size 1m;
}
```

🔗 [**Documentação Nginx para client_max_body_size**](http://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size)
# Crie um ‘endpoint de manutenção’

<br/><br/>

### Explicação em um Parágrafo

Um endpoint de manutenção é uma API HTTP altamente seguro que faz parte do código da aplicação e sua finalidade é ser usado pela equipe de operação/produção para monitorar e expor a funcionalidade de manutenção. Por exemplo, ele pode retornar um dump de heap (instantâneo de memória) do processo, relatar se há algum vazamento de memória e até mesmo permitir executar comandos REPL diretamente. Esse endpoint é necessário onde as ferramentas DevOps convencionais (produtos de monitoramento, logs, etc) não conseguem reunir algum tipo específico de informações ou você escolhe não comprar/instalar tais ferramentas. A regra de ouro é usar ferramentas profissionais e externas para monitorar e manter a produção, que geralmente são mais robustas e precisas. Dito isso, é provável que haja casos em que as ferramentas genéricas não conseguirão extrair informações específicas do Node ou da aplicação - por exemplo, caso você deseje gerar uma snapshot da memória no momento em que o GC concluiu um ciclo - algumas bibliotecas npm executarão isso para você, mas ferramentas de monitoramento populares provavelmente perderão essa funcionalidade. É importante manter esse endpoint privado e acessível apenas por administradores, pois ele pode se tornar um alvo de um ataque DDOS.

<br/><br/>

### Exemplo de código: gerando um despejo de heap via código

```javascript
const heapdump = require('heapdump');

// Verifique se o pedido está autorizado
function isAuthorized(req) {
    // ...
}

router.get('/ops/heapdump', (req, res, next) => {
    if (!isAuthorized(req)) {
        return res.status(403).send('You are not authorized!');
    }

    logger.info('Prestes a gerar o heapdump');

    heapdump.writeSnapshot((err, filename) => {
        console.log('arquivo heapdump está pronto para ser enviado para o chamador', filename);
        fs.readFile(filename, "utf-8", (err, data) => {
            res.end(data);
        });
    });
});
```

<br/><br/>

### Recursos Recomendados

[Preparando sua aplicação Node.js para produção (Slides)](http://naugtur.pl/pres3/node2prod)

▶ [Preparando sua aplicação Node.js para produção (Video)](https://www.youtube.com/watch?v=lUsNne-_VIk)

![Preparando sua aplicação Node.js para produção](/assets/images/createmaintenanceendpoint1.png "Preparando sua aplicação Node.js para produção")

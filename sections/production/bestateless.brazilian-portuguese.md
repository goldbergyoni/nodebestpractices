# Seja stateless, mate seus Servidores quase todos os dias

<br/><br/>

### Explicação em um Parágrafo

Você já encontrou um problema de produção grave no qual um servidor estava com alguma configuração ou dados em falta? Isso provavelmente se deve a alguma dependência desnecessária de algum ativo local que não faz parte da implantação. Muitos produtos de sucesso tratam servidores como um pássaro fênix - ele morre e renasce periodicamente sem nenhum dano. Em outras palavras, um servidor é apenas uma peça de hardware que executa seu código por algum tempo e é substituído depois disso.
Essa abordagem

- permite dimensionamento adicionando e removendo servidores dinamicamente sem efeitos colaterais.
- simplifica a manutenção, pois libera nossa mente de avaliar cada estado do servidor.

<br/><br/>

### Exemplo de código: anti-padrões

```javascript
// Erro típico 1: salvar arquivos enviados, localmente em um servidor
var multer = require('multer'); // middleware express para lidar com uploads de várias partes
var upload = multer({ dest: 'uploads/' });

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {});

// Erro típico 2: armazenar sessões de autenticação (passport) em um arquivo local ou memória
var FileStore = require('session-file-store')(session);
app.use(session({
    store: new FileStore(options),
    secret: 'keyboard cat'
}));

// Erro típico 3: armazenar informações no objeto global
Global.someCacheLike.result = { somedata };
```

<br/><br/>

### O que Outros Blogueiros Dizem

Do blog [Martin Fowler](https://martinfowler.com/bliki/PhoenixServer.html):
> ...Um dia tive essa fantasia de iniciar um serviço de certificação para operações. A avaliação da certificação consistiria em um colega e eu aparecendo no data center corporativo e atacar os servidores de produção críticos com um taco de beisebol, uma motosserra e uma pistola de água. A avaliação seria baseada em quanto tempo levaria para a equipe de operações colocar todas as aplicações em funcionamento novamente. Esta pode ser uma fantasia idiota, mas há um pouco de sabedoria aqui. Enquanto você não deve usar os bastões de beisebol, é uma boa idéia queimar seus servidores em intervalos regulares. Um servidor deve ser como uma fênix, subindo regularmente das cinzas...

<br/><br/>

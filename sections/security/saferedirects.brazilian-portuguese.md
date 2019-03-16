# Impeça redirecionamentos não seguros

### Explicação em um Parágrafo

Quando os redirecionamentos são implementados no Node.js e/ou no Express, é importante executar a validação de entrada no lado do servidor.
Se um atacante descobrir que você não está validando informações externas fornecidas pelo usuário, ele poderá explorar essa vulnerabilidade postando links especialmente criados em fóruns, mídias sociais e outros locais públicos para que os usuários cliquem nele.

Exemplo: redirecionamento inseguro no express usando a entrada do usuário
```javascript
const express = require('express');
const app = express();

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(req.query.url);
  }

}); 
```

A correção sugerida para evitar redirecionamentos inseguros é evitar confiar na entrada do usuário. Se a entrada do usuário precisar ser usada, as listas de permissões de redirecionamento seguras podem ser usadas para evitar a exposição da vulnerabilidade.

Exemplo: Lista de permissões de redirecionamento seguro
```javascript
const whitelist = { 
  'https://google.com': 1 
};

function getValidRedirect(url) { 
    // verifique se o URL começa com uma única barra 
  if (url.match(/^\/(?!\/)/)) { 
    // Prefira nosso domínio para ter certeza 
    return 'https://example.com' + url; 
  } 
    // Caso contrário, verifique com uma lista de permissões
  return whitelist[url] ? url : '/'; 
}

app.get('/login', (req, res, next) => {

  if (req.session.isAuthenticated()) {
    res.redirect(getValidRedirect(req.query.url));
  }

}); 
```


### O que Outros Blogueiros Dizem

Do blog [NodeSwat](https://blog.nodeswat.com/unvalidated-redirects-b0a2885720db):
> Felizmente, os métodos de atenuação para essa vulnerabilidade são bastante diretos. Não use a entrada do usuário não validada como base para o redirecionamento.

Do blog [Hailstone](https://blog.hailstone.io/how-to-prevent-unsafe-redirects-in-node-js/)
> No entanto, se a lógica de redirecionamento do lado do servidor não validar os dados que entram no parâmetro url, seus usuários podem acabar em um site que se parece exatamente com o seu (examp1e.com), mas atende às necessidades de hackers criminosos!



# Tenha suporte à lista negra de JWTs

### Explicação em um Parágrafo

Por padrão, os JWTs (JSON Web Tokens) são completamente sem estado, portanto, quando um token válido é assinado por um emissor, o token pode ser verificado como autêntico pela aplicação. O problema que isso causa é a preocupação de segurança em que um token vazado ainda pode ser usado e não pode ser revogado, devido à assinatura permanecer válida, desde que a assinatura fornecida pelos problemas corresponda ao esperado pelo aplicativo.
Devido a isso, ao usar a autenticação do JWT, uma aplicação deve gerenciar uma lista negra de tokens expirados ou revogados para reter a segurança do usuário, no caso de um token precisar ser revogado.

### exemplo `express-jwt-blacklist`

Um exemplo de uso do `express-jwt-blacklist` em um projeto Node.js usando o `express-jwt`

```javascript
var jwt = require('express-jwt');
var blacklist = require('express-jwt-blacklist');
 
app.use(jwt({
  secret: 'my-secret',
  isRevoked: blacklist.isRevoked
}));
 
app.get('/logout', function (req, res) {
  blacklist.revoke(req.user)
  res.sendStatus(200);
});
```

### O que Outros Blogueiros Dizem

Do blog de [Marc Busqué](http://waiting-for-dev.github.io/blog/2017/01/25/jwt_secure_usage/):
> ...adicione uma camada de revogação sobre o JWT, mesmo que isso implique na perda de sua natureza sem estado.

# Modifique as configurações do middleware de sessão

<br/><br/>


### Explicação em um Parágrafo

Muitos middlewares de sessão populares não aplicam as melhores práticas/configurações de cookies seguros por padrão. Ajustar essas configurações a partir dos padrões oferece maior proteção tanto para o usuário quanto para a aplicação, reduzindo a ameaça de ataques como sequestro de sessão e identificação de sessão.

A configuração mais comum deixada como padrão é a sessão `name` - em `express-session` isto é `connect.sid`. Um invasor pode usar essas informações para identificar a estrutura subjacente da aplicação da Web, bem como as vulnerabilidades específicas do módulo. Alterar esse valor para algo diferente do padrão tornará mais difícil determinar qual mecanismo de sessão está sendo usado.

Também em `express-session`, a opção `cookie.secure` é configurada para false como o valor padrão. Alterar isso para true restringirá o transporte do cookie para https, o que fornece segurança contra ataques do tipo man-in-the-middle

<br/><br/>


### Exemplo de código: definindo configurações de cookies seguros

```javascript
// usando o middleware de sessão do express
app.use(session({  
  secret: 'youruniquesecret', // seqüência secreta usada na assinatura do ID da sessão que é armazenado no cookie
  name: 'youruniquename', // definir um nome exclusivo para remover o padrão connect.sid
  cookie: {
    httpOnly: true, // minimizar o risco de ataques XSS, restringindo o cliente de ler o cookie
    secure: true, // envie apenas cookies por https
    maxAge: 60000*60*24 // definir a validade do cookie em ms
  }
}));
```

<br/><br/>


### O que Outros Blogueiros Dizem

Do blog [NodeSource](http://nodesource.com/blog/nine-security-tips-to-keep-express-from-getting-pwned/): 
> ...O Express tem configurações de cookies padrão que não são altamente seguras. Elas podem ser ajustadas manualmente para aumentar a segurança - tanto para um aplicativo quanto para seu usuário.*

<br/><br/>

# Documente erros de API usando o Swagger ou GraphQL

### Explicação em um Parágrafo

As APIs REST retornam resultados usando códigos de status HTTP. É absolutamente necessário que o usuário da API esteja ciente não apenas sobre o esquema da API, mas também sobre possíveis erros – o chamador pode, então, pegar um erro e, com muito tato, lidar com ele. Por exemplo, a documentação da API pode indicar antecipadamente que o status HTTP 409 é retornado quando o nome do cliente já existir (supondo que a API registre novos usuários) para que o responsável pela chamada possa renderizar a melhor esperiência de usuário para a situação determinada. O Swagger é um padrão que define o esquema da documentação da API, oferecendo um ecossistema de ferramentas que permitem criar documentação facilmente on-line, veja as telas de impressão abaixo.

Se você já adotou o GraphQL para seus endpoints da API, seu esquema já contém garantias estritas de quais erros devem ser parecidos ([descritos na especificação](https://facebook.github.io/graphql/June2018/#sec-Errors)) e como eles devem ser manipulados por suas ferramentas do lado do cliente. Além disso, você também pode complementá-los com documentação baseada em comentários.

### Exemplo de Erro no GraphQL

> Esse exemplo usa [SWAPI](https://graphql.org/swapi-graphql), o API de Star Wars.

```graphql
# deve falhar porque o id não é válido
{
  film(id: "1ZmlsbXM6MQ==") {
    title
  }
}
```

```json
{
  "errors": [
    {
      "message": "Nenhuma entrada no cache local para https://swapi.co/api/films/.../",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "path": [
        "film"
      ]
    }
  ],
  "data": {
    "film": null
  }
}
```

### Citação de Blog: "Você tem que dizer aos seus chamadores que erros podem acontecer"

Do blog Joyent, classificado como 1 para as palavras-chave “Node.js logging”

 > Já falamos sobre como lidar com erros, mas quando você está escrevendo uma nova função, como você entrega erros ao código que chamou sua função? …Se você não sabe quais erros podem acontecer ou não sabe o que eles significam, seu programa não pode estar correto, exceto por acidente. Então, se você está escrevendo uma nova função, precisa dizer a seus chamadores quais erros podem acontecer e o que eles significam…

### Ferramenta Útil: Swagger Criação de Documentação Online

![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "lidando com erros API")

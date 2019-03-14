# Documente erros de API usando o Swagger

### Explicação em um Parágrafo

As APIs REST retornam resultados usando códigos de status HTTP. É absolutamente necessário que o usuário da API esteja ciente não apenas sobre o esquema da API, mas também sobre possíveis erros – o chamador pode, então, pegar um erro e, com muito tato, lidar com ele. Por exemplo, a documentação da API pode indicar antecipadamente que o status HTTP 409 é retornado quando o nome do cliente já existir (supondo que a API registre novos usuários) para que o responsável pela chamada possa renderizar a melhor esperiência de usuário para a situação determinada. O Swagger é um padrão que define o esquema da documentação da API, oferecendo um ecossistema de ferramentas que permitem criar documentação facilmente on-line, veja as telas de impressão abaixo.

### Citação de Blog: "Você tem que dizer aos seus chamadores que erros podem acontecer"

Do blog Joyent, classificado como 1 para as palavras-chave “Node.js logging”

 > Já falamos sobre como lidar com erros, mas quando você está escrevendo uma nova função, como você entrega erros ao código que chamou sua função? …Se você não sabe quais erros podem acontecer ou não sabe o que eles significam, seu programa não pode estar correto, exceto por acidente. Então, se você está escrevendo uma nova função, precisa dizer a seus chamadores quais erros podem acontecer e o que eles significam…

### Ferramenta Útil: Swagger Criação de Documentação Online

![Swagger API Scheme](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/swaggerDoc.png "lidando com erros API")

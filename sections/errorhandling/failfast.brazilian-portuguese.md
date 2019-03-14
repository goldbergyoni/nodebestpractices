# Falhe rápido, valide argumentos usando uma biblioteca dedicada

### Explicação em um Parágrafo

Nós todos sabemos como verificar argumentos e falhar rapidamente é importante para evitar bugs ocultos (veja exemplo de código antipadrão abaixo). Se não, leia sobre programação explícita e programação defensiva. Na realidade, tendemos a evitá-lo devido ao incômodo de codificá-lo (por exemplo, pensar em validar o objeto JSON hierárquico com campos como e-mail e datas) - bibliotecas como o Joi e o Validator tornam esta tediosa tarefa muito fácil.

### Wikipédia: Programação Defensiva

A programação defensiva é uma abordagem para melhorar o software e o código-fonte, em termos de qualidade geral - reduzindo o número de bugs e problemas de software. Tornando o código-fonte compreensível - o código-fonte deve ser legível e compreensível, de modo que seja aprovado em uma auditoria de código. Fazer com que o software se comporte de maneira previsível, apesar de entradas inesperadas ou ações do usuário.

### Exemplo de código: validando uma entrada JSON complexa usando "Joi"

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // afirmações vêm em primeiro lugar
 Joi.assert(newMember, memberSchema); //lança se a validação falhar
 // outra lógica aqui
}

```

### Anti-padrão: nenhuma validação gera erros desagradáveis

```javascript
// Se o desconto for positivo, vamos redirecionar o usuário para imprimir seus cupons de desconto
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// esqueci de passar o desconto de parâmetro, por que diabos o usuário foi redirecionado para a tela de desconto?

```

### Citação de Blog: "Você deve lançar esses erros imediatamente"

 Do blog: Joyent

 > Um caso degenerado é quando alguém chama uma função assíncrona, mas não passa uma callback. Você deve lançar esses erros imediatamente, pois o programa está quebrado e a melhor chance de encontrar erros envolve obter pelo menos um rastreamento de stack e, idealmente, um arquivo principal no ponto do erro. Para fazer isso, recomendamos a validação dos tipos de todos os argumentos no início da função.

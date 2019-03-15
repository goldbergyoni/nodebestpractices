# Use Async-Await ou promises para tratamento de erros assíncronos

### Explicação em um Parágrafo

Callbacks não tem uma boa escalabilidade, pois a maioria dos programadores não tem familiaridade com elas. Elas forçam a verificar erros em toda parte, lidar com aninhamento de código desagradável e tornam difícil o entendimento do fluxo de código. Bibliotecas de promise como BlueBird, async, e Q possuem um estilo de código padrão usando RETURN e THROW para controlar o fluxo do programa. Especificamente, eles suportam o estilo favorito de manipulação de erro try-catch que permite liberar o caminho principal do código de lidar com erros em todas as funções.

### Exemplo de código - usando promises para capturar erros

```javascript
doWork()
 .then(doWork)
 .then(doOtherWork)
 .then((result) => doWork)
 .catch((error) => {throw error;})
 .then(verify);
```

### Exemplo de código anti-padrão - manipulação de erro no estilo callback

```javascript
getData(someParameter, function(err, result) {
    if(err !== null) {
        // fazer algo como chamar a função de retorno de chamada e passar o erro
        getMoreData(a, function(err, result) {
            if(err !== null) {
                // fazer algo como chamar a função de retorno de chamada e passar o erro
                getMoreData(b, function(c) {
                    getMoreData(d, function(e) {
                        if(err !== null ) {
                            // Você entendeu a ideia? 
                        }
                    })
                });
            }
        });
    }
});
```

### Citação de Blog: "Temos um problema com promises"

 Do blog pouchdb.com

 > ……E, de fato, callbacks fazem algo ainda mais sinistro: eles nos privam do stack, que é algo que costumamos dar como certo em linguagens de programação. Escrever código sem um stack é como dirigir um carro sem pedal de freio: você não percebe o quanto você precisa até tentar usá-lo e não está lá. O ponto principal das promises é nos devolver os fundamentos da linguagem que perdemos quando usamos código assíncrono: return, throw, e o stack. Mas você precisa saber como usar promises corretamente para tirar proveito delas.

### Citação de Blog: "O método das promises é muito mais compacto"

 Do blog gosquared.com

 > ………O método das promises é muito mais compacto, claro e rápido de escrever. Se um erro ou exceção ocorrer em qualquer uma das operações, ele será tratado pelo único manipulador .catch (). Ter esse único local para lidar com todos os erros significa que você não precisa escrever uma verificação de erros para cada etapa do trabalho.

### Citação de Blog: "Promises são nativas do ES6, podem ser usadas com generators"

 Do blog StrongLoop

 > ….Callbacks têm um péssimo histórico em manipulação de erros. Promises são melhores. Case com o tratamento de erro interno no Express com promises e reduza significativamente as chances de uma exceção não capturada. Promises são nativas do ES6, podem ser usadas com generators, e propostas do ES7 como async/await através de compiladores como Babel

### Citação de Blog: "Todas aquelas construções de controle de fluxo regulares que você está acostumado estão completamente quebradas"

Do blog Benno’s

 > ……Uma das melhores coisas sobre a programação assíncrona baseada em callbacks é que basicamente todas as construções de controle de fluxo regulares que você está acostumado estão completamente quebradas. No entanto, a que eu acho mais quebrada é o tratamento de exceções. Javascript fornece uma construção bastante familiar de try…catch para lidar com exceções. O problema com exceções é que elas fornecem uma ótima maneira de reduzir erros em um stack de chamadas, mas acabam sendo completamente inúteis se o erro acontece em uma pilha diferente…
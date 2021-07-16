# Estructura las pruebas con el patrón AAA

<br><br>

### Párrafo de explicación
Nuestro mayor problema en pruebas es la falta de tiempo: Ya tenemos el código de producción manteniéndonos muy ocupados. Por esta razón el código de pruebas debe ser los más simple y fácil de entender. Cuando se lee un caso de prueba, no se debería de sentir como si se leyera código imperativo (bucles, herencia), sino mas como HTML, una experiencias declarativa. Para lograr esto, mantén el estándar AAA para que la mente de los lectores entienda la intención de las pruebas sin esfuerzo. Hay otros patrones con formatos similares como XUNIT 'Setup, Exercise, verify, teardown' (configura, ejercita, verifica, destruye). Estas son las 3 A:

La primera A - Arrange (ordene): Todo el código que lleva al sistema al escenario que la prueba intenta simular. Esto puede incluir instanciar la unidad bajo un constructor de prueba, añadir datos a la BD, configurar objetos y cualquier otro código de preparación.

La segunda A - Act (actúe): Ejecute la unidad bajo prueba. Normalmente una línea de código.

La tercera A - Assert (verifique) Asegúrese que los valores recibidos satisfagan la expectativa. Normalmente una línea de código.

<br><br>

### Código de ejemplo: Una prueba estructurada con el patrón AAA

```javascript
describe.skip('Customer classifier', () => {
    test('When customer spent more than 500$, should be classified as premium', () => {
        //Arrange (ordene)
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, 'getCustomer')
            .reply({id:1, classification: 'regular'});

        //Act (actúe)
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

        //Assert (verifique)
        expect(receivedClassification).toMatch('premium');
    });
});
```

<br/><br/>

### Código de ejemplo ant patrón: No separación, una plasta, difícil de interpretar

```javascript
test('Should be classified as premium', () => {
    const customerToClassify = {spent:505, joined: new Date(), id:1}
    const DBStub = sinon.stub(dataAccess, 'getCustomer')
        .reply({id:1, classification: 'regular'});
    const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);
    expect(receivedClassification).toMatch('premium');
});
```

<br/><br/>

###  "Incluya 6 partes en cada prueba"

 [del blog "30 Node.js testing best practices" por Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![Ejemplo de reporte de pruebas](/assets/images/6-parts-in-test.jpg "Ejemplo de reporte de pruebas")

<br/><br/>

### "Es importante que quién lee las pruebas sea capaz de determinar el comportamiento de la prueba que está verificando de mánera rápida"
Del libro [XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html):

> It is important for the test reader to be able to quickly determine what behavior the test is verifying. It can be very confusing when various behaviors of the system under test (SUT) are being invoked, some to set up the pre-test state (fixture) of the SUT, others to exercise the SUT and yet others to verify the post-test state of the SUT. Clearly identifying the four phases makes the intent of the test much easier to see.

> Es importante que quién lee las pruebas sea capaz de determinar el comportamiento de la prueba que está verificando de mánera rápida. Puede ser muy confuso cuando varios comportamientos del sistema que se está probando (SUT) están siendo invocados, unos para preparar el (SUT) y otros para verificar el estado después de las pruebas en el (SUT). Identificar de manera clara las 4 fases hace la intención de la prueba mucho más fácil de ver.

<br/><br/>

### "A useful technique [...] is that writing the Assert first is a great place to start."
### "Una técnica muy útil [...] es que escribir la verificación primero es un buen lugar para empezar."
From the article [Arrange, Act, Assert](https://xp123.com/articles/3a-arrange-act-assert/) por Bill Wake quién observo por primera vez y nombre al patrón

> **Where to Begin?**
> You might think that the Arrange is the natural thing to write first, since it comes first.
>When I’m systematically working through an object’s behaviors, I may write the Act line first. 
> But a useful technique I learned from Jim Newkirk is that writing the Assert first is a great place to start. When you have a new behavior you know you want to test, Assert First lets you start by asking “Suppose it worked; how would I be able to tell?” With the Assert in place, you can do what Industrial Logic calls “Frame First” and lean on the IDE to “fill in the blanks.” 

>¿Dónde empezar?
> Tal vez pienses que ordenar es lo que se tiene que escribir primero, ya que viene primero.
> Cuándo estoy sistemáticamente trabajando con el comportamiento del objeto, puede ser que escriba la línea de ejecución primero.
> Pero una técnica muy útil que he aprendido de Jim Newkirk es que escribir la verificación primero es un buen lugar para empezar. Cuando tenemos un nuevo comportamiento, sabes que es lo que quieres probar, Verificar primero te permite empezar preguntando "asumamos que funcionó, ¿Cómo podría darme cuenta?" con la verificación en su lugar, puedes hacer lo que la lógica industrial llama "marca primero" y apoyarte en el IDE para "llenar los huecos."

<br/><br/>

### "Once you get used to this pattern, you can read and understand the tests more easily"
### "Cuando te acostumbres a este patrón, podrás leer y entender las pruebas mas fácilmente"
del libro [Unit Testing, Principles, Practices, and Patterns](https://freecontent.manning.com/making-better-unit-tests-part-1-the-aaa-pattern/)
> The 3A pattern is simple and provides a uniform structure for all tests in the suite. This uniform structure is one of its biggest advantages: once you get used to this pattern, you can read and understand the tests more easily. That, in turn, reduces the maintenance cost for your entire test suite.

> El patrón AAA es simple y provee una estructura uniforme para todas las pruebas en el arsenal. Esta estructura uniforme es una de las maás grandes ventajas: Cuando te acostumbres a este patrón, podrás leer y entender las pruebas mas fácilmente. Esto hará que reduzcas el costo de mantenimiento para tu arsenal completo de pruebas.
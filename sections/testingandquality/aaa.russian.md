# Структурируйте тесты по шаблону AAA

<br/><br/>

### Объяснение в один абзац
Нашей самой большой проблемой тестирования является отсутствие свободного пространства - у нас уже есть производственный код, который заставляет нас быть очень занятыми. По этой причине тестовый код должен оставаться очень простым и легким для понимания. При чтении контрольного примера - это не должно восприниматься как чтение императивного кода (циклы, наследование), а скорее как HTML - декларативный опыт. Чтобы добиться этого, придерживайтесь соглашения AAA, чтобы читатели могли легко проанализировать тест. В этом шаблоне есть и другие похожие форматы, такие как XUnit "Setup, Excercise, Verify, Teardown". Это три А:

Первая A - Arrange: Весь код установки, чтобы привести систему к сценарию, который тест должен симулировать. Это может включать создание экземпляра тестируемого модуля, добавление записей БД, обертки/зацепки над объектами и любой другой подготовительный код.

Вторая A - Act: Выполнить тестируемый модуль. Обычно 1 строка кода

Третья A - Assert: убедитесь, что полученное значение соответствует ожидаемому. Обычно 1 строка кода


<br/><br/>

### Пример кода: тест, структурированный по шаблону AAA
```javascript
describe.skip('Customer classifier', () => {
    test('When customer spent more than 500$, should be classified as premium', () => {
        //Arrange
        const customerToClassify = {spent:505, joined: new Date(), id:1}
        const DBStub = sinon.stub(dataAccess, 'getCustomer')
            .reply({id:1, classification: 'regular'});

        //Act
        const receivedClassification = customerClassifier.classifyCustomer(customerToClassify);

        //Assert
        expect(receivedClassification).toMatch('premium');
    });
});
```

<br/><br/>

### Пример кода - Антипаттерн: нет разделения, сплошной объем, труднее интерпретировать
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

### "Включите 6 частей в каждом тесте"

 [From the blog "30 Node.js testing best practices" by Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![A test report example](/assets/images/6-parts-in-test.jpg "A test report example")

<br/><br/>

### "Для читателя теста важно иметь возможность быстро определить, какое поведение проверяет тест"
Из книги [XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html):

> Для читателя теста важно иметь возможность быстро определить, какое поведение проверяет тест. Это может быть очень запутанным, когда вызываются различные варианты поведения тестируемой системы (SUT), некоторые для настройки предтестового состояния (фиксатора) SUT, другие для проверки SUT и третьи для проверки пост-теста состояние СУТ. Четкое определение четырех фаз значительно облегчает понимание цели теста.

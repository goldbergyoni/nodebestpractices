# AAA 패턴을 따라 테스트를 구축해라

<br/><br/>

### 한문단 설명

가장 큰 테스트 과제는 헤드스페이스가 부족이다. 우리는 이미 바쁘게 만드는 생산 코드를 가지고 있다. 이러한 이유로 테스트 코드는 매우 단순하고 이해하기 쉬워야 한다. 테스트 케이스를 읽을 때, 명령형 코드(루프, 상속)을 읽는 느낌이 아니라 HTML과 비슷해야 한다. 이를 달성하기 위해, 읽는 사람들이 테스트 의도를 쉽게 분석할 수 있도록 AAA 패턴을 유지해야 한다. XUnit 'Setup, Exercise, Verify, Teardown' 같이 이 패턴과 유사한 형식이 있다. 세 가지 A이다.

첫 번째 A - Arrange: 모든 설정 코드는 테스트에서 시스템을 시뮬레이션하고자 하는 시나리오로 가져온다. 여기에는 테스트 생성자에서 단위 인스턴스화, DB 레코드 추가, 모의/스터빙 객체와 다른 예비 코드가 포함될 수 있습니다.

모든 설정 코드는 시스템을 테스트에서 시뮬레이션하고자 하는 시나리오로 가져옵니다. 여기에는 테스트 생성자 대상 장치의 인스턴스화, DB 레코드 추가, 객체 조롱/거품 및 기타 준비 코드가 포함될 수 있습니다.

2nd A - Act: 테스트 중인 유닛을 실행한다. 일반적으로 1줄의 코드

세 번째 A - Assert: 받은 값이 기대를 충족하는지 확인한다. 일반적으로 1줄의 코드


<br/><br/>

### 코드 예시: AAA 패턴으로 구성된 테스트
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

### Code Example – Anti Pattern: no separation, one bulk, harder to interpret
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

###  "Include 6 parts in each test"

 [From the blog "30 Node.js testing best practices" by Yoni Goldberg](https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347)

 ![A test report example](/assets/images/6-parts-in-test.jpg "A test report example")

<br/><br/>

### "It is important for the test reader to be able to quickly determine what behavior the test is verifying"
From the book [XUnit Patterns](http://xunitpatterns.com/Four%20Phase%20Test.html):

> It is important for the test reader to be able to quickly determine what behavior the test is verifying. It can be very confusing when various behaviors of the system under test (SUT) are being invoked, some to set up the pre-test state (fixture) of the SUT, others to exercise the SUT and yet others to verify the post-test state of the SUT. Clearly identifying the four phases makes the intent of the test much easier to see.

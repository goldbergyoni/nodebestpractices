# 전용 라이브러리를 이용해서 인자값을 검사하고 빠르게 실패해라

### One Paragraph Explainer

인자값을 확인하고 빠르게 실수를 찾는게 숨겨지 버그를 피하는 데에 가장 중요하다는 것은 모두 공감하고 있다(아래의 안티패턴 코드를 확인). 빠르게 실수하지 않는다면, 명확한 프로그래밍과 방어적인 프로그래밍에 대해서 읽어라. 실제로는 코딩하는 귀찮음 때문에 피하는 경우가 있다(이메일과 날짜가 적힌 계층적인 json 객체를 상상). Joi와 Validator같은 라이브러리들은 귀찮은 일을 다소 해소해 준다.

### Wikipedia: Defensive Programming

방어적인 개발은 일반적인 퀄리티 측면에서 소프트웨어 버그와 문제들을 줄이는 소프트웨어와 소스 코드 개선에 대한 접근법이다. 소스 코드의 가독성을 높여서 이해할수 있게 만들고, 코드 수정을 쉽게 만든다. 예측할 수 없는 인풋이나 유저의 행동에도 소프트웨어를 예측할 수 있는 방향으로 만드는 것이다.

### Code example: validating complex JSON input using ‘Joi’

```javascript
var memberSchema = Joi.object().keys({
    // 패스워드는 문자열이어야 하고~ 숫자면 1900보다 크고 2013보다 작아야 하며~~ 등등, 인자값을 미리 검사해준다.
    // 이러한 라이브러리를 쓰지 않는 코드는 if(param == number && param > 1900 && ~~) 이런식으로 가독성이 떨어짐.
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // assertions come first
 Joi.assert(newMember, memberSchema); //throws if validation fails
 // other logic here
}

```

### Anti-pattern: no validation yields nasty bugs

```javascript
function redirectToPrintDiscount(httpResponse, member, discount) {
    // discount가 undefined여도 !=0이기 때문에 유효성 검사를 통과하게 된다. --> 오류!
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}
redirectToPrintDiscount(httpResponse, someMember);

```

### Blog Quote: "You should throw these errors immediately"

 From the blog: Joyent

 > async함수를 호출하고 콜백을 보내지 않으면 취약한 상황이 발생한다. 우리는 즉시 이러한 에러를 throw해야한다. 왜냐하면 프로그램이 망가지고, 디버깅을 할 수 있는 가장 최고의 찬스는 stack trace와 이상적인 핵심 파일이 에러를 정확하게 가르키는 순간이기 때문이다. 이를 위해서는 모든 함수의 인자에 대한 유효성 검사를 도입해야 한다.

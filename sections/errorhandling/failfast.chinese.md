# 快速察觉失败，使用专用库验证参数


### 一段解释

我们都知道如何检查参数和快速失败对于避免隐藏的错误很重要（见下面的反模式代码示例）。如果没有，请阅读显式编程和防御性编程。在现实中，由于对其编码是件恼人的事情（比如考虑验证分层的JSON对象，它包含像email和日期这样的字段），我们倾向于避免做这样的事情 – 像Joi这样的库和验证器轻而易举的处理这个乏味的任务。

### Wikipedia: Defensive Programming

Defensive programming is an approach to improve software and source code, in terms of: General quality – reducing the number of software bugs and problems. Making the source code comprehensible – the source code should be readable and understandable so it is approved in a code audit. Making the software behave in a predictable manner despite unexpected inputs or user actions.  



### Code example: validating complex JSON input using ‘Joi’

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});
 
function addNewMember(newMember)
{
 //assertions come first
 Joi.assert(newMember, memberSchema); //throws if validation fails
 //other logic here
}

```

### Anti-pattern: no validation yields nasty bugs

```javascript
//if the discount is positive let's then redirect the user to pring his discount coupons
function redirectToPrintDiscount(httpResponse, member, discount)
{
    if(discount != 0)
        httpResponse.redirect(`/discountPrintView/${member.id}`);
}
 
redirectToPrintDiscount(httpResponse, someMember);
//forgot to pass the parameter discount, why the heck was the user redirected to the discount screen?

```

### Blog Quote: "You should throw these errors immediately"
 From the blog: Joyent
 
 > A degenerate case is where someone calls an asynchronous function but doesn’t pass a callback. You should throw these errors immediately, since the program is broken and the best chance of debugging it involves getting at least a stack trace and ideally a core file at the point of the error. To do this, we recommend validating the types of all arguments at the start of the function.
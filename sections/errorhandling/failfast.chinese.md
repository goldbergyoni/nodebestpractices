# 快速报错，使用专用库验证参数


### 一段解释

我们都知道如何检查参数和快速报错对于避免隐藏的错误很重要（见下面的反模式代码示例）。如果没有，请阅读显式编程和防御性编程。在现实中，由于对其编码是件恼人的事情（比如考虑验证分层的JSON对象，它包含像email和日期这样的字段），我们倾向于避免做这样的事情 – 像Joi这样的库和验证器轻而易举的处理这个乏味的任务。

### 维基百科: 防御性编程

防御性编程是一种改进软件和源代码的方法, 在以下方面: 一般质量 – 减少软件 bug 和问题的数量。使源代码可理解 – 源代码应该是可读的和可理解的, 以便在代码审核中得到批准。尽管会有意外输入或用户操作, 但使软件的行为具有可预知的方式。  



### 代码示例: 使用‘Joi’验证复杂的JSON输入

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

### 反模式: 没有验证会产生令人讨厌的错误

```javascript
//假如折扣为正，重定向用户去打印他的折扣优惠劵
function redirectToPrintDiscount(httpResponse, member, discount)
{
    if(discount != 0)
        httpResponse.redirect(`/discountPrintView/${member.id}`);
}
 
redirectToPrintDiscount(httpResponse, someMember);
//忘记传递参数discount, 为什么用户被重定向到折扣页面？

```

### 博客引用: "您应该立即抛出这些错误"
 摘自博客: Joyent
 
 > 一个退化情况是有人调用一个异步函数但没有传递一个回调方法。你应该立即抛出这些错误, 因为程序有了错误, 最好的调试它的时机包括，获得至少一个stack trace， 和理想情况下，核心文件里错误的点。为此, 我们建议在函数开始时验证所有参数的类型。
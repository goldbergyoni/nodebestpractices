# Fail fast, validate arguments using a dedicated library

### One Paragraph Explainer

We all know how checking arguments and failing fast is important to avoid hidden bugs (see anti-pattern code example below). If not, read about explicit programming and defensive programming. In reality, we tend to avoid it due to the annoyance of coding it (e.g. think of validating hierarchical JSON object with fields like email and dates) – libraries like Joi and Validator turn this tedious task into a breeze.

### Wikipedia: Defensive Programming

Defensive programming is an approach to improve software and source code, in terms of General quality – reducing the number of software bugs and problems. Making the source code comprehensible – the source code should be readable and understandable so it is approved in a code audit. Making the software behave in a predictable manner despite unexpected inputs or user actions.

### Code example: validating complex JSON input using ‘Joi’

```javascript
const memberSchema = Joi.object().keys({
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

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// if the discount is positive let's then redirect the user to print his discount coupons
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// forgot to pass the parameter discount, why the heck was the user redirected to the discount screen?
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// if the discount is positive let's then redirect the user to print his discount coupons
function redirectToPrintDiscount(httpResponse: Response, member: Member, discount: number) {
  if (discount != 0) {
    httpResponse.redirect(`/discountPrintView/${member.id}`);
  }
}

redirectToPrintDiscount(httpResponse, someMember, -12);
// We passed a negative parameter discount, why the heck was the user redirected to the discount screen?
```
</details>

### Blog Quote: "You should throw these errors immediately"

 From the blog: Joyent

 > A degenerate case is where someone calls an asynchronous function but doesn’t pass a callback. You should throw these errors immediately since the program is broken and the best chance of debugging it involves getting at least a stack trace and ideally a core file at the point of the error. To do this, we recommend validating the types of all arguments at the start of the function.

# Use tools that automatically detect vulnerabilities

<br/><br/>


### One Paragraph Explainer

I really love the following words from a StrongLoop’s blog: “The security of your app is only as strong as the weakest link in your dependencies”. Code dependencies in fact tend to have vulnerabilities often, even the most famous and battle tested packages. for example, a threat was detected in a previous version of Express that might expose the user to a cross-site scripting attack. Luckily, community and commercial tools (all have free plans, at least for public repositories) such as nsp and snyk can keep an automatic eye on these threats, warn the team and the later can even patch these vulnerabilities automatically

<br/><br/>

### What Other Bloggers Say
From the [StrongLoop](Best Practices for Express in Production):

> ...Using to manage your application’s dependencies is powerful and convenient.  But the packages that you use may contain critical security vulnerabilities that could also affect your application.  The security of your app is only as strong as the “weakest link” in your dependencies. Fortunately, there are two helpful tools you can use to ensure of the third-party packages you use: and requireSafe.  These two tools do largely the same thing, so using both might be overkill, but “better safe than sorry” are words to live by when it comes to security...

<br/><br/>

### Code example: typical nginx configuration

```javascript
//using a single line of code will attach 7 protecting middleware to Express appapp.use(helmet());
//additional configurations can be applied on demand, this one mislead the caller to think we’re using PHP 🙂
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));//other middleware are not activated by default and requires explicit configuration .
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));
````
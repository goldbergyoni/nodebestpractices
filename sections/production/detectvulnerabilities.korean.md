# Use tools that automatically detect vulnerable dependencies

<br/><br/>

### One Paragraph Explainer

Modern Node applications have tens and sometimes hundreds of dependencies. If any of the dependencies
you use has a known security vulnerability your app is vulnerable as well.
The following tools automatically check for known security vulnerabilities in your dependencies:

- [npm audit](https://docs.npmjs.com/cli/audit) - npm audit
- [snyk](https://snyk.io/) - Continuously find & fix vulnerabilities in your dependencies

<br/><br/>

### What Other Bloggers Say

From the [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/) blog:

> ...Using to manage your application’s dependencies is powerful and convenient. But the packages that you use may contain critical security vulnerabilities that could also affect your application. The security of your app is only as strong as the “weakest link” in your dependencies. Fortunately, there are two helpful tools you can use to ensure the third-party packages you use: nsp and requireSafe. These two tools do largely the same thing, so using both might be overkill, but “better safe than sorry” are words to live by when it comes to security...

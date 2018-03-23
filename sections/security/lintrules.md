# Embrace linter security rules

### One Paragraph Explainer
Security plugins for ESLint such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) offer code security checks based on a number of known vulnerabilities, such as unsafe regex, unsafe use of `eval()`, and non literal  filenames being used when accessing the file system within an application.  The use of git hooks such as [pre-git](https://github.com/bahmutov/pre-git) allows to further enforce any rules on source control before they get distributed to remotes, one of which can be to check that no secrets were added to source control.

### `eslint-plugin-security` example
An example of running `eslint-plugin-security` on a Node.js project with unsafe code practices.

![eslint-plugin-security example](/assets/images/lintrules1.png "eslint-plugin-security example")

### What other bloggers say
From the blog by [Adam Baldwin](https://www.safaribooksonline.com/blog/2014/03/28/using-eslint-plugins-node-js-app-security/):
> Linting doesn’t have to be just a tool to enforce pedantic rules about whitespace, semicolons or eval statements. ESLint provides a powerful framework for eliminating a wide variety of potentially dangerous patterns in your code (regular expressions, input validation, and so on). I think it provides a powerful new tool that’s worthy of consideration by security-conscious JavaScript developers.

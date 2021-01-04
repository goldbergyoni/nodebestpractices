[✔]: ../../assets/images/checkbox-small-blue.png

# Coleção genérica de boas práticas de segurança

A seção de boas práticas comuns de segurança contém as práticas recomendadas que são padronizadas em muitos frameworks e convenções. Por exemplo, a execução de um aplicativo com SSL/TLS deve ser uma diretriz e uma convenção comuns em todas as configurações para obter grandes benefícios de segurança.

## ![✔] Use SSL/TLS para criptografar a conexão cliente-servidor

**TL;DR:** Nos tempode de [certificados SSL/TLS gratuitos](https://letsencrypt.org/) e fácil configuração desses, você não precisa mais pesar vantagens e desvantagens de usar um servidor seguro porque as vantagens como segurança, suporte à tecnologia moderna e confiança superam claramente as desvantagens, como sobrecarga mínima em comparação com o HTTP puro.

**Caso contrário:** invasores podem executar ataques man-in-the-middle, espionar o comportamento de seus usuários e executar ações ainda mais maliciosas quando a conexão não é criptografada.

🔗 [**Leia Mais: Executando um servidor Node.js seguro**](/sections/security/secureserver.brazilian-portuguese.md)

<br/><br/>

## ![✔] Comparando valores secretos e hashes com segurança

**TL;DR:** Ao comparar valores secretos ou hashes como digestões do HMAC, você deve usar a função  [`crypto.timingSafeEqual(a, b)`](https://nodejs.org/dist/latest-v9.x/docs/api/crypto.html#crypto_crypto_timingsafeequal_a_b) que o Node fornece por padrão desde o Node.js v6.6.0. Este método compara dois objetos e continua comparando, mesmo que os dados não correspondam. Os métodos de comparação de igualdade padrão simplesmente retornariam após uma incompatibilidade de caracteres, permitindo ataques de tempo com base no comprimento da operação.

**Caso contrário:** Usando operadores de comparação de igualdade padrão, você pode expor informações críticas com base no tempo gasto para comparar dois objetos.

<br/><br/>

## ![✔] Gerando strings aleatórias usando Node.js

**TL;DR:** Usar uma função personalizada que gera sequências pseudo-aleatórias para tokens e outros casos de uso sensíveis à segurança pode não ser tão aleatório quanto você pensa, tornando seu aplicativo vulnerável a ataques criptográficos. Quando você precisar gerar strings aleatórias seguras, use a função [`crypto.randomBytes(size, [callback])`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) usando a entropia disponível fornecida pelo sistema.

**Caso contrário:** Ao gerar strings pseudo-aleatórias sem métodos criptograficamente seguros, os invasores podem prever e reproduzir os resultados gerados, tornando seu aplicativo inseguro.

<br/><br/>

Em seguida, abaixo, listamos alguns conselhos importantes do projeto OWASP.

## ![✔] OWASP A2: Autenticação Quebrada

- Requisite MFA/2FA (autenticação de múltiplos fatores) para serviços e contas importantes
- Troque senhas e chaves de acesso com freqüência, incluindo chaves SSH
- Aplique diretivas de senha forte, tanto para operadores quanto para gerenciamento de usuários no aplicativo ([🔗 OWASP recomendações para senhas](https://www.owasp.org/index.php/Authentication_Cheat_Sheet#Implement_Proper_Password_Strength_Controls.22))
- Não envie ou implemente sua aplicação com nenhuma credencial padrão, principalmente para usuários administradores ou serviços externos dos quais você depende
- Use apenas métodos de autenticação padrão, como OAuth, OpenID, etc. - **evite** autenticação básica
- Limitação da taxa de autenticação: Não permitir mais de _X_ tentativas de login (incluindo recuperação de senha, etc.) em um período _Y_
- Na falha de login, não deixe o usuário saber se a verificação de nome de usuário ou senha falhou, apenas retorne um erro de autenticação comum
- Considere o uso de um sistema centralizado de gerenciamento de usuários para evitar o gerenciamento de várias contas por funcionário (por exemplo, GitHub, AWS, Jenkins, etc) e para se beneficiar de um sistema de gerenciamento de usuários testado em batalha.

## ![✔] OWASP A5:  Controle de acesso quebrado

- Respeite o [princípio do menor privilégio](https://en.wikipedia.org/wiki/Principle_of_least_privilege)  -  cada componente e DevOps deve ter acesso apenas às informações e recursos necessários
- **Nunca** trabalhar com a conta console/root (privilégio completo), exceto para gerenciamento de contas
- Executar todas as instâncias/contêineres com uma conta de função/serviço
- Atribuir permissões a grupos e não a usuários. Isso deve tornar o gerenciamento de permissões mais fácil e transparente para a maioria dos casos

## ![✔] OWASP A6: Configurações de Segurança

- O acesso ao interior do ambiente de produção é feito somente através da rede interna, use SSH ou outras formas, mas _nunca_ exponha serviços internos
- Restringir o acesso à rede interna - defina explicitamente qual recurso pode acessar outros recursos (por exemplo, política de rede ou sub-redes)
- Se estiver usando cookies, configure-o para o modo "seguro", no qual ele está sendo enviado apenas por SSL
- Se estiver usando cookies, configure-o apenas para "mesmo site", para que apenas solicitações do mesmo domínio recebam os cookies designados
- Se estiver usando cookies, prefira a configuração "HttpOnly" que impede que o código JavaScript do lado do cliente acesse os cookies
- Proteja cada VPC com regras de acesso restritas e restritivas
- Priorize ameaças usando qualquer modelagem padrão de ameaça à segurança como STRIDE ou DREAD
- Protege contra ataques DDoS usando balanceadores de carga HTTP(S) e TCP
- Realize testes periódicos de penetração por agências especializadas

## ![✔] OWASP A3: Exposição de dados sensíveis

- Aceite apenas conexões SSL/TLS, imponha Strict-Transport-Security usando cabeçalhos
- Separe a rede em segmentos (ou seja, sub-redes) e garanta que cada nó tenha o mínimo necessário de permissões de acesso de rede
- Agrupar todos os serviços/instâncias que não precisam de acesso à Internet e explicitamente desautorizar qualquer conexão de saída (também uma sub-rede privada)
- Armazene todos os segredos em serviços de cofre, como o AWS KMS, o HashiCorp Vault ou o Google Cloud KMS
- Bloqueie instâncias de metadados confidenciais usando metadados
- Criptografe dados em trânsito quando deixa um limite físico
- Não inclua segredos em instruções de log
- Evite mostrar senhas simples no frontend, tome as medidas necessárias no backend e nunca armazene informações confidenciais em texto simples

## ![✔] OWASP A9: Usando componentes com vulnerabilidades de segurança conhecidas

- Digitalize imagens do docker para vulnerabilidades conhecidas (usando o Docker e outros fornecedores oferecem serviços de digitalização)
- Ativar atualizações e patches automáticos de instâncias (máquinas) para evitar a execução de versões antigas do sistema operacional que não possuem patches de segurança
- Forneça ao usuário os tokens 'id', 'access' e 'refresh' para que o token de acesso seja de curta duração e renovado com o token de atualização
- Registrar e auditar cada chamada de API para serviços de nuvem e gerenciamento (por exemplo, quem excluiu o bucket do S3?) Usando serviços como o AWS CloudTrail
- Execute o verificador de segurança do seu provedor de nuvem (por exemplo, consultor de confiança de segurança da AWS)


## ![✔] OWASP A10: Registro e monitoramento insuficientes

- Alerte em eventos de auditoria notáveis ​​ou suspeitos, como login de usuário, criação de novo usuário, alteração de permissão, etc.
- Alerte sobre quantidade irregular de falhas de login (ou ações equivalentes como senha esquecida)
- Inclua o horário e o nome de usuário que iniciaram a atualização em cada registro de banco de dados

## ![✔] OWASP A7: Cross-Site-Scripting (XSS)

- Use mecanismos de template ou frameworks que escapem automaticamente do XSS por design, como EJS, Pug, React ou Angular. Aprenda as limitações de cada mecanismo de proteção XSS e lidar adequadamente com os casos de uso que não são cobertos
- O escape de dados de solicitação HTTP não confiáveis ​​com base no contexto na saída HTML (corpo, atributo, JavaScript, CSS ou URL) resolverá as vulnerabilidades de XSS refletido e armazenado
- Aplicar codificação sensível ao contexto quando modificar o documento do navegador no lado do cliente atua em relação ao DOM XSS
- Ativar uma Política de Segurança de Conteúdo (CSP) como um controle de mitigação de defesa em profundidade contra o XSS


<br/><br/><br/>

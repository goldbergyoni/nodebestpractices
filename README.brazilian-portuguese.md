[✔]: assets/images/checkbox-small-blue.png

# Melhores Práticas em Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js Best Practices">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%2073%20Best%20practices-blue.svg" alt="73 items"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20July%2015%202018-green.svg" alt="Last update: July 25th, 2018"> <img src="https://img.shields.io/badge/%E2%9C%94%20Updated%20For%20Version%20-%20Node%208.11.3%20LTS-brightgreen.svg" alt="Updated for Node 8.11.3 LTS">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Follow us on Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Leia em diferentes linguagens: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU** and ![TR](/assets/flags/TR.png)**TR** in progress!)](#translations)

<br/>

# Bem-vindo! 3 Coisas Que Você Precisa de Saber:

**1. Quando você lê aqui, na verdade você lê alguns dos melhores artigos de Node.js -** este é um resumo e curadoria dos mais bem ranqueados conteúdos sobre as melhores práticas do Node.js.

**2. Esta é a maior coletânea, e está crescendo mais a cada semana -** atualmente, são apresentadas mais de 50 melhores práticas, guias de estilo e dicas de arquitetura. Novas issues e PR são criadas diariamente para manter este livro vivo atualizado. Gostaríamos muito de ver você contribuindo aqui, seja corrigindo algum erro de código ou sugerindo novas e brilhantes ideias. Veja nossas [conquistas aqui](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open).

**3. A maioria dos tópicos possuem informações adicionais -** perto dos tópicos das melhores práticas, você encontrará o link **🔗Leia Mais** que irá apresentar exemplos de códigos, citações de blogs selecionados e mais informações.

<br/><br/><br/>

## Índice

1.  [Práticas de Estrutura de Projeto (5)](#1-project-structure-practices)
2.  [Práticas de Tratamento de Erros (11) ](#2-error-handling-practices)
3.  [Práticas de Estilo de Código (12) ](#3-code-style-practices)
4.  [Práticas de Testes e Qualidade Geral (8) ](#4-testing-and-overall-quality-practices)
5.  [Práticas de Produção (17) ](#5-going-to-production-practices)
6.  :star: Novo: [Práticas de Segurança (23)](#6-security-best-practices)
7.  Práticas de Performance ([em breve](https://github.com/i0natan/nodebestpractices/milestones?direction=asc&sort=due_date&state=open))

<br/><br/><br/>

# `1. Práticas de Estrutura de Projeto`

## ![✔] 1.1 Estruture sua solução por componentes

**TL;DR:** A pior armadilha das grandes aplicações é manter uma enorme base de código com centenas de dependências - tal qual as monolíticas, que diminuem a velocidade dos desenvolvedores conforme eles tentam incorporar novos recursos. Em vez disso, particione seu código em componentes, cada um com sua própria pasta ou uma base de código dedicada, e garanta cada unidade seja mantida pequena e simples. Veja o link ‘Leia Mais’ abaixo, para ver exemplos de estrutura correta de projeto.

**Caso contrário:** Quando desenvolvendo novos recursos, desenvolvedores têm dificuldade para perceber o impacto de suas modificações e temem estragar outros componentes dependentes - deploys se tornam mais lentos e arriscados. Também é considerado mais difícil de escalar quando nenhuma unidade de negócio está separada.

🔗 [**Leia mais: estruture por componentes**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Coloque seus Componentes em Camadas, mantenha o Express dentro de seus limites

**TL;DR:** Cada componente deve conter 'layers' (camadas) - um objeto dedicado para web, lógica e código de acesso a dados. Isso não apenas faz uma separação clara dos interesses, como também facilita significativamente os mocks e testes de sistema. Embora este seja um padrão muito comum, desenvolvedores de API tendem a misturar camadas, passando os objetos da camada Web (req e res do Express) para a lógica de negócios e camadas de dados - isto torna sua aplicação dependente a acessível apenas pelo Express.

**Caso contrário:** App that mixes web objects with other layers can not be accessed by testing code, CRON jobs and other non-Express callers

🔗 [**Leia Mais: seu app em camadas**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Envolva os utilitários comuns como pacotes npm

**TL;DR:** Em uma grande aplicação, que constitui uma grande base de código, utilidades de características transversais tais como logger, encriptação e afins, devem ser envolvidos pelo seu próprio código e exposto como pacotes npm privados. Isso permite compartilhá-los entre várias bases de código e projetos.

**Caso contrário:** Você deverá criar seu próprio ciclo de implantação e dependência.

🔗 [**Leia Mais: estrutura por característica**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Separe 'app' e 'server' no Express

**TL;DR:** Evite o péssimo hábito de definir todo a aplicação [Express](https://expressjs.com/) em um único arquivo enorme - separe a definição de seu 'Express' no mínimo em dois arquivos: a declaração da API (app.js) e as configurações de rede (WWW). Para uma estrutura ainda melhor, declare sua API dentro dos componentes.

**Caso contrário:** Sua API será acessível apenas para testes via chamadas HTTP (mais lentos e muito mais difíceis de gerar relatórios de cobertura). Provavelmente não será um grande prazer manter centenas de linhas de código em um único arquivo.

🔗 [**Leia Mais: separe 'app' e 'server' no Express**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Use configuração consciente, segura e hierárquica do ambiente

**TL;DR:** Uma definição de configuração perfeita e impecável deve garantir que (a) as chaves possam ser lidas a partir do arquivo E TAMBÉM da variável de ambiente (b) os segredos sejam mantidos fora do código consolidado (c) a configuração é hierárquica para facilitar a localização. Existem alguns pacotes que podem auxiliar na checagem destes tópicos, como [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf) e [config](https://www.npmjs.com/package/config)

**Caso contrário:** Deixar de satisfazer qualquer um dos requisitos de configuração simplesmente atrapalhará a equipe de desenvolvimento ou devops. Provavelmente ambas.

🔗 [**Leia Mais: melhores práticas de configuração**](/sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#table-of-contents">⬆ Voltar ao topo</a></p>

# `2. Práticas de Tratamento de Erros`

## ![✔] 2.1 Utilize Async-Await ou promises para tratamento de erros assíncronos

**TL;DR:** Tratar erros assíncronos no estilo callback provavelmente é o caminho mais rápido para o inferno (também conhecido como a pyramid of doom - ou pirâmide da desgraça em bom português). O melhor presente que você pode dar ao seu código é utilizar uma biblioteca respeitável de promise ou async-await, que proporciona uma sintaxe de código muito mais compacta e familiar, como o try-catch.

**Caso contrário:** O estilo de callback do Node.js, function(err, response), é um caminho promissor para um código insustentável devido à combinação de manipulação de erro com código casual, aninhamento excessivo e padrões de codificação inadequados.

🔗 [**Leia Mais: evitando callbacks**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Utilize apenas objetos de erro interno

**TL;DR:** Muitos geram erros como uma string ou como algum tipo personalizado - isso complica a lógica de tratamento de erros e a interoperabilidade entre módulos. Se você rejeita uma promise, lance uma mensagem de erro ou uma exceção - utilizando somente o objeto de erro interno aumentará a uniformidade e evitará a perda de informações.

**Caso contrário:** Ao invocar algum componente, sendo incerto qual tipo de erro irá retornar - isso faz com que o tratamento de erros seja muito mais difícil. Até pior, usar tipos personalizados para descrever erros pode levar à perda de informações de erros críticos, como o stack trace!

🔗 [**Leia Mais: usando o objeto interno de erro**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Diferencie erros operacionais vs erros de programação

**TL;DR:** Erros operacionais (ex: API recebeu um input inválido) referem-se a casos onde o impacto do erro é totalmente compreendido e pode ser tratado com cuidado. Por outro lado, erro de programação (ex: tentar ler uma variável não definida) refere-se a falhas de código desconhecidas que ditam para reiniciar a aplicação.

**Caso contrário:** Você pode sempre reiniciar o aplicativo quando um erro aparecer, mas por que derrubar aproximadamente 5000 usuários que estavam online por causa de um pequeno erro operacional previsto? O contrário também não é ideal - manter a aplicação rodando quando um problema desconhecido (erro de programação) ocorreu, pode levar para um comportamento não esperado. Diferenciá-los, permite agir com tato e aplicar uma abordagem equilibrada baseada no dado contexto.

🔗 [**Leia Mais: erros operacionais vs erros de programação**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Trate erros de forma centralizada, não dentro de um middleware do Express

**TL;DR:** A lógica de tratamento de erros, bem como email para administrador e loggin, deve ser encapsulada em um objeto dedicado e centralizado que todos os endpoints (por exemplo, middleware do Express, cron jobs, testes unitários) chamem quando um erro é recebido.

**Caso contrário:** Não tratar os erros em um mesmo lugar irá levar à duplicidade de código, e provavelmente, a erros tratados incorretamente.

🔗 [**Leia Mais: tratando erros de forma centralizada**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Documente erros de API usando o Swagger

**TL;DR:** Permita que os clientes de sua API saibam quais erros podem ser retornados para que eles possam lidar com esses detalhes, sem causar falhas. Geralmente, isto é feito com frameworks de documentação REST API, como o Swagger.

**Caso contrário:** Um cliente de uma API pode decidir travar e reiniciar, apenas pelo motivo de ter recebido de volta um erro que não conseguiu entender. Nota: o visitante de sua API pode ser você (muito comum em um ambiente de microsserviço).

🔗 [**Leia Mais: documentando erros no Swagger**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Finalize o processo quando um estranho chegar

**TL;DR:** Quando ocorre um erro desconhecido (um erro de programação, veja a melhor prática #3) - há incerteza sobre a integridade da aplicação. Uma prática comum sugere reiniciar cuidadosamente o processo utilizando uma ferramenta de “reinicialização” como Forever e PM2.

**Caso contrário:** Quando uma exceção desconhecida é lançada, algum objeto pode estar com defeito (por exemplo, um emissor de evento que é usado globalmente e não dispara mais eventos devido a alguma falha interna) e todas as requisições futuras podem falhar ou se comportar loucamente.

🔗 [**Leia Mais: finalizando o processo**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Use um agente de log maduro para aumentar a visibilidade de erros

**TL;DR:** Um conjunto de ferramentas de registro maduras como Winston, Bunyan ou Log4j, irão acelerar a descoberta e entendimento de erros. Portanto, esqueça o console.log.

**Caso contrário:** Ficar procurando através de console.logs ou manualmente em arquivos de texto confusos sem utilizar ferramentas de consulta ou um visualizador de log decente, pode mantê-lo ocupado até tarde.

🔗 [**Leia Mais: usando um logger maduro**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

# `Práticas de API`

## Nossos colaboradores estão trabalhando nesta seção. Quer se juntar a nós?

# `Práticas de Performance`

## Nossos colaboradores estão trabalhando nesta seção. Quer se juntar a nós?

<br/><br/><br/>

# Feitos

Para manter este guia e deixá-lo atualizado, estamos constantemente atualizando e aprimorando as diretrizes e as práticas recomendadas com a ajuda da comunidade. Você pode acompanhar nossos [feitos](https://github.com/i0natan/nodebestpractices/milestones) e se juntar aos grupos de trabalho, caso queira contribuir com este projeto.

<br/><br/>

## Traduções

Todas as traduções são contribuições da comunidade. Nós ficaremos felizes em obter ajuda com traduções concluídas, em andamento, ou mesmo com novas traduções!

### Traduções concluídas

- ![CN](/assets/flags/CN.png) [Chinês](README.chinese.md) - Cortesia de [Matt Jin](https://github.com/mattjin)

### Traduções em andamento

- ![FR](/assets/flags/FR.png) [Francês](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussão](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebraico ([Discussão](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Coreano](https://github.com/i0natan/nodebestpractices/blob/korean-translation/README.md) ([Discussão](https://github.com/i0natan/nodebestpractices/issues/94))
- ![RU](/assets/flags/RU.png) [Russo](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussão](https://github.com/i0natan/nodebestpractices/issues/105))
- ![ES](/assets/flags/ES.png) [Espanhol](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussão](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turco ([Discussão](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/><br/>

# Colaboradores

## `Yoni Goldberg`

Consultor de Node.js independente, que trabalha com clientes nos EUA, Europa e Israel, na criação de aplicações Node dimensionáveis em grande escala. Muitas das melhores práticas acima foram publicadas primeiro em um post em seu blog em [goldbergyoni.com](https://goldbergyoni.com). Encontre-o como @goldbergyoni ou me@goldbergyoni.com

## `Ido Richter`

👨‍💻 Engenheiro de software, 🌐 web developer, 🤖 entusiasta de emojis

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Colaborador do Core do Node.js Core, vem "nodeando" desde a versão 0.4 e "nodeou" em vários sites em produção. Fundou o repositório `node4good`, dos projetos [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), e [`asynctrace`](https://github.com/node4good/asynctrace). Também o `refack` no freenode, Twitter, GitHub, GMail e muitas outras plataformas. Aberto à mensagens inbox, feliz em ajudar.

## `Bruno Scheufler`

💻 full-stack web developer e entusiasta de Node.js

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)

Full Stack Developer da Nova Zelândia, interessado em arquitetar e desenvolver aplicações Node.js para rodar em escala global. Um grande contribuidor para software de código aberto, incluindo o Core do Node.js

<br/><br/><br/>

# Notas de Agradecimento

Este repositório é mantido atualizado graças à ajuda da comunidade. Nós apreciamos qualquer contribuição, desde a correção de uma simples palavra até uma nova melhor prática. Abaixo, a lista de todos que contribuíram para este projeto. Uma 🌻 simboliza um pull request bem sucedido e uma ⭐ simboliza uma nova melhor prática aprovada.

### Flores

🌻 [Kevin Rambaud](https://github.com/kevinrambaud),
🌻 [Michael Fine](https://github.com/mfine15),
🌻 [Shreya Dahal](https://github.com/squgeim),
🌻 [ChangJoo Park](https://github.com/ChangJoo-Park),
🌻 [Matheus Cruz Rocha](https://github.com/matheusrocha89),
🌻 [Yog Mehta](https://github.com/BitYog),
🌻 [Kudakwashe Paradzayi](https://github.com/kudapara),
🌻 [t1st3](https://github.com/t1st3),
🌻 [mulijordan1976](https://github.com/mulijordan1976),
🌻 [Matan Kushner](https://github.com/matchai),
🌻 [Fabio Hiroki](https://github.com/fabiothiroki),
🌻 [James Sumners](https://github.com/jsumners),
🌻 [Chandan Rai](https://github.com/crowchirp),
🌻 [Dan Gamble](https://github.com/dan-gamble),
🌻 [PJ Trainor](https://github.com/trainorpj),
🌻 [Remek Ambroziak](https://github.com/reod),
🌻 [Yoni Jah](https://github.com/yonjah),
🌻 [Misha Khokhlov](https://github.com/hazolsky),
🌻 [Evgeny Orekhov](https://github.com/EvgenyOrekhov),
🌻 [Gediminas Petrikas](https://github.com/gediminasml),
🌻 [Isaac Halvorson](https://github.com/hisaac),
🌻 [Vedran Karačić](https://github.com/vkaracic),
🌻 [lallenlowe](https://github.com/lallenlowe),
🌻 [Nathan Wells](https://github.com/nwwells),
🌻 [Paulo Vítor S Reis](https://github.com/paulovitin),
🌻 [syzer](https://github.com/syzer),
🌻 [David Sancho](https://github.com/davesnx),
🌻 [Robert Manolea](https://github.com/pupix),
🌻 [Xavier Ho](https://github.com/spaxe),
🌻 [Aaron Arney](https://github.com/ocularrhythm),
🌻 [Jan Charles Maghirang Adona](https://github.com/septa97),
🌻 [Allen Fang](https://github.com/AllenFang),
🌻 [Leonardo Villela](https://github.com/leonardovillela),
🌻 [Michal Zalecki](https://github.com/MichalZalecki)
🌻 [Chris Nicola](https://github.com/chrisnicola),
🌻 [Alejandro Corredor](https://github.com/aecorredor),
🌻 [Ye Min Htut](https://github.com/ymhtut),
🌻 [cwar](https://github.com/cwar),
🌻 [Yuwei](https://github.com/keyfoxth),
🌻 [Utkarsh Bhatt](https://github.com/utkarshbhatt12),
🌻 [Duarte Mendes](https://github.com/duartemendes),
🌻 [Sagir Khan](https://github.com/sagirk),
🌻 [Jason Kim](https://github.com/serv),
🌻 [Mitja O.](https://github.com/Max101),
🌻 [Sandro Miguel Marques](https://github.com/SandroMiguel)

### Estrelas <br/>

⭐ [Kyle Martin](https://github.com/js-kyle)
⭐ [Keith Holliday](https://github.com/TheHollidayInn)

<br/><br/><br/>

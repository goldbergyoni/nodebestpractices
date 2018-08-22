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

# `API Practices`

## Our contributors are working on this section. Would you like to join?

# `Performance Practices`

## Our contributors are working on this section. Would you like to join?

<br/><br/><br/>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/i0natan/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/><br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![CN](/assets/flags/CN.png) [Chinese](README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/i0natan/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](https://github.com/i0natan/nodebestpractices/blob/korean-translation/README.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/94))
- ![RU](/assets/flags/RU.png) [Russian](https://github.com/i0natan/nodebestpractices/blob/russian-translation/README.russian.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/105))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/i0natan/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/i0natan/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/i0natan/nodebestpractices/issues/139))

<br/><br/><br/>

# Contributors

## `Yoni Goldberg`

Independent Node.js consultant who works with customers in USA, Europe, and Israel on building large-scale scalable Node applications. Many of the best practices above were first published in his blog post at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at @goldbergyoni or me@goldbergyoni.com

## `Ido Richter`

👨‍💻 Software engineer, 🌐 web developer, 🤖 emojis enthusiast

## `Refael Ackermann` [@refack](https://github.com/refack) &lt;refack@gmail.com&gt; (he/him)

Node.js Core Collaborator, been noding since 0.4, and have noded in multiple production sites. Founded `node4good` home of [`lodash-contrib`](https://github.com/node4good/lodash-contrib), [`formage`](https://github.com/node4good/formage), and [`asynctrace`](https://github.com/node4good/asynctrace).
`refack` on freenode, Twitter, GitHub, GMail, and many other platforms. DMs are open, happy to help

## `Bruno Scheufler`

💻 full-stack web developer and Node.js enthusiast

## `Kyle Martin` [@js-kyle](https://github.com/js-kyle)

Full Stack Developer based in New Zealand, interested in architecting and building Node.js applications to perform at global scale. Keen contributor to open source software, including Node.js Core.

<br/><br/><br/>

# Thank You Notes

This repository is being kept up to date thanks to the help from the community. We appreciate any contribution, from a single word fix to a new best practice. Below is a list of everyone who contributed to this project. A 🌻 marks a successful pull request and a ⭐ marks an approved new best practice

### Flowers

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

### Stars <br/>

⭐ [Kyle Martin](https://github.com/js-kyle)
⭐ [Keith Holliday](https://github.com/TheHollidayInn)

<br/><br/><br/>

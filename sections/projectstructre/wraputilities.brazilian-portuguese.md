# Envolva os utilitários comuns como pacotes npm

<br/><br/>

### Explicação em um Parágrafo

Quando você começa a crescer e tem componentes diferentes em servidores diferentes que consomem utilitários semelhantes, você deve começar a gerenciar as dependências - como você pode manter uma cópia do código do utilitário e permitir que vários componentes do consumidor a usem e implantem? Bem, existe uma ferramenta para isso, ele é chamado npm ... Comece por encapsular pacotes de utilitários de terceiros com seu próprio código para torná-los facilmente substituíveis no futuro e publicar seu próprio código como pacote npm privado. Agora, toda a sua base de código pode importar esse código e se beneficiar da ferramenta gratuita de gerenciamento de dependências. É possível publicar pacotes npm para seu uso privado sem compartilhá-lo publicamente usando [módulos privados](https://docs.npmjs.com/private-modules/intro), [registros privados](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) ou [pacotes npm locais](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)

<br/><br/>

### Compartilhando seus próprios utilitários comuns em ambientes e componentes

![alt text](../../assets/images/Privatenpm.png "Solução de estruturação por componentes")

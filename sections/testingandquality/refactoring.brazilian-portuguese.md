# Refatorando

<br/><br/>

### Explicação em um Parágrafo

A refatoração é um processo importante no fluxo de desenvolvimento iterativo. Remover "Code Smells" (más práticas de codificação) como código duplicado, métodos longos e lista de parâmetros extensa, irá melhorar o seu código e torná-lo mais sustentável. O uso de ferramentas de análise estática ajudará você a encontrar essas más práticas de código e criará um processo em torno da refatoração. Adicionar essas ferramentas à sua configuração de CI (Integração Contínua) ajudará a automatizar o processo de verificação de qualidade. Se o seu CI se integrar a uma ferramenta como o Sonar ou o Code Climate, a compilação falhará se detectar más práticas de código e informará o autor sobre como resolver o problema. Essas ferramentas de análise estática complementarão as ferramentas de lint, como o ESLint. A maioria das ferramentas de lint se concentrará em estilos de código como recuo e ponto-e-vírgulas ausentes (embora alguns encontrem más práticas de código como funções longas) em um único arquivo, enquanto ferramentas de análise estática se concentrarão em encontrar más práticas de código (código duplicado, análise de complexidade etc.) que estão em um único arquivo ou vários arquivos.

<br/><br/>


### Martin Fowler - Cientista Chefe na ThoughtWorks

 Do livro, "Refactoring - Improving the Design of Existing Code"

 > A refatoração é uma técnica controlada para melhorar o design de uma base de código existente.

<br/><br/>

### Evan Burchard - Consultor de Desenvolvimento Web e Autor

 Do livro, "Refactoring JavaScript: Turning Bad Code into Good Code"

 > Não importa qual framework ou linguagem que "Compila-para-JS" ou biblioteca que você usa, bugs e preocupações de desempenho serão sempre um problema se a qualidade subjacente do seu JavaScript for ruim.

<br/><br/>

 ### Exemplo: Análise de métodos complexos com CodeClimate (comercial)

![alt text](../../assets/images/codeanalysis-climate-complex-methods.PNG "Análise de métodos complexos")

### Exemplo: tendências de análise de código e histórico com CodeClimate (comercial)

![alt text](../../assets/images/codeanalysis-climate-history.PNG "Histórico de análise de código")

### Exemplo: Resumo de análise de código e tendências com o SonarQube (comercial)

![alt text](../../assets/images/codeanalysis-sonarqube-dashboard.PNG "Histórico de análise de código")


<br/><br/>

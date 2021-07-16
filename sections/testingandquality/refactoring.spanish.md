# Refactorizando

### Párrafo de explicación

Refactorizar es un proceso importante en el flujo de desarrollo iterativo. Removiendo el "código que huele" (malas prácticas), como duplicación de código, métodos largos, listas de parámetros largos, va a mejorar su código y lo va a hacer mas mantenible. Usando herramientas de análisis estático le ayudara a encontrar ese código que huele y a construir un procesos acerca de refactorización. Agregar esta herramientas a su compilación CI, le ayudará a automatizar la calidad del proceso de verificado. Si su CI se integra con una herramienta como Sonar o Code Climate, la compilación fallará si detecta código que huele y le informará al autor en como solucionar el problema. Estas herramientas de análisis estático complementaran las herramientas de Lint, como ESLint. La mayoría de herramientas lint se centrarán en estilos de código como identación, punto y coma faltantes (aunque algunas encontrarán código oloroso como funciones largas) en un solo archivo, mientras que las herramientas de análisis estático se centrarán en encontrar código olorosos (código duplicado, análisis de complejidad, etc.) que están en uno o varios archivos.

<br><br>


### Martin Fowler - Jefe científico en ThoughtWorks

 Del libro, "Refactoring - Improving the Design of Existing Code"

 > Refactoring is a controlled technique for improving the design of an existing code base.

 > Refactorización es una técnica controlada para mejorar el diseño de una base de código existente

<br/><br/>

### Evan Burchard - Consultor de desarrollo web y autor

 Del libro, "Refactoring JavaScript: Turning Bad Code into Good Code"

 > No matter what framework or “compiles-to-JS” language or library you use, bugs and performance concerns will always be an issue if the underlying quality of your JavaScript is poor.

 > No importa que framework o "compíla a JS" lenguaje o biblioteca utilice, bugs y problemas de rendimiento siempre serán un problema si la calidad de escritura de su JavaScript es pobre

<br/><br/>

 ### Ejemplo: Análisis de métodos complejos con CodeClimate (comercial)

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/codeanalysis-climate-complex-methods.PNG "Complex methods analysis")

### Ejemplo: Análisis de código de moda e historia con CodeClimate (comercial)

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/codeanalysis-climate-history.PNG "Code analysis history")

### Ejemplo: Análisis de código resumen y moda con SonarQube (comercial)

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/codeanalysis-sonarqube-dashboard.PNG "Code analysis history")


<br/><br/>
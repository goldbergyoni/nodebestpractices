# Envuelve las utilidades comunes como paquetes de NPM

<br/><br/>

### Un párrafo explicativo
Una vez que comienzas a crecer y tienes diferentes componentes en diferentes servidores que consumen utilidades similares, debes comenzar a administrar las dependencias: ¿cómo puedes conservar 1 copia de tu código de utilidad y permitir que múltiples componentes de consumo lo usen y lo implementen? bueno, hay un marco para eso, se llama NPM ... Comienza envolviendo paquetes de utilidad de terceros con tu propio código para que sea fácilmente reemplazable en el futuro y publiqca tu propio código como paquete privado de NPM. Ahora, toda su base de código puede importar ese código y beneficiarse del framework de gestión de dependencias gratuito. Es posible publicar paquetes de NPM para tu propio uso privado sin compartirlo públicamente utilizando [módulos privados] (https://docs.npmjs.com/private-modules/intro), [registro privado] (https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) o [paquetes locales de NPM] (https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc )

<br/><br/>

### Comparte tus propias utilidades comunes a través de ambientes y componentes
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/Privatenpm.png "Structuring solution by components")

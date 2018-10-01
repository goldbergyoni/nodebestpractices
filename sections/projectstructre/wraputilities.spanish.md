# Wrap common utilities as npm packages

<br/><br/>

### One Paragraph Explainer

Al empezar a crecer y tener diferentes componentes en diferentes servidores que consumen utilidades similares, deberías empezar a gestionar las dependencias. ¿Cómo puedes mantener una sola copia de tu código de útiles mientras permites que múltiples componentes lo usen y lo desplieguen? Bueno, hay una herramienta para eso llamada npm... Empieza por encerrar paquetes de terceros con tu propio código para hacerlo fácilmente reemplazable en un futuro y publica tu propio código como un paquete privado npm. Ahora, todo tu código base puede importar ese código y beneficiarse gratuitamente de la herramienta de gestión de paquetes. Es posible publicar paquetes npm para tu propio uso privado sin compartirlo públicamente mediante el uso de [módulos privados](https://docs.npmjs.com/private-modules/intro), [registro privado](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) o [paquetes npm locales](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc).

<br/><br/>

### Sharing your own common utilities across environments and components

![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/Privatenpm.png "Structuring solution by components")

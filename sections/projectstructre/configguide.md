# Usar una configuración segura, jerárquica y consciente del entorno

<br/><br/>


### Un párrafo explicativo

Cuando se trata de datos de configuración, muchas cosas pueden molestar y ralentizar: (1) configurar todas las claves utilizando variables de entorno de proceso resulta muy tedioso cuando se necesitan inyectar 100 claves (en lugar de solo confirmarlas en un archivo de configuración), pero cuando tratas solo con archivos los administradores de devops no pueden alterar el comportamiento sin cambiar el código. Una solución de configuración confiable debe combinar los archivos de configuración y las sobre escrituras de las variables de proceso (b) al especificar todas las claves en un JSON plano, resulta frustrante encontrar y modificar entradas cuando la lista crece. Un archivo JSON jerárquico que está agrupado en una sección puede resolver este problema + pocas bibliotecas de configuración permiten almacenar la configuración en múltiples archivos y cuidar la unión en tiempo de ejecución. Ve el siguiente ejemplo (3) que almacena información confidencial como la contraseña de la base de datos, obviamente, no se recomienda, pero no existe una solución rápida y práctica para este desafío. Algunas bibliotecas de configuraciones permiten cifrar archivos, otras cifran esas entradas durante los commits de GIT o simplemente no almacenan valores reales para esas entradas y especifican el valor real durante la implementación a través de variables de entorno. (4) Algunos escenarios de configuración avanzada exigen inyectar el valor de configuración a través de la línea de comando (vargs) o sincronizar información de configuración a través de la caché centralizada como Redis para que los diferentes servidores no contengan datos diferentes.

Algunas bibliotecas de configuración pueden proporcionar la mayoría de estas características de forma gratuita, echa un vistazo a las bibliotecas de NPM como [nconf](https://www.npmjs.com/package/nconf) y [config](https://www.npmjs.com/package/config) que validan muchos de estos requisitos.

<br/><br/>

### Ejemplo de código – la configuración jerárquica ayuda a encontrar entradas y mantener enormes archivos de configuración

```javascript
{
  // Customer module configs 
  "Customer": {
    "dbConfig": {
      "host": "localhost",
      "port": 5984,
      "dbName": "customers"
    },
    "credit": {
      "initialLimit": 100,
      // Set low for development 
      "initialDays": 1
    }
  }
}
```

<br/><br/>

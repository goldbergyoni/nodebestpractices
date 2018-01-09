# Estructura tu solución en componentes Structure your solution by components

<br/><br/>

### Un párrafo explicativo

Para aplicaciones medianas y superiores, los monolitos son realmente malos: un software grande con muchas dependencias es simplemente difícil de entender y a menudo conduce a código espagueti. Incluso aquellos arquitectos inteligentes que están capacitados para domesticar a la bestia y "modularla": dedican un gran esfuerzo mental al diseño y cada cambio requiere evaluar cuidadosamente el impacto en otros objetos dependientes. La solución definitiva es desarrollar software pequeño: divide el stack completo en componentes independientes que no compartan archivos con otros, cada componente constituye muy pocos archivos (por ejemplo, API, servicio, acceso a datos, test, etc.) para que sea muy fácil entender. Algunos pueden llamar a esto 'arquitectura de microservicios': es importante entender que los microservicios no son una especificación que debas seguir sino un conjunto de principios. Puedes adoptar muchos principios en una arquitectura de microservicios en toda regla o adoptar solo unos pocos. Ambos son buenos siempre y cuando mantengas baja la complejidad del software. Lo mínimo que debes hacer es crear una frontera básica entre los componentes, asignar una carpeta en la raíz del proyecto para cada componente de negocio y hacerlo autónomo: otros componentes pueden consumir su funcionalidad solo a través de su interfaz pública o API. Esta es la base para mantener tus componentes simples, evitar las dependencias y allanar el camino a los microservicios en el futuro una vez que tu aplicación crezca

<br/><br/>


### Cita de Blog: "Scaling requires scaling of the entire application"
 De el blog MartinFowler.com
 
 > Las aplicaciones monolíticas pueden ser exitosas, pero cada vez más personas sienten frustraciones con ellas, especialmente a medida que se implementan más aplicaciones en la nube. Los ciclos de cambio están unidos: un cambio realizado en una pequeña parte de la aplicación requiere que se reconstruya y despliegue todo el monolito. Con el tiempo, a menudo es difícil mantener una buena estructura modular, lo que hace más difícil mantener los cambios que solo deberían afectar a un módulo dentro de ese módulo. El escalado requiere escalar toda la aplicación en lugar de partes de ella que requieren un mayor recurso.

 <br/><br/>

 ### Cita del blog: "So what does the architecture of your application scream?"

Del blog uncle-bob

> ... si estuvieras mirando la arquitectura de una biblioteca, es probable que veas una gran entrada, un área para salida/entrada de empleados, áreas de lectura, salas de conferencias pequeñas y galería tras galería capaz de sostener estanterías para todos los libros en la biblioteca. Esa arquitectura gritaría: Biblioteca.
Entonces, ¿qué grita la arquitectura de tu aplicación? Cuando observas la estructura de directorios de nivel superior y los archivos de origen en el paquete de nivel superior; ¿gritan: Sistema de Cuidado de la Salud, o Sistema de Contabilidad, o Sistema de Gestión de Inventario? ¿O gritan: Rails o Spring / Hibernate o ASP?
 
 ### Bien: Estructura tu solución en componentes autónomos
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

 <br/><br/> 

### Bad: Agrupa tus archivos por rol técnico
![alt text](https://github.com/i0natan/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")

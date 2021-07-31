# Nuestro manifiesto de escritura de contenido

Como mejorar la lectura y experiencia de aprendizaje para nuestros visitantes

## 1. Simple es lo mejor de lo mejor

Nuestra misión es crear contenido fácil de leer y absorber, organizamos contenido. Como tal, nos enfocamos en transformar temas complejos y exhaustivos en una lista simplificada, cambiamos la carga excesiva de información por detalles mas cortos y menos precisos, evitamos temas 'flamables' y controversiales y escapamos de las ideas subjetivas a favor de prácticas generalmente aceptadas.

## 2. Se confiable y basado en evidencias

Nuestros lectores deben tener gran confianza de que el contenido que revisan es confiable. Logramos esto al incluir evidencia como referencias, datos y otros recursos disponibles del tema. Prácticamente, nos esforzamos por citar fuentes confiable, mostrar estándares, diseños de patrones relacionados o cualquier medición científica que pruebe lo que decimos.

## 3. MECE Mutuamente Exclusivo y Colectivamente Exhaustivo (Mutually Exclusive and Collectively Exhaustive).

Aparte de que el contenido es editable y es confiable, hechando un vistazo debería proveer un alcance completo en el tema. No sub-tema importante debe quedar afuera.

## 4. Formateo consistente

El contenido es presentado usando platillas definidas. Cualquier contenido futuro debe tener el mismo formato. Si deseas agregar nuevo contenido, copia el formato existente y extiéndelo como necesites. Para información adicional visita [Esta plantilla](https://github.com/goldbergyoni/nodebestpractices/blob/master/sections/template.md).

## 5. Es acerca Node.js

Cada consejo debe ser directamente de Node.js y no otro programa de desarrollo en general. Cuando recomendamos implementar patrones/reglas genéricas en Node.js, el contenido debe centrarse en la implementación en Node. Por ejemplo, cuando recomendamos sanitizar todos los datos de entrada de las peticiones por razones de seguridad, Node-lingo debería de usarse `Usa middleware para sanitizar tus datos de entrada`. Si un objeto no tiene una implementación específica en Node.js (Por ejemplo. Se ve igual en Python & Java): Inclúyelo dentro del objeto contenedor genérico, ve el objeto 6.5 por ejemplo.

## 6. Solo los mejores

Aveces es bueno incluir nombres de proveedores que pueden resolver ciertos retos o problemas como paquetes npm, herramientas de código abierto (Open Source) o incluso productos comerciales. Para evitar listas engorrosamente grandes o recomendar proyectos no confiable o inestables, decidimos las siguientes reglas:

- Solo los 3 proveedores principales deben ser recomendados: Un proveedor que aparezca en los primeros 3 resultados de un motor de búsqueda (Google o Github ordenado por popularidad) para cierta palabra clave relevante, puede ser incluido en nuestra recomendación.

- Si es un paquete npm debe ser descargado al menos 750 veces al día en promedio

- Si es un proyecto de código abierto, su última actualización debió haber sido en los últimos 6 meses.
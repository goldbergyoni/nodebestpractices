# Falla rápido, valida los argumentos mediante una biblioteca dedicada

### Párrafo de explicación

Todos sabemos que revisar argumentos y fallar cuanto antes es importante para evitar bugs ocultos (ver el código antipatrón de ejemplo a continuación). Si no, lee sobre programación explícita y defensiva. En realidad, tendemos a evitarlo por el fastidio que supone programarlo (por ej. piensa en validar un objeto JSON jerárquico con campos como email y fechas). Bibliotecas como Joi y Validator convierten esta tediosa tarea en calderilla.

### Wikipedia: Programación defensiva

La programación defensiva es un enfoque para mejorar el software y el código, en términos de calidad general – reduciendo el número de bugs y problems. Haciendo el código comprensible – el código debe ser legible y entendible por lo cual es aprobado en una auditoría de código. Haciendo que el software se comporte de una forma predecible a pesar de entradas inesperadas o acciones del usuario.

### Código de ejemplo: validando una entrada JSON compleja usando Joi

```javascript
var memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember)
{
 // validación viene primero
 Joi.assert(newMember, memberSchema); //Tira error si la validación falla
 // otra lógica va aquí
}

```

### Anti patrón: no validar produce bugs horribles

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// Si el descuento es positivo, redirigimos al usuario a imprimir sus cupones de descuento
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// Olvidamos pasar el parámetro descuento ¿Porqué rayos el usuario fue redirigido a la pantalla de descuento?
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// Si el descuento es positivo, redirigimos al usuario a imprimir sus cupones de descuento
function redirectToPrintDiscount(httpResponse: Response, member: Member, discount: number) {
  if (discount != 0) {
    httpResponse.redirect(`/discountPrintView/${member.id}`);
  }
}

redirectToPrintDiscount(httpResponse, someMember, -12);
// We passed a negative parameter discount, why the heck was the user redirected to the discount screen?
//Pasamos un valor de descuento negativo, ¿Porqué rayos el usuario fue redirigido a la pantalla de descuento?
```
</details>

### Cita de blog: "Deberías arrojar esos errores inmediatamente"

Del blog: Joyent

> A degenerate case is where someone calls an asynchronous function but doesn’t pass a callback. You should throw these errors immediately since the program is broken and the best chance of debugging it involves getting at least a stack trace and ideally a core file at the point of the error. To do this, we recommend validating the types of all arguments at the start of the function.

> Un caso degenerado es cuando alguien llama a una función asíncrona pero no pasa un callback. Deberías arrojar esos errores inmediatamente ya que el programa está roto y la mejor opción de debuggearlo involucra obtener al menos un stack trace e idealmente un archivo del núcleo en el punto de error. Para hacer esto, recomendamos validar los tipos de todos los argumentos al comienzo de la función.

# Échouez rapidement, valider les arguments à l'aide d'une bibliothèque dédiée

### Un paragraphe d'explication

Nous savons tous combien il est important de vérifier les arguments et d'échouer rapidement pour éviter les bogues cachés (voir le contre exemple de code ci-dessous). Si ce n'est pas le cas, renseignez-vous sur la programmation explicite et la programmation défensive. En réalité, nous avons tendance à l'éviter en raison de la pénibilité de son codage (par exemple, pensez à valider un objet JSON hiérarchique avec des champs comme l'email et les dates) - des bibliothèques comme Joi et Validator transforment cette tâche fastidieuse en un jeu d'enfant.

### Wikipedia : la programmation défensive

La programmation défensive est une approche pour améliorer les logiciels et le code source, en termes de qualité générale - en réduisant le nombre de bogues et de problèmes logiciels. Rendre le code source compréhensible - le code source doit être lisible et compréhensible afin qu'il soit approuvé lors d'un audit de code. Faire en sorte que le logiciel se comporte de manière prévisible malgré des entrées ou des actions utilisateur inattendues.

### Exemple de code : validation d'une entrée JSON complexe à l'aide de « Joi »

```javascript
const memberSchema = Joi.object().keys({
 password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
 birthyear: Joi.number().integer().min(1900).max(2013),
 email: Joi.string().email()
});

function addNewMember(newMember) {
 // les vérifications sont faites en premier
 Joi.assert(newMember, memberSchema); // lève une exception si la validation échoue
 // d'autres logiques ici
}
```



### Contre exemple de code : aucune validation ne donne de méchants bogues

<details>
<summary><strong>Javascript</strong></summary>

```javascript
// si discount est positif, redirige l'utilisateur pour imprimer ses coupons de réduction
function redirectToPrintDiscount(httpResponse, member, discount) {
    if (discount != 0) {
        httpResponse.redirect(`/discountPrintView/${member.id}`);
    }
}

redirectToPrintDiscount(httpResponse, someMember);
// J'ai oublié de passer le paramètre discount, pourquoi diable l'utilisateur a-t-il été redirigé vers l'écran de remise ?
```
</details>

<details>
<summary><strong>Typescript</strong></summary>

```typescript
// si discount est positif, redirige l'utilisateur pour imprimer ses coupons de réduction
function redirectToPrintDiscount(httpResponse: Response, member: Member, discount: number) {
  if (discount != 0) {
    httpResponse.redirect(`/discountPrintView/${member.id}`);
  }
}

redirectToPrintDiscount(httpResponse, someMember, -12);
// Nous avons passé un paramètre discount négatif, pourquoi diable l'utilisateur a-t-il été redirigé vers l'écran de remise ?
```
</details>

### Citation de blog : « Vous devriez rejeter ces erreurs immédiatement »

 Extrait du blog de Joyent

 > Un cas de dégénération est celui où quelqu'un appelle une fonction asynchrone mais ne passe pas de fonction de rappel. Vous devriez rejeter ces erreurs immédiatement car le programme est cassé et la meilleure chance de le déboguer implique d'obtenir au moins une trace de pile et idéalement un fichier core au niveau de l'erreur. Pour ce faire, nous vous recommandons de valider les types de tous les arguments au début de la fonction.

# Utilisez des outils qui détectent automatiquement les dépendances vulnérables

<br/><br/>

### Un paragraphe d'explication

Les applications modernes de Node ont des dizaines et parfois des centaines de dépendances. Si l'une des dépendances que 
vous utilisez présente une faille de sécurité connue, votre application est également vulnérable.
Les outils suivants vérifient automatiquement les vulnérabilités de sécurité connues dans vos dépendances :

- [npm audit](https://docs.npmjs.com/cli/audit) - audit de npm
- [snyk](https://snyk.io/) - Trouve et corrige continuellement les vulnérabilités de vos dépendances

<br/><br/>

### Ce que disent les autres blogueurs

Extrait du blog de [StrongLoop](https://strongloop.com/strongblog/best-practices-for-express-in-production-part-one-security/) :

> ...L'utilisation pour gérer les dépendances de votre application est puissante et pratique. Mais les paquets que vous utilisez peuvent contenir des vulnérabilités de sécurité critiques qui pourraient également affecter votre application. La sécurité de votre application est uniquement assurée par le « maillon le plus faible » de vos dépendances. Heureusement, il existe deux outils utiles pour garantir la sécurité des paquets tiers que vous utilisez : nsp et requireSafe. Ces deux outils font en grande partie la même chose, donc les utiliser tous les deux peut être excessif, mais « mieux vaut prévenir que guérir » sont des mots à respecter en matière de sécurité...

# Zawiń typowe narzędzia jako pakiety npm

<br/><br/>

### Wyjaśnienie jednym akapitem

Kiedy zaczniesz się rozwijać i będziesz mieć różne komponenty na różnych serwerach, które zużywają podobne narzędzia, powinieneś zacząć zarządzać zależnościami - w jaki sposób możesz zachować 1 kopię kodu narzędzia i pozwolić, aby wiele komponentów konsumenckich używało go i wdrażało? Cóż, istnieje narzędzie do tego, nazywa się npm... Zacznij od zawinięcia pakietów narzędziowych stron trzecich własnym kodem, aby w przyszłości można go łatwo było wymienić i opublikować własny kod jako prywatny pakiet npm. Teraz cała baza kodu może zaimportować ten kod i bezpłatne narzędzie do zarządzania zależnościami. Możliwe jest publikowanie pakietów NPM na własny użytek bez publicznego udostępniania go za pomocą [prywatnych modułów](https://docs.npmjs.com/private-modules/intro), [prywatnego rejestru](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) lub [lokalnych pakietów npm](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)

<br/><br/>

### Udostępnianie własnych wspólnych narzędzi w różnych środowiskach i komponentach

![alt text](../../assets/images/Privatenpm.png "Structuring solution by components")

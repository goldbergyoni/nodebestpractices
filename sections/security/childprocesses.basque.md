# Kontuz ibili bigarren mailako prozesuekin lan egitean

### Azalpena

Bigarren mailako prozesuak oso erabilgarriak izan badaitezke ere, kontuz erabili behar da haiekin. Izan ere, erabiltzaileen sarrera desinfektatu egin behar da, edo, bestela, guztiz baztertu beharra dago. Mugagabeak dira sistemako logika egikaritzen duten desinfektatu gabeko sarreren arriskuak: norbaitek kodea urrunetik egikaritzea suertatu daiteke, sistemaren datu sentikorrak agerian jartzea gerta daiteke, eta datuak galtzerainoko arazoak gerta daitezke ere. Itxura hau izan dezake prestaketen egiaztapen zerrendak:

- eragotzi erabiltzailearen sarrera kasu guztietan, bestela balioztatu eta saneatu
- guraso eta seme-alaben prozesuen pribilegioak mugatu erabiltzaile/talde identitateak erabiliz
- exekutatu zure prozesua ingurune isolatu baten barruan, nahi ez dituzun bigarren mailako ondorioak ekiditeko beste prestaketek huts egiten badute ere

### Kode adibidea: desinfektatu gabeko bigarren mailako prozesuen exekuzioen arriskuak

```javascript
const { exec } = require('child_process');

...

// adibide gisa, bi argudio hartzen dituen scripta hartu, bietako bat garbitu gabeko erabiltzaile sarrera delarik
exec('"/path/to/test file/someScript.sh" --someOption ' + input);

// -> imaginatu zer gertatuko litzatekeen erabiltzaileak '&& rm -rf --no-preserve-root /' bezalako zerbait idatziz gero
// espero gabeko sorpresa hartuko zenuke
```

### Baliabide osagarriak

Node.js bigarren mailako prozesuaren [dokumentazioa](https://nodejs.org/dist/latest-v8.x/docs/api/child_process.html#child_process_child_process_exec_command_options_callback):

> Ez inoiz pasatu erabiltzaile sarrerarik funtzio honetara higienizatu gabe. Shell metakarakereak duen edozein sarrera erabil daiteke komando arbitrarioen exekuzioa abiarazteko.

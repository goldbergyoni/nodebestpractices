[✔]: ../../assets/images/checkbox-small-blue.png

# Common Node.js Dockeren praktika onak

Dockeren praktika arrunten atal honek programazio lengoaia guztietan araupetuta dauden praktika onak biltzen ditu, ez dira Node.jsrentzat bakarrik

## ![✔] Nahiago COPY, ADD komandoa baino

**TL;PL:** COPY seguruagoa da, bakarrik lekuko fitxategiak kopiatzen ditu eta; ADDek, aldiz, bestelako funtzionalitateak onartzen ditu, adibidez, urruneko webguneetatik binarioak deskargatzea

## ![✔] Ekidin oinarrizko sistema eragilea eguneratzea

**TL;PL:** eraikitze prozesuaren lekuko binarioak eguneratzeak (adibidez apt-get update) sendotasunik gabeko irudiak sortzen ditu exekutatzen duen bakoitzean eta pribilegio handiak eskatzen ditu. Horren ordez, erabili sarri eguneratzen diren oinarrizko irudiak

## ![✔] Sailkatu irudiak etiketen bidez

**TL;PL:** irudi bakoitzaren metadatuak emateak Ops-eko profesionalei modu egokian tratatzen lagundu diezaieke. Adibidez, gehitu mantentze arduradunaren izena, eraikitze data eta bestelako informazioa, irudi bat erabili behar duenari lagungarria izango zaiona

## ![✔] Erabili pribilegiorik gabeko edukiontziak

**TL;PL:** pribilegiodun edukiontziek erabiltzaile nagusiak (root) dituen baimen eta gaitasun berdinak ditu makina ostalariaren gainean. Hori ia inoiz ez da beharrezkoa, eta, normalean, Node irudi ofizialetan sortzen den 'node' erabiltzailea erabili behar da

## ![✔] Arakatu eta egiaztatu bukaerako emaitza

**TL;PL:** batzuetan erraza da eraikitze prozesuko albo efektuak ahaztea, hala nola sekretu filtratuak edota beharrezkoak ez diren fitxategiak. [Dive](https://github.com/wagoodman/dive) bezalako tresnak erabiltzeak sortutako irudia arakatzeko horrelako arazoak identifikatzen lagun dezake

## ![✔] Burutu osotasunaren egiaztapena

**TL;PL:** oinarrizko edo bukaerako irudiak argitaratzen ari zaren bitartean, sarea engainatu eta birbideratu egin daiteke irudi maltzurrak deskargatzeko. Dockeren protokolo estandarrak ez du ezer eragozten edukia sinatu eta egiaztatu ezean. [Docker Notary](https://docs.docker.com/notary/getting_started/) da hori lortzea ahalbidetzen duten tresnetako bat da

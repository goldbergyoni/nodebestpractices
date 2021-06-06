# Neurtu eta zaindu memoriaren erabilera

<br/><br/>

### Azalpena

Hona hemen produkzioaren mantentzean eta egonkortasunean asko eragiten duten garapen aholkuen zerrenda:

- Hamabi faktoreen gida: ezagutu [hamabi faktoreen](https://12factor.net/) gida
- Izan aberrigabea: ez gorde daturik tokiko web zerbitzari jakin batean (ikusi buleta bereizia: 'Izan aberrigabea)
- Cachea: erabili asko cachea, baina inoiz ez huts eragin cache ez datorrelako bat
- Probatu memoria: neurtu memoriaren erabilera eta ihesak zure garapen fluxuaren zati gisa; "memwatch" bezalako tresnek asko erraz dezakete zeregin hori
- Izen funtzioak: gutxitu funtzio anonimoen erabilera (hau da, lineako deiak itzultzea), memoria profilatzaile tipiko batek metodoaren izen bakoitzeko memoria erabiliko baitu
- Erabili CI tresnak: erabili CI tresna hutsegiteak antzemateko produkziora bidali aurretik. Adibidez, erabili ESLint erreferentzia erroreak eta zehaztu gabeko aldagaiak antzemateko. Erabili –trace-sync-io API sinkronoak erabiltzen dituen kodea identifikatzeko (bertsio asinkronoaren ordez)
- Erregistratze zentzuzkoa: sartu egunkari adierazpen bakoitzean testuinguruaren informazioa ahal baduzu JSON formatuan, Elastic bezalako erregistroen tresnek propietate horiek bilatu ahal ditzaten (ikusi buleta bereizia 'Areagotu ikusgarritasuna erregistro adimendunak erabiliz'). Gainera, sartu eskaera bakoitza identifikatzen duen eta transakzioa deskribatzen duten lerroak erlazionatzeko aukera ematen duen transakzio IDa (ikusi buleta bereizia: 'Sartu Transakzio IDa')
- Akatsen kudeaketa: erroreen tratamendua Akilesen orpoa da Node.js ekoizpen guneetan. Noderen prozesu asko blokeatzen dira errore txikien ondorioz, beste batzuek bizirik jarraitzen duten bitartean errore egoeran, huts egin beharrean. Oso garrantzitsua da erabakitzea zer estrategia jarraituko duzun erroreak kudeatzeko. Irakurri hemen nire [praktika onak erroreak kudeatzeko](http://goldbergyoni.com/checklist-best-practices-of-node-js-error-handling/)

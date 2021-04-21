# Ezarri memoria mugak Docker eta v8 erabiliz

<br/><br/>

### Azalpena

Memoria mugatzeak prozesuari/edukiontziari adierazten dio zer tamainako memoria erabiltzeko baimena duen gehienez ere. Tamaina horretatik gorako eskaerak edo erabilerak prozesua hil egingo du (OOMKill). Hori egitea jarraibide bikaina da ziurtatzeko herritar batek zuku guztia berak bakarrik edaten ez duela, beste guztiak egarriz akabatzen utzita. Memoria mugek, gainera, exekuzio garaian edukiontzia instantzia egokian ipintzea ahalbidetzen du; izan ere, 500MB erabiltzen dituen edukiontzi bat 300MB dituen instantzia baten ipintzeak arazoak ekar litzake. Bi aukerek muga konfiguratzen laguntzen dute: V8 banderak (--max-old-space-size) eta Docker abiatze denbora, biak guztiz beharrezkoak dira. Ziurtatu beti Dockeren iraupen mugak konfiguratu dituzula, osasun erabaki egokiak hartzeko ikuspegi askoz zabalagoa baitu: muga hori izanda, exekuzioak badaki baliabide gehiago eskalatzen eta sortzen. Noiz huts egin behar duen erabaki dezake: kontainerrean, memoria eskaeran, eztanda labur bat gertatzen bada eta ostatatutako instantzia horri eusteko gai bada, Dockerek bizirik egoten utziko dio edukiontziari. Azkenik, Dockeri esker, Ops adituak hainbat memoria konfigurazio ezar ditzake, ekoizpenean kontutan hartuak izan daitezkeenak, adibidez, memoriaren trukea (memory swap). Hori bera bakarrik ez da nahikoa izango, v8ren --max-old-space-size gabe, JavaScript abiatze inguruneak ez du zabor biltzea bultzatuko memoriaren mugatik gertu egotean, eta krask egingo du soilik ostatatutako ingurunearen % 50-60 erabiltzean. Ondorioz, ezarri v8n muga Dockeren memoria mugaren %75-100 izan dadin.

<br/><br/>

### Kode adibidea: memoriaren muga Dockerrekin

<details>
<summary><strong>Bash</strong></summary>

```bash
docker run --memory 512m nire-node-aplikazioa
```

</details>

<br/><br/>

### Kode adibidea: memoriaren muga Kubernetes eta V8rekin

<details>
<summary><strong>Kubernetesen inplementaziorako yamla</strong></summary>

```yml
apiVersion: v1
kind: Pod
metadata:
  name: nire-node-aplikazioa
spec:
  containers:
  - name: nire-node-aplikazioa
    image: nire-node-aplikazioa
    resources:
      requests:
        memory: "400Mi"
      limits:
        memory: "500Mi"
    command: ["node index.js --max-old-space-size=350"]
```

</details>

<br/><br/>

### Kubernetesen dokumentazioa: "Memoriaren muga zehaztu ezean"

[K8Sen dokumentazioa](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)

> Edukiontziak ez du erabiltzen duen memoriaren gehieneko muga. Egikaritzen ari den Nodean erabilgarri dagoen memoria guztia erabil dezake edukiontziak , eta horrek OOM Killer errorea dei dezake. Gainera, OOM Kill bat gertatuz gero, mugarik gabeko edukiontzi batek aukera gehiago izango du akabatua izateko.

<br/><br/>

### Dockeren dokumentazioa: "Jaurti OOME errore bat eta hasi prozesuak hiltzen"

[Dockeren dokumentu ofiziala](https://docs.docker.com/config/containers/resource_constraints/)

> Garrantzitsua da exekutatzen ari den edukiontzi bati ez uztea ostatatutako makinaren memoria gehiegi erabiltzen. Linux ostalarietan, kernelak sistemako funtzio garrantzitsuak egiteko haina memoria ez dagoela atzematen badu, OOME bat jaurtitzen du, Out Of Memory Exception (Memoria Faltaren Salbuespena), eta prozesuak akabatzen hasten da memoria eskuratzeko.

<br/><br/>

### Node.jsren dokumentazioa: "V8k denbora gehiago pasako du zabor bilketan"

[Node.jsren dokumentu ofiziala](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes)

> Ezarri V8ren atal zaharraren gehienezko memoria tamaina. Memoriaren kontsumoa mugara gerturatzen denean, V8k denbora gehiago pasako du zabor bilketan, erabili gabeko memoria askatzen baino. 2GBko memoria duen makina batean, komeni da 1536Mgb (1.5GB) ezartzea, beste erabiltzaileentzat memoria pixkat bat uzteko eta memoria trukea ekiditeko.

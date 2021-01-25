# Ezarri memoria mugak Docker eta v8 erabiliz

<br/><br/>

### Azalpen paragrafoa

Memoria mugak prozesuari/kontainerrari baimendutako gehiengo memoria erabilera adierazten dio, hau baino handiagoa den eskaera edota erabilerak prozesua hilko du (OOMKill). Hau erabiltzea jarraibide bikaina da, herritar batek zuku guztia berak bakarrik ez edatea, beste guztiak egarriz akabatzen utzita, ziurtatzeko. Memoria mugek gainera exekuzio garaian kontainer bat intantzia egokian ipintzea ahalbidetzen du, 500MB erabiltzen dituen kontainer bat 300MB dituen instantzia baten ipintzeak arazoak ekar litzake. Bi aukerek muga hau konfiguratzen laguntzen dute: V8 banderak (--max-old-space-size) eta Docker abiatze-denbora, biak guztiz beharrezkoak dira. Docker abiatze-denborako mugak ziurtatu, osasun erabaki zuzenak hartzeko perspektiba zabalgoa du eta: muga hau ezarrita, abiatze inguruneak badaki nola eskalatu eta baliabide gehiago sortu. Noiz huts egitearen inguruko erabakiak har ditzake, kontainerrean, memoria eskaeran, eztanda labur bat gertatu bada eta ostatatutako instantzia hau sostengatzeko gai bada, Dockerrek kontainerra bizirik mantenduko du. Azkenik, Dockerri esker, Ops adituak, kontutan hartuak izan daitezkeen ekoizpenerako hainbat memoria konfigurazio ezar ditzake, adibidez memoriaren trukatea (memory swap). Hau bera bakarrik ez da nahkoa izango, v8ren --max-old-space-size gabe, JavaScript abiatze inguruneak ez du zabor biltzea bultzatuko memoriaren mugatik gertu egotean, eta krask egingo du soilik ostatatutako ingurunearen % 50-60 erabiltzean. Ondorioz, ezarri v8n muga Dockerren memoria mugaren %75-100 izan dadin.

<br/><br/>

### Kodearen adibidea: Memoriaren muga Dockerrekin

<details>
<summary><strong>Bash</strong></summary>

```
docker run --memory 512m nire-node-aplikazioa
```

</details>

<br/><br/>

### Kodearen adibidea: Memoriaren muga Kubernetes eta V8rekin

<details>
<summary><strong>Kubernetesen inplementaziorako yamla</strong></summary>

```
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

[K8Sen dokumentaziotik](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/)

> Kontainerrak ez du erabiltzen duen memoriaren gehiengo mugarik. Kontainerrak exekutatuta dagoen Nodean erabilgarri dagoen memoria guztia erabil dezake, eta honek OOM Killer errorea dei dezake. Gainera, OOM Kill bat gertatuz gero, muga gabeko kontainer batek akabatua izateko aukera gehiago izango ditu.

<br/><br/>

### Dockeren dokumentazioa: "OOME errore bat jaurtitzen du eta prozesuak hiltzen hasten da"

[Dockeren dokumentu ofizialetatik](https://docs.docker.com/config/containers/resource_constraints/)

> Garrantzitsua da ostatatutako makinaren memoria gehiegi erabiliko duen kontainer bat exekutatzen ez uzten. Linux ostalarietan, kernelak sistemako funtzio garrantzitsuak egiteko haina memoria ez dagoela detektatzen badu, OOME bat jaurtitzen du, Out Of Memory Exception (Memoria Faltaren Exzepzioa), eta prozesuak akabatzen hasten da memoria eskuratzeko.

<br/><br/>

### Node.jsen dokumentazioa: "V8k denbora gehiago pasako du zabor bilketan"

[Node.jsen dokumentu ofizialetatik](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes)

> V8ren atal zaharraren gehienezko memoria tamaina zehazten du. Memoria kontsumoa mugara gerturatzen denean, V8k denbora gehiago pasako du zabor bilketan, erabili gabeko memoria libre uzten baino. 2GBko memoria duen makina batean, kontutan izan 1536 ezarpena (1.5GB) erabiltzen, beste erabiltzaileentzat memoria pixkat uzteko eta memoria trukaketa ekiditeko.

# Uruchom Node.js jako Non-Root User

### Wyjaśnienie jednym akapitem

Zgodnie z „zasadą najmniejszych uprawnień” użytkownik / proces musi mieć dostęp tylko do niezbędnych informacji i zasobów. Przydzielenie rootowi dostępu, atakującemu otwiera zupełnie nowy świat złośliwych pomysłów, takich jak kierowanie ruchu do innych serwerów. W praktyce większość aplikacji Node.js nie potrzebuje dostępu do konta root i nie działa z takimi uprawnieniami. Istnieją jednak dwa typowe scenariusze, które mogą wypychać do używania roota:

- aby uzyskać dostęp do portu uprawnień (np. portu 80) Node.js musi działać jako root
- kontenery Docker domyślnie działają jako root (!). Zaleca się, aby aplikacje internetowe Node.js nasłuchiwały na nieuprzywilejowanych portach i polegały na odwrotnym proxy, takim jak nginx, do przekierowywania ruchu przychodzącego z portu 80 do aplikacji Node.js. Podczas budowania obrazu Docker wysoce zabezpieczone aplikacje powinny uruchamiać kontener z alternatywnym użytkownikiem innym niż root. Większość klastrów Docker (np. Swarm, Kubernetes) umożliwia deklaratywne ustawienie kontekstu bezpieczeństwa

### Przykład kodu - Budowanie obrazu Dockera jako non-root

```dockerfile
FROM node:latest

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
USER node
CMD ["node", "server.js"]
```

<br/><br/>

### Cytat z Blogu: "By default, Docker runs container as root"

Z Repository docker-node od [eyalzek](https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#non-root-user):
> By default, Docker runs container as root which inside of the container can pose as a security issue. You would want to run the container as an unprivileged user wherever possible. The node images provide the node user for such purpose. The Docker Image can then be run with the node user in the following way: "-u 'node'"

<br/><br/>

### Cytat z Blogu: "The attacker will have total control over your machine"

Z bloga Don't run Node.js as root od [Olivier Lalonde](http://syskall.com/dont-run-node-dot-js-as-root/):
> Indeed, if you are running your server as root and it gets hacked through a vulnerability in your code, the attacker will have total control over your machine. This means the attacker could potentially wipe out your whole disk or worse. On the other hand, if your server runs with the permissions of a regular user, the attacker will be limited by those permissions.

<br/><br/>

### Cytat z Blogu: "If you need to run your application on port 80 or 443, you can do port forwarding"

Z bloga Developing Secure Node.js Applications — A Broad Guide by [Deepal Jayasekara](https://jsblog.insiderattack.net/developing-secure-node-js-applications-a-broad-guide-286afdec69ce):
> Never run Node.js as root. Running node.js as root will make it worse if an attacker somehow gains control over your application. In this scenario, attacker would also gain root privileges which could result in a catastrophe. If you need to run your application on port 80 or 443, you can do port forwarding using iptables or you can place a front-end proxy such as nginx or apache which routes request from port 80 or 443 to your application

[✔]: assets/images/checkbox-small-blue.png

# Node.js beste Praktiken

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Node.js beste Praktiken">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%201%20Best%20Practice-blue.svg" alt="1 item"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20Apr%2013%202019-green.svg" alt="letztes Update: April 20, 2019"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2010.15.3%20LTS-brightgreen.svg" alt="Aktuell für Node 10.15.3 LTS">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Folge uns auf Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

In anderen Sprachen lesen: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR**, ![RU](/assets/flags/RU.png)**RU**, ![TR](/assets/flags/TR.png)**TR** und ![DE](/assets/flags/DE.png)**DE** sind im Gange!)](#translations)

<br/>

###### Erstellt und betreut durch unsere [Lenkungsausschuss](#steering-committee) und [Kollaborateuren](#collaborators)

# Aktuell beste Praktiken und Neuigkeiten

- **Neue beste Praktik:** 6.25: [Vermeide die Veröffentlichung von Secrets in der npm-Registry](/sections/security/avoid_publishing_secrets.md)

- **Neue Übersetzung:** ![BR](/assets/flags/BR.png) [Brasilianisches Portugiesisch](/README.brazilian-portuguese.md) ist jetzt verfügbar, dank [Marcelo Melo](https://github.com/marcelosdm)! ❤️

- **Neue beste Praktik:** 4.2: 3 Teile die jedem Testnamen gehören - [_From the section "Testing and overall quality"_](https://github.com/i0natan/nodebestpractices#4-testing-and-overall-quality-practices)

- **Neue beste Praktik:** 7.1: Prefer native JS methods over user-land utils like Lodash - [_From the section "Performance"_](https://github.com/i0natan/nodebestpractices#7-performance-best-practices)

- **Nachrichten Update:** [Wir haben den Performance-Bereich gestartet, willst Du mitmachen?](https://github.com/i0natan/nodebestpractices/issues/302)

<br/><br/>

# Willkommen! 3 Sachen, die Du erstmal wissen solltest:

**1. Du liest tatsächlich Dutzende der besten Node.js-Artikel -** Dieses Repository ist eine Zusammenfassung und Kuration der bestbewerteten Inhalte der besten Praktiken von Node.js sowie Inhalte, die hier von Kollaborateuren geschrieben sind

**2. Sie ist schon die größte Sammlung und sie wächst jede Woche -** Derzeit werden mehr als 80 Beste Praktiken, Style-Guides und Architekturtipps präsentiert. Jeden Tag werden neue Ausgaben und Pull-Requests erstellt, um dieses Live-Buch auf dem neuesten Stand zu halten. Wir würden uns freuen, wenn Du dazu beitragen würdest, ob Du hier Fehler korrigierst, bei Übersetzungen hilfst oder brillante neue Ideen vorschlägst. Siehe unsere [Schreibrichtlinien hier](/.operations/writing-guidelines.md)

**3. Die meisten beste Praktiken enthalten zusätzliche Informationen -** Aufzählungszeichen enthalten meistens einen **🔗mehr erfahren** Link, der eine Praktik um Codebeispiele, Zitate aus ausgewählten Blogs und weitere Informationen erweitert

<br/><br/>

## Inhaltsverzeichnis

1.  [Projektstruktur-Praktiken (5)](#1-projektstruktur-praktiken)
2.  [Fehlerbehandlung-Praktiken (11) ](#2-fehlerbehandlung-praktiken)
3.  [Codestil-Praktiken (12) ](#3-codestil-praktiken)
4.  [Tests und allgemeine Qualitätspraktiken (10) ](#4-tests-und-allgemeine-qualitätspraktiken)
5.  [Auf dem Weg zur Produktion-Praktiken (18) ](#5-auf-dem-weg-zur-produktion-praktiken)
6.  [Sicherheitspraktiken (25)](#6-sicherheitspraktiken)
7.  [Leistungspraktiken (1) (Im Gange️ ✍️)](#7-leistungspraktiken)

<br/><br/>

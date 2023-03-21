[✔]: assets/images/checkbox-small-blue.png

# Praktik Terbaik Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Praktik Terbaik Node.js"/>
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 item"/> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20December%2012%202020-green.svg" alt="Pembaruan terakhir: November, 2020"/> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Diperbarui untuk Node 14.0.0"/>
</div>

<br/>

[![nodepractices](./assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Ikuti kami di Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Baca dalam bahasa yang berbeda: [![CN](./assets/flags/CN.png)**CN**](./README.chinese.md), [![BR](./assets/flags/BR.png)**BR**](./README.brazilian-portuguese.md), [![RU](./assets/flags/RU.png)**RU**](./README.russian.md), [![PL](./assets/flags/PL.png)**PL**](./README.polish.md), [![EU](./assets/flags/EU.png)**EU**](./README.basque.md) [(![ES](./assets/flags/ES.png)**ES**, ![FR](./assets/flags/FR.png)**FR**, ![HE](./assets/flags/HE.png)**HE**, ![KR](./assets/flags/KR.png)**KR** dan ![TR](./assets/flags/TR.png)**TR** dalam proses!)](#translations)

<br/>

###### Dibuat dan dijaga oleh [Komite Pengarah](#komite-pengarah) dan [kolaborator](#Kolaborator)

# Praktik Terbaik Terbaru dan Berita

- **✅ Praktik terbaik baru:** Poin 2.12 oleh [Alexsey](https://github.com/Alexsey) menunjukkan bagaimana melakukan return tanpa await ke fungsi asinkron dapat mengarah ke _stacktraces_ parsial. Ini dapat menjadi masalah besar saat melakukan pemecahan masalah exception di produksi yang kekurangan beberapa bingkai eksekusi

- **✅ Praktik terbaik baru:** Poin 6.8 oleh Josh Hemphill menyarankan "Protect Users' Passwords/Secrets using BCrypt or Script". Ini mengandung penjelasan secara mendalam tentang kapan dan kenapa setiap opsi sesuai untuk proyek tertentu. Jangan lewatkan panduan singkat ini dengan gambaran singkat tentang berbagai opsi hashing

- **:whale: Praktik terbaik Node.js + Docker**: Kami baru saja merilis seksi Docker dengan Node.js yang mengandung 15 poin tentang teknik pengkodean yang lebih baik dengan Docker

<br/><br/>

# Selamat Datang! 3 Hal Yang Harus Anda Ketahui

**1. Anda sedang membaca berbagai artikel Node.js terbaik -** repositori ini adalah ringkasan dan kurasi dari konten peringkat teratas dalam praktik terbaik Node.js, serta konten yang ditulis oleh kolaborator

**2. Ini adalah kompilasi terbesar, dan berkembang tiap minggu -** saat ini, lebih dari 80 praktik terbaik, panduan gaya, dan tips arsitektural tersajikan. Issue baru dan pull request dibuat setiap hari agar kontennya tetap diperbarui. Kami senang melihat Anda berkontribusi di sini, maupun itu memperbaiki kesalahan kode, membantu dalam terjemahan, atau menyarankan ide cemerlang yang baru. Lihat [pedoman menulis](./.operations/writing-guidelines.md) kami

**3. Praktik terbaik mempunyai informasi tambahan -** kebanyakan poin mempunyai tautan **🔗Baca selengkapnya** yang memperluas praktiknya dengan contoh kode, kutipan dari blog terpilih, dan informasi lebih lanjut

<br/><br/>

## Daftar Isi

1. [Praktik Struktur Proyek (5)](#1-praktik-struktur-proyek)
2. [Praktik Penanganan Kesalahan (11) ](#2-praktik-penanganan-kesalahan)
3. [Praktik Gaya Kode (12) ](#3-praktik-gaya-kode)
4. [Praktik Pengujian dan Kualitas Secara Keseluruhan (13) ](#4-praktik-pengujian-dan-kualitas-secara-keseluruhan)
5. [Praktik Dalam Produksi(19) ](#5-praktik-dalam-produksi)
6. [Praktik Keamanan (25)](#6-praktik-terbaik-keamanan)
7. [Praktik Performa (2) (Pekerjaan Dalam Proses ✍️)](#7-draf-praktik-terbaik-performa)
8. [Praktik Docker (15)](#8-praktik-terbaik-docker)

<br/><br/>

# `1. Praktik Struktur Proyek`

## ![✔] 1.1 Susun solusi Anda berdasarkan komponen

**TL;DR:** Masalah terburuk pada aplikasi besar adalah mengurus basis kode yang sangat besar dengan ratusan dependensi - monolit seperti itu memperlambat pengembang saat mereka mencoba untuk menambahkan fitur baru. Sebaiknya, partisi kode Anda menjadi beberapa komponen, setiap komponen mendapatkan foldernya sendiri atau basis kode tersendiri, dan pastikan setiap unit untuk tetap kecil dan sederhana. Kunjungi 'Baca selengkapnya' di bawah ini untuk melihat contoh struktur proyek yang benar

**Jika tidak:** Saat pengembang yang menambahkan fitur baru kesusahan untuk melihat dampak dari perubahan mereka dan takut akan merusak komponen lain yang bergantung - _deployment_ menjadi lebih lambat dan berisiko. Kode juga dianggap lebih sulit untuk dikembangkan ketika semua unit bisnis tidak dipisahkan

🔗 [**Baca selengkapnya: structure by components**](./sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Lapisi komponen Anda, pastikan lapisan web tetap dalam batasannya

**TL;DR:** Setiap komponen harus mengandung 'lapisan' - objek khusus untuk web, logika, dan kode akses data. Hal ini tidak hanya menggambarkan _separation of concerns_ dengan jelas namun juga memudahkan _mocking_ dan pengujian sistem. Meskipun ini adalah pola yang sangan umum, pengembang API cenderung mencampur lapisan dengan meneruskan objek lapisan web (misalnya Express req, res) ke logika bisnis dan lapisan data - ini membuat aplikasi Anda bergantung dan hanya bisa diakses oleh framework web tertentu

**Jika tidak:** Aplikasi yang menggabungkan objek web dengan lapisan lain tidak dapat diakses oleh kode pengujian, pekerjaan CRON, triggers dari message queues, dll.

🔗 [**Baca selengkapnya: layer your app**](./sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Bungkus utilitas umum sebagai paket npm

**TL;DR:** Pada aplikasi besar yang memiliki basis kode yang besar, utilitas _cross-cutting-concern_ seperti logger, enkripsi dan yang serupa, harus dibungkus oleh kode Anda dan terekspos sebagai paket npm tersendiri. Ini memungkinkan untuk membagikan utilitas tersebut di antara beberapa basis kode dan proyek

**Jika tidak:** Anda harus membuat cara _deployment_ dan _dependency_ Anda sendiri

🔗 [**Baca selengkapnya: Structure by feature**](./sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Pisahkan 'app' dan 'server' Express

**TL;DR:** Hindari kebiasaan buruk dalam mendefinisikan seluruh aplikasi [Express](https://expressjs.com/) dalam satu file besar - pisahkan definisi 'Express' Anda menjadi setidaknya dua file: deklarasi untuk API (app.js) dan untuk jaringan (WWW). Untuk struktur yang lebih baik lagi, letak deklarasi API Anda di dalam komponen

**Jika tidak:** API Anda hanya dapat diakses untuk pengujian melalui panggilan HTTP (lebih lambat and lebih susah untuk membuat laporan cakupan pengujian). Mengurus ratusan baris kode dalam satu file mungkin bukanlah hal yang menyenangkan

🔗 [**Baca selengkapnya: separate Express 'app' and 'server'**](./sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Gunakan konfigurasi yang sadar atas lingkungan, aman dan hierarkis

**TL;DR:** Pengaturan konfigurasi yang sempurna harus memastikan (a) kunci dapat dibaca dari file DAN dari variabel lingkungan (b) rahasia disimpan di luar kode (c) konfigurasi bersifat hierarkis agar mudah ditemukan. Ada beberapa paket yang dapat mempermudah pengaturan tersebut seperti [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), dan [convict](https://www.npmjs.com/package/convict).

**Jika tidak:** Gagal untuk memenuhi salah satu persyaratan konfigurasi hanya akan menghambat tim pengembang atau DevOps. Mungkin keduanya

🔗 [**Baca selengkapnya: configuration best practices**](./sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `2. Praktik Penanganan Kesalahan`

## ![✔] 2.1 Gunakan Async-Await atau promise untuk penanganan kesalahan asinkron

**TL;DR:** Menangani kesalahan asinkron dalam panggilan balik mungkin adalah cara terburuk (a.k.a the pyramid of doom). Hal terbaik yang dapat Anda berikan ke kode Anda adalah dengan menggunakan pustaka promise dengan reputasi yang baik atau gunakan async-await yang membuat sintaks kode menjadi lebih ringkas dan familier seperti try-catch

**Jika tidak:** Gaya panggilan balik Node.js, function(err, response), adalah cara yang menjanjikan untuk kode yang tidak dapat dipelihara karena campuran dari penanganan kesalahan dengan kode kasual, bersarang yang berlebihan, dan pola pengkodean yang canggung

🔗 [**Baca selengkapnya: avoiding callbacks**](./sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Gunakan hanya objek Error bawaan

**TL;DR:** Banyak pengembang melempar error sebagai string atau tipe khusus – ini mempersulit logika penanganan kesalahan dan interoperabilitas antar modul. Maupun Anda menolak sebuah _promise_, melontarkan sebuah pengecualian atau mengeluarkan error – dengan hanya menggunakan objek Error bawaan (atau objek yang memperluas objek Error bawaan) dapat meningkatkan keseragaman dan mencegah hilangnya informasi

**Jika tidak:** Saat menjalankan beberapa komponen, karena tidak yakin jenis kesalahan yang akan di lempar – ini membuat penanganan kesalahan yang benar jauh lebih sulit. Lebih buruk lagi, menggunakan tipe khusus untuk mendeskripsikan kesalahan dapat menyebabkan hilangnya informasi kesalahan kritis seperti _stack trace_!

🔗 [**Baca selengkapnya: using the built-in error object**](./sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Membedakan kesalahan operasional dan kesalahan pengembang

**TL;DR:** Kesalahan operasional (contohnya API menerima masukan yang tidak valid) merupakan kasus kesalahan yang diketahui di mana dampak dari kesalahannya dapat dipahami sepenuhnya dan dapat ditangani dengan cermat. Di sisi lain, kesalahan pengembang (contohnya mencoba membaca variabel yang tidak ditentukan) merupakan kegagalan kode yang tidak diketahui yang menentukan untuk memulai ulang aplikasi dengan baik

**Jika tidak:** Anda selalu dapat memulai ulang aplikasi Anda ketika kesalahan muncul, namun kenapa mengecewakan ~5000 pengguna hanya karena kesalahan operasional yang kecil dan dapat diprediksi? hal sebaliknya juga tidak ideal – membiarkan aplikasi tetap berjalan ketika terdapat kesalahan yang tidak diketahui (kesalahan oleh pengembang) dapat menyebabkan perilaku yang tidak terduga. Membedakan kedua kesalahan tersebut memungkinkan untuk melakukan tindakan yang benar dan menerapkan cara penyelesaian masalah yang sesuai dengan konteks yang diberikan

🔗 [**Baca selengkapnya: operational vs programmer error**](./sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Tangani kesalahan secara terpusat, bukan dalam middleware

**TL;DR:** Logika penanganan kesalahan seperti pengiriman pesan ke admin dan pencatatan harus dikemas dalam objek khusus dan terpusat yang dipanggil oleh semua endpoint (contohnya middleware Express, pekerjaan cron, pengujian unit) ketika ada kesalahan

**Jika tidak:** Tidak menangani kesalahan dalam satu tempat akan menyebabkan duplikasi kode dan mungkin kesalahan yang tidak ditangani dengan tepat

🔗 [**Baca selengkapnya: handling errors in a centralized place**](./sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Mendokumentasikan kesalahan API menggunakan Swagger atau GraphQL

**TL;DR:** Beri tahu pemanggil API Anda kesalahan apa yang mungkin dapat diterima sehingga mereka dapat menanganinya dengan baik tanpa merusak aplikasinya. Untuk API RESTful, hal ini biasanya dilakukan dengan framework dokumentasi seperti Swagger. Jika Anda menggunakan GraphQL, Anda juga dapat memanfaatkan skema dan komentar.

**Jika tidak:** Klien API mungkin memutuskan untuk memberhentikan aplikasi dan memulai ulang hanya karena menerima kesalahan yang tidak dapat dipahami. Catatan: pemanggil API mungkin adalah Anda (sangat umum dalam lingkungan _microservice_)

🔗 [**Baca selengkapnya: documenting API errors in Swagger or GraphQL**](./sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Hentikan proses dengan benar ketika orang asing datang ke kota

**TL;DR:** Ketika terjadi kesalahan yang tidak diketahui (kesalahan pengembang, lihat praktik terbaik 2.3) - ada ketidakpastian tentang kesehatan aplikasi. Praktik umum menyarankan untuk memulai kembali proses dengan hati-hati menggunakan alat manajemen proses seperti [Forever](https://www.npmjs.com/package/forever) atau [PM2](http://pm2.keymetrics.io/)

**Jika tidak:** Ketika pengecualian yang tidak dikenal terjadi, beberapa objek mungkin dalam keadaan rusak (contohnya event emitter yang digunakan secara global dan tidak dapat mengaktifkan event lagi karena kesalahan internal) dan semua panggilan yang akan datang mungkin akan gagal atau tidak berperilaku dengan normal

🔗 [**Baca selengkapnya: shutting the process**](./sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Gunakan alat pencatat yang baik untuk meningkatkan visibilitas kesehatan

**TL;DR:** Satu set alat pencatat yang baik seperti [Pino](https://github.com/pinojs/pino) atau [Log4js](https://www.npmjs.com/package/log4js), akan mempercepat penemuan dan pemahaman suatu kesalahan. Jadi tinggalkan console.log

**Jika tidak:** Melihat beberapa console.log atau secara manual melalui file teks yang berantakan tanpa alat kueri atau penampil catatan yang baik dapat membuat Anda sibuk di tempat kerja hingga larut

🔗 [**Baca selengkapnya: using a mature logger**](./sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Uji aliran kesalahan menggunakan framework pengujian favorit Anda

**TL;DR:** Maupun itu QA otomatis profesional ataupun pengujian manual oleh pengembang – Pastikan bahwa kode Anda tidak hanya memenuhi skenario positif namun juga menangani dan mengembalikan jenis kesalahan yang tepat. Framework testing seperti Mocha & Chai dapat menangani ini dengan mudah (lihat contoh kode dalam "Gist popup")

**Jika tidak:** Tanpa testing, maupun secara otomatis ataupun manual, Anda tidak dapat mengandalkan kode Anda untuk mengembalikan jenis kesalahan yang tepat. Tanpa jenis kesalahan yang berarti – tidak ada penanganan kesalahan

🔗 [**Baca selengkapnya: testing error flows**](./sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Temukan kesalahan dan waktu henti menggunakan produk APM

**TL;DR:** Produk pemantauan dan kinerja (a.k.a APM) secara proaktif mengukur basis kode atau API sehingga mereka dapat secara otomatis menyorot kesalahan, kerusakan, dan bagian lambat yang Anda lewatkan

**Jika tidak:** Anda mungkin menghabiskan banyak usaha untuk mengukur kinerja dan waktu henti API, mungkin Anda tidak akan menyadari bagian kode mana yang paling lambat dalam skenario dunia nyata dan bagaimana hal ini dapat memengaruhi pengalaman pengguna

🔗 [**Baca selengkapnya: using APM products**](./sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Tangkap penolakan _promise_ yang tidak tertangani

**TL;DR:** Semua pengecualian yang dilemparkan ke dalam _promise_ akan ditelan dan dibuang kecuali pengembang tidak lupa untuk menanganinya secara eksplisit. Meskipun kode Anda berlangganan ke `process.uncaughtException`! Atasi ini dengan mendaftarkan ke event `process.unhandledRejection`

**Jika tidak:** Kesalahan dari kode Anda akan ditelan dan hilang tanpa jejak. Tidak ada yang perlu dikhawatirkan

🔗 [**Baca selengkapnya: catching unhandled promise rejection**](./sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Gagal lebih dini, validasi argumen menggunakan pustaka khusus

**TL;DR:** Tegaskan masukan API untuk menghindari bug yang lebih sulit dilacak nantinya. Kode untuk validasi biasanya berantakan kecuali Anda menggunakan pustaka pembantu yang keren seperti [ajv](https://www.npmjs.com/package/ajv) dan [Joi](https://www.npmjs.com/package/joi)

**Jika tidak:** Anggap seperti ini – jika fungsi Anda mengharapkan argumen numerik “Diskon” yang lupa diletak oleh pemanggil, kemudian, kode Anda memeriksa jika Diskon!=0 (jumlah diskon yang diizinkan lebih besar dari nol), maka itu akan memungkinkan pengguna untuk menikmati diskon. OMG, bug yang sangat buruk. Bisakah Anda melihatnya?

🔗 [**Baca selengkapnya: failing fast**](./sections/errorhandling/failfast.md)

<br/><br/>

## ![✔] 2.12 Selalu _await promise_ sebelum mengembalikan nilai untuk menghindari _stacktrace_ yang tidak lengkap

**TL;DR:** Selalu lakukan `return await` ketika mengembalikan sebuah _promise_ untuk memanfaatkan _stacktrace_ kesalahan yang lengkap. Jika sebuah fungsi mengembalikan _promise_, fungsi tersebut harus dideklarasikan sebagai fungsi `async` dan `await` fungsi tersebut secara eksplisit sebelum mengembalikannya

**Jika tidak:** Fungsi yang mengembalikan _promise_ tanpa `await` tidak akan muncul di _stacktrace_.
Kerangka yang hilang seperti itu mungkin akan mempersulit pemahaman tentang aliran yang mengarah ke kesalahan,
terutama jika penyebab perilaku yang tidak normal ada di dalam fungsi yang hilang itu

🔗 [**Baca selengkapnya: returning promises**](./sections/errorhandling/returningpromises.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `3. Praktik Gaya Kode`

## ![✔] 3.1 Gunakan ESLint

**TL;DR:** [ESLint](https://eslint.org) adalah standar de-facto untuk memeriksa kemungkinan kesalahan kode dan memperbaiki gaya kode, bukan hanya untuk mengidentifikasi masalah spasi tetapi juga untuk mendeteksi kode anti-pola yang serius seperti pengembang melemparkan kesalahan tanpa klasifikasi. Meskipun ESLint dapat memperbaiki gaya kode secara otomatis, alat lain seperti [prettier](https://www.npmjs.com/package/prettier) dan [beautify](https://www.npmjs.com/package/js-beautify) lebih baik dalam memformat perbaikan kodenya dan dapat bekerja sama dengan ESLint

**Jika tidak:** Pengembang akan fokus pada masalah spasi dan lebar garis dan waktu mungkin akan terbuang hanya untuk memikirkan gaya kode pada proyek

🔗 [**Baca selengkapnya: Using ESLint and Prettier**](./sections/codestylepractices/eslint_prettier.md)

<br/><br/>

## ![✔] 3.2 Plugin khusus Node.js

**TL;DR:** Selain aturan standar ESLint yang mencakup vanilla JavaScript, tambahkan plugin khusus Node.js seperti [eslint-plugin-node](https://www.npmjs.com/package/eslint-plugin-node), [eslint-plugin-mocha](https://www.npmjs.com/package/eslint-plugin-mocha) dan [eslint-plugin-node-security](https://www.npmjs.com/package/eslint-plugin-security)

**Jika tidak:** Banyak pola kode Node.js yang salah dapat lolos dari radar. Contohnya, pengembang mungkin melakukan require(variableAsPath) pada file dengan variabel sebagai path yang memungkinkan penyerang untuk mengeksekusi skrip JS apa pun. Linters Node.js dapat mendeteksi pola tersebut dan memberikan peringatan lebih awal

<br/><br/>

## ![✔] 3.3 Mulai kurung kurawal pada blok kode pada baris yang sama

**TL;DR:** Tanda kurung kurawal pembuka blok kode harus di baris yang sama dengan statement pembuka

### Contoh Kode

```javascript
// Lakukan
function someFunction() {
  // blok kode
}

// Hindari
function someFunction() {
  // blok kode
}
```

**Jika tidak:** Tidak mengikuti praktik terbaik ini dapat menyebabkan hasil yang tidak terduga, seperti yang terlihat pada thread StackOverflow di bawah ini:

🔗 [**Baca selengkapnya:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Pisahkan statement Anda dengan benar

Tidak peduli jika Anda menggunakan titik koma atau tidak untuk memisahkan statement Anda, mengetahui akibat umum dari pemutusan baris yang tidak tepat atau penyisipan titik koma otomatis, akan membantu Anda mengurangi kesalahan sintaks biasa.

**TL;DR:** Gunakan ESLint untuk mendapatkan perhatian tentang masalah pemisahan. [Prettier](https://prettier.io/) atau [Standardjs](https://standardjs.com/) dapat menyelesaikan masalah ini secara otomatis.

**Jika tidak:** Seperti yang terlihat di bagian sebelumnya, penerjemah JavaScript secara otomatis menambah titik koma pada akhir statement jika tidak ada, atau anggap sebuah statement tidak diakhiri di tempat yang seharusnya, yang dapat mengarah pada hasil yang tidak diinginkan. Anda dapat menggunakan penetapan dan hindari penggunaan ekspresi fungsi yang langsung dipanggil untuk mencegah sebagian besar masalah yang tidak terduga.

### Contoh kode

```javascript
// Lakukan
function doThing() {
    // ...
}

doThing()

// Lakukan

const items = [1, 2, 3]
items.forEach(console.log)

// Hindari — melempar pengecualian
const m = new Map()
const a = [1,2,3]
[...m.values()].forEach(console.log)
> [...m.values()].forEach(console.log)
>  ^^^
> SyntaxError: Unexpected token ...

// Hindari — melempar pengecualian
const count = 2 // mencoba menjalankan 2(), tapi 2 bukanlah sebuah fungsi
(function doSomething() {
  // lakukan sesuatu
}())
// letakkan titik koma sebelum fungsi yang langsung dipanggil, setelah pendefinisian const, simpan nilai kembali dari fungsi anonim ke sebuah variabel atau hindari IIFE (ekspresi fungsi yang langsung dipanggil) sepenuhnya
```

🔗 [**Baca selengkapnya:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Baca selengkapnya:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Namakan fungsi Anda

**TL;DR:** Namakan semua fungsi, termasuk closure dan panggilan balik. Hindari fungsi anonim. Ini sangat berguna saat mengukur sebuah aplikasi node. Menamakan semua fungsi memungkinkan Anda untuk memahami dengan mudah apa yang Anda lihat saat memeriksa snapshot memori

**Jika tidak:** Men-debug masalah produksi menggunakan core dump (snapshot memori) dapat menjadi tantangan karena Anda melihat konsumsi memori yang signifikan dari fungsi anonim

<br/><br/>

## ![✔] 3.6 Gunakan konvensi penamaan untuk variabel, konstanta, fungsi dan kelas

**TL;DR:** Gunakan **_lowerCamelCase_** saat memberi nama konstanta, variabel dan fungsi dan **_UpperCamelCase_** (huruf besar pada huruf pertama) saat memberi nama kelas. Ini akan membantu Anda dengan mudah untuk membedakan variabel/fungsi biasa, dan kelas yang membutuhkan instansiasi. Gunakan nama yang deskriptif, tetapi usahakan untuk tetap pendek

**Jiak tidak:** Javascript adalah satu-satunya bahasa di dunia yang memungkinkan pemanggilan konstruktor kelas ("Class") secara langsung tanpa membuat instansinya terlebih dahulu. Akibatnya, kelas dan fungsi-konstruktor dibedakan dimulai dengan UpperCamelCase

### 3.6 Contoh Kode

```javascript
// untuk nama kelas kita gunakan UpperCamelCase
class SomeClassExample {}

// untuk nama const kita gunakan kata kunci const dan lowerCamelCase
const config = {
  key: "value",
};

// untuk nama variabel dan fungsi kita gunakan lowerCamelCase
let someVariableExample = "value";
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Utamakan penggunaan const daripada let. Singkirkan var

**TL;DR:** Menggunakan `const` berarti bahwa setelah nilai variabel itu ditetapkan, nilainya tidak dapat ditetapkan kembali. Menggunakan `const` akan membantu Anda untuk tidak tergoda untuk menggunakan variabel yang sama untuk penggunaan yang berbeda, dan membuat kode Anda lebih jelas. Jika sebuah variabel perlu ditetapkan kembali nilainya, di dalam perulangan for, misalnya, deklarasikan menggunakan `let`. Aspek penting lainnya dari `let` adalah variabel yang dideklarasikan menggunakan `let` hanya tersedia di dalam cakupan blok di mana variabel itu didefinisikan. `var` memiliki cakupan dalam fungsi, bukan dalam blok, dan [tidak boleh digunakan di ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) setelah Anda mempunyai `const` dan `let`

**Jika tidak:** Men-debug menjadi lebih rumit saat mengikuti variabel yang sering berubah

🔗 [**Baca selengkapnya: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 _Require_ modul terlebih dahulu, bukan di dalam fungsi

**TL;DR:** _Require_ modul di awal setiap file, sebelum dan di luar semua fungsi. Praktik terbaik sederhana ini tidak hanya membantu Anda dengan mudah dan cepat untuk mengetahui dependensi file di awal sebuah file tetapi juga menghindari beberapa potensi masalah

**Jika tidak:** _Require_ dijalankan secara sinkron oleh Node.js. Jika mereka dipanggil dalam sebuah fungsi, ini mungkin dapat memblokir permintaan lain untuk ditangani pada waktu yang lebih kritis. Selain itu, jika modul yang diperlukan atau salah satu dependensinya menimbulkan kesalahan dan merusak server, akan lebih baik untuk mengetahuinya sesegera mungkin, yang mungkin tidak akan terjadi jika modul itu dipanggil dalam sebuah fungsi

<br/><br/>

## ![✔] 3.9 _Require_ modul berdasarkan folder, bukan file secara langsung

**TL;DR:** Saat mengembangkan sebuah modul/pustaka dalam sebuah folder, letak file index.js yang mengekspos modul internal sehingga setiap konsumen akan melewatinya. Ini berfungsi sebagai 'antarmuka' ke modul Anda dan memudahkan perubahan di masa mendatang tanpa merusak kontrak

**Jika tidak:** Mengubah struktur internal sebuah file atau tanda tangannya dapat merusak antarmuka dengan klien

### 3.9 Contoh kode

```javascript
// Lakukan
module.exports.SMSProvider = require("./SMSProvider");
module.exports.SMSNumberResolver = require("./SMSNumberResolver");

// Hindari
module.exports.SMSProvider = require("./SMSProvider/SMSProvider.js");
module.exports.SMSNumberResolver = require("./SMSNumberResolver/SMSNumberResolver.js");
```

<br/><br/>

## ![✔] 3.10 Gunakan operator `===`

**TL;DR:** Utamakan operator persamaan ketat `===` daripada operator persamaan abstrak `==` yang lebih lemah. `==` akan membandingkan dua variabel setelah mengubahnya ke tipe umum. Tidak ada konversi tipe di `===`, dan kedua variabel harus sejenis agar sama

**Jika tidak:** Variabel yang tidak sama dapat mengembalikan _true_ ketika dibandingkan dengan operator `==`

### 3.10 Contoh kode

```javascript
"" == "0"; // false
0 == ""; // true
0 == "0"; // true

false == "false"; // false
false == "0"; // true

false == undefined; // false
false == null; // false
null == undefined; // true

" \t\r\n " == 0; // true
```

Semua pernyataan di atas akan mengembalikan nilai _false_ jika menggunakan `===`

<br/><br/>

## ![✔] 3.11 Gunakan Async Await, hindari panggilan balik

**TL;DR:** Node 8 LTS sekarang memiliki dukungan penuh untuk Async-await. Ini adalah cara baru untuk menangani kode asinkron yang menggantikan panggilan balik dan _promise_. Async-await bersifat tidak memblokir, dan ini membuat kode asinkron terlihat seperti sinkron. Hadiah terbaik yang dapat Anda berikan untuk kode Anda adalah menggunakan async-await yang menyediakan sintaks yang lebih ringkas dan akrab seperti try-catch

**Jika tidak:** Menangani kesalahan asinkron dalam gaya panggilan balik mungkin adalah cara terburuk - gaya ini memeriksa kesalahan secara menyeluruh, menangani tumpukan kode yang canggung, dan menyulitkan untuk menjelaskan aliran kode

🔗[**Baca selengkapnya:** Guide to async-await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Gunakan ekspresi fungsi panah (=>)

**TL;DR:** Meskipun disarankan untuk menggunakan async-await dan menghindari parameter fungsi saat berurusan dengan API lama yang menerima promise atau panggilan balik - fungsi panah membuat struktur kode lebih ringkas dan menjaga konteks leksikal dari akar fungsi (contohnya `this`)

**Jika tidak:** Kode yang lebih panjang (dalam fungsi ES5) lebih rentan terhadap masalah dan rumit untuk dibaca

🔗 [**Baca selengkapnya: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `4. Praktik Pengujian dan Kualitas Secara Keseluruhan`

## ![✔] 4.1 Paling tidak, buat pengujian API (komponen)

**TL;DR:** Sebagian besar proyek tidak memiliki pengujian otomatis karena jadwal yang singkat atau 'proyek pengujian' sering tidak terkendali dan ditinggalkan. Oleh karena itu, prioritaskan dan mulailah dengan pengujian API yang merupakan cara termudah untuk menulis dan memberikan cakupan yang lebih dari pengujian unit (Anda bahkan dapat membuat pengujian API tanpa kode menggunakan alat seperti [Postman](https://www.getpostman.com/). Setelah itu, jika Anda mempunyai waktu dan sumber daya yang lebih, lanjutkan dengan pengujian yang lebih tinggi seperti pengujian unit, pengujian DB, pengujian performa, dll.

**Jika tidak:** Anda mungkin menghabiskan waktu yang lama untuk menulis pengujian unit untuk mengetahui bahwa Anda hanya mencakup 20% dari sistem

<br/><br/>

## ![✔] 4.2 Sertakan 3 bagian di setiap nama pengujian

**TL;DR:** Buatlah pengujian yang setara dengan tingkat persyaratan sehingga cukup jelas untuk _Engineer_ QA dan pengembang yang tidak terbiasa dengan kode internal. Sebutkan dalam nama pengujian apa yang akan diuji (unit dalam pengujian), dalam keadaan apa, dan apa hasil yang diharapkan

**Jika tidak:** Deployment baru saja gagal, sebuah pengujian bernama “Tambah produk” gagal. Apakah ini memberi tahu Anda dengan tepat apa yang tidak berfungsi?

🔗 [**Baca selengkapnya: Include 3 parts in each test name**](./sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Strukturkan pengujian Anda dengan pola AAA

**TL;DR:** Strukturkan pengujian dengan 3 bagian yang terpisah dengan baik: _Arrange, Act & Assert_ (AAA). Bagian pertama mencakup penyiapan untuk pengujian, kemudian eksekusi unit yang akan diuji, dan yang terakhir fase _assertion_. Mengikuti struktur ini menjamin bahwa pembaca tidak menghabiskan tenaga otak untuk memahami rencana pengujian

**Jika tidak:** Tidak hanya Anda menghabiskan waktu yang lama untuk memahami kode utama, tetapi sekarang hal paling mudah dari hari Anda (melakukan pengujian) dapat meregangkan otak Anda

🔗 [**Baca selengkapnya: Structure tests by the AAA pattern**](./sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Deteksi masalah kode dengan _linter_

**TL;DR:** Gunakan _linter_ kode untuk memeriksa kualitas dasar dan mendeteksi anti-pola sejak dini. Jalankan _linter_ sebelum pengujian dan tambahkan _linter_ sebagai pra-commit git-hook untuk meminimalkan waktu yang dibutuhkan untuk meninjau dan memperbaiki masalah apa pun. Periksa juga [Bagian 3](#3-praktik-gaya-kode) tentang Praktik Gaya Kode

**Jika Tidak:** Anda dapat membiarkan beberapa kode dengan anti-pola dan mungkin kode yang tidak aman masuk ke lingkungan produksi Anda.

<br/><br/>

## ![✔] 4.5 Hindari perlengkapan dan benih global pada pengujian, tambah data pada setiap pengujian

**TL;DR:** Untuk mencegah pengujian yang tersambung dan memudahkan untuk memahami alur pengujian, setiap pengujian harus menambah dan bertindak pada kumpulan data di DB-nya sendiri. Setiap kali pengujian perlu menarik atau mengasumsikan keberadaan suatu data pada DB - pengujian tersebut harus menambah data tersebut secara eksplisit dan hindari memutasi kumpulan data lainnya

**Jika tidak:** Anggap sebuah skenario di mana _deployment_ gagal karena pengujian yang gagal, tim sekarang akan menghabiskan waktu yang berharga untuk melakukan investigasi yang berakhir dengan kesimpulan yang menyedihkan: sistem berfungsi dengan baik, namun pengujian saling mengganggu dan merusak _build_-nya

🔗 [**Baca selengkapnya: Avoid global test fixtures**](./sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Periksa terus menerus dependensi yang rentan

**TL;DR:** Bahkan dependensi yang paling terkemuka seperti Express memiliki kerentanan yang diketahui. Hal ini dapat dimitigasi dengan mudah menggunakan alat dari komunitas atau komersial seperti 🔗 [npm audit](https://docs.npmjs.com/cli/audit) dan 🔗 [snyk.io](https://snyk.io) yang dapat dipanggil dari CI Anda pada setiap _build_

**Jika tidak:** Menjaga kode Anda bersih dari kerentanan tanpa alat khusus mengharuskan Anda untuk mengikuti publikasi online tentang ancaman baru. Cukup membosankan

<br/><br/>

## ![✔] 4.7 Tandai pengujian Anda

**TL;DR:** Pengujian yang berbeda harus dijalankan pada skenario yang berbeda: _quick smoke_, _IO-less_, pengujian harus dijalankan ketika pengembang menyimpan atau melakukan _commit_ pada file, pengujian _end-to-end_ biasanya dijalankan saat _pull request_ baru dikirimkan, dst. Hal ini dapat dicapai dengan menandai pengujian dengan kata kunci seperti _#cold #api #sanity_ sehingga Anda dapat melakukan `grep` pada pengujian Anda dan menjalankan subset yang diinginkan. Contohnya, ini adalah cara untuk memanggil pengujian pada kelompok _sanity_ dengan [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Jika tidak:** Menjalankan semua pengujian, termasuk pengujian yang menjalankan banyak kueri DB, setiap kali pengembang membuat perubahan kecil bisa sangat lambat dan menjauhkan pengembang dari menjalankan pengujian

<br/><br/>

## ![✔] 4.8 Periksa cakupan pengujian Anda, ini membantu untuk mengidentifikasikan pola pengujian yang salah

**TL;DR:** Alat cakupan kode seperti [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) sangat bagus karena 3 alasan: gratis (sangat mudah untuk memanfaatkan laporan ini), alat ini membantu mengidentifikasikan pengurangan cakupan pengujian, dan yang terakhir, alat ini menyoroti ketidakcocokan pengujian: dengan melihat kode warna pada laporan cakupan Anda dapat melihat, misalnya, area kode yang tidak pernah diuji seperti klausa _catch_ (artinya pengujian hanya mengambil jalur yang benar dan bukan bagaimana aplikasi akan berperilaku jika ada kesalahan). Setel agar _build_-nya gagal jika cakupannya berada di bawah batas tertentu

**Jika tidak:** Tidak akan ada metrik otomatis yang memberi tahu Anda saat sebagian besar kode Anda tidak tercakup dalam pengujian

<br/><br/>

## ![✔] 4.9 Periksa paket yang kedaluwarsa

**TL;DR:** Gunakan alat pilihan Anda (misalnya 'npm outdated' atau [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) untuk mendeteksi paket yang kedaluwarsa, masukkan pemeriksaan ini ke _pipeline CI_ dan bahkan gagalkan _build_-nya dalam skenario yang buruk. Contohnya, skenario yang buruk mungkin terjadi ketika paket yang digunakan tertinggal 5 _patch commit_ (misalnya versi lokal adalah 1.3.1 dan versi repositori adalah 1.3.8) atau paketnya ditandai _deprecated_ oleh pembuatnya - matikan _build_-nya dan cegah _deployment_ pada versi ini

**Jika tidak:** Produksi Anda akan menggunakan paket yang ditandai berisiko oleh pembuatnya secara eksplisit

<br/><br/>

## ![✔] 4.10 Gunakan lingkungan yang mirip dengan produksi untuk pengujian e2e

**TL;DR:** Pengujian _End to end_ (e2e) yang mencakup data asli dulunya merupakan titik terlemah pada proses CI karena pengujian itu bergantung pada beberapa layanan berat seperti DB. Gunakan lingkungan yang semirip mungkin dengan lingkungan pada produksi Anda seperti a-seterusnya (-seterusnya hilang, konten dibutuhkan. Dilihat dari klausa **Jika tidak**, hal ini seharusnya menyebutkan tentang docker-compose)

**Jika tidak:** Tanpa docker-compose, tim harus mengurus DB pengujian untuk setiap lingkungan pengujian termasuk mesin yang dimiliki oleh pengembang, pastikan semua DB tersebut tetap sinkron sehingga hasil pengujian tidak akan berbeda di lingkungan yang berbeda

<br/><br/>

## ![✔] 4.11 Sering lakukan refactor menggunakan alat analisis statis

**TL;DR:** Menggunakan alat analisis statis membantu dengan memberikan cara yang obyektif untuk meningkatkan kualitas kode dan tetap menjaga kode Anda. Anda dapat menambahkan alat analisis statis ke _build_ CI untuk menggagalkan _build_-nya jika alat itu menemukan kode yang jelek. Nilai jual utamanya dibandingkan dengan _linting_ biasa adalah kemampuan untuk memeriksa kualitas dalam konteks beberapa file (contohnya mendeteksi duplikasi), melakukan analisis lanjutan (contohnya kompleksitas kode), dan mengikuti riwayat dan perkembangan masalah kode. Dua contoh alat yang dapat Anda gunakan adalah [Sonarqube](https://www.sonarqube.org/) (2,600+ [bintang](https://github.com/SonarSource/sonarqube)) dan [Code Climate](https://codeclimate.com/) (1,500+ [bintang](https://github.com/codeclimate/codeclimate)).

**Jika tidak:** Dengan kualitas kode yang buruk, _bug_ dan performa selalu akan selalu menjadi masalah yang tidak dapat diperbaiki oleh pustaka baru atau fitur-fitur canggih

🔗 [**Baca selengkapnya: Refactoring!**](./sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Pilih platform CI Anda dengan hati-hati (Jenkins vs CircleCI vs Travis vs yang lainnya)

**TL;DR:** Platform _continuous integration_ (CICD) Anda akan mempunyai semua alat berkualitas (seperti test, lint) sehingga seharusnya dilengkapi dengan ekosistem plugin yang dinamis. [Jenkins](https://jenkins.io/) dulunya merupakan aplikasi default untuk banyak proyek karena mempunyai komunitas terbesar bersama dengan platform yang sangat kuat dengan kekurangan persiapan yang rumit yang menuntut kurva pembelajaran yang tajam. Saat ini, persiapan solusi CI jauh lebih mudah menggunakan alat SaaS seperti [CircleCI](https://circleci.com) dan lainnya. Alat ini memungkinkan pembuatan pipeline CI yang fleksibel tanpa beban untuk mengelola seluruh infrastruktur. Pada akhirnya, ini merupakan keseimbangan antara kecepatan dan kekuatan - pilih dengan hati-hati

**Jika tidak:** Memilih vendor khusus mungkin akan membatasi Anda ketika Anda membutuhkan penyesuaian tingkat lanjut. Di sisi lain, menggunakan Jenkins dapat menghabiskan waktu berharga dalam penyiapan infrastruktur

🔗 [**Baca selengkapnya: Choosing CI platform**](./sections/testingandquality/citools.md)

## ![✔] 4.13 Uji middleware Anda secara terpisah

**TL;DR:** Ketika middleware mempunyai beberapa logika besar yang mencakup banyak permintaan, ada baiknya untuk mengujinya secara terpisah tanpa membangun seluruh framework web. Hal ini dapat dicapai dengan mudah dengan melakukan _stubbing_ dan _spying_ pada objek {req, res, next}

**Otherwise:** Sebuah _bug_ di middleware Express === sebuah bug di semua atau banyak _request_

🔗 [**Baca selengkapnya: Test middlewares in isolation**](./sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `5. Praktik Dalam Produksi`

## ![✔] 5.1. Pemantauan

**TL;DR:** Pemantauan adalah permainan mencari suatu masalah sebelum pelanggan menemukannya terlebih dahulu – yang jelas masalah itu merupakan masalah yang belum pernah terjadi sebelumnya. Pasar kewalahan dengan penawaran sehingga mempertimbangkan untuk memulai dengan menentukan metrik dasar yang harus Anda ikuti (saran saya di dalam), kemudian pertimbangkan fitur-fitur mewah tambahan dan pilih solusi yang mencentang semua kotak. Klik ‘Intinya’ di bawah untuk ringkasan dari berbagai solusi

**Jika tidak:** Kegagalan === pelanggan kecewa. Sederhana

🔗 [**Baca selengkapnya: Monitoring!**](./sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Tingkatkan transparansi dengan menggunakan logging yang cerdas

**TL;DR:** _Log_ dapat menjadi gudang statement debug yang bodoh atau papan cantik yang menceritakan kisah aplikasi Anda. Rencanakan platform logging Anda dari hari pertama: bagaimana log dikumpulkan, disimpan dan dianalisis untuk memastikan bahwa informasi yang diinginkan (misalnya tingkat kesalahan, mengikuti seluruh transaksi melalui layanan dan server, dst.) benar-benar dapat diekstrak

**Jika tidak:** Anda berakhir dengan kotak hitam yang sulit dimengerti, kemudian Anda mulai menulis ulang semua statement log untuk menambahkan informasi tambahan

🔗 [**Baca selengkapnya: Increase transparency using smart logging**](./sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegasikan apa pun yang mungkin (misalnya gzip, SSL) ke sebuah _reverse proxy_

**TL;DR:** Node sangat buruk dalam melakukan pekerjaan yang intensif CPU seperti melakukan gzip, penghentian SSL, dll. Anda harus menggunakan layanan middleware yang ‘asli’ seperti nginx, HAproxy atau layanan vendor cloud

**Jika tidak:** Thread utama Anda akan tetap sibuk melakukan tugas infrastruktur alih-alih menangani inti aplikasi Anda dan performa akan menurun karenanya

🔗 [**Baca selengkapnya: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](./sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Kunci dependensi

**TL;DR:** Kode Anda harus identik di semua lingkungan, namun npm dapat membiarkan dependensi berubah di lingkungan yang berbeda – saat Anda menginstal paket di lingkungan lain npm mencoba menginstal versi terbaru dari paket tersebut. Atasi ini dengan menggunakan file konfigurasi , .npmrc, yang memberi tahu setiap lingkungan untuk menyimpan versi yang tepat (bukan yang terbaru) dari setiap paket. Alternatifnya, untuk kontrol yang lebih baik, gunakan `npm shrinkwrap`. \*Pembaruan: pada NPM5, dependensi dikunci secara default. Manajer paket yang baru, Yarn, juga melakukan hal ini

**Jika tidak:** QA akan menguji kode secara menyeluruh dan menyetujui versi yang kemudian akan berperilaku berbeda dalam produksi. Lebih buruk lagi, server yang berbeda dalam kelompok produksi mungkin menjalankan kode yang berbeda

🔗 [**Baca selengkapnya: Lock dependencies**](./sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Jaga uptime proses menggunakan alat yang tepat

**TL;DR:** Proses harus tetap berjalan dan dimulai ulang jika terjadi kegagalan. Untuk skenario simpel, alat manajemen proses seperti PM2 mungkin sudah cukup namun di era ‘dockerized’, alat management cluster juga harus dipertimbangkan

**Jika tidak:** Menjalankan banyak instansi tanpa strategi yang jelas dan terlalu banyak alat (manajemen cluster, docker, PM2) dapat menyebabkan kekacauan DevOps

🔗 [**Baca selengkapnya: Guard process uptime using the right tool**](./sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Manfaatkan semua core CPU

**TL;DR:** Pada dasarnya, aplikasi Node berjalan pada satu core CPU sementara core lainnya tidak digunakan. Ini merupakan tugas Anda untuk mereplika proses Node dan menggunakan semua CPU – Untuk aplikasi kecil-menengah Anda dapat menggunakan Node Cluster atau PM2. Untuk aplikasi yang lebih besar pertimbangkan untuk mereplika proses menggunakan beberapa Docker cluster (misalnya K8S, ECS) atau skrip _deployment_ yang didasarkan pada sistem Linux init (misalnya systemd)

**Jika tidak:** Aplikasi Anda kemungkinan hanya menggunakan 25% dari sumber daya yang tersedia(!) atau bahkan kurang. Ingat bahwa server tipikal memiliki 4 core CPU atau lebih, _deployment_ Node.js yang naif hanya menggunakan 1 (bahkan jika menggunakan layanan PaaS seperti AWS beanstalk!)

🔗 [**Baca selengkapnya: Utilize all CPU cores**](./sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Buat ‘endpoint pemeliharaan’

**TL;DR:** Sediakan sekumpulan informasi terkait sistem, seperti penggunaan memori dan REPL, dll. dalam API yang aman. Meskipun sangat disarankan untuk mengandalkan alat standar dan battle-test, beberapa informasi penting dan operasi lebih mudah dilakukan melalui kode

**Jika tidak:** Anda akan melakukan banyak “deploy diagnostik” – mendeploy kode ke produksi hanya untuk mengekstrak beberapa informasi untuk keperluan diagnostik

🔗 [**Baca selengkapnya: Create a ‘maintenance endpoint’**](./sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Temukan kesalahan dan downtime menggunakan produk APM

**TL;DR:** _Application monitoring and performance products_ (a.k.a APM) secara proaktif mengukur basis kode dan API sehingga mereka dapat secara otomatis melampaui pemantauan tradisional dan mengukur pengalaman pengguna secara keseluruhan di semua layanan dan tingkatan. Misalnya, beberapa produk APM dapat menyoroti transaksi yang terlalu lambat di sisi pengguna sambil menyarankan penyebab utamanya

**Jika tidak:** Anda mungkin menghabiskan banyak tenaga untuk mengukur kinerja dan downtime API, mungkin Anda tidak akan pernah tau bagian kode mana yang paling lambat dalam skenario dunia nyata dan bagaimana hal ini dapat memengaruhi pengalaman pengguna

🔗 [**Baca selengkapnya: Discover errors and downtime using APM products**](./sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Buat kode Anda siap produksi

**TL;DR:** Buat kode dengan tujuan akhir ada dalam pikiran Anda, rencanakan untuk produksi dari hari pertama. Ini terdengar kurang jelas jadi saya telah mengumpulkan beberapa tips pengembangan yang berkaitan erat dengan perawatan produksi (klik intinya di bawah)

**Jika tidak:** Seorang juara dunia IT/DevOps tidak akan memperbaiki sistem yang ditulis dengan buruk

🔗 [**Baca selengkapnya: Make your code production-ready**](./sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Ukur dan jaga penggunaan memori

**TL;DR:** Node.js memiliki hubungan yang kontroversial dengan memori: mesin v8 memiliki batas memori yang rendah (1.4GB) dan terdapat cara yang diketahui untuk terjadinya kebocoran memori dalam kode Node – sehingga mengamati memori proses Node adalah suatu keharusan. Pada aplikasi kecil, Anda dapat mengukur memori Anda secara berkala menggunakan perintah _shell_ namun di aplikasi menengah-besar pertimbangkan untuk membuat sistem pemantauan yang kuat untuk mengamati memori

**Jika tidak:** Memori proses Anda mungkin bocor ratusan megabyte sehari seperti yang terjadi pada [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Baca selengkapnya: Measure and guard the memory usage**](./sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Keluarkan aset _frontend_ Anda dari Node

**TL;DR:** Sajikan konten _frontend_ menggunakan middleware khusus (nginx, S3, CDN) karena performa Node dapat berkurang ketika menangani banyak file statis karena model thread tunggalnya

**Jika tidak:** Thread tunggal Node Anda akan sibuk mengirimkan ratusan file html/gambar/angular/react alih-alih mengalokasikan semua sumber dayanya untuk tugas yang seharusnya – menyajikan konten dinamis

🔗 [**Baca selengkapnya: Get your frontend assets out of Node**](./sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Buat aplikasi yang stateless, matikan server Anda hampir setiap hari

**TL;DR:** Simpan semua jenis data (misalnya sesi pengguna, cache, file yang diunggah) ke tempat penyimpanan eksternal. Pertimbangkan untuk ‘mematikan’ server Anda secara berkala atau gunakan platform ‘serverless’ (misalnya AWS Lambda) yang secara eksplisit mengharuskan sifat stateless

**Jika tidak:** Kegagalan di server tertentu akan mengakibatkan downtime aplikasi, bukannya hanya mematikan mesin yang rusak. Selain itu, elastisitas penskalaan akan menjadi lebih sulit karena ketergantungan pada server tertentu

🔗 [**Baca selengkapnya: Be stateless, kill your Servers almost every day**](./sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Gunakan alat yang pendeteksi kerentanan secara otomatis

**TL;DR:** Bahkan dependensi yang paling terkemuka seperti Express memiliki kerentanan yang diketahui (dari waktu ke waktu) yang dapat membahayakan sistem. Hal ini dapat dimitigasi dengan mudah menggunakan alat dari komunitas atau komersial yang terus-menerus memeriksa kerentanan dan memberi peringatan (secara lokal atau di GitHub), beberapa bahkan dapat langsung memperbaikinya

**Jika tidak:** Menjaga kode Anda bersih dari kerentanan tanpa alat khusus mengharuskan Anda untuk mengikuti publikasi online tentang ancaman baru. Cukup membosankan

🔗 [**Baca selengkapnya: Use tools that automatically detect vulnerabilities**](./sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Tetapkan id transaksi di seetiap statement catatan

**TL;DR:** Tetapkan pengenal yang sama, transaksi-id: {sebuah nilai}, ke setiap entri catatan dalam satu permintaan. Kemudian saat memeriksa kesalahan di dalam catatan, simpulkan dengan mudah apa yang terjadi sebelum dan sesudahnya. Sayangnya, hal ini tidak mudah untuk dicapai di Node karena sifat asinkron-nya, lihat contoh kode di dalam

**Jika tidak:** Melihat catatan kesalahan produksi tanpa konteks – apa yang terjadi sebelumnya – membuat Anda lebih sulit untuk memahami penyebab kesalahannya

🔗 [**Baca selengkapnya: Assign ‘TransactionId’ to each log statement**](./sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.16. Atur NODE_ENV=production

**TL;DR:** Atur variabel lingkungan NODE_ENV ke ‘production’ or ‘development’ untuk menandai apakah pengoptimalan produksi harus diaktifkan – banyak paket npm melihat lingkungan yang digunakan dan mengoptimalkan kodenya untuk produksi

**Jika tidak:** Mengabaikan properti sederhana ini dapat menurunkan performa. Contohnya, pada saat menggunakan Express untuk rendering sisi server menghilangkan `NODE_ENV` membuat proses render lebih lambat hingga 3 kali lipat!

🔗 [**Baca selengkapnya: Set NODE_ENV=production**](./sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Rancang deployment otomatis, atomic dan tanpa downtime

**TL;DR:** Penelitian menunjukkan bahwa tim yang melakukan banyak deployment menurunkan kemungkinan masalah produksi yang buruk. Deployment yang otomatis dan cepat tidak memerlukan langkah manual yang berisiko dan waktu downtime layanan meningkatkan proses deployment. Anda mungkin harus melakukan ini menggunakan Docker yang dikombinasikan dengan alat CI karena mereka menjadi standar industri untuk deployment yang efisien

**Jika tidak:** Deployment yang lama -> downtime produksi & kesalahan oleh manusia -> tim ragu dalam melakukan deployment -> lebih sedikit deployment dan fitur

<br/><br/>

## ![✔] 5.17. Gunakan versi LTS pada Node.js

**TL;DR:** Pastikan Anda menggunakan versi LTS pada Node.js untuk menerima perbaikan bug yang kritis, pembaruan keamanan dan peningkatan performa

**Otherwise:** Bug atau kerentanan yang baru ditemukan dapat digunakan untuk mengeksploitasi aplikasi yang sedang berjalan dalam produksi, dan aplikasi Anda mungkin menjadi tidak didukung oleh berbagai modul dan lebih sulit untuk di dipelihara

🔗 [**Baca selengkapnya: Use an LTS release of Node.js**](./sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Jangan rutekan catatan di dalam aplikasi

**TL;DR:** Tempat catatan tidak boleh dibuat oleh pengembang dalam kode aplikasi, tetapi harus ditentukan oleh lingkungan eksekusi dimana aplikasi itu dijalankan. Pengembang harus menuliskan catatan ke `stdout` menggunakan utilitas logger dan membiarkan lingkungan eksekusi (container, server, dll.) menyalurkan `stdout` ke tujuan yang sesuai (misalnya Splunk, Graylog, ElasticSearch, dll.).

**Jika tidak:** Aplikasi menangani rute catatan === sulit untuk dikembangkan, kehilangan catatan, dan _separation of concerns_ yang buruk

🔗 [**Baca selengkapnya: Log Routing**](./sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. Install paket menggunakan `npm ci`

**TL;DR:** Anda harus memastikan bahwa kode produksi menggunakan versi paket yang sama dengan yang Anda gunakan pada saat pengujian. Jalankan `npm ci` untuk melakukan instalasi bersih dari dependensi di dalam package.json dan package-lock.json. Penggunaan perintah ini sangat direkomendasikan dalam lingkungan otomatis seperti pipeline continuous integration.

**Jika tidak:** QA akan menguji kode secara menyeluruh dan menyetujui versi yang kemudian akan berperilaku berbeda dalam produksi. Lebih buruk lagi, server yang berbeda dalam kelompok produksi mungkin menjalankan kode yang berbeda.

🔗 [**Baca selengkapnya: Use npm ci**](./sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `6. Praktik Terbaik Keamanan`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Terapkan aturan keamanan linter

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Manfaatkan plugin linter yang berhubungan dengan keamanan seperti [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) untuk menangkap kerentanan dan masalah keamanan sedini mungkin, lebih baik lagi jika dalam proses pembuatan kode. Hal ini dapat membantu menangkap keamanan yang lemah seperti penggunaan eval, menjalankan child process atau memanggil modul menggunakan literal string (misalnya masukan pengguna). Klik 'Baca selengkapnya' di bawah ini untuk melihat contoh kode yang akan dideteksi oleh linter keamanan

**Jika tidak:** Kelemahan keamanan yang jelas selama masa pengembangan malah menjadi masalah besar dalam produksi. Selain itu, proyek mungkin tidak mengikuti praktik kode keamanan yang konsisten, yang mengarah ke kerentanan baru, atau rahasia sensitif yang ter-_commit_ ke dalam repositori remote

🔗 [**Baca selengkapnya: Lint rules**](./sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Batasi request serentak dengan menggunakan middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Serangan DOS sangat populer dan relatif mudah untuk dilakukan. Terapkan pembatasan rate menggunakan layanan eksternal seperti _cloud load balancers_, _cloud firewalls_, nginx, paket [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible), atau (untuk aplikasi yang lebih kecil dan kurang penting) sebuah middleware _rate-limiting_ (misalnya [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Jika tidak:** Aplikasi dapat terkena serangan _denial of service_ sementara pengguna asli menggunakan layanan yang terdegradasi atau tidak tersedia.

🔗 [**Baca selengkapnya: Implement rate limiting**](./sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Keluarkan rahasia dari file konfigurasi atau gunakan paket untuk mengenkripsinya

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Jangan pernah menyimpan rahasia dalam bentuk teks biasa dalam file konfigurasi atau kode sumber. Sebagai gantinya, gunakan sistem manajemen rahasia seperti produk _Vault_, _Kubernetes/Docker Secrets_, atau gunakan variabel lingkungan. Sebagai cara terakhir, rahasia yang disimpan di kontrol kode harus terenkripsi dan teratur (kunci bergulir, kedaluwarsa, audit, dll.). Manfaatkan hook pra-_commit_/_push_ untuk mencegah agar rahasia tidak ter-_commit_ secara tidak sengaja

**Jika tidak:** Kontrol sumber, bahkan untuk repositori pribadi, dapat di buat publik secara tidak sengaja, di mana semua rahasia dapat terungkap. Akses kontrol sumber dari pihak eksternal dapat memberikan akses ke sistem terkait (database, api, layanan, dll.) secara tidak sengaja.

🔗 [**Baca selengkapnya: Secret management**](./sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Cegah injeksi kueri dengan menggunakan pustaka ORM/ODM

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Untuk mencegah injeksi SQL/NoSQL dan serangan buruk lainnya, selalu gunakan ORM/ODM atau pustaka database yang melakukan _escape_ pada data atau mendukung kueri berparameter yang bernama atau diindeks, dan tangani validasi masukan pengguna agar sesuai dengan tipe yang diharapkan. Jangan pernah hanya menggunakan template string JavaScript atau penggabungan string untuk memasukkan nilai ke dalam kueri karena ini membuka aplikasi Anda ke spektrum kerentanan yang luas. Semua pustaka akses data pada Node.js (misalnya [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) memiliki perlindungan bawaan untuk menghindari serangan injeksi.

**Jika tidak:** Masukan pengguna yang tidak divalidasi atau tidak disanitasi dapat menyebabkan injeksi operator saat menggunakan MongoDB untuk NoSQL, dan dengan tidak menggunakan sistem sanitasi atau ORM dapat memungkinkan serangan injeksi SQL, membuat suatu kerentanan yang besar.

🔗 [**Baca selengkapnya: Query injection prevention using ORM/ODM libraries**](./sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Kumpulan praktik terbaik keamanan umum

**TL;DR:** Ini adalah kumpulan saran keamanan yang tidak berhubungan langsung dengan Node.js - implementasi pada Node tidak jauh berbeda dengan implementasi pada bahasa lain. Klik 'Baca selengkapnya' untuk membaca sekilas.

🔗 [**Baca selengkapnya: Common security best practices**](./sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Sesuaikan header response HTTP untuk meningkatkan keamanan

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Aplikasi Anda harus menggunakan _header_ yang aman untuk mencegah penyerang dari serangan umum seperti _cross-site scripting_ (XSS), _clickjacking_ dan serangan berbahaya lainnya. Hal ini dapat dikonfigurasikan dengan mudah menggunakan modul seperti [helmet](https://www.npmjs.com/package/helmet).

**Jika tidak:** Penyerang dapat melakukan serangan langsung pada pengguna aplikasi, yang menyebabkan kerentanan keamanan yang sangat besar

🔗 [**Baca selengkapnya: Using secure headers in your application**](./sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Selalu periksa dependensi dari kerentanan secara otomatis

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** Dengan ekosistem npm, sangat umum pada suatu proyek untuk memiliki banyak dependensi. Dependensi harus selalu diperiksa ketika kerentanan baru ditemukan. Gunakan alat seperti [npm audit](https://docs.npmjs.com/cli/audit) atau [snyk](https://snyk.io/) untuk melacak, memantau dan memperbaiki dependensi yang rentan. Integrasikan alat-alat ini dengan setup CI Anda sehingga Anda dapat menemukan dependensi yang rentan sebelum masuk ke produksi.

**Jika tidak:** Penyerang dapat mendeteksi framework web Anda dan menyerang semua kerentanan yang diketahui.

🔗 [**Baca selengkapnya: Dependency security**](./sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Lindungi kata sandi/rahasia pengguna menggunakan bcrypt atau scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Kata sandi atau rahasia (seperti API keys) harus disimpan menggunakan fungsi hash + salt yang aman seperti `bcrypt`,`scrypt`, atau setidaknya `pbkdf2`.

**Jika tidak:** Kata sandi dan rahasia yang disimpan tanpa fungsi yang aman akan rentan terhadap _brute force_ dan penyerangan kamus yang pada akhirnya akan mengarah pada data rahasia yang terekspos.

🔗 [**Baca selengkapnya: User Passwords**](./sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape keluaran HTML, JS dan CSS

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Data yang tidak terpercaya yang dikirim ke browser mungkin akan tereksekusi alih-alih hanya ditampilkan, hal ini biasanya disebut dengan serangan _cross-site-scripting_ (XSS). Hindari hal ini dengan menggunakan pustaka khusus yang secara eksplisit menandai data sebagai konten yang tidak boleh dieksekusi (misalnya encoding, escaping)

**Jika tidak:** Penyerang mungkin menyimpan kode JavaScript yang berbahaya di DB Anda yang kemudian akan dikirim apa adanya ke pengguna

🔗 [**Baca selengkapnya: Escape output**](./sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validasi skema JSON yang diterima

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validasi muatan _body_ pada request dan pastikan agar muatan memenuhi ekspektasi, gagalkan dengan cepat jika muatan tidak memenuhi ekspektasi. Untuk menghindari kode validasi yang berantakan dalam setiap rute Anda dapat menggunakan validasi skema berbasis JSON yang ringan seperti [jsonschema](https://www.npmjs.com/package/jsonschema) atau [joi](https://www.npmjs.com/package/joi)

**Jika tidak:** Kemurahan hati dan cara permisif Anda dapat meningkatkan kemungkinan penyerangan dan mendorong penyerang untuk mencoba banyak masukan sampai mereka menemukan beberapa kombinasi untuk merusak aplikasi

🔗 [**Baca selengkapnya: Validate incoming JSON schemas**](./sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Dukung daftar hitam JWT

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Ketika menggunakan _JSON Web Tokens_ (misalnya, dengan [Passport.js](https://github.com/jaredhanson/passport)), secara default tidak ada cara untuk mencabut akses dari token yang dibuat. Setelah Anda menemukan beberapa aktifitas pengguna yang berbahaya, tidak ada cara untuk mengentikan mereka dari mengakses sistem selama mereka mempunyai token yang valid. Hindari ini dengan menerapkan daftar hitam untuk token yang tidak tepercaya yang divalidasi pada setiap request.

**Jika tidak:** Token yang kedaluwarsa atau salah ditempatkan dapat digunakan secara jahat oleh pihak ketiga untuk mengakses aplikasi dan menyamar sebagai pemilik token.

🔗 [**Baca selengkapnya: Blacklist JSON Web Tokens**](./sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Cegah serangan _brute-force_ terhadap otorisasi

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Teknik sederhana dan kuat adalah membatasi upaya otorisasi menggunakan dua metrik:

1. Pertama adalah upaya gagal berturut-turut oleh ID / nama unik dan alamat IP yang sama.
2. Kedua adalah jumlah upaya gagal dari sebuah alamat IP selama jangka waktu yang lama. Misalnya, blokir alamat IP jika IP tersebut melakukan 100 upaya gagal dalam satu hari.

**Jika tidak:** Penyerang dapat melakukan percobaan kata sandi otomatis tanpa batas untuk mendapatkan akses ke akun yang memiliki hak istimewa pada suatu aplikasi

🔗 [**Baca selengkapnya: Login rate limiting**](./sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Jalankan Node.js sebagai pengguna yang bukan root

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** Ada skenario umum di mana Node.js dijalankan sebagai pengguna root dengan izin tanpa batas. Misalnya, ini adalah perilaku default di kontainer Docker. Direkomendasikan untuk membuat pengguna yang bukan root dan _bake_ pengguna itu ke dalam _Docker image_ (contoh ada di bawah) atau jalankan proses atas nama pengguna ini dengan menjalankan kontainer dengan _flag_ "-u username"

**Jika tidak:** Penyerang yang berhasil menjalankan skrip di server mendapatkan kekuatan tak terbatas atas mesin lokal (misalnya mengganti iptable dan merutekan ulang traffic ke servernya)

🔗 [**Baca selengkapnya: Run Node.js as non-root user**](./sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Batasi ukuran payload menggunakan reverse-proxy atau middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Semakin besar ukuran payload-nya, semakin sulit thread tunggal Anda untuk memprosesnya. Ini adalah kesempatan bagi penyerang untuk membuat server bertekuk lutut tanpa banyak mengirimkan request (penyerangan DOS/DDOS). Hindari ini dengan membatasi ukuran body dari request yang masuk di ujung (misalnya firewall, ELB) atau mengonfigurasi [express body parser](https://github.com/expressjs/body-parser) agar hanya menerima payload dengan ukuran kecil

**Jika tidak:** Aplikasi Anda harus menangani request yang besar, tidak dapat memproses pekerjaan penting lainnya yang harus diselesaikan, yang mengarah ke implikasi performa dan kerentanan terhadap serangan DOS

🔗 [**Baca selengkapnya: Limit payload size**](./sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Hindari statement eval pada JavaScript

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` sangat buruk karena memungkinkan untuk mengeksekusi kode JavaScript dalam _run time_. Ini bukan hanya menjadi perhatian dalam performa tetapi juga perhatian dalam masalah keamanan penting karena kode JavaScript dapat bersumber dari masukan pengguna. Fitur bahasa lain yang harus dihindari adalah konstruktor `new Function`. `setTimeout` dan `setInterval` juga tidak boleh diberikan kode JavaScript yang dinamis.

**Jika tidak:** Kode JavaScript yang berbahaya menemukan jalan ke dalam teks yang diteruskan ke `eval` atau fungsi evaluasi _real-time_ bahasa Javascript lainnya, dan akan mendapatkan akses penuh ke izin JavaScript di halaman tersebut. Kerentanan ini sering kali diwujudkan sebagai serangan XSS.

🔗 [**Baca selengkapnya: Avoid JavaScript eval statements**](./sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Cegah RegEx yang buruk agar tidak membebani eksekusi thread tunggal Anda

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** _Regular Expressions_, meskipun berguna, dapat menimbulkan ancaman pada aplikasi JavaScript secara luas, dan platform Node.js pada khususnya. Masukan teks pengguna mungkin memerlukan jumlah siklus CPU yang luar biasa untuk diproses. Pemrosesan RegEx mungkin tidak efisien sampai-sampai satu request yang memvalidasi 10 kata dapat memblokir seluruh event loop selama 6 detik dan membuat CPU-nya 🔥. Oleh karena itu, gunakan paket validasi pihak ketiga seperti [validator.js](https://github.com/chriso/validator.js) daripada menuliskan pola Regex Anda sendiri, atau gunakan [safe-regex](https://github.com/substack/safe-regex) untuk mendeteksi pola regex yang rentan

**Jika tidak:** Regex yang ditulis dengan buruk dapat rentan terhadap serangan DoS Regular Expression yang akan memblokir event loop sepenuhnya. MIsalnya, paket `moment` yang populer ditemukan rentan terhadap penggunaan Regex pada November 2017

🔗 [**Baca selengkapnya: Prevent malicious RegEx**](./sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Hindari pemuatan modul menggunakan variabel

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Hindari pemuatan file lain dengan jalur yang diberikan sebagai parameter karena dikhawatirkan dapat berasal dari masukan pengguna. Aturan ini dapat diperluas untuk mengakses file secara umum (yaitu `fs.readFile()`) atau pengaksesan sumber sensitif lainnya dengan variabel dinamis yang berasal dari masukan pengguna. Linter [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) dapat menangkap pola seperti itu dan memberi peringatan cukup dini

**Jika tidak:** Masukan pengguna yang berbahaya dapat menemukan jalannya ke parameter yang digunakan untuk memuat file, misalnya, file yang sebelumnya diunggah ke sistem file, atau pengaksesan file sistem yang sudah ada.

🔗 [**Baca selengkapnya: Safe module loading**](./sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Jalankan kode yang tidak aman di sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Saat ditugaskan untuk menjalankan kode eksternal yang diberikan pada run-time (misalnya plugin), gunakan segala jenis lingkungan eksekusi 'sandbox' yang mengisolasi dan melindungi kode utama dari plugin tersebut. Hal ini dapat dicapai dengan menggunakan proses khusus (misalnya `cluster.fork()`), lingkungan _serverless_ atau paket npm khusus yang bertindak sebagai sandbox

**JIka tidak:** Sebuah plugin dapat menyerang dengan berbagai pilihan seperti perulangan tak terbatas, memberi muatan lebih pada memori, dan mengakses variabel lingkungan sensitif pada proses

🔗 [**Baca selengkapnya: Run unsafe code in a sandbox**](./sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Berhati-hati saat menggunakan _child processes_

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Hindari penggunaan _child processes_ jika memungkinkan dan validasi serta sanitasi masukan untuk menghindari serangan injeksi shell jika Anda masih perlu menggunakannya. Utamakan penggunaan `child_process.execFile` yang menurut definisi hanya akan menjalankan satu perintah dengan sekumpulan atribut dan tidak akan mengizinkan perluasan parameter shell.

**Jika tidak:** Penggunaan child process yang naif dapat mengakibatkan eksekusi perintah secara remote atau serangan injeksi shell karena masukan pengguna yang berbahaya diteruskan ke perintah sistem yang tidak disanitasi.

🔗 [**Baca selengkapnya: Be cautious when working with child processes**](./sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Sembunyikan detail kesalahan dari klien

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Penangan kesalahan express menyembunyikan detail kesalahan secara default. Namun, besar kemungkinan Anda menerapkan logika penanganan kesalahan Anda sendiri dengan objek Error kustom (dianggap sebagai praktik terbaik oleh banyak orang). Jika iya, pastikan Anda tidak mengembalikan seluruh objek error ke klien, yang mungkin mengandung beberapa informasi aplikasi yang sensitif

**Jika tidak:** Informasi sensitif aplikasi seperti path file server, modul pihak ketiga yang digunakan, dan alur kerja internal aplikasi lainnya yang dapat dieksploitasi oleh penyerang, dapat dibocorkan dari informasi yang ditemukan di dalam stack trace

🔗 [**Baca selengkapnya: Hide error details from client**](./sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Konfigurasi 2FA untuk npm atau Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Setiap langkah dalam rantai pengembangan harus dilindungi dengan MFA (_multi-factor authentication_), npm/Yarn menjadi peluang yang bagus bagi penyerang yang ingin mendapatkan kata sandi pengembang. Dengan menggunakan kredensial pengembang, penyerang dapat memasukkan kode berbahaya ke dalam pustaka yang diinstal secara luas di seluruh proyek dan layanan. Bahkan mungkin di seluruh web jika dipublikasikan. Mengaktifkan _2-factor-authentication_ dalam npm akan meninggalkan hampir nol peluang bagi penyerang untuk mengubah kode paket Anda.

**Jika tidak:** [Pernahkah Anda mendengar tentang pengembang eslint yang kata sandinya dibajak?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Ubah pengaturan middleware sesi

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Setiap framework dan teknologi web mempunyai kelemahannya masing-masing - memberi tahu penyerang framework web apa yang digunakan sangat membantu mereka. Menggunakan setelan default untuk middleware sesi dapat membuat aplikasi Anda terkena pembajakan spesifik untuk module dan framework dengan cara yang mirip dengan header `X-Powered-By`. Coba sembunyikan apa pun yang mengidentifikasikan dan mengungkapkan teknologi yang Anda gunakan (misalnya Node.js, express)

**Jika tidak:** Cookie dapat dikirim melalui koneksi yang tidak aman, dan penyerang dapat menggunakan identifikasi sesi untuk mengidentifikasi framework dari aplikasi web, serta kerentanan masing-masing modul

🔗 [**Baca selengkapnya: Cookie and session security**](./sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Hindari serangan DOS dengan mengatur kapan proses harus berhenti secara eksplisit

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Proses Node akan berhenti ketika ada kesalahan yang tidak ditangani. Banyak praktik terbaik bahkan merekomendasikan untuk menghentikan aplikasi meskipun ada kesalahan yang tertangkap dan ditangani. Express, misalnya, akan berhenti jika ada kesalahan asinkron apa pun - kecuali Anda membungkus rute dengan klausa catch. Ini memberikan kesempatan serangan yang sangat bagus bagi penyerang yang mengetahui masukan apa yang memberhentikan proses dan mengirim request yang sama berulang kali. Tidak ada solusi instan untuk ini tapi ada beberapa teknik yang dapat mengurangi hal ini: Beri peringatan kritis setiap kali proses berhenti karena ada kesalahan yang ditangani, validasi masukan dan hindari memberhentikan proses karena masukan pengguna tidak valid, bungkus semua rute dengan catch dan pertimbangkan untuk tidak memberhentikan aplikasi ketika kesalahan berasal dari dalam request (alih-alih apa yang terjadi secara global)

**Jika tidak:** Ini hanya tebakan: mengingat banyak aplikasi Node.js, jika kita memberikan JSON kosong ke semua request POST - banyak aplikasi akan berhenti. Pada saat itu, kita dapat mengirim permintaan yang sama berulang kali untuk memberhentikan aplikasi itu dengan mudah

<br/><br/>

## ![✔] 6.24. Hindari pengalihan yang tidak aman

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Pengalihan yang tidak memvalidasi masukan pengguna dapat memungkinkan penyerang untuk meluncurkan penipuan phising, mencuri kredensial pengguna, dan melakukan tindakan berbahaya lainnya.

**Jika tidak:** Jika penyerang menemukan bahwa Anda tidak memvalidasi masukan eksternal yang diberikan oleh pengguna, mereka dapat mengeksploitasi kerentanan ini dengan memposting tautan yang dibuat khusus di forum, media sosial, dan tempat publik lainnya agar pengguna mengkliknya.

🔗 [**Baca selengkapnya: Prevent unsafe redirects**](./sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Hindari menerbitkan rahasia ke registri npm

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Tindakan pencegahan harus diambil untuk menghindari risiko penerbitan rahasia ke registri publik npm secara tidak sengaja. File `.npmignore` dapat digunakan untuk memasukkan file atau folder ke dalam blacklist, atau array `files` dalam `package.json` dapat digunakan sebagai whitelist.

**Jika tidak:** Kunci API, kata sandi atau rahasia lain proyek Anda dapat disalahgunakan oleh siapapun yang menemukannya, yang dapat mengakibatkan kerugian finansial, peniruan identitas, dan risiko lainnya.

🔗 [**Baca selengkapnya: Avoid publishing secrets**](./sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `7. Draf: Praktik Terbaik Performa`

## Kontributor kami sedang mengerjakan bagian ini. [Ingin bergabung?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Jangan memblokir _event loop_

**TL;DR:** Hindari pekerjaan yang intensif CPU karena mereka akan memblokir _Event Loop_ dalam satu _thread_ dan pindahkan pekerjaan ini ke _thread_ khusus, proses atau bahkan teknologi yang berbeda berdasarkan konteksnya.

**Jika tidak:** Ketika _Event Loop_ diblokir, Node.js tidak akan dapat menangani permintaan lain sehingga menyebabkan penundaan bagi pengguna lain. **3000 pengguna sedang menunggu tanggapan, konten siap diberikan, tapi satu permintaan mencegah server-nya untuk mengirimkan hasilnya**

🔗 [**Baca selengkapnya: Do not block the event loop**](./sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. Utamakan penggunaan metode JS asli daripada utilitas berlebihan seperti Lodash

**TL;DR:** Sering kali lebih merugikan jika menggunakan pustaka seperti `lodash` dan `underscore` daripada metode asli karena mengarah kepada dependensi yang tidak diperlukan dan memperlambat performa.
Ingatlah bahwa dengan diperkenalkannya mesin V8 baru bersama dengan standar ES baru, metode asli telah ditingkatkan sehingga sekarang sekitar 50% lebih baik daripada pustaka utilitas.

**Jika tidak:** Anda harus mengurus proyek dengan kinerja yang lebih rendah di mana Anda dapat menggunakan apa yang **sudah** ada atau berurusan dengan lebih sedikit baris namun lebih banyak file sebagai gantinya.

🔗 [**Baca selengkapnya: Native over user land utils**](./sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `8. Praktik Terbaik Docker`

🏅 Terima kasih banyak kepada [Bret Fisher](https://github.com/BretFisher) yang mengajari kami banyak dari praktik berikut

<br/><br/>

## ![✔] 8.1 Gunakan build multi tahap untuk gambar Docker yang lebih kecil dan aman

**TL;DR:** Gunakan build multi tahap hanya untuk menyalin artefak produksi yang diperlukan. Banyak file dan dependensi build-time yang tidak diperlukan untuk menjalankan aplikasi Anda. Dengan build multi tahap resource ini dapat digunakan selama build sementara lingkungan runtime hanya berisikan dengan resource yang diperlukan. Build multi tahap adalah cara mudah untuk menyingkirkan kelebihan berat dan ancaman keamanan.

**Jika tidak:** Gambar yang lebih besar akan memakan waktu yang lebih lama untuk di-build dan dikirim, alat khusus build mungkin mengandung kerentanan dan rahasia yang hanya dimaksudkan untuk fase build mungkin dapat bocor.

### Contoh dockerfle untuk build multi tahap

```dockerfile
FROM node:14.4.0 AS build

COPY . .
RUN npm ci && npm run build


FROM node:slim-14.4.0

USER node
EXPOSE 8080

COPY --from=build /home/node/app/dist /home/node/app/package.json /home/node/app/package-lock.json ./
RUN npm ci --production

CMD [ "node", "dist/app.js" ]
```

🔗 [**Baca selengkapnya: Use multi-stage builds**](./sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. Lakukan bootstrap menggunakan perintah 'node', hindari npm start

**TL;DR:** Gunakan `CMD ['node','server.js']` untuk memulai aplikasi Anda, hindari menggunakan skrip npm yang tidak meneruskan sinyal OS ke kode. Ini mencegah masalah dengan proses anak, penanganan sinyal, pemberhentian yang baik dan proses zombie.

**Jika tidak:** Ketika tidak ada sinyal yang dilewatkan, kode Anda tidak akan pernah diberi tahu tentang penghentian. Tanpa itu, kode Anda akan kehilangan kesempatan untuk berhenti dengan benar dan kehilangan permintaan dan/atau data dapat terjadi.

[**Baca selengkapnya: Bootstrap container using node command, avoid npm start**](./sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. Biarkan runtime Docker menangani replikasi dan uptime

**TL;DR:** Ketika menggunakan orkestrator run time Docker (misalnya Kubernetes), aktifkan proses Node.js seecara langsung tanpa manajer proses perantara atau kode khusus yang mereplikasi proses (misalnya PM2, modul Cluster). Platform runtime mempunyai jumlah data dan visibilitas tertinggi untuk membuat keputusan penempatan - Platform ini mengetahui dengan baik berapa banyak proses yang diperlukan, cara menyebarkannya dan apa yang harus dilakukan jika terjadi kerusakan

**Jika tidak:** Kontainer tetap rusak karena kekurangan sumber daya akan dimulai ulang tanpa batas oleh manajer proses. Jika Kubernetes menyadari hal ini, Kubernetes dapat memindahkannya ke banyak instance yang berbeda

🔗 [**Baca selengkapnya: Let the Docker orchestrator restart and replicate processes**](./sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. Gunakan .dockerignore untuk mencegah pembocoran rahasia

**TL;DR**: Sertakan file `.dockerignore` yang memfilter file rahasia umum dan artefak pengembangan. Dengan melakukan itu, Anda dapat mencegah kebocoran rahasia ke dalam gambar. Sebagai bonus waktu build akan berkurang secara signifikan. Pastikan juga untuk tidak menyalin semua file secara rekursif melainkan pilih file yang harus disalin ke Docker secara eksplisit

**Jika tidak**: File rahasia pribadi umum seperti `.env`, `.aws` dan `.npmrc` akan dibagikan dengan siapapun yang memiliki akses ke image (misalnya repositori Docker)

🔗 [**Baca selengkapnya: Use .dockerignore**](./sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. Bersihkan dependensi sebelum produksi

**TL;DR:** Meskipun dependensi pengembangan terkadang diperlukan selama siklus hidup build pengujian, pada akhirnya gambar yang dikirim ke produksi harus minimal dan bersih dari dependensi pengembangan. Hal tersebut dapat menjamin hanya kode yang diperlukan yang dikirim dan jumlah potensi serangan (misalnya attack surface) diminimalkan. Ketika menggunakan build multi tahap (lihat poin khusus) hal ini dapat dicapai dengan menginstal semua dependensi terlebih dahulu dan kemudian menjalankan `npm ci --production`

**Jika tidak:** Banyak penerobosan keamanan npm yang buruk ditemukan dalam paket pengembangan (misalnya [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 [\*\*Baca selengkapnya: Remove development dependencies](./sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. Matikan aplikasi dengan baik dan cerdas

**TL;DR:** Tangani proses event SIGTERM dan bersihkan semua koneksi dan sumber daya yang ada. Hal ini harus dilakukan sambil menanggapi permintaan yang sedang berlangsung. Dalam runtime Docker, mematikan kontainer bukanlah peristiwa yang jarang terjadi, melainkan sesuatu yang sering terjadi sebagai bagian dari pekerjaan rutin. Untuk mencapai hal ini, diperlukan beberapa kode yang baik untuk mengatur beberapa bagian yang bergerak: load balancer, koneksi keep-alive, server HTTP dan sumber daya lainnya

**Jika tidak:** Mematikan aplikasi secara langsung berarti tidak menanggapi ribuan pengguna yang kecewa

🔗 [**Baca selengkapnya: Graceful shutdown**](./sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. Tetapkan batas memori menggunakan Docker dan v8

**TL;DR:** Selalu konfigurasikan batas memori menggunakan Docker dan runtime flag JavaScript. Batas pada Docker diperlukan untuk membuat keputusan penempatan kontainer yang baik, flag `max-old-space` pada --v8 diperlukan untuk memulai GC tepat waktu untuk mencegah penggunaan memori yang kurang. Secara praktis, tetapkan batas memori `max-old-space` pada v8 sedikit lebih rendah dari pada batas memori kontainer

**Jika tidak:** Definisi Docker diperlukan untuk melakukan keputusan penskalaan yang baik dan mencegah kelaparan warga lain. Tanpa menentukan batas pada v8 juga, sumber daya kontainer juga akan kurang digunakan oleh Node - Tanpa instruksi eksplisit Node akan berhenti saat menggunakan ~50-60% dari sumber daya hostnya

🔗 [**Baca selengkapnya: Set memory limits using Docker only**](./sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. Rencanakan caching yang efisien

**TL;DR:** Membangun ulang seluruh image docker dari cache dapat dilakukan hampir seketika jika dilakukan dengan benar. Instruksi yang jarang diperbarui harus berada di atas Dockerfile Anda dan yang terus berubah (seperti kode app) harus berada di bawah.

**Jika tidak:** Build Docker akan sangat lama dan memakan banyak sumber daya bahkan saat melakukan perubahan kecil

🔗 [**Baca selengkapnya: Leverage caching to reduce build times**](./sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. Gunakan referensi gambar eksplisit, hindari tag `latest`

**TL;DR:** Tentukan `digest` eksplisit gambar atau label berversi, jangan pernah merujuk ke `latest`. Pengembang sering kali percaya bahwa menetapkan tag `latest` akan memberi mereka gambar terbaru di repositori namun hal ini tidak benar. Menggunakan `digest` menjamin bahwa setiap instansi layanan menjalankan kode yang sama persis.

Selain itu, merujuk ke sebuah tag gambar berarti gambar dasar dapat berubah, karena tag image tidak dapat diandalkan untuk penginstalan deterministik. Jika penginstalan deterministik diharapkan, digest SHA256 dapat digunakan untuk mereferensikan ke gambar yang tepat.

**Jika tidak:** Versi baru gambar dasar dapat dideploy ke produksi dengan perubahan yang dapat merusak, menyebabkan perilaku aplikasi yang tidak diinginkan.

🔗 [**Baca selengkapnya: Understand image tags and use the "latest" tag with caution**](./sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. Utamakan gambar dasar Docker yang lebih kecil

**TL;DR:** Gambar yang besar mempunyai tingkat kerentanan yang lebih tinggi dan meningkatkan konsumsi sumber daya. Menggunakan gambar docker yang lebih ramping, seperti varian Linux Slim dan Alpine, dapat mengurangi masalah ini.

**Jika tidak:** Membangun, mendorong, dan menarik gambar akan membutuhkan waktu yang lebih lama, vektor serangan yang tidak diketahui dapat digunakan oleh aktor jahat dan lebih banyak sumber daya yang dikonsumsi.

🔗 [**Baca selengkapnya: Prefer smaller images**](./sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. Bersihkan rahasia pada build-time, hindari rahasia di args

**TL;DR:** Hindari rahasia yang bocor dari lingkungan build Docker. Gambar Docker biasanya terbagi di beberapa lingkungan seperti CI dan registri yang tidak disterilkan seperti lingkungan produksi. Contoh tipikalnya adalah token npm yang biasanya diteruskan ke dockerfile sebagai argumen. Token ini tetap berada di dalam gambar lama setelah diperlukan dan memungkinkan penyerang mengakses tanpa batas ke registri npm pribadi. Hal ini dapat dihindari dengan mengatasi file rahasia seperti `.npmrc` dan kemudian menghapusnya menggunakan build mutli tahap (hati-hati, rahasia build juga harus dihapus) atau dengan menggunakan fitur rahasia build-kit Docker yang tidak meninggalkan jejak

**Jika tidak:** Setiap orang yang mempunyai akses ke CI dan registri Docker juga akan mendapatkan akses ke rahasia organisasi yang berharga sebagai bonus

🔗 [**Baca selengkapnya: Clean-out build-time secrets**](./sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. Pindai gambar untuk menemukan lapisan kerentanan

**TL;DR:** Selain memeriksa kerentanan kode dependensi pastikan juga untuk memindai gambar akhir yang dikirim ke produksi. Pemindai gambar Docker memeriksa kode dependensi tapi juga binari OS. Pemindaian keamanan E2E ini mencakup lebih banyak hal dan memverifikasi bahwa tidak ada orang jahat yang menginjeksi hal-hal buruk selama build. Oleh karena itu, disarankan untuk menjalankan hal ini sebagai langkah terakhir sebelum proses deployment. Ada beberapa pemindai gratis dan komersial yang juga menyediakan plugin CI/CD

**Jika tidak:** Kode Anda mungkin sepenuhnya bebas dari kerentanan. Namun itu mungkin masih dapat diretas karena versi binari OS-level yang rentan (misalnya OpenSSL, TarBall) yang biasanya digunakan oleh aplikasi

🔗 [**Baca selengkapnya: Generic Docker practices**](./sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 Bersihkan cache NODE_MODULE

**TL;DR:** Setelah menginstal dependensi dalam kontainer, hapus cache lokal. Tidak masuk akal untuk menduplikasi dependensi untuk penginstalan lebih cepat di masa mendatang karena tidak akan ada penginstalan lagi seterusnya - Image Docker tidak dapat diubah. Dengan menggunakan satu baris kode, puluhan MB (biasanya 10-50% dari ukuran gambar) dihilangkan

**Jika tidak:** Gambar yang akan dikirim ke produksi akan menjadi 30% lebih besar karena file yang tidak akan pernah digunakan

🔗 [**Baca selengkapnya: Clean NODE_MODULE cache**](./sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. Praktik Docker umum

**TL;DR:** Ini adalah kumpulan saran Docker yang tidak terkait langsung dengan Node.js - implementasi pada Node tidak jauh berbeda dengan bahasa lain. Klik baca selengkapnya untuk membaca sekilas.

🔗 [**Baca selengkapnya: Generic Docker practices**](./sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. Lint Dockerfile Anda

**TL;DR:** Melakukan lint pada Dockerfile Anda adalah langkah yang penting untuk mengidentifikasi masalah di Dockerfile Anda yang tidak ada di praktik terbaik. Dengan memeriksa potensi kekurangan menggunakan linter Docker khusus, peningkatan performa dan keamanan dapat dengan mudah diidentifikasi, menghemat waktu yang terbuang atau mengurangi masalah keamanan dalam kode produksi.

**Jika tidak:** Secara tidak sengaja pembuat Dockerfile meninggalkan Root sebagai pengguna produksi, dan juga menggunakan gambar dari repositori yang tidak dikenal. Hal ini dapat dihindari hanya dengan linter sederhana.

🔗 [**Baca selengkapnya: Lint your Dockerfile**](./sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# Tonggak Sejarah

Untuk menjaga panduan ini agar tetap mutakir, kami terus memperbarui dan meningkatkan pedoman dan praktik terbaik ini dengan bantuan komunitas. Anda dapat mengikuti [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) dan bergabung dalam kelompok kerja jika Anda ingin berkontribusi pada proyek ini

<br/>

## Terjemahan

Semua terjemahan merupakan kontribusi dari komunitas. Kami akan dengan senang hati mendapatkan bantuan baik untuk terjemahan yang telah selesai, sedang berlangsung atau yang baru!

### Terjemahan selesai

- ![BR](./assets/flags/BR.png) [Portugis Brazil](./README.brazilian-portuguese.md) - Terima kasih kepada [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](./assets/flags/CN.png) [Cina](./README.chinese.md) - Terima kasih kepada [Matt Jin](https://github.com/mattjin)
- ![RU](./assets/flags/RU.png) [Rusia](./README.russian.md) - Terima kasih kepada [Alex Ivanov](https://github.com/contributorpw)
- ![PL](./assets/flags/PL.png) [Polandia](./README.polish.md) - Terima kasih kepada [Michal Biesiada](https://github.com/mbiesiad)
- ![EU](./assets/flags/EU.png) [Basque](README.basque.md) - Terima kasih kepada [Ane Diaz de Tuesta](https://github.com/anediaz) & Joxefe Diaz de Tuesta

### Terjemahan dalam proses

- ![FR](./assets/flags/FR.png) [Prancis](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Diskusi](https://github.com/goldbergyoni/nodebestpractices/issues/129))
- ![HE](./assets/flags/HE.png) Ibrani ([Diskusi](https://github.com/goldbergyoni/nodebestpractices/issues/156))
- ![KR](./assets/flags/KR.png) [Korea](README.korean.md) - Terima kasih kepada [Sangbeom Han](https://github.com/uronly14me) ([Diskusi](https://github.com/goldbergyoni/nodebestpractices/issues/94))
- ![ES](./assets/flags/ES.png) [Spanyol](https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Diskusi](https://github.com/goldbergyoni/nodebestpractices/issues/95))
- ![TR](./assets/flags/TR.png) Turki ([Diskusi](https://github.com/goldbergyoni/nodebestpractices/issues/139))

<br/><br/>

## Komite Pengarah

Memperkenalkan anggota komite pengarah - orang-orang yang bekerja sama untuk memberikan panduan dan arahan masa depan proyek. Selain itu, setiap anggota komite memimpin proyek yang dilacak dalam [Github projects](https://github.com/goldbergyoni/nodebestpractices/projects) kami.

<img align="left" width="100" height="100" src="assets/images/members/yoni.png"/>

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Konsultan Node.js independen yang bekerja dengan pelanggan di AS, Eropa, dan Israel dalam membangun aplikasi Node.js berskala besar. Banyak praktik terbaik di atas pertama kali dipublikasikan di [goldbergyoni.com](https://goldbergyoni.com). Hubungi Yoni di [@goldbergyoni](https://github.com/goldbergyoni) atau [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png"/>

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 Engineer web full-stack, penggemar Node.js & GraphQL

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png"/>

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Pengembang Full Stack & Site Reliability Engineer yang berbasis di Selandia Baru, tertarik pada keamanan aplikasi web, dan merancang serta membangun aplikasi Node.js untuk bekerja dalam skala global.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png"/>

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Pengembang full-stack independen dengan selera untuk Ops dan otomatisasi.

<br/>

### Mantan Komite Pengarah

<img align="left" width="100" height="100" src="assets/images/members/sagir.png"/>

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Spesialis mendalam dalam JavaScript dan ekosistemnya — React, Node.js, TypeScript, GraphQL, MongoDB, hampir semua hal yang berhubungan dengan JS/JSON di setiap lapisan sistem — membuat produk menggunakan platform web untuk merek paling terkenal di dunia. Anggota perorangan dari Node.js Foundation.

<br/>

## Kolaborator

Terima kasih untuk semua kolaborator kami! 🙏

Kolaborator kami adalah anggota yang sering berkontribusi ke repositori ini, melalui menyarankan praktik terbaik baru, menyortir masalah, meninjau pull request dan banyak lagi. Jika Anda tertarik untuk membantu kami memandu ribuan orang untuk membuat aplikasi Node.js yang lebih baik, silakan baca [contributor guidelines](./.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"/></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"/></a> |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                                    [Ido Richter (Founder)](https://github.com/idori)                                    |                                        [Keith Holliday](https://github.com/TheHollidayInn)                                         |

### Mantan Kolaborator

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"/></a> |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                        [Refael Ackermann](https://github.com/refack)                                        |

<br/>

## Kontribusi

Jika Anda pernah ingin berkontribusi pada open source, sekarang kesempatan Anda! Lihat [contributing docs](.operations/CONTRIBUTING.md) untuk informasi lebih lanjut.

## Kontributor ✨

Terima kasih kepada orang-orang hebat ini yang telah berkontribusi pada repositori ini!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4" width="100px;" alt="Kevin Rambaud"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4" width="100px;" alt="Michael Fine"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4" width="100px;" alt="Shreya Dahal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4" width="100px;" alt="Matheus Cruz Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4" width="100px;" alt="Yog Mehta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4" width="100px;" alt="Kudakwashe Paradzayi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4" width="100px;" alt="t1st3"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4" width="100px;" alt="mulijordan1976"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4" width="100px;" alt="Matan Kushner"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4" width="100px;" alt="Fabio Hiroki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4" width="100px;" alt="James Sumners"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4" width="100px;" alt="Dan Gamble"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4" width="100px;" alt="PJ Trainor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4" width="100px;" alt="Remek Ambroziak"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4" width="100px;" alt="Yoni Jah"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4" width="100px;" alt="Misha Khokhlov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4" width="100px;" alt="Evgeny Orekhov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4" width="100px;" alt="-"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4" width="100px;" alt="Isaac Halvorson"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4" width="100px;" alt="Vedran Karačić"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4" width="100px;" alt="lallenlowe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4" width="100px;" alt="Nathan Wells"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4" width="100px;" alt="Paulo Reis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4" width="100px;" alt="syzer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4" width="100px;" alt="David Sancho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4" width="100px;" alt="Robert Manolea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4" width="100px;" alt="Xavier Ho"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4" width="100px;" alt="Aaron"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4" width="100px;" alt="Jan Charles Maghirang Adona"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4" width="100px;" alt="Allen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4" width="100px;" alt="Leonardo Villela"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4" width="100px;" alt="Michał Załęcki"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4" width="100px;" alt="Chris Nicola"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4" width="100px;" alt="Alejandro Corredor"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4" width="100px;" alt="cwar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4" width="100px;" alt="Yuwei"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4" width="100px;" alt="Utkarsh Bhatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4" width="100px;" alt="Duarte Mendes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4" width="100px;" alt="Jason Kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4" width="100px;" alt="Mitja O."style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4" width="100px;" alt="Sandro Miguel Marques"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4" width="100px;" alt="Gabe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4" width="100px;" alt="Ron Gross"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4" width="100px;" alt="Valeri Karpov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4" width="100px;" alt="Sergio Bernal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4" width="100px;" alt="Nikola Telkedzhiev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4" width="100px;" alt="Vitor Godoy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4" width="100px;" alt="Manish Saraan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4" width="100px;" alt="Sangbeom Han"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4" width="100px;" alt="blackmatch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4" width="100px;" alt="Joe Reeve"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4" width="100px;" alt="Ryan Busby"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4" width="100px;" alt="Iman Mohamadi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4" width="100px;" alt="Sergii Paryzhskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4" width="100px;" alt="Kapil Patel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4" width="100px;" alt="迷渡"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4" width="100px;" alt="Hozefa"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4" width="100px;" alt="Ethan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4" width="100px;" alt="Sam"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4" width="100px;" alt="Arlind"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4" width="100px;" alt="Teddy Toussaint"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4" width="100px;" alt="Lewis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4" width="100px;" alt="Gabriel Lidenor "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4" width="100px;" alt="Roman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4" width="100px;" alt="Francozeira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4" width="100px;" alt="Invvard"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4" width="100px;" alt="Rômulo Garofalo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4" width="100px;" alt="Tho Q Luong"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4" width="100px;" alt="Burak Shen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4" width="100px;" alt="Martin Muzatko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4" width="100px;" alt="Jared Collier"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4" width="100px;" alt="Hilton Meyer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4" width="100px;" alt="ChangJoo Park(박창주)"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4" width="100px;" alt="Masahiro Sakaguchi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4" width="100px;" alt="Keith Holliday"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4" width="100px;" alt="coreyc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4" width="100px;" alt="Maximilian Berkmann"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4" width="100px;" alt="Douglas Mariano Valero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4" width="100px;" alt="Marcelo Melo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4" width="100px;" alt="Mehmet Perk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4" width="100px;" alt="ryan ouyang"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4" width="100px;" alt="Shabeer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4" width="100px;" alt="Eduard Kyvenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4" width="100px;" alt="Deyvison Rocha"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4" width="100px;" alt="George Mamer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4" width="100px;" alt="Konstantinos Leimonis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4" width="100px;" alt="Oliver Lluberes"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4" width="100px;" alt="Tien Do"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4" width="100px;" alt="Ranvir Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4" width="100px;" alt="Vadim Nicolaev"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4" width="100px;" alt="German Gamboa Gonzalez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4" width="100px;" alt="Hafez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4" width="100px;" alt="Chandiran"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4" width="100px;" alt="VinayaSathyanarayana"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4" width="100px;" alt="Kim Kern"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4" width="100px;" alt="Kenneth Freitas"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4" width="100px;" alt="songe"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4" width="100px;" alt="Kirill Shekhovtsov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4" width="100px;" alt="Serge"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4" width="100px;" alt="keyrwinz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4" width="100px;" alt="Dmitry Nikitenko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4" width="100px;" alt="bushuai"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4" width="100px;" alt="Benjamin Gruenbaum"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4" width="100px;" alt="Ezequiel"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4" width="100px;" alt="Juan José Rodríguez"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4" width="100px;" alt="Or Bin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4" width="100px;" alt="Andreo Vieira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4" width="100px;" alt="Michael Solomon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4" width="100px;" alt="Jimmy Callin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4" width="100px;" alt="Siddharth"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4" width="100px;" alt="Ryan Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4" width="100px;" alt="Tom Boettger"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4" width="100px;" alt="Joaquín Ormaechea"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4" width="100px;" alt="dfrzuz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4" width="100px;" alt="Victor Homyakov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4" width="100px;" alt="Josh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4" width="100px;" alt="Alec Francis"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4" width="100px;" alt="arjun6610"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4" width="100px;" alt="Jan Osch"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4" width="100px;" alt="Thiago Rotondo Sampaio"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4" width="100px;" alt="Alexsey"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4" width="100px;" alt="Luis A. Acurero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4" width="100px;" alt="Lucas Romano"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4" width="100px;" alt="Denise Case"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4" width="100px;" alt="Nick Ribal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Aelektronik2k5" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4" width="100px;" alt="0xflotus"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4" width="100px;" alt="Jonathan Chen"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4" width="100px;" alt="Dilan Srilal"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4" width="100px;" alt="vladthelittleone"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4" width="100px;" alt="Nik Osvalds"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4" width="100px;" alt="Daniel Kiss"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/forresst17"><img src="https://avatars2.githubusercontent.com/u/163352?v=4" width="100px;" alt="Forresst"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Forresst</b></sub></a><br /><a href="#content-forresst" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/svenheden"><img src="https://avatars1.githubusercontent.com/u/76098?v=4" width="100px;" alt="Jonathan Svenheden"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Jonathan Svenheden</b></sub></a><br /><a href="#content-svenheden" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/AustrisC"><img src="https://avatars2.githubusercontent.com/u/12381652?v=4" width="100px;" alt="AustrisC"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>AustrisC</b></sub></a><br /><a href="#content-AustrisC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/cisco0808"><img src="https://avatars0.githubusercontent.com/u/60251188?v=4" width="100px;" alt="kyeongtae kim"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kyeongtae kim</b></sub></a><br /><a href="#translation-cisco0808" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://keybase.io/651z9pz968v2accj"><img src="https://avatars.githubusercontent.com/u/65741741?v=4" width="100px;" alt="007"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>007</b></sub></a><br /><a href="#content-6gx7iycn53ioq2e8apk1j1ypwov4giui" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.anediaz.com"><img src="https://avatars.githubusercontent.com/u/17216937?v=4" width="100px;" alt="Ane Diaz de Tuesta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Ane Diaz de Tuesta</b></sub></a><br /><a href="#translation-anediaz" title="Translation">🌍</a> <a href="#content-anediaz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://yukioh.net"><img src="https://avatars.githubusercontent.com/u/23182489?v=4" width="100px;" alt="YukiOta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>YukiOta</b></sub></a><br /><a href="#translation-YukiOta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yeovilhospital.co.uk/"><img src="https://avatars.githubusercontent.com/u/43814140?v=4" width="100px;" alt="Frazer Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Frazer Smith</b></sub></a><br /><a href="#content-Fdawgs" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rluvaton"><img src="https://avatars.githubusercontent.com/u/16746759?v=4" width="100px;" alt="Raz Luvaton"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Raz Luvaton</b></sub></a><br /><a href="#content-rluvaton" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/YA21"><img src="https://avatars.githubusercontent.com/u/37298463?v=4" width="100px;" alt="Yuta Azumi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yuta Azumi</b></sub></a><br /><a href="#content-YA21" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andrewjbarbour"><img src="https://avatars.githubusercontent.com/u/77080074?v=4" width="100px;" alt="andrewjbarbour"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>andrewjbarbour</b></sub></a><br /><a href="#content-andrewjbarbour" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://MasujimaRyohei.jp"><img src="https://avatars.githubusercontent.com/u/17163541?v=4" width="100px;" alt="mr"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>mr</b></sub></a><br /><a href="#content-MasujimaRyohei" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kubanac95"><img src="https://avatars.githubusercontent.com/u/16191931?v=4" width="100px;" alt="Aleksandar"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Aleksandar</b></sub></a><br /><a href="#content-kubanac95" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://vincentjonathan.com"><img src="https://avatars.githubusercontent.com/u/32597776?v=4" width="100px;" alt="Owl"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Owl</b></sub></a><br /><a href="#content-SuspiciousLookingOwl" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/yedidyas"><img src="https://avatars.githubusercontent.com/u/36074789?v=4" width="100px;" alt="Yedidya Schwartz"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yedidya Schwartz</b></sub></a><br /><a href="#content-yedidyas" title="Content">🖋</a> <a href="#example-yedidyas" title="Examples">💡</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ariel-diaz"><img src="https://avatars.githubusercontent.com/u/20423540?v=4" width="100px;" alt="ari"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>ari</b></sub></a><br /><a href="#content-ariel-diaz" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="http://www.koenigthomas.de/"><img src="https://avatars.githubusercontent.com/u/7080389?v=4" width="100px;" alt="Thomas König"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Thomas König</b></sub></a><br /><a href="#content-Vispercept" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/coocos"><img src="https://avatars.githubusercontent.com/u/1397804?v=4" width="100px;" alt="Kalle Lämsä"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kalle Lämsä</b></sub></a><br /><a href="#content-coocos" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://math.cat"><img src="https://avatars.githubusercontent.com/u/10328430?v=4" width="100px;" alt="Wyatt"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Wyatt</b></sub></a><br /><a href="#content-ZhyMC" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://libkhadir.fr"><img src="https://avatars.githubusercontent.com/u/45130488?v=4" width="100px;" alt="KHADIR Tayeb"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>KHADIR Tayeb</b></sub></a><br /><a href="#content-tkhadir" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/shankarregmi"><img src="https://avatars.githubusercontent.com/u/7703345?v=4" width="100px;" alt="Shankar Regmi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shankar Regmi</b></sub></a><br /><a href="#content-shankarregmi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/codebyshubham"><img src="https://avatars.githubusercontent.com/u/10389723?v=4" width="100px;" alt="Shubham"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shubham</b></sub></a><br /><a href="#content-codebyshubham" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://lucalves.me/"><img src="https://avatars.githubusercontent.com/u/17712401?v=4" width="100px;" alt="Lucas Alves"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Lucas Alves</b></sub></a><br /><a href="#content-lucalves" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/benjaminudoh10"><img src="https://avatars.githubusercontent.com/u/9018331?v=4" width="100px;" alt="Benjamin"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin</b></sub></a><br /><a href="#content-benjaminudoh10" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.yjoer.com"><img src="https://avatars.githubusercontent.com/u/47742486?v=4" width="100px;" alt="Yeoh Joer"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Yeoh Joer</b></sub></a><br /><a href="#content-yjoer" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://blog.miigon.net"><img src="https://avatars.githubusercontent.com/u/16161991?v=4" width="100px;" alt="Miigon"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Miigon</b></sub></a><br /><a href="#content-Miigon" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://brainstorage.me/Egregor2011"><img src="https://avatars.githubusercontent.com/u/3630318?v=4" width="100px;" alt="Rostislav Bogorad"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rostislav Bogorad</b></sub></a><br /><a href="#content-Egregor2011" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Flouse"><img src="https://avatars.githubusercontent.com/u/1297478?v=4" width="100px;" alt="Flouse"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Flouse</b></sub></a><br /><a href="#content-Flouse" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://taranttini.com"><img src="https://avatars.githubusercontent.com/u/6922125?v=4" width="100px;" alt="Tarantini Pereira"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Tarantini Pereira</b></sub></a><br /><a href="#content-taranttini" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kzmat"><img src="https://avatars.githubusercontent.com/u/34614358?v=4" width="100px;" alt="Kazuki Matsuo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kazuki Matsuo</b></sub></a><br /><a href="#content-kzmat" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/burkybang"><img src="https://avatars.githubusercontent.com/u/927886?v=4" width="100px;" alt="Adam Smith"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Adam Smith</b></sub></a><br /><a href="#content-burkybang" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://codekodo.tistory.com"><img src="https://avatars.githubusercontent.com/u/33795856?v=4" width="100px;" alt="Dohyeon Ko"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Dohyeon Ko</b></sub></a><br /><a href="#content-k906506" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/vlad99902"><img src="https://avatars.githubusercontent.com/u/67615003?v=4" width="100px;" alt="Vladislav Legkov"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Vladislav Legkov</b></sub></a><br /><a href="#content-vlad99902" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://kerolloz.github.io"><img src="https://avatars.githubusercontent.com/u/36763164?v=4" width="100px;" alt="Kerollos Magdy"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Kerollos Magdy</b></sub></a><br /><a href="#content-kerolloz" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/erez-lieberman-b90b7219/"><img src="https://avatars.githubusercontent.com/u/3277260?v=4" width="100px;" alt="Erez Lieberman"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Erez Lieberman</b></sub></a><br /><a href="#content-erezLieberman" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/breno-macedo-ernani-de-s%C3%A1-110223158/"><img src="https://avatars.githubusercontent.com/u/48841329?v=4" width="100px;" alt="Breno Macedo"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Breno Macedo</b></sub></a><br /><a href="#content-breno404" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/JFernando122"><img src="https://avatars.githubusercontent.com/u/40414805?v=4" width="100px;" alt="Fernando Flores"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fernando Flores</b></sub></a><br /><a href="#translation-JFernando122" title="Translation">🌍</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://www.linkedin.com/in/rafaelconcept/"><img src="https://avatars.githubusercontent.com/u/43880669?v=4" width="100px;" alt="Rafael Brito"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Rafael Brito</b></sub></a><br /><a href="#translation-rafaelconcept" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://emiliano-peralta-portfolio.vercel.app/"><img src="https://avatars.githubusercontent.com/u/63617637?v=4" width="100px;" alt="Emiliano Peralta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Emiliano Peralta</b></sub></a><br /><a href="#translation-emiperalta" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://lannex.github.io"><img src="https://avatars.githubusercontent.com/u/7369541?v=4" width="100px;" alt="Shin, SJ"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Shin, SJ</b></sub></a><br /><a href="#content-lannex" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.benjaminforster.com"><img src="https://avatars.githubusercontent.com/u/12589522?v=4" width="100px;" alt="Benjamin Forster"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Benjamin Forster</b></sub></a><br /><a href="#content-e-e-e" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/DanieleFedeli"><img src="https://avatars.githubusercontent.com/u/37077048?v=4" width="100px;" alt="Daniele Fedeli"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Daniele Fedeli</b></sub></a><br /><a href="#content-DanieleFedeli" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/djob195"><img src="https://avatars.githubusercontent.com/u/17146669?v=4" width="100px;" alt="djob195"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>djob195</b></sub></a><br /><a href="#content-djob195" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/antspk"><img src="https://avatars.githubusercontent.com/u/78955792?v=4" width="100px;" alt="antspk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>antspk</b></sub></a><br /><a href="#content-antspk" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://jjy0821.tistory.com/"><img src="https://avatars.githubusercontent.com/u/88075341?v=4" width="100px;" alt="정진영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>정진영</b></sub></a><br /><a href="#content-jjy821" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/kkk-cashwalk"><img src="https://avatars.githubusercontent.com/u/91455122?v=4" width="100px;" alt="kkk-cashwalk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>kkk-cashwalk</b></sub></a><br /><a href="#content-kkk-cashwalk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/apainintheneck"><img src="https://avatars.githubusercontent.com/u/42982186?v=4" width="100px;" alt="apainintheneck"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>apainintheneck</b></sub></a><br /><a href="#content-apainintheneck" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/koyanyaroo"><img src="https://avatars.githubusercontent.com/u/9715368?v=4" width="100px;" alt="Fajar Budhi Iswanda"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Fajar Budhi Iswanda</b></sub></a><br /><a href="#content-koyanyaroo" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/jutiger"><img src="https://avatars.githubusercontent.com/u/97490806?v=4" width="100px;" alt="이주호"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>이주호</b></sub></a><br /><a href="#content-jutiger" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/MisterSingh"><img src="https://avatars.githubusercontent.com/u/44462019?v=4" width="100px;" alt="Singh"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Singh</b></sub></a><br /><a href="#content-MisterSingh" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Alex-Dumitru"><img src="https://avatars.githubusercontent.com/u/43738450?v=4" width="100px;" alt="Alex Dumitru"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Alex Dumitru</b></sub></a><br /><a href="#content-Alex-Dumitru" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/lykhatskyi"><img src="https://avatars.githubusercontent.com/u/18104686?v=4" width="100px;" alt="Anton Lykhatskyi"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Anton Lykhatskyi</b></sub></a><br /><a href="#content-lykhatskyi" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/EverythingAvailable"><img src="https://avatars.githubusercontent.com/u/81002379?v=4" width="100px;" alt="sangwonlee"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>sangwonlee</b></sub></a><br /><a href="#content-EverythingAvailable" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/euberdeveloper"><img src="https://avatars.githubusercontent.com/u/33126163?v=4" width="100px;" alt="Eugenio Berretta"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Eugenio Berretta</b></sub></a><br /><a href="#content-euberdeveloper" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/soranakk"><img src="https://avatars.githubusercontent.com/u/3930307?v=4" width="100px;" alt="soranakk"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>soranakk</b></sub></a><br /><a href="#content-soranakk" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/backend-joonyoung"><img src="https://avatars.githubusercontent.com/u/94430145?v=4" width="100px;" alt="고준영"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>고준영</b></sub></a><br /><a href="#content-backend-joonyoung" title="Content">🖋</a> <a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=backend-joonyoung" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/GuilhermePortella"><img src="https://avatars.githubusercontent.com/u/59876059?v=4" width="100px;" alt="Guilherme Portella "style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Guilherme Portella </b></sub></a><br /><a href="#content-GuilhermePortella" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.youtube.com/channel/UCBxzOQd2v9wWfiMDrf_RQ7A"><img src="https://avatars.githubusercontent.com/u/18497570?v=4" width="100px;" alt="André Esser"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>André Esser</b></sub></a><br /><a href="#content-Esser50K" title="Content">🖋</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/ShiChenCong"><img src="https://avatars.githubusercontent.com/u/22486446?v=4" width="100px;" alt="Scc"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Scc</b></sub></a><br /><a href="#translation-ShiChenCong" title="Translation">🌍</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://www.mauroaccornero.it"><img src="https://avatars.githubusercontent.com/u/1875822?v=4" width="100px;" alt="Mauro Accornero"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>Mauro Accornero</b></sub></a><br /><a href="#content-mauroaccornero" title="Content">🖋</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/no-yan"><img src="https://avatars.githubusercontent.com/u/63000297?v=4" width="100px;" alt="no-yan"style="max-width:100px;min-width:100px;" /><br /><sub style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"><b>no-yan</b></sub></a><br /><a href="#content-no-yan" title="Content">🖋</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

[✔]: assets/images/checkbox-small-blue.png

# Praktik Terbaik Node.js

<h1 align="center">
  <img src="assets/images/banner-2.jpg" alt="Praktik Terbaik Node.js">
</h1>

<br/>

<div align="center">
  <img src="https://img.shields.io/badge/⚙%20Item%20count%20-%20102%20Best%20Practices-blue.svg" alt="102 item"> <img src="https://img.shields.io/badge/%F0%9F%93%85%20Last%20update%20-%20December%2012%202020-green.svg" alt="Pembaruan terakhir: November, 2020"> <img src="https://img.shields.io/badge/ %E2%9C%94%20Updated%20For%20Version%20-%20Node%2014.0.0-brightgreen.svg" alt="Diperbarui untuk Node 14.0.0">
</div>

<br/>

[![nodepractices](/assets/images/twitter-s.png)](https://twitter.com/nodepractices/) **Ikuti kami di Twitter!** [**@nodepractices**](https://twitter.com/nodepractices/)

<br/>

Baca dalam bahasa yang berbeda: [![CN](/assets/flags/CN.png)**CN**](/README.chinese.md), [![BR](/assets/flags/BR.png)**BR**](/README.brazilian-portuguese.md), [![RU](/assets/flags/RU.png)**RU**](/README.russian.md), [![PL](/assets/flags/PL.png)**PL**](/README.polish.md) [(![ES](/assets/flags/ES.png)**ES**, ![FR](/assets/flags/FR.png)**FR**, ![HE](/assets/flags/HE.png)**HE**, ![KR](/assets/flags/KR.png)**KR** and ![TR](/assets/flags/TR.png)**TR** dalam proses!)](#translations)

<br/>

###### Dibuat dan dijaga oleh [Steering Committee](#steering-committee) dan [kolaborator](#Kolaborator)

# Praktik Terbaik Terbaru dan Berita

- **✅ Praktik terbaik baru:** Poin 2.12 oleh [Alexsey](https://github.com/Alexsey) menunjukkan bagimana melakukan return tanpa await ke fungsi asinkron dapat mengarah ke _stacktraces_ parsial. Ini dapat menjadi masalah besar saat melakukan pemecahan masalah exception di produksi yang kekurangan beberapa bingkai eksekusi

- **✅ Praktik terbaik baru:** Poin 6.8 oleh Josh Hemphill menyarankan "Protect Users' Passwords/Secrets using BCrypt or Script". Ini mengandung penjelasan secara mendalam tentang kapan dan kenapa setiap opsi sesuai untuk proyek tertentu. Jangan lewatkan panduan singkat ini dengan gambaran singkat tentang berbagai opsi hashing

- **:whale: Praktik terbaik Node.js + Docker**: Kami baru saja merilis seksi Docker dengan Node.js yang mengandung 15 poin tentang teknik pengkodean yang lebih baik dengan Docker

<br/><br/>

# Selamat Datang! 3 Hal Yang Harus Anda Ketahui

**1. Anda sedang membaca berbagai artikel Node.js terbaik -** repository ini adalah ringkasan and kurasi dari konten peringkat teratas dalam praktik terbaik Node.js, serta konten yang ditulis oleh kolaborator

**2. Ini adalah kompilasi terbesar, dan berkembang tiap minggu -** saat ini, lebih dari 80 praktik terbaik, panduan gaya, dan tips arsitektural tersajikan. Issue baru dan pull request dibuat setiap hari agar kontennya tetap diperbarui. Kami senang melihat Anda berkontribusi disini, maupun itu memperbaiki kesalahan kode, membantu dalam terjemahan, atau menyarankan ide cemerlang yang baru. Lihat [pedoman menulis](/.operations/writing-guidelines.md) kami

**3. Praktik terbaik mempunyai informasi tambahan -** kebanyakan poin mempunyai tautan **🔗Baca selengkapnya** yang memperluas praktiknya dengan contoh kode, kutipan dari blog terpilih, and informasi lebih lanjut

<br/><br/>

## Daftar Isi

1. [Praktik Struktur Proyek (5)](#1-praktik-struktur-proyek)
2. [Praktik Penanganan Kesalahan (11) ](#2-praktik-penanganan-kesalahan)
3. [Praktik Gaya Kode (12) ](#3-praktik-gaya-kode)
4. [Praktik Pengujian dan Kualitas Secara Keseluruhan (13) ](#4-praktik-pengujian-dan-kualitas-secara-keseluruhan )
5. [Praktik Dalam Produksi(19) ](#5-going-to-production-practices)
6. [Praktik Keamanan (25)](#6-security-best-practices)
7. [Praktik Peforma (2) (Pekerjaan Dalam Proses ✍️)](#7-draft-performance-best-practices)
8. [Praktik Docker (15)](#8-docker-best-practices)

<br/><br/>

# `1. Praktik Struktur Proyek`

## ![✔] 1.1 Susun solusi Anda berdasarkan komponen

**TL;DR:** Masalah terburuk pada aplikasi besar adalah mengurus basis kode yang sangat besar dengan ratusan dependensi - monolit seperti itu memperlambat pengembang saat mereka mencoba untuk menambahkan fitur baru. Sebaiknya, partisi kode Anda menjadi beberapa komponen, setiap komponen mendapatkan foldernya sendiri atau basis kode tersendiri, dan pastikan setiap unit untuk tetap kecil dan sederhana. Kunjungi 'Baca selengkapnya' di bawah ini untuk melihat contoh struktur proyek yang benar

**Jika tidak:** Saat pengembang yang menambahkan fitur baru kesusahan untuk melihat dampak dari perubahan mereka dan takut akan merusak komponen lain yang bergantung - _deployments_ menjadi lebih lambat dan berisiko. Kode juga dianggap lebih sulit untuk dikembangkan ketika semua unit bisnis tidak dipisahkan

🔗 [**Baca selengkapnya: structure by components**](/sections/projectstructre/breakintcomponents.md)

<br/><br/>

## ![✔] 1.2 Lapisi komponen Anda, pastikan lapisan web tetap dalam batasannya

**TL;DR:** Setiap komponen harus mengandung 'lapisan' - objek khusus untuk web, logika, dan kode akses data. Hal ini tidak hanya menggambarkan _separation of concerns_ dengan jelas namun juga memudahkan _mocking_ and pengujian sistem. Meskipun ini adalah pola yang sangan umum, pengembang API cenderung mencampur lapisan dengan meneruskan objek lapisan web (misalnya Express req, res) ke logika bisnis dan lapisan data - ini membuat aplikasi Anda bergantung dan hanya bisa diakses oleh frameworks web tertentu

**Jika tidak:** Aplikasi yang menggabungkan objek web dengan lapisan lain tidak dapat diakses oleh kode test, CRON jobs, triggers dari message queues, dll.

🔗 [**Baca selengkapnya: layer your app**](/sections/projectstructre/createlayers.md)

<br/><br/>

## ![✔] 1.3 Bungkus utilitas umum sebagai paket npm

**TL;DR:** Pada aplikasi besar yang memiliki basis kode yang besar, utilitas _cross-cutting-concern_ seperti logger, enkripsi and yang serupa, harus dibungkus oleh kode Anda dan terekspos sebagai paket npm tersendiri. Ini memungkinkan untuk membagikan utilitas tersebut di antara beberapa basis kode dan proyek

**Jika tidak:** Anda harus membuat cara _deployment_ dan _dependency_ Anda sendiri

🔗 [**Baca selengkapnya: Structure by feature**](/sections/projectstructre/wraputilities.md)

<br/><br/>

## ![✔] 1.4 Pisahkan 'app' dan 'server' Express

**TL;DR:** Hindari kebiasaan buruk dalam mendefinisikan seluruh aplikasi [Express](https://expressjs.com/) dalam satu file besar - pisahkan definisi 'Express' Anda menjadi setidaknya dua file: deklarasi untuk API (app.js) dan untuk jaringan (WWW). Untuk struktur yang lebih baik lagi, letak deklarasi API Anda di dalam komponen

**Jika tidak:** API Anda hanya dapat diakses untuk pengujian melalui panggilan HTTP (lebih lambat and lebih susah untuk membuat laporan cakupan pengujian). Mengurus ratusan baris kode dalam satu file mungkin bukanlah hal yang menyenangkan

🔗 [**Baca selengkapnya: separate Express 'app' and 'server'**](/sections/projectstructre/separateexpress.md)

<br/><br/>

## ![✔] 1.5 Gunakan konfigurasi yang sadar atas lingkungan, aman dan hierarkis

**TL;DR:** Pengaturan konfigurasi yang sempurna harus memastikan (a) kunci dapat dibaca dari file DAN dari variabel lingkungan (b) rahasia disimpan di luar kode (c) konfigurasi bersifat hierarkis agar mudah ditemukan. Ada beberapa paket yang dapat mempermudah pengaturan tersebut seperti [rc](https://www.npmjs.com/package/rc), [nconf](https://www.npmjs.com/package/nconf), [config](https://www.npmjs.com/package/config), dan [convict](https://www.npmjs.com/package/convict).

**Jika tidak:** Gagal untuk memenuhi salah satu persyaratan konfigurasi hanya akan menghambat tim pengembang atau DevOps. Mungkin keduanya

🔗 [**Baca selengkapnya: configuration best practices**](/sections/projectstructre/configguide.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `2. Praktik Penanganan Kesalahan`

## ![✔] 2.1 Gunakan Async-Await atau promise untuk penanganan kesalahan asinkron

**TL;DR:** Menangani kesalahan asinkron dalam panggilan balik mungkin adalah cara terburuk (a.k.a the pyramid of doom). Hal terbaik yang dapat Anda berikan ke kode Anda adalah dengan menggunakan pustaka promise dengan reputasi yang baik atau gunakan async-await yang membuat sintaks kode menjadi lebih ringkas dan familier seperti try-catch

**Jika tidak:** Gaya panggilan balik Node.js, function(err, response), adalah cara yang menjanjikan untuk kode yang tidak dapat dipelihara karena campuran dari penanganan kesalahan dengan kode kasual, bersarang yang berlebihan, dan pola pengkodean yang canggung

🔗 [**Baca selengkapnya: avoiding callbacks**](/sections/errorhandling/asyncerrorhandling.md)

<br/><br/>

## ![✔] 2.2 Gunakan hanya objek Error bawaan

**TL;DR:** Banyak pengembang melempar error sebagai string atau tipe khusus – ini mempersulit logika penanganan kesalahan dan interoperabilitas antar modul. Maupun Anda menolak sebuah _promise_, melontarkan sebuah pengecualian atau mengeluarkan error – dengan hanya menggunakan objek Error bawaan (atau objek yang memperluas objek Error bawaan) dapat meningkatkan keseragaman dan mencegah hilangnya informasi

**Jika tidak:** Saat menjalankan beberapa komponen, karena tidak yakin jenis kesalahan yang akan di lempar – ini membuat penanganan kesalahan yang benar jauh lebih sulit. Lebih buruk lagi, menggunakan tipe khusus untuk mendeskripsikan kesalahan dapat menyebabkan hilangnya informasi kesalahan kritis seperti _stack trace_!

🔗 [**Baca selengkapnya: using the built-in error object**](/sections/errorhandling/useonlythebuiltinerror.md)

<br/><br/>

## ![✔] 2.3 Membedakan kesalahan operasional dan kesalahan pengembang

**TL;DR:** Kesalahan operasional (contohnya API menerima masukan yang tidak valid) merupakan kasus kesalahan yang diketahui di mana dampak dari kesalahannya dapat dipahami sepenuhnya dan dapat ditangani dengan cermat. Di sisi lain, kesalahan pengembang (contohnya mencoba membaca variabel yang tidak ditentukan) merupakan kegagalan kode yang tidak diketahui yang menentukan untuk memulai ulang aplikasi dengan baik

**Jika tidak:** Anda selalu dapat memulai ulang aplikasi Anda ketika kesalahan muncul, namun kenapa mengecewakan ~5000 pengguna hanya karena kesalahan operasional yang kecil dan dapat diprediksi? hal sebaliknya juga tidak ideal – membiarkan aplikasi tetap berjalan ketika terdapat kesalahan yang tidak diketahui (kesalahan oleh pengembang) dapat menyebabkan perilaku yang tidak terduga. Membedakan kedua kesalahan tersebut memungkinkan untuk melakukan tindakan yang benar dan menerapkan cara penyelesaian masalah yang sesuai dengan konteks yang diberikan

🔗 [**Baca selengkapnya: operational vs programmer error**](/sections/errorhandling/operationalvsprogrammererror.md)

<br/><br/>

## ![✔] 2.4 Tangani kesalahan secara terpusat, bukan dalam middleware

**TL;DR:** Logika penanganan kesalahan seperti pengiriman pesan ke admin dan pencatatan harus dikemas dalam objek khusus dan terpusat yang dipanggil oleh semua endpoint (contohnya middleware Express, pekerjaan cron, pengujian unit) ketika ada kesalahan

**Jika tidak:** Tidak menangani kesalahan dalam satu tempat akan menyebabkan duplikasi kode dan mungkin kesalahan yang tidak ditangani dengan tepat

🔗 [**Baca selengkapnya: handling errors in a centralized place**](/sections/errorhandling/centralizedhandling.md)

<br/><br/>

## ![✔] 2.5 Mendokumentasikan kesalahan API menggunakan Swagger atau GraphQL

**TL;DR:** Beri tahu pemanggil API Anda kesalahan apa yang mungkin dapat diterima sehingga mereka dapat menanganinya dengan baik tanpa merusak aplikasinya. Untuk API RESTful, hal ini biasanya dilakukan dengan framework dokumentasi seperti Swagger. Jika Anda menggunakan GraphQL, Anda juga dapat memanfaatkan skema dan komentar.

**Jika tidak:** Klien API mungkin memutuskan untuk memberhentikan aplikasi dan memulai ulang hanya karena menerima kesalahan yang tidak dapat dipahami. Catatan: pemanggil API mungkin adalah Anda (sangat umum dalam lingkungan _microservice_)

🔗 [**Baca selengkapnya: documenting API errors in Swagger or GraphQL**](/sections/errorhandling/documentingusingswagger.md)

<br/><br/>

## ![✔] 2.6 Hentikan proses dengan benar ketika orang asing datang ke kota

**TL;DR:** Ketika terjadi kesalahan yang tidak diketahui (kesalahan pengembang, lihat praktik terbaik 2.3) - ada ketidakpastian tentang kesehatan aplikasi. Praktik umum menyarankan untuk memulai kembali proses dengan hati-hati menggunakan alat manajemen proses seperti [Forever](https://www.npmjs.com/package/forever) atau [PM2](http://pm2.keymetrics.io/)

**Jika tidak:** Ketika pengecualian yang tidak dikenal terjadi, beberapa objek mungkin dalam keadaan rusak (contohnya event emitter yang digunakan secara global dan tidak dapat mengaktifkan event lagi karena kesalahan internal) dan semua panggilan yang akan datang mungkin akan gagal atau tidak berperilaku dengan normal

🔗 [**Baca selengkapnya: shutting the process**](/sections/errorhandling/shuttingtheprocess.md)

<br/><br/>

## ![✔] 2.7 Gunakan alat pencatat yang baik untuk meningkatkan visibilitas kesehatan

**TL;DR:** Satu set alat pencatat yang baik seperti [Pino](https://github.com/pinojs/pino) atau [Log4js](https://www.npmjs.com/package/log4js), akan mempercepat penemuan dan pemahaman suatu kesalahan. Jadi tinggalkan console.log

**Jika tidak:** Melihat beberapa console.log atau secara manual melalui file teks yang berantakan tanpa alat kueri atau penampil catatan yang baik dapat membuat Anda sibuk di tempat kerja hingga larut

🔗 [**Baca selengkapnya: using a mature logger**](/sections/errorhandling/usematurelogger.md)

<br/><br/>

## ![✔] 2.8 Uji aliran kesalahan menggunakan framework pengujian favorit Anda

**TL;DR:** Maupun itu QA otomatis profesional ataupun pengujian manual oleh pengembang – Pastikan bahwa kode Anda tidak hanya memenuhi skenario positif namun juga menangani dan mengembalikan jenis kesalahan yang tepat. Framework testing seperti Mocha & Chai dapat menangani ini dengan mudah (lihat contoh kode dalam "Gist popup")

**Jika tidak:** Tanpa testing, maupun secara otomatis ataupun manual, Anda tidak dapat mengandalkan kode Anda untuk mengembalikan jenis kesalahan yang tepat. Tanpa jenis kesalahan yang berarti – tidak ada penanganan kesalahan

🔗 [**Baca selengkapnya: testing error flows**](/sections/errorhandling/testingerrorflows.md)

<br/><br/>

## ![✔] 2.9 Temukan kesalahan dan waktu henti menggunakan produk APM

**TL;DR:** Produk pemantauan dan kinerja (a.k.a APM) secara proaktif mengukur basis kode atau API sehingga mereka dapat secara otomatis menyorot kesalahan, kerusakan, dan bagian lambat yang Anda lewatkan

**Jika tidak:** Anda mungkin menghabiskan banyak usaha untuk mengukur kinerja dan waktu henti API, mungkin Anda tidak akan menyadari bagian kode mana yang paling lambat dalam skenario dunia nyata dan bagaimana hal ini dapat tmemengaruhi pengalaman pengguna

🔗 [**Baca selengkapnya: using APM products**](/sections/errorhandling/apmproducts.md)

<br/><br/>

## ![✔] 2.10 Tangkap penolakan _promise_ yang tidak tertangani

**TL;DR:** Semua pengecualian yang dilemparkan ke dalam _promise_ akan ditelan dan dibuang kecuali pengembang tidak lupa untuk menanganinya secara eksplisit. Meskipun kode Anda berlangganan ke `process.uncaughtException`! Atasi ini dengan mendaftarkan ke event `process.unhandledRejection`

**Jika tidak:** Kesalahan dari kode Anda akan ditelan dan hilang tanpa jejak. Tidak ada yang perlu dikhawatirkan

🔗 [**Baca selengkapnya: catching unhandled promise rejection**](/sections/errorhandling/catchunhandledpromiserejection.md)

<br/><br/>

## ![✔] 2.11 Gagal lebih dini, validasi argumen menggunakan pustaka khusus

**TL;DR:** Tegaskan input API untuk menghindari bug yang lebih sulit dilacak nantinya. Kode untuk validasi biasanya berantakan kecuali Anda menggunakan pustaka pembantu yang keren seperti [ajv](https://www.npmjs.com/package/ajv) dan [Joi](https://www.npmjs.com/package/joi)

**Jika tidak:** Anggap seperti ini – jika fungsi Anda mengharapkan argumen numerik “Diskon” yang lupa diletak oleh pemanggil, kemudian, kode Anda memeriksa jika Diskon!=0 (jumlah diskon yang diizinkan lebih besar dari nol), maka itu akan memungkinkan pengguna untuk menikmati diskon. OMG, bug yang sangat buruk. Bisakah Anda melihatnya?

🔗 [**Baca selengkapnya: failing fast**](/sections/errorhandling/failfast.md)

<br/><br/>

## ![✔] 2.12 Selalu _await promise_ sebelum mengembalikan nilai untuk menghindari _stacktrace_ yang tidak lengkap

**TL;DR:** Selalu lakukan `return await` ketika mengembalikan sebuah _promise_ untuk memanfaatkan _stacktrace_ kesalahan yang lengkap. Jika sebuah fungsi mengembalikan _promise_, fungsi tersebut harus dideklarasikan sebagai fungsi `async` dan `await` fungsi tersebut secara eksplisit sebelum mengembalikannya

**Jika tidak:** Fungsi yang mengembalikan _promise_ tanpa `await` tidak akan muncul di _stacktrace_.
Kerangka yang hilang seperti itu mungkin akan mempersulit pemahaman tentang aliran yang mengarah ke kesalahan,
terutama jika penyebab perilaku yang tidak normal ada di dalam fungsi yang hilang itu

🔗 [**Baca selengkapnya: returning promises**](/sections/errorhandling/returningpromises.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `3. Praktik Gaya Kode`

## ![✔] 3.1 Gunakan ESLint

**TL;DR:** [ESLint](https://eslint.org) adalah standar de-facto untuk memeriksa kemungkinan kesalahan kode dan memperbaiki gaya kode, bukan hanya untuk mengidentifikasi masalah spasi tetapi juga untuk mendeteksi kode anti-pola yang serius seperti pengembang melemparkan kesalahan tanpa klasifikasi. Meskipun ESLint dapat memperbaiki gaya kode secara otomatis, alat lain seperti [prettier](https://www.npmjs.com/package/prettier) dan [beautify](https://www.npmjs.com/package/js-beautify) lebih baik dalam memformat perbaikan kodenya dan dapat bekerja sama dengan ESLint

**Jika tidak:** Pengembang akan fokus pada masalah spasi dan lebar garis dan waktu mungkin akan terbuang hanya untuk memikirkan gaya kode pada proyek

🔗 [**Baca selengkapnya: Using ESLint and Prettier**](/sections/codestylepractices/eslint_prettier.md)

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
function someFunction() 
{
  // blok kode
}
```

**Jika tidak:** Tidak mengikuti praktik terbaik ini dapat menyebabkan hasil yang tidak terduga, seperti yang terlihat pada thread StackOverflow di bawah ini:

🔗 [**Baca selengkapnya:** "Why do results vary based on curly brace placement?" (StackOverflow)](https://stackoverflow.com/questions/3641519/why-does-a-results-vary-based-on-curly-brace-placement)

<br/><br/>

## ![✔] 3.4 Pisahkan statement Anda dengan benar

Tidak peduli jika Anda menggunakan titik koma atau tidak untuk memisahkan statement Anda, mengetahui akibat umum dari pemutusan baris yang tidak tepat atau penyisipan titik koma otomatis, akan membantu Anda mengurangi kesalahan sintaks biasa.

**TL;DR:** Gunakan ESLint untuk mendapatkan perhatian tentang masalah pemisahan. [Prettier](https://prettier.io/) atau [Standardjs](https://standardjs.com/) dapat menyelesaikan masalah ini secara otomatis.

**Jika tidak:** Seperti yang terlihat di bagian sebelumnya, penerjemah JavaScript secara otomatis menambah titik koma pada akhir statement jika tidak ada, atau anggap sebuah statement tidak diakhiri di tempat yang seharusnya, yang dapat mengarah pada hasil yang tidak diinginkan. Anda dapat menggunakan penetapan dan hindari pengunaan ekspresi fungsi yang lansung dipanggil untuk mencegah sebagian besar masalah yang tidak terduga.

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
// letakkan titik koma sebelum fungsi yang lansung dipanggil, setelah pendefinisian const, simpan nilai kembali dari fungsi anonim ke sebuah variabel atau hindari IIFE (ekspresi fungsi yang lansung dipanggil) sepenuhnya
```

🔗 [**Baca selengkapnya:** "Semi ESLint rule"](https://eslint.org/docs/rules/semi)
🔗 [**Baca selengkapnya:** "No unexpected multiline ESLint rule"](https://eslint.org/docs/rules/no-unexpected-multiline)

<br/><br/>

## ![✔] 3.5 Namakan fungsi Anda

**TL;DR:** Namakan semua fungsi, termasuk closure dan panggilan balik. Hindari fungsi anonim. Ini sangat berguna saat mengukur sebuah aplikasi node. Menamakan semua fungsi memungkinkan Anda untuk memahami dengan mudah apa yang Anda lihat saat memeriksa snapshot memori 

**Jika tidak:** Men-debug masalah produksi menggunakan core dump (snapshot memori) dapat menjadi tantangan karena Anda melihat konsumsi memori yang signifikan dari fungsi anonim

<br/><br/>

## ![✔] 3.6 Gunakan konvensi penamaan untuk variabel, konstanta, fungsi and kelas

**TL;DR:** Gunakan **_lowerCamelCase_** saat memberi nama konstanta, variabel dan fungsi dan **_UpperCamelCase_** (huruf besar pada huruf pertama) saat memberi nama kelas. Ini akan membantu Anda dengan mudah untuk membedakan variabel/fungsi biasa, dan kelas yang membutuhkan instansiasi. Gunakan nama yang deskriptif, tetapi usahakan untuk tetap pendek

**Jiak tidak:** Javascript adalah satu-satunya bahasa di dunia yang memungkinkan pemanggilan konstruktor kelas ("Class") secara lansung tanpa membuat instansinya terlebih dahulu. Akibatnya, kelas dan fungsi-konstruktor dibedakan dimulai dengan UpperCamelCase

### 3.6 Contoh Kode

```javascript
// untuk nama kelas kita gunakan UpperCamelCase
class SomeClassExample {}

// untuk nama const kita gunakan kata kunci const dan lowerCamelCase
const config = {
  key: "value",
};

// untuk nama variable dan fungsi kita gunakan lowerCamelCase
let someVariableExample = "value";
function doSomething() {}
```

<br/><br/>

## ![✔] 3.7 Utamakan penggunaan const daripada let. Singkirkan var

**TL;DR:** Menggunakan `const` berarti bahwa setelah nilai variabel itu ditetapkan, nilainya tidak dapat ditetapkan kembali. Menggunakan `const` akan membantu Anda untuk tidak tergoda untuk menggunakan variabel yang sama untuk penggunaan yang berbeda, dan membuat kode Anda lebih jelas. Jika sebuah variabel perlu ditetapkan kembali nilainya, di dalam perulangan for, misalnya, deklarasikan menggunakan `let`. Aspek penting lainnya dari `let` adalah variable yang dideklarasikan menggunakan `let` hanya tersedia didalam cakupan blok di mana variabel itu didefinisikan. `var` memiliki cakupan dalam fungsi, bukan dalam blok, dan [tidak boleh digunakan di ES6](https://hackernoon.com/why-you-shouldnt-use-var-anymore-f109a58b9b70) setelah Anda mempunyai `const` dan `let`

**Jika tidak:** Men-debug menjadi lebih rumit saat mengikuti variabel yang sering berubah

🔗 [**Baca selengkapnya: JavaScript ES6+: var, let, or const?** ](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

<br/><br/>

## ![✔] 3.8 _Require_ module terlebih dahulu, bukan di dalam fungsi

**TL;DR:** _Require_ module di awal setiap file, sebelum dan di luar semua fungsi. Praktik terbaik sederhana ini tidak hanya membantu Anda dengan mudah dan cepat untuk mengetahui dependensi file di awal sebuah file tetapi juga menghindari beberapa potensi masalah

**Jika tidak:** _Require_ dijalankan secara sinkron oleh Node.js. Jika mereka dipanggil dalam sebuah fungsi, ini mungkin dapat memblokir permintaan lain untuk ditangani pada waktu yang lebih kritis. Selain itu, jika modul yang diperlukan atau salah satu dependensinya menimbulkan kesalahan dan merusak server, akan lebih baik untuk mengetahuinya sesegera mungkin, yang mungkin tidak akan terjadi jika modul itu dipanggil dalam sebuah fungsi

<br/><br/>

## ![✔] 3.9 _Require_ modul berdasarkan folder, bukan file secara lansung

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

Semua pernyataan diatas akan mengembalikan nilai _false_ jika menggunakan `===`

<br/><br/>

## ![✔] 3.11 Gunakan Async Await, hindari panggilan balik

**TL;DR:** Node 8 LTS sekarang memiliki dukungan penuh untuk Async-await. Ini adalah cara baru untuk menangani kode asinkron yang mengantikan panggilan balik dan _promise_. Async-await bersifat tidak memblokir, dan ini membuat kode asinkron terlihat seperti sinkron. Hadiah terbaik yang dapat Anda berikan untuk kode Anda adalah menggunakan async-await yang menyediakan sintaks yang lebih ringkas dan akrab seperti try-catch

**Jika tidak:** Menangani kesalahan asinkron dalam gaya panggilan balik mungkin adalah cara terburuk - gaya ini memeriksa kesalahan secara menyeluruh, menangani tumpukan kode yang canggung, dan menyulitkan untuk menjelaskan aliran kode

🔗[**Baca selengkapnya:** Guide to async-await 1.0](https://github.com/yortus/asyncawait)

<br/><br/>

## ![✔] 3.12 Gunakan ekspresi fungsi panah (=>)

**TL;DR:** Meskipun disarankan untuk menggunakan async-await dan menghindari parameter fungsi saat berurusan dengan API lama yang menerima promise atau panggilan balik - fungsi panah membuat struktur kode lebih ringkas dan menjaga konteks leksikal dari akar fungsi (contohnya `this`)

**Jika tidak:** Kode yang lebih panjang (dalam fungsi ES5) lebih rentan terhadap masalah dan rumit untuk dibaca

🔗 [**Baca selengkapnya: It’s Time to Embrace Arrow Functions**](https://medium.com/javascript-scene/familiarity-bias-is-holding-you-back-its-time-to-embrace-arrow-functions-3d37e1a9bb75)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `4. Praktik Pengujian dan Kualitas Secara Keseluruhan `

## ![✔] 4.1 Paling tidak, buat pengujian API (komponen)

**TL;DR:** Sebagian besar proyek tidak memiliki pengujian otomatis karena jadwal yang singkat atau 'proyek pengujian' sering tidak terkendali dan ditinggalkan. Oleh karena itu, prioritaskan dan mulailah dengan pengujian API yang merupakan cara termudah untuk menulis dan memberikan cakupan yang lebih dari pengujian unit (Anda bahkan dapat membuat pengujian API tanpa kode menggunakan alat seperti [Postman](https://www.getpostman.com/). Setelah itu, jika Anda mempunyai waktu dan sumber daya yang lebih, lanjutkan dengan pengujian yang lebih tinggi seperti pengujian unit, pengujian DB, pengujian performa, dll.

**Jika tidak:** Anda mungkin menghabiskan waktu yang lama untuk menulis pengujian unit untuk mengetahui bahwa Anda hanya mencakup 20% dari sistem

<br/><br/>

## ![✔] 4.2 Sertakan 3 bagian di setiap nama pengujian

**TL;DR:** Buatlah pengujian yang setara dengan tingkat persyaratan sehingga cukup jelas untuk _Engineer_ QA dan pengembang yang tidak terbiasa dengan kode internal. Sebutkan dalam nama pengujian apa yang akan diuji (unit dalam pengujian), dalam keadaan apa, dan apa hasil yang diharapkan

**Jika tidak:** Deployment baru saja gagal, sebuah pengujian bernama “Tambah produk” gagal. Apakah ini memberi tahu Anda dengan tepat apa yang tidak berfungsi?

🔗 [**Baca selengkapnya: Include 3 parts in each test name**](/sections/testingandquality/3-parts-in-name.md)

<br/><br/>

## ![✔] 4.3 Strukturkan pengujian Anda dengan pola AAA

**TL;DR:** Strukturkan pengujian dengan 3 bagian yang terpisah dengan baik: _Arrange, Act & Assert_ (AAA). Bagian pertama mencakup penyiapan untuk pengujian, kemudian eksekusi unit yang akan diuji, dan yang terakhir fase _assertion_. Mengikuti struktur ini menjamin bahwa pembaca tidak menghabiskan tenaga otak untuk memahami rencana pengujian

**Jika tidak:** Tidak hanya Anda menghabiskan waktu yang lama untuk memahami kode utama, tetapi sekarang hal paling mudah dari hari Anda (melakukan pengujian) dapat merengangkan otak Anda

🔗 [**Baca selengkapnya: Structure tests by the AAA pattern**](/sections/testingandquality/aaa.md)

<br/><br/>

## ![✔] 4.4 Deteksi masalah kode dengan _linter_

**TL;DR:** Gunakan _linter_ kode untuk memeriksa kualitas dasar dan mendeteksi anti-pola sejak dini. Jalankan _linter_ sebelum pengujian dan tambahkan _linter_ sebagai pra-commit git-hook untuk meminimalkan waktu yang dibutuhkan untuk meninjau dan memperbaiki masalah apa pun. Periksa juga [Bagian 3](#3-praktik-gaya-kode) tentang Praktik Gaya Kode

**Jika Tidak:** Anda dapat membiarkan beberapa kode dengan anti-pola dan mungkin kode yang tidak aman masuk ke lingkunan produksi Anda.

<br/><br/>

## ![✔] 4.5 Hindari perlengkapan and benih global pada pengujian, tambah data pada setiap pengujian

**TL;DR:** Untuk mencegah pengujian yang tersambung dan memudahkan untuk memahami alur pengujian, setiap pengujian harus menambah dan bertindak pada kumpulan data di DB-nya sendiri. Setiap kali pengujian perlu menarik atau mengasumsikan keberadaan suatu data pada DB - pengujian tersebut harus menambah data tersebut secara eksplisit dan hindari memutasi kumpulan data lainnya

**Jika tidak:** Anggap sebuah skenario di mana _deployment_ gagal karena pengujian yang gagal, tim seakarang akan menghabiskan waktu yang berharga untuk melakukan investigasi yang berakhir dengan kesimpulan yang menyedihkan: sistem berfungsi dengan baik, namun pengujian saling mengganggu dan merusak _build_-nya

🔗 [**Baca selengkapnya: Avoid global test fixtures**](/sections/testingandquality/avoid-global-test-fixture.md)

<br/><br/>

## ![✔] 4.6 Periksa terus menerus dependensi yang rentan

**TL;DR:** Bahkan dependensi yang paling terkemuka seperti Express memiliki banyak kerentanan yang diketahui. Hal ini dapat mudah diperbaiki menggunakan alat dari komunitas atau komersial seperti 🔗 [npm audit](https://docs.npmjs.com/cli/audit) dan 🔗 [snyk.io](https://snyk.io) yang dapat dipanggil dari CI Anda pada setiap _build_

**Jika tidak:** Menjaga kode Anda bersih dari kerentanan tanpa alat khusus mengharuskan Anda untuk mengikuti publikasi online tentang ancaman baru. Cukup membosankan

<br/><br/>

## ![✔] 4.7 Tandai pengujian Anda

**TL;DR:** Pengujian yang berbeda harus dijalankan pada skenario yang berbeda: _quick smoke_, _IO-less_, pengujian harus dijalankan ketika pengembang menyimpan atau melakukan _commit_ pada file, pengujian _end-to-end_ biasanya dijalankan saat _pull request_ baru dikirimkan, dst. Hal ini dapat dicapai dengan menandai pengujian dengan kata kunci seperti _#cold #api #sanity_ sehingga Anda dapat melakukan `grep` pada pengujian Anda dan menjalankan subset yang diinginkan. Contohnya, ini adalah cara untuk memanggil pengujian pada kelompok _sanity_ dengan [Mocha](https://mochajs.org/): mocha --grep 'sanity'

**Jika tidak:** Menjalankan semua pengujian, termasuk pengujian yang menjalankan banyak kueri DB, setiap kali pengembang membuat perubahan kecil bisa sangat lambat dan menjauhkan pengembang dari menjalankan pengujian

<br/><br/>

## ![✔] 4.8 Periksa cakupan pengujian Anda, ini membantu untuk mengidentifikasikan pola pengujian yang salah

**TL;DR:** Alat cakupan kode seperti [Istanbul](https://github.com/istanbuljs/istanbuljs)/[NYC](https://github.com/istanbuljs/nyc) sangat bagus karena 3 alasan: gratis (sangat mudah untuk memanfaatkan laporan ini), alat ini membantu mengidentifikasikan pengurangan cakupan pengujian, dan yang terakhir, alat ini menyoroti ketidakcocokan pengujian: dengan melihat kode warna pada laporan cakupan Anda dapat melihat, misalnya, area kode yang tidak pernah diuji seperti klausa _catch_ (artinya pengujian hanya menggambil jalur yang benar dan bukan bagaimana aplikasi akan berperilaku jika ada kesalahan). Setel agar _build_-nya gagal jika cakupannya berada di bawah batas tertentu

**Jika tidak:** Tidak akan ada metrik otomatis yang memberi tahu Anda saat sebagian besar kode Anda tidak tercakup dalam pengujian

<br/><br/>

## ![✔] 4.9 Periksa paket yang kedaluwarsa

**TL;DR:** Gunakan alat pilihan Anda (misalnya 'npm outdated' atau [npm-check-updates](https://www.npmjs.com/package/npm-check-updates) untuk mendeteksi paket yang kedaluwarsa, masukkan pemeriksaan ini ke _pipeline CI_ dan bahkan gagalkan _build_-nya dalam skenario yang buruk. Contohnya, skenario yang buruk mungkin terjadi ketika paket yang digunakan tertinggal 5 _patch commit_ (misalnya versi lokal adalah 1.3.1 dan versi repositori adalah 1.3.8) atau paketnya ditandai _deprecated_ oleh pembuatnya - matikan _build_-nya dan cegah _deployment_ pada versi ini

**Jika tidak:** Produksi Anda akan menggunakan paket yang ditandai berisiko oleh pembuatnya secara eksplisit

<br/><br/>

## ![✔] 4.10 Gunakan lingkungan yang mirip dengan produksi untuk pengujian e2e

**TL;DR:** Pengujian _End to end_ (e2e) yang mencakup data asli dulunya merupakan titik terlemah pada proses CI karena pengujian itu bergantung pada beberapa layanan berat seperti DB. Gunakan lingkunan yang semirip mungkin dengan lingkungan pada produksi Anda seperti a-seterusnya (-seterusnya hilang, konten dibutuhkan. Dilihat dari klausa **Otherwise**, hal ini seharusnya menyebutkan tentang docker-compose)

**Jika tidak:** Tanpa docker-compose, tim harus mengurus DB pengujian untuk setiap lingkungan pengujian termasuk mesin yang dimiliki oleh pengembang, pastikan semua DB tersebut tetap sinkron sehingga hasil pengujian tidak akan berbeda di lingkungan yang berbeda

<br/><br/>

## ![✔] 4.11 Sering lakukan refactor menggunakan alat analisis statis

**TL;DR:** Menggunakan alat analisis statis membantu dengan memberikan cara yang obyektif untuk meningkatkan kualitias kode dan tetap menjaga kode Anda. Anda dapat menambahkan alat analisis statis ke _build_ CI untuk menggagalkan _build_-nya jika alat itu menemukan kode yang jelek. Nilai jual utamanya dibandingkan dengan _lintting_ biasa adalah kemampuan untuk memeriksa kualitas dalam konteks beberapa file (contohnya mendeteksi duplikasi), melakukan analisis lanjutan (contohnya kompleksitas kode), dan mengikuti riwayat dan perkembangan masalah kode. Dua contoh alat yang dapat Anda gunakan adalah [Sonarqube](https://www.sonarqube.org/) (2,600+ [bintang](https://github.com/SonarSource/sonarqube)) dan [Code Climate](https://codeclimate.com/) (1,500+ [bintang](https://github.com/codeclimate/codeclimate)).

**Jika tidak:** Dengan kualitas kode yang buruk, _bug_ dan performa selalu akan selalu menjadi masalah yang tidak dapat diperbaiki oleh pustaka baru atau fitur-fitur canggih

🔗 [**Baca selengkapnya: Refactoring!**](/sections/testingandquality/refactoring.md)

<br/><br/>

## ![✔] 4.12 Pilih platform CI Anda dengan hati-hati (Jenkins vs CircleCI vs Travis vs yang lainnya)

**TL;DR:** Platform _continuous integration_ (CICD) Anda akan mempunyai semua alat berkualitas (seperti test, lint) sehingga seharusnya dilengkapi dengan ekosistem plugin yang dinamis. [Jenkins](https://jenkins.io/) dulunya merupakan aplikasi default untuk banyak proyek harena mempunyai komunitas terbesar bersama dengan platform yang sangat kuat dengan kekurangan persiapan yang rumit yang menuntut kurva pembelajaran yang tajam. Saat ini, persiapan solusi CI jauh lebih mudah menggunakan alat SaaS seperti [CircleCI](https://circleci.com) dan lainnya. Alat ini memungkinkan pembuatan pipeline CI yang fleksibel tanpa beban untuk mengelola seluruh infrastruktur. Pada akhirnya, ini merupakan keseimbangan antara kecepatan dan kekuatan - pilih dengan hati-hati

**Jika tidak:** Memilih vendor khusus mungkin akan membatasi Anda ketika Anda membutuhkan penyesuaian tingkat lanjut. Di sisi lain, menggunakan Jenkins dapat menghabiskan waktu berharga dalam penyiapan infrastruktur

🔗 [**Baca selengkapnya: Choosing CI platform**](/sections/testingandquality/citools.md)

## ![✔] 4.13 Test your middlewares in isolation

**TL;DR:** When a middleware holds some immense logic that spans many requests, it is worth testing it in isolation without waking up the entire web framework. This can be easily achieved by stubbing and spying on the {req, res, next} objects

**Otherwise:** A bug in Express middleware === a bug in all or most requests

🔗 [**Read More: Test middlewares in isolation**](/sections/testingandquality/test-middlewares.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `5. Going To Production Practices`

## ![✔] 5.1. Monitoring

**TL;DR:** Monitoring is a game of finding out issues before customers do – obviously this should be assigned unprecedented importance. The market is overwhelmed with offers thus consider starting with defining the basic metrics you must follow (my suggestions inside), then go over additional fancy features and choose the solution that ticks all boxes. Click ‘The Gist’ below for an overview of the solutions

**Otherwise:** Failure === disappointed customers. Simple

🔗 [**Read More: Monitoring!**](/sections/production/monitoring.md)

<br/><br/>

## ![✔] 5.2. Increase transparency using smart logging

**TL;DR:** Logs can be a dumb warehouse of debug statements or the enabler of a beautiful dashboard that tells the story of your app. Plan your logging platform from day 1: how logs are collected, stored and analyzed to ensure that the desired information (e.g. error rate, following an entire transaction through services and servers, etc) can really be extracted

**Otherwise:** You end up with a black box that is hard to reason about, then you start re-writing all logging statements to add additional information

🔗 [**Read More: Increase transparency using smart logging**](/sections/production/smartlogging.md)

<br/><br/>

## ![✔] 5.3. Delegate anything possible (e.g. gzip, SSL) to a reverse proxy

**TL;DR:** Node is awfully bad at doing CPU intensive tasks like gzipping, SSL termination, etc. You should use ‘real’ middleware services like nginx, HAproxy or cloud vendor services instead

**Otherwise:** Your poor single thread will stay busy doing infrastructural tasks instead of dealing with your application core and performance will degrade accordingly

🔗 [**Read More: Delegate anything possible (e.g. gzip, SSL) to a reverse proxy**](/sections/production/delegatetoproxy.md)

<br/><br/>

## ![✔] 5.4. Lock dependencies

**TL;DR:** Your code must be identical across all environments, but amazingly npm lets dependencies drift across environments by default – when you install packages at various environments it tries to fetch packages’ latest patch version. Overcome this by using npm config files, .npmrc, that tell each environment to save the exact (not the latest) version of each package. Alternatively, for finer grained control use `npm shrinkwrap`. \*Update: as of NPM5, dependencies are locked by default. The new package manager in town, Yarn, also got us covered by default

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code

🔗 [**Read More: Lock dependencies**](/sections/production/lockdependencies.md)

<br/><br/>

## ![✔] 5.5. Guard process uptime using the right tool

**TL;DR:** The process must go on and get restarted upon failures. For simple scenarios, process management tools like PM2 might be enough but in today's ‘dockerized’ world, cluster management tools should be considered as well

**Otherwise:** Running dozens of instances without a clear strategy and too many tools together (cluster management, docker, PM2) might lead to DevOps chaos

🔗 [**Read More: Guard process uptime using the right tool**](/sections/production/guardprocess.md)

<br/><br/>

## ![✔] 5.6. Utilize all CPU cores

**TL;DR:** At its basic form, a Node app runs on a single CPU core while all others are left idling. It’s your duty to replicate the Node process and utilize all CPUs – For small-medium apps you may use Node Cluster or PM2. For a larger app consider replicating the process using some Docker cluster (e.g. K8S, ECS) or deployment scripts that are based on Linux init system (e.g. systemd)

**Otherwise:** Your app will likely utilize only 25% of its available resources(!) or even less. Note that a typical server has 4 CPU cores or more, naive deployment of Node.js utilizes only 1 (even using PaaS services like AWS beanstalk!)

🔗 [**Read More: Utilize all CPU cores**](/sections/production/utilizecpu.md)

<br/><br/>

## ![✔] 5.7. Create a ‘maintenance endpoint’

**TL;DR:** Expose a set of system-related information, like memory usage and REPL, etc in a secured API. Although it’s highly recommended to rely on standard and battle-tests tools, some valuable information and operations are easier done using code

**Otherwise:** You’ll find that you’re performing many “diagnostic deploys” – shipping code to production only to extract some information for diagnostic purposes

🔗 [**Read More: Create a ‘maintenance endpoint’**](/sections/production/createmaintenanceendpoint.md)

<br/><br/>

## ![✔] 5.8. Discover errors and downtime using APM products

**TL;DR:** Application monitoring and performance products (a.k.a APM) proactively gauge codebase and API so they can auto-magically go beyond traditional monitoring and measure the overall user-experience across services and tiers. For example, some APM products can highlight a transaction that loads too slow on the end-users side while suggesting the root cause

**Otherwise:** You might spend great effort on measuring API performance and downtimes, probably you’ll never be aware which is your slowest code parts under real-world scenario and how these affect the UX

🔗 [**Read More: Discover errors and downtime using APM products**](/sections/production/apmproducts.md)

<br/><br/>

## ![✔] 5.9. Make your code production-ready

**TL;DR:** Code with the end in mind, plan for production from day 1. This sounds a bit vague so I’ve compiled a few development tips that are closely related to production maintenance (click Gist below)

**Otherwise:** A world champion IT/DevOps guy won’t save a system that is badly written

🔗 [**Read More: Make your code production-ready**](/sections/production/productioncode.md)

<br/><br/>

## ![✔] 5.10. Measure and guard the memory usage

**TL;DR:** Node.js has controversial relationships with memory: the v8 engine has soft limits on memory usage (1.4GB) and there are known paths to leak memory in Node’s code – thus watching Node’s process memory is a must. In small apps, you may gauge memory periodically using shell commands but in medium-large apps consider baking your memory watch into a robust monitoring system

**Otherwise:** Your process memory might leak a hundred megabytes a day like how it happened at [Walmart](https://www.joyent.com/blog/walmart-node-js-memory-leak)

🔗 [**Read More: Measure and guard the memory usage**](/sections/production/measurememory.md)

<br/><br/>

## ![✔] 5.11. Get your frontend assets out of Node

**TL;DR:** Serve frontend content using dedicated middleware (nginx, S3, CDN) because Node performance really gets hurt when dealing with many static files due to its single-threaded model

**Otherwise:** Your single Node thread will be busy streaming hundreds of html/images/angular/react files instead of allocating all its resources for the task it was born for – serving dynamic content

🔗 [**Read More: Get your frontend assets out of Node**](/sections/production/frontendout.md)

<br/><br/>

## ![✔] 5.12. Be stateless, kill your servers almost every day

**TL;DR:** Store any type of data (e.g. user sessions, cache, uploaded files) within external data stores. Consider ‘killing’ your servers periodically or use ‘serverless’ platform (e.g. AWS Lambda) that explicitly enforces a stateless behavior

**Otherwise:** Failure at a given server will result in application downtime instead of just killing a faulty machine. Moreover, scaling-out elasticity will get more challenging due to the reliance on a specific server

🔗 [**Read More: Be stateless, kill your Servers almost every day**](/sections/production/bestateless.md)

<br/><br/>

## ![✔] 5.13. Use tools that automatically detect vulnerabilities

**TL;DR:** Even the most reputable dependencies such as Express have known vulnerabilities (from time to time) that can put a system at risk. This can be easily tamed using community and commercial tools that constantly check for vulnerabilities and warn (locally or at GitHub), some can even patch them immediately

**Otherwise:** Keeping your code clean from vulnerabilities without dedicated tools will require you to constantly follow online publications about new threats. Quite tedious

🔗 [**Read More: Use tools that automatically detect vulnerabilities**](/sections/production/detectvulnerabilities.md)

<br/><br/>

## ![✔] 5.14. Assign a transaction id to each log statement

**TL;DR:** Assign the same identifier, transaction-id: {some value}, to each log entry within a single request. Then when inspecting errors in logs, easily conclude what happened before and after. Unfortunately, this is not easy to achieve in Node due to its async nature, see code examples inside

**Otherwise:** Looking at a production error log without the context – what happened before – makes it much harder and slower to reason about the issue

🔗 [**Read More: Assign ‘TransactionId’ to each log statement**](/sections/production/assigntransactionid.md)

<br/><br/>

## ![✔] 5.15. Set NODE_ENV=production

**TL;DR:** Set the environment variable NODE_ENV to ‘production’ or ‘development’ to flag whether production optimizations should get activated – many npm packages determine the current environment and optimize their code for production

**Otherwise:** Omitting this simple property might greatly degrade performance. For example, when using Express for server-side rendering omitting `NODE_ENV` makes it slower by a factor of three!

🔗 [**Read More: Set NODE_ENV=production**](/sections/production/setnodeenv.md)

<br/><br/>

## ![✔] 5.16. Design automated, atomic and zero-downtime deployments

**TL;DR:** Research shows that teams who perform many deployments lower the probability of severe production issues. Fast and automated deployments that don’t require risky manual steps and service downtime significantly improve the deployment process. You should probably achieve this using Docker combined with CI tools as they became the industry standard for streamlined deployment

**Otherwise:** Long deployments -> production downtime & human-related error -> team unconfident in making deployment -> fewer deployments and features

<br/><br/>

## ![✔] 5.17. Use an LTS release of Node.js

**TL;DR:** Ensure you are using an LTS version of Node.js to receive critical bug fixes, security updates and performance improvements

**Otherwise:** Newly discovered bugs or vulnerabilities could be used to exploit an application running in production, and your application may become unsupported by various modules and harder to maintain

🔗 [**Read More: Use an LTS release of Node.js**](/sections/production/LTSrelease.md)

<br/><br/>

## ![✔] 5.18. Don't route logs within the app

**TL;DR:** Log destinations should not be hard-coded by developers within the application code, but instead should be defined by the execution environment the application runs in. Developers should write logs to `stdout` using a logger utility and then let the execution environment (container, server, etc.) pipe the `stdout` stream to the appropriate destination (i.e. Splunk, Graylog, ElasticSearch, etc.).

**Otherwise:** Application handling log routing === hard to scale, loss of logs, poor separation of concerns

🔗 [**Read More: Log Routing**](/sections/production/logrouting.md)

<br/><br/>

## ![✔] 5.19. Install your packages with `npm ci`

**TL;DR:** You have to be sure that production code uses the exact version of the packages you have tested it with. Run `npm ci` to strictly do a clean install of your dependencies matching package.json and package-lock.json. Using this command is recommended in automated environments such as continuous integration pipelines.

**Otherwise:** QA will thoroughly test the code and approve a version that will behave differently in production. Even worse, different servers in the same production cluster might run different code.

🔗 [**Read More: Use npm ci**](/sections/production/installpackageswithnpmci.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `6. Security Best Practices`

<div align="center">
<img src="https://img.shields.io/badge/OWASP%20Threats-Top%2010-green.svg" alt="54 items"/>
</div>

## ![✔] 6.1. Embrace linter security rules

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20XSS%20-green.svg" alt=""/></a>

**TL;DR:** Make use of security-related linter plugins such as [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security) to catch security vulnerabilities and issues as early as possible, preferably while they're being coded. This can help catching security weaknesses like using eval, invoking a child process or importing a module with a string literal (e.g. user input). Click 'Read more' below to see code examples that will get caught by a security linter

**Otherwise:** What could have been a straightforward security weakness during development becomes a major issue in production. Also, the project may not follow consistent code security practices, leading to vulnerabilities being introduced, or sensitive secrets committed into remote repositories

🔗 [**Read More: Lint rules**](/sections/security/lintrules.md)

<br/><br/>

## ![✔] 6.2. Limit concurrent requests using a middleware

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** DOS attacks are very popular and relatively easy to conduct. Implement rate limiting using an external service such as cloud load balancers, cloud firewalls, nginx, [rate-limiter-flexible](https://www.npmjs.com/package/rate-limiter-flexible) package, or (for smaller and less critical apps) a rate-limiting middleware (e.g. [express-rate-limit](https://www.npmjs.com/package/express-rate-limit))

**Otherwise:** An application could be subject to an attack resulting in a denial of service where real users receive a degraded or unavailable service.

🔗 [**Read More: Implement rate limiting**](/sections/security/limitrequests.md)

<br/><br/>

## ![✔] 6.3 Extract secrets from config files or use packages to encrypt them

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A3-Sensitive_Data_Exposure" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A3:Sensitive%20Data%20Exposure%20-green.svg" alt=""/></a>

**TL;DR:** Never store plain-text secrets in configuration files or source code. Instead, make use of secret-management systems like Vault products, Kubernetes/Docker Secrets, or using environment variables. As a last resort, secrets stored in source control must be encrypted and managed (rolling keys, expiring, auditing, etc). Make use of pre-commit/push hooks to prevent committing secrets accidentally

**Otherwise:** Source control, even for private repositories, can mistakenly be made public, at which point all secrets are exposed. Access to source control for an external party will inadvertently provide access to related systems (databases, apis, services, etc).

🔗 [**Read More: Secret management**](/sections/security/secretmanagement.md)

<br/><br/>

## ![✔] 6.4. Prevent query injection vulnerabilities with ORM/ODM libraries

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** To prevent SQL/NoSQL injection and other malicious attacks, always make use of an ORM/ODM or a database library that escapes data or supports named or indexed parameterized queries, and takes care of validating user input for expected types. Never just use JavaScript template strings or string concatenation to inject values into queries as this opens your application to a wide spectrum of vulnerabilities. All the reputable Node.js data access libraries (e.g. [Sequelize](https://github.com/sequelize/sequelize), [Knex](https://github.com/tgriesser/knex), [mongoose](https://github.com/Automattic/mongoose)) have built-in protection against injection attacks.

**Otherwise:** Unvalidated or unsanitized user input could lead to operator injection when working with MongoDB for NoSQL, and not using a proper sanitization system or ORM will easily allow SQL injection attacks, creating a giant vulnerability.

🔗 [**Read More: Query injection prevention using ORM/ODM libraries**](/sections/security/ormodmusage.md)

<br/><br/>

## ![✔] 6.5. Collection of generic security best practices

**TL;DR:** This is a collection of security advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Common security best practices**](/sections/security/commonsecuritybestpractices.md)

<br/><br/>

## ![✔] 6.6. Adjust the HTTP response headers for enhanced security

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Your application should be using secure headers to prevent attackers from using common attacks like cross-site scripting (XSS), clickjacking and other malicious attacks. These can be configured easily using modules like [helmet](https://www.npmjs.com/package/helmet).

**Otherwise:** Attackers could perform direct attacks on your application's users, leading to huge security vulnerabilities

🔗 [**Read More: Using secure headers in your application**](/sections/security/secureheaders.md)

<br/><br/>

## ![✔] 6.7. Constantly and automatically inspect for vulnerable dependencies

<a href="https://www.owasp.org/index.php/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Known%20Vulnerabilities%20-green.svg" alt=""/></a>

**TL;DR:** With the npm ecosystem it is common to have many dependencies for a project. Dependencies should always be kept in check as new vulnerabilities are found. Use tools like [npm audit](https://docs.npmjs.com/cli/audit) or [snyk](https://snyk.io/) to track, monitor and patch vulnerable dependencies. Integrate these tools with your CI setup so you catch a vulnerable dependency before it makes it to production.

**Otherwise:** An attacker could detect your web framework and attack all its known vulnerabilities.

🔗 [**Read More: Dependency security**](/sections/security/dependencysecurity.md)

<br/><br/>

## ![✔] 6.8. Protect Users' Passwords/Secrets using brypt or scrypt

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** Passwords or secrets (e.g. API keys) should be stored using a secure hash + salt function like `bcrypt`,`scrypt`, or worst case `pbkdf2`.

**Otherwise:** Passwords and secrets that are stored without using a secure function are vulnerable to brute forcing and dictionary attacks that will lead to their disclosure eventually.

🔗 [**Read More: User Passwords**](/sections/security/userpasswords.md)

<br/><br/>

## ![✔] 6.9. Escape HTML, JS and CSS output

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a>

**TL;DR:** Untrusted data that is sent down to the browser might get executed instead of just being displayed, this is commonly referred as a cross-site-scripting (XSS) attack. Mitigate this by using dedicated libraries that explicitly mark the data as pure content that should never get executed (i.e. encoding, escaping)

**Otherwise:** An attacker might store malicious JavaScript code in your DB which will then be sent as-is to the poor clients

🔗 [**Read More: Escape output**](/sections/security/escape-output.md)

<br/><br/>

## ![✔] 6.10. Validate incoming JSON schemas

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7: XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a>

**TL;DR:** Validate the incoming requests' body payload and ensure it meets expectations, fail fast if it doesn't. To avoid tedious validation coding within each route you may use lightweight JSON-based validation schemas such as [jsonschema](https://www.npmjs.com/package/jsonschema) or [joi](https://www.npmjs.com/package/joi)

**Otherwise:** Your generosity and permissive approach greatly increases the attack surface and encourages the attacker to try out many inputs until they find some combination to crash the application

🔗 [**Read More: Validate incoming JSON schemas**](/sections/security/validation.md)

<br/><br/>

## ![✔] 6.11. Support blacklisting JWTs

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** When using JSON Web Tokens (for example, with [Passport.js](https://github.com/jaredhanson/passport)), by default there's no mechanism to revoke access from issued tokens. Once you discover some malicious user activity, there's no way to stop them from accessing the system as long as they hold a valid token. Mitigate this by implementing a blacklist of untrusted tokens that are validated on each request.

**Otherwise:** Expired, or misplaced tokens could be used maliciously by a third party to access an application and impersonate the owner of the token.

🔗 [**Read More: Blacklist JSON Web Tokens**](/sections/security/expirejwt.md)

<br/><br/>

## ![✔] 6.12. Prevent brute-force attacks against authorization

<a href="https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A9:Broken%20Authentication%20-green.svg" alt=""/></a>

**TL;DR:** A simple and powerful technique is to limit authorization attempts using two metrics:

1. The first is number of consecutive failed attempts by the same user unique ID/name and IP address.
2. The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

**Otherwise:** An attacker can issue unlimited automated password attempts to gain access to privileged accounts on an application

🔗 [**Read More: Login rate limiting**](/sections/security/login-rate-limit.md)

<br/><br/>

## ![✔] 6.13. Run Node.js as non-root user

<a href="https://www.owasp.org/index.php/Top_10-2017_A5-Broken_Access_Control" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A5:Broken%20Access%20Access%20Control-green.svg" alt=""/></a>

**TL;DR:** There is a common scenario where Node.js runs as a root user with unlimited permissions. For example, this is the default behaviour in Docker containers. It's recommended to create a non-root user and either bake it into the Docker image (examples given below) or run the process on this user's behalf by invoking the container with the flag "-u username"

**Otherwise:** An attacker who manages to run a script on the server gets unlimited power over the local machine (e.g. change iptable and re-route traffic to his server)

🔗 [**Read More: Run Node.js as non-root user**](/sections/security/non-root-user.md)

<br/><br/>

## ![✔] 6.14. Limit payload size using a reverse-proxy or a middleware

<a href="https://www.owasp.org/index.php/Top_10-2017_A8-Insecure_Deserialization" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A8:Insecured%20Deserialization%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The bigger the body payload is, the harder your single thread works in processing it. This is an opportunity for attackers to bring servers to their knees without tremendous amount of requests (DOS/DDOS attacks). Mitigate this limiting the body size of incoming requests on the edge (e.g. firewall, ELB) or by configuring [express body parser](https://github.com/expressjs/body-parser) to accept only small-size payloads

**Otherwise:** Your application will have to deal with large requests, unable to process the other important work it has to accomplish, leading to performance implications and vulnerability towards DOS attacks

🔗 [**Read More: Limit payload size**](/sections/security/requestpayloadsizelimit.md)

<br/><br/>

## ![✔] 6.15. Avoid JavaScript eval statements

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** `eval` is evil as it allows executing custom JavaScript code during run time. This is not just a performance concern but also an important security concern due to malicious JavaScript code that may be sourced from user input. Another language feature that should be avoided is `new Function` constructor. `setTimeout` and `setInterval` should never be passed dynamic JavaScript code either.

**Otherwise:** Malicious JavaScript code finds a way into text passed into `eval` or other real-time evaluating JavaScript language functions, and will gain complete access to JavaScript permissions on the page. This vulnerability is often manifested as an XSS attack.

🔗 [**Read More: Avoid JavaScript eval statements**](/sections/security/avoideval.md)

<br/><br/>

## ![✔] 6.16. Prevent evil RegEx from overloading your single thread execution

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** Regular Expressions, while being handy, pose a real threat to JavaScript applications at large, and the Node.js platform in particular. A user input for text to match might require an outstanding amount of CPU cycles to process. RegEx processing might be inefficient to an extent that a single request that validates 10 words can block the entire event loop for 6 seconds and set the CPU on 🔥. For that reason, prefer third-party validation packages like [validator.js](https://github.com/chriso/validator.js) instead of writing your own Regex patterns, or make use of [safe-regex](https://github.com/substack/safe-regex) to detect vulnerable regex patterns

**Otherwise:** Poorly written regexes could be susceptible to Regular Expression DoS attacks that will block the event loop completely. For example, the popular `moment` package was found vulnerable with malicious RegEx usage in November of 2017

🔗 [**Read More: Prevent malicious RegEx**](/sections/security/regex.md)

<br/><br/>

## ![✔] 6.17. Avoid module loading using a variable

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid requiring/importing another file with a path that was given as parameter due to the concern that it could have originated from user input. This rule can be extended for accessing files in general (i.e. `fs.readFile()`) or other sensitive resource access with dynamic variables originating from user input. [Eslint-plugin-security](https://www.npmjs.com/package/eslint-plugin-security) linter can catch such patterns and warn early enough

**Otherwise:** Malicious user input could find its way to a parameter that is used to require tampered files, for example, a previously uploaded file on the file system, or access already existing system files.

🔗 [**Read More: Safe module loading**](/sections/security/safemoduleloading.md)

<br/><br/>

## ![✔] 6.18. Run unsafe code in a sandbox

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** When tasked to run external code that is given at run-time (e.g. plugin), use any sort of 'sandbox' execution environment that isolates and guards the main code against the plugin. This can be achieved using a dedicated process (e.g. `cluster.fork()`), serverless environment or dedicated npm packages that act as a sandbox

**Otherwise:** A plugin can attack through an endless variety of options like infinite loops, memory overloading, and access to sensitive process environment variables

🔗 [**Read More: Run unsafe code in a sandbox**](/sections/security/sandbox.md)

<br/><br/>

## ![✔] 6.19. Take extra care when working with child processes

<a href="https://www.owasp.org/index.php/Top_10-2017_A7-Cross-Site_Scripting_(XSS)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A7:XSS%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a> <a href="https://www.owasp.org/index.php/Top_10-2017_A4-XML_External_Entities_(XXE)" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A4:External%20Entities%20-green.svg" alt=""/></a>

**TL;DR:** Avoid using child processes when possible and validate and sanitize input to mitigate shell injection attacks if you still have to. Prefer using `child_process.execFile` which by definition will only execute a single command with a set of attributes and will not allow shell parameter expansion.

**Otherwise:** Naive use of child processes could result in remote command execution or shell injection attacks due to malicious user input passed to an unsanitized system command.

🔗 [**Read More: Be cautious when working with child processes**](/sections/security/childprocesses.md)

<br/><br/>

## ![✔] 6.20. Hide error details from clients

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** An integrated express error handler hides the error details by default. However, great are the chances that you implement your own error handling logic with custom Error objects (considered by many as a best practice). If you do so, ensure not to return the entire Error object to the client, which might contain some sensitive application details

**Otherwise:** Sensitive application details such as server file paths, third party modules in use, and other internal workflows of the application which could be exploited by an attacker, could be leaked from information found in a stack trace

🔗 [**Read More: Hide error details from client**](/sections/security/hideerrors.md)

<br/><br/>

## ![✔] 6.21. Configure 2FA for npm or Yarn

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Any step in the development chain should be protected with MFA (multi-factor authentication), npm/Yarn are a sweet opportunity for attackers who can get their hands on some developer's password. Using developer credentials, attackers can inject malicious code into libraries that are widely installed across projects and services. Maybe even across the web if published in public. Enabling 2-factor-authentication in npm leaves almost zero chances for attackers to alter your package code.

**Otherwise:** [Have you heard about the eslint developer whose password was hijacked?](https://medium.com/@oprearocks/eslint-backdoor-what-it-is-and-how-to-fix-the-issue-221f58f1a8c8)

<br/><br/>

## ![✔] 6.22. Modify session middleware settings

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Each web framework and technology has its known weaknesses - telling an attacker which web framework we use is a great help for them. Using the default settings for session middlewares can expose your app to module- and framework-specific hijacking attacks in a similar way to the `X-Powered-By` header. Try hiding anything that identifies and reveals your tech stack (E.g. Node.js, express)

**Otherwise:** Cookies could be sent over insecure connections, and an attacker might use session identification to identify the underlying framework of the web application, as well as module-specific vulnerabilities

🔗 [**Read More: Cookie and session security**](/sections/security/sessions.md)

<br/><br/>

## ![✔] 6.23. Avoid DOS attacks by explicitly setting when a process should crash

<a href="https://www.owasp.org/index.php/Denial_of_Service" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20DDOS%20-green.svg" alt=""/></a>

**TL;DR:** The Node process will crash when errors are not handled. Many best practices even recommend to exit even though an error was caught and got handled. Express, for example, will crash on any asynchronous error - unless you wrap routes with a catch clause. This opens a very sweet attack spot for attackers who recognize what input makes the process crash and repeatedly send the same request. There's no instant remedy for this but a few techniques can mitigate the pain: Alert with critical severity anytime a process crashes due to an unhandled error, validate the input and avoid crashing the process due to invalid user input, wrap all routes with a catch and consider not to crash when an error originated within a request (as opposed to what happens globally)

**Otherwise:** This is just an educated guess: given many Node.js applications, if we try passing an empty JSON body to all POST requests - a handful of applications will crash. At that point, we can just repeat sending the same request to take down the applications with ease

<br/><br/>

## ![✔] 6.24. Prevent unsafe redirects

<a href="https://www.owasp.org/index.php/Top_10-2017_A1-Injection" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A1:Injection%20-green.svg" alt=""/></a>

**TL;DR:** Redirects that do not validate user input can enable attackers to launch phishing scams, steal user credentials, and perform other malicious actions.

**Otherwise:** If an attacker discovers that you are not validating external, user-supplied input, they may exploit this vulnerability by posting specially-crafted links on forums, social media, and other public places to get users to click it.

🔗 [**Read More: Prevent unsafe redirects**](/sections/security/saferedirects.md)

<br/><br/>

## ![✔] 6.25. Avoid publishing secrets to the npm registry

<a href="https://www.owasp.org/index.php/Top_10-2017_A6-Security_Misconfiguration" target="_blank"><img src="https://img.shields.io/badge/%E2%9C%94%20OWASP%20Threats%20-%20A6:Security%20Misconfiguration%20-green.svg" alt=""/></a>

**TL;DR:** Precautions should be taken to avoid the risk of accidentally publishing secrets to public npm registries. An `.npmignore` file can be used to blacklist specific files or folders, or the `files` array in `package.json` can act as a whitelist.

**Otherwise:** Your project's API keys, passwords or other secrets are open to be abused by anyone who comes across them, which may result in financial loss, impersonation, and other risks.

🔗 [**Read More: Avoid publishing secrets**](/sections/security/avoid_publishing_secrets.md)
<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `7. Draft: Performance Best Practices`

## Our contributors are working on this section. [Would you like to join?](https://github.com/goldbergyoni/nodebestpractices/issues/256)

<br/><br/>

## ![✔] 7.1. Don't block the event loop

**TL;DR:** Avoid CPU intensive tasks as they will block the mostly single-threaded Event Loop and offload those to a dedicated thread, process or even a different technology based on the context.

**Otherwise:** As the Event Loop is blocked, Node.js will be unable to handle other request thus causing delays for concurrent users. **3000 users are waiting for a response, the content is ready to be served, but one single request blocks the server from dispatching the results back**

🔗 [**Read More: Do not block the event loop**](/sections/performance/block-loop.md)

<br /><br /><br />

## ![✔] 7.2. Prefer native JS methods over user-land utils like Lodash

**TL;DR:** It's often more penalising to use utility libraries like `lodash` and `underscore` over native methods as it leads to unneeded dependencies and slower performance.
Bear in mind that with the introduction of the new V8 engine alongside the new ES standards, native methods were improved in such a way that it's now about 50% more performant than utility libraries.

**Otherwise:** You'll have to maintain less performant projects where you could have simply used what was **already** available or dealt with a few more lines in exchange of a few more files.

🔗 [**Read More: Native over user land utils**](/sections/performance/nativeoverutil.md)

<br/><br/><br/>

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# `8. Docker Best Practices`

🏅 Many thanks to [Bret Fisher](https://github.com/BretFisher) from whom we learned many of the following practices

<br/><br/>

## ![✔] 8.1 Use multi-stage builds for leaner and more secure Docker images

**TL;DR:** Use multi-stage build to copy only necessary production artifacts. A lot of build-time dependencies and files are not needed for running your application. With multi-stage builds these resources can be used during build while the runtime environment contains only what's necessary. Multi-stage builds are an easy way to get rid of overweight and security threats.

**Otherwise:** Larger images will take longer to build and ship, build-only tools might contain vulnerabilities and secrets only meant for the build phase might be leaked.

### Example Dockerfile for multi-stage builds

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

🔗 [**Read More: Use multi-stage builds**](/sections/docker/multi_stage_builds.md)

<br /><br /><br />

## ![✔] 8.2. Bootstrap using 'node' command, avoid npm start

**TL;DR:** use `CMD ['node','server.js']` to start your app, avoid using npm scripts which don't pass OS signals to the code. This prevents problems with child-process, signal handling, graceful shutdown and having zombie processes.

**Otherwise:** When no signals are passed, your code will never be notified about shutdowns. Without this, it will lose its chance to close properly possibly losing current requests and/or data.

[**Read More: Bootstrap container using node command, avoid npm start**](/sections/docker/bootstrap-using-node.md)

<br /><br /><br />

## ![✔] 8.3. Let the Docker runtime handle replication and uptime

**TL;DR:** When using a Docker run time orchestrator (e.g., Kubernetes), invoke the Node.js process directly without intermediate process managers or custom code that replicate the process (e.g. PM2, Cluster module). The runtime platform has the highest amount of data and visibility for making placement decision - It knows best how many processes are needed, how to spread them and what to do in case of crashes

**Otherwise:** Container keeps crashing due to lack of resources will get restarted indefinitely by the process manager. Should Kubernetes be aware of that, it could relocate it to a different roomy instance

🔗 [**Read More: Let the Docker orchestrator restart and replicate processes**](/sections/docker/restart-and-replicate-processes.md)

<br/><br /><br />

## ![✔] 8.4. Use .dockerignore to prevent leaking secrets

**TL;DR**: Include a `.dockerignore` file that filters out common secret files and development artifacts. By doing so, you might prevent secrets from leaking into the image. As a bonus the build time will significantly decrease. Also, ensure not to copy all files recursively rather explicitly choose what should be copied to Docker

**Otherwise**: Common personal secret files like `.env`, `.aws` and `.npmrc` will be shared with anybody with access to the image (e.g. Docker repository)

🔗 [**Read More: Use .dockerignore**](/sections/docker/docker-ignore.md)

<br /><br /><br />

## ![✔] 8.5. Clean-up dependencies before production

**TL;DR:** Although Dev-Dependencies are sometimes needed during the build and test life-cycle, eventually the image that is shipped to production should be minimal and clean from development dependencies. Doing so guarantees that only necessary code is shipped and the amount of potential attacks (i.e. attack surface) is minimized. When using multi-stage build (see dedicated bullet) this can be achieved by installing all dependencies first and finally running `npm ci --production`

**Otherwise:** Many of the infamous npm security breaches were found within development packages (e.g. [eslint-scope](https://eslint.org/blog/2018/07/postmortem-for-malicious-package-publishes))

🔗 Read More: [Remove development dependencies](/sections/docker/install-for-production.md)

<br /><br /><br />

## ![✔] 8.6. Shutdown smartly and gracefully

**TL;DR:** Handle the process SIGTERM event and clean-up all existing connection and resources. This should be done while responding to ongoing requests. In Dockerized runtimes shutting down containers is not a rare event, rather a frequent occurrence that happen as part of routine work. Achieving this demands some thoughtful code to orchestrate several moving parts: The load balancer, keep-alive connections, the HTTP server and other resources

**Otherwise:** Dying immediately means not responding to thousands of disappointed users

🔗 [**Read More: Graceful shutdown**](/sections/docker/graceful-shutdown.md)

<br /><br /><br />

## ![✔] 8.7. Set memory limits using both Docker and v8

**TL;DR:** Always configure a memory limit using both Docker and the JavaScript runtime flags. The Docker limit is needed to make thoughtful container placement decision, the --v8's flag max-old-space is needed to kick off the GC on time and prevent under utilization of memory. Practically, set the v8's old space memory to be a just bit less than the container limit

**Otherwise:** The docker definition is needed to perform thoughtful scaling decision and prevent starving other citizens. Without also defining the v8's limits, it will under utilize the container resources - Without explicit instructions it crashes when utilizing ~50-60% of its host resources

🔗 [**Read More: Set memory limits using Docker only**](/sections/docker/memory-limit.md)

<br /><br /><br />

## ![✔] 8.8. Plan for efficient caching

**TL;DR:** Rebuilding a whole docker image from cache can be nearly instantaneous if done correctly. The less updated instructions should be at the top of your Dockerfile and the ones constantly changing (like app code) should be at the bottom.

**Otherwise:** Docker build will be very long and consume lot of resources even when making tiny changes

🔗 [**Read More: Leverage caching to reduce build times**](/sections/docker/use-cache-for-shorter-build-time.md)

<br /><br /><br />

## ![✔] 8.9. Use explicit image reference, avoid `latest` tag

**TL;DR:** Specify an explicit image digest or versioned label, never refer to `latest`. Developers are often led to believe that specifying the `latest` tag will provide them with the most recent image in the repository however this is not the case. Using a digest guarantees that every instance of the service is running exactly the same code.

In addition, referring to an image tag means that the base image is subject to change, as image tags cannot be relied upon for a deterministic install. Instead, if a deterministic install is expected, a SHA256 digest can be used to reference an exact image.

**Otherwise:** A new version of a base image could be deployed into production with breaking changes, causing unintended application behaviour.

🔗 [**Read More: Understand image tags and use the "latest" tag with caution**](/sections/docker/image-tags.md)

<br /><br /><br />

## ![✔] 8.10. Prefer smaller Docker base images

**TL;DR:** Large images lead to higher exposure to vulnerabilities and increased resource consumption. Using leaner Docker images, such as Slim and Alpine Linux variants, mitigates this issue.

**Otherwise:** Building, pushing, and pulling images will take longer, unknown attack vectors can be used by malicious actors and more resources are consumed.

🔗 [**Read More: Prefer smaller images**](/sections/docker/smaller_base_images.md)

<br /><br /><br />

## ![✔] 8.11. Clean-out build-time secrets, avoid secrets in args

**TL;DR:** Avoid secrets leaking from the Docker build environment. A Docker image is typically shared in multiple environment like CI and a registry that are not as sanitized as production. A typical example is an npm token which is usually passed to a dockerfile as argument. This token stays within the image long after it is needed and allows the attacker indefinite access to a private npm registry. This can be avoided by coping a secret file like `.npmrc` and then removing it using multi-stage build (beware, build history should be deleted as well) or by using Docker build-kit secret feature which leaves zero traces

**Otherwise:** Everyone with access to the CI and docker registry will also get access to some precious organization secrets as a bonus

🔗 [**Read More: Clean-out build-time secrets**](/sections/docker/avoid-build-time-secrets.md)

<br /><br /><br />

## ![✔] 8.12. Scan images for multi layers of vulnerabilities

**TL;DR:** Besides checking code dependencies vulnerabilities also scan the final image that is shipped to production. Docker image scanners check the code dependencies but also the OS binaries. This E2E security scan covers more ground and verifies that no bad guy injected bad things during the build. Consequently, it is recommended running this as the last step before deployment. There are a handful of free and commercial scanners that also provide CI/CD plugins

**Otherwise:** Your code might be entirely free from vulnerabilities. However it might still get hacked due to vulnerable version of OS-level binaries (e.g. OpenSSL, TarBall) that are commonly being used by applications

🔗 [**Read More: Generic Docker practices**](/sections/docker/scan-images.md)

<br /><br /><br />

## ![✔] 8.13 Clean NODE_MODULE cache

**TL;DR:** After installing dependencies in a container remove the local cache. It doesn't make any sense to duplicate the dependencies for faster future installs since there won't be any further installs - A Docker image is immutable. Using a single line of code tens of MB (typically 10-50% of the image size) are shaved off

**Otherwise:** The image that will get shipped to production will weigh 30% more due to files that will never get used

🔗 [**Read More: Clean NODE_MODULE cache**](/sections/docker/clean-cache.md)

<br /><br /><br />

## ![✔] 8.14. Generic Docker practices

**TL;DR:** This is a collection of Docker advice that is not related directly to Node.js - the Node implementation is not much different than any other language. Click read more to skim through.

🔗 [**Read More: Generic Docker practices**](/sections/docker/generic-tips.md)

<br/><br /><br />

## ![✔] 8.15. Lint your Dockerfile

**TL;DR:** Linting your Dockerfile is an important step to identify issues in your Dockerfile which differ from best practices. By checking for potential flaws using a specialised Docker linter, performance and security improvements can be easily identified, saving countless hours of wasted time or security issues in production code.

**Otherwise:** Mistakenly the Dockerfile creator left Root as the production user, and also used an image from unknown source repository. This could be avoided with with just a simple linter.

🔗 [**Read More: Lint your Dockerfile**](/sections/docker/lint-dockerfile.md)

<br/><br /><br />

<p align="right"><a href="#daftar-isi">⬆ Kembali ke atas</a></p>

# Milestones

To maintain this guide and keep it up to date, we are constantly updating and improving the guidelines and best practices with the help of the community. You can follow our [milestones](https://github.com/goldbergyoni/nodebestpractices/milestones) and join the working groups if you want to contribute to this project

<br/>

## Translations

All translations are contributed by the community. We will be happy to get any help with either completed, ongoing or new translations!

### Completed translations

- ![BR](/assets/flags/BR.png) [Brazilian Portuguese](./README.brazilian-portuguese.md) - Courtesy of [Marcelo Melo](https://github.com/marcelosdm)
- ![CN](/assets/flags/CN.png) [Chinese](./README.chinese.md) - Courtesy of [Matt Jin](https://github.com/mattjin)
- ![RU](/assets/flags/RU.png) [Russian](./README.russian.md) - Courtesy of [Alex Ivanov](https://github.com/contributorpw)
- ![PL](/assets/flags/PL.png) [Polish](./README.polish.md) - Courtesy of [Michal Biesiada](https://github.com/mbiesiad)

### Translations in progress

- ![FR](/assets/flags/FR.png) [French](https://github.com/gaspaonrocks/nodebestpractices/blob/french-translation/README.french.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/129))
- ![HE](/assets/flags/HE.png) Hebrew ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/156))
- ![KR](/assets/flags/KR.png) [Korean](README.korean.md) - Courtesy of [Sangbeom Han](https://github.com/uronly14me) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/94))
- ![ES](/assets/flags/ES.png) [Spanish](https://github.com/goldbergyoni/nodebestpractices/blob/spanish-translation/README.spanish.md) ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/95))
- ![TR](/assets/flags/TR.png) Turkish ([Discussion](https://github.com/goldbergyoni/nodebestpractices/issues/139))

<br/><br/>

## Steering Committee

Meet the steering committee members - the people who work together to provide guidance and future direction to the project. In addition, each member of the committee leads a project tracked under our [Github projects](https://github.com/goldbergyoni/nodebestpractices/projects).

<img align="left" width="100" height="100" src="assets/images/members/yoni.png">

[Yoni Goldberg](https://github.com/goldbergyoni)
<a href="https://twitter.com/goldbergyoni"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://goldbergyoni.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Independent Node.js consultant who works with customers in the USA, Europe, and Israel on building large-scale Node.js applications. Many of the best practices above were first published at [goldbergyoni.com](https://goldbergyoni.com). Reach Yoni at [@goldbergyoni](https://github.com/goldbergyoni) or [me@goldbergyoni.com](mailto:me@goldbergyoni.com)

<br/>

<img align="left" width="100" height="100" src="assets/images/members/bruno.png">

[Bruno Scheufler](https://github.com/BrunoScheufler)
<a href="https://brunoscheufler.com/"><img src="assets/images/www.png" width="16" height="16"></img></a>

💻 full-stack web engineer, Node.js & GraphQL enthusiast

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kyle.png">

[Kyle Martin](https://github.com/js-kyle)
<a href="https://twitter.com/kylemartin_93"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://www.linkedin.com/in/kylemartinnz"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Full Stack Developer & Site Reliability Engineer based in New Zealand, interested in web application security, and architecting and building Node.js applications to perform at global scale.

<br/>

<img align="left" width="100" height="100" src="assets/images/members/kevyn.png">

[Kevyn Bruyere](https://github.com/kevynb)
<a href="https://www.linkedin.com/in/kevynbruyere/"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>

Independent full-stack developer with a taste for Ops and automation.

<br/>

### Steering Committee Emeriti

<img align="left" width="100" height="100" src="assets/images/members/sagir.png">

[Sagir Khan](https://github.com/sagirk)
<a href="https://twitter.com/sagir_k"><img src="assets/images/twitter-s.png" width="16" height="16"></img></a>
<a href="https://linkedin.com/in/sagirk"><img src="assets/images/linkedin.png" width="16" height="16"></img></a>
<a href="https://sagirk.com"><img src="assets/images/www.png" width="16" height="16"></img></a>

Deep specialist in JavaScript and its ecosystem — React, Node.js, TypeScript, GraphQL, MongoDB, pretty much anything that involves JS/JSON in any layer of the system — building products using the web platform for the world’s most recognized brands. Individual Member of the Node.js Foundation.

<br/>

## Collaborators

Thank you to all our collaborators! 🙏

Our collaborators are members who are contributing to the repository on a regular basis, through suggesting new best practices, triaging issues, reviewing pull requests and more. If you are interested in helping us guide thousands of people to craft better Node.js applications, please read our [contributor guidelines](/.operations/CONTRIBUTING.md) 🎉

| <a href="https://github.com/idori" target="_blank"><img src="assets/images/members/ido.png" width="75" height="75"></a> | <a href="https://github.com/TheHollidayInn" target="_blank"><img src="assets/images/members/keith.png" width="75" height="75"></a> |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------: |
|                                    [Ido Richter (Founder)](https://github.com/idori)                                    |                                        [Keith Holliday](https://github.com/TheHollidayInn)                                         |

### Collaborator Emeriti

| <a href="https://github.com/refack" target="_blank"><img src="assets/images/members/refael.png" width="50" height="50"></a> |
| :-------------------------------------------------------------------------------------------------------------------------: |
|                                        [Refael Ackermann](https://github.com/refack)                                        |

<br/>

## Contributing

If you've ever wanted to contribute to open source, now is your chance! See the [contributing docs](.operations/CONTRIBUTING.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people who have contributed to this repository!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/kevinrambaud"><img src="https://avatars1.githubusercontent.com/u/7501477?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kevin Rambaud</b></sub></a><br /><a href="#content-kevinrambaud" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mfine15"><img src="https://avatars1.githubusercontent.com/u/1286554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Fine</b></sub></a><br /><a href="#content-mfine15" title="Content">🖋</a></td>
    <td align="center"><a href="http://squgeim.github.io"><img src="https://avatars0.githubusercontent.com/u/4996818?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shreya Dahal</b></sub></a><br /><a href="#content-squgeim" title="Content">🖋</a></td>
    <td align="center"><a href="http://matheusrocha89.com"><img src="https://avatars1.githubusercontent.com/u/3718366?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matheus Cruz Rocha</b></sub></a><br /><a href="#content-matheusrocha89" title="Content">🖋</a></td>
    <td align="center"><a href="https://bityog.github.io/Portfolio/"><img src="https://avatars2.githubusercontent.com/u/28219178?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yog Mehta</b></sub></a><br /><a href="#content-BitYog" title="Content">🖋</a></td>
    <td align="center"><a href="http://kudapara.co.zw"><img src="https://avatars3.githubusercontent.com/u/13519184?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kudakwashe Paradzayi</b></sub></a><br /><a href="#content-kudapara" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.t1st3.com/"><img src="https://avatars1.githubusercontent.com/u/1469638?v=4?s=100" width="100px;" alt=""/><br /><sub><b>t1st3</b></sub></a><br /><a href="#content-t1st3" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/mulijordan1976"><img src="https://avatars0.githubusercontent.com/u/33382022?v=4?s=100" width="100px;" alt=""/><br /><sub><b>mulijordan1976</b></sub></a><br /><a href="#content-mulijordan1976" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/matchai"><img src="https://avatars0.githubusercontent.com/u/4658208?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Matan Kushner</b></sub></a><br /><a href="#content-matchai" title="Content">🖋</a></td>
    <td align="center"><a href="https://fabiothiroki.github.io"><img src="https://avatars2.githubusercontent.com/u/670057?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Fabio Hiroki</b></sub></a><br /><a href="#content-fabiothiroki" title="Content">🖋</a></td>
    <td align="center"><a href="http://james.sumners.info/"><img src="https://avatars1.githubusercontent.com/u/321201?v=4?s=100" width="100px;" alt=""/><br /><sub><b>James Sumners</b></sub></a><br /><a href="#content-jsumners" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/_DanGamble"><img src="https://avatars2.githubusercontent.com/u/7152041?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dan Gamble</b></sub></a><br /><a href="#content-dan-gamble" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/trainorpj"><img src="https://avatars3.githubusercontent.com/u/13276704?v=4?s=100" width="100px;" alt=""/><br /><sub><b>PJ Trainor</b></sub></a><br /><a href="#content-trainorpj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/reod"><img src="https://avatars0.githubusercontent.com/u/3164299?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Remek Ambroziak</b></sub></a><br /><a href="#content-reod" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://ca.non.co.il"><img src="https://avatars0.githubusercontent.com/u/1829789?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yoni Jah</b></sub></a><br /><a href="#content-yonjah" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/hazolsky"><img src="https://avatars1.githubusercontent.com/u/1270790?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Misha Khokhlov</b></sub></a><br /><a href="#content-hazolsky" title="Content">🖋</a></td>
    <td align="center"><a href="https://plus.google.com/+ЕвгенийОрехов/"><img src="https://avatars3.githubusercontent.com/u/8045060?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Evgeny Orekhov</b></sub></a><br /><a href="#content-EvgenyOrekhov" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/gediminasml"><img src="https://avatars3.githubusercontent.com/u/19854105?v=4?s=100" width="100px;" alt=""/><br /><sub><b>-</b></sub></a><br /><a href="#content-gediminasml" title="Content">🖋</a></td>
    <td align="center"><a href="http://hisaac.net"><img src="https://avatars3.githubusercontent.com/u/923876?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Isaac Halvorson</b></sub></a><br /><a href="#content-hisaac" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.vedrankaracic.com"><img src="https://avatars3.githubusercontent.com/u/2808092?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vedran Karačić</b></sub></a><br /><a href="#content-vkaracic" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/lallenlowe"><img src="https://avatars3.githubusercontent.com/u/10761165?v=4?s=100" width="100px;" alt=""/><br /><sub><b>lallenlowe</b></sub></a><br /><a href="#content-lallenlowe" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/nwwells"><img src="https://avatars2.githubusercontent.com/u/1039473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nathan Wells</b></sub></a><br /><a href="#content-nwwells" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/paulovitin"><img src="https://avatars0.githubusercontent.com/u/125503?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Paulo Reis</b></sub></a><br /><a href="#content-paulovitin" title="Content">🖋</a></td>
    <td align="center"><a href="https://snap.simpego.ch"><img src="https://avatars2.githubusercontent.com/u/1989646?v=4?s=100" width="100px;" alt=""/><br /><sub><b>syzer</b></sub></a><br /><a href="#content-syzer" title="Content">🖋</a></td>
    <td align="center"><a href="http://sancho.dev"><img src="https://avatars0.githubusercontent.com/u/3763599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>David Sancho</b></sub></a><br /><a href="#content-davesnx" title="Content">🖋</a></td>
    <td align="center"><a href="https://apiforge.it"><img src="https://avatars0.githubusercontent.com/u/4929965?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Robert Manolea</b></sub></a><br /><a href="#content-pupix" title="Content">🖋</a></td>
    <td align="center"><a href="https://jumptoglide.com"><img src="https://avatars2.githubusercontent.com/u/708395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Ho</b></sub></a><br /><a href="#content-spaxe" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.ocular-rhythm.io"><img src="https://avatars0.githubusercontent.com/u/2738518?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aaron</b></sub></a><br /><a href="#content-ocularrhythm" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://septa97.me"><img src="https://avatars2.githubusercontent.com/u/13742634?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Charles Maghirang Adona</b></sub></a><br /><a href="#content-septa97" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.cakeresume.com/allenfang"><img src="https://avatars2.githubusercontent.com/u/5351390?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Allen</b></sub></a><br /><a href="#content-AllenFang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leonardovillela"><img src="https://avatars3.githubusercontent.com/u/8650543?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leonardo Villela</b></sub></a><br /><a href="#content-leonardovillela" title="Content">🖋</a></td>
    <td align="center"><a href="https://michalzalecki.com"><img src="https://avatars1.githubusercontent.com/u/3136577?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michał Załęcki</b></sub></a><br /><a href="#content-MichalZalecki" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.wealthbar.com"><img src="https://avatars1.githubusercontent.com/u/156449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chris Nicola</b></sub></a><br /><a href="#content-chrisnicola" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/aecorredor"><img src="https://avatars3.githubusercontent.com/u/9114987?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Corredor</b></sub></a><br /><a href="#content-aecorredor" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cwar"><img src="https://avatars3.githubusercontent.com/u/272843?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cwar</b></sub></a><br /><a href="#content-cwar" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/keyfoxth"><img src="https://avatars3.githubusercontent.com/u/10647132?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Yuwei</b></sub></a><br /><a href="#content-keyfoxth" title="Content">🖋</a></td>
    <td align="center"><a href="https://bigcodenerd.org"><img src="https://avatars3.githubusercontent.com/u/10895594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Utkarsh Bhatt</b></sub></a><br /><a href="#content-utkarshbhatt12" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/duartemendes"><img src="https://avatars2.githubusercontent.com/u/12852058?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Duarte Mendes</b></sub></a><br /><a href="#content-duartemendes" title="Content">🖋</a></td>
    <td align="center"><a href="http://jasonkim.ca"><img src="https://avatars2.githubusercontent.com/u/103456?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jason Kim</b></sub></a><br /><a href="#content-serv" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Max101"><img src="https://avatars2.githubusercontent.com/u/2124249?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mitja O.</b></sub></a><br /><a href="#content-Max101" title="Content">🖋</a></td>
    <td align="center"><a href="http://sandromiguel.com"><img src="https://avatars0.githubusercontent.com/u/6423157?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sandro Miguel Marques</b></sub></a><br /><a href="#content-SandroMiguel" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/GabeKuslansky"><img src="https://avatars3.githubusercontent.com/u/9855482?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabe</b></sub></a><br /><a href="#content-GabeKuslansky" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://ripper234.com/"><img src="https://avatars1.githubusercontent.com/u/172282?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ron Gross</b></sub></a><br /><a href="#content-ripper234" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.thecodebarbarian.com"><img src="https://avatars2.githubusercontent.com/u/1620265?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Valeri Karpov</b></sub></a><br /><a href="#content-vkarpov15" title="Content">🖋</a></td>
    <td align="center"><a href="https://sergiobernal.com"><img src="https://avatars3.githubusercontent.com/u/20087388?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergio Bernal</b></sub></a><br /><a href="#content-imsergiobernal" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ntelkedzhiev"><img src="https://avatars2.githubusercontent.com/u/7332371?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nikola Telkedzhiev</b></sub></a><br /><a href="#content-ntelkedzhiev" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/vitordagamagodoy"><img src="https://avatars0.githubusercontent.com/u/26370059?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vitor Godoy</b></sub></a><br /><a href="#content-vitordagamagodoy" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.manishsaraan.com/"><img src="https://avatars2.githubusercontent.com/u/19797340?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Manish Saraan</b></sub></a><br /><a href="#content-manishsaraan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/uronly14me"><img src="https://avatars2.githubusercontent.com/u/5186814?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sangbeom Han</b></sub></a><br /><a href="#content-uronly14me" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://blackmatch.github.io"><img src="https://avatars3.githubusercontent.com/u/12443954?v=4?s=100" width="100px;" alt=""/><br /><sub><b>blackmatch</b></sub></a><br /><a href="#content-blackmatch" title="Content">🖋</a></td>
    <td align="center"><a href="https://simmsreeve.com"><img src="https://avatars3.githubusercontent.com/u/5173131?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joe Reeve</b></sub></a><br /><a href="#content-ISNIT0" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/BusbyActual"><img src="https://avatars2.githubusercontent.com/u/14985016?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Busby</b></sub></a><br /><a href="#content-BusbyActual" title="Content">🖋</a></td>
    <td align="center"><a href="http://jsdecorator.com"><img src="https://avatars3.githubusercontent.com/u/4482199?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Iman Mohamadi</b></sub></a><br /><a href="#content-ImanMh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/HeeL"><img src="https://avatars1.githubusercontent.com/u/287769?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sergii Paryzhskyi</b></sub></a><br /><a href="#content-HeeL" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kapilepatel"><img src="https://avatars3.githubusercontent.com/u/25738473?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kapil Patel</b></sub></a><br /><a href="#content-kapilepatel" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/justjavac"><img src="https://avatars1.githubusercontent.com/u/359395?v=4?s=100" width="100px;" alt=""/><br /><sub><b>迷渡</b></sub></a><br /><a href="#content-justjavac" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/hozefaj"><img src="https://avatars1.githubusercontent.com/u/2084833?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hozefa</b></sub></a><br /><a href="#content-hozefaj" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/el-ethan"><img src="https://avatars3.githubusercontent.com/u/10249884?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ethan</b></sub></a><br /><a href="#content-el-ethan" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/milkdeliver"><img src="https://avatars2.githubusercontent.com/u/3108407?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sam</b></sub></a><br /><a href="#content-milkdeliver" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ArlindXh"><img src="https://avatars0.githubusercontent.com/u/19508764?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Arlind</b></sub></a><br /><a href="#content-ArlindXh" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ttous"><img src="https://avatars0.githubusercontent.com/u/19815440?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Teddy Toussaint</b></sub></a><br /><a href="#content-ttous" title="Content">🖋</a></td>
    <td align="center"><a href="http://ardern.io"><img src="https://avatars2.githubusercontent.com/u/2419690?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lewis</b></sub></a><br /><a href="#content-LewisArdern" title="Content">🖋</a></td>
    <td align="center"><a href="https://gabriellidenor.com/"><img src="https://avatars2.githubusercontent.com/u/765963?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Gabriel Lidenor </b></sub></a><br /><a href="#content-GabrielLidenor" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/animir"><img src="https://avatars3.githubusercontent.com/u/4623196?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roman</b></sub></a><br /><a href="#content-animir" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Francozeira"><img src="https://avatars1.githubusercontent.com/u/47419763?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Francozeira</b></sub></a><br /><a href="#content-Francozeira" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/invvard"><img src="https://avatars0.githubusercontent.com/u/7305493?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Invvard</b></sub></a><br /><a href="#content-Invvard" title="Content">🖋</a></td>
    <td align="center"><a href="https://romulogarofalo.github.io/"><img src="https://avatars1.githubusercontent.com/u/18492592?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rômulo Garofalo</b></sub></a><br /><a href="#content-romulogarofalo" title="Content">🖋</a></td>
    <td align="center"><a href="http://thoqbk.github.io/"><img src="https://avatars0.githubusercontent.com/u/1491103?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tho Q Luong</b></sub></a><br /><a href="#content-thoqbk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Qeneke"><img src="https://avatars2.githubusercontent.com/u/20271568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Burak Shen</b></sub></a><br /><a href="#content-Qeneke" title="Content">🖋</a></td>
    <td align="center"><a href="http://www.happy-css.com"><img src="https://avatars0.githubusercontent.com/u/2950505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Muzatko</b></sub></a><br /><a href="#content-MartinMuzatko" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/autoboxer"><img src="https://avatars3.githubusercontent.com/u/2757601?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jared Collier</b></sub></a><br /><a href="#content-autoboxer" title="Content">🖋</a></td>
    <td align="center"><a href="http://hiltonmeyer.com"><img src="https://avatars3.githubusercontent.com/u/4545860?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hilton Meyer</b></sub></a><br /><a href="#content-bikingbadger" title="Content">🖋</a></td>
    <td align="center"><a href="http://kr.vuejs.org"><img src="https://avatars0.githubusercontent.com/u/1451365?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ChangJoo Park(박창주)</b></sub></a><br /><a href="#content-ChangJoo-Park" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/MasahiroSakaguchi"><img src="https://avatars0.githubusercontent.com/u/16427431?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Masahiro Sakaguchi</b></sub></a><br /><a href="#content-MasahiroSakaguchi" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/TheHollidayInn"><img src="https://avatars1.githubusercontent.com/u/1253400?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Keith Holliday</b></sub></a><br /><a href="#content-TheHollidayInn" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.coreycleary.me"><img src="https://avatars3.githubusercontent.com/u/1485356?v=4?s=100" width="100px;" alt=""/><br /><sub><b>coreyc</b></sub></a><br /><a href="#content-coreyc" title="Content">🖋</a></td>
    <td align="center"><a href="http://maxcubing.wordpress.com"><img src="https://avatars0.githubusercontent.com/u/8260834?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Maximilian Berkmann</b></sub></a><br /><a href="#content-Berkmann18" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/DouglasMV"><img src="https://avatars3.githubusercontent.com/u/32845487?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Douglas Mariano Valero</b></sub></a><br /><a href="#content-DouglasMV" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/marcelosdm"><img src="https://avatars0.githubusercontent.com/u/18266600?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Marcelo Melo</b></sub></a><br /><a href="#content-marcelosdm" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/mperk_"><img src="https://avatars0.githubusercontent.com/u/3465794?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mehmet Perk</b></sub></a><br /><a href="#content-mperk" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/ryanouyang"><img src="https://avatars2.githubusercontent.com/u/360426?v=4?s=100" width="100px;" alt=""/><br /><sub><b>ryan ouyang</b></sub></a><br /><a href="#content-ryanouyang" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/shabeer-mdy"><img src="https://avatars0.githubusercontent.com/u/26842535?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shabeer</b></sub></a><br /><a href="#content-shabeer-mdy" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/halfzebra"><img src="https://avatars1.githubusercontent.com/u/3983879?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Eduard Kyvenko</b></sub></a><br /><a href="#content-halfzebra" title="Content">🖋</a></td>
    <td align="center"><a href="http://deyvisonrocha.com"><img src="https://avatars2.githubusercontent.com/u/686067?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Deyvison Rocha</b></sub></a><br /><a href="#content-deyvisonrocha" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://twitter.com/georgemamer"><img src="https://avatars1.githubusercontent.com/u/20108934?v=4?s=100" width="100px;" alt=""/><br /><sub><b>George Mamer</b></sub></a><br /><a href="#content-georgem3" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/leimonio"><img src="https://avatars0.githubusercontent.com/u/1969742?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Konstantinos Leimonis</b></sub></a><br /><a href="#content-leimonio" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/Zybax"><img src="https://avatars3.githubusercontent.com/u/22094453?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Oliver Lluberes</b></sub></a><br /><a href="#translation-Zybax" title="Translation">🌍</a></td>
    <td align="center"><a href="https://stackoverflow.com/story/tiendq"><img src="https://avatars2.githubusercontent.com/u/815910?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tien Do</b></sub></a><br /><a href="#content-tiendq" title="Content">🖋</a></td>
    <td align="center"><a href="http://singh1114.github.io/"><img src="https://avatars0.githubusercontent.com/u/11356398?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ranvir Singh</b></sub></a><br /><a href="#content-singh1114" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/collierrgbsitisfise"><img src="https://avatars3.githubusercontent.com/u/13496126?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vadim Nicolaev</b></sub></a><br /><a href="#content-collierrgbsitisfise" title="Content">🖋</a> <a href="#translation-collierrgbsitisfise" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/germangamboa95"><img src="https://avatars3.githubusercontent.com/u/28633849?v=4?s=100" width="100px;" alt=""/><br /><sub><b>German Gamboa Gonzalez</b></sub></a><br /><a href="#content-germangamboa95" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AbdelrahmanHafez"><img src="https://avatars3.githubusercontent.com/u/19984935?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Hafez</b></sub></a><br /><a href="#content-AbdelrahmanHafez" title="Content">🖋</a></td>
    <td align="center"><a href="http://linkedin.com/in/chandiran-dmc"><img src="https://avatars3.githubusercontent.com/u/42678579?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chandiran</b></sub></a><br /><a href="#content-chandiran-dmc" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/VinayaSathyanarayana"><img src="https://avatars2.githubusercontent.com/u/16976677?v=4?s=100" width="100px;" alt=""/><br /><sub><b>VinayaSathyanarayana</b></sub></a><br /><a href="#content-VinayaSathyanarayana" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.kimkern.de"><img src="https://avatars1.githubusercontent.com/u/2671139?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kim Kern</b></sub></a><br /><a href="#content-kiwikern" title="Content">🖋</a></td>
    <td align="center"><a href="https://kennethfreitas.github.io/"><img src="https://avatars2.githubusercontent.com/u/55669043?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kenneth Freitas</b></sub></a><br /><a href="#content-kennethfreitas" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/songe"><img src="https://avatars2.githubusercontent.com/u/1531561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>songe</b></sub></a><br /><a href="#content-songe" title="Content">🖋</a></td>
    <td align="center"><a href="http://ksed.dev"><img src="https://avatars1.githubusercontent.com/u/30693707?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Kirill Shekhovtsov</b></sub></a><br /><a href="#content-Ksedline" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/SerzN1"><img src="https://avatars0.githubusercontent.com/u/2534649?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Serge</b></sub></a><br /><a href="#content-SerzN1" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/keyrwinz"><img src="https://avatars3.githubusercontent.com/u/21241761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>keyrwinz</b></sub></a><br /><a href="#content-keyrwinz" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/nDmitry"><img src="https://avatars0.githubusercontent.com/u/2134568?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dmitry Nikitenko</b></sub></a><br /><a href="#content-nDmitry" title="Content">🖋</a></td>
    <td align="center"><a href="https://bushuai.cc"><img src="https://avatars0.githubusercontent.com/u/1875256?v=4?s=100" width="100px;" alt=""/><br /><sub><b>bushuai</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/pulls?q=is%3Apr+reviewed-by%3Abushuai" title="Reviewed Pull Requests">👀</a> <a href="#content-bushuai" title="Content">🖋</a></td>
    <td align="center"><a href="https://stackoverflow.com/users/1348195/benjamin-gruenbaum"><img src="https://avatars2.githubusercontent.com/u/1315533?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Benjamin Gruenbaum</b></sub></a><br /><a href="#content-benjamingr" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/byeze"><img src="https://avatars1.githubusercontent.com/u/7424138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ezequiel</b></sub></a><br /><a href="#translation-byeze" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/juaoose"><img src="https://avatars3.githubusercontent.com/u/994594?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Juan José Rodríguez</b></sub></a><br /><a href="#translation-juaoose" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/OrBin"><img src="https://avatars1.githubusercontent.com/u/6897234?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Or Bin</b></sub></a><br /><a href="#content-OrBin" title="Content">🖋</a></td>
    <td align="center"><a href="https://twitter.com/andreoav07"><img src="https://avatars2.githubusercontent.com/u/508827?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andreo Vieira</b></sub></a><br /><a href="#content-andreoav" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/mikicho"><img src="https://avatars1.githubusercontent.com/u/11459632?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Michael Solomon</b></sub></a><br /><a href="#content-mikicho" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jimmycallin"><img src="https://avatars0.githubusercontent.com/u/2225828?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jimmy Callin</b></sub></a><br /><a href="#content-jimmycallin" title="Content">🖋</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/siddharthofficial/"><img src="https://avatars2.githubusercontent.com/u/26025955?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siddharth</b></sub></a><br /><a href="#content-w01fS" title="Content">🖋</a></td>
    <td align="center"><a href="https://ryansmith.tech/"><img src="https://avatars0.githubusercontent.com/u/1578766?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ryan Smith</b></sub></a><br /><a href="#content-ryan3E0" title="Content">🖋</a></td>
    <td align="center"><a href="https://de.linkedin.com/in/tom-boettger"><img src="https://avatars2.githubusercontent.com/u/49961674?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tom Boettger</b></sub></a><br /><a href="#content-bttger" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/jormaechea"><img src="https://avatars3.githubusercontent.com/u/5612500?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Joaquín Ormaechea</b></sub></a><br /><a href="#translation-jormaechea" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/dfrzuz"><img src="https://avatars3.githubusercontent.com/u/71859096?v=4?s=100" width="100px;" alt=""/><br /><sub><b>dfrzuz</b></sub></a><br /><a href="#translation-dfrzuz" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/victor-homyakov"><img src="https://avatars1.githubusercontent.com/u/121449?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Victor Homyakov</b></sub></a><br /><a href="#content-victor-homyakov" title="Content">🖋</a></td>
    <td align="center"><a href="http://joshuahemphill.com"><img src="https://avatars3.githubusercontent.com/u/46608115?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Josh</b></sub></a><br /><a href="#content-josh-hemphill" title="Content">🖋</a> <a href="#security-josh-hemphill" title="Security">🛡️</a></td>
    <td align="center"><a href="https://github.com/alec-francis"><img src="https://avatars2.githubusercontent.com/u/32949882?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alec Francis</b></sub></a><br /><a href="#content-alec-francis" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/arjun6610"><img src="https://avatars1.githubusercontent.com/u/61268891?v=4?s=100" width="100px;" alt=""/><br /><sub><b>arjun6610</b></sub></a><br /><a href="#content-arjun6610" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/jan-osch"><img src="https://avatars2.githubusercontent.com/u/11651780?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jan Osch</b></sub></a><br /><a href="#content-jan-osch" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/thiagotrs"><img src="https://avatars2.githubusercontent.com/u/32005779?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thiago Rotondo Sampaio</b></sub></a><br /><a href="#translation-thiagotrs" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Alexsey"><img src="https://avatars0.githubusercontent.com/u/6392013?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alexsey</b></sub></a><br /><a href="#content-Alexsey" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/13luismb"><img src="https://avatars1.githubusercontent.com/u/32210483?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luis A. Acurero</b></sub></a><br /><a href="#translation-13luismb" title="Translation">🌍</a></td>
    <td align="center"><a href="https://lromano97.github.io/"><img src="https://avatars1.githubusercontent.com/u/22394847?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Lucas Romano</b></sub></a><br /><a href="#translation-lromano97" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/denisecase"><img src="https://avatars0.githubusercontent.com/u/13016516?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Denise Case</b></sub></a><br /><a href="#content-denisecase" title="Content">🖋</a></td>
    <td align="center"><a href="http://stackoverflow.com/story/elektronik"><img src="https://avatars3.githubusercontent.com/u/1078554?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nick Ribal</b></sub></a><br /><a href="#content-elektronik2k5" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/0xflotus"><img src="https://avatars3.githubusercontent.com/u/26602940?v=4?s=100" width="100px;" alt=""/><br /><sub><b>0xflotus</b></sub></a><br /><a href="#content-0xflotus" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://www.dijonkitchen.org/"><img src="https://avatars3.githubusercontent.com/u/11434205?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Chen</b></sub></a><br /><a href="#content-dijonkitchen" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/dilansri"><img src="https://avatars2.githubusercontent.com/u/5089728?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dilan Srilal</b></sub></a><br /><a href="#content-dilansri" title="Content">🖋</a></td>
    <td align="center"><a href="https://vectree.ru"><img src="https://avatars3.githubusercontent.com/u/4215285?v=4?s=100" width="100px;" alt=""/><br /><sub><b>vladthelittleone</b></sub></a><br /><a href="#translation-vladthelittleone" title="Translation">🌍</a></td>
    <td align="center"><a href="https://www.nikolaso.com"><img src="https://avatars0.githubusercontent.com/u/60047271?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nik Osvalds</b></sub></a><br /><a href="#content-nosvalds" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/kdaniel21"><img src="https://avatars0.githubusercontent.com/u/39854385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Daniel Kiss</b></sub></a><br /><a href="https://github.com/goldbergyoni/nodebestpractices/commits?author=kdaniel21" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/forresst17"><img src="https://avatars2.githubusercontent.com/u/163352?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Forresst</b></sub></a><br /><a href="#content-forresst" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/svenheden"><img src="https://avatars1.githubusercontent.com/u/76098?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jonathan Svenheden</b></sub></a><br /><a href="#content-svenheden" title="Content">🖋</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/AustrisC"><img src="https://avatars2.githubusercontent.com/u/12381652?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AustrisC</b></sub></a><br /><a href="#content-AustrisC" title="Content">🖋</a></td>
    <td align="center"><a href="https://github.com/cisco0808"><img src="https://avatars0.githubusercontent.com/u/60251188?v=4?s=100" width="100px;" alt=""/><br /><sub><b>kyeongtae kim</b></sub></a><br /><a href="#translation-cisco0808" title="Translation">🌍</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->
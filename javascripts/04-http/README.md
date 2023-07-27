# HTTP

**Agenda**
* Pengenalan HTTP
* URL
* HTTP Method
* HTTP Header
* HTTP Body
* HTTP Response
* HTTP Cookie
* Dan lain-lain

## Pengenalan HTTP
* HTTP singkatan dari Hypertext Transfer Protocol
* merupakan protokol untuk melakukan transmisi hypermedia document, seperti HTML, javascript, CSS, Image, Audio, Video, dan lain-lain
* HTTP awalnya di desain untuk komunikasi antara Web Browser dan Web Server, namun saat ini sering juga digunakan untuk kebutuhan lain

### Client Server
* HTTP mengikuti arsitektur client dan server
* Client mengirimkan HTTP Request untuk meminta atau mengirim informasi ke server
* Dan server membalasnya dengan HTTP Response dari HTTP Request yang diterima

### Plain Language and Human Readable
HTTP didesain menggunakan bahasa yang mudah dimengerti oleh bahasa manusia, seperti:
* GET
* POST
* PUT
* DELETE
* HEAD
* OPTION

### Stateless
* HTTP merupakan protokol yang stateless
* Artinya tiap HTTP Request merupakan request yang independen, tidak ada keterkaitan atau hubungan dengan HTTP Request sebelum atau setelahnya
* Hal ini dilakukan agar HTTP Request tidak harus dilakukan dalam sequence, sehingga client bisa melakukan HTTP Request secara bebas tanpa ada aturan harus dimulai dari mana

### Session
* Jika HTTP merupakan protokol yang stateless, bagaimana dengan session? Misal client harus login terlebih dahulu sebelum berinteraksi?
* Untuk menangani permasalahan ini, HTTP memiliki fitur bernama HTTP Cookie
* HTTP Cookie memaksa client menyimpan informasi yang diberikan oleh server


## HTTP Version
* Spesifikasi HTTP selalu diperbaharui
* Saat ini, kebanyakan web berjalan di HTTP/1.1 atau HTTP2
* HTTP2 mulai hadir sekitar tahun 2015, dan saat ini sudah banyak diadopsi oleh semua Web di dunia

### HTTP/1.1 vs HTTP2
* Saat ini HTTP/1.1 merupakan fallback protocol, dimana Web Browser secara default akan melakukan request menggunakan HTTP/2, jika web server tidak mendukung, maka web browser akan melakukan fallback ke protocol HTTP/1.1
* Secara garis besar, spesifikasi HTTP/2 sama dengan HTTP/1.1, yang membedakan adalah pada HTTP/2, HTTP Request yang dikirim dalam bentuk teks, secara otomatis menjadi binary, sehingga lebih cepat dibandigkan HTTP/1.1
* Selain itu di HTTP/2, menggunakan algoritma kompresi untuk memperkecil request dan mendukung multiplexing, sehingga bisa mengirim beberapa request dalam satu connection yang sama
* Dari sisi pembuatan aplikasi, tidak ada perbedaan, semua ini biasanya sudah diurus secara otomatis oleh Web Server yang kita gunakan.

### HTTPS
* Secara default, HTTP tidaklah aman
* HTTPS merupakan HTTP dengan enkripsi
* Perbedaan HTTP dan HTTPS adalah: pada HTTPS menggunakan SSL (Secure Sockets Layer) untuk melakukan enkripsi HTTP Request dan HTTP Response
* Hasilnya HTTPS jauh lebih aman dibanding dengan HTTP biasa
* Web yang menggunakan HTTPS akan menggunakan https:// pada urlnya, dan yang hanya menggunakan HTTP tanpa enkripsi, akan menggunakan http://


## HTTP Terminology
* Saat kita belajar HTTP, ada banyak sekali menggunakan terminologi, istilah atau teknologi
* Kita perlu mengerti tentang hal tersebut

### Web Browser
* Merupakan aplikasi yang digunakan untuk mengakses Web menggunakan protokol HTTP
* Contohnya aplikasi Google Chrome, Firefox, Opera, Safari, dan lain-lain

### TCP
* TCP singkatan dari Transmission Control Protocol, adalah salah satu protokol dalam jaringan komputer yang biasa digunakan oleh web, email, FTP, atau lainnya
* Jika kita menggunakan jaringan internet, kemungkinan besar kita akan menggunakan protocol TCP untuk melakukan koneksi jaringannya

### IP
* IP singkatan dari Internet Protocol
* IP digunakan sebagai identitas komputer di jaringan
* Setiap komputer baik itu client dan server akan memiliki IP
* Untuk mengecek IP jaringan kita di internet, contohnya kita bisa mengakses web [IP Address](https://whatismyipaddress.com/)

### URL
* URL singkatan dari Uniform Resource Locator
* URL merupakan alamat dari sebuah resource di Web

### DNS
* singkatan dari Domain Name Server
* DNS merupakan tempat yang berisi data katalog pemetaan antara nama domain di URL menuju lokasi IP Computer
* Saat Web Browser mengakses sebuah domain di web, sebenarnya prosesnya akan bertanya ke DNS untuk mendapatkan IP, lalu Web Browser akan melakukan request ke IP tersebut
* Untuk mengecek IP sebuah domain, kita bisa gunakan [website berikut](https://www.whatismyip.com/dns-lookup/)

### Web Server
* Web Server merupakan aplikasi yang berjalan di jaringan internet yang bertugas sebagai server
* Web Server berisi informasi dan data yang bisa diakses oleh client
* Web Server akan menerima request dari client dan membalas request tersebut berupa informasi yang diminta oleh client


## HTTP Flow
* Bagaimana alur kerja HTTP?
* Dalam HTTP, biasanya terdapat 2 pihak yang terlibat, yaitu Client dan Server
* Client akan mengirimkan Request
* dan Server akan menerima Request dan membalas dengan Response

### Server
* Server merupakan sebuah komputer, dimana semua informasi disimpan pada komputer tersebut
* Komputer server biasanya menjalankan aplikasi Web Server agar bisa menerima protocol HTTP

### Client
* Client merupakan komputer yang bertugas mengirim HTTP Request ke komputer Server
* Untuk mengirim request HTTP, biasanya client akan menggunakan aplikasi Web Browser
* Client dan Server harus terkoneksi dalam jaringan yang sama agar bisa berkomunikasi
* Misal saja, client dan server terhubung dalam jaringan internet

### Request
* Client akan mengirim request ke Server dalam bentuk HTTP Request
* HTTP Request berisikan informasi seperti lokasi resource, data yang dikirim jika ada, dan lain-lain
* HTTP Request akan diterima oleh Server
* Selanjutnya Server akan memproses request yang diminta oleh Client tersebut

### Response
* Setelah Server memproses HTTP Request yang dikirim oleh Client
* Server akan membalas dengan HTTP Response
* HTTP Response biasanya berisikan data yang diminta oleh Client dalam HTTP Request


## Browser Network Tool
* Untuk lebih mempermudah melihat apa yang dilakukan di belakang Web Browser, biasanya Web Browser memiliki fitur Network Tool
* Contohnya di browser seperti Google Chrome dan Firefox sudah memiliki Network Tool
* Dengan Network Tool, kita bisa melihat semua detail HTTP Request dan HTTP Response yang dilakukan oleh Client dan Server

### Tugas
* Buka website [berikut](https://www.programmerzamannow.com/)
* Lalu lihat informasi HTTP Request dan HTTP Response yang terjadi menggunakan Network Tool yang terdapat di Browser yang kita gunakan 


## HTTP Request dan Response

### HTTP Message
* HTTP Request dan HTTP Response sebenarnya adalah sebuah HTTP Message
* HTTP Message memiliki standarisasi format
* Dengan demikian, jika kita ingin membuat Client dan Server sendiri, sebenarnya bisa kita lakukan, asal kita mengikuti standarisasi format HTTP Message
<br>

### ![Image HTTP Message untuk Request](images/01-httpmessageRequest.png) 
<br>

* bentuknya teks 
* header isinya key dan value, contohnya: host itu isinya adalah domain
* /login merupakan context path
* URL itu gabungan antara host dengan context path
* space berguna untuk memisahkan antara Header dengan Body
* Body bisa berupa teks / video / gambar / audio

### ![Image HTTP Message untuk Response](images/02-httpmessageResponse.png)
<br>

* kalau pada response langsung HTTP version dan status code pada start line
* Setelah start line diresponse barulah header
* Body bisa berupa teks / video / gambar / audio


## HTTP Method
* Dalam HTTP Request, hal yang pertama kita perlu tentukan adalah HTTP Method
* HTTP Method mirip seperti kategori request
* Ada banyak HTTP Method yang dapat kita gunakan ketika membuat HTTP Request, dan kita bisa sesuaikan dengan kebutuhan yang kita inginkan

### ![HTTP Message](images/03-HTTPMessage.png)
<br>

* Kata pertama pada baris pertama (start line) seperti: `POST` itu adalah contoh HTTP Method

### Jenis HTTP Method

| HTTP Method                       | Keterangan                                                |
| --------------------------------- | --------------------------------------------------------- |
| GET                               | GET method digunakan untuk melakukan request data. REquest menggunakan GET hanya untuk menerima data, bukan untuk mengirim data                               |
| HEAD                              | HEAD method digunakan sama seperti dengan GET, tapi tanpa membutuhkan response body (misal untuk melihat apakah ada data gambar atau tidak -> butuh request data tapi tidak butuh datanya)                              |
| POST                              | POST method digunakan untuk mengirim data ke Server, biasanya POST digunakan untuk mengirim data baru sehingga biasanya memiliki request body                               |
| PUT                               | PUT method digunakan untuk mengganti semua data yang terdapat di Server dengan data baru yang dikirim di Request (misal udah upload 1 gambar, tapi ingin ganti gambarnya (ditimpa), biasanya menggunakan PUT)                       |
| DELETE                            | DELETE method digunakan untuk menghapus data                              |
| PATCH                             | PATCH method digunakan untuk mengubah sebagian data  (PUT itu mengubah seluruh data, kalau PATCH hanya mengganti sebagian). Misalnya di web sudah punya nama depan, nama tengah, dan nama belakang. Kalau pada PUT maka akan menimpa semuanya, kalau PATCH hanya mengubah salah satu saja, contohnya: mengubah nama depan saja atau nama tengahnya saja                         |
| OPTIONS                           | OPTIONS method digunakan untuk mendeskripsikan opsi komunikasi yang tersedia. Biasanya melakukan HTTP Method OPTIONS untuk bertanya ke server kira-kira ada opsi atau operasi komunikasi apa saja yang tersedia di server tersebut, apakah ada POST, GET, DELETE, dsb                         |
| TRACE                             | TRACE method merupakan request method untuk debugging. Response TRACE method akan mengembalikan seluruh informasi yang dikirim oleh Client. Saat membuat web, sangat direkomentasikan untuk **tidak mengaktifkan TRACE method** ketika sudah live di production karena bisa disalahgunakan oleh orang lain.                              |


## URL
* URL singkatan dari Uniform Resource Locator
* URL merupakan alamat dari sebuah resource di Web
* URL wajib kita gunakan untuk menuju informasi resource yang akan kita tuju dalam Web
* Tanpa URL, Client atau Server tidak akan mengerti informasi apa yang ingin kita cari

### Anatomi URL
* URL terdiri dari beberapa bagian
* Beberapa bagian wajib ada, beberapa bagian tidak wajib ada
* Berikut adalah contoh URL:
    * https://www.programmerzamannow.com/
    * https://www.programmerzamannow.com/premium-membership/
    * https://www.programmerzamannow.com/?search=java

### Schema
* Bagian awal di URL adalah schema yang mengindikasikan protocol yang perlu digunakan oleh Client
* Biasanya dalam URL website, schema protocol tersebut adalah http dan https

![Image Schema](images/04-schema.png)

### Authority
* Selanjutnya, dipisahkan dengan tanda :// diikuti dengan authority, yang terdiri dari nama domain dan nomor port yang dipisah menggunakan titik dua
* Biasanya dikenal dengan domain. Namun kenapa tidak disebut domain? karena dalam authority sebenarnya terdapat 2 bagian.
* Nama domain nanti akan ditanyakan ke DNS untuk mendapatkan alamat IP nya
* Namun kita juga bisa langsung menggunakan IP jika memang website tersebut tidak memiliki nama domain
* Nomor port tidak wajib, tanpa nomor port, secara default bernilai 80 untuk http dan 443 untuk https

![Image Authority](images/05-authority.png)

### Path
* Ada beberapa yang bilang bahwa ini adalah Context Path. (sama saja)
* Path merupakan komponen yang tidak wajib
* Path biasanya berisikan informasi menuju ke detail resource yang kita tuju
* Path terlihat seperti kumpulan folder dan diakhiri dengan file yang ingin kita akses

![Image Path](images/06-path.png)

### Parameters
* Dalam URL juga bisa terdapat informasi parameters, namun ini tidak wajib
* Parameter dipisah oleh karakter `?` setelah Authority atau Path
* Parameter merupakan informasi tambahan yang berisi key=value, jika ingin menambahkan lebih dari satu parameter, kita bisa tambahkan dengan menggunakan karakter `&`

![Image Parameters](images/07-parameters.png)

### Anchor
* Achor merupakan bagian yang tidak wajib di URL
* Anchor merupakan representasi bookmark dalam sebuah halaman website
* Misal jika dalam website terdapat banyak sekali bagian informasi, kita bisa menggunakan anchor sebagai bookmark ke tiap bagian informasi tersebut agar lebih mudah diakses.

![Image Anchor](images/08-anchor.png)


## HTTP Header
* HTTP Header merupakan informasi tambahan yang biasa dikirim di Request atau Response
* HTTP Header biasanya digunakan agar informasi tidak harus dikirim melalui Request Body atau Response Body
* HTTP Header berisi key : value, dan saat ini banyak sekali standarisasi nama key pada HTTP Header
* [List of HTTP header fields](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)

![Image HTTP Message](images/09-http-message.png)

### Contoh HTTP Header


| HTTP Header                       | Keterangan                                                |
| --------------------------------- | --------------------------------------------------------- |
| Host                              | Authority pada URL (wajib sejak versi HTTP/1.1)           |
| Content-Type                      | Tipe data dari HTTP Body                              |
| User-Agent                        | Informasi user agent (seperti browser dan sistem operasi)                              |
| Accept                            | Tipe data yang diterima oleh Client                              |
| Authorization                     | Credential untuk autentikasi (misal username + password)                              |


## HTTP Status
* HTTP Status merupakan kode HTTP Response yang mengindikasikan apakah sebuah request yang diterima Server sukses, gagal atau ada hal lain yang harus diketahui oleh Client
* HTTP status diklasifikasikan dalam lima grup yaitu:
    * Informational Response (100 - 199)
    * Successful Response (200 - 299)
    * Redirect (300 - 399)
    * Client Error (400 - 499)
    * Server Error (500 - 599)
* [List of HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

### HTTP Response
![HTTP Response image](images/10-http-response.png)

### Informational Response (100 - 199)
* Informational Response mengindikasi bahwa request telah diterima dan dimengerti
* Namun client diminta untuk menunggu tahapan akhir response
* Pada kenyataannya, informational response sangat jarang sekali digunakan
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses)

### Successful Response (200 - 299)
* Successful Response merupakan kode yang mengindikasi bahwa request yang dikirim oleh client telah diterima, dimengerti, dan sukses diproses oleh Server
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)

### Redirect (300 - 399)
* Redirect status code mengindikasikan bahwa client harus melakukan aksi selanjutnya untuk menyelesaikan request
* Biasanya redirect status code digunakan ketika lokasi sebuah resource berubah, sehingga Server meminta Client untuk berpindah ke URL lain
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)

### Client Error (400 - 499)
* Client error status code merupakan indikasi bahwa request yang dikirim oleh Client tidak diterima oleh Server dikarenakan request yang dikirim dianggap tidak valid
* Contohnya client mengirim body yang salah, client melakukan request ke Server tanpa autentikasi di resource yang mewajibkan autentikasi, dan lain-lain.
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)

### Server Error (500 - 599)
* Server error status code mengindikasikan bahwa terjadi kesalahan di Server
* Biasanya ini terjadi ketika ada masalah di Server, seperti misalnya tidak bisa terkoneksi ke basis data, terdapat jaringan error di server, dan lain-lain
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)


## HTTP Body
* HTTP Body merupakan data yang bisa dikirim di HTTP Request, atau data yang diterima dari HTTP Response 
* Artinya client bisa mengirim data ke server menggunakan HTTP Body, bergitu juga sebaliknya
* Server bisa memberikan body di response menggunakan HTTP Body

![HTTP Response Image](images/10-http-response.png)

### Content-Type
* HTTP Body erat kaitannya dengan Header key Content-Type
* Biasanya agar client dan server mudah mengerti isi HTTP Body, HTTP Message akan memiliki Header Content-Type, yang berisi informasi tipe data HTTP Body
* HTTP Body bisa berisikan teks (html, javascript, css, json) atau binary (image, video, audio)
* Data Content-Type sudah memiliki standarisasi, misalnya bisa kita lihat pada [link berikut](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)


## Redirect
* Seperti yang sudah dijelaskan pada materi HTTP Status, untuk memaksa client melakukan redirect ke halaman lain, kita bisa menggunakan http redirect status code (300 - 399)
* Lantas pertanyaannya, dari mana client tahu, harus melakukan redirect ke URL mana?
* Oleh karena itu, biasanya response HTTP Status redirect, selalu dibarengi dengan informasi URL redirectnya, dan itu disimpan pada header Location

### Contoh HTTP Response Redirect
![Image HTTP Response Redirect](images/11-http-redirect.png)
* Contoh pertama: bila redirect dalam domain yg sama
* Contoh kedua: bila redirect dalam domain berbeda


## HTTP Cookie

### Stateless
* HTTP didesain stateless, artinya tiap request yang dilakukan, dia tidak tahu request sebelumnya atau selanjutnya yang akan dilakukan
* Lantas pertanyaanya: Bagaimana Server tahu kalau Client sudah login sebelum mengakses halaman tertentu?
* Hal ini, biasanya menggunakan fitur HTTP Cookie

### HTTP Cookie
* HTTP Cookie merupakan informasi yang diberikan oleh server, dan client secara otomatis akan menyimpan data tersebut, contohnya di Web Browser
* Ketika Web Browser melakukan request selanjutnya, maka Web Browser akan menyisipkan cookie yang sudah diterima di request sebelumnya
* Dari cookie tersebut, Server bisa mengetahui apakah request tersebut merupakan request client yang sudah login atau belum

### Contoh Penggunaan HTTP Cookie
![Diagram HTTP Cookie](images/12-useof-http-cookie.png)

### Cookie di HTTP Response
* Informasi cookie yang diberikan dari Server, ditempatkan pada Header dengan value Set-Cookie
* Cookie bisa lebih dari satu, jika Server memberikan lebih dari satu cookie, bisa menggunakan beberapa key Set-Cookie di Header

### Contoh Cookie di HTTP Response
![Example Image](images/13-cookie-http-response.png)
* Perlu validasi juga karena cookie dari web browser dapat diubah-ubah

### Cookie di HTTP Request
* Setelah cookie dari HTTP Response diterima oleh Web Browser, maka akan disimpan di Web Browser
* Selanjutnya HTTP Request akan mengirim cookie di tiap request, dimana cookie yang dikirim bisa menggunakan Header dengan nama Cookie
* Berbeda dengan HTTP Response, untuk HTTP Request, Cookie harus digabung di satu header jika lebih dari satu Cookie

### Contoh Cookie di HTTP Request
![Example Image](images/14-cookie-http-request.png)

### Cookie Attributes
* Cookie memiliki attribute yang bisa ditambahkan ketika membuat cookie di HTTP Response
* Seperti masa berlaku cookie, apakah harus https, apakah tidak boleh diakses via script, dan lain-lain
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)


## HTTP Caching
* HTTP memiliki fitur yang bernama caching
* Caching adalah menyimpan data di client sampai batas waktu yang sudah ditentukan, sehingga jika client ingin melakukan request resource yang sama, cukup ambil resource nya di client, tanpa harus meminta ulang ke server
* HTTP Caching sangat cocok dilakukan untuk resource file static yang jarang berubah, seperti file, gambar, audio, video, dan lain-lain

### Diagram HTTP Caching
![Gambar Diagram](images/15-diagram-http-caching.png)
* cache info = apakah informasi (response) ini boleh disimpan di browser? kalau boleh, amannya disimpan berapa lama?

### Header Cache Control
* Server ketika meminta agar client melakukan caching, maka HTTP Response perlu menambahkan informasi Cache-Control di Header
* Cache-Control berisi informasi seberapa lama client bisa menyimpan data response tersebut, sehingga tidak perlu meminta ulang ke server
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control)
* cache-control: public, artinya dapat diakses sebelum atau sesudah login


## Teknologi Lainnya
* Server-Sent Event (berjalan di HTTP)
* WebSocket (improvement HTTP)
* Cross-Origin Resource Sharing (improvement HTTP)
* RESTful API 
* OAuth (standarisasi untuk autentikasi dan authorization)

### Perbedaan Autentikasi dan Otorisasi
Otentikasi adalah proses validasi identitas yang dilakukan dengan membandingkan data user yang dikirim, dengan data yang terdapat dalam database. Sedangkan otorisasi merupakan proses pemberian kuasa kepada user yang telah tervalidasi dengan tepat.
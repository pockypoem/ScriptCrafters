# Javascript Standard Library

* Number
* String
* Array
* Object
* JSON
* dan lain-lain

## Number
* Number = function untuk koversi ke tipe data number
* Jika data tidak bisa dikonversi ke number, secara otomatis hasilnya adalah NaN
* [Link Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* [Number Static Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_properties)

### Number Static Method
* Number memiliki banyak static method:
    * Number.isNaN(value) untuk mengecek apakah value NaN atau bukan
    * Number.isInteger(value) untuk mengecek apakah value berupa integer atau bukan
* [Link Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#static_methods)

### Number Instance Method
* Number memiliki banyak instance method, seperti:
    * Number.toLocalString(locale) untuk mengubah sumber menjadi string sesuai locale: [Link](https://community.lansweeper.com/t5/customizing-the-web-console/list-of-currency-culture-codes/ta-p/64431)
    * Number.toString(radix) untuk mengubah number menjadi string sesuai radix: [Link Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#instance_methods) 


## String
* [Dokumentasi String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### String Instance Method dan Properties
* String punya banyak sekali instance method dan properties
* Hal ini menjadikan manipulasi data String sangat mudah di Javascript, seperti mengubah menjadi lowercase, UPPERCASE, memotong string menjadi array, dan lain-lain.

### Difference between slice() and splice()

* Slice returns a piece of the array but it doesn't affect the original array. 
* Splice changes the original array by removing, replacing, or adding values and returns the affected values.
* [Splice, Slice, Split](https://medium.com/@jeanpan/javascript-splice-slice-split-745b1c1c05d2#:~:text=Slice()%20is%20used%20to,not%20modify%20the%20origin%20string.)
* [Splice vs Slice](https://www.educative.io/answers/splice-vs-slice-in-javascript)
* Hampir semua method pada String akan menciptakan data baru (jadi copy dulu baru akan dimodifikasi) sehingga data asli tidak akan berubah.

## Array
* [Dokumentasi Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Array Loop
* Kita biasa menggunakan for in dan for of untuk melakukan iterasi Array, namun Array juga memiliki method yang bernama forEach()
* Method forEach bisa digunakan juga untuk melakukan iterasi data array.

### Array Queue
* Dalam struktur data, terdapat tipe struktur data bernama Queue(Antrian).
* Dimana data masuk akan diposisikan di urutan paling belakang
* Sedangkan data keluar akan diposisikan dari urutan paling depan
* Mirip sekali dengan antrian, atau istilahnya FIFO (first in first out)
* Kita bisa menggunakan Array dengan bantuan function push() untuk menambah data di belakang. dan shift() untuk mengambil dan menghapus data paling depan.

### Array Stack
* Struktur data Stack (tumpukan) kebalikan dari Queue, dimana aturannya mirip dengan tumpukan kartu
* Saat kita memasukkan data, kita akan memasukkan di urutan paling belakang (atau atas)
* Sedangkan saat kita mengambil data dari paling belakang (atau atas) terlebih dahulu
* Stack ini bersifat LIFO (Last In First Out)
* Untuk menambah di urutan belakang, kita bisa menggunakan function push()
* Dan untuk mengambil dan menghapus paling belakang, kita bisa menggunakan function pop()

### Array Search
Array memiliki banyak function untuk melakukan pencarian: <br>
| Function                              | Keterangan                                |
| ------------------------------------- | ----------------------------------------- |
| find(value => boolean) : value        | Mencari data sesuai dengan kondisi        |
| findIndex(value => boolean) : number  | Mencari data index sesuai dengan kondisi  |
| includes(value) : boolean             | Mengecek apakah terdapat data             |
| indexOf(value) : number               | Mengecek posisi index data                |
| lastIndexOf(value) : number           | Mengecek posisi index data terakhir       |
<br>

### Array Filter
Array memiliki function untuk melakukan filter data <br>
| Function                                | Keterangan                                           |
| --------------------------------------- | ---------------------------------------------------- |
| filter(value => boolean) : Array        | Melakukan filter data yang kondisinya bernilai true  |
<br>

### Array Transform
Array juga memiliki function yang digunakan untuk melakukan transformasi <br>
| Function                                          | Keterangan                                                   |
| ------------------------------------------------- | -------------------------------------------------------------|
| map(value => result) : Array<result>              | Melakukan transform tiap value dan menghasilkan array result |
| reduce(resultBefore, value => result) : result    | Melakukan transform dengan menggunakan value array dan value selanjutnya, lalu hasilnya dilanjutkan ke iterasi selanjutnya |
| reduceRight(resultBefore, value => result)        | Sama seperti reduce(), namun dilakukan dari belakang         |
<br>
* reduce() dari kiri ke kanan
* reduceRight() dari kanan ke kiri

[Function Lain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods) <br>


## Object
* [Dokumentasi](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)


### Object Freeze & Seak
* Secara default, object bisa diubah atau dihapus propertiesnya
* Jika kita ingin mengubah sebuah object menjadi object yang tidak bisa diubah atau dihapus, kita bisa menggunakan beberapa static method:
    * `Object.freeze()` digunakan untuk mengubah object menjadi object yang tidak bisa diubah value atau dihapus attributenya.
    * `Object.seal()` digunakan untuk mengubah object menjadi object yang tidak bisa dihapus attributenya. Value masih bisa dirubah namun tidak bisa dihapus.
* Baik freeze maupun seal, tidak bisa menambah data ke object.

### Object Assign
* Kadang kita ada kasus menggabungkan semua attribute dari sebuah object ke object lain
* Hal ini bisa kita lakukan dengan menggunakan `Object.assign(target, source)`
* Attribut yang sama yang ada pada target akan ditimpa dengan attribut milik source.

### Object Property Name & Value
* Object juga memiliki static method untuk mengambil semua properties names dan values
* `Object.values()` digunakan untuk mengambil semua property value
* `Object.getPropertyNames()` digunakan untuk mengambil semua properti name


## JSON
* Javascript Object Notation
* merupakan data String yang bentuknya mirip dengan Javascript Object
* Saat ini JSON banyak sekali digunakan untuk komunikasi antara Server dan Client
* [JSON](https://www.json.org/json-en.html)
* Javascript mendukung konversi data dari String JSON ke Object ataupun sebaliknya
* `JSON.stringify()` digunakan untuk melakukan konversi dari Object ke String
* `JSON.parse()` digunakan untuk melakukan konversi dari String ke Object
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)


## BigInt
* merupakan tipe data Number yang bisa mencakup data angka lebih dari Number.MAX_SAFE_INTEGER
* Untuk kasus number yang lebih dari itu, disarankan menggunakan tipe data BigInt
* Cara penggunaan BigInt sama saja dengan penggunaan Number dan juga operatornya.
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

## Date
* Javascript memiliki tipe data untuk representasi waktu dan tanggal yaitu Date.
* Date merupakan representasi milisecond sejak tanggal 1 Januari 1970, atau dikenal dengan Epoch & Unix Timestamp
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
* [Website Current Millis](https://currentmillis.com/)

### Membuat Object Date

Untuk membuat object Date, kita bisa menggunakan new Date(), dimana terdapat constructor parameter <br>

| Function                              | Keterangan                                |
| ------------------------------------- | ----------------------------------------- |
| newDate()                             | Membuat date saat ini                     |
| newDate(year, month, date)            | Membuat date dengan tanggal               |
| newDate(year, month, date?, hour?, minute?, second?, milis?)            | Membuat date dengan parameter sampai milis               |
| newDate(timestamp)                    | Membuat date dari epoch atau unix timestamp               |
<br>

### Epoch & Unix Timestamp
* Dalam menggunakan tipe data waktu, biasanya semua bahasa pemrograman akan mendukung yang namanya epoch & unix timestamp
* Epoch & Unix timestamp merupakan hitungan milliseconds setelah tanggal 1 Januari 1970
* Javascript pun mendukung pembuatan waktu dalam bentuk epoch dan unix timestamp
* Untuk mendapatkan waktu saat ini dalam epoch & unix timestamp, kita bisa menggunakan `Date.now()`
* Untuk mengubah dari object date ke epoch & unix timestamp, kita bisa menggunakan function `getTime()`

### Parsing Date
* Kita juga bisa melakukan parsing membuat date dari string menggunakan method `Date.parse(value)`
* Format string harus YYYY-MM-DDTHH:mm:ss.sssZ
* T itu untuk pemisah tanggal dan waktu
* Dimana jika kita hanya membuat date berisi tanggal saya, cukup dengan YYYY-MM-DD
* Jika date dengan tanggal dan waktu, gunakan YYYY-MM-DDTHH:mm:ss.sss
* Jika date dengan tanggal, waktu, dan timezone, gunakan YYYY-MM-DDTHH:mm:ss.sssZ
* Hasil parsing adalah unix timestamp, bukan object date

### Date Getter dan Setter
* Date juga memiliki banyak sekali method untuk mendapatkan informasi date dan juga mengubah informasi date, atau istilahnya adalah getter dan setter
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods)


## Math
* Math merupakan class di javascript yang berisikan static property dan method untuk operasi matematika
* Hanya digunakan untuk utility saja.
* Ada banyak sekali static property dan method di Math
* Math hanya bisa digunakan untuk tipe data Number, tidak bisa digunakan untuk tipe data BigInt
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)


## Boolean
* Boolean merupakan wrapper class untuk tipe primitif boolean
* Boolean memiliki method toString() untuk mengkonversi ke String
* Dan memiliki method valueOf() untuk mengkonversi ke tipe boolean primitif 
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)


## Map
* merupakan representasi dari struktur data key-value
* Map mirip dengan tipe data object, hanya saja pada Map, semua method untuk manipulasi data sudah disediakan
* Map mengikuti kontrak iterable, sehingga bisa di iterasi secara default
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

### Perbedaan Map dan Object
| Map                                   | Object                                    |
| ------------------------------------- | ----------------------------------------- |
| Pertama dibuat, tidak memiliki key    | Karena memiliki prototype, jadi bisa jadi memiliki default key ketika pertama dibuat        |
| Key bisa tipe data apapun             | Key hanya bisa string atau simbol         |
| Jumlah key bisa diketahui dengan mudah dengan attribute size           | Tidak bisa diketahui, harus manual menggunakan iterasi         |
| Secara default tidak bisa dikonversi ke JSON             | Bisa dikonversi ke JSON secara otomatis         |

### Map Instance Method & Property
| Method & Property                 | Keterangan                                   |
| --------------------------------- | -------------------------------------------- |
| size                              | Panjang Map                                  |
| clear()                           | Menghapus semua isi Map                      |
| delete(key)                       | Menghapus data Map berdasarkan key           |
| get(key) : value                  | Mendapatkan data Map berdasarkan key         |
| has(key) : boolean                | Mengecek apakah Map berisi data key          |
| set(key, value)                   | Mengubah data Map dengan key = value         |
| forEach((key, value) => )         | Melakukan iterasi Map                        |


## Set
* merupakan implementasi dari struktur data yang berisikan data-data unique
* Set mirip seperti Array, hanya saja isi datanya selalu unique
* Jika kita menambahkan data yang sama, maka data hanya akan diterima satu saja
* Set mengimplementasikan kontrak iterable sehingga bisa diiterasi secara default
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

### Set Instance Method & Property
| Method & Property                    | Keterangan                                   |
| ---------------------------------    | -------------------------------------------- |
| size                                 | Panjang Set                                  |
| add(value)                           | Menambah data ke Set                         |
| has(value)                           | Mengecek apakah Set memiliki value           |
| delete(value)                        | Menghapus value dari Set                     |
| forEach(value => )                   | Melakukan iterasi Set                        |


## Symbol
* merupakan tipe data yang digaransi akan selalu unique setiap kali kita membuat data symbol
* Symbol kadang banyak digunakan untuk membuat key pada object
* [Dokumentasi Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol)

### Symbol For
* Kadang agak sulit membuat symbol harus selalu menggunakan variable
* Pembuatan symbol juga bisa menggunakan static method `Symbol.for(key)`
* Jika kita menggunakan key yang sama, Symbol yang sama akan selalu dikembalikan
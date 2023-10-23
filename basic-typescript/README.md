# Typescript Dasar

## Sebelum Belajar
* Javascript
* NodeJS

## Pengenalan TypeScript
* TypeScript adalah bahasa pemrograman berorientasi objek yang dibuat oleh Microsoft
* TypeScript adalah bahasa pemrograman yang dikompilasi menjadi kode Javascript
* Menggunakan Typescript akan membuat kode kita lebih mudah dibaca dan di debug dibandingkan menggunakan Javascript
* Typescript adalah bahasa pemrograman yang Strongly Type (seperti Java, C#, dan C/C++)
* [Dokumentasi Typescript](https://www.typescriptlang.org/)

### Proses Development TypeScript
![Image](images/01-process-dev-ts.png) <br>

### Keuntungan Belajar TypeScript
* Saat ini banyak sekali perusahaan yang mengadopsi TypeScript, hal ini karena banyak fitur yang dimiliki oleh TypeScript yang sangat memudahkan saat proses pemrograman aplikasi
* Karena TypeScript melakukan kompilasi kode menjadi Javascript, hal ini secara otomatis kita tidak perlu lagi pusing dengan fitur-fitur di Javascript yang belum di support, karena Typescript secara otomatis akan mengurusnya
* Selain itu, banyak juga framework-framework yang populer sekarang mulai beralih menggunakan Typescript, seperti ReactJS, VueJS, NestJS, dan lain-lain.

### Membuat Project
* Buat folder belajar-typescript-dasar
* `npm init`
* Buka package.json dan tambah type module

### Menambah Library Jest untuk Unit Test
* `npm install --save-dev jest@types/jest`
* sepertinya bisa menggunakan `npm i @types/jest`
* [Dokumentasi Jest](https://www.npmjs.com/package/jest)

### Menambah Library Babel
* `npm install --save-dev babel-jest @babel/preset-env`
* [Dokumentasi](https://babeljs.io/setup#installation)

### Setup TypeScript Project
* `npm install --save-dev typescript`
* [Dokumentasi](https://www.npmjs.com/package/typescript)
<br>

* `npx tsc --init`
* Semua konfigurasi akan dibuat di file tsconfig.json
* Ubah "module" dari "commonjs" menjadi "ES6"

### Setup TypeScript untuk Jest
[Dokumentasi Jest](https://jestjs.io/docs/getting-started#using-typescript)


## Say Hello Function
* Sebelum mulai belajar, kita akan coba buat say hello function dengan file TypeScript
* Kode: src/say-hello.ts
* Kode: tests/say-hello.test.ts
* Untuk menjalankan semua tests bisa dengan `npm test`
* Atau bisa secara spesifik: `jest nama-file.test.ts`

## Kompilasi TypeScript
* Seperti yang dijelaskan di awal, bahwa kode TypeScript tidak bisa langsung dijalankan, kita harus melakukan kompilasi terlebih dahulu menjadi Javascript
* Kita bisa menggunakan perintah: `npx tsc`
* Secara default, semua file hasil kompilasi akan disimpan di lokasi yang sama dengan file Typescript
* Kadang, praktek programmer Typescript biasanya memisahkan lokasi hasil kompilasi ke sebuah folder misal dist (distribution)
* Untuk mengubah lokasi file hasil kompilasi, kita perlu ubah di tsconfig.jsonm dibagian `"outDir": "dist/"`
* Jika ada error pada kode Typescript maka tidak akan bisa dicompile ke Javascript

### Include dan Exclue
* Secara default, semua file ts akan coba dikompilasi oleh TypeScript, kadang-kadang kita tidak membutuhkan hal tersebut
* Misal kita hanya ingin melakukan kompilasi untuk kdoe program dan tidak butuh melakukan kompilasi untuk kode unit test
* Kita bisa tambahkan include dan exclue pada tsconfig.json nya
* [Dokumentasi Include](https://www.typescriptlang.org/tsconfig#include) -- (sebutkan folder mana saja yang mau kita include)
* [Dokumentasi Exclude](https://www.typescriptlang.org/tsconfig#exclude) -- (sebutkan folder mana saja yang mau kita exclude)

### Kode: Include dan Exclude
![Image](images/02-include-exclude.png) <br>

`"include" : ["src/**/*"],` <br>
`"exclude" : ["test/**/*"],` <br>

Yang akan dicompile hanya folder src. Tapi karena sedang belajar, maka lebih baik folder test ikut dicompile.


## Tipe Data Primitif
* TypeScript menggunakan tipe data di Javascript, sehingga semua tipe data seperti string, number, boolean otomatis didukung oleh Typescript

### Daftar Tipe Data Primitif
| Tipe Data Primitif | Keterangan |
| ------------------ | ---------- | 
| number             | Number di Javascript |
| boolean            | Boolean di Javascript |
| string             | String di Javascript |

### Deklarasi Variabel
* Karena Typescript adalah Strongly Type Language, oleh karena itu saat kita membuat variabel, kita harus menentukan tipe data variabelnya
* Dan jika kita sudah menentukan tipe datanya, kita tidak boleh mengubah variabel tersebut menjadi tipe data yang berbeda
* Typescript bisa secara otomatis mendeteksi tipe data yang sedang digunakan, tapi kita juga bisa menentukan secarra eksplisit menggunakan: `const namaVariable: tipedata = value`
* file: tests/tipe-data.test.ts


## Babel TypeScript
* Untuk menjalankan unit test, kita menggunakan Jest dan Babel
* Banyak programmer Typescript yang mengeluh ketika proses development, menggunakan Typescript lebih lambat karena harus melakukan kompilasi terlebih dahulu
* Oleh karena itu, @babel/typescript melakukan cara kompilasinya dengan cara menghapus kode Typescript dan menjadikan kode Javascript, hal ini memang lucu, tapi inilah kenyataannya.
* Oleh karena itu, error Typescript yang sering harusnya terjadi di Unit Test kadang tidak terjadi karena kode Typescript dihapus oleh Babel
* Oleh karena itu, kita harus secara regular melakukan pengecekan perintah menggunakan perintah: `npx tsc`
* Untuk memastikan tidak ada kode Typescript kita yang bermasalah

### Kode: Error TypeScript

```typescript
let name: string = "Jeremyas Cornelis Abigail Wihardjono"

let balance: number = 1000000;

let isVip: boolean = true;

console.info(name);
console.info(balance);
console.info(isVip);

name = 1; // error
balance = "1000000"; // error
isVip = 1; // error

```

Saat coba di compile ke Javascript, pasti error. Tapi saat jalankan unit test nya, ini pasti sukses. Kenapa? Karena kode typescript di atas akan dihapus dan digantikan kode Javascript oleh Babel. <br>

Jadi berhati-hatilah. Saat membuat kode Typescript, pastikan jangan cuma mengecek menggunakan jest atau babel nya. Pastikan juga dengan melakukan kompilasi untuk mengetahui apakah ada error tersisa atau tidak.

Sebenarnya ada cara yang lebih mudah, yaitu dengan **typescript compiler**

### TypeScript Compiler
* Untuk menjalankan Typescript Compiler secara terus menerus, kita juga bisa menggunakan perintah: `npx tsc --watch`


## Tipe Data Array
* Tipe data array di TypeScript juga sama seperti di Javascript, cara pembuatannya dan penggunaannya
* Di TS tipe data Array bisa menggunakan tanda `TipeData[]` atau `Array<Tipe Data>`
* file: tests/array.test.ts

### Read Only Array
* Di Typescript, kita bisa membuat Array dengan tipe readonly (tidak bisa diubah lagi) dengan menggunakan tipe data `ReadonlyArray<TipeData>`

### Tuple
* Tuple adalah tipe data Array, yang panjang array dan juga tipe data di tiap index sudah ditentukan
* Pada kasus tuple bersifat read only (tidak bisa diubah), kita bisa tambahkan kata kunci readonly


## Tipe Data Any
* Saat kita menggunakan TypeScript, setiap jenis data idealnya ada deklarasi datanya
* Contoh saat kita ingin menggunakan tipe data Javascript Object, idealnya harusnya ada ketentuan attribute yang dimilikinya, sedangkan di Javascript hal itu tidak diwajibka
* Pada kasus kita memang ingin membuat tipe data yang bebas seperti di Javascript, kita bisa gunakan tipe data Any
* Tipe data Any tersebut menjadikan Typescript tidak melakukan pengecekan apapun terhadap akses terhadap data tersebut
* File: tests/any.test.ts


## Union Type
* Seperti yang sudah kita tahu, Javascript sebenarnya bisa menyimpan berbagai jenis tipe data di variabel yang sama
* Namun di Typescript, hal itu dilarang karena praktek yang buruk
* Pada kasus jika kita ingin membuat variabel yang bisa berubah bentuk tipe data, kita bisa memberi tahunya menggunakan union type
* Secara otomatis Typescript akan membolehkan kita mengubah tipe data, namun sesuai yang sudah ditentukan di union type nya
* file: tests/union.test.ts

### Menggunakan Union Type
* Saat kita membuat Union Type, kita perlu berhati-hati ketika memanggil method terhadap variabel tersebut
* Hal ini karena tipe datanya bisa berubah, oleh karena itu ada baiknya kita melakukan pengecekan tipe data terlebih dahulu menggunakan `typeof`


## Type Alias
* Menggunakan tipe data Any sebenarnya tidak direkomendasikan
* Biasanya kita akan menggunakan tipe data Any, jika memang datanya kita gunakan misal dari library orang lain yang sudah tidak bisa diubah, atau memang ketika attribute nya tidak pasti datanya
* Pada kasus jika kita membuat tipe data Javascript object sendiri, kita bisa membuat `alias` untuk struktur tipe data object nya.
* file: src/type-alias.ts
* file: tests/type-alias.test.ts

### Kode: Alias
Misal kita ingin membuat alias namanya adalah category: <br>
```typescript
export type Category = {
    id: string,
    name: string;
}

export type Product = {
    id: string,
    name: string,
    price: number,
    category: Category;
}
```
### Type Alias untuk Union Type
* Type Alias juga bisa digunakan untuk membuat union type
<br>

Contoh: `export type ID = string | number;`


## Object Type
* Pada kasus yang sederhana, kadang membuat alias terlalu bertele-tele, kita juga bisa membuat tipe data Javascript Object secara langsung dengan mendeklarasikan detail type nya ketika membuat variabelnya
* Hal ini lebih sederhana dibandingkan membuat Type terlebih dahulu
* file: tests/object.test.ts


## Optional Properties
* Secara default, saat kita membuat attribute di Object atau Type, maka attribute tersebut wajib diisi nilainya
* Namun, kadang-kadang tidak semua attribute itu wajib diisi nilainya
* Pada kasus attribute nya tidak wajib diisi, kita bisa tambahkan tanda `?` untuk menandakan bahwa itu adalah optional


## Enum
* Typescript memiliki tipe data enum, yaitu tipe data yang nilainya sudah pasti
* Tipe data ini tidak dimiliki di Javascript
* Secara default tipe data enum ini akan dikonversi menjadi srting di Javascript, namun bisa juga dikonversi menjadi number
* file: src/enum.ts
* file: tests/enum.test.ts
* Tidak direkomendasikan untuk menggunakan number sebagai nilai default pada enum

```typescript
export enum CustomerType {
    REGULAR,
    GOLD,
    PLATINUM
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}
```

### Enum di Javascript
* secara default, enum di Typescript akan dikonversi menjadi tipe data number
* Kadang kita ingin ubah dari number menjadi String, kita bisa lakukan hal itu ketika membuat enum nya.

```typescript
export enum CustomerType {
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM'
}
```

Kalau mau tetap angka tapi lebih konsisten yaa tinggal seperti ini:
```typescript
export enum CustomerType {
    REGULAR = 1,
    GOLD = 2,
    PLATINUM = 3
}
```

## Null dan Undefined
* Saat kita menggunakan `?` pada variabel atau parameter, secara otomatis kita bisa mengirim data undefined
* Tapi, kadang-kadang ada kasus kita juga ingin mengirim data null, pada kasus ini kita juga bisa menggunakan tipe data null
* Jadi optional properties itu datanya bisa kita kirim entah itu null atau undefined
* file: tests/optional.test.ts


## Interface
* Interface adalah cara lain melakukan deklarasi data selain menggunakan Type
* Lantas kalau begitu, apa bedanya Interface dan Type?
* Interface bisa dikembangkan dengan mudah dibanding dengan Type
* Oleh karena itu, kebanyakan untuk tipe data yang kompleks, kebanyakan programmer TypeScript akan menggunakan Interface dibanding menggunakan Type Alias
* file: src/seller.ts
* file: tests/interface.test.ts

### Kode: Interface

```typescript
export interface Seller {
    id: number;
    name: string;
    address?: string
}
```

### Kode: Menggunakan Interface
```typescript
const seller: Seller = {
    id: 1,
    name: "Toko Handphone"
};

console.info(seller);
```

### Readonly Properties
* Properties dapat kita jadikan readonly, yang artinya tidak bisa diubah lagi
* Kita bisa menggunakan kata kunci `readonly` pada attribute tersebut

### Perbedaan Interface dengan Types
* [Artikel Medium](https://blog.bitsrc.io/type-vs-interface-in-typescript-cf3c00bc04ae#:~:text=Types%20are%20better%20for%20working,with%20objects%20and%20method%20objects.)
* [Handbook TS](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)


## Function Interface
* Di TypeScript, kita juga bisa membuat deklarasi Function dalam bentuk Interface
* Dengan demikian, ketika kita ingin membuat variabel yang berisi function, kita bisa dengan mudah menggunakan interface tersebut
* file: tests/interface.test.ts


## Indexable Interface
* Interface juga bisa digunakan untuk membuat tipe data dengan jenis yang memiliki index, seperti Array atau Object
* file: tests/interface.test.ts


## Extending Interface
* Interface bisa melanjutkan (exteds) ke Interface lain
* Secara otomatis attribute Interface yag dilanjutkan dimiliki juga oleh interface tersebut
* Ini membuat kita lebih mudah ketika membuat tipe data yang kompleks
* file: src/employee.ts
* file: tests/interface.test.ts


## Function di Interface
* Implementasi dari Interface di Javascript sebenarnya adalah sebuah object
* Seperti yang kita tahu, di Javascript, kita bisa menambahkan function sebagai attribute di object
* Hal ini juga bisa kita lakukan di Interface
* file: tests/interface.test.ts


## Intersection Types
* Intersection merupakan cara membuat tipe data baru dengan cara menggabungkan dua tipe data lain
* Hal ini sangat cocok ketika kita tidak bisa melakukan extends pada Interface. Misalnya interface dibuat oleh library atau package orang lain dimana kita tidak bisa mengubahnya. Nah, kita bisa membuat tipe baru yang merupakan gabungan yang disebut **Intersection Types**
* Kita bisa membuat type dengan menggunakan kata kunci `&` (dan)
* file: tests/interface.test.ts


## Type Assertions
* kadang, kita sering berada pada situasi dimana kita tahu tipe data yang kita gunakan, namun TypeScript tidak tahu tipe data tersebut
* Biasanya pada kasus kita menggunakan kode bawaan dari Javascript sehingga membuat return value nya berupa tipe data Any
* Pada kasus ini, kita bisa melakukan konversi ke tipe data yang kita mau menggunakan kata kunci `as`
* Ini disebut **type assertions**
* file: tests/interface.test.ts


## Function
* Sama seperti di Javascript, Typescript juga mendukung pembuatan function
* Cara pembuatan function di Typescript pun sama dengan di Javascript
* Salah satu yang membedakan adalah: pada parameter kita perlu menentukan tipe data dan pada function kita juga perlu menentukan tipe data return value nya
* Pada kasus function tersebut tidak mengembalikan valu, kita bisa menggunakan tipe data `void`, atau tidak perlu menyebutkan sama sekali seperti di Javascript
* file: tests/function.test.ts


## Function Parameter
* Sama seperti di Javascript, function di TypeScript bisa memiliki banyak parameter, rest parameter (variable argument) sampai default value
* Fitur yang berbeda dengan Javascript adalah pada TypeScript setiap parameter wajib diisi, kecuali kita tentukan sebagai optional menggunakan `?` (tanda tanya)


## Function Overloading
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

## Proses Development TypeScript
![Image](images/01-process-dev-ts.png) <br>

## Keuntungan Belajar TypeScript
* Saat ini banyak sekali perusahaan yang mengadopsi TypeScript, hal ini karena banyak fitur yang dimiliki oleh TypeScript yang sangat memudahkan saat proses pemrograman aplikasi
* Karena TypeScript melakukan kompilasi kode menjadi Javascript, hal ini secara otomatis kita tidak perlu lagi pusing dengan fitur-fitur di Javascript yang belum di support, karena Typescript secara otomatis akan mengurusnya
* Selain itu, banyak juga framework-framework yang populer sekarang mulai beralih menggunakan Typescript, seperti ReactJS, VueJS, NestJS, dan lain-lain.

## Membuat Project
* Buat folder belajar-typescript-dasar
* `npm init`
* Buka package.json dan tambah type module

## Menambah Library Jest untuk Unit Test
* `npm install --save-dev jest@types/jest`
* sepertinya bisa menggunakan `npm i @types/jest`
* [Dokumentasi Jest](https://www.npmjs.com/package/jest)

## Menambah Library Babel
* `npm install --save-dev babel-jest @babel/preset-env`
* [Dokumentasi](https://babeljs.io/setup#installation)

## Setup TypeScript Project
* `npm install --save-dev typescript`
* [Dokumentasi](https://www.npmjs.com/package/typescript)
<br>

* `npx tsc --init`
* Semua konfigurasi akan dibuat di file tsconfig.json
* Ubah "module" dari "commonjs" menjadi "ES6"

## Setup TypeScript untuk Jest
[Dokumentasi Jest](https://jestjs.io/docs/getting-started#using-typescript)
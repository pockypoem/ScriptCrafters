# Object Oriented Programming

* https://github.com/tc39/proposal-class-fields

## Error
* Banyak sekali class error di Javascript, namun semua class error di Javascript selalu berujung di class Error, artinya class Error adalah superclass untuk semua jenis error di Javascript
* Contoh class error yang terdapat di Javascript:
    * SyntaxError
    * TypeError
    * EvalError
    * dll
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#error_types


## Iterable dan Iterator
* Salah satu fitur terbaru di ES6 adalah iterable.
* Iterable adalah spesial objeck yang memiliki standarisasi
* Dengan mengikuti standarisasi Iterable, secara otomatis kita bisa melakukan iterasi terhadap data tersebut dengan menggunakan perulangan for...of
* Contoh yang sudah mengikuti standarisasi Iterable adalah string, Array, Object, dan lain-lain.

### Cara Kerja Iterable dan Iterator
* Jika kita mengikuti kontrak iterable, maka object yang kita buat akan bisa dilakukan iterasi menggunakan for....of
* Setiap kita melakukan perulangan, object Iterator akan dibuat
* Hal ini menjadi aman jika kita melakukan iterasi berulang-ulang karena Iterator baru akan dibuat terus menerus
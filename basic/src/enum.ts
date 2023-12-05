// enum: sebuah tipe data yang menyimpan sekumpulan data konstan (di level aplikasi)
// seperti .env yang menyimpan data konfigurasi kita (menyimpan data konstan di level konfigurasi)

// numeric enums
enum Month {
    JAN = 1,
    FEB,
    MAR = 100,
    APR,
    MAY
}

console.log(Month.JAN);
console.log(Month.FEB);
console.log(Month.MAR);
console.log(Month.APR);

// string enums

enum Month {
    JUN = 'Juni',
    JUL = 'Juli',
    AGS = 'Agustus'
}

console.log(Month.JUN);
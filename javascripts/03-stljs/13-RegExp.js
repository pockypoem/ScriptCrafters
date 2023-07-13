// RegExp

{
    //TODO: Membuat RegExp

    // literal notation
    const regex1 = /pocky/; // mencari string "pocky"

    // OR with class RegExp
    const regex2 = new RegExp("pocky");
    const regex3 = new RegExp(/pocky/);
}


{
    //TODO: RegExp Instance Method

    const name = "kevin vincent kevin brian";
    const regex = /kevin/;

    let result = regex.exec(name);
    console.info(result);
    console.info(regex.exec("tidak ada")); // null

    let test = regex.test(name);
    console.info(test); // true
    console.info(regex.test("tidak ada")); // false
}


{
    //TODO: RegExp Modifier

    const nama = "eko herman\nEko ronald\nEdo Kurniawan";
    const regex1 = /^e.o/igm; // depan e, belakang o
    const regex2 = /Kurniawan/ig;
    const regex3 = /eko/igm; // ambil dimana "eko" setelah multiline jadi pertama

    let result;
    while((result = regex1.exec(nama)) !== null) {
        console.info(result);
    }


    while((result = regex2.exec(nama)) !== null) {
        console.info(result);
    }

    while((result = regex3.exec(nama)) !== null) {
        console.info(result);
    }

}

{
    //TODO: Advanced Regex
    const regex = /ek[aiueo]/ig;
    const text = "eko ado eki eka ejo eku emi elo eke";

    while((result = regex.exec(text)) !== null) {
        console.info(result);
    }
}


{
    //TODO: Regular Expression di string

    const string = "edo eko ado eki eka ejo emi elo eke";

    console.info(string.match(/ek[aiueo]/ig)); // ["eko", "eki", "eka", "eke"]
    console.info(string.search(/ek[aiueo]/ig)); // 4 (sudah ada di index 4)

    // di replace semua karena regex
    // semua method replace tidak akan menghapus data asli (akan membuat data baru)
    console.info(string.replace(/ek[aiueo]/i, "keren")) // edo keren ado keren keren ejo emi elo keren
    
    //? Global flag required when calling replaceAll with regex
    // console.info(string.replaceAll(/ek[aiueo]/ig, "keren")) -> ERROR
    console.info(string.replaceAll(/ek[aiueo]/i, "keren")) // edo keren ado keren keren ejo emi elo keren
    console.info(string.split(/e/ig)); // ['', 'do ', 'ko ado ', 'ki ', 'ka ', 'jo ', 'mi ', 'lo ', 'k', '']
}
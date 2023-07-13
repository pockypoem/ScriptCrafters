// Symbol

{
    const firstName = Symbol("firstName"); // tanpa deskripsi juga tidak apa apa
    const lastName = Symbol("lastName"); // deskripsi untuk membantu debugging

    // mengembalikan symbol yang berbeda
    console.info(Symbol("firstName") === Symbol("firstName")); // false

    const person = {};
    person[firstName] = "Vano";
    person[lastName] = "Brian";

    console.info(person);
    console.info(person[firstName]);
    console.info(person[lastName]);
}

{
    // Symbol for

    const person2 = {}
    
    // mengembalikan symbol yang sama
    console.info(Symbol.for("firstName") === Symbol.for("firstName")); // true

    // Solusi untuk membuat Symbol() tanpa membuat variabel terlebih dahulu
    person2[Symbol.for("firstName")] = "Michael";
    person2[Symbol.for("lastName")] = "Cornelis";

    console.info(person2);
    console.info(person2[Symbol.for("firstName")]);
    console.info(person2[Symbol.for("lastName")]);
}
// Method
// Untuk method sebaiknya kita menambahkan ke prototype, bukan ke instance object
// Untungnya di class, ada cara mudah menambahkan method dan secara otomatis ditambahkan ke prototype

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is ${this.name}`);
    }
}


const pocky = new Person("Pocky");
console.info(pocky.name);

const budi = new Person("Budi");
console.info(budi);
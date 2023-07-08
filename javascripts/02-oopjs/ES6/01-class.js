class Person {
    constructor(name) {
        this.name = name;
        console.info(`Membuat Person ${name}`);
    }
}

// Bisa menambah prototype
// Person.prototype.sayHello = function() {

// }

const pocky = new Person("Pocky");
console.info(pocky.name);

const budi = new Person("Budi");
console.info(budi);
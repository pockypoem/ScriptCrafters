// Super Constructor
// Jika di child class kita membuat constructor, maka kita wajib memanggil parent constructor, walaupun di parent tidak ada constructor.

class Employee {
    constructor(firstName) {
        this.firstName = firstName;
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is Employee ${this.firstName}`);
    }
}

class Manager extends Employee {

    // Constructor in Inheritance Class
    constructor(firstName, lastName) {
        super(firstName); // super() hanya boleh dipanggil di dalam constructor
        this.lastName = lastName;
    }

    sayHello(name) {
        console.info(`Hi ${name}, my name is Manager ${this.firstName} ${this.lastName}`);
    }
}


const budi = new Employee("Budi");
budi.sayHello("Joko");

const pocky = new Manager("Pocky","Poem");
pocky.sayHello("Vano");


console.info(budi);
console.info(pocky);
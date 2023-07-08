// Class Inheritance
// sama seperti prototype inheritance, hanya bisa memiliki satu parent class

class Employee {
    sayHello(name) {
        console.info(`Hi ${name}, my name is Employee ${this.name}`);
    }
}

class Manager extends Employee {
    sayHello(name) {
        console.info(`Hi ${name}, my name is Manager ${this.name}`);
    }
}


const budi = new Employee();
budi.name = "Budi";
budi.sayHello("Joko");

const pocky = new Manager();
pocky.name = "Pocky";
pocky.sayHello("Vano");


console.info(budi);
console.info(pocky);
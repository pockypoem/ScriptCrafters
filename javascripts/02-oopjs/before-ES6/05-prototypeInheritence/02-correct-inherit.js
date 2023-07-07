// Prototype Inheritance yang Benar

function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}


Manager.prototype = Object.create(Employee.prototype); // CARA BENAR
// Membuat Object baru, dimana prototypenya kita sign menjadi Employee
// Inilah alasannya tidak direkomendasikan implementasi OOP dengan Prototype karena rancu sekali.

Manager.prototype.sayHello = function(name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function(name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}


const employee = new Employee("Budi");
employee.sayHello("Joko"); // Hello Joko, my name is Employee Budi

const manager = new Manager("Kevin");
manager.sayHello("Vano") // Hello Vano, my name is Manager Kevin

console.info(employee);
console.info(manager);
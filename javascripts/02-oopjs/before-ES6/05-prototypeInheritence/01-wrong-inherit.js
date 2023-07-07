// Prototype Inheritance yang salah

function Employee(name) {
    this.name = name;
}

function Manager(name) {
    this.name = name;
}

Manager.prototype = Employee.prototype; // CARA SALAH

Manager.prototype.sayHello = function(name) {
    console.info(`Hello ${name}, my name is Manager ${this.name}`);
}

Employee.prototype.sayHello = function(name) {
    console.info(`Hello ${name}, my name is Employee ${this.name}`);
}

const employee = new Employee("Budi");
employee.sayHello("Joko"); // Hello Joko, my name is Employee Budi

const manager = new Manager("Kevin");
manager.sayHello("Vano") // Hello Vano, my name is Employee Kevin
// Harusnya: Hello Vano, my name is Manager Eko


// KESALAHAN ASSIGN INHERITANCE
// Sehingga replace Manager Prototype jadi Employee Prototype
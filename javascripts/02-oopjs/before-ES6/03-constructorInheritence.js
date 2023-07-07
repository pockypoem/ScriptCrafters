// Constructor Inheritance

function Employee(firstName) {
    this.firstName = firstName;
    this.sayHello = function(name) {
        console.info(`Hello ${name}, My name is ${this.firstName}`);
    }
}


function Manager(firstName, lastName) {
    this.lastName = lastName;
    // like inheritance but just copy it
    Employee.call(this, firstName);
}


const pocky = new Manager("Pocky", "Poem");
console.info(pocky);
console.log(pocky);
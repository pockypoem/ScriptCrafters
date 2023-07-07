// Class
function Person(firstName, lastName) {
    // property
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}


const pocky = new Person("Pocky","Poem");
pocky.sayHello("Kevin");

const budi = new Person("Budi","Nugraha");
budi.sayHello("Vano");

console.log(pocky);
console.log(budi);
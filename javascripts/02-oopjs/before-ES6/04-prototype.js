// Learn Prototype

// Class
function Person(firstName, lastName) {
    // property
    this.firstName = firstName;
    this.lastName = lastName;
    this.sayHello = function(name) {
        console.info(`Hello ${name}, my name is ${this.firstName}`);
    }
}

// Menambahkan Property ke Prototype
Person.prototype.sayBye = function() {
    console.info("Good Bye");
}

Person.prototype.run = function() {
    console.info(`${this.firstName} is running`);
}


const pocky = new Person("Pocky","Poem");
pocky.sayBye = function() {
    console.info("Sampai Jumpa");
}

const budi = new Person("Budi","Nugraha");

console.log(pocky);
console.log(budi);

pocky.sayBye(); // Sampai Jumpa -> karena pertama kali
pocky.run();
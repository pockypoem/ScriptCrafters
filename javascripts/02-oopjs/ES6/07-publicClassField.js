class Customer {
    firstName;
    lastName;
    balance = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    sayHello() {

    }

}

const pocky = new Customer("Pocky", "Poem");
console.info(pocky);
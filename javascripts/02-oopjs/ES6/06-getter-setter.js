// Getter & Setter
// 2 hal ini akan berada di prototype, bukan di instance object

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const result = value.split(" ");
        this.firstName = result[0];
        this.lastName = result[1];
    }
}


const pocky = new Person("Pocky", "Poem");
console.info(pocky);

console.info(pocky.fullName);

pocky.fullName = "Kevin Setiadi";
console.info(pocky.fullName);
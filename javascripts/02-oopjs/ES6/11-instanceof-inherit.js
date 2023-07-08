// instanceof di Class Inheritance
// Untuk mengecek apakah sebuah object adalah instance dari class tertentu atau turunan dari class tertentu

class Employee {

}

class Manager extends Employee {

}

const budi = new Employee();
const pocky = new Manager();

console.info(typeof budi);
console.info(typeof pocky);

console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false

console.info(pocky instanceof Employee); // true
console.info(pocky instanceof Manager); // true
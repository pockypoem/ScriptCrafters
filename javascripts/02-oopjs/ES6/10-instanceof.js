// Instance Of
// Berbeda dengan typeof -> Hasilnya pasti "Object"
// Operator instance of akan menghasilkan boolean, true jika benar object tersebut adalah instance objectnya, atau false jika bukan.

class Employee {

}

class Manager {

}

const budi = new Employee();
const pocky = new Manager();

console.info(budi instanceof Employee); // true
console.info(budi instanceof Manager); // false

console.info(pocky instanceof Employee); // false
console.info(pocky instanceof Manager); // true
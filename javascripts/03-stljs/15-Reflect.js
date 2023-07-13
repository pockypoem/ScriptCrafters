// Reflect

const person = {}

Reflect.set(person, 'firstName', 'Kevin');
Reflect.set(person, 'lastName', 'Aldo');

console.info(person);


console.info(Reflect.has(person, 'firstName')); // true
console.info(Reflect.has(person, 'middleName')); // false

console.info(Reflect.get(person, "firstName")); // Kevin
console.info(Reflect.get(person, "lastName")); // Aldo
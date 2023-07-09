// Object

// Object Freeze

const person = {
    firstName: "Pocky",
    lastName: "Poem"
};

Object.freeze(person);

person.firstName = "Diubah"; // tidak berubah
delete person.firstName; // tidak berubah
delete person.lastName; // tidak berubah
console.info(person);


// Object Seal

const person2 = {
    firstName: "Kevin",
    lastName: "Setiadi"
};

console.info(person2);

Object.seal(person2);

person2.firstName = "Vano"; // berubah4
delete person2.firstName; // tidak berubah
delete person2.lastName; // tidak berubah
console.info(person2);



// Object Assign

const target = {firstName: "Jovan"};
const source = {lastName: "Herman"};

Object.assign(target, source);
console.info(target); // Jovan Herman


// Object Property Name & Value
const person3 = {
    firstName: "Alexander",
    lastName: "Gabriel"
}

console.info(Object.values(person3));
console.info(Object.getOwnPropertyNames(person3));
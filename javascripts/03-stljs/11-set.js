// Set

const set = new Set();

set.add("Kevin");
set.add("Kevin");
set.add("Poernomo");
set.add("Vincent");

console.info(set);
console.info(typeof set); // object

set.forEach(value => console.info(value));
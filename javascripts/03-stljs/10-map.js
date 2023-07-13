// Map

const map = new Map();
map.set("Name", "Pocky Poem");
map.set("Address", "Indonesia");

console.info(typeof map); // object
console.info(map);
console.info(map.get("Name"));
console.info(map.get("Address"));

for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
}

// pakai map biar lebih bagus kode perulangannya
map.forEach((value, key) => console.info(`${key} : ${value}`));
// JSON

const person = {
    firstName: "Pocky",
    lastName: "Poem",
    address: {
        country: "Indonesia",
        city: "Subang"
    },
    hobbies: [
        "Coding", "Gaming", "Reading"
    ]
}

const json = JSON.stringify(person); // object ke string json
const json2 = JSON.stringify([person]); // bisa dalam bentuk array
const jsonObject = JSON.parse(json); // string json ke object

console.info(json);
console.info(json2);
console.info(jsonObject);
const logo = document.getElementById("logo");
const attributes = logo.attributes

// console.info(attributes);

console.info(attributes.getNamedItem("alt").value);

for (let attribute of attributes) {
    console.info(`${attribute.name} : ${attribute.value}`);
}
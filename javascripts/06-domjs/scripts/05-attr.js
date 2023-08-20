const logo = document.getElementById("logo");
const src = logo.getAttributeNode("src");

console.info(src.name);
console.info(src.value);
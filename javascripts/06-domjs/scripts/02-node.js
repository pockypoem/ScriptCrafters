const menu = document.getElementById("menu");
console.info(menu);
// node property
console.info(menu.childNodes); // return nodelist

const second = document.getElementById("second");
console.info(second);
// node property
console.info(second.textContent);
console.info(second.previousSibling.previousSibling);
console.info(second.nextSibling.nextSibling);


// node methods
menu.removeChild(document.getElementById("first"));
menu.removeChild(document.getElementById("second"));
menu.removeChild(document.getElementById("third"));
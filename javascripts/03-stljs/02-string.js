// String Instance Method & Properties

const name = "Pocky Poem Cinderace";

console.info(name.length);
console.info(name.toLowerCase());
console.info(name.toUpperCase());
console.info(name.split(" "));
console.info(name);


const example = ['A', 'B', 'C', 'D'];
console.info(example);

// splice
const copy = example.splice(2, 1); // remove 1 item at 2-index position, return the deleted item
console.info(copy);
console.info(example);

// slice
const slices = example.slice(-1);
console.info(slices);
console.info(example);

// split
const sentence = "There is a cat on the table."
console.info(sentence.split(' '));


const input = "   input   data   ";
console.info(input.trim()); // menghapus ujung kiri dan ujung kanan spasi
console.info(input);
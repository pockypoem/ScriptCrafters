// Number

const input = "12345";
const number = Number(input);

console.info(typeof input); // string
console.info(typeof number); // number

console.info(Number("salah")); // NaN


console.info(Number.MIN_VALUE); // 5e-324
console.info(Number.MAX_VALUE); // 1.7976931348623157e+308
console.info(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.info(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.info(Number.NaN);


// Number Static Method
const data = Number('1254634');

console.info(Number.isInteger(data));
console.info(Number.isNaN(data));


// Number Instance Method
const value = Number(12345);
console.info(value.toString(2)); // base 2 (radixnya 2) -> binary
console.info(value.toLocaleString("id-ID"));
console.info(value.toLocaleString("en-US"));
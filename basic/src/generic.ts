// Generic
// tipe data yang dinamis

function getData(value : any) {
    return value;
}


console.log(getData("Pockypoem").length);
console.log(getData(123).length); // undefined : merupakan kendala dari any


// Generic function
// Bebas ga harus T (tapi udah jadi standar)
function myData<T>(value : T) {
    return value;
}

console.log(myData("Mikael").length);
// console.log(myData(123).length); otomatis ada warning error karena number ga bisa .length()
console.log(myData(123));

// generic in arrow func
const arrowFunc = <T>(value : T) => {

}

// Tapi kalau pake JSX
// const arrowFunc = <T extends unknown>(value : T) => {
    
// }

// const arrowFunc = <T extends {}>(value : T) => {
    
// }

// const arrowFunc = <T, >(value : T) => {
    
// }
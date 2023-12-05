// tipe data pada balikan function

function getName() : string {
    return "Helo, my name is Pockypoem";
}

console.log(getName());


function getAge() : number {
    return 20;
}

console.log(getAge());


function printName() : void {
    console.log("print name!!");
}

printName();


// ///////

function multiply(val1 : number, val2 : number) : number {
    return val1 * val2;
}

console.log(multiply(2,3));


// function as type

// type Age = number;

// let age : Age = 123;

type Tambah = (val1 : number, val2 : number) => number;

const Add : Tambah = (val1 : number, val2 : number) : number => {
    return val1 + val2;
}



// default parameter
const fullName = (first: string, last: string = "Manggarawan") : string => {
    return first + " " + last;
} 

console.log(fullName("Vano"));
console.log(fullName("Mikael", "Ronald"));



// Optional Parameter
// kalau parameter kedua ga diisi maka akan diisi undefined
const getUmur = (val1: string, val2?: string) : string => {
    return val1 + " " + val2;
}

console.log(getUmur("A", "B")); // A B
console.log(getUmur("A")); // A undefined

class List<T> {
    private data : T[];

    constructor(...elements : T[]) {
        this.data = elements;
    }

    add(element : T) : void {
        this.data.push(element);
    }

    addMultiple(...elements : T[]) : void {
        this.data.push(...elements);
    }

    getAll() : T[] {
        return this.data;
    }
}

let numbers = new List<number>(1, 2, 3); // isi dari list harus number semua
console.log(numbers.getAll());

numbers.add(4);
console.log(numbers.getAll());

numbers.addMultiple(5, 6, 7);
console.log(numbers.getAll());

console.log("\n");

let random = new List<number | string>(1, "a", "b", 2);
console.log(random.getAll());

random.add("haloo");
random.addMultiple(123, "Lohaa");
console.log(random.getAll());
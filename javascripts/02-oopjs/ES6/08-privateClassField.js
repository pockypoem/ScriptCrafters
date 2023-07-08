// Private Class Field
// Jika ingin membuat field bersifat private, bisa menggunakan tanda # sebelum nama fieldnya
// Hanya bisa diakses dari dalam class saja.

class Counter {

    #counter = 0; // private class field

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }

}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

// counter.#counter = 3; -> tidak akan bisa diakses karena private

console.info(counter.get());

counter.decrement();
counter.decrement();

console.info(counter.get());
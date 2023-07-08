// Try Finally

class Counter {
    constructor() {
        this.value = 1;
    }

    next() {
        try {
            return this.value;
        } finally {
            this.value++;
        }
    }
}

const counter = new Counter();

console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
console.info(counter.next());
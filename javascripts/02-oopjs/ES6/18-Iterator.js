// Iterable dan Iterator

class CounterIteratorResult {
    constructor(value, done) {
        this.done = done;
        this.value = value;
    }
}

class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try {
            if(this.value > this.max) {
                return new CounterIteratorResult(this.value, true);
            } else {
                return new CounterIteratorResult(this.value, false);
            }
        } finally {
            this.value++;
        }
    }
}

// Counter Iterable
class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    [Symbol.iterator]() {
        return new CounterIterator(this.value, this.max);
    }
}


// menggunakan counter iterable
const counter = new Counter(1, 10);
for (const element of counter) {
    console.info(element);
}
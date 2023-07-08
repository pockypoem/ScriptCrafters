// Private Class Method
// Jika ingin membuat method bersifat private, bisa menggunakan tanda # sebelum nama methodnya
// Hanya bisa diakses dari dalam class saja.

class Person {

    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.info(`Hello`);
    }

    #sayWithName(name) {
        console.info(`Hello ${name}`);
    }

}

const pocky = new Person();
pocky.say("Pocky");
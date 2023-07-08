// Static Method
// Method menjadi milik class bukan miliki prototype

class MathUtil {

    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }

        return total;
    }

}

const sum = MathUtil.sum(1, 1, 1, 1, 1, 1);
console.info(sum);
// Throw Error

class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error("Total parameter harus lebih dari 0");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }

        return result;
    }
}

// console.info(MathUtil.sum()); // -> Trigger Error
console.info(MathUtil.sum(1, 1, 1, 1, 1));
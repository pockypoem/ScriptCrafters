// Class Error
// Alangkah baiknya kita membedakan tiap jenis error

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new ValidationError("Total parameter harus lebih dari 0", "numbers");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }

        return result;
    }
}

try {
    console.info(MathUtil.sum());
    console.info("Kode Block Try akan berhenti");
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Terjadi error di filed ${error.field} dengan error: ${error.message}`);
    } else {
        console.error(`Terjadi error: ${error.message}`);
    }
} finally {
    console.info("Kode Program Selesai");
}

console.info("Kode Program Tidak Akan Berhenti");
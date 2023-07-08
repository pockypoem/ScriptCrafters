// Error Handling

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

try {
    console.info(MathUtil.sum());
    console.info("Kode Block Try akan berhenti");
} catch (error) {
    console.error(`Terjadi error: ${error.message}`);
} finally {
    console.info("Kode Program Selesai");
}

console.info("Kode Program Tidak Akan Berhenti");
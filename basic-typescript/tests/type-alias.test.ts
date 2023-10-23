import { Category, Product } from "../src/type-alias";

describe('Type Alias', function() {
    it('should support in typescript', function() {

        const category : Category = {
            id: 1,
            name: "Handphone"
        };

        const product : Product = {
            id: "1",
            name: "Samsung S20",
            price: 20000000,
            category: category
        };

        // product.description = "Test"; // Tidak boleh, karena attribute tidak dideklarasikan pada tipe data Alias

        console.info(category);
        console.info(product);

    });
});
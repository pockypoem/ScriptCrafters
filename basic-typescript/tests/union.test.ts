describe('Union Type', function() {
    it('should support in typescript', function() {

        let sample: number | string | boolean = "Pocky";
        console.info(sample);

        sample = 100;
        console.info(sample);

        sample = true;
        console.info(sample);

        // sample = []; // Error karena array tidak kita perbolehkan di union type di atas

    });

    it('should support typeof operator', function() {

        function process(value: number | string | boolean) {
            if(typeof value === "string") {
                return value.toUpperCase();
            } else if (typeof value === "number") {
                return value + 2;
            } else {
                return !value;
            }
        }

        expect(process("Pocky")).toBe("POCKY");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);

    });
})
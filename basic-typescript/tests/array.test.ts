describe('Array', function() {
    it('should same with javascript', function() {

        const names: string[] = ["pocky", "kevin", "joko"];
        const values: number[] = [1, 2, 3];

        console.info(names);
        console.info(values);

    });


    it('should support readonly array', function() {

        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);

        // coba ganti
        // hobbies[0] = "Main Game"; -> ERROR

    });

    it('should support tupple', function() {

        const person : readonly [string, string, number] = ["Pocky", "Cornelis", 20];
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Budi"; // Error: karena readonly

    });

})
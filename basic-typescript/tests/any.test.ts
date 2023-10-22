describe("Any", function() {
    it('should support in typescript', function() {

        const person : any = {
            id: 1,
            name: "Jeremyas Cornelis",
            age: 21
        };

        person.age = 25;
        person.address = "Indonesia";

        console.info(person);

    });
});
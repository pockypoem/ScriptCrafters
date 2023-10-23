describe('Object', function() {
    it('should support in typescript', function() {

        const person : {id: string, name:string, hobbies?:string[] } = {
            id: "1",
            name: "Pocky"
        };

        console.info(person);

        person.id = "2";
        person.name = "Cornelis";
        // person.description = "a"; // akan error karena tidak masuk dalam declaration di Object

        console.info(person);

    });
});
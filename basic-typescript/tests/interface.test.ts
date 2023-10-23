import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe('Interface', function() {
    it('should support in typescript', function() {

        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "12312321",
            npwp: "23123123"
        };

        seller.name = "Toko Pockyy"; // boleh dan bisa diubah

        // seller.nib = "435343432"; // Error: Tidak bisa mengubah nilai nib karena readonly property

        console.info(seller);

    });

    it('should support function interface', function() {

        interface AddFunction {
            (value1: number, value2: number) : number;
        }

        const add : AddFunction = (value1: number, value2: number) : number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);

    });


    it('should support indexable interface', function() {

        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Jeremyas", "Cornelis", "Abigail"];

        console.info(names);

    });


    it('should support indexable interface for non number index', function() {

        interface StringDictionary {
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            "name": "Pocky",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Pocky");
        expect(dictionary["address"]).toBe("Indonesia");


    });


    it('should support extend interface', function() {

        const employee: Employee = {
            id: "1",
            name: "Pocky",
            division: "IT"
        };

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Cornelis",
            division: "IT",
            numberOfEmployees: 10
        };

        console.info(manager);

    });


    it('should support function in interface', function() {

        const person: Person = {
            name: "Pocky",
            sayHello: function(name:string) : string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };

        console.info(person.sayHello("Budi"));

    });


    it('should support intersection types', function() {

        interface HasName {
            name: string
        }

        interface HasId {
            id: string
        }


        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Vano"
        };

        console.info(domain);

    });


    it('should support type assertions', function() {

        const person: any = {
            name: "Mikael",
            age: 30
        }

        const person2 : Person = person as Person; // harus dicek lagi karena ditakutkan datanya tidak ada
        // seperti contoh di atas, pada Person tidak ada attribute age, tapi object person punya attribute age

        // person2.age = 30; // ERROR: karena di struktur interface Person tidak ada atribute age

        // Tapi bisa panggil tiba-tiba function sayHello
        // person2.sayHello("Kezia"); // ERROR: karena sayHello di dalam Object Person

        console.info(person2);



    });




});
export class User {
    public name : string;

    constructor(name : string, public age : number) {
        this.name = name;
    }

    setName(value : string) : void {
        this.name = value;
    }

    getName = () : string => {
        return this.name;
    }
}

// let user = new User("Naufall", 30);
// console.log(user.name);
// console.log(user.age);


// public = bisa di akses di semua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan class turunannya
// private = hanya bisa di akses dari class itu sendiri

class Admin extends User {
    read : boolean = true;
    write : boolean = true;
    phone : string;
    private _email : string = "";
    static getRoleName : string = "Admin";

    constructor(phone : string, name: string, age:number) {
        super(name, age);
        this.phone = phone;
    }

    static getNameRole() {
        return "HEIIII";
    }

    getRole() : { read: boolean, write: boolean } {
        return {
            read : this.read,
            write : this.write 
        }
    };

    set email(value: string) {
        if(value.length < 5) {
            this._email = "Email salah";
        } else {
            this._email = value;
        }
    }

    get email() : string {
        return this._email;
    }
}

// let admin = new Admin("081234599823", 'Toni', 25 );
// console.log(admin.getName());
// console.log(admin.getRole());
// admin.setName("Mikael");
// console.log(admin.getName());
// console.log(admin.phone);

// admin.email = "admin@pockypoem.com";
// console.log(admin.email);

let admin = Admin.getRoleName;
console.log(admin);
console.log(Admin.getNameRole());
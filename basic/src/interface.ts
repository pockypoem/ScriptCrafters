interface Laptop {
    name : string;
    on() : void;
    off() : void;
}

class Asus implements Laptop {
    name: string;
    isGaming : boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }

    on(): void {
        console.log("Asus Nyala");
    }
    off(): void {
        console.log("Asus Mati");
    }
}

class Macbook implements Laptop {
    name: string;
    keyboardLight : boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }

    on(): void {
        console.log("Macbook Nyala");
    }
    off(): void {
        console.log("Macbook Mati");
    }
    
}

let asus = new Asus('Asus', true);
asus.on();
asus.off();

let mb = new Macbook('MBP', true);
mb.on();
mb.off();
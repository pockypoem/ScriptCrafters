// Proxy

//TODO: Membuat Handler

const target = {
    middleName: "Kurniawan"
}

//TODO: Log Handler
const handlerObject = {
    get: function(target, property) {
        console.info(`Access property ${property}`);
        return target[property];
    },
    set: function(target, property, value) {
        console.info(`Change property ${property} : ${value}`);
        //TODO: Add Validation 
        if(value == null) {
            throw new Error("Tidak boleh null");
        } else {
            target[property] = value;
        }
    }
};

//TODO: Membuat Proxy

const proxy = new Proxy(target, handlerObject);
proxy.firstName = "Kevin";
proxy.lastName = "Brian";

console.info(proxy.firstName);
console.info(proxy.middleName);
console.info(proxy.lastName);
console.info(target);

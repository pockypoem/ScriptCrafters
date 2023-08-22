// Promise<String>
function getNamePromise() {
    return new Promise(function (resolve, reject) {
        resolve("Pocky Promise");
    })
}

// Promise<String>
async function getNameAsync() {
    return "Pockyy Async";
}




getNamePromise()
    .then((name) => console.info(name));

getNameAsync()
    .then((name) => console.info(name));
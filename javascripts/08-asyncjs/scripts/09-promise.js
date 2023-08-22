
const promise = new Promise(function (resolve, reject) {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "api/product.json");
    ajax.onload = function() {
        if(ajax.status === 200) {
            resolve(JSON.parse(ajax.responseText));
        } else {
            reject(`Error get product with response ${ajax.responseText}`);
        }
    };

    ajax.send();
});

console.info(promise);

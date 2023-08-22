// Promise<JSON Product>
function getProduct() {
    const request = new Request("api/product.json", {
        method: "GET",  
    });

    const response = fetch(request);

    return response.then((response) => response.json());
}

getProduct()
    .then((product) => console.info(product));


// Promise<String ProductName>
function getProductNamePromise() {

    return new Promise(function (resolve, reject) {
        getProduct()
            .then((product) => resolve(product.name))
            .catch((error) => reject(error));
    })
}

getProductNamePromise()
    .then((productName) => console.info(productName));



// Async Await
async function getProductNameAsync() {
    try {
        const product = await getProduct(); // menunggu data product ada
        return product.name;
    } catch(e) {
        return "Product Not Found";
    } finally {
        console.info("Finallyyy");
    }
}

getProductNameAsync()
    .then((productName) => console.info(productName));
function getProduct(product) {
    return new Promise(function (resolve, reject) {
        const ajax = new XMLHttpRequest();
        ajax.open("GET", `api/${product}.json`);
        ajax.onload = function() {
            if(ajax.status === 200) {
                resolve(ajax.responseText);
            } else {
                reject(`Error get product with response ${ajax.status}`);
            }
        };
    
        ajax.send();
    });
}


const promise = Promise.all([
    getProduct("product1"),
    getProduct("product2"),
    getProduct("product3")
]);


promise.then(function(products) {

    const tbody = document.querySelector("tbody");

    products.forEach(function(productJSON) {
        const product = JSON.parse(productJSON);

        // id
        const idRow = document.createElement("tr");
        idRow.classList.add("productId-row");

        const tdProductId = document.createElement("td");
        tdProductId.textContent = "Id: ";
        idRow.appendChild(tdProductId);
        const productIdCell = document.createElement("td");
        productIdCell.textContent = product.id;
        idRow.appendChild(productIdCell);

        // name
        const nameRow = document.createElement("tr");
        nameRow.classList.add("productName-row");

        const tdProductName = document.createElement("td");
        tdProductName.textContent = "Name: ";
        nameRow.appendChild(tdProductName);
        const productNameCell = document.createElement("td");
        productNameCell.textContent = product.name;
        nameRow.appendChild(productNameCell);

        // price
        const priceRow = document.createElement("tr");
        priceRow.classList.add("productPrice-row");

        const tdProductPrice = document.createElement("td");
        tdProductPrice.textContent = "Price: ";
        priceRow.appendChild(tdProductPrice);
        const productPriceCell = document.createElement("td");
        productPriceCell.textContent = product.price;
        priceRow.appendChild(productPriceCell);

        const brElement = document.createElement("br");
        

        tbody.appendChild(idRow);
        tbody.appendChild(nameRow);
        tbody.appendChild(priceRow);
        tbody.appendChild(brElement);


    })
});
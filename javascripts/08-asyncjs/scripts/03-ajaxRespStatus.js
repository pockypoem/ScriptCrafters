const ajax = new XMLHttpRequest();

// TODO: GET DATA
ajax.open('GET', 'api/hello.json');
// ajax.open('GET', 'http:localhost:8080/api/hello.json');


function displayResponse(json) {
    const header = document.getElementById("response");
    header.textContent = json.response;
}


// TODO: RECEIVE DATA
ajax.addEventListener("load", function() {
    
    console.info(ajax.status)

    if(ajax.status === 200) {
        const json = JSON.parse(ajax.responseText);
        
        displayResponse(json);

    } else {
        displayResponse({
            response: `Terjadi kesalahan dengan status ${ajax.status}`
        })
    }

});



ajax.send(); 


const ajax = new XMLHttpRequest();

// TODO: GET DATA
ajax.open('GET', 'api/hello.json');
// ajax.open('GET', 'http:localhost:8080/api/hello.json');

// TODO: RECEIVE DATA
// ajax.onload = callback; // menggunakan onload (hanya bisa satu callback) 
ajax.addEventListener("load", function() {
    
    // convert JSON string to Javascript Object
    const json = JSON.parse(ajax.responseText);
    
    const header = document.getElementById("response");
    header.textContent = json.response;

});

// const text = "{\n" +
//     " \"response\" : \"Hello Pocky\"\n" +
//     "}\n";

// console.info(text);



ajax.send(); // send request
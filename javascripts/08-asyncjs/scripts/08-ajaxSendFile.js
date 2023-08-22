function doRegister() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://eo8rureaminmkm7.m.pipedream.net");
    

    ajax.onload = function() {

        const response = document.getElementById("response");
        if(ajax.status === 200) {

            response.innerText = `{"success": true}`;
        } else {
            response.innerText = `Terjadi kesalahan dengan status ${ajax.status}`;
        }
    }

    // tidak perlu menentukan content-type, otomatis multipart ketika menggunakan FormData()
    
    const form = new FormData();
    form.append("username", document.getElementById("username").value);
    form.append("name", document.getElementById("name").value);

    const files = document.getElementById("profile").files; //files = fileList 
    const firstFile = files.item(0);

    form.append("profile", firstFile); 

    ajax.send(form);
}

document.getElementById("register").onclick = doRegister
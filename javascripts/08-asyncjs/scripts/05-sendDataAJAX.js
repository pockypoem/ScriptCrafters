function doLogin() {
    const ajax = new XMLHttpRequest();
    ajax.open("POST", "https://eo8rureaminmkm7.m.pipedream.net");
    
    // kalau udah selesai, tampilkan response AJAX
    ajax.onload = function() {
        // console.info(ajax.responseText);
        const response = document.getElementById("response");
        if(ajax.status === 200) {

            response.innerText = `{"success": true}`;
        } else {
            response.innerText = `Terjadi kesalahan dengan status ${ajax.status}`;
        }
    }

    ajax.setRequestHeader('Content-Type', 'application/json');
    // yang kita kirim bukan dalam bentuk JSObject tapi string
    ajax.send(JSON.stringify({
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    }));
}

document.getElementById("login").onclick = doLogin
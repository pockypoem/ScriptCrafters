function doLogin() {
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

    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
    const form = new URLSearchParams();
    form.append("username", document.getElementById("username").value);
    form.append("password", document.getElementById("password").value);

    ajax.send(form);
}

document.getElementById("login").onclick = doLogin
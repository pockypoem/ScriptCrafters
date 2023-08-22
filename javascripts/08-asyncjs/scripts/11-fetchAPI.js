function doLogin() {
    const request = new Request("https://pockypoemjsasync.free.beeceptor.com", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    });

    // Promise<Response>
    const response = fetch(request);

    response
        .then((response) => response.json())
        .then(function(json) {
            document.getElementById("response").textContent = json.status;
        })
        .catch(function(error) {
            document.getElementById("response").textContent = error;
        })
}

document.getElementById("login").onclick = doLogin;


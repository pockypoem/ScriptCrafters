function doSearch() {
    const ajax = new XMLHttpRequest();

    const param = new URLSearchParams();
    param.append("search", document.getElementById("search").value);
    param.append("filter", document.getElementById("search").value);

    // auto: "search=xxxx&filter=yyy"

    ajax.open("GET", `https://eo8rureaminmkm7.m.pipedream.net?${param.toString()}`);
    

    ajax.onload = function() {

        const response = document.getElementById("response");
        if(ajax.status === 200) {

            response.innerText = `{"success": true}`;
        } else {
            response.innerText = `Terjadi kesalahan dengan status ${ajax.status}`;
        }
    }

    

    ajax.send();
}

document.getElementById("searchButton").onclick = doSearch
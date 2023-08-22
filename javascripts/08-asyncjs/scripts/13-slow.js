function showLog(total) {
    for (let i = 0; i < total; i++) {
        console.log(i);
    }
}

document.getElementById("buttonTask").onclick = function() {
    console.info("Start Log");
    showLog(100000);
    console.info("End Log");
}
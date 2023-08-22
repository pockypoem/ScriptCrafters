const worker = new Worker("scripts/worker.js");
// worker.onmessage = callback

worker.addEventListener("message", function(message) {
    console.info(message.data);
});

document.getElementById("buttonTask").onclick = function() {
    worker.postMessage(100000);
}
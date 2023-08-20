const canvas = document.getElementById("canvas");
const text = document.getElementById("text");

canvas.onclick = function (event) {
    text.textContent = `You Click At (${event.x}, ${event.y})`;
}
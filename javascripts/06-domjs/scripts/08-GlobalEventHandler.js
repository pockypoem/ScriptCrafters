const clickMe = document.getElementById("clickMe");

clickMe.onclick = function() {
    clickMe.setAttribute("value", "You Already Click Me!");
    console.info("button di click");
}
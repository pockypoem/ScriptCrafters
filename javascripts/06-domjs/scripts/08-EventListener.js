const clickMe = document.getElementById("clickMe");

clickMe.addEventListener("click", function() {
    clickMe.setAttribute("value", "You Already Click Me!");
});